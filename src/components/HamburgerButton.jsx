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

    // Theme logic no longer dictates button background/border, as it sits on the white navbar strip
    // We only need the lines to be dark (luxury-black) to contrast the white navbar
    const lineColors = 'bg-luxury-black';

    // Slide up with the navbar instead of sliding left
    const visibilityClasses = isVisible 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 -translate-y-full pointer-events-none";

    return (
        <button
            onClick={onClick}
            className={`fixed top-0 left-0 z-50 flex justify-center items-center h-16 sm:h-20 w-16 sm:w-20 lg:w-24 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto cursor-pointer focus:outline-none group ${visibilityClasses}`}
            aria-label="Open Menu"
        >
            <div className="flex flex-col gap-1.5 items-center justify-center w-full">
                <span className={`h-[1px] sm:h-[1.5px] ${lineColors} transition-all duration-300 ease-out w-5 sm:w-6 group-hover:w-8`} />
                <span className={`h-[1px] sm:h-[1.5px] ${lineColors} transition-all duration-300 ease-out w-8 group-hover:w-5 sm:group-hover:w-6`} />
            </div>
        </button>
    );
};

export default HamburgerButton;
