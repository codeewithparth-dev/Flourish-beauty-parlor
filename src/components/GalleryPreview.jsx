import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bridalImg from '../assets/Gallerypictures/bridal-8.webp';
import haircutImg from '../assets/Gallerypictures/haircut-2.webp';
import makeupImg from '../assets/Gallerypictures/makeup-2.webp';

export default function GalleryPreview() {
  const navigate = useNavigate();

  const items = [
    { img: bridalImg, label: 'Bridal Makeup', height: 'h-[450px]', mt: 'mt-0' },
    { img: haircutImg, label: 'Haircut', height: 'h-[350px]', mt: 'mt-12' },
    { img: makeupImg, label: 'Makeup', height: 'h-[400px]', mt: 'mt-6' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="gallery" className="bg-[#FDF8F5] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">Visual Journal</p>
          <h2 className="font-display text-5xl sm:text-6xl text-noir">The Gallery</h2>
        </motion.div>
        
        {/* Masonry-lite Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-[30px] overflow-hidden cursor-pointer group transition-all duration-700 hover:shadow-2xl ${item.height} ${item.mt}`}
              onClick={() => navigate('/gallery')}
            >
              <img 
                src={item.img} 
                alt={item.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/70 mb-2">Category</p>
                <h3 className="font-display text-2xl text-white">{item.label}</h3>
              </div>
              
              {/* Persistent Corner Label */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream/20 backdrop-blur-md border border-cream/30 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-cream text-xs">+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button 
            onClick={() => navigate('/gallery')}
            whileHover={{ x: 5 }}
            className="group inline-flex items-center gap-4 font-body text-[10px] tracking-[0.3em] uppercase text-noir hover:text-rose transition-colors duration-300"
          >
            Explore Visual Archive
            <ArrowRight className="w-4 h-4 text-noir/40 group-hover:text-rose transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
