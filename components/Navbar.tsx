import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, MessageSquare, Home, Layers, Briefcase, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
    { label: t.nav.services, href: '#services', icon: Layers },
    { label: t.nav.work, href: '#work', icon: Briefcase },
    { label: t.nav.process, href: '#process', icon: ChevronRight },
  ];

  return (
    <>
      {/* Reading Progress — thin white line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-refe-white z-[70] origin-left"
        style={{ scaleX }}
      />

      {/* ── Desktop Pill Nav ─────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 24 }}
        className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto glass rounded-full px-2 py-1.5 flex items-center gap-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

          {/* Wordmark */}
          <a
            href="#hero"
            className="refe-wordmark text-refe-white text-base px-4 py-2 hover:opacity-60 transition-opacity"
          >
            REFE
          </a>

          <div className="h-5 w-px bg-white/[0.07] mx-1" />

          {/* Nav links */}
          <div className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-refe-mid hover:text-refe-white hover:bg-white/[0.04] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-5 w-px bg-white/[0.07] mx-1" />

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="px-3 py-1.5 rounded-full text-[10px] font-mono font-medium text-refe-mid hover:text-refe-white transition-colors tracking-widest mr-1"
          >
            <span className={language === 'es' ? 'text-refe-white' : ''}>ES</span>
            <span className="text-refe-muted mx-1">/</span>
            <span className={language === 'en' ? 'text-refe-white' : ''}>EN</span>
          </button>

          {/* CTA */}
          <a
            href="#footer"
            className="bg-refe-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-refe-accent-dark transition-colors duration-200 shadow-[0_2px_8px_rgba(232,87,42,0.3)]"
          >
            {t.nav.cta}
          </a>
        </div>
      </motion.nav>

      {/* ── Mobile Bar ───────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-refe-black/90 backdrop-blur-md border-b border-white/[0.07] px-5 py-4 flex justify-between items-center">
        <a href="#hero" className="refe-wordmark text-refe-white text-lg">
          REFE
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="font-mono text-[10px] font-medium text-refe-mid tracking-widest uppercase"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-refe-light hover:bg-white/[0.05] transition-colors"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ──────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-refe-black flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="refe-mono text-refe-muted">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-refe-light"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 + 0.1 }}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="refe-display text-4xl text-refe-white py-3 border-b border-white/[0.05] flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={24} className="text-refe-muted group-hover:text-refe-white transition-colors" />
                </motion.a>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-auto bg-refe-accent text-white px-8 py-4 rounded-full text-center font-semibold text-base hover:bg-refe-accent-dark transition-colors"
            >
              {t.nav.cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;