import React from 'react';

import { useScrollActive } from '../hooks/useScrollActive';

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}> = ({ title, company, period, description, isLast }) => {
  const { ref, isActive } = useScrollActive({ amount: 0.5, margin: "-20% 0px -20% 0px" });

  return (
    <div ref={ref} className={`group border-l border-neutral-800 pl-8 pb-12 relative ${isLast ? 'pb-0' : ''}`}>
      <div className={`absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 group-hover:bg-lime-400 transition-colors ${isActive ? 'bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]' : ''}`}></div>
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className={`text-2xl font-bold text-white group-hover:text-lime-400 transition-colors ${isActive ? 'text-lime-400' : ''}`}>{title}</h3>
        <span className="text-neutral-500 font-mono">{period}</span>
      </div>
      <p className="text-lg text-neutral-300 mb-4">{company}</p>
      <p className="text-neutral-500 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">EXPERIENCE</h2>
        <div className="h-[1px] bg-neutral-800 flex-grow ml-8 mb-2 hidden md:block"></div>
      </div>

      <div className="space-y-0">
        <ExperienceItem 
          title="Junior Product Designer"
          company="QuGates Technologies"
          period="Jul, 2025 — Present"
          description="Designed ERP accounts and admin modules for clients, creating user-friendly interfaces, optimizing workflows, improving usability, and ensuring alignment with client business and financial process requirements."
        />
        <ExperienceItem 
          title="UX Intern"
          company="QuGates Technologies"
          period="Apr, 2025 — Jun, 2025"
          description="Performed competitive analysis to identify market trends and competitor gaps, supporting development of the company's hospital appointment product and enhancing user experience and feature strategy."
          isLast
        />
      </div>
    </section>
  );
};

export default Experience;