import React from 'react';

const PrecisionWhyChoose = ({ advantages }) => {
    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        The CD. Advantage
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        Why leading houses choose us.
                    </h2>
                </div>

                <div className="space-y-16 md:space-y-24">
                    {advantages.map((adv, idx) => (
                        <div
                            key={idx}
                            className="pm-why-card grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-200/50 pb-12 last:border-0"
                        >
                            {/* Left side */}
                            <div className={`md:col-span-5 text-left ${idx % 2 === 1 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/10 flex items-center justify-center">
                                        {adv.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-serif text-luxury-black">
                                    {adv.title}
                                </h3>
                            </div>

                            {/* Right side */}
                            <div className="md:col-span-7 text-left">
                                <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                                    {adv.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrecisionWhyChoose;
