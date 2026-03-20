import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiOutlineDesktopComputer } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/images/logo.png" alt="D Event" className="navbar__logo-img" />
        </a>

        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__right">
          <button className="navbar__lang" onClick={toggleLang} aria-label="Change language">
            <span className={lang === 'tr' ? 'navbar__lang-active' : ''}>TR</span>
            <span className="navbar__lang-divider">/</span>
            <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
          </button>
          <a
            href="https://dijitalislemmerkezi.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 1.4rem' }}
          >
            <HiOutlineDesktopComputer style={{ fontSize: '1.4rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
               <span style={{ fontSize: '0.65rem', opacity: 0.9, fontWeight: '500', letterSpacing: '0.05em' }}>D EVENT</span>
               <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{t('nav.digitalCenter')}</span>
            </div>
          </a>
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </motion.a>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <button className="navbar__lang" onClick={toggleLang} style={{ flex: 1, justifyContent: 'center' }}>
                <span className={lang === 'tr' ? 'navbar__lang-active' : ''}>TR</span>
                <span className="navbar__lang-divider">/</span>
                <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
              </button>
              <a
                href="https://dijitalislemmerkezi.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary navbar__cta"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                {t('nav.digitalCenter')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
