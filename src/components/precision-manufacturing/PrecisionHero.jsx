import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrecisionHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    const navigate = useNavigate();

    return (
        <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white pt-28 pb-24">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2574')` }}
                >

                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                <span className="pm-hero-animate inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/85 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    CD. Manufacturing
                </span>
                <h1 className="pm-hero-animate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-luxury-black tracking-tight leading-[1.05] mb-8">
                    Precision Manufacturing <br />
                    <span className="italic font-light text-luxury-black/75 block mt-2 font-serif">for Modern Jewellery Houses</span>
                </h1>
                <p className="pm-hero-animate text-sm sm:text-base md:text-lg text-luxury-black/85 font-normal max-w-xl mx-auto leading-relaxed mb-10 tracking-wide">
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
