import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen relative w-full bg-[#050505] text-neutral-200 selection:bg-lime-400 selection:text-black">
      <div className="bg-noise"></div>
      
      <Navbar />

      <main className="w-full relative z-10">
        <Hero />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-40 pb-24">
            <Projects onOpenProject={setSelectedProject} />
            <Skills />
            <Experience />
            <About />

        </div>
      </main>


      <Contact />

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;