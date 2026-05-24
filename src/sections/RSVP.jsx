import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';

const RSVP = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/paxiphique@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        triggerConfetti();
      } else {
        console.error("Form submission failed", result);
        setStatus('error');
        setErrorMessage(result.message || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#D4AF37', '#ffffff', '#F5E0B3']
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#D4AF37', '#ffffff', '#F5E0B3']
      }));
    }, 250);
  };

  return (
    <section id="rsvp" className="py-24 bg-base-light relative border-t border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-glass border-glow rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-gold mb-4 text-glow font-serif">{t.rsvp.title}</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50"></div>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-main mb-4">{t.rsvp.successTitle}</h3>
              <p className="text-gold-light text-lg">{t.rsvp.successDesc}</p>
              <p className="text-muted-light mt-4 text-sm">A confirmation email has been triggered.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded text-sm text-center">
                  {errorMessage}
                </div>
              )}
              <div>
                <label className="block text-sm text-muted mb-2 uppercase tracking-wider">{t.rsvp.nameLabel}</label>
                <input name="name" required type="text" className="w-full bg-base/50 border border-gold/20 rounded px-4 py-3 text-main focus:outline-none focus:border-gold transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted mb-2 uppercase tracking-wider">{t.rsvp.attendingLabel}</label>
                  <select name="attending" required defaultValue="" className="w-full bg-base/50 border border-gold/20 rounded px-4 py-3 text-main focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="" disabled>--</option>
                    <option value="yes">{t.rsvp.attendingYes}</option>
                    <option value="no">{t.rsvp.attendingNo}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2 uppercase tracking-wider">{t.rsvp.guestsLabel}</label>
                  <input name="guests" required type="number" min="1" max="5" defaultValue="1" className="w-full bg-base/50 border border-gold/20 rounded px-4 py-3 text-main focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2 uppercase tracking-wider">{t.rsvp.messageLabel}</label>
                <textarea name="message" rows="4" className="w-full bg-base/50 border border-gold/20 rounded px-4 py-3 text-main focus:outline-none focus:border-gold transition-colors"></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gold text-navy font-semibold uppercase tracking-wider py-4 rounded hover:bg-white hover:text-navy transition-colors duration-300 shadow-lg disabled:opacity-50"
              >
                {status === 'submitting' ? '...' : t.rsvp.submitBtn}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
