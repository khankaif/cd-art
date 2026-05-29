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
            className="relative min-h-[100svh] w-full overflow-hidden bg-[#e4dfd5] border-b border-gray-200/50 flex flex-col justify-center items-center pt-28 pb-24"
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-[120%] bg-cover bg-[position:68%_center] sm:bg-[position:65%_center] md:bg-[position:60%_center] lg:bg-center origin-center will-change-transform"
                    style={{
                        backgroundImage: `url(${luxuryBg})`
                    }}
                ></div>
                {/* Subtle overlay to preserve dark text readability */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full flex flex-col items-center px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto text-center">
                <div className="max-w-4xl text-center flex flex-col items-center">
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
                            <span className="italic font-light text-luxury-black/65 block hero-title-line">
                                Simplified.
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-xs sm:text-sm md:text-base text-luxury-black/85 font-normal max-w-md sm:max-w-lg leading-relaxed tracking-wide mb-10">
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

                    {/* Scroll Indicator */}
                    <div
                        className="hero-scroll-indicator flex flex-col items-center cursor-pointer pointer-events-auto group px-6 py-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 mt-12"
                        onClick={handleScrollDown}
                    >
                        <span className="text-[14px] tracking-[0.4em] uppercase text-black font-black mb-2.5 transition-colors duration-300">
                            Explore
                        </span>

                        <div className="w-[1.5px] h-8 bg-red-700 relative overflow-hidden rounded-full">
                            <div
                                ref={indicatorRef}
                                className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;