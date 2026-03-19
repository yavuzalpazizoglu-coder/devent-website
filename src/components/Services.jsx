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
  { icon: <HiCalendar />, title: 'Proje Yönetimi', desc: 'Etkinliğinizin A\'dan Z\'ye planlanması ve sorunsuz yürütülmesi.', color: '#e63946', num: '01' },
  { icon: <HiCurrencyDollar />, title: 'Finans Yönetimi', desc: 'Bütçe optimizasyonu ve şeffaf finansal raporlama.', color: '#f4a261', num: '02' },
  { icon: <HiLocationMarker />, title: 'Mekan & Konaklama', desc: 'Etkinlik mekanı seçimi, otel ve transfer yönetimi.', color: '#00d4ff', num: '03' },
  { icon: <HiMusicNote />, title: 'Sosyal Aktiviteler', desc: 'Gala yemekleri, konser ve eğlence programları.', color: '#7c3aed', num: '04' },
  { icon: <HiDesktopComputer />, title: 'Dijital Çözümler', desc: 'Online kayıt, mobil uygulama ve canlı yayın.', color: '#22c55e', num: '05' },
  { icon: <HiTruck />, title: 'Lojistik Yönetim', desc: 'Ekipman tedariki ve operasyonel lojistik.', color: '#ec4899', num: '06' },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="services section-padding">
      <div className="container" ref={ref}>
        <div className="services__layout">
          {/* Left — sticky header */}
          <div className="services__left">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              Hizmetlerimiz
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Ne
              <br />
              Yapıyoruz?
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Her ölçekteki etkinliğiniz için kapsamlı ve profesyonel çözümler üretiyoruz.
            </motion.p>
          </div>

          {/* Right — Service items */}
          <div className="services__list">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="services__item"
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="services__item-num">{s.num}</span>
                <div className="services__item-icon" style={{ color: s.color, background: `${s.color}12` }}>
                  {s.icon}
                </div>
                <div className="services__item-content">
                  <h3 className="services__item-title">{s.title}</h3>
                  <p className="services__item-desc">{s.desc}</p>
                </div>
                <span className="services__item-arrow">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
