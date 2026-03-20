import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Gallery.css';

export default function Projects() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    { titleKey: 'proj1.title', subtitleKey: 'proj1.subtitle', img: '/images/hero.png', tagKey: 'proj1.tag', year: '2024' },
    { titleKey: 'proj2.title', subtitleKey: 'proj2.subtitle', img: '/images/gala.png', tagKey: 'proj2.tag', year: '2024' },
    { titleKey: 'proj3.title', subtitleKey: 'proj3.subtitle', img: '/images/speaker.png', tagKey: 'proj3.tag', year: '2023' },
    { titleKey: 'proj4.title', subtitleKey: 'proj4.subtitle', img: '/images/exhibition.png', tagKey: 'proj4.tag', year: '2023' },
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div className="projects__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="section-label">{t('projects.label')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.article key={p.titleKey} className="projects__card" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div className="projects__card-img">
                <img src={p.img} alt={t(p.titleKey)} loading="lazy" />
                <div className="projects__card-overlay">
                  <span className="projects__card-view">{t('projects.view')}</span>
                </div>
              </div>
              <div className="projects__card-info">
                <div className="projects__card-meta">
                  <span className="projects__card-tag">{t(p.tagKey)}</span>
                  <span className="projects__card-year">{p.year}</span>
                </div>
                <h3 className="projects__card-title">{t(p.titleKey)}</h3>
                <p className="projects__card-subtitle">{t(p.subtitleKey)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
