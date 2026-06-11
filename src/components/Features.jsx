import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import featuresArt from '../assets/features-cad-art.png';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const stats = [
        { value: "0.01mm", label: "Micro-Precision", desc: "Engineered for flawless gemstone seating" },
        { value: "100%", label: "Traceability", desc: "Strict conflict-free sourcing protocols" },
        { value: "10K+", label: "Unit Capacity", desc: "Maintained at uncompromising artisanal quality" }
    ];

    const containerRef = useRef(null);

    // Initial Entry Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                y: 50,
                opacity: 0,
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
        <section ref={containerRef} className="py-24 md:py-32 bg-luxury-white border-t border-luxury-black/5">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">

                {/* Editorial Two-Column Layout */}
                <div className="features-layout grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24 md:mb-32">

                    {/* Left: Brand Messaging */}
                    <div className="lg:col-span-5 flex flex-col gap-4 text-left">
                        <div className="features-content-item flex flex-col gap-4 items-start mb-2">
                            <span className="w-[1px] h-12 bg-luxury-gold/40"></span>
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-luxury-gold font-medium block">
                                04 // Quality Assurance
                            </span>
                        </div>
                        <h2 className="features-content-item text-4xl sm:text-5xl lg:text-6xl font-serif text-luxury-black tracking-tighter leading-[1.05] font-light">
                            Uncompromising Standards.<br/>
                            <span className="italic text-luxury-black/60">Guaranteed at Scale.</span>
                        </h2>
                        <p className="features-content-item text-luxury-black/60 text-sm sm:text-base font-light leading-[1.8] tracking-wide mt-4">
                            We do not simply manufacture; we engineer perfection. Every piece passes through rigorous, multi-stage quality control under microscopes. We safeguard your brand's reputation by ensuring that volume never compromises artistry.
                        </p>
                    </div>

                    {/* Right: Premium Visual */}
                    <div className="lg:col-span-7 w-full">
                        <div className="features-image-container relative aspect-[4/3] sm:aspect-[16/10] bg-gray-100 rounded-[14px] overflow-hidden">
                            <img
                                src={featuresArt}
                                alt="Jewelry CAD Design"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-luxury-black/5 mix-blend-multiply pointer-events-none"></div>
                        </div>
                    </div>

                </div>

                {/* Stats Grid (Spec Sheet Style) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-luxury-black/10">
                    {stats.map((stat, i) => (
                        <div key={i} className={`stat-item flex flex-col py-10 px-6 lg:px-12 group ${i !== 0 ? 'sm:border-l border-t sm:border-t-0 border-luxury-black/10' : ''}`}>
                            <h3 className="text-5xl sm:text-6xl md:text-7xl font-serif text-luxury-black mb-4 font-light tracking-tighter transition-transform duration-500 origin-left">
                                {stat.value}
                            </h3>
                            <div className="space-y-2 mt-auto">
                                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-luxury-black font-medium">{stat.label}</p>
                                <p className="text-sm font-light text-luxury-black/60 leading-relaxed">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
