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
              <img src="/images/linkedin/trd-stage.jpg" alt="d Event Yaklaşımı" className="about__image" loading="lazy" />
            </div>
          </div>

          <div className="about__content">

            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about__desc">{t('about.desc')}</p>

            <div className="about__vision">
              <h3 className="about__vision-title">{t('about.vision.title')}</h3>
              <p className="about__vision-desc">{t('about.vision.desc')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
