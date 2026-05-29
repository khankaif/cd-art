import React from 'react';

const BespokeHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    return (
        <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white pt-28 pb-24">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2574')` }}
                >
                    {/* Grayscale aesthetic styling & overlays */}

                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                <span className="hero-animate inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-xs text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    CD. BESPOKE SERVICE
                </span>
                <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)] tracking-tight leading-[1.05] mb-8">
                    Bespoke <br />
                    <span className="italic font-light text-luxury-champagne block mt-2 font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Jewellery Design</span>
                </h1>
                <p className="hero-animate text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed mb-10 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    Translate your personal legacy and vision into high-art physical jewelry. Crafted individually with world-class gemstone settings.
                </p>
                <div className="hero-animate flex flex-wrap gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('editorial-sections')}
                        className="px-8 py-4 rounded-full border border-white text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all cursor-pointer bg-white"
                    >
                        Explore Process
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeHero;
