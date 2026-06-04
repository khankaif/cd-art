import React from 'react';
import { Mail, Phone } from 'lucide-react';

const BespokeConsultation = ({ handleFormSubmit }) => {
    return (
        <section id="consultation-form" className="py-24 md:py-48 bg-luxury-white text-luxury-black border-b border-luxury-black/5 overflow-hidden">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* Left Typography Column */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between">
                        <div>
                            <div className="text-reveal flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">
                                    Private Commission
                                </span>
                            </div>
                            <h3 className="text-reveal text-4xl sm:text-5xl lg:text-7xl font-serif font-light leading-[1.0] mb-8">
                                Request an<br />
                                <span className="italic text-luxury-black/50">Appointment.</span>
                            </h3>
                            <p className="text-reveal text-sm sm:text-base text-luxury-black/60 font-light leading-[1.8] max-w-sm mb-16 border-l border-luxury-gold/30 pl-6">
                                To begin the bespoke design journey, please share a brief overview of your vision. Our directors personally review all requests within 24 hours.
                            </p>
                        </div>

                        <div className="text-reveal flex flex-col sm:flex-row lg:flex-col gap-12 lg:gap-8 pt-8 lg:pt-0 lg:border-t lg:border-luxury-black/10">
                            <div className="flex flex-col gap-4">
                                <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-black/40 font-medium">Direct Inquiries</span>
                                <a href="mailto:hello@carpediam.in" className="text-sm sm:text-base font-light text-luxury-black hover:text-luxury-gold transition-colors duration-500 flex items-center gap-4">
                                    <Mail className="w-4 h-4 opacity-50" />
                                    hello@carpediam.in
                                </a>
                                <a href="tel:+918850157354" className="text-sm sm:text-base font-light text-luxury-black hover:text-luxury-gold transition-colors duration-500 flex items-center gap-4">
                                    <Phone className="w-4 h-4 opacity-50" />
                                    +91 88501 57354
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-luxury-black p-8 sm:p-12 lg:p-16 text-luxury-white shadow-2xl relative">
                            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-luxury-gold/30 m-4 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-luxury-gold/30 m-4 pointer-events-none"></div>
                            
                            <form onSubmit={handleFormSubmit} className="space-y-12">
                                <div className="text-reveal flex flex-col md:flex-row gap-12">
                                    <div className="w-full md:w-1/2 space-y-4">
                                        <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium block">
                                            Full Name
                                        </label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            name="name"
                                            required 
                                            className="w-full bg-transparent border-b border-luxury-white/20 pb-3 text-sm text-luxury-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light placeholder-luxury-white/20 rounded-none"
                                            placeholder="Elizabeth Sterling"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-4">
                                        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium block">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            name="email"
                                            required 
                                            className="w-full bg-transparent border-b border-luxury-white/20 pb-3 text-sm text-luxury-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light placeholder-luxury-white/20 rounded-none"
                                            placeholder="elizabeth@sterling.com"
                                        />
                                    </div>
                                </div>

                                <div className="text-reveal space-y-4">
                                    <label htmlFor="project-type" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium block">
                                        Commission Category
                                    </label>
                                    <select 
                                        id="project-type" 
                                        name="project-type"
                                        required 
                                        className="w-full bg-transparent border-b border-luxury-white/20 pb-3 text-sm text-luxury-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light appearance-none rounded-none cursor-pointer"
                                    >
                                        <option value="" disabled selected className="text-luxury-black">Select an option...</option>
                                        <option value="custom-ring" className="text-luxury-black">Bespoke Diamond Ring</option>
                                        <option value="heirloom-remake" className="text-luxury-black">Heirloom Redesign</option>
                                        <option value="pendant-earrings" className="text-luxury-black">Custom Pendant / Earrings</option>
                                        <option value="other" className="text-luxury-black">Other Fine Artistry Commissions</option>
                                    </select>
                                </div>

                                <div className="text-reveal space-y-4">
                                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium block">
                                        Design Narrative
                                    </label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows="4"
                                        required 
                                        className="w-full bg-transparent border-b border-luxury-white/20 pb-3 text-sm text-luxury-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light resize-none placeholder-luxury-white/20 rounded-none"
                                        placeholder="Briefly describe the story and inspiration behind your desired piece..."
                                    ></textarea>
                                </div>

                                <div className="text-reveal pt-8 group">
                                    <button
                                        type="submit"
                                        className="relative inline-flex items-center text-[10px] sm:text-xs tracking-[0.25em] uppercase text-luxury-white pb-2 hover:text-luxury-gold transition-colors duration-500 cursor-pointer"
                                    >
                                        Submit Request
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-white/30"></span>
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BespokeConsultation;
