import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Brain, Code2, Rocket, 
    Layout, Search, PenTool, 
    Server, Smartphone, Database, Cpu, 
    BarChart3, Globe, Target, RefreshCw,
    Layers, ArrowRight, CheckCircle2, ChevronDown, Terminal
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CYCLE_DURATION = 8000; // 8 seconds per slide

const Services: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();
  
  // Reconstruct ecosystem inside component to use translations
  const ecosystem = useMemo(() => [
    {
      id: 'soul',
      title: t.services.items[0].title,
      subtitle: t.services.items[0].subtitle,
      icon: Brain,
      description: t.services.items[0].description,
      outcome: t.services.items[0].outcome,
      capabilities: [
        { title: t.services.items[0].caps[0].title, icon: Search, desc: t.services.items[0].caps[0].desc },
        { title: t.services.items[0].caps[1].title, icon: Target, desc: t.services.items[0].caps[1].desc },
        { title: t.services.items[0].caps[2].title, icon: PenTool, desc: t.services.items[0].caps[2].desc },
        { title: t.services.items[0].caps[3].title, icon: Database, desc: t.services.items[0].caps[3].desc }
      ]
    },
    {
      id: 'body',
      title: t.services.items[1].title,
      subtitle: t.services.items[1].subtitle,
      icon: Code2,
      description: t.services.items[1].description,
      outcome: t.services.items[1].outcome,
      capabilities: [
        { title: t.services.items[1].caps[0].title, icon: Layout, desc: t.services.items[1].caps[0].desc },
        { title: t.services.items[1].caps[1].title, icon: Server, desc: t.services.items[1].caps[1].desc },
        { title: t.services.items[1].caps[2].title, icon: Smartphone, desc: t.services.items[1].caps[2].desc },
        { title: t.services.items[1].caps[3].title, icon: Cpu, desc: t.services.items[1].caps[3].desc }
      ]
    },
    {
      id: 'voice',
      title: t.services.items[2].title,
      subtitle: t.services.items[2].subtitle,
      icon: Rocket,
      description: t.services.items[2].description,
      outcome: t.services.items[2].outcome,
      capabilities: [
        { title: t.services.items[2].caps[0].title, icon: BarChart3, desc: t.services.items[2].caps[0].desc },
        { title: t.services.items[2].caps[1].title, icon: RefreshCw, desc: t.services.items[2].caps[1].desc },
        { title: t.services.items[2].caps[2].title, icon: Globe, desc: t.services.items[2].caps[2].desc },
        { title: t.services.items[2].caps[3].title, icon: Layers, desc: t.services.items[2].caps[3].desc }
      ]
    }
  ], [t]);

  // Auto-play Logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % ecosystem.length);
    }, CYCLE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, ecosystem.length]);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#020202] relative overflow-hidden border-b border-white/5">
      
      {/* Background Ambience (Aurora) */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-neon/5 blur-[120px] rounded-full animate-aurora pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full animate-aurora-reverse pointer-events-none mix-blend-screen" />

      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                    <Terminal size={16} className="text-brand-neon" />
                    <span className="font-mono text-brand-neon text-xs uppercase tracking-widest">{t.services.eyebrow}</span>
                </div>
                <h2 className="font-display font-semibold text-5xl md:text-7xl text-white tracking-tight leading-none">
                    {t.services.title_main} <br/> <span className="text-gray-700">{t.services.title_sub}</span>
                </h2>
            </div>
            {/* Desktop Only Instructions */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                    <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                    {t.services.status}
                </div>
                <p className="text-gray-600 text-sm max-w-xs">
                    {t.services.hover}
                </p>
            </div>
        </div>

        {/* --- DESKTOP VIEW (Split Screen) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-12"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
            
            {/* LEFT: Navigation Tiles */}
            <div className="col-span-4 flex flex-col gap-4">
                {ecosystem.map((phase, idx) => {
                    const isActive = activePhase === idx;
                    return (
                        <div 
                            key={phase.id}
                            onClick={() => setActivePhase(idx)}
                            className={`
                                relative p-6 rounded-2xl cursor-pointer border transition-all duration-500 group overflow-hidden
                                ${isActive 
                                    ? 'bg-white/10 border-white/20 shadow-2xl' 
                                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                                }
                            `}
                        >
                             {/* Progress Bar Background (Only visible when active & not paused) */}
                            {isActive && !isPaused && (
                                <motion.div 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: CYCLE_DURATION / 1000, ease: "linear" }}
                                    className="absolute bottom-0 left-0 h-[2px] bg-brand-neon z-10"
                                />
                            )}

                            <div className="flex items-center justify-between mb-2">
                                <span className={`font-mono text-xs uppercase tracking-widest transition-colors ${isActive ? 'text-brand-neon' : 'text-gray-500'}`}>
                                    0{idx + 1}
                                </span>
                                <phase.icon size={20} className={isActive ? 'text-white' : 'text-gray-600'} />
                            </div>
                            
                            <h3 className={`font-display text-2xl font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                {phase.title}
                            </h3>
                            <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wide">{phase.subtitle}</p>

                            {/* Active Arrow Indicator */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="absolute right-6 top-1/2 -translate-y-1/2"
                                    >
                                        <ArrowRight className="text-brand-neon" size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* RIGHT: Content Display */}
            <div className="col-span-8">
                <div className="relative h-full bg-[#080808]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-10 overflow-hidden flex flex-col">
                     {/* Ambient Glow */}
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />

                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10 h-full flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex gap-6 mb-10 pb-8 border-b border-white/5">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 h-fit">
                                     {React.createElement(ecosystem[activePhase].icon, { size: 32, className: "text-brand-neon" })}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display text-white mb-3">{ecosystem[activePhase].subtitle}</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-xl">{ecosystem[activePhase].description}</p>
                                </div>
                            </div>

                            {/* Capabilities Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {ecosystem[activePhase].capabilities.map((cap, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-colors flex items-start gap-3 group"
                                    >
                                        <div className="mt-1 text-gray-600 group-hover:text-brand-neon transition-colors">
                                            <cap.icon size={16} />
                                        </div>
                                        <div>
                                            <h5 className="text-white text-sm font-medium mb-1">{cap.title}</h5>
                                            <p className="text-[11px] text-gray-500 leading-relaxed">{cap.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer Outcome */}
                            <div className="mt-auto pt-4 flex items-center gap-3">
                                <div className="bg-brand-neon/10 p-2 rounded-full">
                                    <CheckCircle2 size={16} className="text-brand-neon" />
                                </div>
                                <span className="text-sm text-gray-300 font-mono">
                                    <span className="text-gray-600 uppercase tracking-widest mr-2">{t.services.target_outcome}</span> 
                                    {ecosystem[activePhase].outcome}
                                </span>
                            </div>

                        </motion.div>
                     </AnimatePresence>
                </div>
            </div>
        </div>


        {/* --- MOBILE VIEW (Accordion) --- */}
        <div className="lg:hidden flex flex-col gap-4">
            {ecosystem.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                    <div 
                        key={phase.id}
                        className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${isActive ? 'bg-[#080808] border-white/20' : 'bg-transparent border-white/5'}`}
                    >
                        {/* Header (Always Visible) */}
                        <button 
                            onClick={() => setActivePhase(idx)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-neon/10 text-brand-neon' : 'bg-white/5 text-gray-500'}`}>
                                    <phase.icon size={20} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">0{idx+1} — {phase.title}</span>
                                    <h3 className={`font-display text-xl ${isActive ? 'text-white' : 'text-gray-400'}`}>{phase.subtitle}</h3>
                                </div>
                            </div>
                            <ChevronDown size={20} className={`transition-transform duration-300 text-gray-500 ${isActive ? 'rotate-180 text-brand-neon' : ''}`} />
                        </button>

                        {/* Content (Expandable) */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-8 pt-0 border-t border-white/5">
                                        <p className="text-gray-400 text-sm leading-relaxed mt-6 mb-8">
                                            {phase.description}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {phase.capabilities.map((cap, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03]">
                                                    <cap.icon size={14} className="mt-0.5 text-gray-500" />
                                                    <div>
                                                        <h5 className="text-white text-xs font-bold mb-0.5">{cap.title}</h5>
                                                        <p className="text-[10px] text-gray-500">{cap.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 p-3 rounded-lg bg-brand-neon/5 border border-brand-neon/10">
                                             <CheckCircle2 size={14} className="text-brand-neon" />
                                             <span className="text-xs text-white font-medium">{phase.outcome}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>

      </div>
    </section>
  );
};

export default Services;