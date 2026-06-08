import React from 'react';

const DigitalLuxuryFuture = ({ parallaxBgRef }) => {
    return (
        <section className="de-parallax-trigger relative py-48 md:py-64 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <div
                    ref={parallaxBgRef}
                    className="w-full h-[140%] bg-cover bg-center absolute top-[-20%] left-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2500')` }}
                >
                    <div className="absolute inset-0 bg-luxury-black/75 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center de-immersive-animate">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold inline-block mb-8">
                    The Luxury Future
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-snug tracking-tight font-light">
                    Where fine jewellery craftsmanship <br />
                    <span className="italic font-light text-gray-400 font-serif">meets intelligent technology.</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/50 font-light max-w-lg mx-auto leading-relaxed mt-10 tracking-wide">
                    Connect with the CD. Integrated Digital Ecosystem to optimize operations, automate logistics, and guarantee perfection at micron scales.
                </p>
                <div className="w-12 h-[1px] bg-luxury-gold/50 mx-auto mt-12"></div>
            </div>
        </section>
    );
};

export default DigitalLuxuryFuture;
