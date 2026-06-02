import React from 'react';

const TimelineSection = () => {
    const milestones = [
        {
            year: "2021",
            title: "The Genesis",
            desc: "Founded in Mumbai with a singular vision: to modernize the legacy of high-end jewelry design and make artisanal quality scaleable."
        },
        {
            year: "2022",
            title: "CAD-to-Gold Integration",
            desc: "Pioneered a closed-loop rapid 3D printing and precise laser casting pipeline, reducing typical manufacturing lead times by 60%."
        },
        {
            year: "2023",
            title: "Antwerp Design Hub",
            desc: "Opened our European studio in Antwerp, Antwerp, establishing direct connections with key global diamond markets and luxury houses."
        },
        {
            year: "2024",
            title: "API-First Catalog",
            desc: "Released our headless fulfillment API, empowering independent brands to market digital inventory before physical casting."
        },
        {
            year: "2026",
            title: "Timeless Innovation",
            desc: "Continuing to redefine high-end curation by blending traditional craftsmanship with advanced technology across two continents."
        }
    ];

    return (
        <section className="py-16 md:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        Milestones
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        Evolution of the brand.
                    </h2>
                </div>

                {/* Timeline Line */}
                <div className="relative border-l border-gray-200/80 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12 md:space-y-16">
                    {milestones.map((milestone, idx) => (
                        <div 
                            key={idx} 
                            className="timeline-item-animate relative flex flex-col md:flex-row items-start md:items-center w-full"
                        >
                            {/* Circle node indicator */}
                            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-2 border-luxury-gold z-10"></div>
                            
                            {/* Content Card */}
                            <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:order-2 ml-auto'}`}>
                                <div className="inline-block px-3 py-1 bg-luxury-gold/5 border border-luxury-gold/10 text-luxury-gold text-xs font-bold rounded-full mb-3">
                                    {milestone.year}
                                </div>
                                <h4 className="text-xl sm:text-2xl font-serif text-luxury-black mb-3">{milestone.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md md:ml-auto md:mr-0">
                                    {milestone.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
