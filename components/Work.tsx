import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
    {
        id: 1,
        gradient: 'from-[#1a1a2e] to-[#16213e]',
        accentGradient: 'from-refe-accent/20 via-refe-accent/5 to-transparent',
    },
    {
        id: 2,
        gradient: 'from-[#0a0a0a] to-[#1a1a1a]',
        accentGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    },
    {
        id: 3,
        gradient: 'from-[#1a0a0a] to-[#1a1210]',
        accentGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    },
];

const ProjectSlide = ({ project, index, totalProjects }: { project: typeof projects[0]; index: number; totalProjects: number }) => {
    const { t } = useLanguage();
    const slideRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: slideRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);

    const projectData = t.work.projects[index];

    return (
        <div
            ref={slideRef}
            className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                style={{ opacity, scale }}
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            >
                {/* Ambient glow */}
                <div className={`absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl ${project.accentGradient} rounded-full blur-[120px]`} />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[100px]" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
            >
                {/* Left: Project info */}
                <div className="lg:w-1/2 flex flex-col">
                    <span className="refe-mono text-refe-accent mb-4">
                        {String(index + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
                    </span>
                    <span className="refe-mono text-refe-muted mb-6">{projectData.category}</span>
                    <h3 className="refe-serif text-5xl md:text-7xl text-white mb-6 italic">
                        {projectData.title}
                    </h3>
                    <p className="text-refe-mid text-base md:text-lg leading-relaxed max-w-md mb-8">
                        {projectData.desc}
                    </p>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-3 text-white refe-mono text-[11px] tracking-widest uppercase"
                    >
                        <span className="border-b border-white/20 pb-1 group-hover:border-refe-accent transition-colors">
                            {t.work.view_case}
                        </span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-refe-accent" />
                    </a>
                </div>

                {/* Right: Visual placeholder (device mockup area) */}
                <div className="lg:w-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-[4/3] max-w-lg"
                    >
                        {/* Device frame */}
                        <div className="absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm overflow-hidden">
                            {/* Browser chrome */}
                            <div className="h-8 border-b border-white/[0.06] flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <div className="ml-4 h-4 w-32 rounded-full bg-white/[0.05]" />
                            </div>
                            {/* Content area with subtle UI */}
                            <div className="p-6 flex flex-col gap-4 h-full">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-refe-accent/10 border border-refe-accent/20" />
                                    <div className="flex flex-col gap-2 flex-1">
                                        <div className="h-3 w-24 rounded-full bg-white/10" />
                                        <div className="h-2 w-16 rounded-full bg-white/5" />
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                                    <div className="grid grid-cols-3 gap-2 h-full">
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="rounded-lg bg-white/[0.04] border border-white/[0.06]"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-8 flex-1 rounded-lg bg-refe-accent/10 border border-refe-accent/20" />
                                    <div className="h-8 w-20 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
                                </div>
                            </div>
                        </div>

                        {/* Glow behind device */}
                        <div className="absolute -inset-8 rounded-3xl bg-refe-accent/[0.05] blur-[60px] -z-10" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom project counter line */}
            <div className="absolute bottom-12 left-0 right-0 px-6 md:px-16 z-10">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/[0.06]" />
                    <span className="refe-mono text-refe-muted text-[10px]">
                        {t.work.scroll_hint}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
            </div>
        </div>
    );
};

const Work: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="work" className="relative bg-refe-black">
            {/* Section header */}
            <div className="sticky top-0 z-0 min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="refe-mono text-refe-accent mb-6">{t.work.eyebrow}</p>
                    <h2 className="refe-serif text-6xl md:text-8xl lg:text-[120px] text-white leading-none italic">
                        {t.work.title_main}
                    </h2>
                    <h2 className="refe-serif text-6xl md:text-8xl lg:text-[120px] text-white/30 leading-none italic">
                        {t.work.title_sub}
                    </h2>
                </div>
            </div>

            {/* Project slides */}
            {projects.map((project, index) => (
                <ProjectSlide
                    key={project.id}
                    project={project}
                    index={index}
                    totalProjects={projects.length}
                />
            ))}

            {/* NDA + View all card */}
            <div className="relative z-10 bg-refe-black py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-16 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl border border-white/[0.1] bg-white/[0.03] flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-refe-muted">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h3 className="refe-serif text-3xl md:text-4xl text-white italic mb-3">{t.work.stealth.title}</h3>
                        <p className="text-refe-mid text-sm max-w-md mb-6 leading-relaxed">{t.work.stealth.desc}</p>
                        <span className="refe-mono text-refe-accent border border-refe-accent/30 bg-refe-accent/[0.05] px-4 py-2 rounded-full">
                            {t.work.stealth.badge}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;