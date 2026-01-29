
import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Award size={160} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/3 text-center lg:text-left space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">Accreditations</h2>
              <h3 className="text-4xl font-bold">Certifications</h3>
              <p className="text-slate-400 leading-relaxed">
                Continually expanding my technical horizon through professional courses and specialized certifications.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-slate-950/50 border border-slate-800/80 p-6 rounded-2xl group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle2 className="text-cyan-500" size={18} />
                    <span className="text-xs font-bold text-slate-500 uppercase">{cert.issuer}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                  <div className="text-xs text-slate-500">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
