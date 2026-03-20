import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiMail, HiGlobe } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: <HiLocationMarker />, label: t('contact.address.label'), value: t('contact.address'), color: '#e0334c' },
    { icon: <HiPhone />, label: t('contact.phone.label'), value: t('contact.phone'), color: '#00aeef' },
    { icon: <HiMail />, label: t('contact.email.label'), value: t('contact.email'), color: '#f5a623' },
    { icon: <HiGlobe />, label: t('contact.web.label'), value: t('contact.web'), color: '#22c55e' },
  ];

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
          <span className="section-label">{t('contact.label')}</span>
          <h2 className="section-title">
            {t('contact.title1')} <span style={{ color: 'var(--color-primary)' }}>{t('contact.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('contact.desc')}</p>
        </motion.div>

        <div className="contact__layout">
          <motion.div className="contact__left" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="contact__cards">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__card">
                  <div className="contact__card-icon" style={{ color: item.color, background: `${item.color}12` }}>{item.icon}</div>
                  <div>
                    <span className="contact__card-label">{item.label}</span>
                    <span className="contact__card-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__map">
              <iframe
                title="D Event Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4!2d29.1!3d40.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5c29e47e4e7%3A0x0!2zxLDDp2VyZW5rw7Z5!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
