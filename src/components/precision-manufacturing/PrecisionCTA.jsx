import React from 'react';

const PrecisionCTA = ({ parallaxBgRef }) => {
    return (
        <section className="pm-parallax-trigger relative py-48 md:py-60 overflow-hidden flex items-center justify-center border-b border-gray-100">
            <div className="absolute inset-0 z-0">
                <div
                    ref={parallaxBgRef}
                    className="w-full h-[140%] bg-cover bg-center absolute top-[-20%] left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2000')` }}
                >
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pm-parallax-content">
                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-8">
                    Manufacturing Philosophy
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-black leading-snug tracking-tight font-medium">
                    "Where microscopic precision <br />
                    <span className="italic font-light text-gray-500 font-serif">meets artisan intuition</span> <br />
                    — every micron matters."
                </h3>
                <p className="text-sm sm:text-base text-gray-500 font-light max-w-xl mx-auto leading-relaxed mt-10">
                    Scalable luxury production with export-grade finishing. Each piece undergoes rigorous multi-point inspection before leaving our atelier — bridging the precision of modern machinery with the irreplaceable touch of master craftsmen.
                </p>
                <div className="w-12 h-[1px] bg-luxury-gold/50 mx-auto mt-12"></div>
            </div>
        </section>
    );
};

export default PrecisionCTA;
