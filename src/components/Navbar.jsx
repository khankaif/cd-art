import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        // Elegant staggered entrance
        const timer = setTimeout(() => setIsMounted(true), 150);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Subtle state change for when the user is at the very top of the page
            if (currentScrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

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

    // Premium Typography and states for links
    const linkBaseClass = "relative text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 group py-2";
    const activeClass = "text-luxury-black font-medium";
    const inactiveClass = "text-luxury-black/60 font-light hover:text-luxury-gold";

    const navVisibilityClasses = !isMounted
        ? "opacity-0 -translate-y-full"
        : isVisible
            ? "opacity-85 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none";

    // Sophisticated glassmorphism and height changes on scroll
    const navBackgroundClasses = scrolled
        ? "bg-luxury-white/95 backdrop-blur-xl border-b border-luxury-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-16 sm:h-20"
        : "bg-luxury-white/90 backdrop-blur-md border-b border-transparent shadow-none h-20 sm:h-24";

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${navVisibilityClasses}`}>
            <nav className={`pointer-events-auto w-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] px-6 sm:px-8 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center ${navBackgroundClasses}`}>

                {/* Left Section (Placeholder for Hamburger to maintain grid balance) */}
                <div className="flex justify-start items-center pointer-events-none">
                    {/* The HamburgerButton component (rendered in App.jsx) will visually occupy this space */}
                </div>

                {/* Logo Section (Perfectly Centered) */}
                <div className="flex justify-center items-center">
                    <a
                        href="/"
                        onClick={handleLogoClick}
                        className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-luxury-black tracking-[0.15em] sm:tracking-[0.2em] hover:text-luxury-gold transition-colors duration-500"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Right-aligned, hidden on smallest screens to prevent overlap) */}
                <div className="hidden sm:flex items-center gap-8 md:gap-12 justify-end">
                    <a
                        href="https://catalog.carpediam.in/"
                        onClick={(e) => handleNavClick(e, 'https://catalog.carpediam.in/', true)}
                        className={`${linkBaseClass} ${inactiveClass}`}
                    >
                        <span className="relative z-10">Catalogue</span>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-luxury-gold -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                    </a>
                    <a
                        href="/our-story"
                        onClick={(e) => handleNavClick(e, '/our-story', false)}
                        className={`${linkBaseClass} ${location.pathname === '/our-story' ? activeClass : inactiveClass}`}
                    >
                        <span className="relative z-10">Our Story</span>
                        {location.pathname === '/our-story' ? (
                            <span className="absolute bottom-0 left-1/2 w-full h-[1px] bg-luxury-black/30 -translate-x-1/2" />
                        ) : (
                            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-luxury-gold -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                        )}
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => handleNavClick(e, '/contact', false)}
                        className={`${linkBaseClass} ${location.pathname === '/contact' ? activeClass : inactiveClass}`}
                    >
                        <span className="relative z-10">Contact</span>
                        {location.pathname === '/contact' ? (
                            <span className="absolute bottom-0 left-1/2 w-full h-[1px] bg-luxury-black/30 -translate-x-1/2" />
                        ) : (
                            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-luxury-gold -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                        )}
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
