import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './References.css';

function Counter({ target, suffix = '+', active }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const duration = 2200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [active, target]);

  return <>{count.toLocaleString('tr-TR')}{suffix}</>;
}

const stats = [
  { key: 'total', num: 1740 },
  { key: 'events', num: 872 },
  { key: 'congress', num: 868 },
  { key: 'team', num: 62 },
  { key: 'international', num: 50 },
  { key: 'cities', num: 40 },
];

export default function References() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="references" className="references section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="references__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('ref.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto' }}>
            {t('ref.desc')}
          </p>
        </motion.div>

        <div className="references__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              className="references__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
            >
              <span className="references__card-num">
                <Counter target={stat.num} active={inView} />
              </span>
              <div className="references__card-line" />
              <span className="references__card-label">{t(`ref.${stat.key}`)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
