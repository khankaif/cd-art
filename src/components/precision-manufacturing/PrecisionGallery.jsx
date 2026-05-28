import React from 'react';

const PrecisionGallery = ({ galleryItems }) => {
    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] border-y border-gray-100/50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        Manufacturing Floor
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black mb-6">
                        Inside the production atelier.
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                        A curated look into our casting bays, setting benches, and finishing studios where raw metal becomes refined luxury.
                    </p>
                </div>

                {/* Curated Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${item.size} pm-gallery-item`}
                        >
                            <div className="relative aspect-[16/10] md:aspect-auto md:h-[350px] w-full rounded-[2rem] overflow-hidden group border border-gray-100/80 shadow-sm bg-white">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="pm-scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-8 text-left">
                                    <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-1">{item.tag}</p>
                                    <h4 className="text-lg sm:text-xl font-serif text-white tracking-wide">{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrecisionGallery;
