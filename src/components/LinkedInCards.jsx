import { useLang } from '../context/LanguageContext';
import './LinkedInCards.css';

const LINKEDIN_URL = 'https://www.linkedin.com/company/d-event-turizm-organizasyon';

const POSTS = [
  {
    id: '7439771123996585984',
    text: {
      tr: '18 Mart Çanakkale Zaferi ve Şehitleri Anma Günü kutlu olsun. Tüm şehitlerimizi saygıyla anıyoruz.',
      en: 'Happy March 18 Çanakkale Victory Day. We remember all our martyrs with respect.',
    },
    tag: '#ÇanakkaleZaferi',
  },
  {
    id: '7439211973914828800',
    text: {
      tr: 'Dijitalleşme ile turizm ve MICE sektöründe yeni çözümler sunuyoruz.',
      en: 'Delivering new solutions in tourism and MICE through digital transformation.',
    },
    tag: '#Dijitalleşme',
  },
  {
    id: '7439211973914828800',
    text: {
      tr: 'Otel Teklif Platformu ile kongre organizasyonlarınız için en uygun otelleri keşfedin.',
      en: 'Discover the best hotels for your congress events with our Hotel Proposal Platform.',
    },
    tag: '#OtelTeklifPlatformu',
  },
];

export default function LinkedInCards() {
  const { lang } = useLang();

  return (
    <div className="linkedin-feed">
      <div className="container">
        <div className="linkedin-feed__header">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="linkedin-feed__brand">
            <svg className="linkedin-feed__li-logo" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="linkedin-feed__brand-text">LinkedIn</span>
          </a>
          <span className="linkedin-feed__badge">
            <span className="linkedin-feed__badge-date">
              {new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            {lang === 'tr' ? 'Son Paylaşımlar' : 'Recent Posts'}
          </span>
        </div>

        <div className="linkedin-feed__grid">
          {POSTS.map(post => (
            <a
              key={post.id}
              href={`https://www.linkedin.com/feed/update/urn:li:activity:${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-feed__card"
            >
              <div className="linkedin-feed__card-icon">
                <img src="/images/logo.png" alt="D Event" className="linkedin-feed__card-logo" />
              </div>
              <div className="linkedin-feed__card-body">
                <span className="linkedin-feed__card-tag">{post.tag}</span>
                <p className="linkedin-feed__card-text">{post.text[lang]}</p>
              </div>
              <span className="linkedin-feed__card-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
