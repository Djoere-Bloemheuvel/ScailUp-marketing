
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ContactFormLoaderProps {
  onLoadComplete: () => void;
}

const ContactFormLoader = ({ onLoadComplete }: ContactFormLoaderProps) => {
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    // Simulate progressive loading stages
    const stages = [
      { delay: 100, stage: 1 },
      { delay: 200, stage: 2 },
      { delay: 300, stage: 3 },
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => {
        setLoadingStage(stage);
        if (stage === 3) {
          setTimeout(onLoadComplete, 100);
        }
      }, delay);
    });
  }, [onLoadComplete]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Progressive loading indicator */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <Loader2 className="w-12 h-12 text-white animate-spin mx-auto" />
        </div>
        
        <div className="text-white text-xl font-light mb-4">
          Contact formulier wordt geladen...
        </div>
        
        {/* Loading progress */}
        <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${(loadingStage / 3) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormLoader;
