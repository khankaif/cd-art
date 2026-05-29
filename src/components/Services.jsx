import ServiceSlide from './ServiceSlide';

import bespokeVideo from '../assets/Besokevideo.mp4';
import manufacturingBg from '../assets/luxury_manufacturing_bg.png';
import digitalBg from '../assets/tech-solutions.png';

const Services = () => {
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

    return (
        <div id="services">
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