import React from 'react';
import { useNavigate } from 'react-router-dom';
import precisionBg from '../../assets/Precision Manufacturing.png';

const PrecisionHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    const navigate = useNavigate();

    return (
        <section ref={heroRef} className="relative h-[80vh] md:h-screen min-h-[450px] md:min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white pt-24 md:pt-28 pb-16 md:pb-24">
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url(${precisionBg})` }}
                >

                </div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center">
                <span className="pm-hero-animate inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    CD. Manufacturing
                </span>
                <h1 className="pm-hero-animate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black tracking-tight leading-[1.05] mb-6 md:mb-8">
                    Precision Manufacturing <br />
                    <span className="italic font-light text-[#D4AF37] block mt-2 font-serif">for Modern Jewellery Houses</span>
                </h1>
                <p className="pm-hero-animate text-sm sm:text-base md:text-lg text-white font-normal max-w-xl mx-auto leading-relaxed mb-8 md:mb-10 tracking-wide">
                    Scalable luxury production powered by CAD precision, master craftsmanship, and export-grade finishing. From casting to gemstone setting — excellence at every stage.
                </p>
                <div className="pm-hero-animate flex flex-wrap gap-4 justify-center items-center">
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
