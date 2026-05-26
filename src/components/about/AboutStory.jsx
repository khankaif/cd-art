import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {
    const storyRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".story-animate",
                { y: 60, opacity: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, storyRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="our-story" ref={storyRef} className="py-32 bg-white border-b border-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left: Large Editorial Image */}
                    <div className="lg:col-span-5 story-animate">
                        <div className="relative aspect-[3/4] bg-gray-100 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group">
                            <img
                                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2675&auto=format&fit=crop"
                                alt="Luxury jewelry crafting workspace"
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Right: Narrative Story */}
                    <div className="lg:col-span-7 space-y-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-bold uppercase tracking-widest story-animate">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-luxury-black leading-tight story-animate">
                            Redefining the legacy of high-end manufacturing.
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light story-animate">
                            Carpediam started as a boutique design studio in Mumbai with a single goal: to modernize how high-end jewelry is conceived and produced. Traditional pipelines have long been plagued by delays, manual errors, and high inventory risks.
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light story-animate">
                            By integrating rapid CAD design workflows, state-of-the-art laser casting, and an automated fulfillment API, we created a seamless pipeline. Today, we empower independent jewelry brands and global luxury designers to iterate and scale their collections without inventory barriers.
                        </p>

                        <div className="pt-6 story-animate">
                            <div className="inline-flex items-center gap-6">
                                <div className="text-left border-r border-gray-200 pr-8">
                                    <div className="text-3xl font-serif font-bold text-luxury-gold">10k+</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Unique Models</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-3xl font-serif font-bold text-luxury-gold">100%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Ethical Sourcing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStory;
