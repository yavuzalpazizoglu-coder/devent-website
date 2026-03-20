import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');
  const t = (key) => translations[lang]?.[key] || translations.tr[key] || key;
  const toggleLang = () => setLang(prev => prev === 'tr' ? 'en' : 'tr');
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
