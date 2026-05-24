import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiClock } from 'react-icons/fi';
import { FaGift, FaChurch, FaGlassCheers } from 'react-icons/fa';

const Details = () => {
  const { t } = useLanguage();

  return (
    <section id="details" className="py-24 bg-base-light relative border-t border-b border-gold/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-gold mb-4 text-glow font-serif">{t.details.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Introduction & Dowry Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass border-glow rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-gold">
              <FaGift size={28} />
            </div>
            <h3 className="text-2xl font-serif text-main mb-2">{t.details.introDowry.title}</h3>
            <p className="text-gold-light mb-4 font-serif text-lg">{t.details.introDowry.desc}</p>
            <div className="flex items-center justify-center text-muted gap-2 mb-8">
              <FiClock /> <span>{t.details.introDowry.time}</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/z4jQs6RXMHXsXYdd8"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-6 py-2 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-navy transition-colors text-sm uppercase tracking-wider"
            >
              {t.details.mapBtn}
            </a>
          </motion.div>

          {/* Religious Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-glass border-glow rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-gold">
              <FaChurch size={28} />
            </div>
            <h3 className="text-2xl font-serif text-main mb-2">{t.details.religiousCeremony.title}</h3>
            <p className="text-gold-light mb-4 font-serif text-lg">{t.details.religiousCeremony.desc}</p>
            <div className="flex items-center justify-center text-muted gap-2 mb-8">
              <FiClock /> <span>{t.details.religiousCeremony.time}</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/gK9QfNiVUVmaVhhU7"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-6 py-2 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-navy transition-colors text-sm uppercase tracking-wider"
            >
              {t.details.mapBtn}
            </a>
          </motion.div>
         
          {/* Reception Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-glass border-glow rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 text-gold">
              <FaGlassCheers size={28} />
            </div>
            <h3 className="text-2xl font-serif text-main mb-2">{t.details.reception.title}</h3>
            <p className="text-gold-light mb-4 font-serif text-lg">{t.details.reception.desc}</p>
            <div className="flex items-center justify-center text-muted gap-2 mb-8">
              <FiClock /> <span>{t.details.reception.time}</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/z4jQs6RXMHXsXYdd8"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-6 py-2 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-navy transition-colors text-sm uppercase tracking-wider"
            >
              {t.details.mapBtn}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Details;
