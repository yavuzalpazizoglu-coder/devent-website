import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Workflow.css';

const steps = ['wf1', 'wf2', 'wf3', 'wf4', 'wf5'];

export default function Workflow() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="workflow section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="workflow__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('workflow.title')}</h2>
        </motion.div>

        <div className="workflow__grid">
          {steps.map((key, i) => (
            <motion.div
              key={key}
              className="workflow__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
            >
              <span className="workflow__card-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="workflow__card-line" />
              <h3 className="workflow__card-title">{t(`${key}.title`)}</h3>
              <p className="workflow__card-desc">{t(`${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
