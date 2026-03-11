import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain, Code2, Rocket,
    Layout, Search, PenTool,
    Server, Smartphone, Database, Cpu,
    BarChart3, Globe, Target, RefreshCw,
    Layers, ArrowRight, CheckCircle2, ChevronDown, Minus
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CYCLE_DURATION = 8000;

const Services: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useLanguage();

    const ecosystem = useMemo(() => [
        {
            id: 'identity',
            title: t.services.items[0].title,
            subtitle: t.services.items[0].subtitle,
            icon: Brain,
            description: t.services.items[0].description,
            outcome: t.services.items[0].outcome,
            capabilities: [
                { title: t.services.items[0].caps[0].title, icon: Search, desc: t.services.items[0].caps[0].desc },
                { title: t.services.items[0].caps[1].title, icon: PenTool, desc: t.services.items[0].caps[1].desc },
                { title: t.services.items[0].caps[2].title, icon: Layers, desc: t.services.items[0].caps[2].desc },
                { title: t.services.items[0].caps[3].title, icon: Database, desc: t.services.items[0].caps[3].desc }
            ]
        },
        {
            id: 'product',
            title: t.services.items[1].title,
            subtitle: t.services.items[1].subtitle,
            icon: Code2,
            description: t.services.items[1].description,
            outcome: t.services.items[1].outcome,
            capabilities: [
                { title: t.services.items[1].caps[0].title, icon: Layout, desc: t.services.items[1].caps[0].desc },
                { title: t.services.items[1].caps[1].title, icon: Server, desc: t.services.items[1].caps[1].desc },
                { title: t.services.items[1].caps[2].title, icon: Globe, desc: t.services.items[1].caps[2].desc },
                { title: t.services.items[1].caps[3].title, icon: Smartphone, desc: t.services.items[1].caps[3].desc }
            ]
        },
        {
            id: 'market',
            title: t.services.items[2].title,
            subtitle: t.services.items[2].subtitle,
            icon: Rocket,
            description: t.services.items[2].description,
            outcome: t.services.items[2].outcome,
            capabilities: [
                { title: t.services.items[2].caps[0].title, icon: Target, desc: t.services.items[2].caps[0].desc },
                { title: t.services.items[2].caps[1].title, icon: BarChart3, desc: t.services.items[2].caps[1].desc },
                { title: t.services.items[2].caps[2].title, icon: RefreshCw, desc: t.services.items[2].caps[2].desc },
                { title: t.services.items[2].caps[3].title, icon: Cpu, desc: t.services.items[2].caps[3].desc }
            ]
        }
    ], [t]);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActivePhase((prev) => (prev + 1) % ecosystem.length);
        }, CYCLE_DURATION);
        return () => clearInterval(timer);
    }, [isPaused, ecosystem.length]);

    return (
        <section id="services" className="refe-section-light py-24 md:py-32 relative overflow-hidden border-b border-refe-smoke">

            {/* Faint horizontal rule top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-refe-smoke to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="refe-mono text-refe-muted mb-5">{t.services.eyebrow}</p>
                        <h2 className="refe-display text-5xl md:text-7xl text-refe-slate leading-none">
                            {t.services.title_main}<br />
                            <span className="text-refe-muted">{t.services.title_sub}</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-refe-slate animate-pulse" />
                        <span className="refe-mono text-refe-slate">{t.services.status}</span>
                    </div>
                </div>

                {/* ── Desktop Split View ──────────────────────────────── */}
                <div
                    className="hidden lg:grid grid-cols-12 gap-10"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left: Nav Tiles */}
                    <div className="col-span-4 flex flex-col gap-3">
                        {ecosystem.map((phase, idx) => {
                            const isActive = activePhase === idx;
                            return (
                                <div
                                    key={phase.id}
                                    onClick={() => setActivePhase(idx)}
                                    className={`
                                        relative p-6 rounded-2xl cursor-pointer border transition-all duration-400 overflow-hidden group
                                        ${isActive
                                            ? 'bg-white border-refe-smoke shadow-sm'
                                            : 'bg-transparent border-transparent hover:border-refe-smoke hover:bg-black/[0.02]'
                                        }
                                    `}
                                >
                                    {/* Active progress line */}
                                    {isActive && !isPaused && (
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: CYCLE_DURATION / 1000, ease: 'linear' }}
                                            className="absolute bottom-0 left-0 h-[2px] bg-refe-slate/20"
                                        />
                                    )}

                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`refe-mono transition-colors ${isActive ? 'text-refe-slate' : 'text-refe-muted'}`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <phase.icon size={18} className={`transition-colors ${isActive ? 'text-refe-slate' : 'text-refe-muted'}`} />
                                    </div>

                                    <h3 className={`refe-display text-2xl transition-colors ${isActive ? 'text-refe-slate' : 'text-refe-muted group-hover:text-refe-slate'}`}>
                                        {phase.title}
                                    </h3>
                                    <p className="refe-mono text-refe-muted mt-2 normal-case tracking-normal font-mono text-[11px]">{phase.subtitle}</p>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -8 }}
                                                className="absolute right-6 top-1/2 -translate-y-1/2"
                                            >
                                                <ArrowRight className="text-refe-slate" size={18} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Content Panel */}
                    <div className="col-span-8">
                        <div className="h-full bg-white border border-refe-smoke shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl p-10 overflow-hidden flex flex-col">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePhase}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35 }}
                                    className="flex flex-col h-full"
                                >
                                    {/* Panel Header */}
                                    <div className="flex gap-5 mb-8 pb-8 border-b border-refe-smoke">
                                        <div className="p-3.5 bg-refe-paper rounded-xl border border-refe-smoke h-fit">
                                            {React.createElement(ecosystem[activePhase].icon, {
                                                size: 28,
                                                className: 'text-refe-slate'
                                            })}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-bold text-refe-slate mb-2 tracking-tight">
                                                {ecosystem[activePhase].subtitle}
                                            </h3>
                                            <p className="text-refe-muted leading-relaxed text-sm max-w-lg">
                                                {ecosystem[activePhase].description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Capabilities */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {ecosystem[activePhase].capabilities.map((cap, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.07 }}
                                                className="p-4 rounded-xl bg-refe-paper border border-refe-smoke hover:border-refe-slate/[0.1] transition-colors flex items-start gap-3 group"
                                            >
                                                <div className="mt-0.5 text-refe-muted group-hover:text-refe-slate transition-colors">
                                                    <cap.icon size={15} />
                                                </div>
                                                <div>
                                                    <h5 className="text-refe-slate text-sm font-medium mb-1">{cap.title}</h5>
                                                    <p className="text-[11px] text-refe-muted leading-relaxed">{cap.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Outcome Footer */}
                                    <div className="mt-auto pt-4 flex items-center gap-3 border-t border-refe-smoke">
                                        <CheckCircle2 size={15} className="text-refe-mid" />
                                        <span className="text-sm text-refe-slate font-mono">
                                            <span className="text-refe-muted uppercase tracking-widest text-[10px] mr-2">{t.services.target_outcome}</span>
                                            {ecosystem[activePhase].outcome}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* ── Mobile Accordion ─────────────────────────────────── */}
                <div className="lg:hidden flex flex-col gap-3">
                    {ecosystem.map((phase, idx) => {
                        const isActive = activePhase === idx;
                        return (
                            <div
                                key={phase.id}
                                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${isActive ? 'bg-white border-refe-smoke shadow-sm' : 'bg-transparent border-refe-smoke'}`}
                            >
                                <button
                                    onClick={() => setActivePhase(isActive ? -1 : idx)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${isActive ? 'bg-refe-paper text-refe-slate' : 'bg-transparent text-refe-muted'}`}>
                                            <phase.icon size={18} />
                                        </div>
                                        <div>
                                            <span className="refe-mono text-refe-muted block mb-1">{String(idx + 1).padStart(2, '0')} — {phase.subtitle}</span>
                                            <h3 className={`font-display font-bold text-xl ${isActive ? 'text-refe-slate' : 'text-refe-mid'}`}>{phase.title}</h3>
                                        </div>
                                    </div>
                                    <ChevronDown size={18} className={`transition-transform duration-300 text-refe-muted ${isActive ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-5 pb-6 pt-0 border-t border-refe-smoke">
                                                <p className="text-refe-slate text-sm leading-relaxed mt-5 mb-6">{phase.description}</p>
                                                <div className="space-y-2.5 mb-6">
                                                    {phase.capabilities.map((cap, i) => (
                                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-refe-paper border border-refe-smoke">
                                                            <cap.icon size={14} className="mt-0.5 text-refe-muted" />
                                                            <div>
                                                                <h5 className="text-refe-slate text-xs font-medium mb-0.5">{cap.title}</h5>
                                                                <p className="text-[10px] text-refe-muted">{cap.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2 p-3 rounded-lg border border-refe-smoke">
                                                    <Minus size={13} className="text-refe-mid" />
                                                    <span className="text-xs text-refe-slate">{phase.outcome}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;