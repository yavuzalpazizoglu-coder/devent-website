import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import NewsTicker from './NewsTicker';
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
  const line3Words = t('hero.title2') ? t('hero.title2').split(' ') : [];

  return (
    <section id="hero" className="hero">
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay loop muted playsInline poster="/images/hero.png">
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
            {line3Words.length > 0 && (
              <>
                <br />
                {line3Words.map((w, i) => (
                  <motion.span key={`l3-${i}`} variants={wordVariant} className="hero__word">
                    {w}{' '}
                  </motion.span>
                ))}
              </>
            )}
          </motion.h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.desc')}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="hero__ticker-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <NewsTicker />
      </motion.div>
    </section>
  );
}
