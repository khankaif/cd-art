import React from 'react';

const ValuesSection = () => {
    const values = [
        {
            title: "Timeless Curation",
            subtitle: "Designing for legacy.",
            desc: "Every design is curated and hand-finished by master goldsmiths who hold generations of expertise. We reject mass production in favor of carefully balanced collections that retain their sentimental and physical value for decades."
        },
        {
            title: "Ethical Sourcing",
            subtitle: "Full transparency.",
            desc: "We maintain a 100% transparent supply chain. From conflict-free certified stones to recycled gold castings, our processes are optimized to respect both human craftsmanship and our environment without compromising quality."
        },
        {
            title: "Evolving Craft",
            subtitle: "Modern alchemy.",
            desc: "We bridge the gap between computer-assisted mathematical jewelry models and hands-on finishing. This hybrid approach enables complex geometric settings that were historically impossible to cast by hand."
        }
    ];

    return (
        <section className="py-16 md:py-36 bg-[#FAF9F6] border-t border-gray-100/50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        Values & Practice
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        How we create.
                    </h2>
                </div>

                <div className="space-y-12 md:space-y-24">
                    {values.map((val, idx) => (
                        <div 
                            key={idx} 
                            className={`values-block-animate grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-200/50 pb-12 last:border-0`}
                        >
                            {/* Left/Header side */}
                            <div className={`md:col-span-5 text-left ${idx % 2 === 1 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold block mb-1">
                                    {val.subtitle}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-serif text-luxury-black">
                                    {val.title}
                                </h3>
                            </div>

                            {/* Right/Description side */}
                            <div className="md:col-span-7 text-left">
                                <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
