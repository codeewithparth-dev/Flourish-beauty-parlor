import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Leaf, ArrowRight } from 'lucide-react';
import { WHATSAPP_SERVICE_URL } from '../utils/whatsapp';
import hairColoringImg from '../assets/services/hair-coloring.webp';
import bridalMakeupImg from '../assets/services/bridal-makeup.webp';
import facialImg from '../assets/services/facial.webp';
import threadingImg from '../assets/services/threading.webp';
import waxingImg from '../assets/services/waxing.webp';


function ServiceCard({ title, desc, tag, icon: Icon, img, dark = false }) {
  return (
    <div
      className={`relative rounded-[40px] p-8 sm:p-10 lg:p-12 min-h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-700 group shadow-lg hover:shadow-2xl`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          loading="lazy"
          decoding="async"
        />
        <div className={`absolute inset-0 transition-opacity duration-700 ${
          dark ? 'bg-noir/80 group-hover:bg-noir/70' : 'bg-noir/40 group-hover:bg-noir/30'
        }`} />
      </div>

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex justify-between items-start mb-6">
          {Icon ? (
            <Icon className="w-6 h-6 text-gold opacity-90" />
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          )}
          {tag && (
            <span className="font-body text-[10px] text-gold tracking-[0.3em] uppercase">
              {tag}
            </span>
          )}
        </div>

        <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-4 text-white">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed tracking-wide text-white/70 max-w-[280px]">
          {desc}
        </p>
      </div>

      {/* Floating CTA */}
      <div className="relative z-10 pt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <button
          onClick={() => window.open(WHATSAPP_SERVICE_URL(title), '_blank')}
          className="flex items-center gap-3 text-white font-body text-[10px] tracking-[0.2em] uppercase cursor-pointer"
        >
          Enquire Now
          <span className="w-8 h-[1px] bg-white/50"></span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#FDF8F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <p className="font-body text-[10px] text-gold tracking-[0.3em] uppercase mb-4">
              Our Indulgence
            </p>
            <h2 className="font-display text-5xl sm:text-7xl text-noir leading-none">
              The Menu
            </h2>
          </div>
          <p className="font-body text-base text-muted max-w-sm leading-relaxed pb-2 border-b border-noir/5">
            A curated selection of high-fashion beauty treatments, where precision meets restorative care.
          </p>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {/* Row 1 — 2 Large Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ServiceCard
              title="Hair Coloring"
              tag="HAIR"
              img={hairColoringImg}
              desc="Vibrant, long-lasting hair color applied with precision for perfectly polished hair."
              dark={true}
            />
            <ServiceCard
              title="Bridal Makeup"
              tag="BRIDAL"
              img={bridalMakeupImg}
              desc="Full glam bridal look crafted with premium products for your most special day."
            />
          </div>

          {/* Row 2 — 3 Equal Smaller Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Facial Treatment"
              tag="SKINCARE"
              icon={Star}
              img={facialImg}
              desc="Deep cleansing & rejuvenating skin therapy for a natural healthy glow."
            />
            <ServiceCard
              title="Waxing"
              tag="BODY"
              icon={Sparkles}
              img={waxingImg}
              desc="Smooth, flawless skin with our gentle and effective hair removal."
            />
            <ServiceCard
              title="Threading"
              tag="GROOMING"
              icon={Leaf}
              img={threadingImg}
              desc="Precise eyebrow & facial hair shaping for clean defined results."
            />
          </div>
        </div>

        {/* Explore All Link */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/services"
            className="group flex items-center gap-4 px-12 py-5 border border-pink text-pink rounded-full font-body text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-pink hover:text-white shadow-lg hover:shadow-pink/20"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
