import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutContact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-animate",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={contactRef} className="py-24 md:py-32 bg-luxury-white text-luxury-black border-b border-luxury-black/10">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
                    
                    {/* Left Typography Header */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start contact-animate">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-[1px] bg-luxury-gold"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                                Inquiries
                            </span>
                        </div>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.05] font-light">
                            Let's build<br />
                            <span className="italic text-luxury-black/60 pr-4">together.</span>
                        </h2>
                        <div className="mt-12 lg:mt-24 w-full max-w-sm">
                            <p className="text-sm text-luxury-black/50 font-light leading-relaxed border-l border-luxury-gold/30 pl-6">
                                Mumbai studio visits are scheduled strictly by appointment only. Contact our team to request a personal consultation.
                            </p>
                        </div>
                    </div>

                    {/* Right Contact Details */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 pt-4 lg:pt-16 border-t lg:border-t-0 border-luxury-black/10 contact-animate">
                        
                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-black/40 font-medium">Email</span>
                            <a href="mailto:hello@carpediam.in" className="text-base sm:text-lg font-light text-luxury-black hover:text-luxury-gold transition-colors duration-500">
                                hello@carpediam.in
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-black/40 font-medium">Phone / WhatsApp</span>
                            <a href="tel:+918850157354" className="text-base sm:text-lg font-light text-luxury-black hover:text-luxury-gold transition-colors duration-500">
                                +91 88501 57354
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-black/40 font-medium">Social</span>
                            <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-light text-luxury-black hover:text-luxury-gold transition-colors duration-500">
                                @carpediamjewelry
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-black/40 font-medium">Headquarters</span>
                            <p className="text-base sm:text-lg font-light text-luxury-black">
                                Mumbai, India
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;
