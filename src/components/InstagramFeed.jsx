import { motion } from 'framer-motion';

const INSTAGRAM_HANDLE = 'flourish.parlour';
const INSTAGRAM_URL = 'https://www.instagram.com/' + INSTAGRAM_HANDLE;

export default function InstagramFeed() {
  return (
    <section style={{ 
      backgroundColor: '#f5f0e8', 
      padding: '60px 24px',
      overflowX: 'hidden',
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto',
        width: '100%'
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '36px',
            width: '100%',
            overflowX: 'hidden'
          }}
        >
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '10px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9829a',
            marginBottom: '12px',
            margin: '0 0 12px 0'
          }}>
            Follow Our Journey
          </p>
          <h2 style={{
            fontFamily: 'serif',
            fontSize: 'clamp(28px, 6vw, 48px)',
            color: '#2d1a14',
            fontWeight: 400,
            margin: '0 0 12px 0',
            lineHeight: 1.1,
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}>
            @{INSTAGRAM_HANDLE}
          </h2>
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '13px',
            color: 'rgba(45,26,20,0.5)',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            See our latest work, transformations & behind the scenes
          </p>
        </motion.div>

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            overflowX: 'hidden',
            marginBottom: '32px',
            borderRadius: '16px'
          }}
        >
          <iframe
            src="https://snapwidget.com/embed/1121453"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            title="Posts from Instagram"
            style={{
              border: 'none',
              width: '100%',
              height: '520px',
              display: 'block',
              maxWidth: '100%'
            }}
          />
        </motion.div>

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
            <svg width="16" height="16" viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" 
                fill="currentColor" stroke="none"/>
            </svg>
            Follow on Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
}