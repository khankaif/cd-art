import React from 'react';

const HeroSection = ({ heroRef, heroBgRef }) => {
    return (
        <section ref={heroRef} className="relative h-[80vh] md:h-[90vh] min-h-[450px] md:min-h-[600px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100">
            {/* Background Parallax Image */}
            <div className="absolute inset-0 z-0">
                <div
                    ref={heroBgRef}
                    className="w-full h-[120%] bg-cover bg-center absolute top-0 left-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574')`,
                    }}
                >
                    {/* Soft overlays to create a warm luxurious atmosphere */}
                    <div className="absolute inset-0 bg-[#FAF9F6]/65 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/20 via-transparent to-[#FAF9F6]"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                <span className="hero-fade inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8">
                    Our Story
                </span>
                <h1 className="hero-fade text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-luxury-black tracking-tight leading-[1.1] mb-6 md:mb-8">
                    Crafting Digital Artistry<br />
                    <span className="italic font-light text-gray-500 font-serif">with timeless precision.</span>
                </h1>
                <p className="hero-fade text-sm sm:text-base md:text-lg text-black-700 font-light max-w-xl mx-auto leading-relaxed mb-8 md:mb-10">
                    Bridging high-end jewelry manufacturing with digital execution. We build physical poetry for modern independent designers.
                </p>
                <div className="hero-fade flex flex-wrap gap-4 justify-center items-center">
                    <a
                        href="#intro-section"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3.5 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer"
                    >
                        Read Narrative
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
