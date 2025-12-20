import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, Activity, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ReactMarkdown from 'react-markdown';

// --- Micro-Components ---

const StatusBadge = ({ text }: { text: string }) => (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/5 border border-brand-neon/10 backdrop-blur-md mb-8 group cursor-default hover:bg-brand-neon/10 transition-colors">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
        </span>
        <span className="text-[11px] font-mono font-bold text-brand-neon uppercase tracking-widest">
            {text}
        </span>
    </div>
);

const ServiceModule = ({ icon: Icon, title, subtitle, index }: any) => (
    <div className="flex-1 group relative p-6 border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors cursor-pointer flex flex-col items-start justify-between min-h-[140px]">
        
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-neon/0 to-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="w-full flex justify-between items-start mb-4 relative z-10">
            <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-brand-neon group-hover:bg-brand-neon/10 transition-colors">
                <Icon size={20} />
            </div>
            <span className="font-mono text-[10px] text-gray-600 group-hover:text-brand-neon/50 transition-colors">0{index}</span>
        </div>

        <div className="relative z-10">
             <h4 className="font-display font-bold text-white text-lg mb-1 group-hover:translate-x-1 transition-transform">{title}</h4>
             <p className="text-xs font-mono text-gray-500 uppercase tracking-wide group-hover:text-gray-400 transition-colors">{subtitle}</p>
        </div>

        {/* Arrow Reveal */}
        <div className="absolute bottom-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight size={16} className="text-brand-neon" />
        </div>
    </div>
);

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden">
        
        {/* Cinematic Background */}
        <div className="absolute top-[-20%] left-[20%] w-[1000px] h-[1000px] bg-brand-neon/5 blur-[150px] rounded-full animate-aurora pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full animate-float pointer-events-none mix-blend-screen" />

        {/* --- CENTRAL CONTENT --- */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 max-w-5xl mx-auto mb-12">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <StatusBadge text={t.hero.status} />
            </motion.div>

            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter mb-8">
                <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {t.hero.title_start} {t.hero.title_mid}
                </motion.span>
                <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                    {t.hero.title_end}
                </motion.span>
            </h1>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 prose prose-invert prose-p:text-gray-400 prose-strong:text-white prose-strong:font-normal"
            >
                <ReactMarkdown>{t.hero.desc}</ReactMarkdown>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
            >
                <a 
                    href="#services"
                    className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-brand-neon transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(217,255,0,0.4)] flex items-center gap-2"
                >
                    {t.hero.cta_primary}
                    <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>

        </div>

        {/* --- THE SEPARATOR / SERVICES DOCK --- */}
        {/* This acts as the bridge between Hero and content, utilizing the "Services" data */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full border-t border-white/10 bg-[#050505]/80 backdrop-blur-xl relative z-20"
        >
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
                
                <ServiceModule 
                    icon={Activity}
                    title={t.services.items[0].title} // "THE SOUL"
                    subtitle={t.services.items[0].subtitle} // "Strategy & Identity"
                    index={1}
                />
                
                <ServiceModule 
                    icon={Code2}
                    title={t.services.items[1].title} // "THE BODY"
                    subtitle={t.services.items[1].subtitle} // "Engineering & Product"
                    index={2}
                />
                
                <ServiceModule 
                    icon={Rocket}
                    title={t.services.items[2].title} // "THE VOICE"
                    subtitle={t.services.items[2].subtitle} // "Growth & Scale"
                    index={3}
                />

            </div>
            
            {/* Animated Loading Bar at bottom */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-brand-neon/50 w-full animate-scroll opacity-50" />
        </motion.div>

    </section>
  );
};

export default Hero;