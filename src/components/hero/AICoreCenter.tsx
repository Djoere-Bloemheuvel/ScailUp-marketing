import { Settings, Zap, Shield, Brain } from 'lucide-react';

const AICoreCenter = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full animate-pulse" 
           style={{
             background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
             animationDuration: '4s'
           }} />
      
      {/* Middle coordination ring */}
      <div className="absolute inset-12 rounded-full animate-pulse" 
           style={{
             background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
             animationDuration: '3s',
             animationDelay: '-1s'
           }} />
      
      {/* Central AI Core */}
      <div className="relative w-full h-full rounded-full flex items-center justify-center"
           style={{
             background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)',
             backdropFilter: 'blur(20px)',
             border: '1px solid rgba(59, 130, 246, 0.2)',
             boxShadow: `
               0 0 60px rgba(59, 130, 246, 0.3),
               0 0 120px rgba(168, 85, 247, 0.2),
               inset 0 0 60px rgba(99, 102, 241, 0.1)
             `
           }}>
        <Brain className="w-32 h-32 text-blue-300 drop-shadow-2xl animate-pulse" 
               style={{
                 filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
                 animationDuration: '3s'
               }} />
      </div>
      
      {/* Orbiting AI modules */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[
          { angle: 0, icon: Settings, delay: 0 },
          { angle: 90, icon: Zap, delay: 1 },
          { angle: 180, icon: Shield, delay: 2 },
          { angle: 270, icon: Brain, delay: 3 }
        ].map((module, i) => (
          <div key={i} 
               className="absolute animate-spin"
               style={{
                 animationDuration: '20s',
                 animationDelay: `${module.delay}s`,
                 transform: `rotate(${module.angle}deg) translateY(-120px)`
               }}>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20 border border-indigo-400/40 backdrop-blur-sm flex items-center justify-center"
                 style={{ transform: `rotate(-${module.angle}deg)` }}>
              <module.icon className="w-8 h-8 text-indigo-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AICoreCenter;
