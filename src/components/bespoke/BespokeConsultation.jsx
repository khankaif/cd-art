import React from 'react';
import { Mail, Phone, Check } from 'lucide-react';

const BespokeConsultation = ({ handleFormSubmit }) => {
    return (
        <section id="consultation-form" className="py-32 bg-luxury-black text-white relative overflow-hidden">
            {/* Visual Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="contact-card-animate rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row justify-between gap-16 items-stretch">
                    
                    {/* Left Info Column */}
                    <div className="flex-1 space-y-8 flex flex-col justify-between text-left">
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">
                                Bespoke Request
                            </span>
                            <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
                                Let's build your <br />
                                <span className="italic text-gray-400 font-light">dream design.</span>
                            </h3>
                            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                                Fill out our design consultation form to schedule a physical or digital design session with our studio directors.
                            </p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Email</p>
                                    <a href="mailto:hello@carpediam.in" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                        hello@carpediam.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-luxury-gold shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Phone & Whatsapp</p>
                                    <a href="tel:+918850157354" className="text-base text-gray-200 hover:text-luxury-gold transition-colors font-light">
                                        +91 88501 57354
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-12">
                        <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    placeholder="Elizabeth Sterling"
                                    required 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="elizabeth@sterling.com"
                                    required 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="project-type" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                    Project Type
                                </label>
                                <select 
                                    id="project-type" 
                                    name="project-type"
                                    required 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light appearance-none"
                                >
                                    <option value="" disabled className="bg-luxury-black text-gray-500">Select custom project</option>
                                    <option value="custom-ring" className="bg-luxury-black text-white">Bespoke Diamond Ring</option>
                                    <option value="heirloom-remake" className="bg-luxury-black text-white">Heirloom Redesign</option>
                                    <option value="pendant-earrings" className="bg-luxury-black text-white">Custom Pendant or Earrings</option>
                                    <option value="other" className="bg-luxury-black text-white">Other Fine Artistry Commissions</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-medium block">
                                    Your Vision
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    rows="4"
                                    placeholder="Describe the heirloom piece you wish to co-create..."
                                    required 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all duration-300 font-light resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Submit Request <Check className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BespokeConsultation;
