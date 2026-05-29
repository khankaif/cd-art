import React from 'react';

const JourneySection = () => {
    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] border-t border-gray-100/50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    
                    {/* Large Image Left */}
                    <div className="lg:col-span-5 order-2 lg:order-1 journey-animate">
                        <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group">
                            <img 
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" 
                                alt="CD luxury boutique space"
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#FAF9F6]/5 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left journey-animate">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            Our Evolution
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Cultivating scale without compromising artisanal finish.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            From our initial prototype labs in Mumbai, we understood that technology has no soul without master handcrafting. An automated machine can cut metal, but only a master gem-setter can set micro-diamonds with the tension and layout required to catch soft light.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Today, CD. represents a network that handles everything. We design the raw digital assets, verify render alignments with software algorithms, 3D-cast them, and then hand-polish each item. The result is a seamless workflow built directly for independent global houses.
                        </p>

                        {/* Stats Counter Section */}
                        <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-200">
                            <div>
                                <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="2021">2021</h4>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Established</p>
                            </div>
                            <div>
                                <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="15000">15000+</h4>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">CAD Models</p>
                            </div>
                            <div>
                                <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="25">25+</h4>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Retail Partners</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JourneySection;
