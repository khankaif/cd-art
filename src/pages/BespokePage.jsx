import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    Sparkles, 
    Compass, 
    Cpu, 
    ArrowRight, 
    UserCheck, 
    Mail, 
    Phone, 
    Instagram, 
    MapPin, 
    Gem, 
    Lightbulb, 
    Check 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BespokePage = () => {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const ctaBgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Entrance Animations
            const heroTl = gsap.timeline();
            heroTl.fromTo(".hero-animate", 
                { opacity: 0, y: 40, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );

            // 2. Hero Background Parallax
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

            // 3. Section Reveal Animators (ScrollTriggered)
            const revealSelectors = [
                ".editorial-text-animate",
                ".editorial-image-animate",
                ".gallery-item-animate",
                ".philosophy-card-animate",
                ".timeline-node-animate",
                ".timeline-card-animate",
                ".cta-content-animate",
                ".contact-card-animate"
            ];

            revealSelectors.forEach((selector) => {
                gsap.utils.toArray(selector).forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 50, filter: "blur(6px)" },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
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

            // 4. Parallax scroll effect for editorial full-bleed background images
            gsap.utils.toArray(".editorial-parallax-bg").forEach((bg) => {
                gsap.to(bg, {
                    scrollTrigger: {
                        trigger: bg.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    },
                    y: 80
                });
            });

            // 5. Image Zoom-on-scroll for grid images
            gsap.utils.toArray(".scroll-zoom-img").forEach((img) => {
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

    // Design philosophy card data
    const philosophies = [
        {
            icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
            title: "Creativity",
            desc: "We push the boundaries of shape and balance, co-designing pieces that embody deeply personal narratives and artistic vision."
        },
        {
            icon: <Compass className="w-6 h-6 text-luxury-gold" />,
            title: "Precision",
            desc: "Every curve and gem pocket is mathematically modeled down to the micron, ensuring flawless setting integrity and structural longevity."
        },
        {
            icon: <Gem className="w-6 h-6 text-luxury-gold" />,
            title: "Personalization",
            desc: "From custom ring layouts to specialized gemstone placement, you are involved at every step of the design journey."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-luxury-gold" />,
            title: "Innovation",
            desc: "By blending rapid 3D prototyping with old-world hand finishing, we create intricate structures impossible to craft by hand alone."
        }
    ];

    // Immersive staggered gallery data
    const galleryItems = [
        {
            src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000",
            alt: "Artisan gold polishing workshop detail",
            title: "Goldsmith Benchwork",
            tag: "Craftsmanship",
            aspect: "aspect-[4/5]"
        },
        {
            src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000",
            alt: "Selecting raw diamond gemstones",
            title: "Gemstone Selection",
            tag: "Sourcing",
            aspect: "aspect-square md:aspect-[3/4]"
        },
        {
            src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000",
            alt: "Finished diamond and white gold bespoke necklace",
            title: "The Finished Masterpiece",
            tag: "Fine Artistry",
            aspect: "aspect-square md:aspect-[4/5]"
        },
        {
            src: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1000",
            alt: "Precise gemstone micro-setting process",
            title: "Micro-Setting Detail",
            tag: "Precision",
            aspect: "aspect-[4/5] md:aspect-square"
        }
    ];

    // Process milestones
    const timelineSteps = [
        {
            step: "01",
            title: "Initial Consultation",
            desc: "Share your vision, design inspirations, and metal preferences with our directors. We discuss gemstone options, budget targets, and timeline milestones."
        },
        {
            step: "02",
            title: "Concept Sketching",
            desc: "Our design team translates your narrative into hand-drawn digital sketches. We refine proportions and aesthetic flows together until the direction feels perfect."
        },
        {
            step: "03",
            title: "CAD & Precision Modeling",
            desc: "We construct a microscopic 3D model of your design. This digital twin lets you view exact dimensions and stone alignment renders before casting begins."
        },
        {
            step: "04",
            title: "Physical Prototyping",
            desc: "Your CAD is translated into a highly detailed 3D wax resin print. This physical prototype allows you to verify volume, fit, and proportions in hand."
        },
        {
            step: "05",
            title: "Artisan Craftsmanship",
            desc: "Our master bench jewelers cast the piece in ethically sourced gold or platinum, hand-set each diamond under microscope, and finish it to a mirror-like polish."
        }
    ];

    // Form submission helper
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your bespoke consultation request has been received. Our directors will reach out to you within 24 hours.");
        e.target.reset();
    };

    return (
        <div ref={pageRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            
            {/* 1. LUXURY HERO SECTION */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100 bg-white">
                <div ref={heroBgRef} className="absolute inset-0 z-0">
                    <div
                        className="w-full h-[125%] bg-cover bg-center absolute top-0 left-0"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2574')` }}
                    >
                        {/* Grayscale aesthetic styling & overlays */}
                        <div className="absolute inset-0 bg-[#FAF9F6]/45 backdrop-blur-[1px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FAF9F6]"></div>
                    </div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-24">
                    <span className="hero-animate inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                        CD. BESPOKE SERVICE
                    </span>
                    <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-luxury-black tracking-tight leading-[1.05] mb-8">
                        Bespoke <br />
                        <span className="italic font-light text-gray-500 font-serif">Jewellery Design</span>
                    </h1>
                    <p className="hero-animate text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed mb-12 tracking-wide">
                        Translate your personal legacy and vision into high-art physical jewelry. Crafted individually with world-class gemstone settings.
                    </p>
                    <div className="hero-animate flex flex-wrap gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('consultation-form')}
                            className="px-8 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer border border-transparent"
                        >
                            Book Consultation
                        </button>
                        <button
                            onClick={() => scrollToSection('editorial-sections')}
                            className="px-8 py-4 rounded-full border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
                        >
                            Explore Process
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. EDITORIAL IMAGE SECTIONS */}
            <div id="editorial-sections" className="bg-white">
                
                {/* 2.1 Custom Design Consultation (Overlay) */}
                <section className="relative h-[80vh] md:h-screen w-full flex items-center overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div 
                            className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000')` }}
                        />
                        <div className="absolute inset-0 bg-[#0a0a0a]/10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent hidden md:block" />
                        <div className="absolute inset-0 bg-white/70 md:hidden" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="editorial-text-animate max-w-xl text-left bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                                Phase One
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                Custom Design Consultation
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                Every piece begins with an open conversation. We work directly with you to understand the sentimental weight, visual aesthetic, and metal characteristics you desire, sourcing unique stones that complement your personal timeline.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2.2 Sketch to Reality (Grid Layout) */}
                <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            {/* Left Image */}
                            <div className="lg:col-span-5 editorial-image-animate">
                                <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100/50 group bg-white">
                                    <img 
                                        src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1200" 
                                        alt="Jewelry designer sketch drawing details"
                                        className="scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                            {/* Right Text */}
                            <div className="lg:col-span-7 space-y-8 text-left editorial-text-animate">
                                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                    Phase Two
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                    Translating your narrative from sketch to reality.
                                </h2>
                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                    Our designers craft bespoke conceptual drafts. These designs play with gemstone refraction, metallic balance, and handwear comfort. We iterate alongside you, tweaking details until the concept feels entirely authentic.
                                </p>
                                <div className="pt-4">
                                    <button 
                                        onClick={() => scrollToSection('timeline-section')}
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors duration-300"
                                    >
                                        Learn Timeline Details <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2.3 CAD & Precision Engineering (Overlay) */}
                <section className="relative h-[80vh] md:h-screen w-full flex items-center overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div 
                            className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000')` }}
                        />
                        <div className="absolute inset-0 bg-[#0a0a0a]/10" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/40 to-transparent hidden md:block" />
                        <div className="absolute inset-0 bg-white/70 md:hidden" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 flex justify-end">
                        <div className="editorial-text-animate max-w-xl text-left bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                                Phase Three
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                CAD & Precision Engineering
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                Using digital modeling algorithms, we construct a micro-precise CAD rendering of the design. This allows us to calibrate exact metal thicknesses and gem placement pockets down to the hundredth of a millimeter, ensuring structural permanence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2.4 Gemstone Selection (Grid Layout) */}
                <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            {/* Left Text (Appears first on desktop, orders second on mobile) */}
                            <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 text-left editorial-text-animate">
                                <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                    Phase Four
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                    Selecting the perfect gemstone.
                                </h2>
                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                    We maintain direct relationships with moral diamond houses and boutique gem cutters globally. Our gemologists source stones according to clarity, depth of hue, and individual personality, matching the design's structural framework perfectly.
                                </p>
                            </div>
                            {/* Right Image */}
                            <div className="lg:col-span-5 order-1 lg:order-2 editorial-image-animate">
                                <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100/50 group bg-white">
                                    <img 
                                        src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200" 
                                        alt="Sorting loose high grade diamonds"
                                        className="scroll-zoom-img w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2.5 Artisan Craftsmanship (Overlay) */}
                <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div 
                            className="editorial-parallax-bg absolute top-[-10%] left-0 w-full h-[120%] bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2000')` }}
                        />
                        <div className="absolute inset-0 bg-[#0a0a0a]/15" />
                        <div className="absolute inset-0 bg-white/70" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 flex justify-center">
                        <div className="editorial-text-animate max-w-2xl text-center bg-white/80 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/60 shadow-xl space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold block">
                                Phase Five
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                Traditional Artisan Craftsmanship
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                Finally, your cast piece is delivered to our master goldsmiths. Using microscopic loupes and high-precision tools, they mount each individual claw, hand-set every stone, and polish the metal surfaces to absolute brilliance.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* 3. IMMERSIVE VISUAL GALLERY */}
            <section className="py-24 md:py-36 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center md:text-left md:flex justify-between items-end mb-20 space-y-4 md:space-y-0">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-6">
                                Bespoke Gallery
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black">
                                Handcrafted Legacies.
                            </h2>
                        </div>
                        <p className="text-gray-500 max-w-sm font-light text-sm">
                            A curated look at customized commissions and precision benchwork processes from the CD. design floor.
                        </p>
                    </div>

                    {/* Staggered Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryItems.map((img, i) => (
                            <div
                                key={i}
                                className={`gallery-item-animate group relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500 ${img.aspect}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-2">{img.tag}</span>
                                    <h4 className="text-xl font-serif text-white font-medium">{img.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DESIGN PHILOSOPHY SECTION */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-luxury-black/5 text-luxury-black/60 text-xs font-bold uppercase tracking-widest mb-6">
                        Our Foundations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-20">
                        The pillars of bespoke creation.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {philosophies.map((philo, i) => (
                            <div
                                key={i}
                                className="philosophy-card-animate p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-6">
                                    <div className="w-12 h-12 rounded-2xl bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10">
                                        {philo.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif text-luxury-black">{philo.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                                        {philo.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS TIMELINE / EXPERIENCE SECTION */}
            <section id="timeline-section" className="py-24 md:py-36 bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                            The Narrative Flow
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                            The Bespoke Journey.
                        </h2>
                    </div>

                    {/* Timeline Line */}
                    <div className="relative border-l border-gray-200/80 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">
                        {timelineSteps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className="timeline-node-animate relative flex flex-col md:flex-row items-start md:items-center w-full"
                            >
                                {/* Circle node indicator */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-2 border-luxury-gold z-10"></div>
                                
                                {/* Content Card */}
                                <div className={`timeline-card-animate pl-8 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:order-2 ml-auto'}`}>
                                    <div className="inline-block px-3.5 py-1 bg-luxury-gold/5 border border-luxury-gold/10 text-luxury-gold text-xs font-bold rounded-full mb-3">
                                        Step {step.step}
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-serif text-luxury-black mb-3">{step.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md md:ml-auto md:mr-0">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. LUXURY CTA BANNER */}
            <section className="py-32 bg-gray-50/55 relative overflow-hidden border-b border-gray-100">
                {/* Subtle visual glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-8 cta-content-animate">
                    <h2 className="text-4xl md:text-6xl font-serif text-luxury-black tracking-tight leading-tight">
                        Co-create your heirloom<br />
                        <span className="italic font-light text-gray-500 font-serif">with our master designers.</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
                        Start your tailored design project. We arrange detailed consultations and secure worldwide gemstone logistics.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button 
                            onClick={() => scrollToSection('consultation-form')}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-luxury-black text-white font-medium text-sm tracking-wider hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-0.5"
                        >
                            Schedule Consultation
                        </button>
                        <button 
                            onClick={() => scrollToSection('editorial-sections')}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-luxury-black font-medium text-sm tracking-wider hover:bg-gray-50 transition-all"
                        >
                            View Process
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. CONTACT / CONSULTATION SECTION */}
            <section id="consultation-form" className="py-32 bg-luxury-black text-white relative overflow-hidden">
                {/* Visual Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="contact-card-animate rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row justify-between gap-16 items-stretch">
                        
                        {/* Left Info Column */}
                        <div className="flex-1 space-y-8 flex flex-col justify-between text-left">
                            <div className="space-y-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">
                                    Bespoke Request
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                                    Let's build your <br />
                                    <span className="italic text-gray-400 font-light">dream design.</span>
                                </h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                                    Fill out our design consultation form to schedule a physical or digital design session with our studio directors.
                                </p>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Email</p>
                                        <a href="mailto:hello@carpediam.in" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                            hello@carpediam.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Phone & Whatsapp</p>
                                        <a href="tel:+918850157354" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                            +91 88501 57354
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-12">
                            <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        placeholder="Elizabeth Sterling"
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        placeholder="elizabeth@sterling.com"
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="project-type" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                        Project Type
                                    </label>
                                    <select 
                                        id="project-type" 
                                        name="project-type"
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light appearance-none"
                                    >
                                        <option value="" disabled className="bg-luxury-black text-gray-500">Select custom project</option>
                                        <option value="custom-ring" className="bg-luxury-black text-white">Bespoke Diamond Ring</option>
                                        <option value="heirloom-remake" className="bg-luxury-black text-white">Heirloom Redesign</option>
                                        <option value="pendant-earrings" className="bg-luxury-black text-white">Custom Pendant or Earrings</option>
                                        <option value="other" className="bg-luxury-black text-white">Other Fine Artistry Commissions</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                        Your Vision
                                    </label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows="4"
                                        placeholder="Describe the heirloom piece you wish to co-create..."
                                        required 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Submit Request <Check className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default BespokePage;
