import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BespokeTimeline = ({ timelineSteps }) => {
    const timelineLineRef = useRef(null);
    const containerRef = useRef(null);

    // Provide default images if not supplied in the original data structure
    const timelineImages = [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
        "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=800",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=800"
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(timelineLineRef.current, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 40%",
                    end: "bottom 70%",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="timeline-section" ref={containerRef} className="py-32 md:py-48 bg-luxury-white border-b border-luxury-black/5 overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                
                <div className="text-reveal flex flex-col items-center text-center mb-32 md:mb-48">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                            The Narrative Flow
                        </span>
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-luxury-black font-light tracking-tight max-w-2xl leading-[1.05]">
                        The Bespoke<br />
                        <span className="italic text-luxury-black/60">Journey.</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* The drawing gold line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-black/10 md:-translate-x-1/2">
                        <div ref={timelineLineRef} className="absolute top-0 left-0 w-full h-0 bg-luxury-gold shadow-[0_0_10px_rgba(202,171,115,0.5)]"></div>
                    </div>

                    <div className="space-y-24 md:space-y-48">
                        {timelineSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full group">
                                    
                                    {/* Center Node */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[9px] h-[9px] rounded-full bg-luxury-white border-2 border-luxury-gold z-10 transition-transform duration-500 group-hover:scale-150"></div>
                                    
                                    {/* Left Side (Image or Text) */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pr-16 order-2 md:order-1'}`}>
                                        {isEven ? (
                                            <div className="text-reveal">
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium block mb-4">
                                                    Step {step.step}
                                                </span>
                                                <h4 className="text-2xl sm:text-3xl font-serif text-luxury-black font-light mb-6">{step.title}</h4>
                                                <p className="text-sm sm:text-base text-luxury-black/60 font-light leading-[1.8] max-w-sm md:ml-auto">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="living-frame relative w-[85%] md:w-[70%] md:ml-auto aspect-square p-2 bg-white shadow-xl mt-12 md:mt-0">
                                                <div className="relative w-full h-full overflow-hidden">
                                                    <img src={timelineImages[idx]} className="w-full h-full object-cover scale-110" alt={`Step ${step.step}`} />
                                                    <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Right Side (Text or Image) */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-16 ${isEven ? 'order-2' : 'md:order-2 mt-[-2rem] md:mt-0'}`}>
                                        {!isEven ? (
                                            <div className="text-reveal">
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium block mb-4">
                                                    Step {step.step}
                                                </span>
                                                <h4 className="text-2xl sm:text-3xl font-serif text-luxury-black font-light mb-6">{step.title}</h4>
                                                <p className="text-sm sm:text-base text-luxury-black/60 font-light leading-[1.8] max-w-sm">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="living-frame relative w-[85%] md:w-[70%] aspect-square p-2 bg-white shadow-xl mt-12 md:mt-0">
                                                <div className="relative w-full h-full overflow-hidden">
                                                    <img src={timelineImages[idx]} className="w-full h-full object-cover scale-110" alt={`Step ${step.step}`} />
                                                    <div className="frame-overlay absolute inset-0 bg-luxury-white origin-top z-10"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BespokeTimeline;
