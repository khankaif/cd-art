import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutGallery = () => {
    const galleryRef = useRef(null);
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardTap = (e, index) => {
        const isMobileOrTablet = window.innerWidth < 1024;
        if (!isMobileOrTablet) return;

        setFlippedIndex(prev => prev === index ? null : index);
    };

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

            // Mobile & tablet flip on scroll
            let mm = gsap.matchMedia();
            mm.add("(max-width: 1023px)", () => {
                const cards = gsap.utils.toArray(".gallery-item");
                cards.forEach((card, i) => {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top 60%",
                        end: "bottom 40%",
                        onEnter: () => setFlippedIndex(i),
                        onEnterBack: () => setFlippedIndex(i),
                        onLeave: () => setFlippedIndex(prev => prev === i ? null : prev),
                        onLeaveBack: () => setFlippedIndex(prev => prev === i ? null : prev),
                    });
                });
            });
        }, galleryRef);

        return () => {
            ctx.revert();
        };
    }, []);

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=2664&auto=format&fit=crop",
            alt: "Jewelry CAD Sketching & Rendering",
            aspect: "aspect-[4/5] md:aspect-square",
            title: "CAD Modeling",
            tag: "Engineering",
            description: "Every piece begins as a precise digital blueprint. Advanced CAD modeling allows our designers to refine proportions, structural integrity, and intricate details before production begins."
        },
        {
            src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2574&auto=format&fit=crop",
            alt: "Artisan Goldsmith Benchwork",
            aspect: "aspect-[4/5]",
            title: "Metalsmithing",
            tag: "Craftsmanship",
            description: "Traditional bench skills meet modern manufacturing. Expert artisans shape, assemble, and refine each component to ensure exceptional quality and durability."
        },
        {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop",
            alt: "Microscope Gemstone Setting",
            aspect: "aspect-[4/5] md:aspect-[3/4]",
            title: "Micro-Setting",
            tag: "Precision",
            description: "Microscopic stone-setting techniques ensure perfect alignment, security, and brilliance. Every gemstone is positioned with exceptional accuracy."
        },
        {
            src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
            alt: "Finished Bespoke Luxury Ring",
            aspect: "aspect-square md:aspect-[4/5]",
            title: "Polishing & Finish",
            tag: "Artistry",
            description: "The final stage where craftsmanship comes to life. Multiple finishing processes create flawless surfaces, enhanced reflections, and a luxury-grade presentation."
        }
    ];

    return (
        <div ref={galleryRef} className="py-16 md:py-24 lg:py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center md:text-left md:flex justify-between items-end mb-12 md:mb-20 space-y-4 md:space-y-0">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.map((img, i) => {
                        const isFlipped = flippedIndex === i;
                        return (
                            <div
                                key={i}
                                className={`gallery-item group perspective-1000 rounded-[1.5rem] md:rounded-[2rem] ${img.aspect} cursor-default`}
                                onClick={(e) => handleCardTap(e, i)}
                            >
                                <div
                                    className={`w-full h-full relative preserve-3d transition-transform duration-700 ease-in-out lg:group-hover:rotate-y-180 ${
                                        isFlipped ? 'rotate-y-180' : ''
                                    }`}
                                >
                                    {/* Front Side */}
                                    <div className="absolute inset-0 w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 backface-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-110"
                                        />
                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-all duration-500 flex flex-col justify-end p-6 md:p-8 opacity-0 lg:group-hover:opacity-100">
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-luxury-gold mb-1 md:mb-2">{img.tag}</span>
                                        <h4 className="text-lg md:text-xl font-serif text-white font-medium">{img.title}</h4>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 backface-hidden rotate-y-180 bg-luxury-white border border-luxury-sand flex flex-col justify-center items-center p-6 md:p-8 text-center">
                                    {/* Decorative subtle gold accent tag */}
                                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-luxury-gold/80 mb-1 md:mb-2">
                                        {img.tag}
                                    </span>
                                    
                                    <h4 className="text-xl md:text-2xl font-serif text-luxury-black font-semibold">
                                        {img.title}
                                    </h4>
                                    
                                    {/* Divider line */}
                                    <div className="w-12 h-[1px] bg-luxury-gold my-4" />
                                    
                                    <p className="text-sm font-light text-gray-600 leading-relaxed max-w-[90%]">
                                        {img.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default AboutGallery;
