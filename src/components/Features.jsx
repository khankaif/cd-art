import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import featuresArt from '../assets/features-cad-art.png';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const stats = [
        { value: "40%", label: "Faster Production", desc: "Reduced lead times" },
        { value: "3x", label: "Revenue Growth", desc: "Through expanded catalogs" },
        { value: "0%", label: "Inventory Risk", desc: "Just-in-time manufacturing" }
    ];

    const featuresList = [
        {
            id: 'design',
            title: "Custom Design & CAD",
            subtitle: "From sketch to 3D model in 48 hours.",
            description: "Our world-class design team transforms your concepts into production-ready CAD files with precision and artistry.",
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            id: 'manufacturing',
            title: "Precision Manufacturing",
            subtitle: "Gold, Platinum, and Gemstone setting.",
            description: "State-of-the-art casting and hand-finishing ensure every piece meets the highest luxury standards.",
            icon: <ShieldCheck className="w-5 h-5" />
        },
        {
            id: 'tech',
            title: "Digital Integration",
            subtitle: "Seamless ERP & Catalog API.",
            description: "Connect our manufacturing capabilities directly to your e-commerce store for automated fulfillment.",
            icon: <Clock className="w-5 h-5" />
        }
    ];

    const [activeFeature, setActiveFeature] = useState(0);
    const containerRef = useRef(null);
    const featureRefs = useRef([]);
    const contentRefs = useRef([]);

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

            gsap.from(".feature-header", {
                x: -50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".feature-list",
                    start: "top 80%",
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Accordion Animation
    useEffect(() => {
        contentRefs.current.forEach((el, index) => {
            if (!el) return;

            if (activeFeature === index) {
                gsap.to(el, {
                    height: "auto",
                    opacity: 1,
                    marginTop: 16,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                    duration: 0.4,
                    ease: "power2.in"
                });
            }
        });
    }, [activeFeature]);

    return (
        <section ref={containerRef} className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-b border-gray-200 pb-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item text-left group">
                            <h3 className="text-6xl md:text-8xl font-medium text-luxury-black mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                                {stat.value}
                            </h3>
                            <div className="space-y-1">
                                <p className="text-lg font-medium text-gray-900">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Accordion / Content */}
                <div className="feature-list grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Headers */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-6">
                                The Platform
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif text-luxury-black leading-tight mb-6">
                                Everything you need to scale your jewelry brand.
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                We combine traditional craftsmanship with modern technology to build the infrastructure for the next generation of luxury brands.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8">
                            {featuresList.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    ref={el => featureRefs.current[index] = el}
                                    onClick={() => setActiveFeature(index)}
                                    className={`feature-header p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeFeature === index
                                        ? 'bg-white shadow-lg border-transparent scale-100'
                                        : 'bg-transparent border-transparent hover:bg-gray-100 scale-95 opacity-60'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-medium text-luxury-black flex items-center gap-3">
                                            {feature.icon}
                                            {feature.title}
                                        </h3>
                                        <div className={`transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                                            <ArrowRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                    <p className="text-gray-500 font-light">{feature.subtitle}</p>

                                    <div
                                        ref={el => contentRefs.current[index] = el}
                                        className="overflow-hidden h-0 opacity-0"
                                    >
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl">
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
        </section>
    );
};

export default Features;
