import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const LeftSideNavbar = () => {
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        gsap.set(navRef.current, {
            opacity: 0,
            y: -20
        });

        gsap.to(navRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3
        });
    }, []);

    const handleOurStory = (e) => {
        e.preventDefault();
        navigate('/our-story');
    };

    const handleContactUs = (e) => {
        e.preventDefault();
        if (location.pathname === '/contact') {
            const element = document.getElementById('contact-form-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/contact');
        }
    };

    return (
        <div className="hidden xl:block fixed top-4 right-4 z-40 pointer-events-none">
            {/* Top Left Floating Buttons */}
            <nav
                ref={navRef}
                className="pointer-events-auto flex items-center gap-3"
            >
                {/* Our Story Button */}
                <a
                    href="#about"
                    onClick={handleOurStory}
                    className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm text-sm font-medium text-gray-700 hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                    Our Story
                </a>

                {/* Contact Us Button */}
                <a
                    href="#contact"
                    onClick={handleContactUs}
                    className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                    Contact Us
                </a>
            </nav>
        </div>
    );
};

export default LeftSideNavbar;