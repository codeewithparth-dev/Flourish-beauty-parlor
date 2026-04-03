import logo from '../assets/logo/Parlor-logo.png';

export default function Logo({ scrolled, size = 48 }) {
  // Apply a subtle brightness filter when not scrolled (on dark navbar)
  const filterStyle = scrolled ? 'none' : 'brightness(1.1)';
  
  return (
    <img
      src={logo}
      alt="Flourish Beauty Parlour"
      style={{
        height: `${size}px`,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        filter: filterStyle
      }}
    />
  );
}