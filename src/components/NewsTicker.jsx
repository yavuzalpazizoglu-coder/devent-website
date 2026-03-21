import { FaLinkedin } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './NewsTicker.css';

const TICKER_KEYS = [
  'ticker.1', 'ticker.2', 'ticker.3', 'ticker.4', 'ticker.5', 'ticker.6',
  'ticker.7', 'ticker.8', 'ticker.9', 'ticker.10', 'ticker.11', 'ticker.12',
];

export default function NewsTicker() {
  const { t } = useLang();

  const items = TICKER_KEYS.map(key => t(key));
  const doubled = [...items, ...items];

  return (
    <div className="news-ticker">
      <a
        href="https://www.linkedin.com/company/2784340/"
        target="_blank"
        rel="noopener noreferrer"
        className="news-ticker__badge"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <div className="news-ticker__track">
        <div className="news-ticker__scroll">
          {doubled.map((text, i) => (
            <span key={i} className="news-ticker__item">
              <span className="news-ticker__dot" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
