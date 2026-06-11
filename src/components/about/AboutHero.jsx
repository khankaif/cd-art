import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(".about-hero-line", { yPercent: 120, rotateX: -10, opacity: 0 });
            gsap.set(".about-hero-eyebrow", { opacity: 0, y: 20 });
            gsap.set(".about-hero-desc", { opacity: 0, y: 30 });
            gsap.set(".about-hero-indicator", { opacity: 0, scale: 0.8 });

            // Background cinematic entrance
            gsap.fromTo(
                bgRef.current,
                { scale: 1.15, filter: "brightness(0.7) contrast(1.1)" },
                {
                    scale: 1.05,
                    filter: "brightness(0.9) contrast(1)",
                    duration: 4,
                    ease: "power3.out"
                }
            );

            // Editorial Typographic Reveal
            const tl = gsap.timeline({ delay: 0.3 });

            tl.to(".about-hero-eyebrow", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0)
            .to(".about-hero-line", {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1.6,
                stagger: 0.15,
                ease: "power4.out"
            }, 0.2)
            .to(".about-hero-desc", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0.8)
            .to(".about-hero-indicator", {
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: "power3.out"
            }, 1.2);

            // Parallax scroll effect
            gsap.to(bgRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={heroRef} 
            className="relative min-h-[100dvh] w-full flex flex-col justify-center items-start overflow-hidden bg-luxury-black"
        >
            {/* Architectural Dark Background */}
            <div className="absolute inset-0 z-0 bg-luxury-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
            </div>

            {/* Editorial Content */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto mt-20 md:mt-0">
                <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start">
                    
                    {/* Eyebrow */}
                    <div className="about-hero-eyebrow flex items-center gap-4 mb-8 md:mb-12">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium">
                            Who We Are
                        </span>
                    </div>

                    {/* Dramatic Typography */}
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-serif text-luxury-white tracking-tighter leading-[0.95] mb-10 font-light perspective-1000">
                        <div className="overflow-hidden pb-2">
                            <span className="block about-hero-line text-luxury-white">
                                The intersection of
                            </span>
                        </div>
                        <div className="overflow-hidden pb-4">
                            <span className="block about-hero-line italic text-luxury-gold font-light opacity-90 pr-4">
                                tradition & technology.
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="about-hero-desc text-sm sm:text-base md:text-lg text-luxury-white/80 font-light max-w-md lg:max-w-xl leading-[1.8] tracking-wide border-l border-luxury-gold/30 pl-6 ml-2">
                        We build the digital architecture that empowers modern jewelry designers. By bridging artisanal handcrafting techniques with automated manufacturing frameworks, we redefine high-end curation.
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="about-hero-indicator absolute bottom-12 left-6 sm:left-12 lg:left-20 flex flex-col items-center">
                <div className="w-[1px] h-16 sm:h-24 bg-luxury-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold animate-[slideDown_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            {/* Inline keyframes for indicator */}
            <style jsx="true">{`
                @keyframes slideDown {
                    0% { transform: translateY(-100%); }
                    50% { transform: translateY(100%); }
                    100% { transform: translateY(200%); }
                }
            `}</style>
        </section>
    );
};

export default AboutHero;
