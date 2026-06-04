import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import luxuryBg from '../assets/luxury_jewelry_editorial.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const btnRef = useRef(null);
    const indicatorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation states for elegant masking
            gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
            gsap.set(".hero-title-word", { yPercent: 110, rotateX: -15, transformOrigin: "0% 100%" });
            gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
            gsap.set(".hero-cta", { opacity: 0, y: 30 });
            gsap.set(".hero-scroll-indicator", { opacity: 0, x: -20 });

            // Background cinematic slow-zoom entrance
            gsap.fromTo(
                bgRef.current,
                { scale: 1.15, filter: "brightness(0.8) contrast(1.1)" },
                {
                    scale: 1.05,
                    filter: "brightness(1) contrast(1)",
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
                yPercent: 0,
                rotateX: 0,
                duration: 1.8,
                stagger: 0.15,
                ease: "power4.out"
            }, 0.2)
            .to(".hero-subtitle", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 0.8)
            .to(".hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            }, 1)
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

            // Button hover effect (Outlined to fill / magnetic feel)
            const button = btnRef.current;
            if (button) {
                button.addEventListener("mouseenter", () => {
                    gsap.to(button, {
                        backgroundColor: "#c5a059", // luxury-gold
                        color: "#0a0a0a", // luxury-black
                        borderColor: "#c5a059",
                        scale: 1.03,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                });

                button.addEventListener("mouseleave", () => {
                    gsap.to(button, {
                        backgroundColor: "transparent",
                        color: "#faf9f6", // luxury-white
                        borderColor: "rgba(250, 249, 246, 0.4)",
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                });
            }

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
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-[110%] bg-cover bg-[position:68%_center] sm:bg-[position:65%_center] md:bg-[position:60%_center] lg:bg-[position:70%_center] origin-center will-change-transform"
                    style={{ backgroundImage: `url(${luxuryBg})` }}
                ></div>
                {/* Dramatic Editorial Gradient: Darkens the left side for perfect text legibility while keeping the right bright */}
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* High-End Editorial Content */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto mt-20 md:mt-0">
                <div className="max-w-2xl lg:max-w-4xl flex flex-col items-start">
                    
                    {/* Eyebrow */}
                    <div className="hero-eyebrow flex items-center gap-4 mb-6 md:mb-10">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.35em] text-luxury-gold font-medium">
                            CD. Fine Artistry
                        </span>
                    </div>

                    {/* Dramatic Typography */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-serif text-luxury-white tracking-tighter leading-[0.95] mb-8 font-light perspective-1000">
                        <div className="overflow-hidden pb-2">
                            <span className="block hero-title-word text-luxury-white">
                                Fine Jewelry,
                            </span>
                        </div>
                        <div className="overflow-hidden pb-4">
                            <span className="block hero-title-word italic text-luxury-gold font-light opacity-90 pr-4">
                                Simplified.
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-sm sm:text-base md:text-lg text-luxury-white/80 font-light max-w-md lg:max-w-lg leading-[1.8] tracking-wide mb-12">
                        The digital infrastructure for modern jewelry brands. From exclusive design conceptualization to global delivery, we power your sophisticated growth.
                    </p>

                    {/* CTA Button */}
                    <div className="hero-cta">
                        <button
                            ref={btnRef}
                            className="px-8 py-4 sm:px-10 sm:py-5 border border-luxury-white/40 bg-transparent text-luxury-white font-medium text-[10px] sm:text-[11px] tracking-[0.25em] uppercase cursor-pointer backdrop-blur-sm"
                            onClick={() => window.open("https://catalog.carpediam.in/", "_blank")}
                        >
                            View Catalogue
                        </button>
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