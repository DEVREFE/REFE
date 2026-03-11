import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Target, Users, Zap, Award, Gem } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DNAItem = ({ icon: Icon, title, desc, index, large = false, mouseX, mouseY }: any) => {
    const bg = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04), transparent 70%)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.09, duration: 0.5 }}
            className={`
        group relative border border-white/[0.07] bg-refe-ink p-8 md:p-10 flex flex-col justify-between overflow-hidden
        ${large ? 'md:col-span-2 md:row-span-2' : ''}
      `}
        >
            {/* Spotlight on hover */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: bg }}
            />

            <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="flex flex-col gap-2">
                    <span className="refe-mono text-refe-muted">
                        {String(index).padStart(2, '0')} — PRINCIPIO
                    </span>
                    <div className={`p-2 w-fit rounded-lg ${large ? 'text-refe-light bg-white/[0.06]' : 'text-refe-muted bg-white/[0.03]'} border border-white/[0.06]`}>
                        <Icon size={large ? 28 : 22} />
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-auto">
                <h3 className={`font-display font-bold text-refe-white mb-3 ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {title}
                </h3>
                <p className={`text-refe-mid font-light leading-relaxed ${large ? 'text-base' : 'text-sm'}`}>
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

const Philosophy: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { t } = useLanguage();

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section id="philosophy" className="py-28 bg-refe-black relative border-b border-white/[0.06]" onMouseMove={handleMouseMove}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-white/[0.06] pb-10">
                    <div className="max-w-2xl">
                        <p className="refe-mono text-refe-muted mb-5">{t.philosophy.eyebrow}</p>
                        <h2 className="refe-display text-4xl md:text-6xl text-refe-white leading-none">
                            {t.philosophy.title_main}<br />
                            <span className="text-refe-muted">{t.philosophy.title_sub}</span>
                        </h2>
                    </div>
                    <div className="max-w-xs">
                        <p className="refe-mono text-refe-muted mb-2">{t.philosophy.system_config}</p>
                        <p className="text-refe-mid text-sm leading-relaxed">{t.philosophy.config_desc}</p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-white/[0.06] border border-white/[0.06] overflow-hidden">
                    <DNAItem index={1} large={true} icon={Users} title={t.philosophy.cards[1].title} desc={t.philosophy.cards[1].desc} mouseX={mouseX} mouseY={mouseY} />
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[1px]">
                        <DNAItem index={2} icon={Award} title={t.philosophy.cards[2].title} desc={t.philosophy.cards[2].desc} mouseX={mouseX} mouseY={mouseY} />
                        <DNAItem index={3} icon={Zap} title={t.philosophy.cards[3].title} desc={t.philosophy.cards[3].desc} mouseX={mouseX} mouseY={mouseY} />
                        <DNAItem index={4} icon={Gem} title={t.philosophy.cards[4].title} desc={t.philosophy.cards[4].desc} mouseX={mouseX} mouseY={mouseY} />
                        <DNAItem index={5} icon={Target} title={t.philosophy.cards[5].title} desc={t.philosophy.cards[5].desc} mouseX={mouseX} mouseY={mouseY} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;