import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Setup initial state and animate opacity smoothly without layout transforms
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

    const handleNavClick = (e, item) => {
        e.preventDefault();

        if (item.external) {
            window.open(item.link, '_blank');
            return;
        }
        if (item.name === 'Tech') {
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: 'tech' } });
            } else {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    const sectionTop = servicesSection.offsetTop;
                    window.scrollTo({
                        top: sectionTop + (window.innerHeight * 4),
                        behavior: 'smooth'
                    });
                }
            }
            return;
        }

        if (item.link.startsWith('#')) {
            const targetId = item.link.substring(1);
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: targetId } });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <div className="fixed top-2 left-0 w-full z-50 px-2 sm:px-6 flex justify-center pointer-events-none">
            <nav
                ref={navRef}
                className="pointer-events-auto flex items-center justify-between px-1.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm w-full max-w-4xl transition-shadow duration-300 hover:shadow-md"
            >
                {/* Logo Section */}
                <div className="flex items-center pl-1 sm:pl-4 flex-none md:flex-1">
                    <a
                        href="/"
                        className="text-base sm:text-xl font-serif font-bold text-luxury-black tracking-tight"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Visible always, compact & responsive) */}
                <div className="flex items-center gap-0.5 sm:gap-1 bg-gray-100/50 rounded-full px-1 py-1 sm:px-2 sm:py-1.5 border border-white/50">
                    {[
                        { name: 'Services', link: '#services-anchor' },
                        {
                            name: 'Catalogue',
                            link: 'https://catalog.carpediam.in/',
                            external: true
                        },
                        { name: 'Tech', link: '#' },
                        { name: 'About', link: '#about' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={(e) => handleNavClick(e, item)}
                            className="px-2 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs md:text-sm font-medium text-gray-600 hover:bg-white hover:text-luxury-black hover:shadow-sm transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right Side: Spacer for desktop, buttons for mobile/tablet */}
                {/* Spacer on Desktop (>= 1280px / xl) */}
                <div className="hidden xl:flex xl:flex-1 justify-end pr-4 pointer-events-none select-none">
                    <span className="opacity-0 text-xl font-serif font-bold tracking-tight">CD.</span>
                </div>

                {/* Buttons on Mobile/Tablet (< 1280px / xl) */}
                <div className="flex xl:hidden flex-none items-center gap-1 sm:gap-2 pr-1">
                    <a
                        href="/our-story"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/our-story');
                        }}
                        className="px-2 py-1 rounded-full text-[9px] sm:text-xs font-medium text-gray-600 hover:bg-white hover:text-luxury-black transition-colors"
                    >
                        Our Story
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => {
                            e.preventDefault();
                            if (location.pathname === '/contact') {
                                document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                navigate('/contact');
                            }
                        }}
                        className="px-2 py-1 rounded-full bg-black text-white text-[9px] sm:text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
