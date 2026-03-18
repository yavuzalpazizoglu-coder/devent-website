import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Gallery.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Kongre Salonu' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', alt: 'Gala Yemeği' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80', alt: 'Konferans' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', alt: 'Sahne Performansı' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', alt: 'Networking Etkinliği' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', alt: 'Sergi Alanı' },
];

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (i) => setSelectedIndex(i);
  const closeLightbox = () => setSelectedIndex(null);
  const prev = () => setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container" ref={ref}>
        <div className="gallery__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Galeri
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Etkinliklerimizden Kareler
          </motion.h2>
        </div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery__item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox}><HiX /></button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }}><HiChevronLeft /></button>
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next(); }}><HiChevronRight /></button>
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="lightbox__image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
