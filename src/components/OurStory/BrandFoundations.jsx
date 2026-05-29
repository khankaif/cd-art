import React from 'react';
import { Sparkles, Compass, Cpu } from 'lucide-react';

const BrandFoundations = () => {
    const pillars = [
        {
            icon: <Sparkles className="w-5 h-5 text-luxury-gold" />,
            title: "Creativity",
            desc: "Artistry that transcends seasonal trends. We believe in designing concepts that tell unique visual stories and stand the test of time."
        },
        {
            icon: <Compass className="w-5 h-5 text-luxury-gold" />,
            title: "Precision",
            desc: "Flawless physical execution guided by mathematical accuracy. Combining master bench skills with advanced computer-aided design."
        },
        {
            icon: <Cpu className="w-5 h-5 text-luxury-gold" />,
            title: "Innovation",
            desc: "Integrating state-of-the-art 3D printing and modern headless catalog APIs to make bespoke manufacturing completely seamless."
        }
    ];

    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                    Brand Core
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black mb-20">
                    Three foundations of the brand.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div 
                            key={idx} 
                            className="pillar-card-animate p-10 rounded-[2rem] bg-[#FDFDFB] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between text-left h-full"
                        >
                            <div className="space-y-6">
                                <div className="w-10 h-10 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/10 flex items-center justify-center">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-serif text-luxury-black">{pillar.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandFoundations;
