
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-surface/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
           {/* Background Decorative Icon */}
           <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] rotate-12">
             <GraduationCap size={300} />
           </div>
           
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center font-display relative z-10">
            <GraduationCap className="mr-3 text-primary" size={32} /> Education
          </h2>
          
          <div className="space-y-12 relative z-10">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-white/10 hover:border-primary/50 transition-colors duration-300 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-gray-600 group-hover:border-primary group-hover:scale-125 transition-all"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-display">{edu.degree}</h3>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-1.5 rounded-full w-fit mt-3 md:mt-0 whitespace-nowrap border border-primary/20">
                      {edu.year}
                  </span>
                </div>
                
                <p className="text-lg text-gray-300 mb-3 font-light">{edu.institution}</p>
                {edu.description && <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
