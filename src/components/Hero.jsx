import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroBg from '../assets/hero-bg.png';
import image from '../assets/image.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Background parralax
        gsap.to(bgRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 200,
            scale: 1.1
        });

        // Content Reveal
        tl.fromTo(contentRef.current.children,
            { y: 50, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 }
        );

    }, []);

    return (
        <section ref={heroRef} className="relative h-screen min-h-[800px] w-full flex flex-col justify-center items-center overflow-hidden bg-gray-50">

            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div ref={bgRef} className="w-full h-[120%] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40"></div>
                </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">

                {/* Main Heading */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-luxury-black tracking-tight leading-[0.9] mb-8">
                    Fine Jewelry,<br />
                    <span className="italic font-light text-gray-500">Simplified.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    The digital infrastructure for modern jewelry brands. <br className="hidden md:block" />
                    From design to delivery, we power your growth.
                </p>

                {/* CTAs */}
                <div className="flex items-center justify-center">
                    <button
                        className="px-8 py-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/60 text-luxury-black font-medium text-lg hover:bg-white transition-all"
                        onClick={() =>
                            window.open(
                                "https://catalog.carpediam.in/",
                                "_blank"
                            )
                        }
                    >
                        View Catalogue
                    </button>
                </div>
            </div>

        </section >
    );
};

export default Hero;
