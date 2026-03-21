import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiTemplate, HiUserGroup, HiPlay, HiChartBar } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './Workflow.css';

const steps = [
  { key: 'wf1', icon: <HiLightBulb />, color: '#f5a623' },
  { key: 'wf2', icon: <HiTemplate />, color: '#00aeef' },
  { key: 'wf3', icon: <HiUserGroup />, color: '#22c55e' },
  { key: 'wf4', icon: <HiPlay />, color: '#e0334c' },
  { key: 'wf5', icon: <HiChartBar />, color: '#a855f7' },
];

export default function Workflow() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="workflow section-padding">
      <div className="container" ref={ref}>
        <motion.div className="workflow__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('workflow.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>{t('workflow.desc')}</p>
        </motion.div>

        <div className="workflow__timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              className="workflow__step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            >
              <div className="workflow__step-num" style={{ color: step.color }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="workflow__step-icon" style={{ color: step.color, background: `${step.color}15` }}>{step.icon}</div>
              <h3 className="workflow__step-title">{t(`${step.key}.title`)}</h3>
              <p className="workflow__step-desc">{t(`${step.key}.desc`)}</p>
              {i < steps.length - 1 && <div className="workflow__connector" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
