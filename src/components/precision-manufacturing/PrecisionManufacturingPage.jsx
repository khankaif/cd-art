import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Cpu,
    Gem,
    Compass,
    Sparkles,
    Layers,
    Shield,
    Zap,
    Eye,
    Users,
    Globe,
    Clock,
    Award,
    Wrench,
    Settings
} from 'lucide-react';

import PrecisionHero from './PrecisionHero';
import PrecisionOverview from './PrecisionOverview';
import PrecisionCapabilities from './PrecisionCapabilities';
import PrecisionTimeline from './PrecisionTimeline';
import PrecisionGallery from './PrecisionGallery';
import PrecisionWhyChoose from './PrecisionWhyChoose';
import PrecisionCTA from './PrecisionCTA';

gsap.registerPlugin(ScrollTrigger);

const PrecisionManufacturingPage = () => {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const parallaxBgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Hero Entrance — staggered blur-to-clear fade-up
            const heroTl = gsap.timeline();
            heroTl.fromTo(".pm-hero-animate",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );

            // 2. Hero Background Parallax
            if (heroBgRef.current) {
                gsap.to(heroBgRef.current, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                    y: 120,
                    scale: 1.05
                });
            }

            // 3. Section Reveal Animators
            const revealSelectors = [
                ".pm-overview-animate",
                ".pm-capability-card",
                ".pm-parallax-content",
                ".pm-timeline-node",
                ".pm-timeline-card",
                ".pm-gallery-item",
                ".pm-why-card",
                ".pm-cta-animate"
            ];

            revealSelectors.forEach((selector) => {
                gsap.utils.toArray(selector).forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });

            // 4. Immersive Parallax Background
            if (parallaxBgRef.current) {
                gsap.to(parallaxBgRef.current, {
                    scrollTrigger: {
                        trigger: ".pm-parallax-trigger",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    },
                    y: -100
                });
            }

            // 5. Gallery image zoom-on-scroll
            gsap.utils.toArray(".pm-scroll-zoom-img").forEach((img) => {
                gsap.fromTo(img,
                    { scale: 1.0 },
                    {
                        scale: 1.08,
                        scrollTrigger: {
                            trigger: img,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });

        }, pageRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    // Scroll to section helper
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Core capabilities data
    const capabilities = [
        {
            icon: <Cpu className="w-6 h-6 text-luxury-gold" />,
            title: "CAD Modeling",
            desc: "Precision-engineered 3D digital models with micron-level accuracy, enabling flawless translation from concept to physical form."
        },
        {
            icon: <Layers className="w-6 h-6 text-luxury-gold" />,
            title: "Resin & Wax Prototyping",
            desc: "High-resolution 3D printed prototypes for tactile design validation before committing to precious metal casting."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
            title: "Precision Casting",
            desc: "Lost-wax and investment casting in 18K gold, platinum, and sterling silver with controlled temperature metallurgy."
        },
        {
            icon: <Gem className="w-6 h-6 text-luxury-gold" />,
            title: "Diamond Setting",
            desc: "Master-level micro-pavé, channel, bezel, and prong settings executed under microscopic precision by seasoned artisans."
        },
        {
            icon: <Settings className="w-6 h-6 text-luxury-gold" />,
            title: "CNC Manufacturing",
            desc: "Computer-controlled milling for intricate metal components requiring absolute geometric consistency across production runs."
        },
        {
            icon: <Compass className="w-6 h-6 text-luxury-gold" />,
            title: "Hand Polishing",
            desc: "Multi-stage hand finishing by master polishers achieving mirror-grade lustre on all precious metal surfaces."
        },
        {
            icon: <Shield className="w-6 h-6 text-luxury-gold" />,
            title: "Rhodium Finishing",
            desc: "Professional rhodium and gold plating processes providing superior surface protection and enhanced visual brilliance."
        },
        {
            icon: <Eye className="w-6 h-6 text-luxury-gold" />,
            title: "Quality Inspection",
            desc: "Multi-point inspection protocol covering carat weight, stone alignment, metal purity, and structural integrity verification."
        }
    ];

    // Production timeline data
    const timelineSteps = [
        {
            step: "01",
            title: "Design Consultation",
            desc: "Collaborative dialogue with our creative directors to align on vision, material specifications, production volume, and delivery milestones."
        },
        {
            step: "02",
            title: "CAD Engineering",
            desc: "Our digital craftsmen construct precise 3D models, optimizing structural integrity, gem pocket placement, and metal thickness ratios."
        },
        {
            step: "03",
            title: "Prototype Development",
            desc: "Physical resin prototypes are 3D printed for hands-on evaluation of volume, weight distribution, comfort, and aesthetic proportions."
        },
        {
            step: "04",
            title: "Precision Casting",
            desc: "Investment casting in controlled furnaces using ethically sourced gold alloys with precise temperature and pressure calibration."
        },
        {
            step: "05",
            title: "Stone Setting",
            desc: "Master setters hand-mount each gemstone under 10x magnification, ensuring perfect alignment, security, and light performance."
        },
        {
            step: "06",
            title: "Surface Finishing",
            desc: "Progressive hand-polishing, rhodium plating, and satin finishing techniques to achieve the specified surface aesthetic."
        },
        {
            step: "07",
            title: "Quality Control",
            desc: "Comprehensive multi-point inspection covering weight tolerance, stone security, surface finish grade, and hallmarking compliance."
        },
        {
            step: "08",
            title: "Secure Delivery",
            desc: "Insured worldwide shipping with luxury packaging, certification documentation, and dedicated logistics coordination."
        }
    ];

    // Gallery items
    const galleryItems = [
        {
            src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000",
            alt: "Artisan goldsmithing on workbench",
            title: "Goldsmith Benchwork",
            tag: "Craftsmanship",
            size: "col-span-12 md:col-span-7"
        },
        {
            src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000",
            alt: "Loose diamonds being sorted for setting",
            title: "Diamond Sorting",
            tag: "Gemology",
            size: "col-span-12 md:col-span-5"
        },
        {
            src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000",
            alt: "CAD modeling workstation close-up",
            title: "CAD Precision",
            tag: "Digital Design",
            size: "col-span-12 md:col-span-5"
        },
        {
            src: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1000",
            alt: "Microscopic gem setting detail",
            title: "Micro-Setting",
            tag: "Precision",
            size: "col-span-12 md:col-span-7"
        },
        {
            src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000",
            alt: "Finished luxury necklace with diamonds",
            title: "Finished Masterpiece",
            tag: "Fine Artistry",
            size: "col-span-12 md:col-span-6"
        },
        {
            src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000",
            alt: "Artisan polishing precious metal surface",
            title: "Mirror Polishing",
            tag: "Finishing",
            size: "col-span-12 md:col-span-6"
        }
    ];

    // Why choose us data
    const advantages = [
        {
            icon: <Zap className="w-5 h-5 text-luxury-gold" />,
            title: "Scalable Manufacturing",
            desc: "From single bespoke commissions to production runs of thousands — our pipeline scales without compromising artisanal quality."
        },
        {
            icon: <Globe className="w-5 h-5 text-luxury-gold" />,
            title: "Export-Grade Quality",
            desc: "Every piece meets international hallmarking standards, certified for global markets including EU, US, and Middle Eastern luxury retail."
        },
        {
            icon: <Shield className="w-5 h-5 text-luxury-gold" />,
            title: "Ethical Sourcing",
            desc: "100% conflict-free certified stones, recycled gold options, and fully transparent supply chain documentation for every commission."
        },
        {
            icon: <Clock className="w-5 h-5 text-luxury-gold" />,
            title: "Rapid Turnaround",
            desc: "Our integrated CAD-to-casting pipeline reduces typical lead times by 60%, with expedited options for urgent collections."
        },
        {
            icon: <Award className="w-5 h-5 text-luxury-gold" />,
            title: "Precision Consistency",
            desc: "Computer-aided manufacturing ensures micron-level consistency across entire production batches with zero tolerance for deviation."
        },
        {
            icon: <Users className="w-5 h-5 text-luxury-gold" />,
            title: "Experienced Artisans",
            desc: "A curated team of master goldsmiths, gem-setters, and polishers with combined decades of fine jewelry manufacturing expertise."
        },
        {
            icon: <Wrench className="w-5 h-5 text-luxury-gold" />,
            title: "Modern Machinery",
            desc: "State-of-the-art CNC mills, laser welders, 3D printers, and rhodium plating stations integrated into a seamless production floor."
        }
    ];

    return (
        <div ref={pageRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            <PrecisionHero heroRef={heroRef} heroBgRef={heroBgRef} scrollToSection={scrollToSection} />
            <PrecisionOverview scrollToSection={scrollToSection} />
            <PrecisionCapabilities capabilities={capabilities} />
            <PrecisionCTA parallaxBgRef={parallaxBgRef} />
            <PrecisionTimeline timelineSteps={timelineSteps} />
            <PrecisionGallery galleryItems={galleryItems} />
            <PrecisionWhyChoose advantages={advantages} />
        </div>
    );
};

export default PrecisionManufacturingPage;
