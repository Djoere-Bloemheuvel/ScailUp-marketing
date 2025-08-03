
import { useEffect, useState } from 'react';

const AIMeshLines = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Animated mesh lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(192, 192, 192, 0)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(192, 192, 192, 0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(192, 192, 192, 0)', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="meshGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(192, 192, 192, 0)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(192, 192, 192, 0.2)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(192, 192, 192, 0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Curved mesh lines */}
        <path
          d="M10,20 Q30,10 50,25 T90,30"
          stroke="url(#meshGradient1)"
          strokeWidth="0.1"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-1' : ''}`}
        />
        
        <path
          d="M5,45 Q25,40 45,50 T85,55"
          stroke="url(#meshGradient1)"
          strokeWidth="0.08"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-2' : ''}`}
        />
        
        <path
          d="M15,70 Q35,65 55,75 T95,80"
          stroke="url(#meshGradient1)"
          strokeWidth="0.06"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-3' : ''}`}
        />

        {/* Vertical connection lines */}
        <path
          d="M25,15 Q20,30 30,45 T25,75"
          stroke="url(#meshGradient2)"
          strokeWidth="0.05"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-4' : ''}`}
        />
        
        <path
          d="M60,10 Q55,35 65,60 T60,90"
          stroke="url(#meshGradient2)"
          strokeWidth="0.04"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-5' : ''}`}
        />

        {/* Diagonal connections */}
        <path
          d="M10,10 Q40,20 70,40 T90,85"
          stroke="rgba(192, 192, 192, 0.15)"
          strokeWidth="0.03"
          fill="none"
          className={`ai-mesh-line ${isLoaded ? 'ai-mesh-animate-6' : ''}`}
        />
      </svg>

      {/* Floating connection nodes */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-premium-silver/40 rounded-full ai-node-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-premium-silver/30 rounded-full ai-node-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-premium-silver/35 rounded-full ai-node-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-premium-silver/25 rounded-full ai-node-pulse" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default AIMeshLines;
