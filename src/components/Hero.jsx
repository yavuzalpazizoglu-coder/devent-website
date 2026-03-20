import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLang();
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay loop muted playsInline poster="/images/hero.png">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero__title">
            {t('hero.title1')}
            <br />
            <span className="hero__title-accent">{t('hero.titleAccent')}</span>
            {t('hero.title2') && <><br />{t('hero.title2')}</>}
          </h1>
          <p className="hero__desc">{t('hero.desc')}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
              <span>{t('hero.cta')}</span>
            </a>
            <a href="#projects" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); }}>
              <span>{t('hero.projects')}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">872+</span>
            <span className="hero__stat-label">{t('hero.stat.events')}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">868+</span>
            <span className="hero__stat-label">{t('hero.stat.congress')}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">{t('hero.stat.satisfaction')}</span>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span>{t('hero.scroll')}</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
