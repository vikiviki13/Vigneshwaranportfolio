import React from 'react';

import { useScrollActive } from '../hooks/useScrollActive';

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => {
  const { ref, isActive } = useScrollActive({ amount: 0.8, margin: "-10% 0px -10% 0px" });

  return (
    <div
      ref={ref}
      className={`group px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 font-medium hover:border-lime-500 hover:text-lime-400 hover:bg-lime-900/10 transition-all duration-300 cursor-default ${isActive ? 'border-lime-500 text-lime-400 bg-lime-900/10 scale-105' : ''}`}
    >
      {skill}
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    "User Research", "Wireframing", "Prototyping", "UI Design",
    "Design Systems", "Figma", "Interaction Design", "Logo Design", "Accessibility", "Usability Testing"
  ];

  return (
    <section id="skills" className="py-20 border-y border-neutral-900 bg-neutral-900/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Expertise & Tools</h2>
        <p className="text-neutral-500 max-w-lg mx-auto">
          My stack is built for speed and scalability, allowing me to move from concept to code-ready designs efficiently.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <SkillChip key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;