import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Mail, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LiveClock = ({ timezone, label, gmtLabel }: { timezone: string; label: string; gmtLabel: string }) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setTime(formatted);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-refe-accent/10 border border-refe-accent/20 flex items-center justify-center">
                <span className="text-refe-accent text-lg font-mono font-medium">{time.split(':')[0]}</span>
            </div>
            <div>
                <span className="refe-mono text-refe-muted block mb-1">{gmtLabel} — {time}</span>
                <span className="text-refe-light text-sm font-medium">{label}</span>
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('hola@refe.studio');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="footer" className="bg-refe-black pt-32 pb-12 px-6 relative overflow-hidden">

            {/* Gradient transition from light to dark */}
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-refe-paper to-refe-black pointer-events-none z-10" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* CTA Area */}
                <div className="flex flex-col items-center text-center mb-28">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-refe-accent/20 bg-refe-accent/[0.05] mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-refe-accent animate-pulse" />
                        <span className="refe-mono text-refe-accent">{t.footer.slots}</span>
                    </div>

                    <h2 className="refe-serif text-6xl md:text-8xl lg:text-[120px] text-refe-white leading-none mb-4 italic">
                        {t.footer.title}
                    </h2>
                    <h2 className="refe-serif text-6xl md:text-8xl lg:text-[120px] text-refe-muted leading-none mb-12 italic">
                        {t.footer.title_highlight}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:hola@refe.studio"
                            className="group flex items-center gap-3 bg-refe-accent text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-refe-accent-dark transition-colors duration-200 shadow-[0_4px_24px_rgba(232,87,42,0.3)]"
                        >
                            <Mail size={18} />
                            <span>hola@refe.studio</span>
                            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <button
                            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/[0.1] text-refe-light font-medium hover:bg-white/[0.04] transition-colors"
                            onClick={handleCopy}
                        >
                            {copied
                                ? <Check size={16} className="text-refe-accent" />
                                : <Copy size={16} className="text-refe-muted group-hover:text-refe-light transition-colors" />
                            }
                            <span>{copied ? '¡Copiado!' : t.footer.copy}</span>
                        </button>
                    </div>
                </div>

                {/* Live Clocks */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
                    <LiveClock timezone="America/Argentina/Buenos_Aires" label="Buenos Aires" gmtLabel="GMT-3" />
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/[0.06] pt-14 mb-16">
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.sitemap}</h4>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">{t.nav.home || 'Inicio'}</a></li>
                            <li><a href="#services" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">{t.nav.services}</a></li>
                            <li><a href="#work" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">{t.nav.work}</a></li>
                            <li><a href="#process" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">{t.nav.process}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.socials}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">Behance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.legal}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">Privacidad</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-accent transition-colors">Términos</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.office}</h4>
                        <p className="text-sm text-refe-mid leading-relaxed whitespace-pre-line">
                            {t.footer.office_loc}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/[0.06] pt-6 gap-3">
                    <p className="refe-mono text-refe-muted normal-case tracking-normal font-mono text-[11px]">
                        © {new Date().getFullYear()} REFE. {t.footer.rights}
                    </p>
                    <p className="refe-mono text-refe-muted normal-case tracking-normal font-mono text-[11px]">
                        {t.footer.credits}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;