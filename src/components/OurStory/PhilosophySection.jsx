import React from 'react';

const PhilosophySection = ({ philosophyBgRef }) => {
    return (
        <section className="philosophy-trigger relative py-48 md:py-60 overflow-hidden flex items-center justify-center border-b border-gray-100">
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <div 
                    ref={philosophyBgRef}
                    className="w-full h-[140%] bg-cover bg-center absolute top-[-20%] left-0"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')`,
                    }}
                >
                    {/* Soft overlay for typography readability */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-8">
                    The Philosophy
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-black leading-snug tracking-tight font-medium">
                    “In the pursuit of visual beauty, <br />
                    <span className="italic font-light text-gray-500 font-serif">artistry & structural precision</span> <br />
                    must speak the same language.”
                </h3>
                <div className="w-12 h-[1px] bg-luxury-gold/50 mx-auto mt-12"></div>
            </div>
        </section>
    );
};

export default PhilosophySection;
