import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about-section' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Achievements', href: '#achievements-section' },
    { name: 'Founder\'s Desk', href: '#founder-desk' },
    { name: 'Our Solutions', href: '#our-solutions' },
    { name: 'Why Elamani Tech?', href: '#why-elamani' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text leading-none">ElamaniTech</span>
            <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase mt-1 leading-none">Engineering Intelligence</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#') && link.href.length > 1) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[0.999rem] font-medium text-foreground/80 hover:text-[#2cb5a0] transition-all duration-200 hover:scale-[1.15] inline-block"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]">
            Contact Us
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#') && link.href.length > 1) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }
              }}
              className="text-lg text-foreground/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary w-full text-white px-5 py-3 rounded-lg text-base font-medium mt-2">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
