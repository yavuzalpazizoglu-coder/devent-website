import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaDesktop, FaBuilding } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container" ref={ref}>
        <motion.div className="contact__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 className="section-title">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">{t('contact.desc')}</p>
        </motion.div>

        <div className="contact__layout">
          <motion.div className="contact__left" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="contact__brand-message">
               <h3 className="contact__brand-title">{t('contact.title')}</h3>
               <p className="contact__brand-desc">{t('contact.desc')}</p>
            </div>

            <div className="contact__info-grid">
              <div className="contact__info-item">
                <div className="contact__info-icon" style={{ color: '#e0334c', background: '#e0334c15' }}><HiLocationMarker /></div>
                <div>
                  <span className="contact__info-label">{t('contact.address.label')}</span>
                  <span className="contact__info-value">{t('contact.address')}</span>
                </div>
              </div>
              
              <div className="contact__info-item">
                <div className="contact__info-icon" style={{ color: '#00aeef', background: '#00aeef15' }}><HiPhone /></div>
                <div>
                  <span className="contact__info-label">{t('contact.phone.label')}</span>
                  <a href="tel:+902165731836" className="contact__info-value link">+90 (216) 573 18 36</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon" style={{ color: '#f5a623', background: '#f5a62315' }}><HiMail /></div>
                <div>
                  <span className="contact__info-label">{t('contact.email.label')}</span>
                  <a href="mailto:devent@devent.com.tr" className="contact__info-value link">{t('contact.email')}</a>
                </div>
              </div>
            </div>

            <div className="contact__platforms">
              <span className="contact__platforms-title">{t('contact.platforms.title')}</span>
              <div className="contact__platforms-list">
                <a href="https://www.linkedin.com/company/2784340/" target="_blank" rel="noopener noreferrer" className="platform-btn linkedin">
                  <FaLinkedin className="platform-btn-icon" />
                  <span>{t('contact.platforms.linkedin')}</span>
                </a>
                <a href="https://dijitalislemmerkezi.com/login" target="_blank" rel="noopener noreferrer" className="platform-btn digital">
                  <FaDesktop className="platform-btn-icon" />
                  <span>{t('nav.digitalCenter')}</span>
                </a>
                <a href="https://devent-online.com/auth/login" target="_blank" rel="noopener noreferrer" className="platform-btn hotel">
                  <FaBuilding className="platform-btn-icon" />
                  <span>{t('nav.hotelCenter')}</span>
                </a>
              </div>
            </div>

          </motion.div>

          <motion.form className="contact__form glass-card" onSubmit={handleSubmit} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.7 }}>
            {submitted ? (
              <motion.div className="contact__success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="contact__success-icon">✓</div>
                <h3>{t('contact.form.success.title')}</h3>
                <p>{t('contact.form.success.desc')}</p>
              </motion.div>
            ) : (
              <>
                <h3 className="contact__form-title">{t('contact.form.title')}</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePh')} required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">{t('contact.email.label')}</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPh')} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePh')} />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder={t('contact.form.messagePh')} required />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  <span>{t('contact.form.submit')}</span>
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
