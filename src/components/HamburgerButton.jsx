import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const HamburgerButton = ({ isOpen, onClick }) => {
    const location = useLocation();
    const [theme, setTheme] = useState('light'); // 'light' represents white lines on dark card (for dark sections), 'dark' represents dark lines on light card (for light sections)
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const path = location.pathname;
            const scrollY = window.scrollY;

            // Determine theme based on page path and scroll position
            if (path === '/our-story') {
                // Our Story is light-themed (#FAF9F6) from the top
                setTheme('dark');
            } else if (path === '/precision-manufacturing') {
                // Precision Manufacturing Hero has light/mixed background with dark title text
                setTheme('dark');
            } else if (path === '/') {
                // Home page has a dark hero (~100vh), then shifts to light content
                setTheme(scrollY < 650 ? 'light' : 'dark');
            } else if (path === '/bespoke') {
                // Bespoke page has a dark hero (~80vh), then shifts to light content
                setTheme(scrollY < 550 ? 'light' : 'dark');
            } else if (path === '/digital-ecosystems' || path === '/integrated-digital-ecosystems') {
                // Digital page has a dark hero (~80vh), then shifts to light content
                setTheme(scrollY < 550 ? 'light' : 'dark');
            } else if (path === '/contact') {
                // Contact page has a dark hero (~60vh), then shifts to light content
                setTheme(scrollY < 380 ? 'light' : 'dark');
            } else {
                // Fallback default
                setTheme(scrollY < 500 ? 'light' : 'dark');
            }

            // Visibility logic
            if (scrollY < 50) {
                setIsVisible(true);
            } else if (scrollY > lastScrollY.current && scrollY > 150) {
                setIsVisible(false);
            } else if (scrollY < lastScrollY.current) {
                setIsVisible(true);
            }
            lastScrollY.current = scrollY;
        };

        // Run on initial mount and location changes
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    if (isOpen) return null;

    // Premium context-aware glassmorphic styling
    const containerStyles = theme === 'dark'
        ? 'bg-luxury-black/[0.04] border-luxury-black/10 hover:bg-luxury-black/[0.08] hover:border-luxury-black/15 shadow-[0_8px_32px_0_rgba(10,10,10,0.03)]'
        : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]';

    const lineColors = theme === 'dark' ? 'bg-luxury-black' : 'bg-white';

    const visibilityClasses = isVisible 
        ? "opacity-100 translate-x-0" 
        : "opacity-0 -translate-x-[60px] pointer-events-none";

    return (
        <button
            onClick={onClick}
            className={`fixed top-12 left-6 sm:top-8 sm:left-8 md:left-12 z-40 flex justify-center items-center w-12 h-12 rounded-full border backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto cursor-pointer focus:outline-none active:scale-95 group ${containerStyles} ${visibilityClasses}`}
            aria-label="Open Menu"
        >
            <div className="flex flex-col gap-1.5 items-start justify-center">
                <span className={`h-[2px] ${lineColors} transition-all duration-300 ease-out w-5 group-hover:w-7`} />
                <span className={`h-[2px] ${lineColors} transition-all duration-300 ease-out w-7 group-hover:w-4`} />
            </div>
        </button>
    );
};

export default HamburgerButton;
