import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-[#1A1208] border-t border-gold/10 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center gap-10 text-center">
          
          {/* Logo */}
          <span className="font-display text-4xl sm:text-5xl italic text-rose font-medium">
            Flourish
          </span>
          
          <div className="space-y-4 max-w-sm">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-cream/40 leading-relaxed">
              Where luxury meets wellness. <br />
              Experience the atelier.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <button 
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="group flex items-center gap-4 bg-pink text-white px-10 py-5 rounded-full font-body text-[10px] tracking-[0.3em] uppercase hover:bg-rose/90 transition-all duration-500 shadow-2xl hover:shadow-rose/20 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            BOOK VIA WHATSAPP
          </button>

          {/* Secondary Links */}
          <div className="flex flex-wrap gap-8 justify-center pt-8 border-t border-cream/5 w-full mt-10">
            {['Privacy', 'Terms', 'Instagram', 'Pinterest'].map(link => (
              <span 
                key={link}
                className="font-body text-[10px] tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-[8px] tracking-[0.3em] uppercase text-cream/10 mt-6">
            © 2024 Flourish Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
