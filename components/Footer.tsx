import React from 'react';
import { ArrowUpRight, Copy, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#020202] pt-32 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[100px] bg-brand-neon/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main CTA Area */}
        <div className="flex flex-col items-center text-center mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{t.footer.slots}</span>
            </div>

            <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-12">
                {t.footer.title} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">{t.footer.title_highlight}</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                <a 
                    href="mailto:hello@refe.studio" 
                    className="group relative flex items-center gap-4 bg-brand-neon text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(217,255,0,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                    <Mail size={20} />
                    <span>hello@refe.studio</span>
                    <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                
                <button 
                    className="group px-10 py-5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-3"
                    onClick={() => {navigator.clipboard.writeText('hello@refe.studio')}}
                >
                    <Copy size={18} className="text-gray-400 group-hover:text-white" />
                    <span>{t.footer.copy}</span>
                </button>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16 mb-24">
            <div>
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">{t.footer.sitemap}</h4>
                <ul className="space-y-4">
                    <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">{t.nav.home}</a></li>
                    <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.nav.services}</a></li>
                    <li><a href="#methodology" className="text-gray-400 hover:text-white transition-colors">{t.nav.methodology}</a></li>
                    <li><a href="#performance" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">{t.footer.socials}</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">Instagram</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">Twitter / X</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">Dribbble</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">{t.footer.legal}</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
            </div>
             <div className="col-span-2 md:col-span-1">
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">{t.footer.office}</h4>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {t.footer.office_loc}
                </p>
            </div>
        </div>
      
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest border-t border-white/5 pt-8">
            <p className="font-mono">© {new Date().getFullYear()} REFE Studio. {t.footer.rights}</p>
            <p className="font-mono mt-2 md:mt-0">{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;