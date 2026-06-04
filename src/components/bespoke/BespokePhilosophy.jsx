import React from 'react';

const BespokePhilosophy = ({ philosophies }) => {
    return (
        <section className="py-24 md:py-48 bg-luxury-black text-luxury-white border-b border-luxury-white/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-luxury-gold/5 blur-[120px] pointer-events-none mix-blend-screen"></div>
            
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px] relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* Sticky Header Side */}
                    <div className="w-full lg:w-1/3">
                        <div className="lg:sticky lg:top-40">
                            <div className="text-reveal flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                                    Our Foundations
                                </span>
                            </div>
                            <h2 className="text-reveal text-4xl sm:text-5xl lg:text-7xl font-serif leading-[1.0] font-light text-luxury-white tracking-tight">
                                The Pillars<br />
                                <span className="italic text-luxury-white/50">of Creation.</span>
                            </h2>
                        </div>
                    </div>

                    {/* Staggered Content List */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col gap-24 md:gap-32 lg:pt-16">
                            {philosophies.map((philo, i) => (
                                <div key={i} className="text-reveal flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                                    {/* Abstract Number / Icon area */}
                                    <div className="flex-shrink-0 flex items-center gap-6">
                                        <div className="text-6xl font-serif text-luxury-white/10 font-light select-none">
                                            0{i + 1}
                                        </div>
                                        <div className="w-[1px] h-16 bg-luxury-gold/30"></div>
                                    </div>
                                    
                                    {/* Philosophy Details */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4 opacity-50">
                                            {philo.icon}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-serif text-luxury-white tracking-wide">
                                            {philo.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-luxury-white/60 font-light leading-[1.8] max-w-lg mt-2">
                                            {philo.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BespokePhilosophy;
