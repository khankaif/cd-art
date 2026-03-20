import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactTexture from '../assets/contact-texture.png';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { y: 50, opacity: 0, filter: "blur(10px)" },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-32 flex flex-col justify-center items-center px-6 bg-luxury-black text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img src={contactTexture} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black/80"></div>
            </div>

            <div ref={contentRef} className="text-center max-w-4xl z-10 relative">
                <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">
                    Let's create something <span className="italic text-gray-400">timeless</span>.
                </h2>
                <p className="text-xl text-gray-300 mb-12 font-light">
                    Join our network of forward-thinking retailers.
                </p>

                <a
                    href="mailto:hello@cd.com"
                    className="inline-block px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-luxury-black transition-all duration-300 shadow-xl hover:shadow-white/10 hover:-translate-y-1"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Contact;
