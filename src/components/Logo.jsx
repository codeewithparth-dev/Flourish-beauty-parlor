import logo from '../assets/logo/Parlor-logo.png';
import logoDark from '../assets/logo/Parlor-dark-logo.png';

export default function Logo({ scrolled, size = 48, lightBg = false, style = {} }) {
  // Use the appropriate logo based on background
  // - Original white-text logo on dark backgrounds (home page, not scrolled)
  // - Dark-text logo on light backgrounds (other pages or when scrolled)
  const currentLogo = lightBg ? logoDark : logo;
  
  return (
    <img
      src={currentLogo}
      alt="Flourish Beauty Parlour"
      style={{
        height: size + 'px',
        width: 'auto',
        minWidth: '90px',
        display: 'block',
        objectFit: 'contain',
        transition: 'opacity 0.3s ease-in-out',
        ...style
      }}
    />
  );
}
