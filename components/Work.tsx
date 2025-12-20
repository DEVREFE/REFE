import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock, Layout, CreditCard, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Abstract UI Components (Pure CSS/Tailwind visualizations) ---

// 1. Fintech/Crypto Dashboard Visualization
const AbstractFintechUI = () => (
    <div className="w-full h-full bg-[#0A0A0A] p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <div className="w-20 h-2 rounded-full bg-white/10" />
        </div>
        <div className="flex gap-2">
            <div className="w-1/3 h-20 rounded-lg bg-white/5 border border-white/5" />
            <div className="w-1/3 h-20 rounded-lg bg-brand-titanium/20 border border-brand-titanium/20" />
            <div className="w-1/3 h-20 rounded-lg bg-white/5 border border-white/5" />
        </div>
        <div className="flex-1 rounded-lg bg-white/5 border border-white/5 p-3 relative overflow-hidden">
             {/* Chart Line */}
             <div className="absolute bottom-4 left-4 right-4 h-24 flex items-end justify-between gap-1 opacity-50">
                {[40, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
                    <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-brand-titanium rounded-t-sm"
                    />
                ))}
             </div>
        </div>
    </div>
);

// 2. AI Chat/Interface Visualization
const AbstractAIUI = () => (
    <div className="w-full h-full bg-[#0A0A0A] p-4 flex flex-col relative overflow-hidden">
        {/* Chat Bubbles */}
        <div className="space-y-3 mt-4">
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-3/4 p-3 rounded-2xl rounded-tl-none bg-white/10 border border-white/5"
            >
                <div className="w-full h-2 rounded-full bg-white/20 mb-2" />
                <div className="w-2/3 h-2 rounded-full bg-white/20" />
            </motion.div>

            <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-3/4 ml-auto p-3 rounded-2xl rounded-tr-none bg-brand-titanium text-black"
            >
                <div className="w-full h-2 rounded-full bg-black/20 mb-2" />
                <div className="w-1/2 h-2 rounded-full bg-black/20" />
            </motion.div>
        </div>
        
        {/* Floating Input */}
        <div className="absolute bottom-4 left-4 right-4 h-10 rounded-full bg-white/10 border border-white/10 flex items-center px-3 gap-2">
            <div className="w-4 h-4 rounded-full bg-brand-titanium animate-pulse" />
            <div className="w-20 h-1.5 rounded-full bg-white/20" />
        </div>
    </div>
);

// 3. E-commerce/Grid Visualization
const AbstractGridUI = () => (
    <div className="w-full h-full bg-[#0A0A0A] p-4 grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg bg-white/5 border border-white/5 flex flex-col p-2 gap-2 group-hover:bg-white/10 transition-colors"
            >
                <div className="flex-1 rounded-md bg-white/5 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10" />
                </div>
                <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
                <div className="h-1.5 w-1/3 rounded-full bg-white/10" />
            </motion.div>
        ))}
    </div>
);


const ProjectCard = ({ title, category, description, VisualComponent, size = "small", ctaText }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/10 hover:border-white/30 transition-colors duration-500 flex flex-col ${size === 'large' ? 'md:col-span-2' : ''}`}
    >
        {/* Project Visual Area */}
        <div className="h-64 w-full bg-[#050505] relative overflow-hidden border-b border-white/5">
             {/* Scale Effect on Hover */}
             <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 origin-center p-6 md:p-8">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[#0A0A0A]">
                    <VisualComponent />
                </div>
             </div>
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-brand-titanium uppercase tracking-widest px-2 py-1 rounded-md bg-brand-titanium/10 border border-brand-titanium/20">
                        {category}
                    </span>
                    <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
            
            {/* Hover Reveal Action */}
            <div className="mt-6 pt-6 border-t border-white/5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    {ctaText} <div className="w-8 h-[1px] bg-white" />
                </span>
            </div>
        </div>
    </motion.div>
);

const Work: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-brand-black relative">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
             <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-brand-titanium animate-pulse" />
                    <span className="font-mono text-xs text-brand-titanium uppercase tracking-widest">{t.work.eyebrow}</span>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-6xl text-white tracking-tight">
                    {t.work.title_main} <br/> <span className="text-gray-600">{t.work.title_sub}</span>
                </h2>
             </div>
             <p className="text-gray-400 max-w-sm text-sm leading-relaxed text-right">
                {t.work.desc}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
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
              
              {/* Coming Soon / NDA Card */}
               <div className="group relative overflow-hidden rounded-3xl bg-[#050505] border border-white/5 flex flex-col justify-center items-center p-12 text-center md:col-span-2 hover:bg-white/[0.02] transition-colors">
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <Lock size={24} className="text-gray-500" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white mb-2">{t.work.stealth.title}</h3>
                    <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                        {t.work.stealth.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest">
                        {t.work.stealth.badge}
                    </span>
               </div>
               
               <div className="relative overflow-hidden rounded-3xl bg-brand-titanium p-8 flex flex-col justify-between group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
                    
                    <div className="relative z-10">
                        <ArrowUpRight size={32} className="text-black mb-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                        <h3 className="text-3xl font-display font-bold text-black leading-none tracking-tight">
                            {t.work.view_all}
                        </h3>
                    </div>
                    <div className="relative z-10 mt-4">
                        <span className="text-xs font-bold text-black uppercase tracking-widest border-b border-black/20 pb-1">{t.work.archive}</span>
                    </div>
               </div>

          </div>
       </div>
    </section>
  );
};

export default Work;