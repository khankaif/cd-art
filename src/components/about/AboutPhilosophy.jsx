import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPhilosophy = () => {
    const philosophyRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".philosophy-item",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top 70%",
                    }
                }
            );
            
            gsap.to(".philosophy-bg-num", {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: philosophyRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, philosophyRef);

        return () => ctx.revert();
    }, []);

    const philosophies = [
        {
            num: "01",
            title: "Craftsmanship",
            desc: "Every design is curated and hand-finished by master goldsmiths who hold generations of expertise, elevating the standard of jewelry execution to true art forms."
        },
        {
            num: "02",
            title: "Precision",
            desc: "Leveraging state-of-the-art 3D CAD modeling and micro-setting technologies to bring mathematically perfect designs to physical form with zero compromise."
        },
        {
            num: "03",
            title: "Digital Luxury",
            desc: "A headless, API-first ecosystem built directly into modern retail storefronts to offer on-demand manufacturing with absolute efficiency and no overhead."
        }
    ];

    return (
        <section ref={philosophyRef} className="py-24 md:py-40 bg-luxury-black text-luxury-white relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
                    {/* Left Sticky Header */}
                    <div className="w-full md:w-1/3 philosophy-item relative z-10">
                        <div className="sticky top-40">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                                    Our Foundations
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] font-light">
                                Three pillars of the brand.
                            </h2>
                        </div>
                    </div>

                    {/* Right Vertical List */}
                    <div className="w-full md:w-2/3 flex flex-col gap-20 sm:gap-32">
                        {philosophies.map((philo, i) => (
                            <div key={i} className="philosophy-item relative flex flex-col items-start pt-12 border-t border-luxury-white/10">
                                {/* Huge background number */}
                                <div className="philosophy-bg-num absolute top-[-40px] sm:top-[-60px] left-[-20px] text-[8rem] sm:text-[12rem] font-serif text-luxury-white/[0.03] leading-none select-none z-0">
                                    {philo.num}
                                </div>
                                
                                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-baseline gap-6 sm:gap-12 w-full">
                                    <span className="text-lg font-serif text-luxury-gold font-light">{philo.num}.</span>
                                    <div className="flex flex-col gap-6">
                                        <h3 className="text-3xl sm:text-4xl font-serif text-luxury-white font-light tracking-wide">{philo.title}</h3>
                                        <p className="text-sm sm:text-base text-luxury-white/60 font-light leading-[1.8] max-w-xl">
                                            {philo.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPhilosophy;
