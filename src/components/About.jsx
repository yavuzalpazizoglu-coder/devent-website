import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle, HiLightningBolt, HiGlobe, HiUserGroup } from 'react-icons/hi';
import './About.css';

const features = [
  { icon: <HiCheckCircle />, title: 'Sıfır Hata', desc: 'Her detay titizlikle planlanır ve uygulanır.' },
  { icon: <HiLightningBolt />, title: 'Hızlı Çözümler', desc: 'Anlık kriz yönetimi ve çözüm üretme.' },
  { icon: <HiGlobe />, title: 'Global Deneyim', desc: 'Uluslararası standartlarda organizasyon.' },
  { icon: <HiUserGroup />, title: 'Uzman Kadro', desc: '25+ yıl tecrübeye sahip profesyonel ekip.' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="about section-padding">
      <div className="container" ref={ref}>
        <div className="about__layout">
          {/* Left — images */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__img-main">
              <img src="/images/speaker.png" alt="D Event konferans" />
            </div>
            <div className="about__img-secondary">
              <img src="/images/exhibition.png" alt="D Event fuar" />
            </div>
            <div className="about__badge">
              <span className="about__badge-number">25+</span>
              <span className="about__badge-label">Yıllık Deneyim</span>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Hakkımızda</span>
            <h2 className="section-title">
              Benzersiz Deneyimler
              <br />Yaratıyoruz
            </h2>
            <p className="section-subtitle">
              1999'dan bu yana uluslararası standartlarda etkinlik ve kongre organizasyonu hizmeti sunuyoruz.
              Her projemizde mükemmellik arayışımızı sürdürüyoruz.
            </p>

            <div className="about__features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="about__feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <div className="about__feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="about__feature-title">{f.title}</h4>
                    <p className="about__feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
