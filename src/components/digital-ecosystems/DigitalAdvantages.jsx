import React from 'react';

const DigitalAdvantages = ({ advantages }) => {
    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        System Advantages
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        Engineered for high-end growth.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {advantages.map((adv, idx) => (
                        <div
                            key={idx}
                            className="de-advantage-row space-y-4 text-left border-l border-gray-200 pl-8 relative"
                        >
                            {/* Mini gold bullet point */}
                            <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-luxury-gold"></div>
                            <h3 className="text-xl sm:text-2xl font-serif text-luxury-black">
                                {adv.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                {adv.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalAdvantages;
