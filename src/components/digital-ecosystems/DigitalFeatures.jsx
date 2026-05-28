import React from 'react';

const DigitalFeatures = ({ features }) => {
    return (
        <section className="py-24 md:py-36 bg-white border-y border-gray-100/80">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-widest mb-6">
                        System Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-6">
                        Connected features. Perfect execution.
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                        Ten distinct technological capabilities mapped into a unified framework to optimize your brand’s operational pipeline.
                    </p>
                </div>

                {/* Staggered Grid of 10 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className="de-feature-card p-8 rounded-3xl bg-[#FAF9F6]/80 border border-gray-100 hover:border-luxury-gold/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(214,175,55,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-2xl bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10 mb-6">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-serif text-luxury-black mb-3">{feat.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-xs">
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalFeatures;
