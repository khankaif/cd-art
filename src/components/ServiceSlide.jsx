import React from 'react';

// This component expects a 'data' prop with { type, src, srcset, label, title, description, smallVideo }
// and an 'isActive' prop boolean.

const ServiceSlide = ({ data, isActive }) => {
    return (
        <article
            id={data.id || ""}
            className={`absolute inset-0 pb-[90px] lg:pb-[150px] flex flex-col justify-end transition-opacity duration-1000 h-full w-full px-[clamp(1rem,4vw,2.5rem)] ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
        >
            {/* Background Media - Behind everything */}
            {data.type === 'image' ? (
                <picture className="absolute inset-0 z-0 select-none pointer-events-none">
                    {data.srcset && <source srcSet={data.srcset} sizes="100vw" />}
                    <img
                        className="w-full h-full object-cover object-center"
                        alt={data.label}
                        src={data.src}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
                </picture>
            ) : (
                <div className="absolute inset-0 z-0">
                    <video
                        muted
                        playsInline
                        autoPlay
                        loop
                        className="w-full h-full object-cover object-center pointer-events-none"
                    >
                        <source src={data.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            )}

            {/* Content Header - On top of gradient */}
            <header className="relative z-10 flex flex-col gap-3 max-w-4xl">
                <h2 className="text-[32px] sm:text-[36px] lg:text-[72px] lg:w-[15ch] text-balance tracking-tight leading-[.95] font-serif font-semibold text-white drop-shadow-md">
                    {data.title}
                </h2>
                <p className="max-w-xl text-pretty text-white/90 text-base lg:text-xl font-light drop-shadow-sm leading-relaxed">
                    {data.description}
                </p>
            </header>

            {/* Special Case: Small floating video for slides with smallVideo */}
            {data.smallVideo && (
                <a
                    href="#"
                    className="hidden lg:block absolute z-20 bg-white rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl"
                    style={{ right: 'clamp(1rem,4vw,2.5rem)', top: 'clamp(6rem,8vw,10rem)' }}
                >
                    <div className="relative h-[220px] w-[200px]">
                        {/* Placeholder for video if source is not valid URL for demo */}
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                            <span className="text-xs text-gray-400">Video Preview</span>
                        </div>
                        <video
                            muted
                            playsInline
                            autoPlay
                            loop
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                        >
                            <source src={data.smallVideo} type="video/mp4" />
                        </video>
                    </div>
                    <span className="block p-3.5 text-[12px] leading-none text-[#0a0a0a] text-center font-medium bg-white uppercase tracking-wider">
                        View More
                    </span>
                </a>
            )}
        </article>
    );
};

export default ServiceSlide;
