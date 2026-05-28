import React from 'react';

const BespokePhilosophy = ({ philosophies }) => {
    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-xs font-bold uppercase tracking-widest mb-6">
                    Our Foundations
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-20">
                    The pillars of bespoke creation.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {philosophies.map((philo, i) => (
                        <div
                            key={i}
                            className="philosophy-card-animate p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
        </section>
    );
};

export default BespokePhilosophy;
