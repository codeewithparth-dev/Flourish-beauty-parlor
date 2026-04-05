import React from 'react';
import atelierImg from '../assets/images/luxury-atlier.webp';

const Story = () => {
  return (
    <section id="story" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="rounded-[60px] object-cover shadow-sm max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left Column: Typography & Story */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-display text-5xl sm:text-7xl text-noir leading-[1.1] tracking-tight">
                Beyond the <br />
                <span className="relative inline-block">
                  <span className="relative z-10 italic font-light">Surface</span>
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-rose/30"></span>
                </span>
              </h2>

              <p className="font-body text-base text-muted max-w-md leading-relaxed">
                At Flourish, we believe beauty is an intimate dialogue between the self and the artisan. Our atelier is founded on the principle of curated excellence.
              </p>
            </div>

            <div className="space-y-8 border-l border-gold/20 pl-8">
              <p className="font-body text-sm text-muted/80 leading-loose uppercase tracking-widest">
                Our Philosophy
              </p>
              <p className="font-body text-lg text-noir/80 leading-relaxed italic">
                "We don't just provide services; we craft experiences that resonate with the soul of modern luxury."
              </p>
            </div>

          </div>

          {/* Right Column: Imagery */}
          <div className="relative">
            {/* The Image with large rounded corners */}
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-4/5">
              <img
                src={atelierImg}
                alt="Flourish Atelier Interior"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blush rounded-full z-0 opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold/10 rounded-full z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
