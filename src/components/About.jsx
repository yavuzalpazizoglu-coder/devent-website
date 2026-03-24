import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './About.css';

const vmdCards = [
  { key: 'vision', num: '01' },
  { key: 'mission', num: '02' },
  { key: 'values', num: '03' },
];

export default function About() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="about section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('about.title')}</h2>
        </motion.div>

        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p className="about__highlight">{t('about.p4')}</p>
        </motion.div>

        <div className="about__vmd">
          {vmdCards.map((card, i) => (
            <motion.div
              key={card.key}
              className="about__vmd-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <span className="about__vmd-num">{card.num}</span>
              <h3 className="about__vmd-label">{t(`about.${card.key}Label`)}</h3>
              <p className="about__vmd-text">{t(`about.${card.key}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
