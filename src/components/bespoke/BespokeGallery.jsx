import React from 'react';

const BespokeGallery = ({ galleryItems }) => {
    return (
        <section className="py-24 md:py-48 bg-luxury-white border-b border-luxury-black/5 overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                
                <div className="flex flex-col items-center text-center mb-24 md:mb-32">
                    <div className="text-reveal flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                            The Archive
                        </span>
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                    </div>
                    <h2 className="text-reveal text-4xl sm:text-5xl lg:text-7xl font-serif text-luxury-black font-light tracking-tight max-w-3xl">
                        Handcrafted Legacies.
                    </h2>
                </div>

                {/* Asymmetric Editorial Grid */}
                <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-32">
                    {galleryItems.map((img, i) => {
                        // Create an alternating, highly asymmetrical masonry feel
                        let colSpan = "col-span-12 md:col-span-6";
                        let offset = "";
                        
                        if (i % 4 === 0) {
                            colSpan = "col-span-12 md:col-span-7";
                            offset = "md:mt-0";
                        } else if (i % 4 === 1) {
                            colSpan = "col-span-12 md:col-span-4 md:col-start-9";
                            offset = "md:mt-24";
                        } else if (i % 4 === 2) {
                            colSpan = "col-span-12 md:col-span-5";
                            offset = "md:mt-12";
                        } else {
                            colSpan = "col-span-12 md:col-span-6 md:col-start-7";
                            offset = "md:-mt-24";
                        }

                        return (
                            <div key={i} className={`${colSpan} ${offset}`}>
                                <div className="living-frame relative w-full p-2 bg-white shadow-xl group">
                                    <div className={`relative w-full overflow-hidden ${img.aspect}`}>
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover scale-110 transition-transform duration-[2s] group-hover:scale-100"
                                        />
                                        <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                                        
                                        {/* Cinematic dark hover overlay */}
                                        <div className="absolute inset-0 bg-luxury-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                                    </div>
                                    
                                    {/* Gold frame border */}
                                    <div className="absolute inset-0 border border-luxury-gold/20 m-2 pointer-events-none z-20 transition-all duration-700 group-hover:m-4 group-hover:border-luxury-gold/40"></div>
                                </div>
                                
                                {/* Elegant offset caption */}
                                <div className="text-reveal mt-6 md:ml-4 flex flex-col items-start text-left">
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-medium mb-2">{img.tag}</span>
                                    <h4 className="text-xl md:text-2xl font-serif text-luxury-black font-light">{img.title}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BespokeGallery;
