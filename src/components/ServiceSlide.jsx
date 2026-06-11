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
            gsap.set(".slide-label", { opacity: 0, y: 30 });
            gsap.set(".slide-title", { opacity: 0, y: 40 });
            gsap.set(".slide-desc", { opacity: 0, y: 30 });
            gsap.set(".slide-cta", { opacity: 0, y: 20 });

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
                    duration: 1.2,
                    ease: "power3.out"
                })
                .to(".slide-title", {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out"
                }, "-=0.9")
                .to(".slide-desc", {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=1.0")
                .to(".slide-cta", {
                    opacity: 1,
                    y: 0,
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

            // 3. (Button hover animations removed in favor of CSS editorial underlines)
        }, slideRef);

        return () => ctx.revert();
    }, [index]);

    if (index === 0) {
        return (
            <section
                ref={slideRef}
                id={`service-slide-${index}`}
                className="relative min-h-[85svh] md:min-h-[100svh] w-full flex flex-col justify-end pb-16 md:pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden bg-luxury-black"
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
                    {/* Cinematic Overlays */}
                    <div className="absolute inset-0 bg-luxury-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-luxury-black/50" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-4 max-w-5xl">
                    <div className="slide-label flex items-center gap-4">
                        <span className="w-[1px] h-10 bg-luxury-gold/50 hidden md:block"></span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-luxury-gold font-medium block">
                            {data.label}
                        </span>
                    </div>
                    
                    <h2 className="slide-title text-4xl sm:text-6xl lg:text-[5rem] font-serif text-luxury-white tracking-tighter leading-[1] font-light max-w-4xl">
                        {data.title}
                    </h2>
                    
                    <p className="slide-desc max-w-2xl text-luxury-white/70 text-sm sm:text-base md:text-lg font-light leading-[1.8] tracking-wide mt-2">
                        {data.description}
                    </p>

                    {/* Expertise Signals */}
                    <div className="slide-desc mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-luxury-white/50 font-light">
                        {data.signals && data.signals.map((signal, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4">
                                <span>{signal}</span>
                                {i < data.signals.length - 1 && <span className="text-luxury-gold/50">•</span>}
                            </div>
                        ))}
                    </div>

                    {/* Editorial Link */}
                    <div className="slide-cta mt-8 group">
                        <button
                            ref={btnRef}
                            onClick={() => navigate(data.link)}
                            className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-white pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer bg-transparent border-none p-0"
                        >
                            Discover Capabilities
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-white/20"></span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
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
                className="relative min-h-[85svh] md:min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-luxury-white py-24 md:py-32 px-6 sm:px-12 lg:px-20"
            >
                <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Left Column - Large Image */}
                    <div className="lg:col-span-8 w-full overflow-hidden aspect-[4/3] sm:aspect-[16/10] rounded-[14px] relative bg-luxury-white">
                        <img
                            ref={bgRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[115%] object-cover pointer-events-none will-change-transform"
                            alt={data.label}
                            src={data.src}
                        />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="lg:col-span-4 flex flex-col gap-4 text-left">
                        <div className="slide-label flex flex-col gap-4 items-start mb-2">
                            <span className="w-[1px] h-12 bg-luxury-gold/40"></span>
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-luxury-gold font-medium block">
                                {data.label}
                            </span>
                        </div>
                        
                        <h2 className="slide-title text-4xl sm:text-5xl lg:text-6xl font-serif text-luxury-black tracking-tighter leading-[1.05] font-light">
                            {data.title}
                        </h2>
                        
                        <p className="slide-desc text-luxury-black/60 text-sm sm:text-base font-light leading-[1.8] tracking-wide mt-2">
                            {data.description}
                        </p>

                        {/* Expertise Signals */}
                        <div className="slide-desc mt-4 flex flex-col gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-luxury-black/50 font-medium">
                            {data.signals && data.signals.map((signal, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-2 h-[1px] bg-luxury-gold/50"></span>
                                    <span>{signal}</span>
                                </div>
                            ))}
                        </div>

                        {/* Editorial Link */}
                        <div className="slide-cta mt-8 group self-start">
                            <button
                                ref={btnRef}
                                onClick={() => navigate(data.link)}
                                className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-black pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer bg-transparent border-none p-0"
                            >
                                Explore Capabilities
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-black/10"></span>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
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
                className="relative min-h-[85svh] md:min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-luxury-champagne py-24 md:py-32 px-6 sm:px-12 lg:px-20"
            >
                <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Left Column - Text Content */}
                    <div className="order-last lg:order-first lg:col-span-4 lg:col-start-2 flex flex-col gap-4 text-left">
                        <div className="slide-label flex flex-col gap-4 items-start mb-2">
                            <span className="w-[1px] h-12 bg-luxury-gold/40"></span>
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-luxury-gold font-medium block">
                                {data.label}
                            </span>
                        </div>
                        
                        <h2 className="slide-title text-4xl sm:text-5xl lg:text-6xl font-serif text-luxury-black tracking-tighter leading-[1.05] font-light">
                            {data.title}
                        </h2>
                        
                        <p className="slide-desc text-luxury-black/60 text-sm sm:text-base font-light leading-[1.8] tracking-wide mt-2">
                            {data.description}
                        </p>

                        {/* Expertise Signals */}
                        <div className="slide-desc mt-4 flex flex-col gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-luxury-black/50 font-medium">
                            {data.signals && data.signals.map((signal, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-2 h-[1px] bg-luxury-gold/50"></span>
                                    <span>{signal}</span>
                                </div>
                            ))}
                        </div>

                        {/* Editorial Link */}
                        <div className="slide-cta mt-8 group self-start">
                            <button
                                ref={btnRef}
                                onClick={() => navigate(data.link)}
                                className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-black pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer bg-transparent border-none p-0"
                            >
                                Explore Capabilities
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-black/10"></span>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Mockup/Image */}
                    <div className="order-first lg:order-last lg:col-span-7 w-full overflow-hidden aspect-[4/3] sm:aspect-[16/10] rounded-[14px] relative bg-luxury-champagne">
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
