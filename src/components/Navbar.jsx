import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        // Initial entrance
        const timer = setTimeout(() => setIsMounted(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
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

    const linkBaseClass = "px-1.5 sm:px-2.5 md:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.1em] sm:tracking-[0.25em] uppercase transition-all duration-300";
    const activeClass = "text-luxury-black font-bold bg-luxury-black/8";
    const inactiveClass = "text-[#1F1F1F] font-medium hover:text-luxury-black hover:bg-luxury-black/[0.03]";

    const navVisibilityClasses = !isMounted 
        ? "opacity-0 -translate-y-4" 
        : isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-[150%] pointer-events-none";

    return (
        <div className="fixed top-2 sm:top-4 left-0 w-full z-50 px-2 sm:px-4 md:px-8 flex justify-center pointer-events-none">
            <nav
                className={`pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center px-3 sm:px-6 md:px-8 py-1.5 sm:py-2.5 rounded-full bg-white/45 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.02)] w-full max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/55 ${navVisibilityClasses}`}
            >
                {/* Logo Section (Left-aligned) */}
                <div className="flex justify-start">
                    <a
                        href="/"
                        onClick={handleLogoClick}
                        className="text-sm sm:text-base md:text-lg font-serif font-bold text-luxury-black tracking-[0.05em] sm:tracking-[0.1em] hover:opacity-75 transition-opacity duration-300"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Perfectly Centered) */}
                <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 justify-center">
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
