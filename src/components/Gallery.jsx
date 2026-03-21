import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiSparkles, HiLightningBolt, HiUserGroup } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './Gallery.css';

const values = [
  { key: 'proj1', icon: <HiShieldCheck />, color: '#f5a623' },
  { key: 'proj2', icon: <HiSparkles />, color: '#00aeef' },
  { key: 'proj3', icon: <HiLightningBolt />, color: '#e0334c' },
  { key: 'proj4', icon: <HiUserGroup />, color: '#22c55e' },
];

export default function Projects() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div className="projects__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('projects.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>{t('projects.desc')}</p>
        </motion.div>

        <div className="projects__layout">
          <motion.div className="projects__content" initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="projects__list">
              {values.map((val, i) => (
                <div key={val.key} className="projects__list-item">
                  <div className="projects__list-icon" style={{ color: val.color, background: `${val.color}12` }}>{val.icon}</div>
                  <div className="projects__list-text">
                    <h4 className="projects__list-title">{t(`${val.key}.title`)}</h4>
                    <p className="projects__list-desc">{t(`${val.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="projects__image-container"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img src="/images/linkedin/immunotherapy-stage.jpg" alt="Farkımız" className="projects__image" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
