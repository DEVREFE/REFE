import React from 'react';

const row1 = [
  "STRATEGIC_PLANNING", "///", "CLOUD_NATIVE_ARCH", "///", "REACT_ECOSYSTEM", "///", "AWS_INFRASTRUCTURE", "///", "NEXT_JS_ENTERPRISE", "///", "SCALABLE_SYSTEMS", "///"
];

const row2 = [
  "DATA_DRIVEN_DECISIONS", "::", "UI_ENGINEERING", "::", "HIGH_PERFORMANCE", "::", "GROWTH_LOOPS", "::", "AI_INTEGRATION", "::", "DIGITAL_TRANSFORMATION", "::"
];

const MarqueeRow = ({ items, reverse = false, speed = "normal" }: { items: string[], reverse?: boolean, speed?: string }) => (
    <div className="flex w-max relative overflow-hidden">
        <div className={`flex gap-8 px-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} ${speed === 'fast' ? 'duration-[20s]' : 'duration-[40s]'}`}>
            {[...items, ...items, ...items, ...items].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group select-none">
                    <span className={`font-mono text-xs md:text-sm tracking-widest ${item === '///' || item === '::' ? 'text-brand-neon' : 'text-gray-500 group-hover:text-white transition-colors'}`}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={`flex gap-8 px-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} ${speed === 'fast' ? 'duration-[20s]' : 'duration-[40s]'}`} aria-hidden="true">
            {[...items, ...items, ...items, ...items].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group select-none">
                     <span className={`font-mono text-xs md:text-sm tracking-widest ${item === '///' || item === '::' ? 'text-brand-neon' : 'text-gray-500 group-hover:text-white transition-colors'}`}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

const TechMarquee: React.FC = () => {
  return (
    <div className="py-12 bg-[#020202] border-y border-white/5 relative z-20 flex flex-col gap-4 overflow-hidden">
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20" />
        
        {/* Vignette fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-20 pointer-events-none" />
      
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            <MarqueeRow items={row1} />
        </div>
        
        <div className="w-full h-[1px] bg-white/5" />
        
        <div className="opacity-50 hover:opacity-100 transition-opacity duration-500">
            <MarqueeRow items={row2} reverse={true} speed="fast" />
        </div>

        <style>{`
            @keyframes scroll-reverse {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
            }
            .animate-scroll-reverse {
                animation: scroll-reverse 40s linear infinite;
            }
        `}</style>
    </div>
  );
};

export default TechMarquee;