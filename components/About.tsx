
import React from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const highlights = [
    { label: "GPA", value: "3.7/4.0", icon: <Star className="text-yellow-400" /> },
    { label: "Projects", value: "15+", icon: <BookOpen className="text-cyan-400" /> },
    { label: "Certs", value: "5+", icon: <Award className="text-purple-400" /> }
  ];

  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering businesses through <span className="gradient-text">intelligent insights</span>
              </h3>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a graduate Computer Science student at Kennesaw State University specializing in 
              Data Analytics and Machine Learning. With a background as a Data Analyst at Goldman Sachs, 
              I bring a unique blend of financial acumen and technical expertise.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              My approach focuses on the intersection of robust backend engineering and user-centric 
              data visualization. I believe that data is only as powerful as the stories it can tell.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="glass p-4 rounded-2xl text-center group hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">{h.icon}</div>
                  <div className="text-xl font-bold">{h.value}</div>
                  <div className="text-xs text-slate-500 uppercase font-medium">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-10"></div>
            <div className="glass p-8 rounded-3xl relative space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <GraduationCap className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">M.S. Computer Science</h4>
                  <p className="text-slate-400">Kennesaw State University</p>
                  <p className="text-sm text-slate-500 mt-1 italic">Expected Graduation: 2026</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <Star className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Key Strengths</h4>
                  <ul className="text-slate-400 space-y-2 mt-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      <span>Advanced Statistical Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>Full-stack Dashboard Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                      <span>Machine Learning Deployment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <p className="text-sm italic text-slate-400 leading-relaxed">
                    "Vinoothna brings an exceptional analytical mindset to complex problems, consistently delivering high-quality, data-driven solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
