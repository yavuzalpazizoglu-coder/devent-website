import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Services.css';

export default function Services() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [1, 2, 3, 4, 5, 6].map(i => ({
    num: String(i).padStart(2, '0'),
    title: t(`svc${i}.title`),
    desc: t(`svc${i}.desc`),
  }));

  return (
    <section id="services" className="services section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('services.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            {t('services.desc')}
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              className="services__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
            >
              <span className="services__card-num">{svc.num}</span>
              <div className="services__card-line" />
              <h4 className="services__card-title">{svc.title}</h4>
              <p className="services__card-desc">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
