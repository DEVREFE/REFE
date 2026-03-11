import React from 'react';

const row1 = [
    "BRANDING", "·", "IDENTIDAD", "·", "ESTRATEGIA", "·", "DESARROLLO WEB", "·", "REACT", "·", "NEXT.JS", "·", "E-COMMERCE", "·",
];
const row2 = [
    "GO TO MARKET", "·", "META ADS", "·", "GOOGLE ADS", "·", "SEO TÉCNICO", "·", "CRO", "·", "FIGMA", "·", "SHOPIFY", "·",
];

const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
    const all = [...items, ...items, ...items, ...items];
    return (
        <div className="flex w-max overflow-hidden">
            <div className={`flex gap-10 px-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
                {all.map((item, i) => (
                    <div key={i} className="flex items-center select-none">
                        <span className={`font-mono text-xs tracking-widest ${item === '·' ? 'text-refe-muted' : 'text-refe-muted hover:text-refe-light transition-colors duration-300'}`}>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TechMarquee: React.FC = () => {
    return (
        <div className="py-12 bg-refe-black border-y border-white/[0.06] relative z-20 flex flex-col gap-5 overflow-hidden">
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-refe-black via-transparent to-refe-black z-20 pointer-events-none" />
            <div className="opacity-50 hover:opacity-80 transition-opacity duration-700">
                <MarqueeRow items={row1} />
            </div>
            <div className="w-full h-px bg-white/[0.05]" />
            <div className="opacity-30 hover:opacity-70 transition-opacity duration-700">
                <MarqueeRow items={row2} reverse={true} />
            </div>
            <style>{`
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default TechMarquee;