import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutGallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".gallery-item",
                { scale: 0.95, opacity: 0, filter: "blur(5px)" },
                {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, galleryRef);

        return () => ctx.revert();
    }, []);

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=2664&auto=format&fit=crop",
            alt: "Jewelry CAD Sketching & Rendering",
            aspect: "aspect-[4/5] md:aspect-square",
            title: "CAD Modeling",
            tag: "Engineering"
        },
        {
            src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2574&auto=format&fit=crop",
            alt: "Artisan Goldsmith Benchwork",
            aspect: "aspect-[4/5]",
            title: "Metalsmithing",
            tag: "Craftsmanship"
        },
        {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop",
            alt: "Microscope Gemstone Setting",
            aspect: "aspect-[4/5] md:aspect-[3/4]",
            title: "Micro-Setting",
            tag: "Precision"
        },
        {
            src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
            alt: "Finished Bespoke Luxury Ring",
            aspect: "aspect-square md:aspect-[4/5]",
            title: "Polishing & Finish",
            tag: "Artistry"
        }
    ];

    return (
        <div ref={galleryRef} className="py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center md:text-left md:flex justify-between items-end mb-20 space-y-4 md:space-y-0">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-6">
                            Behind The Art
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-luxury-black">
                            Inside the Carpediam Studio.
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm font-light text-sm">
                        A curated look inside our workshop and studio floor, where high precision manufacturing brings artistic concepts to reality.
                    </p>
                </div>

                {/* Immersive Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className={`gallery-item group relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500 ${img.aspect}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-2">{img.tag}</span>
                                <h4 className="text-xl font-serif text-white font-medium">{img.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutGallery;
