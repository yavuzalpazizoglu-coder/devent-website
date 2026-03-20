import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import { FaGlobe, FaUsers } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './About.css';

const featureIcons = [
  <HiCheckCircle />, <HiLightningBolt />, <FaGlobe />, <FaUsers />
];
const featureColors = ['#22c55e', '#f5a623', '#e0334c', '#00aeef'];

export default function About() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const features = [1,2,3,4].map(i => ({
    icon: featureIcons[i-1],
    color: featureColors[i-1],
    title: t(`about.feat${i}.title`),
    desc: t(`about.feat${i}.desc`),
  }));

  return (
    <section id="about" className="about section-padding">
      <div className="container about__layout" ref={ref}>
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__img-stack">
            <img src="/images/speaker.png" alt="Speaker" className="about__img about__img--main" loading="lazy" />
            <img src="/images/exhibition.png" alt="Exhibition" className="about__img about__img--overlay" loading="lazy" />
            <div className="about__badge">
              <span className="about__badge-number">13+</span>
              <span className="about__badge-text">{t('about.badge')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.desc')}</p>

          <div className="about__features">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="about__feature"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
              >
                <div className="about__feature-icon" style={{ color: feat.color, background: `${feat.color}12` }}>
                  {feat.icon}
                </div>
                <div>
                  <h4 className="about__feature-title">{feat.title}</h4>
                  <p className="about__feature-desc">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
