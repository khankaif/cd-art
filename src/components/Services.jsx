import ServiceSlide from './ServiceSlide';

import bespokeVideo from '../assets/Besokevideo.mp4';
import manufacturingBg from '../assets/luxury_manufacturing_bg.png';
import digitalBg from '../assets/tech-solutions.png';

const Services = () => {
    const slides = [
        {
            type: 'video',
            src: bespokeVideo,
            label: '01 // Custom Design & Prototyping',
            title: 'Bespoke Conceptualization',
            description: 'Bridging world-class artistry with technical precision. We translate complex visions into flawless realities, ensuring every curve and setting is optimized for both aesthetics and durability.',
            signals: ['Rapid 3D Prototyping', 'CAD Micro-Engineering', 'Master Artisan Review'],
            link: '/bespoke'
        },
        {
            type: 'image',
            src: manufacturingBg,
            label: '02 // Production & Craftsmanship',
            title: 'Scalable Fine Jewellery',
            description: 'Uncompromising quality, scaled for global demands. Our facilities combine state-of-the-art casting technology with meticulous hand-finishing, ensuring absolute consistency across large production runs.',
            signals: ['Precision Casting', 'Microscope Gemstone Setting', 'Exact-Tolerance Finishing'],
            link: '/precision-manufacturing'
        },
        {
            type: 'image',
            src: digitalBg,
            label: '03 // Infrastructure & Integration',
            title: 'Digital Ecosystems',
            description: 'Seamlessly connecting your brand to our manufacturing pipeline. Our proprietary infrastructure provides total transparency from initial order synchronization to global delivery.',
            signals: ['API Integration', 'Real-Time Tracking', 'Supply Chain Transparency'],
            link: '/integrated-digital-ecosystems'
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