import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCalendar, HiCurrencyDollar, HiLocationMarker } from 'react-icons/hi';
import { FaMusic, FaLaptop, FaTruckMoving } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './Services.css';

const serviceIcons = [
  <HiCalendar />, <HiCurrencyDollar />, <HiLocationMarker />,
  <FaMusic />, <FaLaptop />, <FaTruckMoving />
];
const serviceColors = ['#f5a623', '#22c55e', '#e0334c', '#c084fc', '#00aeef', '#f97316'];

export default function Services() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [1,2,3,4,5,6].map(i => ({
    icon: serviceIcons[i-1],
    color: serviceColors[i-1],
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
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem' }}>
            {t('services.desc')}
          </p>
        </motion.div>

        <div className="services__layout">
          <motion.div className="services__image-wrap" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7 }}>
            <img src="/images/linkedin/oncology-stage.jpg" alt="Kongre ve Etkinlik Yönetimi" className="services__image" loading="lazy" />
          </motion.div>

          <motion.div className="services__content" initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="services__list">
              {services.map((svc, i) => (
                <div key={svc.title} className="services__list-item">
                  <div className="services__list-icon" style={{ color: svc.color }}>{svc.icon}</div>
                  <div className="services__list-text">
                    <h4 className="services__list-title">{svc.title}</h4>
                    <p className="services__list-desc">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
