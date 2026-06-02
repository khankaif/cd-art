import React from 'react';

const IntroductionSection = () => {
    return (
        <section id="intro-section" className="py-16 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-center">
                    
                    {/* Narrative Left */}
                    <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left intro-animate">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            Who We Are
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            A new architecture for high-end jewelry curation.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            For centuries, fine jewelry creation has been bound by lengthy, rigid pipelines. High upfront inventory costs, hand-modeling bottlenecks, and slow feedback loops have historically restricted designers from iterating freely.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            We created CD. to solve this. By integrating 3D CAD visualization, rapid gold-alloy casting, and automated inventory systems, we allow brands to focus entirely on visual storytelling and branding while we handle the seamless execution.
                        </p>
                    </div>

                    {/* Image Right */}
                    <div className="lg:col-span-6 intro-animate">
                        <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group">
                            <img 
                                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200" 
                                alt="Artisanal hands polishing a luxury ring"
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#FAF9F6]/5 mix-blend-overlay"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
