import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
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
        <section id="process" className="refe-section-light py-28 relative border-b border-refe-smoke">

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20">
                    <p className="refe-mono text-refe-muted mb-4 text-center block">{t.process.eyebrow}</p>
                    <h2 className="refe-display text-4xl md:text-5xl text-refe-slate text-center">
                        {t.process.title_main} <span className="text-refe-muted">{t.process.title_sub}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left: Sticky Visualization */}
                    <div className="hidden lg:block sticky top-32">
                        <div className="relative h-[500px] w-full bg-white border border-refe-smoke shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden p-8 flex flex-col items-center justify-center text-center">
                            {/* Glow Effect based on active step */}
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-b from-refe-paper/50 to-transparent opacity-50"
                            />

                            <div className="relative z-10 w-full px-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-24 h-24 rounded-2xl bg-refe-paper border border-refe-smoke text-refe-slate flex items-center justify-center mb-8 shadow-sm">
                                            {React.createElement(steps[activeStep].icon, { size: 36, strokeWidth: 1.5 })}
                                        </div>
                                        <h3 className="text-3xl refe-display text-refe-slate mb-3">{steps[activeStep].title}</h3>
                                        <p className="text-refe-muted text-sm leading-relaxed max-w-sm mb-8">{steps[activeStep].desc}</p>

                                        <div className="flex flex-wrap justify-center gap-2">
                                            {steps[activeStep].deliverables.map((d: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 rounded-full border border-refe-smoke bg-refe-paper text-[11px] font-mono text-refe-muted">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Steps List */}
                    <div className="flex flex-col relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-refe-smoke" />

                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`relative pl-20 py-8 cursor-pointer group transition-all duration-300 ${idx === activeStep ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                onClick={() => setActiveStep(idx)}
                                onMouseEnter={() => setActiveStep(idx)}
                            >
                                {/* Node Indicator */}
                                <div
                                    className={`absolute left-[21px] top-10 w-3 h-3 rounded-full border z-10 transition-colors duration-300 flex items-center justify-center
                                        ${idx === activeStep
                                            ? 'bg-refe-slate border-refe-slate shadow-[0_0_0_4px_rgba(28,28,28,0.1)]'
                                            : 'bg-white border-refe-smoke'}`}
                                />

                                <div className="flex flex-col">
                                    <span className="refe-mono text-refe-muted mb-1">{step.id}</span>
                                    <h3 className="text-2xl refe-display text-refe-slate mb-1">{step.title}</h3>
                                    <p className="text-sm text-refe-muted mb-4">{step.subtitle}</p>

                                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ${idx === activeStep ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-refe-muted leading-relaxed mb-4">{step.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {step.deliverables.map((d: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1 rounded-md border border-refe-smoke bg-white text-[10px] font-mono text-refe-muted">
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