import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Abstract UI visualizations (fully neutral)
const AbstractFintechUI = () => (
    <div className="w-full h-full bg-refe-ink p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center mb-2">
            <div className="w-7 h-7 rounded-full bg-white/[0.06]" />
            <div className="w-20 h-1.5 rounded-full bg-white/[0.06]" />
        </div>
        <div className="flex gap-2">
            <div className="w-1/3 h-16 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
            <div className="w-1/3 h-16 rounded-lg bg-white/[0.08] border border-white/[0.1]" />
            <div className="w-1/3 h-16 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
        </div>
        <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/[0.05] p-3 relative overflow-hidden">
            <div className="absolute bottom-3 left-3 right-3 h-20 flex items-end justify-between gap-1 opacity-40">
                {[40, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="w-full bg-refe-mid rounded-t-sm"
                    />
                ))}
            </div>
        </div>
    </div>
);

const AbstractAIUI = () => (
    <div className="w-full h-full bg-refe-ink p-4 flex flex-col relative overflow-hidden">
        <div className="space-y-3 mt-4">
            <motion.div
                initial={{ x: -16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-3/4 p-3 rounded-2xl rounded-tl-none bg-white/[0.05] border border-white/[0.07]"
            >
                <div className="w-full h-1.5 rounded-full bg-white/10 mb-2" />
                <div className="w-2/3 h-1.5 rounded-full bg-white/10" />
            </motion.div>
            <motion.div
                initial={{ x: 16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-3/4 ml-auto p-3 rounded-2xl rounded-tr-none bg-white/[0.1] border border-white/[0.12]"
            >
                <div className="w-full h-1.5 rounded-full bg-white/20 mb-2" />
                <div className="w-1/2 h-1.5 rounded-full bg-white/20" />
            </motion.div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-refe-muted" />
            <div className="w-20 h-1.5 rounded-full bg-white/[0.1]" />
        </div>
    </div>
);

const AbstractGridUI = () => (
    <div className="w-full h-full bg-refe-ink p-4 grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col p-2 gap-2"
            >
                <div className="flex-1 rounded-md bg-white/[0.04] w-full" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/[0.12]" />
                <div className="h-1.5 w-1/3 rounded-full bg-white/[0.06]" />
            </motion.div>
        ))}
    </div>
);

const ProjectCard = ({ title, category, description, VisualComponent, size = 'small', ctaText }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={`group relative overflow-hidden rounded-2xl bg-white border border-refe-smoke hover:border-refe-slate/[0.15] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-400 flex flex-col ${size === 'large' ? 'md:col-span-2' : ''}`}
    >
        {/* Visual */}
        <div className="h-60 w-full bg-refe-paper relative overflow-hidden border-b border-refe-smoke">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] origin-center p-5">
                <div className="w-full h-full rounded-xl overflow-hidden ring-1 ring-black/[0.03] shadow-sm">
                    <VisualComponent />
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-refe-paper/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-7 flex-1 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="refe-mono text-refe-slate border border-refe-smoke bg-refe-paper px-2.5 py-1 rounded-[4px]">
                        {category}
                    </span>
                    <ArrowUpRight className="text-refe-muted group-hover:text-refe-slate transition-colors duration-300" size={18} />
                </div>
                <h3 className="font-display font-bold text-xl text-refe-slate mb-2">{title}</h3>
                <p className="text-refe-muted text-sm leading-relaxed">{description}</p>
            </div>

            <div className="mt-6 pt-5 border-t border-refe-smoke translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="refe-mono text-refe-slate flex items-center gap-2">
                    {ctaText}
                    <div className="flex-1 h-px bg-refe-smoke" />
                    <ArrowUpRight size={14} className="text-refe-slate" />
                </span>
            </div>
        </div>
    </motion.div>
);

const Work: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="work" className="refe-section-light py-28 relative border-b border-refe-smoke">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="refe-mono text-refe-muted mb-5">{t.work.eyebrow}</p>
                        <h2 className="refe-display text-4xl md:text-6xl text-refe-slate leading-none">
                            {t.work.title_main}<br />
                            <span className="text-refe-muted">{t.work.title_sub}</span>
                        </h2>
                    </div>
                    <p className="text-refe-muted max-w-xs text-sm leading-relaxed text-right">{t.work.desc}</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ProjectCard
                        title={t.work.projects[0].title}
                        category={t.work.projects[0].category}
                        description={t.work.projects[0].desc}
                        VisualComponent={AbstractFintechUI}
                        size="large"
                        ctaText={t.work.view_case}
                    />
                    <ProjectCard
                        title={t.work.projects[1].title}
                        category={t.work.projects[1].category}
                        description={t.work.projects[1].desc}
                        VisualComponent={AbstractAIUI}
                        ctaText={t.work.view_case}
                    />
                    <ProjectCard
                        title={t.work.projects[2].title}
                        category={t.work.projects[2].category}
                        description={t.work.projects[2].desc}
                        VisualComponent={AbstractGridUI}
                        ctaText={t.work.view_case}
                    />

                    {/* NDA Card */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-refe-smoke flex flex-col justify-center items-center p-12 text-center md:col-span-2 hover:border-refe-slate/[0.15] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors">
                        <div className="mb-5 p-4 rounded-full bg-refe-paper border border-refe-smoke group-hover:scale-110 transition-transform duration-400">
                            <Lock size={22} className="text-refe-slate" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-refe-slate mb-2">{t.work.stealth.title}</h3>
                        <p className="text-refe-muted text-sm max-w-sm mx-auto mb-6 leading-relaxed">{t.work.stealth.desc}</p>
                        <span className="refe-mono text-refe-slate border border-refe-smoke bg-refe-paper px-4 py-2 rounded-full">
                            {t.work.stealth.badge}
                        </span>
                    </div>

                    {/* CTA Card (Inverted for contrast) */}
                    <div className="group relative overflow-hidden rounded-2xl bg-refe-slate p-8 flex flex-col justify-between cursor-pointer hover:bg-refe-black shadow-lg transition-colors duration-300">
                        <ArrowUpRight size={28} className="text-white mb-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        <div>
                            <div>
                                <h3 className="refe-display text-2xl text-white leading-tight mb-3">
                                    {t.work.view_all}
                                </h3>
                                <span className="refe-mono text-white/50">
                                    {t.work.archive}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Work;