import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import featuresArt from '../assets/features-cad-art.png';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const stats = [
        { value: "40%", label: "Faster Production", desc: "Reduced lead times" },
        { value: "3x", label: "Revenue Growth", desc: "Through expanded catalogs" },
        { value: "0%", label: "Inventory Risk", desc: "Just-in-time manufacturing" }
    ];

    const containerRef = useRef(null);

    // Initial Entry Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".features-content-item", {
                y: 30,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-layout",
                    start: "top 80%",
                }
            });

            gsap.from(".features-image-container", {
                opacity: 0,
                scale: 1.05,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".features-layout",
                    start: "top 80%",
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 border-b border-gray-200/60 pb-12 md:pb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item text-left group">
                            <h3 className="text-5xl sm:text-6xl md:text-8xl font-medium text-luxury-black mb-2 md:mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                                {stat.value}
                            </h3>
                            <div className="space-y-1">
                                <p className="text-lg font-medium text-gray-900">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Editorial Two-Column Layout */}
                <div className="features-layout grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left: Brand Messaging */}
                    <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
                        <div className="features-content-item">
                            <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                The Platform
                            </span>
                        </div>
                        <h2 className="features-content-item text-4xl sm:text-5xl md:text-6xl font-serif text-luxury-black leading-tight">
                            Everything you need to scale your jewelry brand.
                        </h2>
                        <p className="features-content-item text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                            We combine traditional craftsmanship with modern technology to build the infrastructure for the next generation of luxury brands.
                        </p>
                    </div>

                    {/* Right: Premium Visual */}
                    <div className="lg:col-span-7 w-full">
                        <div className="features-image-container relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0">
                                <img
                                    src={featuresArt}
                                    alt="Jewelry CAD Design"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;
