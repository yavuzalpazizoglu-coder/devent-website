import { motion } from 'framer-motion';
import { HiArrowDown, HiPlay } from 'react-icons/hi';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-image" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-gradient" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="hero__particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [null, -100, 800],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Türkiye'nin Lider Etkinlik Yönetimi Şirketi
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Her Zaman
          <br />
          <span className="hero__title-gradient">Planladığınız Gibi!</span>
        </motion.h1>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          872+ etkinlik ve 868+ kongre deneyimimizle, organizasyonlarınızı
          mükemmelliğe taşıyoruz. Sıfır hata prensibiyle, unutulmaz deneyimler
          yaratıyoruz.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#contact" className="btn-primary hero__btn" onClick={scrollToContact}>
            Teklif Alın
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" className="btn-outline hero__btn" onClick={scrollToAbout}>
            <HiPlay />
            Bizi Tanıyın
          </a>
        </motion.div>

        <motion.div
          className="hero__stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">872+</span>
            <span className="hero__stat-label">Etkinlik</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">868+</span>
            <span className="hero__stat-label">Kongre</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Yıl Deneyim</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown />
        </motion.div>
        <span>Keşfedin</span>
      </motion.div>
    </section>
  );
}
