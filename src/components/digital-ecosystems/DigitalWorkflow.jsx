import React from 'react';

const DigitalWorkflow = ({ workflowRef, workflowStages }) => {
    return (
        <section ref={workflowRef} className="py-24 md:py-36 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold inline-block mb-4">
                        Workflow Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-black">
                        The Interconnected Pipeline
                    </h2>
                    <p className="text-sm text-gray-400 font-light mt-4">
                        Witness how data flows in real-time, instantly converting client checkout actions into verified workbench tasks.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative pt-12 pb-8">
                    {/* Connecting Line background on desktop */}
                    <div className="absolute top-[88px] left-[5%] right-[5%] h-[1px] bg-gray-200/80 hidden lg:block">
                        <div className="de-workflow-line h-full bg-luxury-gold origin-left w-full scale-x-0"></div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
                        {workflowStages.map((stage, idx) => (
                            <div key={idx} className="de-workflow-node flex flex-col items-center lg:items-start text-center lg:text-left group">
                                {/* Number / Circle Node */}
                                <div className="w-14 h-14 rounded-full bg-white border border-gray-200/80 flex items-center justify-center shadow-sm relative mb-6 group-hover:border-luxury-gold group-hover:shadow-[0_0_20px_rgba(214,175,55,0.15)] transition-all duration-500">
                                    {/* Golden center dot */}
                                    <div className="w-8 h-8 rounded-full bg-luxury-black text-white flex items-center justify-center text-[10px] font-bold tracking-widest font-mono">
                                        {stage.num}
                                    </div>
                                </div>

                                {/* Title details */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-1">
                                    {stage.label}
                                </span>
                                <h4 className="text-lg font-serif text-luxury-black mb-3">
                                    {stage.title}
                                </h4>
                                <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs px-4 lg:px-0">
                                    {stage.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalWorkflow;
