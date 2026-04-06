import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Scissors,
  Droplets,
  Hand,
  Crown,
  Wand2,
  Sun,
  Search,
  Brush,
  Footprints
} from 'lucide-react';
import { WHATSAPP_SERVICE_URL } from '../utils/whatsapp';

import facialImg from '../assets/services/facial.webp';
import threadingImg from '../assets/services/threading.webp';
import waxingImg from '../assets/services/waxing.webp';
import bridalImg from '../assets/services/bridal-makeup.webp';
import hairColoringImg from '../assets/services/hair-coloring.webp';
import party_makeupimg from '../assets/services/party-makeup.webp';
import mehndiimg from '../assets/services/mehndi.webp';
import pedicureImg from '../assets/services/pedicure.webp';
import manicureImg from '../assets/services/manicure.webp';
import bleachImg from '../assets/services/bleach.webp';
import haircutImg from '../assets/services/haircut.webp';

const services = [
  {
    name: 'Hair Coloring',
    desc: 'Vibrant, long-lasting hair color applied with precision',
    icon: Scissors,
    img: hairColoringImg
  },
  {
    name: 'Bridal Makeup',
    desc: 'Full glam look for your special day',
    icon: Crown,
    img: bridalImg
  },
  {
    name: 'Waxing',
    desc: 'Smooth, long-lasting hair removal',
    icon: Droplets,
    img: waxingImg
  },
  {
    name: 'Manicure',
    desc: 'Nail shaping, cuticle care & polish',
    icon: Hand,
    img: manicureImg
  },
  {
    name: 'pedicure',
    desc: 'Foot care, scrub & relaxing massage',
    icon: Footprints,
    img: pedicureImg
  },
  {
    name: 'Threading',
    desc: 'Precise eyebrow & facial hair shaping',
    icon: Search,
    img: threadingImg
  },
  {
    name: 'Party Makeup',
    desc: 'Flawless glam for every occasion',
    icon: Wand2,
    img: party_makeupimg
  },
  {
    name: 'Facial Treatment',
    desc: 'Deep cleansing & rejuvenating skin therapy',
    icon: Sparkles,
    img: facialImg
  },
  {
    name: 'Hair cut',
    desc: 'Haircut for women and girls',
    icon: Scissors,
    img: haircutImg
  },
  {
    name: 'Mehndi / Henna',
    desc: 'Intricate bridal & party designs',
    icon: Brush,
    img: mehndiimg
  },
  {
    name: 'Bleach',
    desc: 'Skin brightening facial bleach treatment',
    icon: Sun,
    img: bleachImg
  }
];

const ServiceCard = ({ service, isLarge, index }) => {
  const Icon = service.icon;
  const imagePosition = service.name === 'Bleach' ? 'center 20%' : 'center top';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
      className={`relative rounded-[40px] flex flex-col overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 ${isLarge ? 'min-h-132.25 md:col-span-3' : 'min-h-112.5 md:col-span-2 bg-white'
        }`}
    >
      {/* Image Layer */}
      <div className={`${isLarge ? 'absolute inset-0' : 'h-64 w-full'} overflow-hidden`}>
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          style={{ objectPosition: imagePosition }}
        />
        {isLarge && <div className="absolute inset-0 bg-linear-to-t from-noir via-noir/20 to-transparent opacity-80" />}
      </div>

      <div className={`relative z-10 p-8 sm:p-10 flex flex-col justify-between grow ${isLarge ? 'text-white' : 'text-noir'}`}>
        <div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${isLarge ? 'bg-white/10 backdrop-blur-md' : 'bg-pink/10'
            }`}>
            <Icon className={`w-5 h-5 ${isLarge ? 'text-white' : 'text-pink'}`} />
          </div>

          <h3 className="font-display text-3xl sm:text-4xl mb-4 leading-tight">
            {service.name}
          </h3>
          <p className={`font-body text-sm leading-relaxed tracking-wide mb-8 ${isLarge ? 'text-white/70' : 'text-muted'
            }`}>
            {service.desc}
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => window.open(WHATSAPP_SERVICE_URL(service.name), '_blank')}
            className={`px-8 py-4 rounded-full font-body text-[10px] tracking-[0.3em] uppercase transition-all duration-300 shadow-lg hover:-translate-y-1 active:translate-y-0 ${isLarge
                ? 'bg-white text-noir hover:bg-cream'
                : 'bg-pink text-white hover:shadow-pink/20'
              }`}
          >
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-cream min-h-screen">

      {/* Hero Section */}
      <section className="pt-28 pb-10 px-4 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-body text-[10px] text-pink tracking-[0.4em] uppercase">
              Our Indulgence
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl text-noir leading-none">
              Our Services
            </h1>
            <p className="font-body text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Indulge in a curated menu of beauty treatments crafted just for you. From high-fashion artistry to restorative wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8" style={{ overflowX: 'hidden' }}>
            {services.map((service, index) => {
              // Layout logic:
              // Row 1 (Index 0,1): 2 Large (3 columns each)
              // Row 2 (Index 2,3,4): 3 Regular (2 columns each)
              // This pattern repeats every 5 items.
              const patternIndex = index % 5;
              const isLarge = patternIndex < 2;

              return (
                <ServiceCard
                  key={service.name}
                  service={service}
                  isLarge={isLarge}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
