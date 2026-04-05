import React from 'react';
import luxuryHeroImg from '../assets/images/luxury_hero.webp';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] overflow-visible bg-cream">
      {/* The main hero container with rounded bottom corners */}
      <div className="relative h-full w-full overflow-hidden bg-noir rounded-b-[80px] shadow-2xl">
        {/* Background Image */}
        <img
          src={luxuryHeroImg}
          alt="Flourish Luxury Salon"
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-100 blur-sm"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-noir/20 via-transparent to-noir/40" />


        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10 sm:px-20 lg:px-32 mx-auto w-full">
          <div className="space-y-0 relative">

            <h1 className="hero-title select-none">
              <span className="line-flourish text-7xl sm:text-8xl lg:text-9xl text-cream uppercase tracking-tighter">
                Flourish
              </span>
              <span className="line-beauty text-rose font-script text-[3rem] sm:text-[4rem] lg:text-[5rem] -my-[0.02em] sm:-my-[0.05em]">
                Beauty
              </span>
              <span className="line-parlour text-7xl sm:text-8xl lg:text-9xl text-cream uppercase tracking-tighter">
                Parlour
              </span>
            </h1>

            <p className="font-body text-sm sm:text-lg text-cream/70 max-w-md mt-10 leading-relaxed tracking-wide text-left">
              Where high-end artistry meets holistic wellness. Experience the pinnacle of luxury care in our private atelier.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-4 text-cream font-body text-xs tracking-widest uppercase transition-colors hover:text-rose"
              >
                <span className="w-12 h-px bg-gold group-hover:w-16 transition-all duration-300" />
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
          <div className="w-32 h-32 border border-cream/20 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-cream/40 text-[8px] tracking-[0.4em] uppercase">Private • Atelier •</span>
          </div>
        </div>
      </div>
    </section>
  );
}
