import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutContact = () => {
    const contactCardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Contact Card Reveal
            gsap.fromTo(contactCardRef.current,
                { y: 50, opacity: 0, filter: "blur(5px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactCardRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, contactCardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="py-32 bg-luxury-black text-white relative overflow-hidden">
            {/* Visual Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div ref={contactCardRef} className="rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl flex flex-col md:flex-row justify-between gap-12 items-stretch">
                    {/* Left Info Column */}
                    <div className="flex-1 space-y-8 flex flex-col justify-between">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                                Connect
                            </span>
                            <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                                Let's build<br />
                                <span className="italic text-gray-400 font-light">together.</span>
                            </h3>
                        </div>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Email</p>
                                    <a href="mailto:hello@carpediam.in" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                        hello@carpediam.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Phone & Whatsapp</p>
                                    <a href="tel:+918850157354" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                        +91 88501 57354
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Info Column */}
                    <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12 flex flex-col justify-between space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <Instagram className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Instagram</p>
                                    <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                        @carpediamjewelry
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Location</p>
                                    <p className="text-base text-gray-200 font-light">
                                        Mumbai, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-xs text-gray-500 font-light leading-relaxed pt-6">
                            Mumbai studio visits are scheduled strictly by appointment only. Contact our team to request a personal consultation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContact;
