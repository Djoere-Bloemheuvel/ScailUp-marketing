
import React from 'react';

const ContactModalBackground = () => {
  return (
    <>
      {/* Premium glassmorphic background with Apple-style layering */}
      <div 
        className="absolute inset-0 backdrop-blur-3xl bg-black/60 sm:rounded-3xl"
        style={{
          background: `
            radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(20, 184, 166, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 800px 400px at 100% 100%, rgba(34, 211, 238, 0.02) 0%, transparent 50%),
            radial-gradient(ellipse 600px 300px at 0% 100%, rgba(16, 185, 129, 0.015) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)
          `,
          boxShadow: `
            0 32px 64px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(20, 184, 166, 0.1)
          `
        }}
      />
      
      {/* Dynamic ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:rounded-3xl">
        {/* Primary glow - Apple-style soft illumination */}
        <div 
          className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.15] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(34, 211, 238, 0.2) 40%, transparent 70%)',
            filter: 'blur(100px)',
            animationDuration: '8s'
          }}
        />
        
        {/* Secondary accent glow */}
        <div 
          className="absolute -bottom-48 right-1/3 w-[500px] h-[500px] rounded-full opacity-[0.12] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)',
            filter: 'blur(120px)',
            animationDuration: '12s',
            animationDelay: '-4s'
          }}
        />
        
        {/* Subtle edge lighting */}
        <div 
          className="absolute top-1/2 -left-48 transform -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.08] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(20, 184, 166, 0.1) 60%, transparent 80%)',
            filter: 'blur(90px)',
            animationDuration: '10s',
            animationDelay: '-6s'
          }}
        />
      </div>

      {/* Apple-style floating accent elements */}
      <div className="absolute top-8 right-12 w-3 h-3 rounded-full bg-gradient-to-br from-teal-400/20 to-transparent animate-pulse opacity-40" />
      <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400/25 to-transparent animate-pulse opacity-30" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-emerald-400/30 to-transparent animate-pulse opacity-35" style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-1/3 left-8 w-1 h-1 rounded-full bg-gradient-to-br from-teal-300/25 to-transparent animate-pulse opacity-25" style={{ animationDelay: '9s' }} />
    </>
  );
};

export default ContactModalBackground;
