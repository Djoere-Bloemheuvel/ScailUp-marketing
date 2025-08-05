
/**
 * Work Methodology Background Component
 * - Completely different from Approach background
 * - Dynamic geometric patterns instead of nebula
 * - More tech-focused and process-oriented
 * - Animated grid and flowing lines
 * - Enhanced with ambient lighting effects
 */
const WorkMethodologyBackground = () => {
  return (
    <>
      {/* Base gradient - different from Approach */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
      {/* Enhanced ambient lighting layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient orbs with pulsing effect */}
        <div 
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-60"
          style={{ animation: 'ambient-pulse-slow 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-blue-500/12 rounded-full blur-3xl opacity-70"
          style={{ animation: 'ambient-pulse-slow 10s ease-in-out infinite reverse' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl opacity-50"
          style={{ animation: 'ambient-pulse-slow 12s ease-in-out infinite', animationDelay: '2s' }}
        />
        
        {/* Floating light orbs */}
        <div 
          className="absolute top-20 right-1/4 w-4 h-4 bg-emerald-400/80 rounded-full blur-sm opacity-70"
          style={{ animation: 'float-orb 15s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-32 left-1/5 w-3 h-3 bg-blue-400/70 rounded-full blur-sm opacity-60"
          style={{ animation: 'float-orb 18s ease-in-out infinite reverse', animationDelay: '3s' }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-5 h-5 bg-purple-400/60 rounded-full blur-sm opacity-80"
          style={{ animation: 'float-orb 12s ease-in-out infinite', animationDelay: '6s' }}
        />
        
        {/* Light rays */}
        <div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-emerald-400/20 via-emerald-400/5 to-transparent opacity-60"
          style={{ animation: 'light-ray-vertical 20s linear infinite' }}
        />
        <div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-400/15 via-blue-400/5 to-transparent opacity-40"
          style={{ animation: 'light-ray-vertical 25s linear infinite reverse' }}
        />
        
        {/* Horizontal light beams */}
        <div 
          className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-40"
          style={{ animation: 'light-beam-horizontal 30s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent opacity-30"
          style={{ animation: 'light-beam-horizontal 35s ease-in-out infinite reverse' }}
        />
      </div>

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-flow 30s linear infinite'
        }}
      />

      {/* Flowing geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagonal shapes with enhanced glow */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-15"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 15s ease-in-out infinite',
            filter: 'drop-shadow(0 0 20px rgba(52, 211, 153, 0.3))'
          }}
        />
        
        <div 
          className="absolute bottom-32 right-32 w-24 h-24 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.5) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 12s ease-in-out infinite reverse',
            filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))'
          }}
        />

        {/* Circuit-like lines with glow */}
        <div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-60"
          style={{ filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.5))' }}
        />
        <div 
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-40"
          style={{ filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))' }}
        />
        
        {/* Enhanced floating particles */}
        <div 
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-400/80 rounded-full animate-pulse"
          style={{ 
            animationDelay: '0s', 
            animationDuration: '3s',
            filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.6))'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-pulse"
          style={{ 
            animationDelay: '1.5s', 
            animationDuration: '4s',
            filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"
          style={{ 
            animationDelay: '3s', 
            animationDuration: '2.5s',
            filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.4))'
          }}
        />
      </div>

      {/* Enhanced ambient corner glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-3xl opacity-50" />

      {/* Tech-inspired overlay pattern with enhanced opacity */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.8) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.6) 1px, transparent 1px),
            radial-gradient(circle at 50% 25%, rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 25% 75%, rgba(52, 211, 153, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 120px 120px, 80px 80px, 140px 140px'
        }}
      />

      {/* CSS Animations - Enhanced with new lighting animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes grid-flow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          @keyframes float-hexagon {
            0%, 100% { 
              transform: rotate(0deg) translateY(0px) scale(1);
              opacity: 0.15;
            }
            50% { 
              transform: rotate(180deg) translateY(-20px) scale(1.1);
              opacity: 0.25;
            }
          }

          @keyframes ambient-pulse-slow {
            0%, 100% { 
              opacity: 0.4;
              transform: scale(1);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          @keyframes float-orb {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.6;
            }
            33% { 
              transform: translateY(-15px) translateX(10px) scale(1.2);
              opacity: 0.9;
            }
            66% { 
              transform: translateY(10px) translateX(-8px) scale(0.8);
              opacity: 0.4;
            }
          }

          @keyframes light-ray-vertical {
            0% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 0.8; transform: scaleY(1.2); }
            100% { opacity: 0.3; transform: scaleY(1); }
          }

          @keyframes light-beam-horizontal {
            0% { opacity: 0.2; transform: scaleX(1); }
            50% { opacity: 0.6; transform: scaleX(1.1); }
            100% { opacity: 0.2; transform: scaleX(1); }
          }
        `
      }} />
    </>
  );
};

export default WorkMethodologyBackground;
