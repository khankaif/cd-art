import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const indicatorRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation states for elegant masking
            gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
            gsap.set(".hero-title-word", { opacity: 0, y: 40 });
            gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
            gsap.set(".hero-cta", { opacity: 0, y: 30 });
            gsap.set(".hero-trust-layer", { opacity: 0, y: 20 });
            gsap.set(".hero-scroll-indicator", { opacity: 0, x: -20 });

            // Subtle background scale entrance
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1, opacity: 0.8 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 4,
                    ease: "power3.out"
                }
            );

            // Cinematic typographic reveal
            const tl = gsap.timeline({ delay: 0.2 });

            tl.to(".hero-eyebrow", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0)
            .to(".hero-title-word", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.2)
            .to(".hero-subtitle", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0.6)
            .to(".hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0.8)
            .to(".hero-trust-layer", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 1.0)
            .to(".hero-scroll-indicator", {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 1.2);

            // Subtle parallax scroll on background
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Button hover effects
            const buttons = [btnRef1.current, btnRef2.current];
            buttons.forEach((button, index) => {
                if (button) {
                    button.addEventListener("mouseenter", () => {
                        gsap.to(button, {
                            backgroundColor: index === 0 ? "#c5a059" : "rgba(255,255,255,0.1)",
                            color: index === 0 ? "#0a0a0a" : "#ffffff",
                            borderColor: index === 0 ? "#c5a059" : "rgba(250, 249, 246, 0.4)",
                            scale: 1.02,
                            duration: 0.5,
                            ease: "power3.out"
                        });
                    });

                    button.addEventListener("mouseleave", () => {
                        gsap.to(button, {
                            backgroundColor: "transparent",
                            color: "#faf9f6",
                            borderColor: "rgba(250, 249, 246, 0.4)",
                            scale: 1,
                            duration: 0.5,
                            ease: "power3.out"
                        });
                    });
                }
            });

            // Elegant horizontal scroll indicator animation
            const indicator = indicatorRef.current;
            if (indicator) {
                gsap.fromTo(
                    indicator,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 2.5,
                        repeat: -1,
                        ease: "power1.inOut"
                    }
                );
            }

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleScrollDown = () => {
        const target = document.getElementById('services-anchor');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100dvh] w-full overflow-hidden bg-luxury-black flex flex-col justify-center items-start"
        >
            {/* Architectural Typography Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-luxury-black">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-full opacity-30"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,1)_100%)]"></div>
                </div>
            </div>

            {/* High-End Editorial Content */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto mt-20 md:mt-0">
                <div className="max-w-3xl lg:max-w-5xl flex flex-col items-start">
                    
                    {/* Eyebrow */}
                    <div className="hero-eyebrow flex items-center gap-4 mb-6 md:mb-10">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.35em] text-luxury-gold font-medium">
                            CD. Fine Artistry & Manufacturing
                        </span>
                    </div>

                    {/* Dramatic Typography */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-serif text-luxury-white tracking-tighter leading-[1] mb-8 font-light perspective-1000">
                        <div className="overflow-hidden pb-2">
                            <span className="block hero-title-word text-luxury-white">
                                Master Craftsmanship.
                            </span>
                        </div>
                        <div className="overflow-hidden pb-4">
                            <span className="block hero-title-word italic text-luxury-gold font-light opacity-90 pr-4">
                                Manufactured at Scale.
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-sm sm:text-base md:text-lg text-luxury-white/80 font-light max-w-xl lg:max-w-2xl leading-[1.8] tracking-wide mb-12">
                        The trusted production partner for global jewellery houses. Bridging bespoke design expertise with uncompromising, high-volume manufacturing standards.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta flex flex-wrap gap-4 items-center mb-16">
                        <button
                            ref={btnRef1}
                            className="px-8 py-4 sm:px-10 sm:py-5 border border-luxury-white/40 bg-transparent text-luxury-white font-medium text-[10px] sm:text-[11px] tracking-[0.25em] uppercase cursor-pointer backdrop-blur-sm"
                            onClick={handleScrollDown}
                        >
                            Explore Capabilities
                        </button>
                        <button
                            ref={btnRef2}
                            className="px-8 py-4 sm:px-10 sm:py-5 border border-luxury-white/20 bg-transparent text-luxury-white/80 font-medium text-[10px] sm:text-[11px] tracking-[0.25em] uppercase cursor-pointer backdrop-blur-sm"
                            onClick={() => navigate('/contact')}
                        >
                            Discuss Your Collection
                        </button>
                    </div>

                    {/* Trust Layer */}
                    <div className="hero-trust-layer flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-luxury-white/50 font-light">
                        <span>Precision CAD Engineering</span>
                        <span className="text-luxury-gold">•</span>
                        <span>Master Gemstone Setting</span>
                        <span className="text-luxury-gold">•</span>
                        <span>Export-Grade Finishing</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="hero-scroll-indicator absolute bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-20 flex flex-row items-center cursor-pointer group pointer-events-auto"
                onClick={handleScrollDown}
            >
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-luxury-white/70 font-light mr-6 transition-colors duration-500 group-hover:text-luxury-white">
                    Discover
                </span>
                <div className="w-16 sm:w-24 h-[1px] bg-luxury-white/20 relative overflow-hidden">
                    <div
                        ref={indicatorRef}
                        className="absolute top-0 left-0 h-full w-full bg-luxury-white"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;