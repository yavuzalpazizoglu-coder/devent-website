import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineCalendar, HiOutlineCurrencyDollar, HiOutlineLocationMarker, HiOutlineMusicNote, HiOutlineDesktopComputer, HiOutlineTruck } from 'react-icons/hi';
import './Services.css';

const services = [
  { icon: <HiOutlineCalendar />, title: 'Proje Yönetimi', desc: 'Etkinliğinizin A\'dan Z\'ye planlanması ve sorunsuz yürütülmesi.', color: '#f5a623' },
  { icon: <HiOutlineCurrencyDollar />, title: 'Finans Yönetimi', desc: 'Bütçe optimizasyonu ve şeffaf finansal raporlama.', color: '#00aeef' },
  { icon: <HiOutlineLocationMarker />, title: 'Mekan & Konaklama', desc: 'Etkinlik mekanı seçimi, otel ve transfer yönetimi.', color: '#e0334c' },
  { icon: <HiOutlineMusicNote />, title: 'Sosyal Aktiviteler', desc: 'Gala yemekleri, konser ve eğlence programları.', color: '#8e44ad' },
  { icon: <HiOutlineDesktopComputer />, title: 'Dijital Çözümler', desc: 'Online kayıt, mobil uygulama ve canlı yayın.', color: '#2ecc71' },
  { icon: <HiOutlineTruck />, title: 'Lojistik Yönetim', desc: 'Ekipman tedariki ve operasyonel lojistik.', color: '#e67e22' },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="services section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Hizmetlerimiz</span>
          <h2 className="section-title">Ne Yapıyoruz?</h2>
          <p className="section-subtitle">
            Her ölçekteki etkinliğiniz için kapsamlı ve profesyonel çözümler üretiyoruz.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="services__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
            >
              <div className="services__card-icon" style={{ color: s.color, background: `${s.color}12` }}>
                {s.icon}
              </div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
