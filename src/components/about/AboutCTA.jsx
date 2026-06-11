import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
    const ctaRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".cta-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
                    }
                }
            );
            
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={ctaRef} className="py-32 md:py-48 relative overflow-hidden bg-luxury-black flex justify-center items-center">
            
            {/* Typography-led dark background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-luxury-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <span className="cta-item text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium mb-8">
                    Partnership
                </span>
                
                <h2 className="cta-item text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-white tracking-tighter leading-[1.05] mb-10 max-w-4xl font-light">
                    Elevate your brand<br />
                    <span className="italic font-light text-luxury-gold pr-4">with us.</span>
                </h2>
                
                <p className="cta-item text-sm sm:text-base md:text-lg text-luxury-white/70 font-light max-w-xl leading-[1.8] mb-16">
                    Partner with Mumbai's premier casting and manufacturing lab. Let us build your high-end collections on demand, beautifully and flawlessly.
                </p>
                
                <div className="cta-item group">
                    <a
                        href="https://catalog.carpediam.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center px-10 py-5 border border-luxury-white/30 bg-transparent text-luxury-white text-[10px] sm:text-xs tracking-[0.25em] uppercase premium-transition overflow-hidden group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-luxury-white transform scale-y-0 origin-bottom premium-transition group-hover:scale-y-100"></span>
                        <span className="relative z-10 premium-transition group-hover:text-luxury-black font-medium">View Catalogue</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
