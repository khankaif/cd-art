import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';  //importing Greensock animation library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // importing Scroll animation it allows animation to happen on scroll
import { Link } from "react-router-dom";

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

      <footer className="bg-white border-t border-gray-100/80 pt-12 pb-8 font-sans">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Top Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 text-left">

            {/* Column 1: Branding */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-luxury-black tracking-widest uppercase">CD.</h2>
              <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xs">
                Modernizing the legacy of high-end manufacturing. Empowering independent designers with a seamless CAD-to-fulfillment pipeline.
              </p>
            </div>

            {/* Column 2: Navigation & Support */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-luxury-black/60">Info</h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="https://catalog.carpediam.in/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light tracking-wide">
                    Catalogue
                  </a>
                </li>
                <Link
                  to="/our-story"
                  className="text-xs text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light tracking-wide"
                >
                  Our Story
                </Link>

                <Link
                  to="/contact"
                  className="text-xs text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light tracking-wide"
                >
                  Contact
                </Link>
                <li>
                  <a href="#" className="text-xs text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light tracking-wide">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light tracking-wide">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Offices */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-luxury-black/60">Offices</h3>

              {/* Tabs */}
              <div className="flex gap-4 border-b border-gray-100 pb-1.5">
                <button
                  onClick={() => setActiveOffice('europe')}
                  className={`text-[10px] uppercase tracking-widest transition-colors duration-300 cursor-pointer ${activeOffice === 'europe' ? 'text-luxury-black font-semibold border-b border-luxury-black -mb-[7.5px] pb-[6px]' : 'text-gray-400 hover:text-luxury-black'}`}
                >
                  Europe
                </button>
                <button
                  onClick={() => setActiveOffice('india')}
                  className={`text-[10px] uppercase tracking-widest transition-colors duration-300 cursor-pointer ${activeOffice === 'india' ? 'text-luxury-black font-semibold border-b border-luxury-black -mb-[7.5px] pb-[6px]' : 'text-gray-400 hover:text-luxury-black'}`}
                >
                  India
                </button>
              </div>

              {/* Stacked Address */}
              <div>
                <p className="text-xs text-luxury-black font-medium mb-1">{offices[activeOffice].name}</p>
                {offices[activeOffice].address.map((line, idx) => (
                  <p key={idx} className="text-xs text-gray-500 font-light leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-light">
              © {new Date().getFullYear()} CD. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 items-center text-[10px] text-gray-400 font-light uppercase tracking-[0.2em]">
              <a href="tel:+918850157354" className="hover:text-luxury-black transition-colors duration-300">
                +91 88501 57364
              </a>
              <span className="text-gray-200">·</span>
              <a href="mailto:hello@carpediam.in" className="hover:text-luxury-black transition-colors duration-300 lowercase">
                hello@carpediam.in
              </a>
              <span className="text-gray-200">·</span>
              <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-black transition-colors duration-300">
                Instagram
              </a>
              <span className="text-gray-200">·</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-black transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;