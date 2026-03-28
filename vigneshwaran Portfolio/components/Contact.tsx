import React from 'react';
import { Linkedin, Dribbble, ArrowUp, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#050505] text-white pt-24 pb-8 border-t border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">

        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
            Let's Talk.
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-10 text-lg">
            Have a project in mind? Let's build something extraordinary together.
          </p>
          <a
            href="mailto:vigneshwaranvmece@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 text-black rounded-full font-bold text-lg hover:bg-lime-300 hover:scale-105 transition-all"
          >
            <Mail size={20} />
            vigneshwaranvmece@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <p className="text-neutral-500 text-sm font-mono">Chennai, India</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Instagram</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Contact;