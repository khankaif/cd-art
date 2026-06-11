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
        <section className="relative min-h-[600px] py-48 w-full overflow-hidden bg-luxury-white flex items-center justify-center">
            {/* Typography-led background pattern/noise could go here, but keeping it clean for B2B */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <span className="text-reveal text-[10px] uppercase tracking-[0.4em] text-luxury-black/50 font-medium mb-10">
                    The Final Touch
                </span>
                
                <h2 className="text-reveal text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-black tracking-tight leading-[1.0] mb-12 font-medium">
                    Your Legacy,<br />
                    <span className="italic text-luxury-gold pr-4">Crafted.</span>
                </h2>
                
                <p className="text-reveal text-sm sm:text-base md:text-lg text-luxury-black/60 font-sans max-w-xl mx-auto leading-[1.8] mb-20">
                    Immortalize your vision in precious metals and flawless stones. Join our private client list to begin the bespoke process.
                </p>
                
                <div className="text-reveal group">
                    <button
                        onClick={() => scrollToSection('consultation-form')}
                        className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.25em] uppercase text-luxury-black pb-3 hover:text-luxury-black/70 premium-transition cursor-pointer"
                    >
                        Schedule an Appointment
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-black/10"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-black premium-transition group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeCTA;
