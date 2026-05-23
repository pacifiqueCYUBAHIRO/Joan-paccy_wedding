import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-main/70 hover:text-main transition-colors z-50"
          >
            <FiX size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-main/70 hover:text-main transition-colors z-50 p-2"
          >
            <FiChevronLeft size={48} />
          </button>

          <div className="relative flex items-center justify-center w-full h-full px-12 md:px-24" onClick={onClose}>
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex]}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-main/70 hover:text-main transition-colors z-50 p-2"
          >
            <FiChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-main/50 text-sm font-sans">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
