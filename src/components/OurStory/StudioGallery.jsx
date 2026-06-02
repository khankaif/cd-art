import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

// Individual interactive luxury card component
const GalleryCard = ({ item }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
    const imgX = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
    const imgY = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]), springConfig);
    const imgScale = useSpring(1.08, springConfig);

    const handleMouseEnter = () => {
        imgScale.set(1.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        imgScale.set(1.08);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={(e) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                const mouseX = e.clientX - rect.left - rect.width / 2;
                const mouseY = e.clientY - rect.top - rect.height / 2;
                x.set(mouseX / rect.width);
                y.set(mouseY / rect.height);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 80, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                perspective: 1000,
                rotateX: rotateX,
                rotateY: rotateY,
            }}
            className={`relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] group border border-white/10 backdrop-blur-[2px] bg-white/5 transition-shadow duration-500 hover:shadow-[0_25px_60px_-10px_rgba(197,160,89,0.2)] ${item.size}`}
        >
            {/* Gradient light sweep on hover */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

            {/* Parallax Image */}
            <motion.img
                src={item.image}
                alt={item.title}
                style={{
                    x: imgX,
                    y: imgY,
                    scale: imgScale,
                }}
                className="absolute inset-0 w-[110%] h-[110%] top-[-5%] left-[-5%] object-cover transition-transform duration-700 ease-out"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

            {/* Bottom-left content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold/90 mb-1.5 block">
                    {item.tag}
                </span>

                <h4 className="text-xl sm:text-2xl font-serif text-white font-medium tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                </h4>
            </div>
        </motion.div>
    );
};

const StudioGallery = () => {
    const scrollContainerRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleryItems = [
        {
            tag: "PROCESS",
            title: "Creative Direction",
            image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1200",
            size: "w-[280px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[360px] md:h-[480px] self-center shrink-0",
        },
        {
            tag: "PROCESS",
            title: "Digital Design",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
            size: "w-[260px] sm:w-[300px] md:w-[420px] h-[280px] sm:h-[300px] md:h-[400px] self-start mt-6 md:mt-12 shrink-0",
        },
        {
            tag: "PROCESS",
            title: "Luxury Branding",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200",
            size: "w-[240px] md:w-[320px] h-[260px] md:h-[340px] self-end mb-6 md:mb-12 shrink-0",
        },
        {
            tag: "PROCESS",
            title: "Studio Environment",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
            size: "w-[260px] sm:w-[300px] md:w-[420px] h-[280px] sm:h-[300px] md:h-[400px] self-center shrink-0",
        },
        {
            tag: "PROCESS",
            title: "Craftsmanship",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200",
            size: "w-[240px] md:w-[320px] h-[260px] md:h-[340px] self-start mt-10 md:mt-20 shrink-0",
        },
        {
            tag: "PROCESS",
            title: "Collaboration",
            image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1200",
            size: "w-[240px] md:w-[320px] h-[260px] md:h-[340px] self-end mb-10 md:mb-20 shrink-0",
        }
    ];

    const scrollToIndex = (index) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const cardElements = container.children;

        if (cardElements[index]) {
            const containerWidth = container.clientWidth;
            const cardWidth = cardElements[index].clientWidth;
            const cardOffsetLeft = cardElements[index].offsetLeft;

            // Calculate center-aligned scroll target
            const targetScrollLeft = Math.max(0, cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2));

            isAnimatingRef.current = true;
            setCurrentIndex(index);

            animate(container.scrollLeft, targetScrollLeft, {
                duration: 0.7,
                ease: "easeInOut",
                onUpdate: (latest) => {
                    container.scrollLeft = latest;
                },
                onComplete: () => {
                    setTimeout(() => {
                        isAnimatingRef.current = false;
                    }, 50);
                }
            });
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < galleryItems.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (isAnimatingRef.current) return;
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;
            const cardElements = container.children;

            let closestIndex = 0;
            let minDistance = Infinity;

            for (let i = 0; i < galleryItems.length; i++) {
                if (cardElements[i]) {
                    const cardWidth = cardElements[i].clientWidth;
                    const cardCenterScroll = cardElements[i].offsetLeft - (containerWidth / 2) + (cardWidth / 2);
                    const distance = Math.abs(cardCenterScroll - scrollLeft);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = i;
                    }
                }
            }

            if (closestIndex !== currentIndex) {
                setCurrentIndex(closestIndex);
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex, galleryItems.length]);

    return (
        <section className="py-16 md:py-36 bg-[#FAF9F6] border-y border-gray-100/50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Header Section */}
                <div className="text-center md:text-left md:flex justify-between items-end mb-12 md:mb-16 space-y-3 md:space-y-0">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                            The Studio
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                            Visual processes of creation.
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm font-light text-sm">
                        A curated look inside our workshop and studio floor, where high precision manufacturing brings artistic concepts to reality.
                    </p>
                </div>

                {/* Slider Relative Wrapper */}
                <div className="relative w-full">
                    {/* Left Floating Navigation Button */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-md hover:-translate-y-[calc(50%+4px)] active:scale-95 transition-all flex items-center justify-center text-luxury-black hover:bg-gray-50 focus:outline-none ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'
                            }`}
                        style={{ transition: 'all 0.4s ease' }}
                        aria-label="Previous slide"
                    >
                        <span className="text-lg">←</span>
                    </button>

                    {/* Right Floating Navigation Button */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === galleryItems.length - 1}
                        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-md hover:-translate-y-[calc(50%+4px)] active:scale-95 transition-all flex items-center justify-center text-luxury-black hover:bg-gray-50 focus:outline-none ${currentIndex === galleryItems.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'
                            }`}
                        style={{ transition: 'all 0.4s ease' }}
                        aria-label="Next slide"
                    >
                        <span className="text-lg">→</span>
                    </button>

                    {/* Horizontal Scrolling Track */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 md:gap-12 px-6 md:px-[35vw] items-center h-[340px] md:h-[520px] overflow-x-auto hide-scrollbar">
                        {galleryItems.map((item, idx) => (
                            <div key={idx} className="snap-center shrink-0">
                                <GalleryCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StudioGallery;
