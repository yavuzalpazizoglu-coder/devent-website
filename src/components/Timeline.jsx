import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Timeline.css';

const milestones = [
  { year: 2012, key: 'tl.2012' },
  { year: 2014, key: 'tl.2014' },
  { year: 2016, key: 'tl.2016' },
  { year: 2018, key: 'tl.2018' },
  { year: 2020, key: 'tl.2020' },
  { year: 2022, key: 'tl.2022' },
  { year: 2024, key: 'tl.2024' },
  { year: 2026, key: 'tl.2026' },
];

export default function Timeline() {
  const { t } = useLang();
  const [active, setActive] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="timeline section-padding" id="timeline">
      {/* Background congress photo */}
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

        <div className="timeline__track">
          {/* Main line */}
          <div className="timeline__line">
            <motion.div
              className="timeline__line-fill"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Traveling spark */}
            {inView && <div className="timeline__line-spark" />}
          </div>

          {/* Nodes */}
          <div className="timeline__nodes">
            {milestones.map((ms, i) => (
              <motion.div
                key={ms.year}
                className={`timeline__node${active === i ? ' timeline__node--active' : ''}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
              >
                {/* Multi-ring node */}
                <div className="timeline__node-core">
                  <span className="timeline__node-halo" />
                  <span className="timeline__node-orbit" />
                  <span className="timeline__node-ring" />
                  <span className="timeline__node-center" />
                </div>

                {/* Year */}
                <span className="timeline__node-year">{ms.year}</span>

                {/* Tooltip */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      className="timeline__tooltip"
                      initial={{ opacity: 0, y: 12, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="timeline__tooltip-glow" />
                      <div className="timeline__tooltip-bar" />
                      <span className="timeline__tooltip-year">{ms.year}</span>
                      <p className="timeline__tooltip-text">{t(ms.key)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
