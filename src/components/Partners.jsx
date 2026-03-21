import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Partners.css';

const partners = [
  { name: 'T.C. Kültür ve Turizm Bakanlığı', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/t.c.kultur-bakanligi-2.png', url: 'https://ktb.gov.tr' },
  { name: 'TÜRSAB', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/tursab-2.png', url: 'https://tursab.org.tr' },
  { name: 'ICVB Istanbul', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/istanbul-2.png', url: 'https://icvb.org.tr' },
  { name: 'SITE Turkey', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/site-turkey-2.png', url: 'https://site-turkey.org' }
];

export default function Partners() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="partners" style={{ padding: '3rem 0', background: 'var(--bg-primary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" ref={ref}>
        <div className="partners__grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
          {partners.map((p, i) => (
            <motion.a 
              key={p.name} 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ opacity: 0.6, transition: 'opacity 0.3s ease', display: 'block' }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'}
            >
              <img src={p.logo} alt={p.name} style={{ height: '40px', objectFit: 'contain', filter: 'grayscale(100%) brightness(200%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
