import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PrecisionContact = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="pm-cta-animate relative rounded-[3rem] bg-[#F4F0E6] p-12 md:p-24 text-center border border-gray-100 shadow-sm overflow-hidden group">
                    {/* Soft overlay element */}
                    <div className="absolute inset-0 bg-[#FAF9F6]/10 pointer-events-none"></div>
                    {/* Subtle glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-xs font-semibold text-luxury-gold tracking-widest uppercase">
                            Partnership
                        </span>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-luxury-black leading-tight">
                            Build your next collection <br />
                            <span className="italic font-light text-gray-400 font-serif">with manufacturing precision.</span>
                        </h2>

                        <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light max-w-xl leading-relaxed">
                            Connect with our manufacturing directors to discuss production capabilities, volume pricing, and timeline planning for your brand's next launch.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-4 rounded-full bg-white border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                            >
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrecisionContact;
