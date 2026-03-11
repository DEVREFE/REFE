import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    const handleCopy = () => {
        navigator.clipboard.writeText('hola@refe.studio');
    };

    return (
        <footer id="footer" className="bg-refe-black pt-32 pb-12 px-6 relative overflow-hidden border-t border-white/[0.06]">

            {/* Thin top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* CTA Area */}
                <div className="flex flex-col items-center text-center mb-28">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-refe-mid" />
                        <span className="refe-mono text-refe-muted">{t.footer.slots}</span>
                    </div>

                    <h2 className="refe-display text-6xl md:text-8xl lg:text-[120px] text-refe-white leading-none mb-12">
                        {t.footer.title}<br />
                        <span className="text-refe-muted">{t.footer.title_highlight}</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:hola@refe.studio"
                            className="group flex items-center gap-3 bg-refe-white text-refe-black px-8 py-4 rounded-full font-semibold text-base hover:bg-refe-light transition-colors duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                        >
                            <Mail size={18} />
                            <span>hola@refe.studio</span>
                            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <button
                            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/[0.1] text-refe-light font-medium hover:bg-white/[0.04] transition-colors"
                            onClick={handleCopy}
                        >
                            <Copy size={16} className="text-refe-muted group-hover:text-refe-light transition-colors" />
                            <span>{t.footer.copy}</span>
                        </button>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/[0.06] pt-14 mb-16">
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.sitemap}</h4>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="text-sm text-refe-mid hover:text-refe-light transition-colors">{t.nav.home}</a></li>
                            <li><a href="#services" className="text-sm text-refe-mid hover:text-refe-light transition-colors">{t.nav.services}</a></li>
                            <li><a href="#work" className="text-sm text-refe-mid hover:text-refe-light transition-colors">{t.nav.work}</a></li>
                            <li><a href="#process" className="text-sm text-refe-mid hover:text-refe-light transition-colors">{t.nav.process}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.socials}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">Behance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="refe-mono text-refe-muted mb-5">{t.footer.legal}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">Privacidad</a></li>
                            <li><a href="#" className="text-sm text-refe-mid hover:text-refe-light transition-colors">Términos</a></li>
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