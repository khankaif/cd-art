import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import image from '../assets/image.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ContactPage = () => {
    const heroContentRef = useRef(null);
    const formSectionRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Entry animation for hero elements
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-animate",
                { y: 50, opacity: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out"
                }
            );
        }, heroContentRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    const scrollToForm = () => {
        const element = document.getElementById('contact-form-section');
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <div className="relative w-full min-h-screen bg-luxury-black text-white font-sans overflow-hidden">

            {/* Cinematic Parallax Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center absolute"
                    style={{
                        backgroundImage: `url(${image})`,
                        filter: 'brightness(0.3) contrast(1.15) saturate(0.85)'
                    }}
                >
                    {/* Visual gradients to soften the edges and create depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
                </div>
            </div>

            {/* Page Header Spacer */}
            <div className="h-16 lg:h-20"></div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16">
                <div ref={heroContentRef} className="max-w-4xl space-y-8 flex flex-col items-center">
                    <span className="contact-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold text-luxury-gold tracking-widest uppercase">
                        Collaborate
                    </span>
                    <h1 className="contact-animate text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight">
                        Let's create something <span className="italic font-light text-gray-300">timeless</span>.
                    </h1>
                    <p className="contact-animate text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Join our network of forward-thinking retailers.
                    </p>
                    <div className="contact-animate pt-4">
                        <button
                            onClick={scrollToForm}
                            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white hover:text-luxury-black hover:shadow-lg hover:shadow-luxury-gold/15 hover:border-white transition-all duration-350 active:scale-95 cursor-pointer"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Card Section */}
            <section id="contact-form-section" ref={formSectionRef} className="relative z-10 px-6 pb-32">
                <div className="max-w-5xl mx-auto bg-[#f5f2eb] text-luxury-black rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-white/10 flex flex-col gap-12 lg:gap-16">

                    {/* Upper: Grid of Form + Side Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

                        {/* Left Column: Form */}
                        <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col justify-between space-y-8">
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="flex flex-col border-b border-gray-300 focus-within:border-luxury-black transition-colors duration-250 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Name</label>
                                        <input
                                            type="text"
                                            className="bg-transparent border-none text-sm text-luxury-black focus:outline-none font-light py-1"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    {/* Email Address */}
                                    <div className="flex flex-col border-b border-gray-300 focus-within:border-luxury-black transition-colors duration-250 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="bg-transparent border-none text-sm text-luxury-black focus:outline-none font-light py-1"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Company Name */}
                                    <div className="flex flex-col border-b border-gray-300 focus-within:border-luxury-black transition-colors duration-250 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Company Name</label>
                                        <input
                                            type="text"
                                            className="bg-transparent border-none text-sm text-luxury-black focus:outline-none font-light py-1"
                                            placeholder="Your Company"
                                            required
                                        />
                                    </div>
                                    {/* Service Required */}
                                    <div className="flex flex-col border-b border-gray-300 focus-within:border-luxury-black transition-colors duration-250 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Service Required</label>
                                        <select
                                            className="bg-transparent border-none text-sm text-luxury-black focus:outline-none font-light py-1 appearance-none cursor-pointer"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-gray-400">Select Service Required</option>
                                            <option value="bespoke-design">Bespoke Jewelry Design</option>
                                            <option value="cad-manufacturing">Rapid CAD & Manufacturing</option>
                                            <option value="automated-fulfillment">Automated Fulfillment API</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col border-b border-gray-300 focus-within:border-luxury-black transition-colors duration-250 py-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Message</label>
                                    <textarea
                                        rows="3"
                                        className="bg-transparent border-none text-sm text-luxury-black focus:outline-none font-light py-1 resize-none"
                                        placeholder="Describe your project, timeline, or inquiries..."
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="relative pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-full bg-luxury-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.01] active:scale-98 cursor-pointer border border-transparent hover:border-luxury-gold/30"
                                >
                                    {submitted ? 'Thank you for reaching out' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {/* Right Column: Architectural side visual card */}
                        <div className="lg:col-span-5 hidden lg:block">
                            <div className="h-full min-h-[380px] w-full rounded-[2rem] overflow-hidden shadow-lg relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Luxury workspace architecture"
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-luxury-black/5 mix-blend-overlay"></div>
                            </div>
                        </div>

                    </div>

                    {/* Lower: Contact Info Columns */}
                    <div className="border-t border-gray-200/80 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm">

                        {/* Column 1: Email & Phone */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</h4>
                                <a href="mailto:hello@carpediam.in" className="text-luxury-black hover:text-luxury-gold transition-colors duration-200 font-light">
                                    hello@carpediam.in
                                </a>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Phone</h4>
                                <a href="tel:+918850157354" className="text-luxury-black hover:text-luxury-gold transition-colors duration-200 font-light">
                                    +91 88501 57354
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Office Location */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Office Location</h4>
                            <p className="text-luxury-black font-light leading-relaxed">
                                Unsaid De Burburestraat 20,<br />
                                2000 Antwerp, Belgium
                            </p>
                        </div>

                        {/* Column 3: Social Links */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Social Links</h4>
                            <div className="flex flex-col space-y-1">
                                <a href="https://instagram.com/carpediamjewelry" target="_blank" rel="noopener noreferrer" className="text-luxury-black hover:text-luxury-gold transition-colors duration-200 font-light w-fit">
                                    Instagram
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-luxury-black hover:text-luxury-gold transition-colors duration-200 font-light w-fit">
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default ContactPage;
