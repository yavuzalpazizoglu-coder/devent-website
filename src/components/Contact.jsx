import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiMail, HiPaperAirplane } from 'react-icons/hi';
import './Contact.css';

const contactInfo = [
  { icon: <HiLocationMarker />, label: 'Adres', value: 'İstanbul, Türkiye', color: '#e63946' },
  { icon: <HiPhone />, label: 'Telefon', value: '+90 (212) 555 00 00', color: '#00d4ff' },
  { icon: <HiMail />, label: 'E-posta', value: 'info@devent.com.tr', color: '#f4a261' },
];

export default function Contact() {
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
        <div className="contact__layout">
          {/* Left — Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">İletişim</span>
            <h2 className="section-title">
              Bir Sonraki
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Projeyi</span>
              <br />
              Konuşalım
            </h2>
            <p className="section-subtitle">
              Etkinliğiniz için ücretsiz danışmanlık ve teklif almak için bize ulaşın.
            </p>

            <div className="contact__cards">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__card">
                  <div className="contact__card-icon" style={{ color: item.color, background: `${item.color}12` }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="contact__card-label">{item.label}</span>
                    <span className="contact__card-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                className="contact__success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="contact__success-icon">✓</div>
                <h3>Mesajınız Alındı!</h3>
                <p>En kısa sürede dönüş yapacağız.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="contact__form-title">Bize Yazın</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Ad Soyad</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız Soyadınız" required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Telefon</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+90 (___) ___ __ __" />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Etkinliğiniz hakkında detay verin..." required />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  <span><HiPaperAirplane style={{ transform: 'rotate(90deg)', marginRight: 8 }} />Gönder</span>
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>

      <div className="contact__bg-text stroke-text">CONTACT</div>
    </section>
  );
}
