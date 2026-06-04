import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const HamburgerButton = ({ isOpen, onClick }) => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Visibility logic: Hide on scroll down, show on scroll up
            if (scrollY < 50) {
                setIsVisible(true);
            } else if (scrollY > lastScrollY.current && scrollY > 150) {
                setIsVisible(false);
            } else if (scrollY < lastScrollY.current) {
                setIsVisible(true);
            }
            lastScrollY.current = scrollY;
        };

        // Reset visibility and sync scroll position on mount/route changes
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    if (isOpen) return null;

    // Slide up with the navbar instead of sliding left.
    // The hamburger button lines are always luxury-black as the button sits on the white navbar.
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
                <span className="h-[1px] sm:h-[1.5px] bg-luxury-black transition-all duration-300 ease-out w-5 sm:w-6 group-hover:w-8" />
                <span className="h-[1px] sm:h-[1.5px] bg-luxury-black transition-all duration-300 ease-out w-8 group-hover:w-5 sm:group-hover:w-6" />
            </div>
        </button>
    );
};

export default HamburgerButton;
