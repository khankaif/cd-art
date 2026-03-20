import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceSlide from './ServiceSlide';
import serviceSlide1 from '../assets/service-slide-1.png';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            type: 'image',
            src: serviceSlide1,
            label: 'Custom Design',
            title: 'Bespoke Jewelry Design',
            description: 'Transforming visions into reality with our world-class design team and rapid prototyping technology.',
            smallVideo: 'https://cdn.coverr.co/videos/coverr-making-jewelry-5244/1080p.mp4' // Placeholder video
        },
        {
            type: 'image', // Using image for now, can be video
            src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2574&auto=format&fit=crop',
            label: 'Manufacturing',
            title: 'Precision Manufacturing',
            description: 'State-of-the-art casting, setting, and finishing for scalable high-end production.',
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1555529733-146e2978aa92?q=80&w=2670&auto=format&fit=crop',
            label: 'Tech Solutions',
            title: 'Integrated Digital Ecosystems',
            description: 'Seamlessly connect your e-commerce platform with our manufacturing pipeline via our robust API.',
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%", // Pin for 300% of viewport height (100% per slide)
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    const total = slides.length;
                    // Calculate index based on scroll progress
                    // We want the last slide to stay active at the end, so we clamp to total-1
                    const index = Math.min(
                        total - 1,
                        Math.floor(self.progress * total)
                    );
                    setActiveSlide(index);
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [slides.length]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-luxury-black text-white">

            {/* Slides Container */}
            <div className="absolute inset-0 w-full h-full">
                {slides.map((slide, index) => (
                    <ServiceSlide
                        key={index}
                        data={slide}
                        isActive={index === activeSlide}
                    />
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 mix-blend-difference">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1 transition-all duration-300 rounded-full ${activeSlide === index ? 'h-8 bg-white' : 'h-2 bg-white/40'
                            }`}
                    />
                ))}
            </div>

            {/* Optional: Global Overlay or Branding if needed */}
        </section>
    );
};

export default Services;
