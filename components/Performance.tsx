import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricItem = ({ label, value, growth, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0"
    >
        <div className="flex flex-col">
            <span className="refe-mono text-refe-muted mb-1">{label}</span>
            <span className="text-2xl refe-display text-refe-white">{value}</span>
        </div>
        <div className="refe-mono text-refe-mid border border-white/[0.07] px-2.5 py-1 rounded-md">
            {growth}
        </div>
    </motion.div>
);

const Performance: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="performance" className="py-28 bg-refe-black relative border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/[0.04] rounded-lg border border-white/[0.07]">
                                    <TrendingUp size={18} className="text-refe-mid" />
                                </div>
                                <span className="font-display font-medium text-refe-white">{t.performance.label}</span>
                            </div>

                            <h2 className="refe-display text-5xl md:text-6xl text-refe-white leading-none mb-8">
                                {t.performance.title_main}<br />
                                <span className="text-refe-muted">{t.performance.title_sub}</span>
                            </h2>

                            <p className="text-refe-mid leading-relaxed max-w-md mb-8 text-sm">
                                {t.performance.desc}
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-refe-muted" />
                                    <span className="text-refe-mid font-light text-sm">{t.performance.points[0]}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-refe-muted" />
                                    <span className="text-refe-mid font-light text-sm">{t.performance.points[1]}</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right: Dashboard Visual */}
                    <div className="relative">
                        <div className="glass rounded-[2rem] p-1 border border-white/[0.07] overflow-hidden shadow-2xl">
                            <div className="bg-refe-ink/90 backdrop-blur-md rounded-[1.8rem] p-6 md:p-8">

                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-refe-mid" />
                                        <span className="refe-mono text-refe-muted">{t.performance.chart.label}</span>
                                    </div>
                                    <span className="refe-mono text-refe-muted">{t.performance.chart.sub}</span>
                                </div>

                                {/* Chart */}
                                <div className="h-64 w-full relative mb-8">
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-white/[0.03]" />)}
                                    </div>
                                    <div className="absolute inset-0 flex justify-between pointer-events-none">
                                        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-full w-px bg-white/[0.03]" />)}
                                    </div>
                                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#E4E4E7" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#E4E4E7" stopOpacity="0" />
                                            </linearGradient>
                                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <motion.path
                                            d="M0,200 C50,200 80,150 150,160 C220,170 280,80 350,100 C420,120 480,40 600,20"
                                            fill="none"
                                            stroke="#E4E4E7"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            filter="url(#glow)"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                        />
                                        <motion.path
                                            d="M0,200 C50,200 80,150 150,160 C220,170 280,80 350,100 C420,120 480,40 600,20 V250 H0 Z"
                                            fill="url(#chartGradient)"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </svg>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                    <MetricItem label={t.performance.metrics.conversion} value="4.8%" growth="+2.1%" delay={0.2} />
                                    <MetricItem label={t.performance.metrics.time} value="3 semanas" growth="-40%" delay={0.3} />
                                    <MetricItem label={t.performance.metrics.retention} value="88%" growth="+12%" delay={0.4} />
                                    <MetricItem label={t.performance.metrics.debt} value="0%" growth="Opt." delay={0.5} />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Performance;