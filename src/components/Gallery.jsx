import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const projects = [
  { title: 'Global Kongre', subtitle: 'Uluslararası Tıp Kongresi', img: '/images/hero.png', tag: 'Kongre', year: '2024' },
  { title: 'Gala Night', subtitle: 'Yılın En Büyük Gala Yemeği', img: '/images/gala.png', tag: 'Sosyal', year: '2024' },
  { title: 'Tech Summit', subtitle: 'İnovasyon & Teknoloji Zirvesi', img: '/images/speaker.png', tag: 'Konferans', year: '2023' },
  { title: 'Trade Expo', subtitle: 'Uluslararası Ticaret Fuarı', img: '/images/exhibition.png', tag: 'Fuar', year: '2023' },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Projelerimiz</span>
          <h2 className="section-title">Öne Çıkan Etkinlikler</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="projects__card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="projects__card-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="projects__card-overlay">
                  <span className="projects__card-view">Detay Gör →</span>
                </div>
              </div>
              <div className="projects__card-info">
                <div className="projects__card-meta">
                  <span className="projects__card-tag">{p.tag}</span>
                  <span className="projects__card-year">{p.year}</span>
                </div>
                <h3 className="projects__card-title">{p.title}</h3>
                <p className="projects__card-subtitle">{p.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
