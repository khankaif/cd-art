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

    const linkBaseClass = "text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300";
    const activeClass = "text-luxury-black font-semibold opacity-100";
    const inactiveClass = "text-luxury-black/60 font-medium hover:text-luxury-black hover:opacity-100";

    const navVisibilityClasses = !isMounted
        ? "opacity-0 -translate-y-full"
        : isVisible
            ? "opacity-85 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none";

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${navVisibilityClasses}`}>
            <nav className="pointer-events-auto w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.03)] h-16 sm:h-20 px-6 sm:px-8 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center">

                {/* Left Section (Placeholder for Hamburger to maintain grid balance) */}
                <div className="flex justify-start items-center pointer-events-none">
                    {/* The HamburgerButton component (rendered in App.jsx) will visually occupy this space */}
                </div>

                {/* Logo Section (Perfectly Centered) */}
                <div className="flex justify-center items-center">
                    <a
                        href="/"
                        onClick={handleLogoClick}
                        className="text-base sm:text-lg md:text-xl font-serif font-bold text-luxury-black tracking-[0.1em] sm:tracking-[0.15em] hover:opacity-75 transition-opacity duration-300"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Right-aligned, hidden on smallest screens to prevent overlap) */}
                <div className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 justify-end">
                    <a
                        href="/designprocess"
                        onClick={(e) => handleNavClick(e, '/designprocess', false)}
                        className={`${linkBaseClass} ${location.pathname === '/designprocess' ? activeClass : inactiveClass}`}
                    >
                        Process
                    </a>

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
            </nav >
        </div >
    );
};

export default Navbar;
