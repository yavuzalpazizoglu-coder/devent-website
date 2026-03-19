import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiLightningBolt, HiGlobe, HiUserGroup } from 'react-icons/hi';
import './About.css';

const features = [
  { icon: <HiShieldCheck />, title: 'Sıfır Hata', desc: 'Her detay titizlikle planlanır ve uygulanır.', color: '#e63946' },
  { icon: <HiLightningBolt />, title: 'Hızlı Çözümler', desc: 'Anlık kriz yönetimi ve çözüm üretme.', color: '#f4a261' },
  { icon: <HiGlobe />, title: 'Global Deneyim', desc: 'Uluslararası standartlarda organizasyon.', color: '#00d4ff' },
  { icon: <HiUserGroup />, title: 'Uzman Kadro', desc: '25+ yıl tecrübeye sahip profesyonel ekip.', color: '#7c3aed' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="about section-padding">
      <div className="container" ref={ref}>
        <div className="about__grid">
          {/* Left — Overlapping images */}
          <div className="about__visuals">
            <motion.div
              className="about__img about__img--main magnetic-img"
              style={{ y: imgY }}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src="/images/speaker.png" alt="D Event Speaker" />
            </motion.div>
            <motion.div
              className="about__img about__img--accent magnetic-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img src="/images/exhibition.png" alt="D Event Fuar" />
            </motion.div>
            <motion.div
              className="about__experience"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <span className="about__experience-num">25+</span>
              <span className="about__experience-text">Yıllık<br />Deneyim</span>
            </motion.div>
          </div>

          {/* Right — Content */}
          <div className="about__content">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              Hakkımızda
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Benzersiz
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Deneyimler</span>
              <br />
              Yaratıyoruz
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              1999'dan bu yana uluslararası standartlarda etkinlik ve kongre
              organizasyonu hizmeti sunuyoruz. Her projemizde mükemmellik arayışımızı sürdürüyoruz.
            </motion.p>

            <div className="about__features">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="about__feature"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
                >
                  <div className="about__feature-icon" style={{ color: feature.color, background: `${feature.color}12` }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="about__feature-title">{feature.title}</h4>
                    <p className="about__feature-desc">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background text */}
      <div className="about__bg-text stroke-text">ABOUT</div>
    </section>
  );
}
