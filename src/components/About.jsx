import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiLightningBolt, HiGlobe, HiUserGroup } from 'react-icons/hi';
import './About.css';

const features = [
  { icon: <HiShieldCheck />, title: 'Sıfır Hata Prensibi', desc: 'Her detay titizlikle planlanır ve uygulanır.' },
  { icon: <HiLightningBolt />, title: 'Hızlı Çözümler', desc: 'Anlık kriz yönetimi ve çözüm üretme kapasitesi.' },
  { icon: <HiGlobe />, title: 'Global Deneyim', desc: 'Uluslararası standartlarda etkinlik organizasyonu.' },
  { icon: <HiUserGroup />, title: 'Uzman Kadro', desc: '25+ yıllık tecrübeye sahip profesyonel ekip.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="about section-padding">
      <div className="container" ref={ref}>
        <div className="about__grid">
          {/* Left — Image / Visual */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="about__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80"
                alt="D Event Etkinlik"
                className="about__image"
              />
              <div className="about__image-accent" />
            </div>
            <div className="about__experience-badge glass-card">
              <span className="about__experience-number">25+</span>
              <span className="about__experience-text">Yıllık<br/>Deneyim</span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="about__content">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Hakkımızda
            </motion.span>

            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              D Event Yaklaşımı
            </motion.h2>

            <motion.p
              className="section-subtitle about__text"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Etkinlik ve kongre yönetiminde Türkiye'nin lider markası olarak,
              her organizasyonu bir sanat eseri gibi tasarlıyoruz. Proje yönetimi,
              finans ve risk yönetimi alanlarında uzmanlaşmış ekibimizle,
              markanızı en iyi şekilde temsil ediyoruz.
            </motion.p>

            <div className="about__features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="about__feature glass-card"
                  custom={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                >
                  <div className="about__feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="about__feature-title">{f.title}</h4>
                    <p className="about__feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
