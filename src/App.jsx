import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans antialiased text-luxury-black bg-white selection:bg-luxury-gold selection:text-white">

      <Navbar />

      <main>
        <Hero />
        <LogoTicker />
        <Services />
        <Features />
        <Contact />
      </main>

      <footer className="py-12 bg-white text-center">
        <div className="container mx-auto px-6 border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">CD.</h2>
          <div className="flex justify-center gap-8 mb-8 text-sm text-gray-500">
            <a href="#" className="hover:text-luxury-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-luxury-black transition-colors">Terms</a>
            <a href="#" className="hover:text-luxury-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-luxury-black transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} CD. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
