import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a0e0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ textAlign: 'center' }}
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 'clamp(6rem, 20vw, 12rem)',
            fontWeight: 300,
            color: '#c9829a',
            lineHeight: 1,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 300,
            color: '#f5f0e8',
            marginBottom: '16px',
            letterSpacing: '0.05em',
          }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '1rem',
            color: 'rgba(245, 240, 232, 0.6)',
            marginBottom: '48px',
            maxWidth: '400px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          The page you're looking for doesn't exist.
        </motion.p>

        {/* Back to Home Button */}
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            backgroundColor: '#c9829a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '14px 40px',
            fontSize: '14px',
            fontFamily: 'var(--font-body, sans-serif)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 8px 24px rgba(201, 130, 154, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}