import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark">
      {/* Static Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      {/* Subtle Moving Scan Grid */}
      <div className="absolute inset-0 bg-grid-scan opacity-20 animate-pulse-slow"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Star/Particle field effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-accent rounded-full shadow-[0_0_5px_cyan] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default BackgroundEffect;