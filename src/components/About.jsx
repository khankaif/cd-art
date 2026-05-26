import React from 'react';
import AboutHero from './about/AboutHero';
import AboutStory from './about/AboutStory';
import AboutPhilosophy from './about/AboutPhilosophy';
import AboutGallery from './about/AboutGallery';
import AboutCTA from './about/AboutCTA';
// import AboutContact from './about/AboutContact';

const About = () => {
    return (
        <section id="about" className="bg-white overflow-hidden">
            <AboutHero />
            <AboutStory />
            <AboutPhilosophy />
            <AboutGallery />
            <AboutCTA />

        </section>
    );
};

export default About;
