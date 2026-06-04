import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BespokeCTA = ({ scrollToSection }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: bgRef.current.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-[600px] py-48 w-full overflow-hidden bg-luxury-black flex items-center justify-center">
            
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                <div
                    ref={bgRef}
                    className="absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center origin-center will-change-transform grayscale"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2574')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/60 to-luxury-black"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <span className="text-reveal text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium mb-10">
                    The Final Touch
                </span>
                
                <h2 className="text-reveal text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-white tracking-tighter leading-[1.0] mb-12 font-light">
                    Your Legacy,<br />
                    <span className="italic text-luxury-gold pr-4">Crafted.</span>
                </h2>
                
                <p className="text-reveal text-sm sm:text-base md:text-lg text-luxury-white/70 font-light max-w-xl mx-auto leading-[1.8] mb-20">
                    Immortalize your vision in precious metals and flawless stones. Join our private client list to begin the bespoke process.
                </p>
                
                <div className="text-reveal group">
                    <button
                        onClick={() => scrollToSection('consultation-form')}
                        className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.25em] uppercase text-luxury-white pb-3 hover:text-luxury-gold transition-colors duration-500 cursor-pointer"
                    >
                        Schedule an Appointment
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-white/30"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeCTA;
