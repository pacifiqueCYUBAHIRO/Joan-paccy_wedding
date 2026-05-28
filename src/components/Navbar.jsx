import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.story, href: '#story' },
    { name: t.nav.invitation, href: '#invitation' },
    { name: t.nav.details, href: '#details' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.rsvp, href: '#rsvp' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-glass shadow-lg py-4' : 'bg-glass md:bg-transparent shadow-md md:shadow-none py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Names */}
        <a href="#home" className="text-2xl font-serif text-main text-glow">
          J <span className="text-gold">&</span> P
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-200 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-sm uppercase tracking-widest text-gold hover:text-main transition-colors border border-gold/30 px-4 py-2 rounded-full"
          >
            <FiGlobe />
            <span>{lang}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-gold text-sm font-semibold flex items-center gap-1 border border-gold/30 px-3 py-1 rounded-full"
          >
            <FiGlobe size={14} /> {lang}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-main hover:text-gold focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-base/95 backdrop-blur-lg border-b border-gold/20 shadow-2xl py-6 md:hidden flex flex-col items-center space-y-6"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-gray-200 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
