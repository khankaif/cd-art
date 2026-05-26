import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".cta-animate",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={ctaRef} className="py-32 bg-gray-50/55 relative overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-8">
                <h2 className="cta-animate text-4xl md:text-6xl font-serif text-luxury-black tracking-tight leading-tight">
                    Elevate your jewelry brand<br />
                    <span className="italic font-light text-gray-500">with digital infrastructure.</span>
                </h2>
                <p className="cta-animate text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
                    Partner with Mumbai's premier casting and manufacturing lab. Let us build your high-end collections on demand.
                </p>
                <div className="cta-animate pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-luxury-black text-white font-medium text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                        Start Manufacturing
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-luxury-black font-medium text-lg hover:bg-gray-50 transition-all">
                        View Catalog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutCTA;
