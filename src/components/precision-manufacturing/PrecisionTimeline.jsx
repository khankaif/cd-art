import React from 'react';

const PrecisionTimeline = ({ timelineSteps }) => {
    return (
        <section className="py-24 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        The Production Flow
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        From concept to completion.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-gray-200/80 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">
                    {timelineSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className="pm-timeline-node relative flex flex-col md:flex-row items-start md:items-center w-full"
                        >
                            {/* Circle node */}
                            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-2 border-luxury-gold z-10"></div>

                            {/* Content Card */}
                            <div className={`pm-timeline-card pl-8 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:order-2 ml-auto'}`}>
                                <div className="inline-block px-3.5 py-1 bg-luxury-gold/5 border border-luxury-gold/10 text-luxury-gold text-xs font-bold rounded-full mb-3">
                                    Step {step.step}
                                </div>
                                <h4 className="text-xl sm:text-2xl font-serif text-luxury-black mb-3">{step.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md md:ml-auto md:mr-0">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrecisionTimeline;
