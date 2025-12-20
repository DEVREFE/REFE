import React from 'react';

const row1 = [
  "STRATEGIC_PLANNING", "///", "CLOUD_NATIVE_ARCH", "///", "REACT_ECOSYSTEM", "///", "AWS_INFRASTRUCTURE", "///", "NEXT_JS_ENTERPRISE", "///", "SCALABLE_SYSTEMS", "///"
];

const row2 = [
  "DATA_DRIVEN_DECISIONS", "::", "UI_ENGINEERING", "::", "HIGH_PERFORMANCE", "::", "GROWTH_LOOPS", "::", "AI_INTEGRATION", "::", "DIGITAL_TRANSFORMATION", "::"
];

const MarqueeRow = ({ items, reverse = false, speed = "normal" }: { items: string[], reverse?: boolean, speed?: string }) => (
    <div className="flex w-max relative overflow-hidden">
        <div className={`flex gap-12 px-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} ${speed === 'fast' ? 'duration-[30s]' : 'duration-[50s]'}`}>
            {[...items, ...items, ...items, ...items].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group select-none">
                    <span className={`font-mono text-xs md:text-sm tracking-widest ${item === '///' || item === '::' ? 'text-gray-600' : 'text-gray-500 group-hover:text-white transition-colors duration-300'}`}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={`flex gap-12 px-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} ${speed === 'fast' ? 'duration-[30s]' : 'duration-[50s]'}`} aria-hidden="true">
            {[...items, ...items, ...items, ...items].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group select-none">
                     <span className={`font-mono text-xs md:text-sm tracking-widest ${item === '///' || item === '::' ? 'text-gray-600' : 'text-gray-500 group-hover:text-white transition-colors duration-300'}`}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

const TechMarquee: React.FC = () => {
  return (
    <div className="py-16 bg-brand-black border-y border-white/5 relative z-20 flex flex-col gap-6 overflow-hidden">
        
        {/* Vignette fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-20 pointer-events-none" />
      
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-700">
            <MarqueeRow items={row1} />
        </div>
        
        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        
        <div className="opacity-40 hover:opacity-100 transition-opacity duration-700">
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