import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('root');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for scroll tracking
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['work', 'skills', 'about', 'contact'].map(id => document.getElementById(id));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isHireModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isHireModalOpen]);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Expertise', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
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
                className={`
                  px-4 py-2 text-sm font-medium rounded-full transition-all
                  ${activeSection === link.id
                    ? 'text-lime-400 bg-white/5'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsHireModalOpen(true)}
                className="px-5 py-2 bg-lime-400 text-black text-sm font-bold rounded-full hover:bg-lime-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]"
              >
                Hire Me
              </button>
            </div>

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

      {/* Hire Modal */}
      <AnimatePresence>
        {isHireModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHireModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-lime-400/5 rounded-full blur-[80px]" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-lime-400/10 rounded-full flex items-center justify-center mb-6">
                  <span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3">Let's work together</h2>
                <p className="text-neutral-400 mb-8 max-w-sm">
                  I'm currently available for freelance projects and full-time opportunities. How would you like to connect?
                </p>

                <div className="w-full space-y-3">
                  <a
                    href="tel:8220514063"
                    className="flex items-center justify-between group w-full p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-lime-400/30 transition-all text-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                        <Phone size={20} className="text-neutral-400 group-hover:text-lime-400" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-bold">Call Me</span>
                        <span className="block text-xs text-neutral-500 font-medium">+91 8220514063</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-neutral-600 group-hover:text-lime-400 transform group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="mailto:vigneshwaranvmece@gmail.com"
                    className="flex items-center justify-between group w-full p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-lime-400/30 transition-all text-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                        <Mail size={20} className="text-neutral-400 group-hover:text-lime-400" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-bold">Email Me</span>
                        <span className="block text-xs text-neutral-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">vigneshwaranvmece@gmail.com</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-neutral-600 group-hover:text-lime-400 transform group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                <button
                  onClick={() => setIsHireModalOpen(false)}
                  className="mt-8 text-neutral-500 hover:text-white text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`
                text-4xl font-bold transition-colors font-[Syne]
                ${activeSection === link.id ? 'text-lime-400' : 'text-white hover:text-lime-400'}
              `}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
                setIsMobileMenuOpen(false);
                setIsHireModalOpen(true);
            }}
            className="px-8 py-3 bg-lime-400 text-black text-lg font-bold rounded-full"
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;