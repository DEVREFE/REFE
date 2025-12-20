import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Cpu, Users2, ArrowRight } from 'lucide-react';
import { MethodologyMode } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Methodology: React.FC = () => {
  const [mode, setMode] = useState<MethodologyMode>(MethodologyMode.EXECUTE);
  const { t } = useLanguage();

  return (
    <section id="methodology" className="py-32 bg-brand-black relative overflow-hidden">
      
      {/* Aurora Backgrounds */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full animate-aurora-reverse pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                     <span className="w-8 h-[1px] bg-brand-neon/50"></span>
                     <span className="font-mono text-brand-neon text-xs uppercase tracking-widest">{t.methodology.eyebrow}</span>
                </div>
                <h2 className="font-display font-semibold text-5xl md:text-6xl text-white tracking-tight leading-tight">
                    {t.methodology.title_main} <br/> <span className="text-gray-600">{t.methodology.title_sub}</span>
                </h2>
            </div>
            
            {/* High-End Toggle */}
            <div className="glass-panel p-1 rounded-full flex relative">
                {[
                    { id: MethodologyMode.EXECUTE, label: t.methodology.toggle.execute },
                    { id: MethodologyMode.EVOLVE, label: t.methodology.toggle.evolve }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setMode(item.id)}
                        className={`relative px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-300 z-10 ${
                            mode === item.id 
                            ? 'text-black' 
                            : 'text-gray-500 hover:text-white'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
                {/* Sliding Background */}
                <motion.div 
                    layoutId="toggle-bg"
                    className="absolute top-1 bottom-1 bg-brand-neon rounded-full z-0"
                    initial={false}
                    animate={{
                        left: mode === MethodologyMode.EXECUTE ? '4px' : '50%',
                        width: mode === MethodologyMode.EXECUTE ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                        x: mode === MethodologyMode.EXECUTE ? 0 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
        </div>

        {/* Main Dashboard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
            
            {/* Dynamic Content Area (Left) */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="h-full glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center group"
                    >
                         {/* Ambient Glow inside card */}
                         <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none transition-colors duration-700 ${mode === MethodologyMode.EXECUTE ? 'bg-blue-900/10' : 'bg-purple-900/10'}`} />

                         <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mode === MethodologyMode.EXECUTE ? 'bg-white text-black' : 'bg-brand-neon text-black'}`}>
                                    {mode === MethodologyMode.EXECUTE ? <Cpu size={24} /> : <Sparkles size={24} />}
                                </div>
                                <div className="h-[1px] flex-grow bg-white/10" />
                                <span className="font-mono text-xl font-bold text-white/50">{mode === MethodologyMode.EXECUTE ? '80%' : '20%'}</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                                {mode === MethodologyMode.EXECUTE ? t.methodology.execute.title : t.methodology.evolve.title}
                            </h3>
                            
                            <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-light">
                                {mode === MethodologyMode.EXECUTE 
                                    ? t.methodology.execute.desc 
                                    : t.methodology.evolve.desc}
                            </p>

                            <div className="mt-12 flex items-center gap-2 text-sm font-medium text-white/60">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>{t.methodology.status}</span>
                            </div>
                         </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Static Stats / Squad Info (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Squad Card */}
                <div className="glass-panel rounded-[2rem] p-8 flex-1 flex flex-col justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="flex justify-between items-start mb-6">
                        <Users2 size={24} className="text-white/80" />
                        <ArrowRight size={20} className="text-white/30 -rotate-45" />
                     </div>
                     
                     <h4 className="text-white font-bold text-xl mb-2">{t.methodology.squad_card.title}</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">
                        {t.methodology.squad_card.desc}
                     </p>
                </div>

                {/* Resource Allocation Visualization */}
                <div className="glass-panel rounded-[2rem] p-8 flex-1 flex flex-col justify-center">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">{t.methodology.resource.title}</span>
                    
                    {/* The Visual Bar */}
                    <div className="flex w-full h-12 rounded-xl overflow-hidden border border-white/5 relative">
                        {/* Execute Part */}
                        <motion.div 
                            className="bg-white/10 h-full flex items-center justify-center relative hover:bg-white/15 transition-colors cursor-help"
                            initial={{ width: "80%" }}
                            animate={{ width: mode === MethodologyMode.EXECUTE ? "95%" : "80%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <span className="text-xs font-bold text-white z-10">{t.methodology.toggle.execute}</span>
                        </motion.div>

                        {/* Evolve Part */}
                        <motion.div 
                            className="bg-brand-neon h-full flex items-center justify-center relative hover:bg-brand-neon/90 transition-colors cursor-help"
                            initial={{ width: "20%" }}
                            animate={{ width: mode === MethodologyMode.EVOLVE ? "35%" : "20%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                             <span className="text-xs font-bold text-black z-10">{t.methodology.toggle.evolve}</span>
                        </motion.div>
                    </div>

                    <div className="flex justify-between mt-4 text-xs font-mono text-gray-500">
                        <span>{t.methodology.resource.client}</span>
                        <span>{t.methodology.resource.innovation}</span>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;