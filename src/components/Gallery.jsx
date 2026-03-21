import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Gallery.css';

const values = [
  { key: 'proj1', num: '01' },
  { key: 'proj2', num: '02' },
  { key: 'proj3', num: '03' },
  { key: 'proj4', num: '04' },
];

export default function Projects() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('projects.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            {t('projects.desc')}
          </p>
        </motion.div>

        <div className="projects__grid">
          {values.map((val, i) => (
            <motion.div
              key={val.key}
              className="projects__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            >
              <span className="projects__card-num">{val.num}</span>
              <div className="projects__card-line" />
              <h4 className="projects__card-title">{t(`${val.key}.title`)}</h4>
              <p className="projects__card-desc">{t(`${val.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
