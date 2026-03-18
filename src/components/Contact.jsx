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
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
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
      <div className="contact__bg-glow" />
      <div className="container" ref={ref}>
        <div className="contact__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            İletişim
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Projenizi Konuşalım
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Etkinliğiniz için ücretsiz danışmanlık ve teklif almak için bize ulaşın.
          </motion.p>
        </div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__info-card glass-card">
                <div className="contact__info-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">{item.value}</span>
                </div>
              </div>
            ))}

            <div className="contact__map glass-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.7929590069!2d28.847252!3d41.00527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1695000000000!5m2!1str!2str"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.75rem', opacity: 0.7 }}
                allowFullScreen=""
                loading="lazy"
                title="D Event Konum"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                className="contact__success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="contact__success-icon">✓</div>
                <h3>Mesajınız Alındı!</h3>
                <p>En kısa sürede size dönüş yapacağız.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="contact__form-title">Bize Yazın</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Ad Soyad</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email">E-posta</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-phone">Telefon</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 (___) ___ __ __"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message">Mesajınız</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Etkinliğiniz hakkında detay verin..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  <HiPaperAirplane style={{ transform: 'rotate(90deg)' }} />
                  Gönder
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
