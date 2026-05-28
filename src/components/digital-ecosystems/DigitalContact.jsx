import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DigitalContact = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="de-cta-animate relative rounded-[3rem] bg-white p-12 md:p-24 text-center border border-gray-200/50 shadow-xl overflow-hidden group">
                    {/* Glowing node overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-[10px] font-bold text-luxury-gold tracking-widest uppercase">
                            System Integration
                        </span>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-luxury-black leading-tight max-w-2xl">
                            Connect your jewellery business <br />
                            <span className="italic font-light text-gray-400 font-serif">through intelligent infrastructure.</span>
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 font-light max-w-lg leading-relaxed">
                            Partner with our system architect team to synchronize your ERP pipelines, storefront configurations, and inventory layers directly into our global atelier hubs.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 rounded-full bg-white border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                            >
                                Schedule Integration Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalContact;
