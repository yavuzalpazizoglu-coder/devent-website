import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Stats.css';

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  useEffect(() => {
    if (!inView) return;
    const duration = 2500;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: 872, suffix: '+', label: t('stats.events'), desc: t('stats.events.desc') },
    { number: 868, suffix: '+', label: t('stats.congress'), desc: t('stats.congress.desc') },
    { number: 13, suffix: '+', label: t('stats.years'), desc: t('stats.years.desc') },
    { number: 100, suffix: '%', label: t('stats.satisfaction'), desc: t('stats.satisfaction.desc') },
  ];

  return (
    <section className="stats section-padding">
      <div className="container" ref={ref}>
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className="stats__item" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}>
              <div className="stats__item-number">
                <Counter target={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              <h3 className="stats__item-label">{stat.label}</h3>
              <p className="stats__item-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
