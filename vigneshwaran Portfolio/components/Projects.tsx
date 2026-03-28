import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
}

const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'Doc Link',
    category: 'Mobile App',
    role: 'Product Designer',
    problem: 'Complex transaction flows causing user drop-off.',
    solution: 'Simplified 7-step flow to 3 steps using gesture navigation.',
    outcome: '40% faster task completion.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    tags: ['Doc Link', 'Mobile', '2025']
  },
  {
    id: 'p2',
    title: 'Hospital Management',
    category: 'SaaS Platform',
    role: 'UI/UX Designer',
    problem: 'Data overload for hospital management.',
    solution: 'Modular dashboard with progressive disclosure.',
    outcome: '25% increase in daily usage.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    tags: ['B2B', 'SAAS', '2025']
  },
  {
    id: 'p3',
    title: 'Accounts ERP',
    category: 'Client Project',
    role: 'UI/UX designer',
    problem: 'High cart abandonment (75%).',
    solution: 'Single-page checkout with trust signals.',
    outcome: '15% drop in abandonment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    tags: ['B2B', 'SAAS', '2025']
  }
];

const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  return (
    <section id="work" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Selected Work</h2>
          <p className="text-neutral-500">A curation of recent digital products.</p>
        </div>
        <div className="h-[1px] bg-neutral-800 flex-grow ml-8 mb-2 hidden md:block"></div>
      </div>

      <div className="flex flex-col gap-24">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer"
            onClick={() => onOpenProject(project)}
          >
            {/* Image - Alternating Order */}
            <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] border border-neutral-800 bg-neutral-900 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
              <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'lg:items-end' : 'lg:items-start'}`}>
                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                  {project.problem} {project.solution}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-500 group-hover:border-lime-400/30 group-hover:text-lime-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm mt-4 group/btn">
                  View Case Study <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-lime-400" size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;