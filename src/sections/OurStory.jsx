import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { storyTimeline } from '../data/weddingData';

const OurStory = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 bg-base relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-gold mb-4 text-glow font-serif">{t.story.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden sm:block"></div>

          {storyTimeline.map((item, index) => {
            const isEven = index % 2 === 0;
            const content = t.story[item.id];
            
            return (
              <div key={item.id} className={`relative flex flex-col sm:flex-row items-center mb-16 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[28px] sm:left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 z-10 border-4 border-navy shadow-[0_0_10px_rgba(212,175,55,0.8)] hidden sm:block"></div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-12' : 'sm:pr-12'}`}
                >
                  <div className="bg-glass border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors duration-300">
                    <span className="text-gold-light text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-serif text-main mb-3">{content.title}</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">{content.desc}</p>
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full sm:w-1/2 mt-6 sm:mt-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}
                >
                  <div className={`rounded-xl overflow-hidden border border-gold/20 shadow-xl group ${item.id === 'falling' ? 'aspect-[16/11]' : 'aspect-[4/3]'}`}>
                    <img
                      src={item.image}
                      alt={content.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        item.id === 'falling' ? 'object-[center_20%] group-hover:scale-105' : 'group-hover:scale-105'
                      }`}
                    />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
