import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceSlide = ({ data, index }) => {
    const slideRef = useRef(null);
    const bgRef = useRef(null);
    const btnRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Setup initial states to avoid FOUC and prepare for blur-to-clear and opacity transitions
            gsap.set(".slide-label", { opacity: 0, y: 30, filter: "blur(10px)" });
            gsap.set(".slide-title", { opacity: 0, y: 40, filter: "blur(15px)" });
            gsap.set(".slide-desc", { opacity: 0, y: 30, filter: "blur(10px)" });
            gsap.set(".slide-cta", { opacity: 0, y: 20, filter: "blur(5px)" });

            // 1. Content entrance timeline: staggered fade, slide-up, and blur-to-clear
            gsap.timeline({
                scrollTrigger: {
                    trigger: slideRef.current,
                    start: "top 75%",
                    toggleActions: "play reverse play reverse",
                    once: false
                }
            })
                .to(".slide-label", {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out"
                })
                .to(".slide-title", {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.5,
                    ease: "power4.out"
                }, "-=0.9")
                .to(".slide-desc", {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=1.0")
                .to(".slide-cta", {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.0,
                    ease: "power2.out"
                }, "-=0.8");

            // 2. Background zoom/fade triggered on entry
            if (index === 0) {
                gsap.fromTo(bgRef.current,
                    { scale: 1.15, opacity: 0.85 },
                    {
                        scale: 1.0,
                        opacity: 1.0,
                        duration: 4.0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: slideRef.current,
                            start: "top 90%",
                            toggleActions: "play reverse play reverse",
                            once: false
                        }
                    }
                );
            } else {
                // For Slide 2 and 3: scale reveal the image
                gsap.fromTo(bgRef.current,
                    { scale: 1.15, opacity: 0.8 },
                    {
                        scale: 1.0,
                        opacity: 1.0,
                        duration: 3.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: slideRef.current,
                            start: "top 80%",
                            toggleActions: "play reverse play reverse",
                            once: false
                        }
                    }
                );

                // Gentle image parallax scroll effect (no scrub)
                const ySetter = gsap.quickSetter(bgRef.current, "y", "px");
                ScrollTrigger.create({
                    trigger: slideRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    onUpdate: (self) => {
                        ySetter((self.progress - 0.5) * 60);
                    }
                });
            }

            // 3. Subtle button hover animation
            const button = btnRef.current;
            if (button) {
                const onEnter = () => {
                    gsap.to(button, {
                        scale: 1.04,
                        backgroundColor: index === 0 ? "rgba(255, 255, 255, 1)" : "rgba(10, 10, 10, 1)",
                        color: index === 0 ? "#0a0a0a" : "#ffffff",
                        borderColor: index === 0 ? "rgba(255, 255, 255, 1)" : "rgba(10, 10, 10, 1)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                const onLeave = () => {
                    gsap.to(button, {
                        scale: 1,
                        backgroundColor: index === 0 ? "rgba(255, 255, 255, 0.15)" : "rgba(10, 10, 10, 0)",
                        color: index === 0 ? "#ffffff" : "#0a0a0a",
                        borderColor: index === 0 ? "rgba(255, 255, 255, 0.2)" : "rgba(10, 10, 10, 0.35)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                button.addEventListener("mouseenter", onEnter);
                button.addEventListener("mouseleave", onLeave);

                return () => {
                    button.removeEventListener("mouseenter", onEnter);
                    button.removeEventListener("mouseleave", onLeave);
                };
            }
        }, slideRef);

        return () => ctx.revert();
    }, [index]);

    if (index === 0) {
        return (
            <section
                ref={slideRef}
                id={`service-slide-${index}`}
                className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0a0a0a]"
            >
                {/* Background Media Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div ref={bgRef} className="w-full h-full origin-center will-change-transform">
                        <video
                            muted
                            playsInline
                            autoPlay
                            loop
                            className="w-full h-full object-cover object-center pointer-events-none"
                            src={data.src}
                        />
                    </div>
                    {/* Cinematic Overlays for Content Readability */}
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/65" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-3 md:gap-4 max-w-4xl">
                    <span className="slide-label text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/50 font-medium block">
                        {data.label}
                    </span>
                    <h2 className="slide-title text-3xl sm:text-5xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05] font-light max-w-3xl">
                        {data.title}
                    </h2>
                    <p className="slide-desc max-w-xl text-white/60 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-wide mt-2">
                        {data.description}
                    </p>

                    {/* Explore Button */}
                    <div className="slide-cta mt-4">
                        <button
                            ref={btnRef}
                            onClick={() => navigate('/bespoke')}
                            className="px-6 py-3 rounded-full bg-white/15 text-white border border-white/20 font-medium text-xs tracking-[0.2em] uppercase transition-all select-none cursor-pointer"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    if (index === 1) {
        return (
            <section
                ref={slideRef}
                id={`service-slide-${index}`}
                className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#faf9f6] py-24 md:py-32 px-6 md:px-12 lg:px-20"
            >
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Large Image */}
                    <div className="lg:col-span-7 w-full overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-[1rem] shadow-sm relative bg-[#faf9f6]">
                        <img
                            ref={bgRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[115%] object-cover pointer-events-none will-change-transform"
                            alt={data.label}
                            src={data.src}
                        />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 text-left">
                        <span className="slide-label text-[10px] sm:text-xs uppercase tracking-[0.35em] text-luxury-black/50 font-medium block">
                            {data.label}
                        </span>
                        <h2 className="slide-title text-3xl sm:text-5xl lg:text-6xl font-serif text-luxury-black tracking-tight leading-[1.1] font-light">
                            {data.title}
                        </h2>
                        <p className="slide-desc max-w-xl text-luxury-black/65 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-wide mt-2">
                            {data.description}
                        </p>

                        {/* Explore Button */}
                        <div className="slide-cta mt-4">
                            <button
                                ref={btnRef}
                                onClick={() => navigate('/precision-manufacturing')}
                                className="px-6 py-3 rounded-full bg-transparent text-luxury-black border border-luxury-black/35 font-medium text-xs tracking-[0.2em] uppercase transition-all select-none cursor-pointer"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (index === 2) {
        return (
            <section
                ref={slideRef}
                id={`service-slide-${index}`}
                className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#f5f5f2] py-24 md:py-32 px-6 md:px-12 lg:px-20"
            >
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Text Content (Stacks below image on mobile/tablet) */}
                    <div className="order-last lg:order-first lg:col-span-5 flex flex-col gap-3 md:gap-4 text-left">
                        <span className="slide-label text-[10px] sm:text-xs uppercase tracking-[0.35em] text-luxury-black/50 font-medium block">
                            {data.label}
                        </span>
                        <h2 className="slide-title text-3xl sm:text-5xl lg:text-6xl font-serif text-luxury-black tracking-tight leading-[1.1] font-light">
                            {data.title}
                        </h2>
                        <p className="slide-desc max-w-xl text-luxury-black/65 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-wide mt-2">
                            {data.description}
                        </p>

                        {/* Explore Button */}
                        <div className="slide-cta mt-4">
                            <button
                                ref={btnRef}
                                onClick={() => navigate('/digital-ecosystems')}
                                className="px-6 py-3 rounded-full bg-transparent text-luxury-black border border-luxury-black/35 font-medium text-xs tracking-[0.2em] uppercase transition-all select-none cursor-pointer"
                            >
                                Explore
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Mockup/Image */}
                    <div className="order-first lg:order-last lg:col-span-7 w-full overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-[1rem] shadow-sm relative bg-[#f5f5f2]">
                        <img
                            ref={bgRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[115%] object-cover pointer-events-none will-change-transform"
                            alt={data.label}
                            src={data.src}
                        />
                    </div>
                </div>
            </section>
        );
    }

    return null;
};

export default ServiceSlide;
