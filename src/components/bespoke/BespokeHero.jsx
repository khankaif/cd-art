import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BespokeHero = ({ scrollToSection }) => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.fromTo(".hero-reveal",
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen min-h-[600px] w-full flex flex-col justify-center items-center overflow-hidden bg-luxury-black text-luxury-white">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
                <div
                    ref={bgRef}
                    className="absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center origin-center will-change-transform grayscale opacity-70"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2574')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-12 lg:px-20 mx-auto flex flex-col items-center md:items-start text-center md:text-left mt-20">
                <div className="hero-reveal flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-luxury-gold"></span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium">
                        Private Atelier
                    </span>
                    <span className="w-8 h-[1px] bg-luxury-gold md:hidden"></span>
                </div>
                
                <h1 className="hero-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-luxury-white tracking-tighter leading-[1.0] mb-8">
                    Bespoke<br />
                    <span className="italic font-light text-luxury-white/60 block mt-2 ml-0 md:ml-12 lg:ml-24">Jewellery.</span>
                </h1>
                
                <div className="hero-reveal w-full max-w-xl md:ml-24 mb-16 border-l border-luxury-gold/30 pl-6">
                    <p className="text-sm sm:text-base text-luxury-white/70 font-light leading-[1.8]">
                        Translate your personal legacy into physical high-art. Co-designed with our directors and meticulously crafted using world-class gemstone settings.
                    </p>
                </div>
                
                <div className="hero-reveal md:ml-24 group">
                    <button
                        onClick={() => scrollToSection('editorial-sections')}
                        className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.25em] uppercase text-luxury-white pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer"
                    >
                        Enter the Process
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-white/30"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeHero;
