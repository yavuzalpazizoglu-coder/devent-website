import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import './CookieConsent.css';

const STORAGE_KEY = 'devent-cookie-consent';

export default function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (preferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...preferences, ts: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const acceptNecessary = () => save({ necessary: true, analytics: false, marketing: false });
  const acceptCustom = () => save({ necessary: true, analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            className="cookie-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal */}
          <motion.div
            className="cookie-modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cookie-modal__inner">
              {/* Header */}
              <div className="cookie-modal__header">
                <div className="cookie-modal__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2" />
                    <circle cx="7" cy="5" r="1" fill="var(--accent)" />
                    <circle cx="17" cy="7" r="0.7" fill="var(--accent)" />
                    <circle cx="19" cy="14" r="0.8" fill="var(--accent)" />
                  </svg>
                </div>
                <div>
                  <h2 className="cookie-modal__title">{t('cookie.title')}</h2>
                  <p className="cookie-modal__subtitle">{t('cookie.subtitle')}</p>
                </div>
              </div>

              {/* Description */}
              <p className="cookie-modal__desc">{t('cookie.desc')}</p>

              {/* Cookie categories (collapsible) */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    className="cookie-modal__details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Necessary */}
                    <div className="cookie-cat">
                      <div className="cookie-cat__head">
                        <div className="cookie-cat__info">
                          <span className="cookie-cat__dot cookie-cat__dot--green" />
                          <span className="cookie-cat__name">{t('cookie.necessary.title')}</span>
                        </div>
                        <span className="cookie-cat__always">{t('cookie.always')}</span>
                      </div>
                      <p className="cookie-cat__desc">{t('cookie.necessary.desc')}</p>
                    </div>

                    {/* Analytics */}
                    <div className="cookie-cat">
                      <div className="cookie-cat__head">
                        <div className="cookie-cat__info">
                          <span className="cookie-cat__dot cookie-cat__dot--blue" />
                          <span className="cookie-cat__name">{t('cookie.analytics.title')}</span>
                        </div>
                        <label className="cookie-toggle">
                          <input type="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} />
                          <span className="cookie-toggle__track" />
                        </label>
                      </div>
                      <p className="cookie-cat__desc">{t('cookie.analytics.desc')}</p>
                    </div>

                    {/* Marketing */}
                    <div className="cookie-cat">
                      <div className="cookie-cat__head">
                        <div className="cookie-cat__info">
                          <span className="cookie-cat__dot cookie-cat__dot--orange" />
                          <span className="cookie-cat__name">{t('cookie.marketing.title')}</span>
                        </div>
                        <label className="cookie-toggle">
                          <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} />
                          <span className="cookie-toggle__track" />
                        </label>
                      </div>
                      <p className="cookie-cat__desc">{t('cookie.marketing.desc')}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="cookie-modal__actions">
                {showDetails ? (
                  <>
                    <button className="cookie-btn cookie-btn--primary" onClick={acceptCustom}>
                      {t('cookie.acceptAll')}
                    </button>
                    <button className="cookie-btn cookie-btn--secondary" onClick={acceptNecessary}>
                      {t('cookie.acceptNecessary')}
                    </button>
                  </>
                ) : (
                  <>
                    <button className="cookie-btn cookie-btn--primary" onClick={acceptAll}>
                      {t('cookie.acceptAll')}
                    </button>
                    <button className="cookie-btn cookie-btn--secondary" onClick={acceptNecessary}>
                      {t('cookie.acceptNecessary')}
                    </button>
                    <button className="cookie-btn cookie-btn--ghost" onClick={() => setShowDetails(true)}>
                      {t('cookie.settings')}
                    </button>
                  </>
                )}
              </div>

              {/* Legal links */}
              <div className="cookie-modal__links">
                <a href="#" className="cookie-modal__link">{t('cookie.kvkkLink')}</a>
                <span className="cookie-modal__link-dot" />
                <a href="#" className="cookie-modal__link">{t('cookie.privacyLink')}</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
