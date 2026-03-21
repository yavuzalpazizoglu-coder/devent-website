import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOfficeBuilding, HiPresentationChartBar, HiGlobe, HiLocationMarker } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './References.css';

const stats = [
  { key: 'congress', num: 868, color: '#f5a623', icon: <HiOfficeBuilding /> },
  { key: 'events', num: 872, color: '#00aeef', icon: <HiPresentationChartBar /> },
  { key: 'international', num: 45, color: '#e0334c', icon: <HiGlobe /> },
  { key: 'cities', num: 30, color: '#22c55e', icon: <HiLocationMarker /> },
];

export default function References() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="references" className="references section-padding">
      <div className="container" ref={ref}>
        <motion.div className="references__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('ref.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto' }}>{t('ref.desc')}</p>
        </motion.div>

        <div className="references__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              className="references__card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            >
              <div className="references__card-icon" style={{ color: stat.color, background: `${stat.color}12` }}>
                {stat.icon}
              </div>
              <span className="references__card-num" style={{ color: stat.color }}>{stat.num}+</span>
              <span className="references__card-label">{t(`ref.${stat.key}`)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
