import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import heroCoupleImg from '../assets/hero_couple2.png';
import realCoupleImg from '../assets/hero_couple2.png';
import { weddingDate } from '../data/weddingData';

const Hero = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-screen cinematic background */}
      <div
        className="absolute inset-0 sm:inset-1 z-0 bg-cover sm:bg-contain bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${heroCoupleImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy" />
      </div>

      {/* Left Sidebar - Save the Date (Fixed) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/50"></div>
        
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gold tracking-[0.3em] text-[10px] uppercase whitespace-nowrap text-center">
            Save the Date
          </span>
        </motion.div>
        
        <div className="w-px h-8 bg-gold/30"></div>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-main tracking-[0.2em] text-lg font-serif whitespace-nowrap text-glow" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            15 • 08 • 2026
          </span>
        </div>

        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold/50"></div>
      </motion.div>

      {/* Right Sidebar - Full Countdown (Fixed) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="hidden md:flex fixed right-3 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/50"></div>

        <span className="text-gold tracking-[0.25em] text-[9px] uppercase whitespace-nowrap text-center">
          {t.countdown.daysToGo}
        </span>

        <div className="w-px h-4 bg-gold/30"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-2xl font-serif text-main">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="text-[9px] text-gold uppercase tracking-widest mt-1">{t.countdown.days}</span>
        </div>
        
        <div className="w-px h-6 bg-gold/30"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-2xl font-serif text-main">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[9px] text-gold uppercase tracking-widest mt-1">{t.countdown.hours}</span>
        </div>
        
        <div className="w-px h-6 bg-gold/30"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-2xl font-serif text-main">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[9px] text-gold uppercase tracking-widest mt-1">{t.countdown.minutes}</span>
        </div>
        
        <div className="w-px h-6 bg-gold/30"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-2xl font-serif text-main text-glow">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[9px] text-gold uppercase tracking-widest mt-1">{t.countdown.seconds}</span>
        </div>

        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-16">

        {/* Real couple portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mb-8 relative"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto">
            {/* <img
              src={realCoupleImg}
              alt="Joan & Paccy"
              className="w-full h-full object-cover object-top scale-110"
            /> */}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gold-light tracking-[0.3em] uppercase text-xs md:text-sm mb-4 drop-shadow-md"
        >
          {t.hero.headline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-main mb-4 text-glow drop-shadow-2xl"
        >
          {t.hero.names}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="w-24 h-px bg-gold mx-auto mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-lg md:text-2xl font-serif text-gold-light mb-10 drop-shadow-md tracking-widest"
        >
          {t.hero.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#story"
            className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider rounded hover:bg-white hover:text-navy transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:shadow-xl"
          >
            {t.hero.btnStory}
          </a>
          <a
            href="#rsvp"
            className="px-8 py-3 border border-gold text-gold font-semibold uppercase tracking-wider rounded hover:bg-gold/20 transition-all duration-300 backdrop-blur-sm shadow-lg"
          >
            {t.hero.btnRsvp}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gold/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
