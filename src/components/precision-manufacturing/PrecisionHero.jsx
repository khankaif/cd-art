import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrecisionHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    const navigate = useNavigate();

    return (
        <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2574')` }}
                >
                    <div className="absolute inset-0 bg-[#FAF9F6]/50 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FAF9F6]"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-24">
                <span className="pm-hero-animate inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    CD. Manufacturing
                </span>
                <h1 className="pm-hero-animate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-luxury-black tracking-tight leading-[1.05] mb-8">
                    Precision Manufacturing <br />
                    <span className="italic font-light text-gray-500 font-serif">for Modern Jewellery Houses</span>
                </h1>
                <p className="pm-hero-animate text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed mb-12 tracking-wide">
                    Scalable luxury production powered by CAD precision, master craftsmanship, and export-grade finishing. From casting to gemstone setting — excellence at every stage.
                </p>
                <div className="pm-hero-animate flex flex-wrap gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer border border-transparent"
                    >
                        Schedule Consultation
                    </button>
                    <button
                        onClick={() => scrollToSection('pm-capabilities')}
                        className="px-8 py-4 rounded-full border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
                    >
                        Explore Capabilities
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PrecisionHero;
