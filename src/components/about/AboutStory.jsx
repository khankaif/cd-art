import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {
    const storyRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".story-animate",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.to(imgRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: storyRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, storyRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="our-story" ref={storyRef} className="py-24 md:py-40 bg-luxury-white relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    
                    {/* Left: Huge Editorial Image */}
                    <div className="w-full lg:w-5/12 story-animate z-10 relative">
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <div className="absolute inset-0 bg-luxury-black/5 mix-blend-multiply z-10 pointer-events-none"></div>
                            <img
                                ref={imgRef}
                                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2675&auto=format&fit=crop"
                                alt="Luxury jewelry crafting workspace"
                                className="w-full h-[120%] object-cover absolute top-[-10%] left-0 origin-center grayscale-[20%]"
                            />
                        </div>
                    </div>

                    {/* Right: Narrative Story */}
                    <div className="w-full lg:w-7/12 flex flex-col items-start story-animate z-20">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-[1px] bg-luxury-gold"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                                Our Heritage
                            </span>
                        </div>
                        
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-luxury-black leading-[1.05] tracking-tight mb-12">
                            Redefining the legacy of <span className="italic font-light">high-end manufacturing.</span>
                        </h2>
                        
                        <div className="pl-0 lg:pl-12 border-l-0 lg:border-l border-luxury-black/10">
                            <p className="text-sm md:text-base text-luxury-black/70 leading-[1.8] font-light mb-8 max-w-xl">
                                Carpediam started as a boutique design studio in Mumbai with a single goal: to modernize how high-end jewelry is conceived and produced. Traditional pipelines have long been plagued by delays, manual errors, and high inventory risks.
                            </p>
                            <p className="text-sm md:text-base text-luxury-black/70 leading-[1.8] font-light mb-12 max-w-xl">
                                By integrating rapid CAD design workflows, state-of-the-art laser casting, and an automated fulfillment API, we created a seamless pipeline. Today, we empower independent jewelry brands and global luxury designers to iterate and scale their collections without inventory barriers.
                            </p>

                            <div className="flex gap-16 pt-8 border-t border-luxury-black/5">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif text-luxury-black font-light mb-2">10k<span className="text-luxury-gold">+</span></span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-black/50">Unique Models</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif text-luxury-black font-light mb-2">100<span className="text-luxury-gold">%</span></span>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-black/50">Ethical Sourcing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
