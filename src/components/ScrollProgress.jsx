import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrolled);
      setShowTop(scrollTop > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <motion.div
          className="scroll-progress__bar"
          style={{ scaleX: progress }}
        />
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Back to top"
          >
            <svg className="back-to-top__ring" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={113.1}
                strokeDashoffset={113.1 * (1 - progress)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg>
            <svg className="back-to-top__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
