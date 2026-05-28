import React from 'react';
import { Network } from 'lucide-react';

const DigitalInfrastructure = () => {
    return (
        <section id="de-infrastructure" className="py-24 md:py-36 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Side: Layered Graphic Visual */}
                    <div className="lg:col-span-6 de-infra-animate relative">
                        {/* Outer Container with thin tech grid */}
                        <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200/50 bg-white p-4">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200"
                                alt="Precision CAD modeling workspace"
                                className="de-scroll-zoom-img w-full h-full object-cover rounded-[1.5rem] relative z-10 opacity-95 transition-transform duration-[1.8s] ease-out"
                            />
                        </div>
                        
                        {/* Layered Floating glass card */}
                        <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 max-w-[280px] p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 flex-shrink-0">
                                <Network className="w-5 h-5 text-luxury-gold" />
                            </div>
                            <div className="text-left">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-luxury-gold block mb-0.5">Live ERP Integration</span>
                                <h4 className="text-sm font-semibold text-luxury-black">Bidirectional Sync</h4>
                                <p className="text-[10px] text-gray-400 font-light mt-1">Zero manual re-entry, immediate validation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Editorial Context */}
                    <div className="lg:col-span-6 space-y-8 text-left de-infra-animate lg:pl-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            Enterprise Connectivity
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            A digital nervous system for your fine jewellery production.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Fragmented workflows are the primary barrier to scale for luxury design houses. CD. Integrated Digital Ecosystems serve as a secure bridge between your front-end customer interaction and our physical casting atelier. By centralizing operations, inventory, and CAD models, we bring enterprise connectivity to high-end jewelry manufacturing.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Our API endpoints and ERP connectors ingest orders instantly, cross-reference them against available metal reserves and diamond supplies, validate dimensions digitally, and deploy plans to automated casting ovens — all within minutes of customer checkout.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200/60">
                            <div>
                                <h4 className="text-2xl font-serif text-luxury-black font-semibold">100%</h4>
                                <p className="text-xs text-gray-400 font-light mt-1">Real-Time Sync Accuracy</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-serif text-luxury-black font-semibold">&lt; 15m</h4>
                                <p className="text-xs text-gray-400 font-light mt-1">CAD Validation Latency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalInfrastructure;
