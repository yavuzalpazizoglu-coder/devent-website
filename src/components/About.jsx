import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="about section-padding">
      <div className="container" ref={ref}>
        <motion.div className="about__layout" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
          <div className="about__visual">
            <div className="about__img-wrapper">
              <img src="/images/speaker.png" alt="Event" className="about__img" loading="lazy" />
              <div className="about__badge">
                <span className="about__badge-number">13+</span>
                <span className="about__badge-text">{t('about.badge')}</span>
              </div>
            </div>
          </div>

          <div className="about__content">
            <span className="section-label">{t('about.label')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about__desc">{t('about.desc')}</p>

            <div className="about__vision">
              <h3 className="about__vision-title">{t('about.vision.title')}</h3>
              <p className="about__vision-desc">{t('about.vision.desc')}</p>
            </div>

            <div className="about__stats-row">
              <div className="about__stat">
                <span className="about__stat-num">872+</span>
                <span className="about__stat-label">{t('hero.stat.events')}</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">868+</span>
                <span className="about__stat-label">{t('hero.stat.congress')}</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">100%</span>
                <span className="about__stat-label">{t('hero.stat.satisfaction')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
