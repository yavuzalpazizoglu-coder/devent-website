import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      {/* Video Background */}
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay loop muted playsInline poster="/images/hero.png">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero__title">
            Etkinliklerinizi
            <br />
            <span className="hero__title-accent">Mükemmelliğe</span>
            <br />
            Taşıyoruz
          </h1>
          <p className="hero__desc">
            1999'dan bu yana 872+ etkinlik ve 868+ kongre deneyimimizle,
            organizasyonlarınızı uluslararası standartlarda planlıyor ve yönetiyoruz.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
              <span>Teklif Alın</span>
            </a>
            <a href="#projects" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); }}>
              <span>Projelerimiz</span>
            </a>
          </div>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">872+</span>
            <span className="hero__stat-label">Etkinlik</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Yıl Deneyim</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Memnuniyet</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Aşağı Kaydırın</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
