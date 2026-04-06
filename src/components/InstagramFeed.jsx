import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const INSTAGRAM_HANDLE = 'flourish.parlour';
const INSTAGRAM_URL = 'https://www.instagram.com/flourish.parlour/' + INSTAGRAM_HANDLE;

const placeholderPosts = [
  { id: 1, bg: '#2d1a14' },
  { id: 2, bg: '#1a0e14' },
  { id: 3, bg: '#1a140e' },
  { id: 4, bg: '#2d1a1a' },
  { id: 5, bg: '#1a1a0e' },
  { id: 6, bg: '#141a1a' },
];

export default function InstagramFeed() {
  return (
    <section style={{ backgroundColor: '#f5f0e8', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '10px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9829a',
            marginBottom: '12px'
          }}>
            Follow Our Journey
          </p>
          <h2 style={{
            fontFamily: 'serif',
            fontSize: '48px',
            color: '#2d1a14',
            fontWeight: 400,
            margin: '0 0 16px 0',
            lineHeight: 1.1
          }}>
            @{INSTAGRAM_HANDLE}
          </h2>
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '13px',
            color: 'rgba(45,26,20,0.5)',
            letterSpacing: '0.05em'
          }}>
            See our latest work, transformations & behind the scenes
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {placeholderPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              style={{
                display: 'block',
                aspectRatio: '1',
                backgroundColor: post.bg,
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              {/* Overlay on hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(201,130,154,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <ExternalLink size={20} color="white" />
              </div>

              {/* Instagram gradient placeholder */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${post.bg}, #c9829a22)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(201,130,154,0.3)" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(201,130,154,0.3)" stroke="none"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#2d1a14',
              color: '#f5f0e8',
              padding: '14px 36px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#c9829a';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#2d1a14';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Follow on Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
}