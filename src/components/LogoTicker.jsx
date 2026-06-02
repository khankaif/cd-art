import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LogoTicker = () => {
    const trackRef = useRef(null);

    const brands = [
        "Cartier", "Tiffany & Co.", "Bvlgari", "Van Cleef & Arpels",
        "Harry Winston", "Chopard", "Graff", "David Yurman", "Buccellati"
    ];

    const duplicatedBrands = [...brands, ...brands];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        
        // Single transition width (half of the duplicated list width)
        const halfWidth = track.scrollWidth / 2;

        const animation = gsap.to(track, {
            x: -halfWidth,
            duration: 25,
            ease: "none",
            repeat: -1
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12 text-center">
                <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
            </div>
            <div className="relative w-full overflow-hidden">
                <div ref={trackRef} className="flex whitespace-nowrap gap-12 md:gap-32 min-w-max px-12 md:px-32">
                    {duplicatedBrands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-300 cursor-default">
                            <span className="text-xl sm:text-2xl md:text-3xl font-serif text-luxury-black">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
