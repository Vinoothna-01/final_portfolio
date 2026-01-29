
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
            <p className="text-slate-400 text-lg">
              A selection of my technical work across machine learning, data analysis, and software development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 p-1.5 glass rounded-2xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-cyan-500 text-slate-950' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="glass rounded-3xl group flex flex-col h-full hover:border-cyan-500/50 transition-all animate-in fade-in slide-in-from-bottom-8 duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    {project.featured && (
                      <span className="bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase px-2 py-0.5 rounded">Featured</span>
                    )}
                    <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-slate-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map(lang => (
                    <span key={lang} className="text-xs font-mono text-cyan-400/80 bg-cyan-500/5 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/50">
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                    Core tech: {project.primaryLanguage}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 glass rounded-3xl">
             <p className="text-slate-500">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
