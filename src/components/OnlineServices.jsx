import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './OnlineServices.css';

const platforms = [
  { key: 'otp', url: 'https://devent-online.com', color: '#f5a623', label: 'Otel Teklif Platformu', logo: '/images/logo.png' },
  { key: 'dim', url: 'https://dijitalislemmerkezi.com', color: '#00aeef', label: 'Dijital İşlem Merkezi', logo: '/images/logo.png' },
  { key: 'digital', url: 'https://deventdigital.com', color: '#e0334c', label: 'D Event Digital', logo: '/images/logo.png' },
  { key: 'vocal', url: 'https://vocal-dijital.com', color: '#8e44ad', label: 'Vocal Digital Agency', logo: '/images/vocal-logo.png' },
];

export default function OnlineServices() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="online-services" className="online-services section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="online-services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('online.title')}</h2>
          <p className="online-services__tagline">{t('online.tagline')}</p>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }}>
            {t('online.desc')}
          </p>
        </motion.div>

        <div className="online-services__grid">
          {platforms.map((p, i) => (
            <motion.a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
              style={{ '--platform-color': p.color }}
            >
              <div className="platform-card__logo-area">
                <img src={p.logo} alt={p.label} className={`platform-card__logo${p.key === 'vocal' ? ' platform-card__logo--vocal' : ''}`} />
              </div>
              <h3 className="platform-card__name">{p.label}</h3>
              <span className="platform-card__domain">{t(`online.${p.key}.domain`)}</span>
              <p className="platform-card__desc">{t(`online.${p.key}.desc`)}</p>
              <span className="platform-card__arrow">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
