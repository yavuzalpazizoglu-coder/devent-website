import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="contact section-padding">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('contact.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
            {t('contact.cta')}
          </p>
        </motion.div>

        {/* Company identity */}
        <motion.div
          className="contact__brand"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img src="/images/logo.png" alt="D Event" className="contact__brand-logo" />
          <span className="contact__brand-name">{t('contact.brand.name')}</span>
          <span className="contact__brand-tagline">{t('contact.brand.tagline')}</span>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.6 }}
        >
          <div className="contact__info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>{t('contact.address')}</span>
          </div>
          <span className="contact__info-dot" />
          <div className="contact__info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <a href="tel:+902165731836">{t('contact.phone')}</a>
          </div>
          <span className="contact__info-dot" />
          <div className="contact__info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            <a href="mailto:devent@devent.com.tr">{t('contact.email')}</a>
          </div>
        </motion.div>

        {/* ── Platformlarımız ── */}
        <motion.div
          className="contact__section"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="contact__section-title">{t('contact.section.platforms')}</h3>
          <div className="contact__cards contact__cards--2">
            <a href="https://dijitalislemmerkezi.com/login" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-logo-wrap">
                <img src="/images/dijital-islem-merkezi.png" alt={t('nav.digitalCenter')} className="contact__card-logo" />
              </div>
              <span className="contact__card-name">{t('nav.digitalCenter')}</span>
              <span className="contact__card-desc">{t('contact.platform.dim.desc')}</span>
            </a>
            <a href="https://devent-online.com/auth/login" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-logo-wrap">
                <img src="/images/otel-teklif-platformu.png" alt={t('nav.hotelCenter')} className="contact__card-logo" />
              </div>
              <span className="contact__card-name">{t('nav.hotelCenter')}</span>
              <span className="contact__card-desc">{t('contact.platform.otp.desc')}</span>
            </a>
          </div>
        </motion.div>

        {/* ── Kardeş Kuruluşumuz ── */}
        <motion.div
          className="contact__section"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="contact__section-title">{t('contact.section.sister')}</h3>
          <div className="contact__cards contact__cards--1">
            <div className="contact__card contact__card--sister">
              <div className="contact__card-logo-wrap">
                <img src="/images/vocal-logo.png" alt={t('contact.sister.name')} className="contact__card-logo" />
              </div>
              <span className="contact__card-name">{t('contact.sister.name')}</span>
              <span className="contact__card-tag">{t('contact.sister.tag')}</span>
              <span className="contact__card-desc">{t('contact.sister.desc')}</span>
              <div className="contact__card-meta">
                <span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {t('contact.sister.address')}
                </span>
                <span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {t('contact.sister.phone')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Sosyal Ağlarımız ── */}
        <motion.div
          className="contact__section contact__section--social"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="contact__section-title">{t('contact.section.social')}</h3>
          <div className="contact__socials">
            <a href="https://www.linkedin.com/company/2784340/" target="_blank" rel="noopener noreferrer" className="contact__social-card contact__social-card--li">
              <div className="contact__social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <span className="contact__social-name">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/deventsocial/" target="_blank" rel="noopener noreferrer" className="contact__social-card contact__social-card--ig">
              <div className="contact__social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <span className="contact__social-name">Instagram</span>
            </a>
            <a href="https://www.youtube.com/channel/UChrwk4FXjn_U0a2Agtm4FJQ" target="_blank" rel="noopener noreferrer" className="contact__social-card contact__social-card--yt">
              <div className="contact__social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <span className="contact__social-name">YouTube</span>
            </a>
            <a href="https://x.com/deventsocial" target="_blank" rel="noopener noreferrer" className="contact__social-card contact__social-card--x">
              <div className="contact__social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span className="contact__social-name">X</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
