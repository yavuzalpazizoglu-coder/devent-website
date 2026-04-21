import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import LinkedInCards from './LinkedInCards';
import './Hero.css';

const titleVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { t } = useLang();

  const line1Words = t('hero.title1').split(' ');
  const accentWords = t('hero.titleAccent').split(' ');

  return (
    <section id="hero" className="hero">
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay loop muted playsInline>
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <motion.h1
            className="hero__title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {line1Words.map((w, i) => (
              <motion.span key={`l1-${i}`} variants={wordVariant} className="hero__word">
                {w}{' '}
              </motion.span>
            ))}
            <br />
            {accentWords.map((w, i) => (
              <motion.span key={`acc-${i}`} variants={wordVariant} className="hero__word hero__title-accent">
                {w}{' '}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="hero__cards-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <LinkedInCards />
      </motion.div>
    </section>
  );
}
