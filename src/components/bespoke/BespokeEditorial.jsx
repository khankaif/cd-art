import React from 'react';
import { ArrowRight } from 'lucide-react';

const BespokeEditorial = ({ scrollToSection }) => {
    return (
        <div id="editorial-sections" className="bg-luxury-white text-luxury-black overflow-hidden pt-24 pb-32">

            {/* 2.1 Custom Design Consultation (Asymmetric Layout) */}
            <section className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px] mb-32 lg:mb-48">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-5/12 order-2 lg:order-1">
                        <div className="text-reveal flex items-center gap-4 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">Phase I</span>
                            <span className="w-12 h-[1px] bg-luxury-gold"></span>
                        </div>
                        <h2 className="text-reveal text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 font-light">
                            The Initial<br />
                            <span className="italic text-luxury-black/60">Dialogue.</span>
                        </h2>
                        <p className="text-reveal text-sm sm:text-base text-luxury-black/60 leading-[1.8] font-light max-w-md border-l border-luxury-gold/30 pl-6">
                            Every masterpiece begins with an open conversation. We work directly with you to understand the sentimental weight, visual aesthetic, and metal characteristics you desire, sourcing unique stones that complement your personal narrative.
                        </p>
                    </div>
                    
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <div className="living-frame relative aspect-[4/3] w-full p-4 bg-white shadow-2xl">
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000"
                                    alt="Consultation desk"
                                    className="w-full h-full object-cover scale-110"
                                />
                                <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                            </div>
                            <div className="absolute inset-0 border border-luxury-gold/20 m-2 pointer-events-none z-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.2 Sketch to Reality (Offset Editorial) */}
            <section className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px] mb-32 lg:mb-48">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="w-full lg:w-1/2">
                        <div className="living-frame relative aspect-[3/4] w-full lg:w-[80%] p-3 bg-white shadow-xl rotate-[-2deg]">
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1200"
                                    alt="Jewelry designer sketch"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                                />
                                <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                            </div>
                            <div className="absolute inset-0 border border-luxury-gold/30 m-3 pointer-events-none z-20"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="text-reveal flex items-center gap-4 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">Phase II</span>
                            <span className="w-12 h-[1px] bg-luxury-gold"></span>
                        </div>
                        <h2 className="text-reveal text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 font-light">
                            Conceptual<br />
                            <span className="italic text-luxury-black/60">Drafting.</span>
                        </h2>
                        <p className="text-reveal text-sm sm:text-base text-luxury-black/60 leading-[1.8] font-light max-w-md mb-10">
                            Our designers craft bespoke conceptual drafts. These designs play with gemstone refraction, metallic balance, and handwear comfort. We iterate alongside you, tweaking details until the concept feels entirely authentic to your vision.
                        </p>
                        <div className="text-reveal group">
                            <button
                                onClick={() => scrollToSection('timeline-section')}
                                className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-black pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer"
                            >
                                View Timeline <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-black/20"></span>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.3 CAD & Precision Engineering (Full Bleed Parallax with Floating Frame) */}
            <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden mb-32 lg:mb-48">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div
                        className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center grayscale"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000')` }}
                    />
                    <div className="absolute inset-0 bg-luxury-black/80" />
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px] relative z-10 flex justify-end">
                    <div className="w-full lg:w-5/12 bg-luxury-black/90 backdrop-blur-xl p-10 md:p-16 border border-luxury-gold/20 shadow-2xl relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-luxury-gold/50"></div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-luxury-gold/50"></div>
                        
                        <div className="text-reveal flex items-center gap-4 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">Phase III</span>
                            <span className="w-12 h-[1px] bg-luxury-gold"></span>
                        </div>
                        <h2 className="text-reveal text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-white leading-[1.1] mb-8 font-light">
                            Structural<br />
                            <span className="italic text-luxury-white/60">Integrity.</span>
                        </h2>
                        <p className="text-reveal text-sm text-luxury-white/60 leading-[1.8] font-light">
                            Using digital modeling algorithms, we construct a micro-precise CAD rendering. This allows us to calibrate exact metal thicknesses and gem placement pockets down to the hundredth of a millimeter, ensuring structural permanence.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2.4 Gemstone Selection & Craftsmanship (Dual Asymmetry) */}
            <section className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                    
                    {/* Floating Center Text */}
                    <div className="lg:col-span-4 lg:col-start-5 order-2 lg:order-1 text-center lg:text-left z-20">
                        <div className="text-reveal flex justify-center lg:justify-start items-center gap-4 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">Phase IV & V</span>
                        </div>
                        <h2 className="text-reveal text-4xl sm:text-5xl font-serif leading-[1.1] mb-8 font-light">
                            Sourcing &<br />
                            <span className="italic text-luxury-black/60">Execution.</span>
                        </h2>
                        <p className="text-reveal text-sm text-luxury-black/60 leading-[1.8] font-light mb-8">
                            We source stones according to clarity, depth of hue, and individual personality. Finally, your piece is delivered to our master goldsmiths who hand-set every stone under microscopes to absolute brilliance.
                        </p>
                    </div>

                    {/* Images Flanking */}
                    <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 order-1 lg:order-2">
                        <div className="living-frame relative aspect-[4/5] w-full p-2 bg-white shadow-lg translate-y-0 lg:-translate-y-12">
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200"
                                    alt="Sorting diamonds"
                                    className="w-full h-full object-cover scale-110"
                                />
                                <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1 order-3">
                        <div className="living-frame relative aspect-[3/4] w-[80%] mx-auto lg:w-full p-2 bg-white shadow-xl translate-y-0 lg:translate-y-24">
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2000"
                                    alt="Microscope setting"
                                    className="w-full h-full object-cover scale-110"
                                />
                                <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    );
};

export default BespokeEditorial;
