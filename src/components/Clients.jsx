import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Clients.css';

const clients = [
  { name: 'Bristol Myers Squibb', initial: 'BMS' },
  { name: 'AbbVie', initial: 'AV' },
  { name: 'Pfizer', initial: 'PF' },
  { name: 'Sanofi', initial: 'SN' },
  { name: 'AstraZeneca', initial: 'AZ' },
  { name: 'Hyundai', initial: 'HY' },
  { name: 'PPD / Thermo Fisher', initial: 'PPD' },
  { name: 'T.C. Sağlık Bakanlığı', initial: 'SB' },
  { name: 'EnerjiSA', initial: 'ES' },
  { name: 'Blackboard', initial: 'BB' },
  { name: 'BİEM İlaç', initial: 'Bİ' },
  { name: 'Türk Hematoloji Derneği', initial: 'THD' },
];

export default function Clients() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="clients section-padding">
      <div className="container" ref={ref}>
        <motion.div className="clients__header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>

        </motion.div>

        <div className="clients__grid">
          {clients.map((c, i) => (
            <motion.div key={c.name} className="clients__item" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}>
              <span className="clients__item-initial">{c.initial}</span>
              <span className="clients__item-name">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
