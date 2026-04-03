import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Masonry from '../components/Masonry';

// ── Bridal ──────────────────────────────────────────────
import bridal1 from '../assets/Gallerypictures/bridal-1.webp';
import bridal2 from '../assets/Gallerypictures/bridal-2.webp';
import bridal3 from '../assets/Gallerypictures/bridal-3.webp';
import bridal4 from '../assets/Gallerypictures/bridal-4.webp';
import bridal5 from '../assets/Gallerypictures/bridal-5.webp';
import bridal6 from '../assets/Gallerypictures/bridal-6.webp';
import bridal7 from '../assets/Gallerypictures/bridal-7.webp';
import bridal8 from '../assets/Gallerypictures/bridal-8.webp';
import bridal9 from '../assets/Gallerypictures/bridal-9.webp';
import bridal10 from '../assets/Gallerypictures/bridal-10.webp';
import bridal11 from '../assets/Gallerypictures/bridal-11.webp';
import bridal12 from '../assets/Gallerypictures/bridal-12.webp';

// ── Mehndi ──────────────────────────────────────────────
import mehndi1 from '../assets/Gallerypictures/mehndi-1.webp';
import mehndi2 from '../assets/Gallerypictures/mehndi-2.webp';
import mehndi3 from '../assets/Gallerypictures/mehndi-3.webp';
import mehndi4 from '../assets/Gallerypictures/mehndi-4.webp';
import mehndi5 from '../assets/Gallerypictures/mehndi-5.webp';
import mehndi6 from '../assets/Gallerypictures/mehndi-6.webp';
import mehndi7 from '../assets/Gallerypictures/mehndi-7.webp';
import mehndi8 from '../assets/Gallerypictures/mehndi-8.webp';
import mehndi9 from '../assets/Gallerypictures/mehndi-9.webp';
import mehndi10 from '../assets/Gallerypictures/mehndi-10.webp';
import mehndi11 from '../assets/Gallerypictures/mehndi-11.webp';
import mehndi12 from '../assets/Gallerypictures/mehndi-12.webp';
import mehndi13 from '../assets/Gallerypictures/mehndi-13.webp';

// ── Makeup ──────────────────────────────────────────────
import makeup2 from '../assets/Gallerypictures/makeup-2.webp';
import makeup4 from '../assets/Gallerypictures/makeup-4.webp';

// ── Haircut ─────────────────────────────────────────────
import haircut1 from '../assets/Gallerypictures/haircut-1.webp';
import haircut2 from '../assets/Gallerypictures/haircut-2.webp';
import haircut3 from '../assets/Gallerypictures/haircut-3.webp';

// ── Gallery Data ─────────────────────────────────────────
const allGalleryItems = [
  // Bridal
  { id: '1', category: 'Bridal', img: bridal1 },
  { id: '2', category: 'Bridal', img: bridal2 },
  { id: '3', category: 'Bridal', img: bridal3 },
  { id: '4', category: 'Bridal', img: bridal4 },
  { id: '5', category: 'Bridal', img: bridal5 },
  { id: '6', category: 'Bridal', img: bridal6 },
  { id: '7', category: 'Bridal', img: bridal7 },
  { id: '8', category: 'Bridal', img: bridal8 },
  { id: '9', category: 'Bridal', img: bridal9 },
  { id: '10', category: 'Bridal', img: bridal10 },
  { id: '11', category: 'Bridal', img: bridal11 },
  { id: '12', category: 'Bridal', img: bridal12 },
  // Mehndi
  { id: '13', category: 'Mehndi', img: mehndi1 },
  { id: '14', category: 'Mehndi', img: mehndi2 },
  { id: '15', category: 'Mehndi', img: mehndi3 },
  { id: '16', category: 'Mehndi', img: mehndi4 },
  { id: '17', category: 'Mehndi', img: mehndi5 },
  { id: '18', category: 'Mehndi', img: mehndi6 },
  { id: '19', category: 'Mehndi', img: mehndi7 },
  { id: '20', category: 'Mehndi', img: mehndi8 },
  { id: '21', category: 'Mehndi', img: mehndi9 },
  { id: '22', category: 'Mehndi', img: mehndi10 },
  { id: '23', category: 'Mehndi', img: mehndi11 },
  { id: '24', category: 'Mehndi', img: mehndi12 },
  { id: '25', category: 'Mehndi', img: mehndi13 },
  // Makeup
  { id: '27', category: 'Makeup', img: makeup2 },
  { id: '29', category: 'Makeup', img: makeup4 },
  // Haircut
  { id: '30', category: 'Haircut', img: haircut1 },
  { id: '31', category: 'Haircut', img: haircut2 },
  { id: '32', category: 'Haircut', img: haircut3 },
];

const FILTERS = ['All', 'Bridal', 'Mehndi', 'Makeup', 'Haircut'];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeFilter === 'All'
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ flex: 1, paddingBottom: '120px', paddingTop: '100px' }}>

        {/* ── Header ───────────────────────────────── */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            padding: '80px 16px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background:
                'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-body, sans-serif)',
                fontSize: '11px',
                color: '#c9a96e',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              The Art of Flourish
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: 'var(--font-display, serif)',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 300,
                color: '#f5efe6',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              Visual Gallery
            </motion.h1>
            <p
              style={{
                fontFamily: 'var(--font-body, sans-serif)',
                fontSize: '1rem',
                color: 'rgba(245,239,230,0.4)',
                fontStyle: 'italic',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              A celebration of sophistication and the refined pursuit of beauty.
            </p>
          </div>
        </section>

        {/* ── Filter Buttons ───────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            padding: '40px 16px 8px',
          }}
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '10px 28px',
                  borderRadius: '999px',
                  border: '1px solid #e8a0b8',
                  background: isActive ? '#e8a0b8' : 'transparent',
                  color: isActive ? '#ffffff' : '#e8a0b8',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body, sans-serif)',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.25s ease',
                  outline: 'none',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ── Masonry Grid ─────────────────────────── */}
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '32px 16px 0',
            marginBottom: '60px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Masonry
                items={filteredItems}
                animateFrom="bottom"
                stagger={0.08}
                onItemClick={(item) => setSelectedItem(item)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(26,26,26,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <motion.button
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                color: 'rgba(245,239,230,0.4)',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              whileHover={{ color: '#f5efe6' }}
            >
              <X size={28} />
            </motion.button>

            <motion.div
              layoutId={`gallery-item-${selectedItem.id}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                  maxHeight: '75vh',
                }}
              >
                <img
                  src={selectedItem.img}
                  alt={selectedItem.category}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    display: 'block'
                  }}
                />
              </div>

              <div style={{ marginTop: '32px', textAlign: 'center' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '11px',
                    color: '#c9a96e',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {selectedItem.category}
                </span>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#c9a96e',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    padding: '14px 36px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(201,169,110,0.35)',
                    marginTop: '16px',
                  }}
                >
                  <MessageCircle size={16} />
                  ENQUIRE NOW
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
