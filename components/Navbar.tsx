import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { Menu, X, MessageSquare, Home, Layers, Zap, Briefcase, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MagneticWrapper = ({ children }: { children?: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((e.clientX - centerX) * 0.2); 
        y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.div>
    );
};


const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { language, setLanguage, t } = useLanguage();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: t.nav.home, href: '#hero', icon: Home },
    { label: t.nav.services, href: '#services', icon: Layers },
    { label: t.nav.work, href: '#work', icon: Briefcase },
    { label: t.nav.methodology, href: '#methodology', icon: Zap },
  ];

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-neon z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Desktop Floating Dock */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl ring-1 ring-white/5">
          
          <a href="#" className="px-4 py-2 font-display font-bold text-white tracking-tight flex items-center gap-1 group">
            REFE<span className="text-brand-neon group-hover:animate-pulse">.</span>
          </a>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all group flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono font-bold hover:bg-white/10 transition-colors flex items-center gap-2 mr-2"
          >
             <span className={language === 'en' ? 'text-brand-neon' : 'text-gray-500'}>EN</span>
             <span className="text-gray-600">/</span>
             <span className={language === 'es' ? 'text-brand-neon' : 'text-gray-500'}>ES</span>
          </button>

          <MagneticWrapper>
            <a
                href="#footer"
                className="relative overflow-hidden bg-brand-neon text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(217,255,0,0.3)] hover:shadow-[0_0_30px_rgba(217,255,0,0.5)] group"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
                
                <MessageSquare size={16} className="relative z-20" />
                <span className="relative z-20">{t.nav.cta}</span>
            </a>
          </MagneticWrapper>
        </div>
      </motion.nav>

      {/* Mobile Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl text-white">
          REFE<span className="text-brand-neon">.</span>
        </a>
        <div className="flex items-center gap-4">
            <button 
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="font-mono text-xs font-bold text-gray-400"
            >
                {language.toUpperCase()}
            </button>
            <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-white/20"
            >
            <Menu size={20} />
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
               <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Menu</span>
               <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-5xl font-bold text-white flex items-center gap-4 active:text-brand-neon"
                >
                  <item.icon size={32} className="text-brand-neon" />
                  {item.label}
                </motion.a>
              ))}
              
               <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="#footer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-5xl font-bold text-brand-neon flex items-center gap-4 mt-4"
                >
                  <MessageSquare size={32} />
                  {t.nav.cta}
                </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;