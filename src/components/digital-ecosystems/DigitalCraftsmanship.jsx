import React from 'react';
import { Hammer } from 'lucide-react';

const DigitalCraftsmanship = () => {
    return (
        <section className="py-24 md:py-36 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Side: Storytelling */}
                    <div className="lg:col-span-7 space-y-8 text-left de-craft-animate order-last lg:order-first">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                            Human Core
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                            Intelligent software. Handmade excellence.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            We believe that technology should never replace the soul of fine jewelry — it should elevate it. Automated algorithms can optimize geometry and coordinate inventories, but they can never replicate the artistic intuition required to polish gold to a perfect mirror finish or align a delicate pavé pattern by hand.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                            Our digital ecosystem is designed to remove administrative friction from our artisans. By automating scheduling, material logistics, and files validation, our master setters and casting directors focus purely on what they do best: creating physical masterworks of high-end jewellery.
                        </p>
                        <div className="pt-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10">
                                <Hammer className="w-4 h-4 text-luxury-gold" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-luxury-black">Artisanal Dedication</span>
                        </div>
                    </div>

                    {/* Right Side: High-End Image */}
                    <div className="lg:col-span-5 de-craft-animate">
                        <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200"
                                alt="Jewellery master setting stone close-up"
                                className="de-scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.8s] ease-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalCraftsmanship;
