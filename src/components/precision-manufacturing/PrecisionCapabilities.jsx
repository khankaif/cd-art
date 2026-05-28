import React from 'react';

const PrecisionCapabilities = ({ capabilities }) => {
    return (
        <section id="pm-capabilities" className="py-24 md:py-36 bg-[#FAF9F6] border-y border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-xs font-bold uppercase tracking-widest mb-6">
                    Core Capabilities
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-6">
                    Full-spectrum manufacturing excellence.
                </h2>
                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-20">
                    Eight integrated disciplines forming a closed-loop production pipeline — from digital blueprint to polished masterpiece.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {capabilities.map((cap, i) => (
                        <div
                            key={i}
                            className="pm-capability-card p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-serif text-luxury-black">{cap.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed text-sm">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrecisionCapabilities;
