import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LogoTicker = () => {
    const tickerRef = useRef(null);
    const trackRef = useRef(null);

    const brands = [
        "Cartier", "Tiffany & Co.", "Bvlgari", "Van Cleef & Arpels",
        "Harry Winston", "Chopard", "Graff", "David Yurman", "Buccellati"
    ];

    useEffect(() => {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth;

        // Duplicate content for seamless loop
        const clone = track.innerHTML;
        track.innerHTML += clone;

        const animation = gsap.to(track, {
            x: "-50%",
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // Ensures smooth loop
            }
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
            </div>
            <div ref={tickerRef} className="relative w-full overflow-hidden mask-linear-fade">
                <div ref={trackRef} className="flex whitespace-nowrap gap-16 md:gap-32 min-w-max px-16 md:px-32">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
                            <span className="text-2xl md:text-3xl font-serif text-luxury-black">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </section>
    );
};

export default LogoTicker;
