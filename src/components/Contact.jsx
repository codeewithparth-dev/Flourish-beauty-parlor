import React from 'react';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#FDF8F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-body text-[10px] text-gold tracking-[0.3em] uppercase block">
            The Atelier
          </span>
          <h2 className="font-display text-5xl sm:text-7xl text-noir">Find Us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info (centered grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left mb-20">
            <div className="space-y-4">
              <p className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">Location</p>
              <p className="font-display text-2xl text-noir leading-relaxed">
                742 Serenity Blvd <br />
                Suite 100 <br />
                Blossom Heights
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">Concierge</p>
              <p className="font-display text-2xl text-noir leading-relaxed">
                (324) 2008736  <br />
                hello@flourish.com
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">Atelier Hours</p>
              <div className="font-body text-sm text-muted/80 space-y-1 tracking-wide uppercase">
                <p>Mon-Fri • 01:00pm - 12:00pm</p>
                <p>Sat • 12:00 - 11:00</p>
                <p>Sun • By Appointment</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] bg-blush/30 border border-gold/10 group">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gold/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-noir/5 to-transparent">
              <button className="text-[10px] tracking-[0.3em] uppercase text-gold hover:text-rose transition-colors">
                Open in Directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
