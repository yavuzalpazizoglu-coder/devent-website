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
          <p className="clients__subtitle">Güvenilir kurumlarla birlikte çalışıyoruz</p>
        </motion.div>

        <div className="clients__track">
          <motion.div
            className="clients__scroll"
            animate={{ x: [0, -50 * clients.length * 2] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="clients__logo glass-card">
                <span className="clients__logo-initial">{client.initial}</span>
                <span className="clients__logo-name">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
