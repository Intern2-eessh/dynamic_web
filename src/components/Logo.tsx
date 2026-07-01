import logoImg from '../assets/logo.jpeg';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img 
    src={logoImg} 
    alt="ElamaniTech Logo" 
    className={`${className} object-contain`} 
    style={{ borderRadius: '8px', mixBlendMode: 'lighten' }} 
  />
);
