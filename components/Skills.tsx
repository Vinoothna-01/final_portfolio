
import React from 'react';
import { Code, BarChart, Palette, Settings } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

interface SkillsProps {
  id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={32} />;
      case 'BarChart': return <BarChart size={32} />;
      case 'Palette': return <Palette size={32} />;
      case 'Settings': return <Settings size={32} />;
      default: return <Code size={32} />;
    }
  };

  return (
    <section id={id} className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400 mb-4">Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Technical Skillset</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              className="glass p-6 md:p-8 rounded-3xl hover:border-purple-500/50 transition-all group"
            >
              <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <div className="text-cyan-400">
                  {getIcon(category.icon)}
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">{skill}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-full"
                         style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                       ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
