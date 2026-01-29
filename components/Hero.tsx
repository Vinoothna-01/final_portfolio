import React from 'react';
import { Github, Linkedin, Mail, MousePointer2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const handleDownloadCV = () => {
    // Simulating a CV download by creating a text-based professional summary blob
    const cvContent = `
NAME: ${PERSONAL_INFO.name}
ROLE: ${PERSONAL_INFO.role}
EMAIL: ${PERSONAL_INFO.email}
LINKEDIN: ${PERSONAL_INFO.linkedin}
GITHUB: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.bio}

--- 
Generated from Professional Portfolio
    `.trim();
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping"></span>
          <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight animate-in fade-in zoom-in duration-1000">
          I'm <span className="gradient-text">Vinoothna Dudam</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          {PERSONAL_INFO.role}. Creating data-driven solutions with elegant designs and high-performance engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center space-x-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-3 glass rounded-full" title="GitHub">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-3 glass rounded-full" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors p-3 glass rounded-full" title="Email">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all active:scale-95"
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <MousePointer2 size={32} className="text-slate-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;