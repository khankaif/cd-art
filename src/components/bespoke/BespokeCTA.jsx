import React from 'react';

const BespokeCTA = ({ scrollToSection }) => {
    return (
        <section className="py-32 bg-gray-50/55 relative overflow-hidden border-b border-gray-100">
            {/* Subtle visual glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-8 cta-content-animate">
                <h2 className="text-4xl md:text-6xl font-serif text-luxury-black tracking-tight leading-tight">
                    Co-create your heirloom<br />
                    <span className="italic font-light text-gray-500 font-serif">with our master designers.</span>
                </h2>
                <p className="text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
                    Start your tailored design project. We arrange detailed consultations and secure worldwide gemstone logistics.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={() => scrollToSection('consultation-form')}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-luxury-black text-white font-medium text-sm tracking-wider hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-0.5"
                    >
                        Schedule Consultation
                    </button>
                    <button 
                        onClick={() => scrollToSection('editorial-sections')}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-luxury-black font-medium text-sm tracking-wider hover:bg-gray-50 transition-all"
                    >
                        View Process
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BespokeCTA;
