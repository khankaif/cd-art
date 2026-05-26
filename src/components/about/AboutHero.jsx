import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroDescRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Intro Parallax
            gsap.to(heroBgRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 150,
                scale: 1.1,
            });

            // Hero Content Reveal
            const tl = gsap.timeline();
            tl.fromTo([heroTitleRef.current, heroDescRef.current],
                { y: 50, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.1 }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative h-[80vh] min-h-[600px] w-full flex flex-col justify-center items-center overflow-hidden bg-gray-50 border-b border-gray-100">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[120%] bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2574&auto=format&fit=crop')` }}
                >
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-xs font-bold uppercase tracking-widest mb-6">
                    Who We Are
                </span>
                <h1 ref={heroTitleRef} className="text-5xl md:text-7xl font-serif text-luxury-black tracking-tight leading-[1.1] mb-8">
                    The intersection of<br />
                    <span className="italic font-light text-gray-500">tradition & technology.</span>
                </h1>
                <p ref={heroDescRef} className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    We build the digital architecture that empowers modern jewelry designers. By bridging artisanal handcrafting techniques with automated manufacturing frameworks, we redefine high-end curation.
                </p>
            </div>
        </div>
    );
};

export default AboutHero;
