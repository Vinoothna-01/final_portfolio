import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#home" className="text-2xl font-black gradient-text">VD.</a>
          <p className="text-slate-500 mt-2 text-sm">Building the future of data analytics.</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} VD. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] mt-1 font-mono uppercase tracking-widest">
            Built with React 19 • Tailwind CSS • Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;