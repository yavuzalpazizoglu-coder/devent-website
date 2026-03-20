import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../context/LanguageContext';
import './References.css';

// Reference data extracted from D Event reference list (2012-2023)
const yearlyData = {
  congress: { 2012: 8, 2013: 12, 2014: 18, 2015: 22, 2016: 28, 2017: 35, 2018: 42, 2019: 48, 2020: 30, 2021: 38, 2022: 52, 2023: 58 },
  events:   { 2012: 3, 2013: 28, 2014: 35, 2015: 40, 2016: 45, 2017: 52, 2018: 65, 2019: 72, 2020: 25, 2021: 45, 2022: 68, 2023: 75 },
};

const totalCongress = Object.values(yearlyData.congress).reduce((a, b) => a + b, 0);
const totalEvents = Object.values(yearlyData.events).reduce((a, b) => a + b, 0);
const totalAll = totalCongress + totalEvents;
const years = Object.keys(yearlyData.congress).map(Number);
const maxPerYear = Math.max(...years.map(y => (yearlyData.congress[y] || 0) + (yearlyData.events[y] || 0)));

const categoryData = [
  { key: 'congress', color: '#f5a623' },
  { key: 'events', color: '#00aeef' },
  { key: 'international', color: '#e0334c' },
  { key: 'cities', color: '#22c55e' },
];

export default function References() {
  const { t } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredYear, setHoveredYear] = useState(null);

  return (
    <section id="references" className="references section-padding">
      <div className="container" ref={ref}>
        <motion.div
          className="references__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>{t('ref.label')}</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t('ref.title')}</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            {t('ref.desc')}
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="references__summary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categoryData.map((cat, i) => (
            <div key={cat.key} className="references__summary-card">
              <div className="references__summary-bar" style={{ background: cat.color }} />
              <span className="references__summary-number" style={{ color: cat.color }}>{t(`ref.${cat.key}.num`)}</span>
              <span className="references__summary-label">{t(`ref.${cat.key}`)}</span>
            </div>
          ))}
        </motion.div>

        {/* Year Chart */}
        <motion.div
          className="references__chart"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <h3 className="references__chart-title">{t('ref.chart.title')}</h3>
          <div className="references__bars">
            {years.map((year, i) => {
              const congress = yearlyData.congress[year] || 0;
              const events = yearlyData.events[year] || 0;
              const total = congress + events;
              const heightPct = (total / maxPerYear) * 100;
              const congressPct = (congress / total) * 100;
              const isHovered = hoveredYear === year;

              return (
                <motion.div
                  key={year}
                  className={`references__bar-group ${isHovered ? 'references__bar-group--active' : ''}`}
                  onMouseEnter={() => setHoveredYear(year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.04 + 0.4, duration: 0.5 }}
                >
                  {isHovered && (
                    <div className="references__bar-tooltip">
                      <span className="references__bar-tooltip-total">{total}</span>
                      <span className="references__bar-tooltip-detail">
                        <span style={{ color: '#f5a623' }}>●</span> {congress} &nbsp;
                        <span style={{ color: '#00aeef' }}>●</span> {events}
                      </span>
                    </div>
                  )}
                  <div className="references__bar-track" style={{ height: `${heightPct}%` }}>
                    <div className="references__bar-congress" style={{ height: `${congressPct}%` }} />
                    <div className="references__bar-events" style={{ height: `${100 - congressPct}%` }} />
                  </div>
                  <span className="references__bar-year">{year}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="references__legend">
            <span className="references__legend-item">
              <span className="references__legend-dot" style={{ background: '#f5a623' }} />
              {t('ref.congress')}
            </span>
            <span className="references__legend-item">
              <span className="references__legend-dot" style={{ background: '#00aeef' }} />
              {t('ref.events')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
