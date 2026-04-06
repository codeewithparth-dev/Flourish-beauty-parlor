import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 600);
          return 100;
        }
        return prev + Math.random() * 18;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#1a0e0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px'
          }}
        >
          {/* Logo text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontFamily: 'serif',
              fontSize: '52px',
              fontStyle: 'italic',
              color: '#c9829a',
              fontWeight: 500,
              lineHeight: 1,
              margin: 0
            }}>
              Flourish
            </p>
            <p style={{
              fontFamily: 'sans-serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              marginTop: '10px'
            }}>
              Beauty Parlour
            </p>
          </motion.div>

          {/* Progress bar */}
          <div style={{
            width: '160px',
            height: '1px',
            backgroundColor: 'rgba(201,130,154,0.2)',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#c9829a',
                borderRadius: '999px',
                width: Math.min(progress, 100) + '%',
                transition: 'width 0.1s ease'
              }}
            />
          </div>

          {/* Decorative dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#c9829a'
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}