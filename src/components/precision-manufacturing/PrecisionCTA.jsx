import React from 'react';

const PrecisionCTA = ({ parallaxBgRef }) => {
    return (
        <section className="pm-parallax-trigger relative py-48 md:py-60 overflow-hidden flex items-center justify-center border-b border-gray-100">
            <div className="absolute inset-0 z-0 bg-luxury-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pm-parallax-content">
                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-8">
                    Manufacturing Philosophy
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white leading-snug tracking-tight font-light">
                    "Where microscopic precision <br />
                    <span className="italic font-light text-luxury-gold font-serif">meets artisan intuition</span> <br />
                    — every micron matters."
                </h3>
                <p className="text-sm sm:text-base text-luxury-white/60 font-sans max-w-xl mx-auto leading-relaxed mt-10">
                    Scalable luxury production with export-grade finishing. Each piece undergoes rigorous multi-point inspection before leaving our atelier — bridging the precision of modern machinery with the irreplaceable touch of master craftsmen.
                </p>
                <div className="w-12 h-[1px] bg-luxury-gold/50 mx-auto mt-12"></div>
            </div>
        </section>
    );
};

export default PrecisionCTA;
