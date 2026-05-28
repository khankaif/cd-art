import React from 'react';
import { ArrowRight } from 'lucide-react';

const PrecisionOverview = ({ scrollToSection }) => {
    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Left Image */}
                    <div className="lg:col-span-5 pm-overview-animate">
                        <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100/50 group bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200"
                                alt="Master goldsmith at precision workbench"
                                className="pm-scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="lg:col-span-7 space-y-8 text-left pm-overview-animate">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            End-to-End Production
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Where advanced technology meets artisanal mastery.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Our manufacturing infrastructure bridges the gap between digital precision and physical artistry. Every piece passes through a rigorously controlled pipeline — from initial CAD engineering through investment casting, hand-setting, and multi-stage finishing — ensuring consistency that meets the exacting standards of global luxury houses.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            By integrating CNC machining, 3D resin prototyping, and traditional goldsmithing under one roof, we eliminate the delays and quality variance that plague fragmented supply chains. The result is a vertically integrated production ecosystem designed for brands that refuse to compromise.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => scrollToSection('pm-capabilities')}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
                            >
                                View Capabilities <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrecisionOverview;
