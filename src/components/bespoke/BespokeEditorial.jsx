import React from 'react';
import { ArrowRight } from 'lucide-react';

const BespokeEditorial = ({ scrollToSection }) => {
    return (
        <div id="editorial-sections" className="bg-white">

            {/* 2.1 Custom Design Consultation (Overlay) */}
            <section className="relative h-[80vh] md:h-screen w-full flex items-center overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000')` }}
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent hidden md:block" />
                    <div className="absolute inset-0 bg-white/70 md:hidden" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="editorial-text-animate max-w-xl text-left bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                            Phase One
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Custom Design Consultation
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Every piece begins with an open conversation. We work directly with you to understand the sentimental weight, visual aesthetic, and metal characteristics you desire, sourcing unique stones that complement your personal timeline.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2.2 Sketch to Reality (Grid Layout) */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        {/* Left Image */}
                        <div className="lg:col-span-5 editorial-image-animate">
                            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100/50 group bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1200"
                                    alt="Jewelry designer sketch drawing details"
                                    className="scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        {/* Right Text */}
                        <div className="lg:col-span-7 space-y-8 text-left editorial-text-animate">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                Phase Two
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                Translating your narrative from sketch to reality.
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                Our designers craft bespoke conceptual drafts. These designs play with gemstone refraction, metallic balance, and handwear comfort. We iterate alongside you, tweaking details until the concept feels entirely authentic.
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => scrollToSection('timeline-section')}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors duration-300"
                                >
                                    Learn Timeline Details <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.3 CAD & Precision Engineering (Overlay) */}
            <section className="relative h-[80vh] md:h-screen w-full flex items-center overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000')` }}
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/10" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/40 to-transparent hidden md:block" />
                    <div className="absolute inset-0 bg-white/70 md:hidden" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 flex justify-end">
                    <div className="editorial-text-animate max-w-xl text-left bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                            Phase Three
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            CAD & Precision Engineering
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Using digital modeling algorithms, we construct a micro-precise CAD rendering of the design. This allows us to calibrate exact metal thicknesses and gem placement pockets down to the hundredth of a millimeter, ensuring structural permanence.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2.4 Gemstone Selection (Grid Layout) */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        {/* Left Text (Appears first on desktop, orders second on mobile) */}
                        <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 text-left editorial-text-animate">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                Phase Four
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                Selecting the perfect gemstone.
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                We maintain direct relationships with moral diamond houses and boutique gem cutters globally. Our gemologists source stones according to clarity, depth of hue, and individual personality, matching the design's structural framework perfectly.
                            </p>
                        </div>
                        {/* Right Image */}
                        <div className="lg:col-span-5 order-1 lg:order-2 editorial-image-animate">
                            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100/50 group bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200"
                                    alt="Sorting loose high grade diamonds"
                                    className="scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 Artisan Craftsmanship (Overlay) */}
            <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2000')` }}
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/15" />
                    <div className="absolute inset-0 bg-white/70" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 flex justify-center">
                    <div className="editorial-text-animate max-w-2xl text-center bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                            Phase Five
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Traditional Artisan Craftsmanship
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Finally, your cast piece is delivered to our master goldsmiths. Using microscopic loupes and high-precision tools, they mount each individual claw, hand-set every stone, and polish the metal surfaces to absolute brilliance.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BespokeEditorial;
