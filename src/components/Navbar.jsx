import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t('nav.references') || 'Rakamlarla D Event', href: '#references' },
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
          <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>
          <button className="navbar__lang" onClick={toggleLang} aria-label="Change language">
            <span className={lang === 'tr' ? 'navbar__lang-active' : ''}>TR</span>
            <span className="navbar__lang-divider">/</span>
            <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
          </button>
          <a
            href="https://dijitalislemmerkezi.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta navbar__cta--primary"
          >
            <span className="navbar__cta-shimmer" />
            <span className="navbar__cta-accent" />
            <span className="navbar__cta-text">{t('nav.digitalCenter')}</span>
          </a>
          <a
            href="https://devent-online.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta navbar__cta--accent"
          >
            <span className="navbar__cta-shimmer" />
            <span className="navbar__cta-accent" />
            <span className="navbar__cta-text">{t('nav.hotelCenter')}</span>
          </a>
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
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
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="navbar__mobile-actions">
                <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === 'dark' ? <HiSun /> : <HiMoon />}
                </button>
                <button className="navbar__lang" onClick={toggleLang}>
                  <span className={lang === 'tr' ? 'navbar__lang-active' : ''}>TR</span>
                  <span className="navbar__lang-divider">/</span>
                  <span className={lang === 'en' ? 'navbar__lang-active' : ''}>EN</span>
                </button>
              </div>

              <div className="navbar__mobile-ctas">
                <a href="https://dijitalislemmerkezi.com/login" target="_blank" rel="noopener noreferrer" className="navbar__cta navbar__cta--primary">
                  <span className="navbar__cta-shimmer" />
                  <span className="navbar__cta-accent" />
                  <span className="navbar__cta-text">{t('nav.digitalCenter')}</span>
                </a>
                <a href="https://devent-online.com/auth/login" target="_blank" rel="noopener noreferrer" className="navbar__cta navbar__cta--accent">
                  <span className="navbar__cta-shimmer" />
                  <span className="navbar__cta-accent" />
                  <span className="navbar__cta-text">{t('nav.hotelCenter')}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
