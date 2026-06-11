import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Sparkles,
    Compass,
    Gem,
    Lightbulb
} from 'lucide-react';

import BespokeHero from './BespokeHero';
import BespokeEditorial from './BespokeEditorial';
import BespokeGallery from './BespokeGallery';
import BespokePhilosophy from './BespokePhilosophy';
import BespokeTimeline from './BespokeTimeline';

gsap.registerPlugin(ScrollTrigger);

const BespokePage = () => {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const ctaBgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
<<<<<<< HEAD
            // General text reveal
            gsap.utils.toArray(".text-reveal").forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            });
=======
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


>>>>>>> actual-code

            // Living Editorial Frames - Image Reveal
            gsap.utils.toArray(".living-frame").forEach((frame) => {
                const img = frame.querySelector("img");
                const overlay = frame.querySelector(".frame-overlay");
                
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: frame,
                        start: "top 80%",
                    }
                });

                // Mask unreveal
                if (overlay) {
                    tl.to(overlay, { height: 0, duration: 1.5, ease: "power3.inOut" });
                }

                // Image scale down slightly
                if (img) {
                    tl.fromTo(img, 
                        { scale: 1.2 }, 
                        { scale: 1, duration: 2, ease: "power2.out" },
                        "-=1.2"
                    );
                }
            });

            // Parallax backgrounds for editorial
            gsap.utils.toArray(".editorial-parallax-bg").forEach((bg) => {
                gsap.to(bg, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bg.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

        }, pageRef);

        return () => ctx.revert();
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


    return (
        <div ref={pageRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            <BespokeHero
                heroRef={heroRef}
                heroBgRef={heroBgRef}
                scrollToSection={scrollToSection}
            />
            <BespokeEditorial
                scrollToSection={scrollToSection}
            />
            <BespokeGallery
                galleryItems={galleryItems}
            />
            <BespokePhilosophy
                philosophies={philosophies}
            />
            <BespokeTimeline
                timelineSteps={timelineSteps}
            />

        </div>
    );
};

export default BespokePage;
