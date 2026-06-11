import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';  //importing Greensock animation library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // importing Scroll animation it allows animation to happen on scroll
import { Link } from "react-router-dom";
import Lenis from 'lenis'; // Import Lenis for smooth scrolling

//importing components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import OurStoryPage from './pages/OurStoryPage';
import BespokePage from './pages/BespokePage';
import PrecisionManufacturingPage from './pages/PrecisionManufacturingPage';
import IntegratedDigitalEcosystemsPage from './pages/IntegratedDigitalEcosystemsPage';
import { AnimatePresence } from 'framer-motion';
import HamburgerButton from './components/HamburgerButton';
import SidebarOverlay from './components/SidebarOverlay';
import SidebarMenu from './components/SidebarMenu';

//Before using ScrollTrigger, GSAP must know that plugin exists.So we register it.
gsap.registerPlugin(ScrollTrigger);

// Scroll restoration and GSAP cleanup on route transition
const ScrollToTop = () => {  //Whenever user changes page automatically goes to Top.
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({  //Always open new page from top.
      top: 0,
      behavior: "instant"
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh(); //Recalculate all scroll animations, Very useful because page content changed.
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

//Create a main react component called App. Everything inside website assembles in APP.jsx
function App() {
  const [activeOffice, setActiveOffice] = useState('europe');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize Lenis and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  const offices = {
    europe: {
      name: 'CD Europe B.V.',
      address: [
        'Unsaid De Burburestraat 20,',
        '2000 Antwerp,',
        'Belgium'
      ]
    },
    india: {
      name: 'CD India Studio',
      address: [
        'Unit 102, Luxury Craft Center,',
        'Off Bandra Kurla Complex,',
        'Mumbai 400051, India'
      ]
    }
  };

  return (  //React component App returns JSX- Html written inside JS
    <div className="font-sans antialiased text-luxury-black bg-white selection:bg-luxury-gold selection:text-white">
      <ScrollToTop />

      <Navbar />

      <AnimatePresence>
        {isSidebarOpen && (
          <React.Fragment key="sidebar-wrapper">
            <SidebarOverlay onClose={() => setIsSidebarOpen(false)} />
            <SidebarMenu onClose={() => setIsSidebarOpen(false)} />
          </React.Fragment>
        )}
      </AnimatePresence>

      <HamburgerButton isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/precision-manufacturing" element={<PrecisionManufacturingPage />} />
          <Route path="/integrated-digital-ecosystems" element={<IntegratedDigitalEcosystemsPage />} />
        </Routes>
      </main>

      <footer className="bg-luxury-black text-luxury-white pt-16 pb-8 font-sans border-t border-luxury-black">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">
            
            {/* Branding & Core Navigation */}
            <div className="flex flex-col gap-8 w-full lg:w-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-luxury-white tracking-widest uppercase">CD.</h2>
              <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-sm">
                <a href="https://catalog.carpediam.in/" target="_blank" rel="noopener noreferrer" className="relative group text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-luxury-white/60 hover:text-luxury-white transition-colors duration-500">
                  <span className="relative z-10">Catalogue</span>
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                </a>
                <Link to="/our-story" className="relative group text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-luxury-white/60 hover:text-luxury-white transition-colors duration-500">
                  <span className="relative z-10">Our Story</span>
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="relative group text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-luxury-white/60 hover:text-luxury-white transition-colors duration-500">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Offices & Connect */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-32 w-full lg:w-auto">
              
              {/* Offices */}
              <div className="space-y-6 min-w-[200px]">
                <h3 className="text-[9px] font-medium uppercase tracking-[0.3em] text-luxury-gold">Global Studios</h3>
                <div className="flex gap-6 border-b border-white/10 pb-2 relative">
                  <button
                    onClick={() => setActiveOffice('europe')}
                    className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 cursor-pointer ${activeOffice === 'europe' ? 'text-luxury-white font-medium' : 'text-luxury-white/40 hover:text-luxury-white/80'}`}
                  >
                    Europe
                  </button>
                  <button
                    onClick={() => setActiveOffice('india')}
                    className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 cursor-pointer ${activeOffice === 'india' ? 'text-luxury-white font-medium' : 'text-luxury-white/40 hover:text-luxury-white/80'}`}
                  >
                    India
                  </button>
                  {/* Animated Tab Indicator */}
                  <div 
                    className="absolute bottom-[-1px] h-[1px] bg-luxury-gold transition-all duration-500 ease-in-out"
                    style={{
                      left: activeOffice === 'europe' ? '0' : '52px',
                      width: activeOffice === 'europe' ? '46px' : '36px'
                    }}
                  ></div>
                </div>
                
                <div className="h-[80px] pt-2">
                  <p className="text-xs text-luxury-white font-medium mb-2 tracking-wide">{offices[activeOffice].name}</p>
                  {offices[activeOffice].address.map((line, idx) => (
                    <p key={idx} className="text-xs text-luxury-white/50 font-light leading-[1.8]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-6">
                <h3 className="text-[9px] font-medium uppercase tracking-[0.3em] text-luxury-gold">Connect</h3>
                <div className="flex flex-col gap-4 pt-1">
                  <a href="mailto:hello@carpediam.in" className="text-xs text-luxury-white/50 hover:text-luxury-gold transition-colors duration-500 font-light tracking-wide">
                    hello@carpediam.in
                  </a>
                  <a href="tel:+918850157354" className="text-xs text-luxury-white/50 hover:text-luxury-gold transition-colors duration-500 font-light tracking-wide">
                    +91 88501 57364
                  </a>
                  <div className="flex gap-5 pt-2">
                    <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="relative group text-[9px] tracking-[0.2em] uppercase text-luxury-white/40 hover:text-luxury-white transition-colors duration-500">
                      <span className="relative z-10">Instagram</span>
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-white transition-all duration-500 ease-out group-hover:w-full"></span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="relative group text-[9px] tracking-[0.2em] uppercase text-luxury-white/40 hover:text-luxury-white transition-colors duration-500">
                      <span className="relative z-10">LinkedIn</span>
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-white transition-all duration-500 ease-out group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[9px] sm:text-[10px] text-luxury-white/30 uppercase tracking-[0.3em] font-light text-center sm:text-left">
              © {new Date().getFullYear()} CD. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <a href="#" className="relative group text-[9px] sm:text-[10px] text-luxury-white/30 hover:text-luxury-white uppercase tracking-[0.25em] transition-colors duration-500">
                <span className="relative z-10">Privacy</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-white transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group text-[9px] sm:text-[10px] text-luxury-white/30 hover:text-luxury-white uppercase tracking-[0.25em] transition-colors duration-500">
                <span className="relative z-10">Terms</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-luxury-white transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;