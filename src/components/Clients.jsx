import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Clients.css';

const clients = [
  { name: 'T.C. Kültür Bakanlığı', initial: 'KB' },
  { name: 'TÜRSAB', initial: 'TS' },
  { name: 'İstanbul Kongre', initial: 'İK' },
  { name: 'Türkiye Turizm', initial: 'TT' },
  { name: 'Sağlık Bakanlığı', initial: 'SB' },
  { name: 'Uluslararası Kongre', initial: 'UK' },
];

export default function Clients() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="clients section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="clients__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>İş Ortaklarımız</span>
        </motion.div>

        <div className="clients__grid">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              className="clients__item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
            >
              <span className="clients__item-initial">{c.initial}</span>
              <span className="clients__item-name">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
