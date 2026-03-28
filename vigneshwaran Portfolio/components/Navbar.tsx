import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`
            flex items-center justify-between px-6 py-3 rounded-full 
            border border-white/10 backdrop-blur-xl bg-neutral-900/80 
            transition-all duration-300 shadow-2xl shadow-black/50
            w-full max-w-4xl
          `}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#root')}
            className="text-lg font-bold tracking-tight text-white hover:text-lime-400 transition-colors"
          >
            Vigneshwaran<span className="text-lime-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:block px-5 py-2 bg-lime-400 text-black text-sm font-bold rounded-full hover:bg-lime-300 hover:scale-105 transition-all"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-4xl font-bold text-white hover:text-lime-400 transition-colors font-[Syne]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;