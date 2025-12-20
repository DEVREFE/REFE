import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Terminal, ArrowRight, Activity, ServerCrash, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ScenarioType = 'startup' | 'enterprise';

const ProblemSolution: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('startup');
  const { t } = useLanguage();

  const scenarios = useMemo(() => ({
    startup: {
        id: 'startup',
        label: t.problem.scenarios.startup.label,
        icon: Activity,
        pain: {
            title: t.problem.scenarios.startup.pain.title,
            desc: t.problem.scenarios.startup.pain.desc,
            points: t.problem.scenarios.startup.pain.points
        },
        solution: {
            title: t.problem.scenarios.startup.solution.title,
            desc: t.problem.scenarios.startup.solution.desc,
            points: t.problem.scenarios.startup.solution.points
        }
    },
    enterprise: {
        id: 'enterprise',
        label: t.problem.scenarios.enterprise.label,
        icon: ServerCrash,
        pain: {
            title: t.problem.scenarios.enterprise.pain.title,
            desc: t.problem.scenarios.enterprise.pain.desc,
            points: t.problem.scenarios.enterprise.pain.points
        },
        solution: {
            title: t.problem.scenarios.enterprise.solution.title,
            desc: t.problem.scenarios.enterprise.solution.desc,
            points: t.problem.scenarios.enterprise.solution.points
        }
    }
  }), [t]);

  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Aurora Backgrounds */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                <span className="text-xs font-mono text-brand-neon uppercase tracking-widest">{t.problem.eyebrow}</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                {t.problem.title_main} <br/> <span className="text-gray-600">{t.problem.title_sub}</span>
            </h2>
            
            {/* Context Switcher - Tabbed UI */}
            <div className="flex p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                {(Object.keys(scenarios) as ScenarioType[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => setActiveScenario(key)}
                        className={`
                            relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                            ${activeScenario === key ? 'text-black' : 'text-gray-400 hover:text-white'}
                        `}
                    >
                        {activeScenario === key && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute inset-0 bg-brand-neon rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                           {key === 'startup' ? <Activity size={14} /> : <ServerCrash size={14} />}
                           {scenarios[key].label}
                        </span>
                    </button>
                ))}
            </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeScenario}
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch"
                >
                    {/* PROBLEM SIDE */}
                    <div className="bg-[#1a0505]/80 backdrop-blur-sm border border-red-900/30 rounded-t-3xl md:rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        {/* Background Noise */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 text-red-500">
                                <AlertCircle size={20} />
                                <span className="font-mono text-xs uppercase tracking-widest font-bold">{t.problem.diag_label}</span>
                            </div>

                            <h3 className="text-3xl font-display text-white mb-4">{scenarios[activeScenario].pain.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-red-900 pl-4">
                                {scenarios[activeScenario].pain.desc}
                            </p>

                            <ul className="space-y-3">
                                {scenarios[activeScenario].pain.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                        <span className="mt-1.5 w-1 h-1 bg-red-800 rounded-full" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CONNECTING ARROW (Desktop only) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 bg-[#020202] border border-white/20 rounded-full flex items-center justify-center">
                            <ArrowRight size={20} className="text-white" />
                        </div>
                    </div>

                    {/* SOLUTION SIDE */}
                    <div className="bg-[#051a05]/80 backdrop-blur-sm border border-brand-neon/20 rounded-b-3xl md:rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Subtle Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 text-brand-neon">
                                <CheckCircle2 size={20} />
                                <span className="font-mono text-xs uppercase tracking-widest font-bold">{t.problem.sol_label}</span>
                            </div>

                            <h3 className="text-3xl font-display text-white mb-4">{scenarios[activeScenario].solution.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-8 border-l-2 border-brand-neon/50 pl-4">
                                {scenarios[activeScenario].solution.desc}
                            </p>

                            <ul className="space-y-3">
                                {scenarios[activeScenario].solution.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <div className="mt-0.5 text-brand-neon"><Zap size={12} fill="currentColor" /></div>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                             <div className="mt-8 pt-6 border-t border-brand-neon/10 flex items-center gap-2">
                                <Terminal size={14} className="text-brand-neon" />
                                <span className="font-mono text-xs text-brand-neon/70">{t.problem.protocol}</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};

export default ProblemSolution;