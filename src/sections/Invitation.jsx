import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiHeart } from 'react-icons/fi';
import realCoupleImg from '../assets/story_proposal.png';

const Invitation = () => {
  const { t } = useLanguage();
  const inv = t.invitation;

  return (
    <section id="invitation" className="py-24 bg-base-light relative border-t border-gold/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-gold mb-4 text-glow font-serif">{inv.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Invitation Card */}
          <div className="relative bg-gradient-to-b from-[#0a1628] to-[#060d1a] border border-gold/30 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.12)] overflow-hidden">
            
            {/* Top decorative gold line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            {/* Inner content with double border effect */}
            <div className="m-3 sm:m-4 md:m-8 border border-gold/15 rounded-xl p-6 sm:p-8 md:p-12 text-center relative">
              
              {/* Corner ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gold/60 text-xs italic leading-relaxed max-w-md mx-auto mb-8"
              >
                {inv.quote}
              </motion.p>

              {/* Families */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <p 
                  className="font-serif text-muted text-base md:text-lg italic"
                  dangerouslySetInnerHTML={{ __html: inv.families.replace(/(Joram BAREKYE|Bwankarikari Emanuel|Theobald KABAGEMA|BWANKARIKARI Emanuel)/g, '<strong class="text-gold-light">$1</strong>') }}
                />
              </motion.div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
                <FiHeart className="text-gold/50" size={14} />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
              </div>

              {/* Request line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-muted-light text-sm uppercase tracking-widest mb-10"
              >
                {inv.requestLine}
              </motion.p>

              {/* Couple names — the star of the card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-10"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-main text-glow leading-snug">
                  {inv.bride}
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold my-2 text-glow">{inv.and}</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-main text-glow leading-snug">
                  {inv.groom}
                </h2>
              </motion.div>

              {/* Couple portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mx-auto mb-10 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <img
                  src={realCoupleImg}
                  alt={`${inv.bride} & ${inv.groom}`}
                  className="w-full h-full object-cover object-top scale-110"
                />
              </motion.div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
                <div className="w-2 h-2 rounded-full bg-gold/40" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
              </div>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="space-y-2 mb-8"
              >
                <p className="font-serif text-gold-light text-xl md:text-2xl">{inv.dateLine}</p>
                <p className="font-serif text-main text-xl tracking-widest">{inv.date}</p>
              </motion.div>

              {/* Events */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="space-y-4 mb-10 text-left max-w-sm mx-auto"
              >
                {inv.events && inv.events.map((event, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-2 border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                    {event.time && <div className="sm:w-1/3 text-gold-light text-sm font-semibold whitespace-nowrap">{event.time}</div>}
                    <div className={`text-muted-light text-sm ${!event.time && "italic text-center w-full"}`}>{event.text}</div>
                  </div>
                ))}
              </motion.div>

              {/* Closing */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="font-serif text-gold italic text-lg mb-8"
              >
                {inv.closingLine}
              </motion.p>
              
              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
                <div className="w-2 h-2 rounded-full bg-gold/40" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
              </div>

              {/* Contacts */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="text-xs text-muted-light font-sans tracking-wider"
              >
                <p className="font-bold text-gold uppercase mb-2">{inv.contactsTitle}</p>
                <p className="mb-1">{inv.contact1}</p>
                <p>{inv.contact2}</p>
              </motion.div>

            </div>

            {/* Bottom decorative gold line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
