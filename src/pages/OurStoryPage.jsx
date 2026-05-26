import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Compass, Cpu, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OurStoryPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const philosophyBgRef = useRef(null);

    // GSAP ScrollTrigger Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Entry Animations
            const heroTl = gsap.timeline();
            heroTl.fromTo(".hero-fade", 
                { opacity: 0, y: 30, filter: "blur(5px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out" }
            );

            // 2. Hero Background Parallax
            gsap.to(heroBgRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 100,
                scale: 1.05
            });

            // 3. Section Animators (General Fade-ups)
            const animatedSections = [
                ".intro-animate",
                ".grid-item-animate",
                ".pillar-card-animate",
                ".journey-animate",
                ".timeline-item-animate",
                ".values-block-animate",
                ".cta-card-animate"
            ];

            animatedSections.forEach((selector) => {
                gsap.utils.toArray(selector).forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 40, filter: "blur(4px)" },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 1,
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

            // 4. Philosophy Parallax
            gsap.to(philosophyBgRef.current, {
                scrollTrigger: {
                    trigger: ".philosophy-trigger",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: -100
            });

            // 5. Animated Stats Counters
            const statNumbers = gsap.utils.toArray(".stat-num");
            statNumbers.forEach((stat) => {
                const targetValue = parseInt(stat.getAttribute("data-target"));
                const isPercent = stat.innerText.includes("%");
                const isPlus = stat.innerText.includes("+");
                
                gsap.fromTo(stat, 
                    { textContent: 0 },
                    {
                        textContent: targetValue,
                        duration: 2,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: stat,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        },
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            let val = Math.floor(stat.textContent);
                            stat.innerText = val + (isPercent ? "%" : isPlus ? "+" : "");
                        }
                    }
                );
            });

        }, containerRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    // Brand pillars data
    const pillars = [
        {
            icon: <Sparkles className="w-5 h-5 text-luxury-gold" />,
            title: "Creativity",
            desc: "Artistry that transcends seasonal trends. We believe in designing concepts that tell unique visual stories and stand the test of time."
        },
        {
            icon: <Compass className="w-5 h-5 text-luxury-gold" />,
            title: "Precision",
            desc: "Flawless physical execution guided by mathematical accuracy. Combining master bench skills with advanced computer-aided design."
        },
        {
            icon: <Cpu className="w-5 h-5 text-luxury-gold" />,
            title: "Innovation",
            desc: "Integrating state-of-the-art 3D printing and modern headless catalog APIs to make bespoke manufacturing completely seamless."
        }
    ];

    // Studio Gallery data
    const galleryItems = [
        {
            tag: "Creative Direction",
            image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000",
            size: "col-span-12 md:col-span-7"
        },
        {
            tag: "Digital Design",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000",
            size: "col-span-12 md:col-span-5"
        },
        {
            tag: "Luxury Branding",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000",
            size: "col-span-12 md:col-span-5"
        },
        {
            tag: "Studio Environment",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
            size: "col-span-12 md:col-span-7"
        },
        {
            tag: "Craftsmanship",
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000",
            size: "col-span-12 md:col-span-6"
        },
        {
            tag: "Collaboration",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000",
            size: "col-span-12 md:col-span-6"
        }
    ];

    // Timeline milestones
    const milestones = [
        {
            year: "2021",
            title: "The Genesis",
            desc: "Founded in Mumbai with a singular vision: to modernize the legacy of high-end jewelry design and make artisanal quality scaleable."
        },
        {
            year: "2022",
            title: "CAD-to-Gold Integration",
            desc: "Pioneered a closed-loop rapid 3D printing and precise laser casting pipeline, reducing typical manufacturing lead times by 60%."
        },
        {
            year: "2023",
            title: "Antwerp Design Hub",
            desc: "Opened our European studio in Antwerp, Antwerp, establishing direct connections with key global diamond markets and luxury houses."
        },
        {
            year: "2024",
            title: "API-First Catalog",
            desc: "Released our headless fulfillment API, empowering independent brands to market digital inventory before physical casting."
        },
        {
            year: "2026",
            title: "Timeless Innovation",
            desc: "Continuing to redefine high-end curation by blending traditional craftsmanship with advanced technology across two continents."
        }
    ];

    // Alternating values data
    const values = [
        {
            title: "Timeless Curation",
            subtitle: "Designing for legacy.",
            desc: "Every design is curated and hand-finished by master goldsmiths who hold generations of expertise. We reject mass production in favor of carefully balanced collections that retain their sentimental and physical value for decades."
        },
        {
            title: "Ethical Sourcing",
            subtitle: "Full transparency.",
            desc: "We maintain a 100% transparent supply chain. From conflict-free certified stones to recycled gold castings, our processes are optimized to respect both human craftsmanship and our environment without compromising quality."
        },
        {
            title: "Evolving Craft",
            subtitle: "Modern alchemy.",
            desc: "We bridge the gap between computer-assisted mathematical jewelry models and hands-on finishing. This hybrid approach enables complex geometric settings that were historically impossible to cast by hand."
        }
    ];

    return (
        <div ref={containerRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            
            {/* 1. HERO SECTION */}
            <section ref={heroRef} className="relative h-[90vh] min-h-[600px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-100">
                {/* Background Parallax Image */}
                <div className="absolute inset-0 z-0">
                    <div 
                        ref={heroBgRef}
                        className="w-full h-[120%] bg-cover bg-center absolute top-0 left-0"
                        style={{ 
                            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574')`,
                        }}
                    >
                        {/* Soft overlays to create a warm luxurious atmosphere */}
                        <div className="absolute inset-0 bg-[#FAF9F6]/65 backdrop-blur-[1px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/20 via-transparent to-[#FAF9F6]"></div>
                    </div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                    <span className="hero-fade inline-block px-4 py-1.5 rounded-full bg-luxury-black/5 text-luxury-black/60 text-[10px] font-bold uppercase tracking-widest mb-8">
                        Our Story
                    </span>
                    <h1 className="hero-fade text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-luxury-black tracking-tight leading-[1.1] mb-8">
                        Crafting Digital Artistry<br />
                        <span className="italic font-light text-gray-500 font-serif">with timeless precision.</span>
                    </h1>
                    <p className="hero-fade text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed mb-10">
                        Bridging high-end jewelry manufacturing with digital execution. We build physical poetry for modern independent designers.
                    </p>
                    <div className="hero-fade flex flex-wrap gap-4 justify-center items-center">
                        <button 
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3.5 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer border border-transparent"
                        >
                            Start Project
                        </button>
                        <a 
                            href="#intro-section"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3.5 rounded-full border border-gray-200 text-luxury-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
                        >
                            Read Narrative
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. INTRODUCTION SECTION */}
            <section id="intro-section" className="py-24 md:py-36 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        
                        {/* Narrative Left */}
                        <div className="lg:col-span-6 space-y-8 text-left intro-animate">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                Who We Are
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                A new architecture for high-end jewelry curation.
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                For centuries, fine jewelry creation has been bound by lengthy, rigid pipelines. High upfront inventory costs, hand-modeling bottlenecks, and slow feedback loops have historically restricted designers from iterating freely.
                            </p>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                We created CD. to solve this. By integrating 3D CAD visualization, rapid gold-alloy casting, and automated inventory systems, we allow brands to focus entirely on visual storytelling and branding while we handle the seamless execution.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="lg:col-span-6 intro-animate">
                            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group">
                                <img 
                                    src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200" 
                                    alt="Artisanal hands polishing a luxury ring"
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#FAF9F6]/5 mix-blend-overlay"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. STUDIO / PROCESS GALLERY */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-y border-gray-100/50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                            The Studio
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black mb-6">
                            Visual processes of creation.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                            A curated look inside our digital labs and goldsmithing environments where mathematical logic meets high-end physical finish.
                        </p>
                    </div>

                    {/* Curated Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                        {galleryItems.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`${item.size} grid-item-animate`}
                            >
                                <div className="relative aspect-[16/10] md:aspect-auto md:h-[350px] w-full rounded-[2rem] overflow-hidden group border border-gray-100/80 shadow-sm bg-white">
                                    <img 
                                        src={item.image} 
                                        alt={item.tag} 
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>
                                    
                                    {/* Text tag overlay */}
                                    <div className="absolute bottom-6 left-8 text-left">
                                        <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mb-1">Process</p>
                                        <h4 className="text-lg sm:text-xl font-serif text-white tracking-wide">{item.tag}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BRAND FOUNDATIONS SECTION */}
            <section className="py-24 md:py-36 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        Brand Core
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black mb-20">
                        Three foundations of the brand.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => (
                            <div 
                                key={idx} 
                                className="pillar-card-animate p-10 rounded-[2rem] bg-[#FDFDFB] border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between text-left h-full"
                            >
                                <div className="space-y-6">
                                    <div className="w-10 h-10 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/10 flex items-center justify-center">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif text-luxury-black">{pillar.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. OUR JOURNEY SECTION */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-t border-gray-100/50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        
                        {/* Large Image Left */}
                        <div className="lg:col-span-5 order-2 lg:order-1 journey-animate">
                            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group">
                                <img 
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" 
                                    alt="CD luxury boutique space"
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#FAF9F6]/5 mix-blend-overlay"></div>
                            </div>
                        </div>

                        {/* Content Right */}
                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left journey-animate">
                            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                                Our Evolution
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                Cultivating scale without compromising artisanal finish.
                            </h2>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                From our initial prototype labs in Mumbai, we understood that technology has no soul without master handcrafting. An automated machine can cut metal, but only a master gem-setter can set micro-diamonds with the tension and layout required to catch soft light.
                            </p>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                                Today, CD. represents a network that handles everything. We design the raw digital assets, verify render alignments with software algorithms, 3D-cast them, and then hand-polish each item. The result is a seamless workflow built directly for independent global houses.
                            </p>

                            {/* Stats Counter Section */}
                            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-200">
                                <div>
                                    <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="2021">2021</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Established</p>
                                </div>
                                <div>
                                    <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="15000">15000+</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">CAD Models</p>
                                </div>
                                <div>
                                    <h4 className="stat-num text-3xl sm:text-4xl font-serif font-bold text-luxury-gold" data-target="25">25+</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Retail Partners</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. PHILOSOPHY SECTION */}
            <section className="philosophy-trigger relative py-48 md:py-60 overflow-hidden flex items-center justify-center border-b border-gray-100">
                {/* Full-width Background Image */}
                <div className="absolute inset-0 z-0">
                    <div 
                        ref={philosophyBgRef}
                        className="w-full h-[140%] bg-cover bg-center absolute top-[-20%] left-0"
                        style={{ 
                            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')`,
                        }}
                    >
                        {/* Soft overlay for typography readability */}
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
                    </div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-8">
                        The Philosophy
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-black leading-snug tracking-tight font-medium">
                        “In the pursuit of visual beauty, <br />
                        <span className="italic font-light text-gray-500 font-serif">artistry & structural precision</span> <br />
                        must speak the same language.”
                    </h3>
                    <div className="w-12 h-[1px] bg-luxury-gold/50 mx-auto mt-12"></div>
                </div>
            </section>

            {/* 7. TIMELINE / EVOLUTION SECTION */}
            <section className="py-24 md:py-36 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                            Milestones
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                            Evolution of the brand.
                        </h2>
                    </div>

                    {/* Timeline Line */}
                    <div className="relative border-l border-gray-200/80 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">
                        {milestones.map((milestone, idx) => (
                            <div 
                                key={idx} 
                                className="timeline-item-animate relative flex flex-col md:flex-row items-start md:items-center w-full"
                            >
                                {/* Circle node indicator */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-2 border-luxury-gold z-10"></div>
                                
                                {/* Content Card */}
                                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:order-2 ml-auto'}`}>
                                    <div className="inline-block px-3 py-1 bg-luxury-gold/5 border border-luxury-gold/10 text-luxury-gold text-xs font-bold rounded-full mb-3">
                                        {milestone.year}
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-serif text-luxury-black mb-3">{milestone.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md md:ml-auto md:mr-0">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. VALUES / EXPERIENCE SECTION */}
            <section className="py-24 md:py-36 bg-[#FAF9F6] border-t border-gray-100/50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-24">
                        <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                            Values & Practice
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                            How we create.
                        </h2>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {values.map((val, idx) => (
                            <div 
                                key={idx} 
                                className={`values-block-animate grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-200/50 pb-12 last:border-0`}
                            >
                                {/* Left/Header side */}
                                <div className={`md:col-span-5 text-left ${idx % 2 === 1 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold block mb-1">
                                        {val.subtitle}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-serif text-luxury-black">
                                        {val.title}
                                    </h3>
                                </div>

                                {/* Right/Description side */}
                                <div className="md:col-span-7 text-left">
                                    <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA SECTION */}
            <section className="py-24 md:py-36 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="cta-card-animate relative rounded-[3rem] bg-[#F4F0E6] p-12 md:p-24 text-center border border-gray-100 shadow-sm overflow-hidden group">
                        {/* Soft overlay element */}
                        <div className="absolute inset-0 bg-[#FAF9F6]/10 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-xs font-semibold text-luxury-gold tracking-widest uppercase">
                                Collaboration
                            </span>
                            
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-luxury-black leading-tight">
                                Let's build your brand’s <br />
                                <span className="italic font-light text-gray-400 font-serif">digital future.</span>
                            </h2>
                            
                            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light max-w-xl leading-relaxed">
                                Connect with our designers and integrations team. We scheduling consultation slots for independent designers and boutique retail partners.
                            </p>
                            
                            <div className="pt-4">
                                <button 
                                    onClick={() => navigate('/contact')}
                                    className="px-10 py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                                >
                                    Get In Touch <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurStoryPage;
