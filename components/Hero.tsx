import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;
        const { left, top } = heroRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - left, y: e.clientY - top });
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.3 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, filter: 'blur(12px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-refe-black"
        >
            {/* 1. GIANT WATERMARK "REFE" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="refe-wordmark text-white/[0.04] leading-none"
                    style={{ fontSize: 'clamp(20rem, 40vw, 50rem)' }}
                >
                    REFE
                </motion.span>
            </div>

            {/* 2. DARK AURORA BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.015] blur-[140px] rounded-full" />
                <motion.div
                    animate={{ x: ['-20%', '10%', '-20%'], y: ['-10%', '20%', '-10%'], scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-refe-accent/[0.03] blur-[120px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{ x: ['20%', '-10%', '20%'], y: ['20%', '-10%', '20%'], scale: [1, 1.2, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-[10%] right-[10%] w-[700px] h-[500px] bg-white/[0.01] blur-[150px] rounded-full mix-blend-screen"
                />
                {/* Spotlight Cursor */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 ease-out"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232,87,42,0.04), transparent 40%)`
                    }}
                />
            </div>

            {/* 3. MAIN CONTENT */}
            <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full mt-10">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md"
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-refe-accent opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-refe-accent" />
                    </span>
                    <span className="refe-mono text-refe-light tracking-widest text-[10px] uppercase">
                        {t.hero.status}
                    </span>
                </motion.div>

                {/* Monumental Serif Headline */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start justify-start max-w-[1100px] mb-10"
                >
                    <div className="overflow-hidden pb-1">
                        <motion.span
                            variants={wordVariants}
                            className="refe-mono text-refe-accent block mb-4"
                            style={{ fontSize: '12px' }}
                        >
                            BUENOS AIRES — REMOTO
                        </motion.span>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <motion.span
                            variants={wordVariants}
                            className="refe-serif text-white block italic"
                            style={{ fontSize: 'clamp(3rem, 7.5vw, 7.5rem)' }}
                        >
                            {t.hero.title_line1}
                        </motion.span>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <motion.span
                            variants={wordVariants}
                            className="refe-serif text-white/40 block italic"
                            style={{ fontSize: 'clamp(3rem, 7.5vw, 7.5rem)' }}
                        >
                            {t.hero.title_line2}
                        </motion.span>
                    </div>
                </motion.h1>

                {/* Subtitle + CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 max-w-3xl"
                >
                    <p className="text-refe-mid font-light text-base md:text-lg leading-relaxed max-w-md">
                        {t.hero.desc_short}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <a
                            href="#work"
                            className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-refe-accent text-white font-semibold text-sm transition-all duration-300 hover:bg-refe-accent-dark hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[0_0_40px_rgba(232,87,42,0.3)] hover:shadow-[0_0_60px_rgba(232,87,42,0.5)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.cta_primary}
                                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="#footer"
                            className="group px-8 py-3.5 rounded-full border border-white/[0.15] bg-white/[0.03] backdrop-blur-md text-white text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.3] transition-all duration-300"
                        >
                            {t.hero.cta_secondary}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* 4. SCROLL INDICATOR */}
            <motion.div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-refe-accent/40 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-refe-accent/80"
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;