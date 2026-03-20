import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiClipboardList, HiColorSwatch, HiCurrencyDollar, HiTruck, HiUserGroup, HiDocumentReport } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './Workflow.css';

const stepIcons = [
  <HiClipboardList />, <HiColorSwatch />, <HiCurrencyDollar />,
  <HiTruck />, <HiUserGroup />, <HiDocumentReport />
];
const stepColors = ['#f5a623', '#00aeef', '#22c55e', '#e0334c', '#c084fc', '#f97316'];

export default function Workflow() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const steps = [1,2,3,4,5,6].map(i => ({
    icon: stepIcons[i-1],
    color: stepColors[i-1],
    title: t(`wf${i}.title`),
    desc: t(`wf${i}.desc`),
    kpi: t(`wf${i}.kpi`),
  }));

  return (
    <section id="workflow" className="workflow section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="workflow__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>{t('workflow.label')}</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('workflow.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto' }}>
            {t('workflow.desc')}
          </p>
        </motion.div>

        <div className="workflow__grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="workflow__step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
            >
              <div className="workflow__step-number">
                <span>0{i + 1}</span>
              </div>
              <div className="workflow__step-icon" style={{ color: step.color, background: `${step.color}12` }}>
                {step.icon}
              </div>
              <h3 className="workflow__step-title">{step.title}</h3>
              <p className="workflow__step-desc">{step.desc}</p>
              <div className="workflow__step-kpi">
                <span className="workflow__step-kpi-dot" style={{ background: step.color }} />
                {step.kpi}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
