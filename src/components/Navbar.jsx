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
        <div className="fixed top-2 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
            <nav ref={navRef} className="pointer-events-auto flex items-center justify-between px-2 p-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm w-full max-w-4xl transition-all duration-300 hover:shadow-md">

                {/* Logo Section */}
                <div className="flex items-center pl-4 md:flex-1">
                    <a
                        href="/"
                        className="text-xl font-serif font-bold text-luxury-black tracking-tight"
                    >
                        CD.
                    </a>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full px-2 py-1.5 border border-white/50">
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
                            className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-luxury-black hover:shadow-sm transition-all duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Spacer to balance logo alignment on desktop */}
                <div className="hidden md:flex md:flex-1 justify-end pr-4 pointer-events-none select-none">
                    <span className="opacity-0 text-xl font-serif font-bold tracking-tight">CD.</span>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
