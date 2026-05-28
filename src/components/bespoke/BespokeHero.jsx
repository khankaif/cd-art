import React from 'react';

const BespokeHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    return (
        <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2574')` }}
                >
                    {/* Grayscale aesthetic styling & overlays */}
                    <div className="absolute inset-0 bg-[#FAF9F6]/45 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FAF9F6]"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-24">
                <span className="hero-animate inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    CD. BESPOKE SERVICE
                </span>
                <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-luxury-black tracking-tight leading-[1.05] mb-8">
                    Bespoke <br />
                    <span className="italic font-light text-gray-500 font-serif">Jewellery Design</span>
                </h1>
                <p className="hero-animate text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed mb-12 tracking-wide">
                    Translate your personal legacy and vision into high-art physical jewelry. Crafted individually with world-class gemstone settings.
                </p>
                <div className="hero-animate flex flex-wrap gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('consultation-form')}
                        className="px-8 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer border border-transparent"
                    >
                        Book Consultation
                    </button>
                    <button
                        onClick={() => scrollToSection('editorial-sections')}
                        className="px-8 py-4 rounded-full border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
                    >
                        Explore Process
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeHero;
