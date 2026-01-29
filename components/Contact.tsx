
import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-4 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">Get in touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Ready to build something <span className="gradient-text">amazing?</span></h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Currently open to new roles in Data Analytics and Machine Learning. Reach out via email or LinkedIn.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center space-x-6 p-5 glass rounded-2xl group hover:border-cyan-500/40 transition-all"
              >
                <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-6 p-5 glass rounded-2xl group transition-all">
                <div className="bg-purple-500/10 p-3 rounded-xl text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-bold">Atlanta, GA</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="glass p-4 rounded-xl hover:text-cyan-400 transition-colors">
                <Github />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="glass p-4 rounded-xl hover:text-cyan-400 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden group">
             <div className="relative z-10">
                <div className="mb-6 inline-flex p-6 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                   <MessageSquare size={48} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Let's Connect</h4>
                <p className="text-slate-400 max-w-xs mx-auto">
                  I'm always interested in hearing about new projects and opportunities in the data science space.
                </p>
                <div className="mt-8">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 font-bold rounded-2xl hover:opacity-90 transition-opacity"
                  >
                    Send me an Email
                  </a>
                </div>
             </div>
             
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
