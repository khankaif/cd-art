import React from 'react';

const BespokeGallery = ({ galleryItems }) => {
    return (
        <section className="py-16 md:py-36 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center md:text-left md:flex justify-between items-end mb-12 md:mb-20 space-y-3 md:space-y-0">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                            Bespoke Gallery
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                            Handcrafted Legacies.
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm font-light text-sm">
                        A curated look at customized commissions and precision benchwork processes from the CD. design floor.
                    </p>
                </div>

                {/* Staggered Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((img, i) => (
                        <div
                            key={i}
                            className={`gallery-item-animate group relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500 ${img.aspect}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-2">{img.tag}</span>
                                <h4 className="text-xl font-serif text-white font-medium">{img.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BespokeGallery;
