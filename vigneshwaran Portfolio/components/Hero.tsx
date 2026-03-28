import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          Available for new opportunities
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-bold text-white tracking-tighter text-balance">
          Digital designer <br />
          crafting <span className="text-lime-400">future</span> interfaces.
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I am Vigneshwaran. I combine strategic thinking with premium aesthetics to design software that feels inevitable.
        </p>

        <div className="pt-8">
          <a href="#work" className="inline-flex items-center gap-3 text-sm font-bold text-white uppercase tracking-widest hover:text-lime-400 transition-colors group">
            View Selected Works
            <ArrowDown className="animate-bounce group-hover:text-lime-400" size={16} />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;