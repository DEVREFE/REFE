import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Cpu, Users2, ArrowRight } from 'lucide-react';
import { MethodologyMode } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Methodology: React.FC = () => {
    const [mode, setMode] = useState<MethodologyMode>(MethodologyMode.EXECUTE);
    const { t } = useLanguage();

    return (
        <section id="methodology" className="py-28 bg-refe-black relative overflow-hidden border-b border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <p className="refe-mono text-refe-muted mb-5">{t.methodology.eyebrow}</p>
                        <h2 className="refe-display text-4xl md:text-6xl text-refe-white leading-none">
                            {t.methodology.title_main}<br /><span className="text-refe-muted">{t.methodology.title_sub}</span>
                        </h2>
                    </div>

                    {/* Toggle */}
                    <div className="glass p-1 rounded-full flex relative">
                        {[
                            { id: MethodologyMode.EXECUTE, label: t.methodology.toggle.execute },
                            { id: MethodologyMode.EVOLVE, label: t.methodology.toggle.evolve }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setMode(item.id)}
                                className={`relative px-8 py-3 rounded-full text-xs font-mono font-medium tracking-widest transition-all duration-300 z-10 ${mode === item.id
                                        ? 'text-refe-black'
                                        : 'text-refe-muted hover:text-refe-white'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <motion.div
                            layoutId="toggle-bg"
                            className="absolute top-1 bottom-1 bg-refe-white rounded-full z-0"
                            initial={false}
                            animate={{
                                left: mode === MethodologyMode.EXECUTE ? '4px' : '50%',
                                width: 'calc(50% - 4px)',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ duration: 0.35 }}
                                className="h-full glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-refe-white text-refe-black">
                                            {mode === MethodologyMode.EXECUTE ? <Cpu size={22} /> : <Sparkles size={22} />}
                                        </div>
                                        <div className="h-px flex-grow bg-white/[0.07]" />
                                        <span className="refe-mono text-refe-muted">{mode === MethodologyMode.EXECUTE ? '80%' : '20%'}</span>
                                    </div>

                                    <h3 className="refe-display text-4xl md:text-5xl text-refe-white mb-5">
                                        {mode === MethodologyMode.EXECUTE ? t.methodology.execute.title : t.methodology.evolve.title}
                                    </h3>

                                    <p className="text-refe-mid leading-relaxed max-w-xl font-light">
                                        {mode === MethodologyMode.EXECUTE
                                            ? t.methodology.execute.desc
                                            : t.methodology.evolve.desc}
                                    </p>

                                    <div className="mt-10 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-refe-mid" />
                                        <span className="refe-mono text-refe-muted">{t.methodology.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Static Info (Right) */}
                    <div className="lg:col-span-4 flex flex-col gap-5">

                        {/* Squad Card */}
                        <div className="glass rounded-[2rem] p-8 flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-6">
                                <Users2 size={22} className="text-refe-light" />
                                <ArrowRight size={18} className="text-refe-muted -rotate-45" />
                            </div>
                            <h4 className="font-display font-bold text-refe-white text-xl mb-2">{t.methodology.squad_card.title}</h4>
                            <p className="text-sm text-refe-mid leading-relaxed">{t.methodology.squad_card.desc}</p>
                        </div>

                        {/* Resource Bar */}
                        <div className="glass rounded-[2rem] p-8 flex-1 flex flex-col justify-center">
                            <p className="refe-mono text-refe-muted mb-6">{t.methodology.resource.title}</p>
                            <div className="flex w-full h-11 rounded-xl overflow-hidden border border-white/[0.07]">
                                <motion.div
                                    className="bg-white/[0.08] h-full flex items-center justify-center"
                                    animate={{ width: mode === MethodologyMode.EXECUTE ? '90%' : '80%' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="refe-mono text-refe-light">{t.methodology.toggle.execute}</span>
                                </motion.div>
                                <motion.div
                                    className="bg-refe-white h-full flex items-center justify-center"
                                    animate={{ width: mode === MethodologyMode.EVOLVE ? '20%' : '10%' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="refe-mono text-refe-black">{t.methodology.toggle.evolve}</span>
                                </motion.div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="refe-mono text-refe-muted">{t.methodology.resource.client}</span>
                                <span className="refe-mono text-refe-muted">{t.methodology.resource.innovation}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Methodology;