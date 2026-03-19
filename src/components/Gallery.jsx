import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const projects = [
  {
    title: 'Global Kongre',
    subtitle: 'Uluslararası Tıp Kongresi',
    img: '/images/hero.png',
    tag: 'Kongre',
    year: '2024',
  },
  {
    title: 'Gala Night',
    subtitle: 'Yılın En Büyük Gala Yemeği',
    img: '/images/gala.png',
    tag: 'Sosyal',
    year: '2024',
  },
  {
    title: 'Tech Summit',
    subtitle: 'İnovasyon & Teknoloji Zirvesi',
    img: '/images/speaker.png',
    tag: 'Konferans',
    year: '2023',
  },
  {
    title: 'Trade Expo',
    subtitle: 'Uluslararası Ticaret Fuarı',
    img: '/images/exhibition.png',
    tag: 'Fuar',
    year: '2023',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="projects__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Projelerimiz
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Öne Çıkan
            <br />
            Etkinlikler
          </motion.h2>
        </div>

        {/* Asymmetric grid — like the reference */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`projects__card projects__card--${i + 1}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="projects__card-img magnetic-img">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="projects__card-overlay">
                  <span className="projects__card-view">Detay →</span>
                </div>
              </div>
              <div className="projects__card-info">
                <div className="projects__card-meta">
                  <span className="projects__card-tag">{project.tag}</span>
                  <span className="projects__card-year">{project.year}</span>
                </div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-subtitle">{project.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Big background text */}
      <div className="projects__bg-text stroke-text">WORKS</div>
    </section>
  );
}
