import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
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

    // Track scroll to hide scroll indicator
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Staggered text animation variants for cinematic "reveal"
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } // Very smooth, cinematic easing
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
            {/* 1. DARK AURORA BACKGROUND (Cinematic Atmosphere) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Center base glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[140px] rounded-full" />

                {/* Slow moving orb 1 */}
                <motion.div
                    animate={{
                        x: ['-20%', '10%', '-20%'],
                        y: ['-10%', '20%', '-10%'],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-refe-muted/10 blur-[120px] rounded-full mix-blend-screen"
                />

                {/* Slow moving orb 2 */}
                <motion.div
                    animate={{
                        x: ['20%', '-10%', '20%'],
                        y: ['20%', '-10%', '20%'],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-[10%] right-[10%] w-[700px] h-[500px] bg-white/[0.015] blur-[150px] rounded-full mix-blend-screen"
                />

                {/* Grid overlay for texture binding */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />

                {/* Spotlight Cursor Effect */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 ease-out"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                    }}
                />
            </div>

            {/* 2. MAIN EDITORIAL CONTENT (Absolute Centralization & Order) */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-[1200px] mx-auto w-full mt-10">

                {/* Status Badge (Premium pill) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md"
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-refe-light opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-refe-white" />
                    </span>
                    <span className="refe-mono text-refe-light tracking-widest text-[10px] uppercase">
                        {t.hero.status}
                    </span>
                </motion.div>

                {/* Monumental Headline */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display font-black text-white leading-[0.9] tracking-[-0.04em] mb-12 flex flex-col items-center justify-center max-w-[1100px]"
                >
                    <div className="overflow-hidden pb-2">
                        <motion.span variants={wordVariants} className="block" style={{ fontSize: 'clamp(3.5rem, 8vw, 8.5rem)' }}>
                            {t.hero.title_start}
                        </motion.span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[clamp(1rem,2vw,2rem)] overflow-hidden pb-4">
                        <motion.span variants={wordVariants} className="block text-white/50" style={{ fontSize: 'clamp(3.5rem, 8vw, 8.5rem)' }}>
                            {t.hero.title_mid}
                        </motion.span>
                        <motion.span variants={wordVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-refe-light to-white/50" style={{ fontSize: 'clamp(3.5rem, 8vw, 8.5rem)' }}>
                            {t.hero.title_end}
                        </motion.span>
                    </div>
                </motion.h1>

                {/* Descriptor paragraph */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="max-w-[600px] mb-14"
                >
                    <p className="text-refe-mid font-light text-base md:text-lg leading-relaxed">
                        {t.hero.desc_short}
                    </p>
                </motion.div>

                {/* CTAs (Glassmorphism & High Contrast) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    {/* Primary Glass CTA */}
                    <a
                        href="#services"
                        className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-white text-refe-black font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {t.hero.cta_primary}
                            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
                        </span>
                    </a>

                    {/* Secondary Ghost CTA */}
                    <a
                        href="#footer"
                        className="group px-8 py-3.5 rounded-full border border-white/[0.15] bg-white/[0.03] backdrop-blur-md text-white text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.3] transition-all duration-300 flex items-center gap-2"
                    >
                        {t.hero.cta_secondary}
                        <Sparkles size={14} className="text-refe-muted group-hover:text-refe-white transition-colors" />
                    </a>
                </motion.div>
            </div>

            {/* 3. SCROLL INDICATOR (Clean Bottom Frame) */}
            <motion.div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>

            {/* Super minimal bottom glow line instead of harsh border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        </section>
    );
};

export default Hero;