import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Partners.css';

const partners = [
  { name: 'T.C. Kültür ve Turizm Bakanlığı', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/t.c.kultur-bakanligi-2.png', url: 'https://ktb.gov.tr' },
  { name: 'TÜRSAB', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/tursab-2.png', url: 'https://tursab.org.tr' },
  { name: 'ICVB Istanbul', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/istanbul-2.png', url: 'https://icvb.org' },
  { name: 'SITE Turkey', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/site-turkey-2.png', url: 'https://siteglobal.com' }
];

export default function Partners() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="partners">
      <div className="container" ref={ref}>
        <div className="partners__grid">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partners__item"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <img src={p.logo} alt={p.name} className="partners__logo" />
              <span className="partners__name">{p.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
