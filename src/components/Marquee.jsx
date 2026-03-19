import './Marquee.css';

const items = [
  'KONGRE YÖNETİMİ',
  'PROJE DANIŞMANLIĞI',
  'ETKİNLİK PLANLAMASI',
  'DİJİTAL ÇÖZÜMLER',
  'SOSYAL ORGANİZASYON',
  'LOJİSTİK YÖNETİM',
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__content">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
