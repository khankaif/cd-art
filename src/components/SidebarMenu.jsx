import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent background scrolling while sidebar is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about', isHash: true },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Precision Manufacturing', path: '/precision-manufacturing' },
    { name: 'Integrated Digital Ecosystems', path: '/integrated-digital-ecosystems' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleItemClick = (e, item) => {
    e.preventDefault();
    onClose();

    if (item.isHash) {
      if (location.pathname === '/') {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', '#about');
      } else {
        navigate('/', { state: { scrollTo: 'about' } });
      }
    } else {
      // Map the long ecosystem URL to our actual route in App
      if (item.path === '/integrated-digital-ecosystems') {
        navigate('/integrated-digital-ecosystems');
      } else {
        navigate(item.path);
      }
    }
  };

  const checkActive = (item) => {
    if (item.isHash) {
      return location.pathname === '/' && location.hash === '#about';
    }
    if (item.path === '/') {
      return location.pathname === '/' && location.hash !== '#about';
    }
    if (item.path === '/integrated-digital-ecosystems') {
      return location.pathname === '/integrated-digital-ecosystems' || location.pathname === '/digital-ecosystems';
    }
    return location.pathname === item.path;
  };

  // Animation variants
  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
      }
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] // Custom easeInOutQuart
      }
    }
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

    return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed top-0 left-0 h-[100dvh] w-full max-w-[380px] z-50 bg-[#0A0A0A]/95 backdrop-blur-2xl border-r border-white/5 flex flex-col justify-between p-6 sm:p-8 md:p-12 text-white overflow-y-auto select-none pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Subtle radial glow for premium luxury feel */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(197,160,89,0.06),transparent_65%)] pointer-events-none" 
        aria-hidden="true"
      />

      {/* Header section with Close Button and Brand Mark */}
      <div className="relative z-10 flex items-center justify-between w-full min-h-[48px]">
        {/* Close Button positioned in top-left of sidebar */}
        <button
          onClick={onClose}
          className="text-white/60 hover:text-luxury-gold transition-all duration-300 hover:rotate-90 p-3 -m-3 focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Small branding text in top-right of sidebar */}
        <div className="text-lg font-serif font-bold text-white tracking-[0.15em]">
          CD.
        </div>
      </div>

      {/* Navigation menu list */}
      <motion.nav 
        variants={listVariants}
        className="relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8 my-auto pt-6 pb-8"
      >
        {menuItems.map((item, index) => {
          const active = checkActive(item);
          return (
            <motion.div
              key={index}
              variants={linkVariants}
              className="relative pl-6"
            >
              {/* Thin gold active indicator line */}
              {active && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute left-0 top-[15%] w-[1.5px] h-[70%] bg-luxury-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <a
                href={item.path}
                onClick={(e) => handleItemClick(e, item)}
                className={`block font-serif text-xl sm:text-2xl md:text-3xl font-light tracking-wide transition-colors duration-300 ${
                  active ? 'text-luxury-gold' : 'text-white/80 hover:text-luxury-gold'
                }`}
              >
                {item.name}
              </a>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Minimal copyright footer */}
      <div className="relative z-10 text-[10px] tracking-[0.3em] uppercase opacity-40 text-white font-sans mt-auto">
        © CarpeDiam
      </div>
    </motion.div>
  );
};

export default SidebarMenu;
