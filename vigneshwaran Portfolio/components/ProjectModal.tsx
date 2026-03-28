import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-modal-slide-up border border-neutral-800 rounded-3xl">
        
        {/* Header */}
        <div className="p-6 md:p-8 flex justify-between items-start bg-[#0a0a0a] z-10 sticky top-0 border-b border-neutral-800">
          <div>
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest mb-1 block">{project.category}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-12 space-y-12">
            <div className="w-full aspect-video bg-neutral-900 overflow-hidden rounded-xl border border-neutral-800">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="text-lg text-neutral-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                        <p className="text-lg text-neutral-400 leading-relaxed">{project.solution}</p>
                    </div>
                    
                    {/* Visuals Placeholder */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="aspect-square bg-neutral-900 rounded-xl flex items-center justify-center text-neutral-600 text-sm border border-neutral-800 border-dashed">Wireframe</div>
                        <div className="aspect-square bg-neutral-900 rounded-xl flex items-center justify-center text-neutral-600 text-sm border border-neutral-800 border-dashed">Mockup</div>
                    </div>
                </div>
                
                <div className="md:col-span-1 space-y-8">
                    <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
                        <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Impact</h3>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-lime-400 mt-1 flex-shrink-0" size={20} />
                            <p className="text-neutral-300 font-medium">{project.outcome}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wider">Role</h3>
                        <p className="text-white">{project.role}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wider">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-black border border-neutral-800 text-neutral-400 text-sm rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;