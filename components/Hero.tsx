import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Activity, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ReactMarkdown from 'react-markdown';

// --- Micro-Components ---

const StatusBadge = ({ text }: { text: string }) => (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 group cursor-default hover:border-white/20 transition-colors">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
        </span>
        <span className="text-[11px] font-mono font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
            {text}
        </span>
    </div>
);

const ServiceModule = ({ icon: Icon, title, subtitle, index }: any) => (
    <div className="flex-1 group relative p-8 border-r border-white/[0.06] last:border-r-0 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer flex flex-col items-start justify-between min-h-[160px]">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="w-full flex justify-between items-start mb-4 relative z-10">
            <div className="p-2.5 rounded-xl bg-white/[0.03] text-gray-500 border border-white/[0.05] group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                <Icon size={20} />
            </div>
            <span className="font-mono text-[10px] text-gray-700 group-hover:text-gray-500 transition-colors">0{index}</span>
        </div>

        <div className="relative z-10">
             <h4 className="font-display font-bold text-white text-lg mb-1 tracking-tight group-hover:translate-x-1 transition-transform duration-300">{title}</h4>
             <p className="text-xs font-mono text-gray-600 uppercase tracking-wide group-hover:text-gray-400 transition-colors">{subtitle}</p>
        </div>

        {/* Arrow Reveal - Sleeker */}
        <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
            <ArrowRight size={18} className="text-white" />
        </div>
    </div>
);

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden">
        
        {/* Cinematic Lighting (More subtle, less neon) */}
        <div className="absolute top-[-30%] left-[10%] w-[1200px] h-[1200px] bg-white/[0.03] blur-[150px] rounded-full animate-float pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-blue-900/[0.05] blur-[180px] rounded-full animate-aurora pointer-events-none" />

        {/* --- CENTRAL CONTENT --- */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 max-w-5xl mx-auto mb-16">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <StatusBadge text={t.hero.status} />
            </motion.div>

            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter mb-8 select-none">
                <motion.span 
                    className="block text-gray-300"
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {t.hero.title_start}
                </motion.span>
                <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                     {t.hero.title_mid}
                </motion.span>
                <motion.span 
                    className="block text-shimmer-silver"
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {t.hero.title_end}
                </motion.span>
            </h1>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 prose prose-invert prose-p:text-gray-400 prose-strong:text-white prose-strong:font-normal mix-blend-plus-lighter"
            >
                <ReactMarkdown>{t.hero.desc}</ReactMarkdown>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-6"
            >
                <a 
                    href="#services"
                    className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-2"
                >
                    {t.hero.cta_primary}
                    <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>

        </div>

        {/* --- THE SEPARATOR / SERVICES DOCK --- */}
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full border-t border-white/[0.08] bg-[#050505]/60 backdrop-blur-2xl relative z-20"
        >
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
                
                <ServiceModule 
                    icon={Activity}
                    title={t.services.items[0].title}
                    subtitle={t.services.items[0].subtitle}
                    index={1}
                />
                
                <ServiceModule 
                    icon={Code2}
                    title={t.services.items[1].title}
                    subtitle={t.services.items[1].subtitle}
                    index={2}
                />
                
                <ServiceModule 
                    icon={Rocket}
                    title={t.services.items[2].title}
                    subtitle={t.services.items[2].subtitle}
                    index={3}
                />

            </div>
            
            {/* Loading Bar - Silver */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent w-full animate-shimmer opacity-50" />
        </motion.div>

    </section>
  );
};

export default Hero;