import { useRef, useEffect } from 'react';
import ServiceSlide from './ServiceSlide';

import bespokeVideo from '../assets/Besokevideo.mp4';
import manufacturingBg from '../assets/luxury_manufacturing_bg.png';
import digitalBg from '../assets/tech-solutions.png';

const Services = () => {
    const servicesRef = useRef(null);

    const slides = [
        {
            type: 'video',
            src: bespokeVideo,
            label: 'Custom Design',
            title: 'Bespoke Jewelry Design',
            description: 'Transforming visions into reality with our world-class design team and rapid prototyping technology.'
        },
        {
            type: 'image',
            src: manufacturingBg,
            label: 'Manufacturing',
            title: 'Precision Manufacturing',
            description: 'State-of-the-art casting, setting, and finishing for scalable high-end production.'
        },
        {
            type: 'image',
            src: digitalBg,
            label: 'Tech Solutions',
            title: 'Integrated Digital Ecosystems',
            description: 'Seamlessly connect your e-commerce platform with our manufacturing pipeline via our robust API.'
        }
    ];

    // Align the navbar's "Tech" scroll logic:
    // Navbar scrolls to services.offsetTop + 4 * window.innerHeight.
    // Slide 3 is the third fullscreen slide, which starts at Y_actual + 2 * window.innerHeight.
    // Setting services.offsetTop = Y_actual - 2 * window.innerHeight makes it land exactly at Slide 3!
    useEffect(() => {
        const el = servicesRef.current;
        if (el) {
            Object.defineProperty(el, 'offsetTop', {
                get: () => {
                    const slide3 = document.getElementById('service-slide-2'); // index 2
                    if (slide3) {
                        return slide3.offsetTop - (window.innerHeight * 4);
                    }
                    return el.getBoundingClientRect().top + window.scrollY;
                },
                configurable: true
            });
        }
    }, []);

    return (
        <div>
            {/* Dummy anchor for Navbar 'Tech' scroll targeting */}
            <div
                id="services"
                ref={servicesRef}
                className="absolute w-0 h-0 pointer-events-none"
            />
            {/* Stacked slides */}
            <div>
                {slides.map((slide, index) => (
                    <ServiceSlide
                        key={index}
                        data={slide}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;