import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Target, Users, Zap, Award, Gem, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DNAItem = ({ icon: Icon, title, desc, index, large = false, mouseX, mouseY }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
          group relative border border-white/10 bg-[#080808] p-8 md:p-10 flex flex-col justify-between overflow-hidden
          ${large ? 'md:col-span-2 md:row-span-2 bg-[#0A0A0A]' : 'bg-[#050505]'}
      `}
    >
        {/* Spotlight Effect Layer - WHITE/SILVER */}
        <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(255, 255, 255, 0.08),
                    transparent 80%
                    )
                `,
            }}
        />
        {/* Border Spotlight - WHITE */}
        <motion.div
             className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
             style={{
                 background: useMotionTemplate`
                     radial-gradient(
                     400px circle at ${mouseX}px ${mouseY}px,
                     rgba(255, 255, 255, 0.3),
                     transparent 40%
                     )
                 `,
                 maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                 WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                 maskComposite: `exclude`,
                 WebkitMaskComposite: `xor`,
                 padding: `1px`,
             }}
        />

       {/* Content Hover Grid Reveal */}
       <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
       
       <div className="relative z-10 flex justify-between items-start mb-8 pointer-events-none">
          <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-gray-600 group-hover:text-white transition-colors">
                  0{index} — PRINCIPLE
              </span>
              <div className={`p-2 w-fit rounded-lg ${large ? 'text-white bg-white/10' : 'text-gray-400 bg-white/5'}`}>
                  <Icon size={large ? 32 : 24} />
              </div>
          </div>
          {large && <LayoutGrid className="text-gray-700 group-hover:text-gray-500 transition-colors" />}
       </div>

       <div className="relative z-10 mt-auto pointer-events-none">
          <h3 className={`font-display font-medium text-white mb-4 ${large ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
              {title}
          </h3>
          <p className={`text-gray-400 font-light leading-relaxed ${large ? 'text-lg' : 'text-sm'}`}>
              {desc}
          </p>
       </div>
    </motion.div>
  );
};

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useLanguage();

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="philosophy" className="py-32 bg-brand-black relative" onMouseMove={handleMouseMove}>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-8">
             <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="font-mono text-xs text-white uppercase tracking-widest">{t.philosophy.eyebrow}</span>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-6xl text-white tracking-tight leading-[0.9]">
                    {t.philosophy.title_main} <br/> <span className="text-gray-600">{t.philosophy.title_sub}</span>
                </h2>
             </div>
             <div className="text-right">
                <p className="text-gray-400 text-sm font-mono max-w-xs ml-auto mb-2">
                   {t.philosophy.system_config}
                </p>
                <p className="text-white text-sm">
                   {t.philosophy.config_desc}
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 group/grid">
              
              <DNAItem 
                 index={1}
                 large={true}
                 icon={Users}
                 title={t.philosophy.cards[1].title}
                 desc={t.philosophy.cards[1].desc}
                 mouseX={mouseX}
                 mouseY={mouseY}
              />

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-1 h-full">
                  <DNAItem 
                     index={2}
                     icon={Award}
                     title={t.philosophy.cards[2].title}
                     desc={t.philosophy.cards[2].desc}
                     mouseX={mouseX}
                     mouseY={mouseY}
                  />

                  <DNAItem 
                     index={3}
                     icon={Zap}
                     title={t.philosophy.cards[3].title}
                     desc={t.philosophy.cards[3].desc}
                     mouseX={mouseX}
                     mouseY={mouseY}
                  />

                  <DNAItem 
                     index={4}
                     icon={Gem}
                     title={t.philosophy.cards[4].title}
                     desc={t.philosophy.cards[4].desc}
                     mouseX={mouseX}
                     mouseY={mouseY}
                  />

                  <DNAItem 
                     index={5}
                     icon={Target}
                     title={t.philosophy.cards[5].title}
                     desc={t.philosophy.cards[5].desc}
                     mouseX={mouseX}
                     mouseY={mouseY}
                  />
              </div>

          </div>
       </div>
    </section>
  );
};

export default Philosophy;