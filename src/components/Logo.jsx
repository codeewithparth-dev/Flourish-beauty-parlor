import logo from '../assets/logo/parlor.pfp.png';
import logoDark from '../assets/logo/parlor.pfp.png';

export default function Logo({ scrolled, size = 48, lightBg = false, style = {} }) {
  // Use the appropriate logo based on background
  // - Main logo (parlor.pfp.png) for better visibility on all backgrounds
  // - Dark logo only when specifically needed for light backgrounds
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
