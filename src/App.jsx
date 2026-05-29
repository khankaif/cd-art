import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';  //importing Greensock animation library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // importing Scroll animation it allows animation to happen on scroll

//importing components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import OurStoryPage from './pages/OurStoryPage';
import BespokePage from './pages/BespokePage';
import PrecisionManufacturingPage from './pages/PrecisionManufacturingPage';
import IntegratedDigitalEcosystemsPage from './pages/IntegratedDigitalEcosystemsPage';

//Before using ScrollTrigger, GSAP must know that plugin exists.So we register it.
gsap.registerPlugin(ScrollTrigger);

// Scroll restoration and GSAP cleanup on route transition
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

//Create a main react component called App. Evrything inside website assembles in APP.jsx
function App() {
  const [activeOffice, setActiveOffice] = useState('europe');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

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

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/precision-manufacturing" element={<PrecisionManufacturingPage />} />
          <Route path="/digital-ecosystems" element={<IntegratedDigitalEcosystemsPage />} />
        </Routes>
      </main>

      <footer className="bg-white border-t border-gray-100/80 pt-20 pb-12 font-sans">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Top Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-left">

            {/* Column 1: Branding */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-luxury-black tracking-tight">CD.</h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Modernizing the legacy of high-end manufacturing. Empowering independent designers with a seamless CAD-to-fulfillment pipeline.
              </p>
            </div>

            {/* Column 2: Stay in Touch */}
            <div className="space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-luxury-black">Stay in Touch</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Sign up for email updates on the latest CD. collections, design innovations, and exclusive releases.
              </p>
              {subscribed ? (
                <p className="text-xs text-luxury-gold uppercase tracking-wider font-semibold animate-pulse">
                  Thank you for subscribing.
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center border-b border-gray-200 py-1.5 focus-within:border-luxury-black transition-colors duration-300">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="appearance-none bg-transparent border-none w-full text-sm text-luxury-black mr-3 py-1 px-1 leading-tight focus:outline-none placeholder-gray-400 font-light"
                    required
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-luxury-black hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Column 3: Support */}
            <div className="space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-luxury-black">Support</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#contact" className="text-sm text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#services-anchor" className="text-sm text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light cursor-pointer">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-luxury-black transition-colors duration-300 font-light cursor-pointer">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Offices */}
            <div className="space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-luxury-black">Offices</h3>

              {/* Tabs */}
              <div className="flex gap-4 border-b border-gray-100 pb-2">
                <button
                  onClick={() => setActiveOffice('europe')}
                  className={`text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer ${activeOffice === 'europe' ? 'text-luxury-black font-semibold border-b border-luxury-black -mb-[9px] pb-[7px]' : 'text-gray-400 hover:text-luxury-black'}`}
                >
                  Europe
                </button>
                <button
                  onClick={() => setActiveOffice('india')}
                  className={`text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer ${activeOffice === 'india' ? 'text-luxury-black font-semibold border-b border-luxury-black -mb-[9px] pb-[7px]' : 'text-gray-400 hover:text-luxury-black'}`}
                >
                  India
                </button>
              </div>

              {/* Stacked Address */}
              <div className="min-h-[72px]">
                <p className="text-sm text-luxury-black font-medium mb-1">{offices[activeOffice].name}</p>
                {offices[activeOffice].address.map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-500 font-light leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-light">
              © {new Date().getFullYear()} CD. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center text-xs text-gray-400 font-light uppercase tracking-widest">
              <a href="tel:+918850157354" className="hover:text-luxury-black transition-colors duration-300">
                +91 88501 57364
              </a>
              <span className="hidden md:inline text-gray-200">|</span>
              <a href="mailto:hello@carpediam.in" className="hover:text-luxury-black transition-colors duration-300 lowercase">
                hello@carpediam.in
              </a>
              <span className="hidden md:inline text-gray-200">|</span>
              <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-black transition-colors duration-300">
                Instagram
              </a>
              <span className="hidden md:inline text-gray-200">|</span>
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
