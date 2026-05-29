import React from 'react';
import { useNavigate } from 'react-router-dom';

const DigitalHero = ({ heroRef, heroBgRef, scrollToSection }) => {
    const navigate = useNavigate();

    return (
        <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-luxury-black pt-28 pb-24">
            {/* Deep background image with luxury grid and node overlay */}
            <div ref={heroBgRef} className="absolute inset-0 z-0">
                <div
                    className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0 opacity-60"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2500')` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                {/* Glowing Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                {/* Subtle glow nodes */}
                <div className="absolute top-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-luxury-gold/5 blur-[150px] animate-pulse"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
                <span className="de-hero-animate inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-luxury-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    CD. Intelligent Infrastructure
                </span>
                <h1 className="de-hero-animate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.05] mb-8 max-w-5xl">
                    Integrated Digital Ecosystems <br />
                    <span className="italic font-light text-gray-300 block mt-2 font-serif">for Modern Jewellery Houses</span>
                </h1>
                <p className="de-hero-animate text-xs sm:text-sm md:text-base text-white/85 font-normal max-w-xl mx-auto leading-relaxed mb-10 tracking-wider">
                    Seamless digital connectivity meets high-end production. Bridge storefront automation, real-time inventory intelligence, and automated ERP workflows with master-level physical craftsmanship.
                </p>
                <div className="de-hero-animate flex flex-wrap gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('de-infrastructure')}
                        className="px-8 py-4 rounded-full bg-white text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg shadow-white/5 cursor-pointer border border-transparent"
                    >
                        Explore Ecosystem
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-all cursor-pointer bg-white/5 backdrop-blur-sm"
                    >
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DigitalHero;
