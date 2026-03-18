import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiCalendar,
  HiCurrencyDollar,
  HiLocationMarker,
  HiMusicNote,
  HiDesktopComputer,
  HiTruck,
} from 'react-icons/hi';
import './Services.css';

const services = [
  {
    icon: <HiCalendar />,
    title: 'Proje Yönetimi',
    desc: 'Etkinliğinizin A\'dan Z\'ye planlanması, koordinasyonu ve sorunsuz yürütülmesi.',
    color: '#e63946',
  },
  {
    icon: <HiCurrencyDollar />,
    title: 'Finans Yönetimi',
    desc: 'Bütçe optimizasyonu, maliyet kontrolü ve şeffaf finansal raporlama.',
    color: '#f4a261',
  },
  {
    icon: <HiLocationMarker />,
    title: 'Mekan & Konaklama',
    desc: 'Etkinlik mekanı seçimi, otel yönetimi ve transfer planlaması.',
    color: '#00d4ff',
  },
  {
    icon: <HiMusicNote />,
    title: 'Sosyal Aktiviteler',
    desc: 'Gala yemekleri, konser organizasyonu ve eğlence programları.',
    color: '#7c3aed',
  },
  {
    icon: <HiDesktopComputer />,
    title: 'Dijital Çözümler',
    desc: 'Online kayıt sistemleri, mobil uygulama ve canlı yayın hizmetleri.',
    color: '#22c55e',
  },
  {
    icon: <HiTruck />,
    title: 'Lojistik Yönetim',
    desc: 'Ekipman tedariki, teknik altyapı ve operasyonel lojistik.',
    color: '#ec4899',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="services" className="services section-padding">
      <div className="container" ref={ref}>
        <div className="services__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Hizmetlerimiz
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Kapsamlı Etkinlik Çözümleri
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Her ölçekteki etkinliğiniz için uçtan uca hizmet sunuyoruz.
          </motion.p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="services__card glass-card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div
                className="services__card-icon"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <div className="services__card-arrow">→</div>
              <div
                className="services__card-glow"
                style={{ background: `radial-gradient(circle at bottom right, ${service.color}10, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
