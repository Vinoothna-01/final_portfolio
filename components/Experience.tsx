
import React from 'react';
import { EXPERIENCES } from '../constants';

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400 mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Professional Experience</h3>
        </div>

        <div className="space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Vertical line indicator */}
              {idx !== EXPERIENCES.length - 1 && (
                <div className="absolute left-6 top-14 bottom-[-40px] w-0.5 bg-slate-800 group-hover:bg-cyan-500/30 transition-colors"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl relative z-10 ${
                  exp.current ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-slate-800 text-slate-400'
                }`}>
                  {idx + 1}
                </div>

                <div className="flex-grow glass p-6 md:p-8 rounded-2xl group-hover:border-cyan-500/40 transition-all group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 px-4 py-1.5 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 group-hover:bg-cyan-500 transition-colors"></span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
