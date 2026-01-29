import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from '../constants';
import { FileArchive, Loader2 } from 'lucide-react';
import JSZip from 'jszip';

const Footer: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportZip = async () => {
    setIsExporting(true);
    try {
      const zip = new JSZip();
      
      const portfolioData = {
        meta: {
          exportedAt: new Date().toISOString(),
          version: "1.0.0"
        },
        personal: PERSONAL_INFO,
        projects: PROJECTS,
        experience: EXPERIENCES,
        skills: SKILL_CATEGORIES
      };
      
      zip.file("portfolio_content.json", JSON.stringify(portfolioData, null, 2));
      zip.file("README.txt", `
Vinoothna Dudam - Portfolio Export
==================================
Role: ${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}

This archive contains the structured data representing the projects, 
experience, and skills showcased on the portfolio website.
      `.trim());

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Vinoothna_Dudam_Portfolio_Data.zip`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("ZIP Generation Error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-black gradient-text">VD.</a>
          <p className="text-slate-500 mt-2 text-sm max-w-xs">
            Designing intelligent data solutions and high-performance engineering.
          </p>
          
          <button 
            onClick={handleExportZip}
            disabled={isExporting}
            className="mt-6 flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            {isExporting ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <FileArchive size={14} className="group-hover:scale-110 transition-transform" />
            )}
            <span>{isExporting ? 'Packaging Zip...' : 'Export Portfolio Data (ZIP)'}</span>
          </button>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:items-end mt-2">
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
              Built with React 19 • Tailwind CSS • Framer Motion
            </p>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;