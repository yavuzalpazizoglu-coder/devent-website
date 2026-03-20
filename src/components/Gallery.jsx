import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Gallery.css';

const values = ['proj1', 'proj2', 'proj3', 'proj4'];

export default function Projects() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div className="projects__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>{t('projects.label')}</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('projects.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>{t('projects.desc')}</p>
        </motion.div>

        <div className="projects__grid">
          {values.map((key, i) => (
            <motion.div
              key={key}
              className="projects__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            >
              <span className="projects__card-icon">{t(`${key}.icon`)}</span>
              <h3 className="projects__card-title">{t(`${key}.title`)}</h3>
              <p className="projects__card-desc">{t(`${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
