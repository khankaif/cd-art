import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Compass, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPhilosophy = () => {
    const philosophyRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".philosophy-card",
                { y: 50, opacity: 0, filter: "blur(5px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, philosophyRef);

        return () => ctx.revert();
    }, []);

    const philosophies = [
        {
            icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
            title: "Craftsmanship",
            desc: "Every design is curated and hand-finished by master goldsmiths who hold generations of expertise, elevating the standard of jewelry execution."
        },
        {
            icon: <Compass className="w-6 h-6 text-luxury-gold" />,
            title: "Precision",
            desc: "Leveraging state-of-the-art 3D CAD modeling and micro-setting technologies to bring mathematically perfect designs to physical form."
        },
        {
            icon: <Cpu className="w-6 h-6 text-luxury-gold" />,
            title: "Digital Luxury",
            desc: "A headless, API-first ecosystem built directly into modern retail storefronts to offer on-demand manufacturing with zero overhead."
        }
    ];

    return (
        <div ref={philosophyRef} className="py-32 bg-gray-50/70 border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-xs font-bold uppercase tracking-widest mb-6">
                    Our Foundations
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-20">
                    Three pillars of the brand.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {philosophies.map((philo, i) => (
                        <div
                            key={i}
                            className="philosophy-card p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10">
                                    {philo.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-luxury-black">{philo.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed text-sm">
                                    {philo.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPhilosophy;
