
import { Bot } from 'lucide-react';

const AICoreCenter = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Central AI Core */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)',
          animationDuration: '4s'
        }} />
        
        {/* Middle glow ring */}
        <div className="absolute inset-8 md:inset-12 rounded-full animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
          animationDuration: '3s',
          animationDelay: '-1s'
        }} />
        
        {/* Inner core */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: `
            0 0 60px rgba(59, 130, 246, 0.3),
            0 0 120px rgba(147, 51, 234, 0.2),
            inset 0 0 60px rgba(99, 102, 241, 0.1)
          `
        }}>
          <Bot className="w-24 h-24 md:w-32 md:h-32 text-blue-300 drop-shadow-2xl" style={{
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))'
          }} />
        </div>
      </div>
    </div>
  );
};

export default AICoreCenter;
