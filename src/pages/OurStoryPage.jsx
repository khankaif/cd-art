import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '../components/OurStory/HeroSection';
import IntroductionSection from '../components/OurStory/IntroductionSection';
import StudioGallery from '../components/OurStory/StudioGallery';
import BrandFoundations from '../components/OurStory/BrandFoundations';
import JourneySection from '../components/OurStory/JourneySection';
import PhilosophySection from '../components/OurStory/PhilosophySection';
import TimelineSection from '../components/OurStory/TimelineSection';
import ValuesSection from '../components/OurStory/ValuesSection';

gsap.registerPlugin(ScrollTrigger);

const OurStoryPage = () => {
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
                ".pillar-card-animate",
                ".journey-animate",
                ".timeline-item-animate",
                ".values-block-animate"
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
                        onUpdate: function () {
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

    return (
        <div ref={containerRef} className="bg-[#FAF9F6] text-luxury-black font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white">
            <HeroSection heroRef={heroRef} heroBgRef={heroBgRef} />
            <IntroductionSection />
            <StudioGallery />
            <BrandFoundations />
            <JourneySection />
            <PhilosophySection philosophyBgRef={philosophyBgRef} />
            <TimelineSection />
            <ValuesSection />
        </div>
    );
};

export default OurStoryPage;
