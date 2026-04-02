import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Maximize2 } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Masonry from '../components/Masonry';

// Import images
import gallery1 from '../assets/Gallerypictures/gallery-1.webp';
import gallery2 from '../assets/Gallerypictures/gallery-2.webp';
import gallery3 from '../assets/Gallerypictures/gallery-3.webp';
import gallery4 from '../assets/Gallerypictures/gallery-4.webp';
import gallery5 from '../assets/Gallerypictures/gallery-5.webp';
import gallery6 from '../assets/Gallerypictures/gallery-6.webp';
import gallery7 from '../assets/Gallerypictures/gallery-7.webp';
import gallery8 from '../assets/Gallerypictures/gallery-8.webp';
import gallery9 from '../assets/Gallerypictures/gallery-9.webp';
import gallery10 from '../assets/Gallerypictures/gallery-10.webp';
import gallery11 from '../assets/Gallerypictures/gallery-11.webp';
import gallery12 from '../assets/Gallerypictures/gallery-12.webp';
import gallery13 from '../assets/Gallerypictures/gallery-13.webp';
import gallery14 from '../assets/Gallerypictures/gallery-14.webp';
import gallery15 from '../assets/Gallerypictures/gallery-15.webp';
import gallery16 from '../assets/Gallerypictures/gallery-16.webp';
import gallery17 from '../assets/Gallerypictures/gallery-17.webp';
import gallery18 from '../assets/Gallerypictures/gallery-18.webp';
import gallery19 from '../assets/Gallerypictures/gallery-19.webp';
import gallery20 from '../assets/Gallerypictures/gallery-20.webp';
import gallery21 from '../assets/Gallerypictures/gallery-21.webp';
import gallery22 from '../assets/Gallerypictures/gallery-22.webp';
import gallery23 from '../assets/Gallerypictures/gallery-23.webp';
import gallery24 from '../assets/Gallerypictures/gallery-24.webp';
import gallery25 from '../assets/Gallerypictures/gallery-25.webp';
import gallery26 from '../assets/Gallerypictures/gallery-26.webp';
import gallery27 from '../assets/Gallerypictures/gallery-27.webp';
import gallery28 from '../assets/Gallerypictures/gallery-28.webp';
import gallery29 from '../assets/Gallerypictures/gallery-29.webp';
import gallery30 from '../assets/Gallerypictures/gallery-30.webp';
import gallery31 from '../assets/Gallerypictures/gallery-31.webp';
import gallery32 from '../assets/Gallerypictures/gallery-32.webp';


const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryItems = [
    { id: "1", category: 'gallery-1', img: gallery1, title: 'gallery-1' },
    { id: "2", category: 'gallery-2', img: gallery2, title: 'gallery-2' },
    { id: "3", category: 'gallery-3', img: gallery3, title: 'gallery-3' },
    { id: "4", category: 'gallery-4', img: gallery4, title: 'gallery-4' },
    { id: "5", category: 'gallery-5', img: gallery5, title: 'gallery-5' },
    { id: "6", category: 'gallery-6', img: gallery6, title: 'gallery-6' },
    { id: "7", category: 'gallery-7', img: gallery7, title: 'gallery-7' },
    { id: "8", category: 'gallery-8', img: gallery8, title: 'gallery-8' },
    { id: "9", category: 'gallery-9', img: gallery9, title: 'gallery-9' },
    { id: "10", category: 'gallery-10', img: gallery10, title: 'gallery-10' },
    { id: "11", category: 'gallery-11', img: gallery11, title: 'gallery-11' },
    { id: "12", category: 'gallery-12', img: gallery12, title: 'gallery-12' },
    { id: "13", category: 'gallery-13', img: gallery13, title: 'gallery-13' },
    { id: "14", category: 'gallery-14', img: gallery14, title: 'gallery-14' },
    { id: "15", category: 'gallery-15', img: gallery15, title: 'gallery-15' },
    { id: "16", category: 'gallery-16', img: gallery16, title: 'gallery-16' },
    { id: "17", category: 'gallery-17', img: gallery17, title: 'gallery-17' },
    { id: "18", category: 'gallery-18', img: gallery18, title: 'gallery-18' },
    { id: "19", category: 'gallery-19', img: gallery19, title: 'gallery-19' },
    { id: "20", category: 'gallery-20', img: gallery20, title: 'gallery-20' },
    { id: "21", category: 'gallery-21', img: gallery21, title: 'gallery-21' },
    { id: "22", category: 'gallery-22', img: gallery22, title: 'gallery-22' },
    { id: "23", category: 'gallery-23', img: gallery23, title: 'gallery-23' },
    { id: "24", category: 'gallery-24', img: gallery24, title: 'gallery-24' },
    { id: "25", category: 'gallery-25', img: gallery25, title: 'gallery-25' },
    { id: "26", category: 'gallery-26', img: gallery26, title: 'gallery-26' },
    { id: "27", category: 'gallery-27', img: gallery27, title: 'gallery-27' },
    { id: "28", category: 'gallery-28', img: gallery28, title: 'gallery-28' },
    { id: "29", category: 'gallery-29', img: gallery29, title: 'gallery-29' },
    { id: "30", category: 'gallery-30', img: gallery30, title: 'gallery-30' },
    { id: "31", category: 'gallery-31', img: gallery31, title: 'gallery-31' },
    { id: "32", category: 'gallery-32', img: gallery32, title: 'gallery-32' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream"
      style={{ paddingBottom: '80px' }}
    >
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 min-h-[1200px]" style={{ marginBottom: '60px' }}>
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
