import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Timeline.css';

const milestones = [
  { year: 2012, key: 'tl.2012', color: '#f5a623' },
  { year: 2013, key: 'tl.2013', color: '#e0934c' },
  { year: 2014, key: 'tl.2014', color: '#e0334c' },
  { year: 2015, key: 'tl.2015', color: '#c23060' },
  { year: 2016, key: 'tl.2016', color: '#8e44ad' },
  { year: 2017, key: 'tl.2017', color: '#6c3cba' },
  { year: 2018, key: 'tl.2018', color: '#00aeef' },
  { year: 2019, key: 'tl.2019', color: '#0090cc' },
  { year: 2020, key: 'tl.2020', color: '#2ecc71' },
  { year: 2021, key: 'tl.2021', color: '#27ae60' },
  { year: 2022, key: 'tl.2022', color: '#00aeef' },
  { year: 2023, key: 'tl.2023', color: '#8e44ad' },
  { year: 2024, key: 'tl.2024', color: '#e0334c' },
  { year: 2025, key: 'tl.2025', color: '#f5a623' },
  { year: 2026, key: 'tl.2026', color: '#f5a623' },
];

export default function Timeline() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="timeline section-padding" id="timeline">
      <div className="timeline__bg-photo" />

      <div className="container" ref={ref}>
        <motion.div
          className="timeline__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('tl.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
            {t('tl.subtitle')}
          </p>
        </motion.div>

        <div className="timeline__scroll">
          <div className="timeline__track">
            <div className="timeline__line" />
            {milestones.map((ms, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <motion.div
                  key={ms.year}
                  className={`timeline__card${isLast ? ' timeline__card--current' : ''}`}
                  style={{ '--card-color': ms.color }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 + 0.3, duration: 0.45 }}
                >
                  <div className="timeline__card-accent" />
                  <span className="timeline__card-year">{ms.year}</span>
                  <p className="timeline__card-text">{t(ms.key)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
