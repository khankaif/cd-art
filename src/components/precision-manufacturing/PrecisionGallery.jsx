import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const PrecisionGallery = ({ galleryItems }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".process-panel").forEach((panel) => {
                const mask = panel.querySelector(".panel-mask");
                const img = panel.querySelector("img");
                const line = panel.querySelectorAll(".process-line");
                const text = panel.querySelectorAll(".panel-text-element");
                const num = panel.querySelector(".process-num");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });

                if (mask) {
                    tl.to(mask, { 
                        scaleX: 0, 
                        duration: 1.2, 
                        ease: "power3.inOut", 
                        transformOrigin: panel.classList.contains('is-even') ? 'right' : 'left' 
                    }, 0);
                }
                if (img) {
                    tl.fromTo(img, 
                        { scale: 1.15 }, 
                        { scale: 1, duration: 1.5, ease: "power2.out" }, 
                        0.2
                    );
                }
                if (line.length) {
                    tl.fromTo(line, 
                        { scaleX: 0 }, 
                        { scaleX: 1, duration: 0.8, ease: "power2.out" }, 
                        0.5
                    );
                }
                if (text.length) {
                    tl.fromTo(text, 
                        { y: 20, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }, 
                        0.6
                    );
                }
                if (num) {
                    tl.fromTo(num, 
                        { y: 30, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
                        0.3
                    );
                }
            });
        }, galleryRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={galleryRef} className="py-32 md:py-48 bg-luxury-white border-y border-luxury-black/5 overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                <div className="text-center max-w-3xl mx-auto mb-32 md:mb-48">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                            Manufacturing Floor
                        </span>
                        <span className="w-8 h-[1px] bg-luxury-gold"></span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-luxury-black font-light tracking-tight">
                        Precision Process.
                    </h2>
                </div>

                <div className="flex flex-col gap-32 md:gap-48">
                    {galleryItems.map((item, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`process-panel ${isEven ? 'is-even' : 'is-odd'} relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full group`}>
                                
                                {/* Image Container (Blueprint styling) */}
                                <div className="w-full md:w-7/12 relative z-10">
                                    {/* Floating process number */}
                                    <div className={`process-num absolute ${isEven ? 'md:-right-16 -right-4' : 'md:-left-16 -left-4'} -top-12 md:-top-24 text-[100px] md:text-[200px] font-serif text-luxury-black/[0.04] leading-none select-none pointer-events-none group-hover:-translate-y-8 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
                                        0{idx + 1}
                                    </div>
                                    
                                    {/* Blueprint framing and offset background */}
                                    <div className={`absolute ${isEven ? '-left-4 md:-left-8 -bottom-4 md:-bottom-8' : '-right-4 md:-right-8 -bottom-4 md:-bottom-8'} w-full h-full bg-luxury-gold/5 border border-luxury-gold/20 z-0 transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                                    
                                    <div className="relative w-full aspect-[4/3] bg-luxury-black overflow-hidden shadow-2xl z-10 border border-luxury-black/10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow duration-700">
                                        <img 
                                            src={item.src} 
                                            alt={item.alt} 
                                            className="w-full h-full object-cover origin-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-110" 
                                        />
                                        
                                        {/* Mask for GSAP Reveal */}
                                        <div className="panel-mask absolute inset-0 bg-luxury-white z-20"></div>
                                        
                                        {/* Subtle spotlight effect */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-10 pointer-events-none"></div>
                                        
                                        {/* Decorative blueprint corner brackets */}
                                        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/40 z-10 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-luxury-gold"></div>
                                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/40 z-10 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-luxury-gold"></div>
                                    </div>
                                </div>

                                {/* Text Container */}
                                <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-20 mt-16 md:mt-0' : 'md:pr-20 mt-16 md:mt-0 md:text-right'} relative z-20`}>
                                    {/* Blueprint crosshairs for layout */}
                                    <div className={`hidden md:block absolute ${isEven ? 'left-8' : 'right-8'} top-0 w-4 h-4 opacity-20 pointer-events-none`}>
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-black"></div>
                                        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-luxury-black"></div>
                                    </div>

                                    <div className={`panel-text-element flex items-center gap-4 mb-8 ${!isEven ? 'md:justify-end' : ''}`}>
                                        {isEven && <span className="process-line w-12 h-[1px] bg-luxury-gold origin-left"></span>}
                                        {!isEven && <span className="process-line w-12 h-[1px] bg-luxury-gold origin-left md:hidden"></span>}
                                        
                                        <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-medium">Stage 0{idx + 1}</span>
                                        
                                        {!isEven && <span className="process-line w-12 h-[1px] bg-luxury-gold origin-right hidden md:block"></span>}
                                    </div>
                                    
                                    <h3 className="panel-text-element text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black font-light tracking-tight mb-4 leading-tight group-hover:text-luxury-gold transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="panel-text-element text-[11px] uppercase tracking-[0.2em] text-luxury-black/40 mb-10">
                                        / {item.tag} /
                                    </p>
                                    
                                    {/* Manufacturing Blueprint Data Box */}
                                    <div className={`panel-text-element inline-flex items-center gap-3 px-5 py-2.5 bg-luxury-black/5 text-luxury-black/60 text-[9px] uppercase tracking-[0.25em] font-mono group-hover:bg-luxury-gold/10 group-hover:text-luxury-black transition-colors duration-500 border border-luxury-black/5`}>
                                        <span>Spec Ref: {idx + 1}0{idx}CD</span>
                                        <span className="w-[3px] h-[3px] rounded-full bg-luxury-gold shadow-[0_0_5px_rgba(202,171,115,0.8)]"></span>
                                        <span>Verified</span>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PrecisionGallery;
