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
          <div className="projects__grid">
            {values.map((val, i) => (
              <motion.div
                key={val.key}
                className="projects__card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              >
                <div className="projects__card-icon" style={{ color: val.color, background: `${val.color}12` }}>
                  {val.icon}
                </div>
                <h3 className="projects__card-title">{t(`${val.key}.title`)}</h3>
                <p className="projects__card-desc">{t(`${val.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>

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
