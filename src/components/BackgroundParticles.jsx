import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
  // Generate random particles
  const particles = Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    size: Math.random() * 12 + 4,
    x: Math.random() * 100, // percentage vw
    y: Math.random() * 100, // percentage vh
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-light/20 blur-[3px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
          }}
          animate={{
            y: [`${p.y}vh`, `-10vh`],
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy z-0 pointer-events-none" />
    </div>
  );
};

export default BackgroundParticles;
