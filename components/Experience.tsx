import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            {/* Hidden on mobile, visible on md+ at specific offset */}
            <div className="absolute left-4 md:left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:block hidden"></div>
            {/* Mobile Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:hidden"></div>

            <div className="space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative flex flex-col md:flex-row gap-8 md:gap-0">
                  
                  {/* Date Section (Desktop) */}
                  <div className="hidden md:flex w-[120px] flex-col items-end pr-8 py-2 text-right flex-shrink-0">
                     <span className="text-blue-400 font-bold font-display text-lg leading-none">
                        {exp.period.split(' ')[0]} 
                     </span>
                     <span className="text-gray-500 text-sm font-mono mt-1">
                        {exp.period.split(' ')[1]?.replace(/[–-]/g, '') || ''}
                     </span>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-[120px] top-0 md:top-2 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-dark border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform bg-surface">
                         <Briefcase size={16} className="text-blue-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="pl-12 md:pl-12 flex-1">
                     <div className="group relative bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-surface/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10">
                        
                        {/* Mobile Date Header */}
                        <div className="md:hidden mb-4 flex items-center text-blue-400 text-sm font-mono">
                           <Calendar size={14} className="mr-2" />
                           {exp.period}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-2xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center text-lg text-gray-400 mt-1">
                                    <span className="text-blue-500 font-medium mr-2">@</span>
                                    <span className="text-gray-300">{exp.company}</span>
                                </div>
                            </div>
                            
                            {/* Full Period Badge for Desktop detail */}
                            <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                                {exp.period}
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0 group-hover:bg-blue-400 transition-colors"></span>
                                    <span className="group-hover:text-gray-200 transition-colors">{desc}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {exp.technologies.map(tech => (
                                <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-dark/50 text-blue-300 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
