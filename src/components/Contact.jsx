import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

const memberships = [
  { name: 'ICVB Istanbul', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/istanbul-2.png', url: 'https://icvb.org' },
  { name: 'TÜRSAB', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/tursab-2.png', url: 'https://tursab.org.tr' },
  { name: 'SITE Turkey', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/site-turkey-2.png', url: 'https://siteglobal.com' },
  { name: 'T.C. Kültür ve Turizm Bakanlığı', logo: 'http://devent.com.tr/wp-content/uploads/2025/12/t.c.kultur-bakanligi-2.png', url: 'https://ktb.gov.tr' },
];

const socialLinks = [
  { name: 'Instagram', handle: '@deventsocial', url: 'https://www.instagram.com/deventsocial/', color: '#E1306C', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { name: 'LinkedIn', handle: 'D Event', url: 'https://www.linkedin.com/company/d-event-turizm-organizasyon', color: '#0A66C2', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'YouTube', handle: 'D Event', url: 'https://www.youtube.com/channel/UChrwk4FXjn_U0a2Agtm4FJQ', color: '#FF0000', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'X', handle: '@deventsocial', url: 'https://x.com/deventsocial', color: '#fff', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function Contact() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="contact" className="contact section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('contact.title')}</h2>
        </motion.div>

        <motion.div
          className="contact__info contact__info--centered"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h3 className="contact__company">{t('contact.company')}</h3>
          <div className="contact__details">
            <div className="contact__detail">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{t('contact.address')}</span>
            </div>
            <div className="contact__detail">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:+902165731836">{t('contact.phone')}</a>
            </div>
            <div className="contact__detail">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              <a href="mailto:info@devent.com.tr">{t('contact.email')}</a>
            </div>
            <div className="contact__detail">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              <a href="https://devent.com.tr" target="_blank" rel="noopener noreferrer">{t('contact.web')}</a>
            </div>
          </div>

          <div className="contact__social">
            {socialLinks.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="contact__social-link" style={{ '--social-color': s.color }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                <span>{s.name}</span>
              </a>
            ))}
          </div>

          <div className="contact__memberships-inline">
            <div className="contact__memberships-logos">
              {memberships.map(m => (
                <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className="contact__membership-item" title={m.name}>
                  <img src={m.logo} alt={m.name} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
