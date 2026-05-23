import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-base py-16 text-center border-t border-gold/20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl font-serif text-main mb-4 text-glow">J <span className="text-gold">&</span> P</h2>
        <p className="text-gold-light font-serif italic text-xl mb-10 max-w-lg leading-relaxed">"{t.footer.quote}"</p>
        
        <div className="flex items-center justify-center space-x-6 mb-10">
          <a href="#" className="text-muted-light hover:text-gold transition-colors p-3 border border-transparent hover:border-gold/30 rounded-full bg-base-light/50">
            <FiInstagram size={24} />
          </a>
          <a href="#" className="text-muted-light hover:text-gold transition-colors p-3 border border-transparent hover:border-gold/30 rounded-full bg-base-light/50">
            <FiTwitter size={24} />
          </a>
          <a href="#" className="text-muted-light hover:text-gold transition-colors p-3 border border-transparent hover:border-gold/30 rounded-full bg-base-light/50">
            <FiFacebook size={24} />
          </a>
        </div>

        <p className="text-muted-light text-sm uppercase tracking-[0.2em] mb-4">{t.footer.thanks}</p>
        <p className="text-gray-600 text-xs font-mono">© {new Date().getFullYear()} Joan & Paccy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
