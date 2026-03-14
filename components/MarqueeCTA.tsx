import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MarqueeCTA: React.FC = () => {
    const { t } = useLanguage();
    const text = t.footer.marquee_text || "Let's work together";

    const items = Array(10).fill(text);

    return (
        <a
            href="#footer"
            className="block py-8 bg-refe-black border-y border-white/[0.06] overflow-hidden group cursor-pointer relative"
        >
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-refe-black via-transparent to-refe-black z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee-cta group-hover:pause">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
                        <span className="refe-serif text-4xl md:text-6xl text-white/20 group-hover:text-refe-accent/60 italic transition-colors duration-500">
                            {item}
                        </span>
                        <span className="text-refe-accent text-xl">✦</span>
                    </div>
                ))}
            </div>

            <style>{`
                .group:hover .animate-marquee-cta {
                    animation-play-state: paused;
                }
            `}</style>
        </a>
    );
};

export default MarqueeCTA;
