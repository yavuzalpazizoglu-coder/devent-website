import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="hero">
      {/* Floating decorative elements */}
      <div className="hero__deco hero__deco--1" />
      <div className="hero__deco hero__deco--2" />
      <div className="hero__deco hero__deco--3" />

      {/* Giant stroke text background */}
      <motion.div className="hero__stroke-text" style={{ y: imgY }}>
        <span>EVENT</span>
      </motion.div>

      <div className="hero__content">
        {/* Left column — Text */}
        <motion.div className="hero__text" style={{ y: textY, opacity }}>
          <motion.div
            className="hero__tag"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="hero__tag-dot" />
            Etkinlik & Kongre Yönetimi
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Her Zaman
            <br />
            <span className="hero__title-accent">Planladığınız</span>
            <br />
            Gibi!
          </motion.h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            872+ etkinlik ve 868+ kongre deneyimimizle,
            organizasyonlarınızı mükemmelliğe taşıyoruz.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>Teklif Alın</span>
            </a>
            <a href="#projects" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Projelerimiz
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-num">872+</span>
              <span className="hero__stat-label">Etkinlik</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">25+</span>
              <span className="hero__stat-label">Yıl</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Memnuniyet</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column — Overlapping images */}
        <div className="hero__visuals">
          <motion.div
            className="hero__img hero__img--main magnetic-img"
            style={{ y: imgY, scale: imgScale }}
            initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/hero.png" alt="D Event Kongre" />
          </motion.div>

          <motion.div
            className="hero__img hero__img--floating magnetic-img"
            initial={{ opacity: 0, x: 60, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/gala.png" alt="D Event Gala" />
          </motion.div>

          <motion.div
            className="hero__img hero__img--small magnetic-img"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <img src="/images/abstract.png" alt="D Event Brand" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-line" />
        <span>Kaydırın</span>
      </motion.div>

      {/* Vertical side text */}
      <div className="vertical-text" style={{ right: '2rem', top: '50%', transform: 'translateY(-50%)' }}>
        D EVENT — SİNCE 1999
      </div>
    </section>
  );
}
