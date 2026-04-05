import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Story from '../components/Story';
import GalleryPreview from '../components/GalleryPreview';
import Contact from '../components/Contact';

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Delay slightly to ensure component has rendered
      setTimeout(() => scrollToSection(id), 100);
    } else {
      // Force scroll to top on refresh if no hash
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Story />
      <GalleryPreview />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
