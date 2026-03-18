import { HiHeart } from 'react-icons/hi';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/deventsocial/', label: 'Instagram' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UChrwk4FXjn_U0a2Agtm4FJQ', label: 'YouTube' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
];

const footerLinks = [
  { title: 'Şirket', links: ['Hakkımızda', 'Ekibimiz', 'Kariyer', 'Blog'] },
  { title: 'Hizmetler', links: ['Kongre Yönetimi', 'Etkinlik Planlama', 'Dijital Çözümler', 'Lojistik'] },
  { title: 'Yasal', links: ['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK', 'Çerez Politikası'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <div className="footer__logo-icon"><span>D</span></div>
              <span className="footer__logo-text">event</span>
            </a>
            <p className="footer__brand-desc">
              Etkinlik ve kongre yönetiminde Türkiye'nin lider markası.
              Her zaman planladığınız gibi!
            </p>
            <div className="footer__social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} D Event Turizm Organizasyon Hizmetleri A.Ş. Tüm hakları saklıdır.
          </p>
          <p className="footer__credit">
            Made with <HiHeart className="footer__heart" /> in İstanbul
          </p>
        </div>
      </div>
    </footer>
  );
}
