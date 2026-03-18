import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const stats = [
  { number: 872, suffix: '+', label: 'Etkinlik', desc: 'Başarıyla tamamlanan etkinlik' },
  { number: 868, suffix: '+', label: 'Kongre', desc: 'Organize edilen kongre' },
  { number: 25, suffix: '+', label: 'Yıl', desc: 'Sektör deneyimi' },
  { number: 100, suffix: '%', label: 'Memnuniyet', desc: 'Müşteri memnuniyeti' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="stats" className="stats section-padding">
      <div className="stats__bg-glow" />
      <div className="container" ref={ref}>
        <div className="stats__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Rakamlarla Biz
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Deneyimimiz Konuşuyor
          </motion.h2>
        </div>

        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
            >
              <div className="stats__card-number">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              <h3 className="stats__card-label">{stat.label}</h3>
              <p className="stats__card-desc">{stat.desc}</p>
              <div className="stats__card-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
