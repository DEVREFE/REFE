import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricItem = ({ label, value, growth, delay }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group"
    >
        <div className="flex flex-col">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wide mb-1">{label}</span>
            <span className="text-2xl font-display font-medium text-white group-hover:text-brand-neon transition-colors">{value}</span>
        </div>
        <div className="flex items-center gap-1 text-green-400 bg-green-900/20 px-2 py-1 rounded-md text-xs font-mono">
            <ArrowUpRight size={12} />
            {growth}
        </div>
    </motion.div>
)

const Performance: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="performance" className="py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Context */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-brand-neon/10 rounded-lg">
                             <TrendingUp size={20} className="text-brand-neon" />
                        </div>
                        <span className="font-display font-medium text-white">{t.performance.label}</span>
                    </div>
                    
                    <h2 className="font-display font-semibold text-5xl md:text-6xl text-white tracking-tight mb-8 leading-[1.1]">
                        {t.performance.title_main} <br />
                        <span className="text-gray-600">{t.performance.title_sub}</span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                        {t.performance.desc}
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-neon" />
                            <span className="text-gray-300 font-light">{t.performance.points[0]}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-neon" />
                            <span className="text-gray-300 font-light">{t.performance.points[1]}</span>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Dashboard Visual - Fintech Style */}
            <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/5 to-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="glass-panel rounded-[2rem] p-1 border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="bg-[#050505]/80 backdrop-blur-md rounded-[1.8rem] p-6 md:p-8">
                        
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-brand-neon animate-pulse" />
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{t.performance.chart.label}</span>
                            </div>
                            <span className="text-xs font-mono text-gray-600">{t.performance.chart.sub}</span>
                        </div>

                        {/* The Chart */}
                        <div className="h-64 w-full relative mb-8">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                {[1,2,3,4,5].map(i => <div key={i} className="w-full h-[1px] bg-white/[0.03]" />)}
                            </div>
                            <div className="absolute inset-0 flex justify-between pointer-events-none">
                                {[1,2,3,4,5,6].map(i => <div key={i} className="h-full w-[1px] bg-white/[0.03]" />)}
                            </div>

                            {/* Line SVG */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#D9FF00" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#D9FF00" stopOpacity="0" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <motion.path
                                    d="M0,200 C50,200 80,150 150,160 C220,170 280,80 350,100 C420,120 480,40 600,20"
                                    fill="none"
                                    stroke="#D9FF00"
                                    strokeWidth="2"
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

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                             <MetricItem label={t.performance.metrics.conversion} value="4.8%" growth="+2.1%" delay={0.2} />
                             <MetricItem label={t.performance.metrics.time} value="3 Weeks" growth="-40%" delay={0.3} />
                             <MetricItem label={t.performance.metrics.retention} value="88%" growth="+12%" delay={0.4} />
                             <MetricItem label={t.performance.metrics.debt} value="0%" growth="Optimized" delay={0.5} />
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