import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { t } = useLanguage();

  const steps = useMemo(() => [
    {
        id: '01',
        title: t.process.steps[0].title,
        subtitle: t.process.steps[0].subtitle,
        icon: Search,
        desc: t.process.steps[0].desc,
        deliverables: t.process.steps[0].deliverables
    },
    {
        id: '02',
        title: t.process.steps[1].title,
        subtitle: t.process.steps[1].subtitle,
        icon: PenTool,
        desc: t.process.steps[1].desc,
        deliverables: t.process.steps[1].deliverables
    },
    {
        id: '03',
        title: t.process.steps[2].title,
        subtitle: t.process.steps[2].subtitle,
        icon: Code2,
        desc: t.process.steps[2].desc,
        deliverables: t.process.steps[2].deliverables
    },
    {
        id: '04',
        title: t.process.steps[3].title,
        subtitle: t.process.steps[3].subtitle,
        icon: Rocket,
        desc: t.process.steps[3].desc,
        deliverables: t.process.steps[3].deliverables
    }
  ], [t]);

  return (
    <section className="py-32 bg-[#020202] relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

       <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20">
             <span className="font-mono text-xs text-brand-neon uppercase tracking-widest mb-4 block">{t.process.eyebrow}</span>
             <h2 className="font-display text-4xl md:text-5xl text-white font-semibold">
                {t.process.title_main} <span className="text-gray-600">{t.process.title_sub}</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             
             {/* Left: Sticky Visualization */}
             <div className="hidden lg:block sticky top-32">
                <div className="relative h-[500px] w-full bg-[#050505] border border-white/10 rounded-3xl overflow-hidden p-8 flex flex-col items-center justify-center text-center">
                    {/* Glow Effect based on active step */}
                    <motion.div 
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-b from-brand-neon/5 to-transparent opacity-50"
                    />

                    <div className="relative z-10">
                        {steps.map((step, idx) => (
                            idx === activeStep && (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="w-24 h-24 rounded-2xl bg-brand-neon text-black flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(217,255,0,0.3)]">
                                        <step.icon size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl font-display text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 font-light">{step.desc}</p>
                                    
                                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                                        {step.deliverables.map((d: string, i: number) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>
             </div>

             {/* Right: Interactive Steps List */}
             <div className="flex flex-col relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10" />
                
                {steps.map((step, idx) => (
                    <div 
                        key={idx} 
                        className={`relative pl-20 py-8 cursor-pointer group transition-all duration-300 ${idx === activeStep ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        onClick={() => setActiveStep(idx)}
                        onMouseEnter={() => setActiveStep(idx)}
                    >
                        {/* Node Indicator */}
                        <motion.div 
                            className={`absolute left-[21px] top-10 w-3 h-3 rounded-full border border-black z-10 transition-colors duration-300 ${idx === activeStep ? 'bg-brand-neon' : 'bg-gray-800'}`}
                        >
                            {idx === activeStep && (
                                <motion.div 
                                    layoutId="activeGlow"
                                    className="absolute inset-0 -m-1 rounded-full bg-brand-neon/30 blur-sm"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.div>

                        <div className="flex flex-col">
                            <span className="font-mono text-xs text-brand-neon mb-1">{step.id}</span>
                            <h3 className="text-xl font-display font-medium text-white mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{step.subtitle}</p>
                            
                            {/* Mobile only content (since desktop shows it on the left) */}
                            <div className="lg:hidden">
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {step.deliverables.map((d: string, i: number) => (
                                        <span key={i} className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400">
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>

          </div>
       </div>
    </section>
  );
};

export default Process;