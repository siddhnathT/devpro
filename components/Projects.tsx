
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">Impact & Architecture</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-2xl bg-gradient-to-br from-surface/50 to-dark border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              
              {/* Hover Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="p-8 flex flex-col h-full relative z-10">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white font-display mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {project.description}
                        </p>
                    </div>
                    {project.metric && (
                        <div className="flex-shrink-0 inline-flex items-center px-3 py-1.5 rounded-lg bg-green-900/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                            <span className="mr-1.5 animate-pulse">⚡</span> {project.metric}
                        </div>
                    )}
                </div>
                
                {/* Architecture Flow Diagram */}
                <div className="mt-auto bg-dark/60 rounded-xl p-6 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
                    <div className="flex items-center mb-4">
                         <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest flex items-center">
                            <Layers size={12} className="mr-2" />
                            Architecture Flow
                         </span>
                    </div>
                    
                    {project.architectureFlow && (
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-2 text-xs text-gray-300 font-mono relative z-10">
                            {project.architectureFlow.map((step, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="px-3 py-2 rounded-lg bg-surface border border-white/10 shadow-lg group-hover:border-blue-500/20 group-hover:text-blue-100 transition-all duration-300 whitespace-nowrap">
                                        {step}
                                    </div>
                                    {index < project.architectureFlow!.length - 1 && (
                                        <div className="mx-1 text-gray-600">
                                            <ArrowRight size={14} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* Decorative grid inside architecture box */}
                    <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
                </div>

                {/* Footer Tags */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-purple-500/20 group-hover:text-purple-200 transition-colors">
                           {tag}
                       </span>
                     ))}
                   </div>
                   <a href={project.link} className="flex items-center text-gray-500 hover:text-white text-xs transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">
                     Internal Project <ExternalLink size={10} className="ml-1" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
