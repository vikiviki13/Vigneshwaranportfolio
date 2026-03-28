import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import Parallax from './Parallax';

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
    image: 'Assets/ChatGPT Image 28 Mar 2026, 13_31_05.png',
    tags: ['Doc Link', 'Mobile', '2025'],
    description: 'A comprehensive medical documentation application that allows healthcare professionals to quickly link patient records, manage transactions, and track medical history on the go.',
    shortDescription: 'Simplified complex medical transactions from a 7-step flow to 3 steps, reducing user drop-off.',
    purpose: 'The name "Doc Link" represents the seamless connection between medical documents and healthcare providers. Its purpose is to eliminate complex transaction flows that previously caused high user drop-off in medical data entry.',
    duration: '6 Months',
    coreUsers: 'Doctors, Nurses, and Medical Administrative Staff',
    tools: ['Figma', 'Sketch', 'InVision']
  },
  {
    id: 'p2',
    title: 'Hospital Management',
    category: 'SAAS Platform',
    role: 'UI/UX Designer',
    problem: 'Data overload for hospital management.',
    solution: 'Modular dashboard with progressive disclosure.',
    outcome: '25% increase in daily usage.',
    image: 'https://images.unsplash.com/photo-1538108149393-fdfd816d4902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['B2B', 'SAAS', '2025'],
    description: 'An end-to-end hospital administration platform that consolidates patient data, staff scheduling, and inventory management into a single progressive web interface.',
    shortDescription: 'Tackled data overload with a modular dashboard featuring progressive disclosure.',
    purpose: 'Designed to tackle the sheer volume of data overload in modern healthcare facilities, this project aims to provide a progressive disclosure dashboard that only shows administrators what they need, when they need it.',
    duration: '8 Months',
    coreUsers: 'Hospital Administrators and Department Heads',
    tools: ['React', 'Tailwind CSS', 'Redux', 'Figma']
  },
  {
    id: 'p3',
    title: 'Accounts ERP',
    category: 'SAAS Platform',
    role: 'UI/UX designer',
    problem: 'High cart abandonment (75%).',
    solution: 'Single-page checkout with trust signals.',
    outcome: '15% drop in abandonment.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['B2B', 'SAAS', '2025'],
    description: 'A robust enterprise resource planning system tailored for financial accounting, featuring advanced security, trust signals, and an optimized checkout/invoicing flow.',
    shortDescription: 'Replaced high-abandonment checkout with a single-page architecture and trust signals.',
    purpose: 'Built specifically to reduce high abandonment rates during financial software onboarding; it leverages trust signals and a single-page architecture to reassure users during critical financial tasks.',
    duration: '5 Months',
    coreUsers: 'Accountants, Financial Controllers, and Business Owners',
    tools: ['Next.js', 'PostgreSQL', 'Stripe', 'Framer Motion']
  },
  {
    id: 'p4',
    title: 'Hourly',
    category: 'Web App',
    role: 'AI Product Developer',
    problem: 'Need a platform to enter hourly work.',
    solution: 'Developed task entering system with notification.',
    outcome: '60% increase in time spent on page.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['WebApp', 'Personal', '2026'],
    description: 'A smart time-tracking and productivity web application designed to help freelancers and remote workers meticulously log their hourly tasks and manage billing automatically.',
    shortDescription: 'Developed an hourly task entry system with built-in productivity notifications.',
    purpose: 'Born from a personal need for better task management, "Hourly" serves as a dedicated platform to log hourly work with built-in notification systems to keep developers focused.',
    duration: '3 Months',
    coreUsers: 'Freelancers, Remote Teams, and Independent Contractors',
    tools: ['React', 'Node.js', 'MongoDB', 'Supabase']
  },
  {
    id: 'p5',
    title: 'Tea Round Pro',
    category: 'web App',
    role: 'AI Product Developer',
    problem: 'Confusing analytics for novice traders.',
    solution: 'Simplified charts with predictive insights.',
    outcome: '30% more active daily users.',
    image: 'public/images/image3.png',
    tags: ['WebApp', 'Personal', '2026'],
    description: 'An expansive analytics dashboard built to demystify complex data for casual users, bringing high-end predictive insights into an approachable, simplified interface.',
    shortDescription: 'Simplified confusing charts with intuitive, predictive insights for casual users.',
    purpose: 'Originally focused on simplifying charts, "Tea Round Pro" aims to break down confusing analytics for novice traders or casual users, leading to significantly higher daily engagement.',
    duration: '4 Months',
    coreUsers: 'Novice Traders, Casual Investors, and Small Business Owners',
    tools: ['Vue.js', 'D3.js', 'Firebase', 'Netlify']
  }
];

const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  return (
    <section id="work" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">PROJECTS</h2>
        </motion.div>
        <div className="h-[1px] bg-neutral-800 flex-grow ml-8 mb-2 hidden md:block"></div>
      </div>

      <div className="flex flex-col gap-24">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Image - Alternating Order */}
            <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] border border-neutral-800 bg-neutral-900 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Parallax offset={30} className="h-full w-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-115 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </Parallax>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Parallax offset={20}>
                <div className="flex flex-col gap-6 lg:items-start">
                  <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                    {project.shortDescription || project.description}
                  </p>

                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-start gap-4">
                      <span className="text-neutral-500 font-medium min-w-[80px]">Role</span>
                      <span className="text-neutral-300">{project.role}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-neutral-500 font-medium min-w-[80px]">Outcome</span>
                      <span className="text-lime-400 font-semibold">{project.outcome}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-500 group-hover:border-lime-400/30 group-hover:text-lime-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProject(project);
                    }}
                    className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm mt-4 group/btn w-fit"
                  >
                    View Case Study <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-lime-400" size={18} />
                  </button>
                </div>
              </Parallax>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;