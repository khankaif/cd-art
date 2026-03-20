import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    useEffect(() => {
        gsap.from("nav", {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5 // Wait for hero to start revealing
        });
    }, []);

    return (
        <div className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
            <nav className="pointer-events-auto flex items-center justify-between px-2 p-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm w-full max-w-4xl transition-all duration-300 hover:shadow-md">

                {/* Logo Section */}
                <div className="flex items-center pl-4">
                    <a href="/" className="text-xl font-serif font-bold text-luxury-black tracking-tight">
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full px-2 py-1.5 border border-white/50">
                    {['Services', 'Catalogue', 'Tech', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-luxury-black hover:shadow-sm transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex items-center pr-1">
                    <button className="bg-luxury-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/5">
                        Start Project
                    </button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
