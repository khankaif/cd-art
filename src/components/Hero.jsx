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

            // Initial animation states
            gsap.set(".hero-eyebrow", { opacity: 0, y: 15 });
            gsap.set(".hero-title-line", { yPercent: 100 });
            gsap.set(".hero-subtitle", { opacity: 0, y: 20 });
            gsap.set(".hero-cta", { opacity: 0, y: 20 });
            gsap.set(".hero-scroll-indicator", { opacity: 0, y: 15 });

            // Background cinematic entrance
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1, opacity: 0 },
                {
                    scale: 1.05,
                    opacity: 1,
                    duration: 3,
                    ease: "power2.out"
                }
            );

            // Hero content reveal timeline (calm and elegant transitions)
            const tl = gsap.timeline();

            tl.to(".hero-eyebrow", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            }, 0.3)

                .to(".hero-title-line", {
                    yPercent: 0,
                    duration: 1.4,
                    stagger: 0.18,
                    ease: "power3.out"
                }, 0.5)

                .to(".hero-subtitle", {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }, 1.1)

                .to(".hero-cta", {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }, 1.3)

                .to(".hero-scroll-indicator", {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }, 1.5);

            // Gentle parallax scroll on background image
            if (bgRef.current) {
                gsap.fromTo(bgRef.current,
                    { yPercent: -4 },
                    {
                        yPercent: 4,
                        ease: "none",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }

            // Button hover animation (solid dark button styling)
            const button = btnRef.current;

            if (button) {
                button.addEventListener("mouseenter", () => {
                    gsap.to(button, {
                        scale: 1.02,
                        backgroundColor: "#2c2a27",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                button.addEventListener("mouseleave", () => {
                    gsap.to(button, {
                        scale: 1,
                        backgroundColor: "#0a0a0a",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
            }

            // Scroll indicator vertical line animation
            const indicator = indicatorRef.current;

            if (indicator) {
                gsap.fromTo(
                    indicator,
                    { y: "-100%" },
                    {
                        y: "200%",
                        duration: 2,
                        repeat: -1,
                        ease: "power2.inOut"
                    }
                );
            }

        }, heroRef);

        return () => ctx.revert();

    }, []);

    const handleScrollDown = () => {
        const target = document.getElementById('services-anchor');

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen min-h-[650px] w-full overflow-hidden bg-[#e4dfd5] border-b border-gray-200/50 flex items-center"
        >
            {/* Background Image & Editorial overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-[120%] bg-cover bg-[position:68%_center] sm:bg-[position:65%_center] md:bg-[position:60%_center] lg:bg-center origin-center will-change-transform"
                    style={{
                        backgroundImage: `url(${luxuryBg})`
                    }}
                ></div>

                {/* Ambient champagne fog overlay */}
                <div className="absolute inset-0 bg-[#e4dfd5]/35 backdrop-blur-[0.5px] pointer-events-none"></div>

                {/* Heavy left gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e4dfd5] via-[#e4dfd5]/95 via-[#e4dfd5]/75 to-transparent w-full md:w-[70%] lg:w-[60%] pointer-events-none"></div>

                {/* Custom radial vignette overlay framing all sides to the fog color */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_25%,#e4dfd5_90%)] pointer-events-none"></div>

                {/* Soft top gradient to prevent navbar overlap/hard line */}
                <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-[#e4dfd5]/80 via-[#e4dfd5]/30 to-transparent pointer-events-none"></div>

                {/* Canvas noise texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.012)_1px,transparent_1px)] [background-size:20px_20px] opacity-40 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pt-36 pb-32">
                <div className="max-w-2xl text-left flex flex-col items-start">
                    {/* Eyebrow */}
                    <span className="hero-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#9e8060] font-semibold mb-6 block">
                        CD. FINE ARTISTRY
                    </span>

                    {/* Heading */}
                    <h1 className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-serif text-luxury-black tracking-tight leading-[1.05] mb-8 font-light">
                        <div className="overflow-hidden py-1">
                            <span className="block hero-title-line">
                                Fine Jewelry,
                            </span>
                        </div>
                        <div className="overflow-hidden py-1">
                            <span className="italic font-light text-luxury-black/35 block hero-title-line">
                                Simplified.
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-xs sm:text-sm md:text-base text-[#615e58] font-light max-w-md sm:max-w-lg leading-relaxed tracking-wide mb-10">
                        The digital infrastructure for modern jewelry brands.
                        <br className="hidden sm:block" />
                        From design to delivery, we power your growth.
                    </p>

                    {/* CTA */}
                    <div className="hero-cta">
                        <button
                            ref={btnRef}
                            className="hero-cta-btn px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white border border-[#0a0a0a] font-medium text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 select-none cursor-pointer shadow-md hover:shadow-lg"
                            onClick={() =>
                                window.open(
                                    "https://catalog.carpediam.in/",
                                    "_blank"
                                )
                            }
                        >
                            View Catalogue
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-auto group"
                onClick={handleScrollDown}
            >
                <span className="text-[9px] tracking-[0.45em] uppercase text-luxury-black/40 mb-3 font-semibold group-hover:text-luxury-black transition-colors duration-300">
                    Explore
                </span>

                <div className="w-[1px] h-10 bg-luxury-black/10 relative overflow-hidden">
                    <div
                        ref={indicatorRef}
                        className="absolute top-0 left-0 w-full h-1/2 bg-luxury-black"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;