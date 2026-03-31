import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Maximize2 } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Masonry from '../components/Masonry';

// Import images
import haircoloringImg from '../assets/services/hair-coloring.webp';
import facialImg from '../assets/services/facial.webp';
import threadingImg from '../assets/services/threading.webp';
import waxingImg from '../assets/services/waxing.webp';
import bridalMakeupImg from '../assets/services/bridal-makeup.webp';

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { id: "1", category: 'Hair', img: haircoloringImg, title: 'Hair Coloring' },
    { id: "2", category: 'Bridal', img: bridalMakeupImg, title: 'Bridal Makeup' },
    { id: "3", category: 'Facials', img: facialImg, title: 'Facial Treatment' },
    { id: "4", category: 'Threading', img: threadingImg, title: 'Threading' },
    { id: "5", category: 'Waxing', img: waxingImg, title: 'Waxing' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream"
    >
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-noir py-20 sm:py-28 text-center overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-body text-[10px] sm:text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
            >
              The Art of Flourish
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-7xl lg:text-8xl font-light text-cream mb-6 tracking-tight"
            >
              Visual Gallery
            </motion.h1>
            <p className="font-body text-base sm:text-lg text-cream/40 italic max-w-2xl mx-auto">
              A celebration of sophistication and the refined pursuit of beauty.
            </p>
          </div>
        </section>

        {/* New Masonry Layout */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 min-h-[1200px]">
          <Masonry 
            items={galleryItems}
            animateFrom="bottom"
            stagger={0.08}
            onItemClick={(item) => setSelectedItem(item)}
          />
        </div>
      </main>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-cream/40 hover:text-cream transition-colors p-2 bg-white/5 rounded-full z-10"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              layoutId={`gallery-item-${selectedItem.id}`}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[75vh]">
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mt-8 text-center max-w-xl">
                <span className="font-body text-xs text-gold tracking-widest uppercase mb-2 block">
                  {selectedItem.category}
                </span>
                <h2 className="font-display text-3xl sm:text-5xl text-cream font-light mb-6">
                  {selectedItem.title}
                </h2>
                <motion.a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-white font-body text-xs tracking-[0.2em] px-10 py-4 rounded-full inline-flex items-center gap-2 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  ENQUIRE NOW
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
