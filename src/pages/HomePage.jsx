import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import Services from '../components/Services';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            // Delay slightly to ensure component has mounted and rendered completely
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                // Clear location state to prevent scrolling again on page refresh
                window.history.replaceState({}, document.title);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <LogoTicker />
            <div id="services-anchor"></div>
            <Services />
            <div></div>
            <Features />
            <About />
            <Contact />
        </>
    );
};

export default HomePage;
