import { HiHeart } from 'react-icons/hi';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './Footer.css';

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/deventsocial/', label: 'Instagram' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UChrwk4FXjn_U0a2Agtm4FJQ', label: 'YouTube' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const { t, lang } = useLang();
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const footerLinks = [
    { title: t('footer.col1'), links: lang === 'tr' ? ['Hakkımızda', 'Ekibimiz', 'Kariyer', 'Blog'] : ['About Us', 'Our Team', 'Careers', 'Blog'] },
    { title: t('footer.col2'), links: lang === 'tr' ? ['Kongre Yönetimi', 'Etkinlik Planlama', 'Dijital Çözümler', 'Lojistik'] : ['Congress Management', 'Event Planning', 'Digital Solutions', 'Logistics'] },
    { title: t('footer.col3'), links: lang === 'tr' ? ['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK', 'Çerez Politikası'] : ['Privacy Policy', 'Terms of Use', 'GDPR', 'Cookie Policy'] },
  ];

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <h2 className="footer__cta-title">
            {t('footer.cta.title1')} <span>{t('footer.cta.accent')}</span> {t('footer.cta.title2')}
          </h2>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
            <span>{t('footer.cta.btn')}</span>
          </a>
        </div>
      </div>

      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/images/logo.png" alt="D Event" className="footer__logo-img" />
            </a>
            <p className="footer__brand-desc">{t('footer.desc')}</p>
            <div className="footer__social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

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
          <p>© {new Date().getFullYear()} D Event Turizm Organizasyon A.Ş.</p>
          <p className="footer__credit">{t('footer.credit')} <HiHeart className="footer__heart" /> in İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
