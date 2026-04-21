import { motion } from 'framer-motion';
import LinkedInCards from './LinkedInCards';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay loop muted playsInline>
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      <motion.div
        className="hero__cards-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <LinkedInCards />
      </motion.div>
    </section>
  );
}
