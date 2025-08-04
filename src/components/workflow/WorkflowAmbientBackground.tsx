
import React from 'react';

const WorkflowAmbientBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle nebula background layers */}
      <div className="premium-nebula absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/3 via-white/2 to-transparent rounded-full blur-3xl" />
      <div className="premium-nebula absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-radial from-purple-300/2 via-blue-200/1 to-transparent rounded-full blur-2xl" style={{ animationDelay: '8s' }} />
      <div className="premium-nebula absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-radial from-white/2 via-purple-200/1 to-transparent rounded-full blur-3xl" style={{ animationDelay: '16s' }} />
      
      {/* Ultra-subtle stardust particles */}
      <div className="premium-stardust absolute top-20 left-20 w-0.5 h-0.5 bg-white/8 rounded-full blur-sm" style={{ animationDelay: '0s' }} />
      <div className="premium-stardust absolute top-40 right-32 w-0.5 h-0.5 bg-blue-200/6 rounded-full blur-sm" style={{ animationDelay: '5s' }} />
      <div className="premium-stardust absolute bottom-32 left-32 w-0.5 h-0.5 bg-white/7 rounded-full blur-sm" style={{ animationDelay: '10s' }} />
      <div className="premium-stardust absolute bottom-20 right-20 w-0.5 h-0.5 bg-purple-200/5 rounded-full blur-sm" style={{ animationDelay: '15s' }} />
      <div className="premium-stardust absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-white/6 rounded-full blur-sm" style={{ animationDelay: '20s' }} />
      <div className="premium-stardust absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-blue-100/4 rounded-full blur-sm" style={{ animationDelay: '25s' }} />

      {/* Ambient base layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[800px] h-[600px] bg-gradient-radial from-blue-300/20 via-white/10 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default WorkflowAmbientBackground;
