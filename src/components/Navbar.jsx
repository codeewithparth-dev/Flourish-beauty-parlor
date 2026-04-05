import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';
import { WHATSAPP_URL } from '../utils/whatsapp';
import Logo from '../components/Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && open) setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const isHomePage = location.pathname === '/';

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 flex items-center justify-between
    px-6 sm:px-10 lg:px-16 py-3
    transition-all duration-500 ease-in-out
    ${scrolled
      ? 'bg-cream/40 backdrop-blur-md border-b border-gold/10 shadow-sm'
      : 'bg-transparent'
    }
  `;

  const linkClasses = `
    font-body text-[13px] tracking-[0.25em] uppercase relative group transition-colors duration-300
    text-rose
  `;

  const bookClasses = `
    font-body text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-semibold
    bg-pink text-white px-10 py-4 rounded-full
    shadow-lg hover:shadow-xl active:shadow-inner cursor-pointer
  `;

  return (
    <>
      <nav className={navClasses}>
        {/* Logo - Left aligned */}
        {/* Logo - Always visible and links to Home */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (location.pathname === '/') {
              scrollToSection('hero'); // Scroll up if already on home
            } else {
              navigate('/'); // Go to home if on another page
            }
          }}
          className="flex items-center"
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: 0, 
            cursor: 'pointer',
            minWidth: '100px'
          }}
        >
          <Logo scrolled={scrolled} size={scrolled ? 32 : 44} style={{ minWidth: '100px' }} lightBg={!isHomePage || scrolled} />
        </motion.button>

        {/* Links - Center aligned */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['HOME', 'SERVICES', 'GALLERY', 'CONTACT'].map((item) => (
            <motion.button
              key={item}
              className={linkClasses}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (item === 'GALLERY') {
                  navigate('/gallery');
                } else if (item === 'SERVICES') {
                  navigate('/services');
                } else if (isHomePage) {
                  scrollToSection(item.toLowerCase());
                } else {
                  navigate(`/#${item.toLowerCase()}`);
                }
              }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        {/* CTA - Right aligned */}
        <div className="flex items-center gap-4">
          <motion.button
            className={`hidden sm:block ${bookClasses}`}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            BOOK NOW
          </motion.button>

          <motion.button
            className="md:hidden p-2 relative z-50 rounded-full hover:bg-gold/10 transition-colors"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6 text-noir" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled || !isHomePage ? 'text-noir' : 'text-cream'}`} />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-cream/98 z-40 flex flex-col items-center justify-center gap-8"
          >
            {['HOME', 'SERVICES', 'GALLERY', 'CONTACT'].map((item) => (
              <motion.button
                key={item}
                className="font-display text-4xl font-light text-rose tracking-widest transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setOpen(false);
                  if (item === 'GALLERY') {
                    navigate('/gallery');
                  } else if (item === 'SERVICES') {
                    navigate('/services');
                  } else if (isHomePage) {
                    scrollToSection(item.toLowerCase());
                  } else {
                    navigate(`/#${item.toLowerCase()}`);
                  }
                }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              className={`${bookClasses} mt-4`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open(WHATSAPP_URL, '_blank');
                setOpen(false);
              }}
            >
              BOOK NOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
