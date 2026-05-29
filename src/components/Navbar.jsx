import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        gsap.set(navRef.current, {
            opacity: 0
        });

        gsap.to(navRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.3
        });
    }, []);

    const handleLogoClick = (e) => {
        e.preventDefault();

        if (location.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            navigate('/');
        }
    };

    const handleNavClick = (e, link, external) => {
        e.preventDefault();
        if (external) {
            window.open(link, '_blank');
        } else {
            navigate(link);
        }
    };

    const linkBaseClass = "px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-all duration-300";
    const activeClass = "text-luxury-black font-bold bg-luxury-black/8";
    const inactiveClass = "text-[#1F1F1F] font-medium hover:text-luxury-black hover:bg-luxury-black/[0.03]";

    return (
        <div className="fixed top-4 left-0 w-full z-50 px-4 sm:px-8 flex justify-center pointer-events-none">
            <nav
                ref={navRef}
                className="pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-8 py-2.5 rounded-full bg-white/45 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.02)] w-full max-w-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/55"
            >
                {/* Logo Section (Left-aligned) */}
                <div className="flex justify-start">
                    <a
                        href="/"
                        onClick={handleLogoClick}
                        className="text-base sm:text-lg font-serif font-bold text-luxury-black tracking-[0.1em] hover:opacity-75 transition-opacity duration-300"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Perfectly Centered) */}
                <div className="flex items-center gap-1 sm:gap-2 justify-center">
                    <a
                        href="https://catalog.carpediam.in/"
                        onClick={(e) => handleNavClick(e, 'https://catalog.carpediam.in/', true)}
                        className={`${linkBaseClass} ${inactiveClass}`}
                    >
                        Catalogue
                    </a>
                    <a
                        href="/our-story"
                        onClick={(e) => handleNavClick(e, '/our-story', false)}
                        className={`${linkBaseClass} ${location.pathname === '/our-story' ? activeClass : inactiveClass}`}
                    >
                        Our Story
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => handleNavClick(e, '/contact', false)}
                        className={`${linkBaseClass} ${location.pathname === '/contact' ? activeClass : inactiveClass}`}
                    >
                        Contact
                    </a>
                </div>

                {/* Right Placeholder (Right-aligned to balance the layout) */}
                <div className="flex justify-end pointer-events-none">
                    {/* Empty placeholder balancing column 1 to keep links mathematically centered */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
