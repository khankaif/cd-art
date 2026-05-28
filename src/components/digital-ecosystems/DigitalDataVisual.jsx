import React from 'react';

const DigitalDataVisual = () => {
    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side: Mock Dashboard Panel */}
                    <div className="lg:col-span-7 de-live-animate">
                        <div className="bg-luxury-black border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden text-left font-sans">
                            {/* Dashboard background glow */}
                            <div className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] rounded-full bg-luxury-gold/5 blur-[50px] pointer-events-none"></div>
                            
                            {/* Header Row */}
                            <div className="flex flex-wrap justify-between items-center pb-6 border-b border-white/10 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-xs font-mono font-medium tracking-[0.2em] text-white/80">CD. LIVE DATASTREAM</span>
                                </div>
                                <span className="text-[9px] font-mono text-white/40 tracking-wider">EST. LATENCY: 14ms</span>
                            </div>

                            {/* Main Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">API Success Rate</span>
                                    <span className="text-xl font-mono text-luxury-gold font-light tracking-tight">99.98%</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">Casting Latency</span>
                                    <span className="text-xl font-mono text-white font-light tracking-tight">48 Hours</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">Active Casts</span>
                                    <span className="text-xl font-mono text-white font-light tracking-tight">64 units</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">CAD Auto-Check</span>
                                    <span className="text-xl font-mono text-luxury-gold font-light tracking-tight">Passed</span>
                                </div>
                            </div>

                            {/* Active Order Progress Visual */}
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-white/60">ACTIVE WORKORDER: #CD-9273</span>
                                    <span className="text-luxury-gold">STAGE: CAS-04 (CASTING PRECIOUS METAL)</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-luxury-gold rounded-full w-2/3 animate-pulse"></div>
                                </div>
                                <div className="grid grid-cols-3 text-[9px] text-white/40 font-mono">
                                    <span>01 / CAD OK</span>
                                    <span className="text-center text-luxury-gold/80">02 / 3D PRINT OK</span>
                                    <span className="text-right">03 / CASTING</span>
                                </div>
                            </div>

                            {/* Minimalist Production Volume Visual */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-mono text-white/60">SYSTEM LOAD // ATELIER ANTWERP</span>
                                    <span className="text-[10px] font-mono text-white/40">WEEKLY STATS</span>
                                </div>
                                {/* Mock thin vertical bar graph */}
                                <div className="flex items-end justify-between h-20 px-2">
                                    {[40, 65, 80, 55, 95, 75, 45].map((val, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-2 w-full">
                                            <div className="w-1.5 bg-white/10 rounded-t-full h-20 relative overflow-hidden">
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 bg-luxury-gold/70"
                                                    style={{ height: `${val}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[9px] font-mono text-white/30">
                                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Description */}
                    <div className="lg:col-span-5 text-left space-y-6 de-live-animate">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            Operational Intelligence
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Complete manufacturing transparency.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Traditional jewellery houses are plagued by opaque production timelines. Our data visual systems provide your inventory coordinators and product teams with real-time insight into the factory floor.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            From tracking diamond setters' allocations to monitoring heat cycles of casting kilns, every metric is integrated into your client dashboard, creating an elegant ecosystem of operational precision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalDataVisual;
