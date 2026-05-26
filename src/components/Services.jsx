import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import ServiceSlide from './ServiceSlide';

import serviceSlide1 from '../assets/service-slide-1.png';
import serviceSlide3 from '../assets/tech-solutions.png';

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
            description:
                'Transforming visions into reality with our world-class design team and rapid prototyping technology.',
            smallVideo: 'src/assets/Besokevideo.mp4'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2574&auto=format&fit=crop',
            label: 'Manufacturing',
            title: 'Precision Manufacturing',
            description:
                'State-of-the-art casting, setting, and finishing for scalable high-end production.',
        },
        {
            type: 'image',
            src: serviceSlide3,
            label: 'Tech Solutions',
            title: 'Integrated Digital Ecosystems',
            description:
                'Seamlessly connect your e-commerce platform with our manufacturing pipeline via our robust API.',
        }
    ];

    useGSAP(() => {

        let currentIndex = 0;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,

            onUpdate: (self) => {

                const total = slides.length;

                const newIndex = Math.min(
                    total - 1,
                    Math.floor(self.progress * total)
                );

                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    setActiveSlide(newIndex);
                }
            }
        });

    }, { scope: containerRef });

    return (
        <section
            id="services"
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-luxury-black text-white"
        >

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
                        className={`w-1 rounded-full transition-all duration-300 ${activeSlide === index
                                ? 'h-8 bg-white'
                                : 'h-2 bg-white/40'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
};

export default Services;