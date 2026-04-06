import React from 'react';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32">
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
                Shop #5, Bismillah Masjid, Near M. Suleman Mithai Wala, Kharadar Karachi.
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

          {/* Google Maps Embed */}
          <div>
            <div style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '400px',
              border: '1px solid rgba(201,130,154,0.2)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.5!2d66.9966220!3d24.8518690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzA3LjciTiA2NsKwNTknNDcuOCJF!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flourish Beauty Parlour Location"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=24.8518690,66.9966220"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                backgroundColor: '#c9829a',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b06880'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c9829a'}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
