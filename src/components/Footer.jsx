import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a0e0a', borderTop: '1px solid rgba(201,130,154,0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 24px' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', paddingBottom: '28px', borderBottom: '1px solid rgba(245,240,232,0.06)' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontFamily: 'serif', fontSize: '28px', fontStyle: 'italic', color: '#c9829a', fontWeight: 500, lineHeight: 1 }}>
              Flourish
            </span>
            <p style={{ fontFamily: 'sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', lineHeight: 1.6, margin: 0 }}>
              Where luxury meets wellness
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Home', 'Services', 'Gallery', 'Contact'].map(link => (
              <a
                key={link}
                href={link === 'Home' ? '/' : '/' + link.toLowerCase()}
                style={{ fontFamily: 'sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(212,160,96,0.6)', textDecoration: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = '#d4a060'}
                onMouseLeave={e => e.target.style.color = 'rgba(212,160,96,0.6)'}
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#c9829a', color: 'white', padding: '12px 24px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b06880'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c9829a'}
          >
            <MessageCircle size={14} />
            Book via WhatsApp
          </button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '20px' }}>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com/flourishbeautyparlour"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(201,130,154,0.5)', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9829a'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,130,154,0.5)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(201,130,154,0.5)', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9829a'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,130,154,0.5)'}
            >
              <Phone size={16} />
            </a>
          </div>

          <p style={{ fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.15)', margin: 0 }}>
            © 2025 Flourish Beauty Parlour. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(245,240,232,0.2)' }}>
            <MapPin size={12} />
            <span style={{ fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Karachi, Pakistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}