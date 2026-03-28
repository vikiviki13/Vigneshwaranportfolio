import React from 'react';

const Experience: React.FC = () => {
   return (
      <section id="experience" className="scroll-mt-32">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">EXPERIENCE</h2>
            <div className="h-[1px] bg-neutral-800 flex-grow ml-8 mb-2 hidden md:block"></div>
         </div>

         <div className="space-y-0">
            {/* Item 1 */}
            <div className="group border-l border-neutral-800 pl-8 pb-12 relative">
               <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 group-hover:bg-lime-400 transition-colors"></div>
               <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">Junior Product Designer</h3>
                  <span className="text-neutral-500 font-mono">Jul, 2025 — Present</span>
               </div>
               <p className="text-lg text-neutral-300 mb-4">QuGates Technologies</p>
               <p className="text-neutral-500 leading-relaxed max-w-2xl">
                  Designed ERP accounts and admin modules for clients, creating user-friendly interfaces, optimizing workflows, improving usability, and ensuring alignment with client business and financial process requirements.
               </p>
            </div>

            {/* Item 2 */}
            <div className="group border-l border-neutral-800 pl-8 pb-12 relative">
               <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 group-hover:bg-lime-400 transition-colors"></div>
               <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">UX Intern</h3>
                  <span className="text-neutral-500 font-mono">Apr, 2025 — Jun, 2025</span>
               </div>
               <p className="text-lg text-neutral-300 mb-4">QuGates Technologies</p>
               <p className="text-neutral-500 leading-relaxed max-w-2xl">
                  Performed competitive analysis to identify market trends and competitor gaps, supporting development of the company's hospital appointment product and enhancing user experience and feature strategy..
               </p>
            </div>
         </div>
      </section>
   );
};

export default Experience;