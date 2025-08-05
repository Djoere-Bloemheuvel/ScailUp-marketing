
/**
 * Work Methodology Background Component
 * - Completely different from Approach background
 * - Dynamic geometric patterns instead of nebula
 * - More tech-focused and process-oriented
 * - Animated grid and flowing lines
 */
const WorkMethodologyBackground = () => {
  return (
    <>
      {/* Base gradient - different from Approach */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
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
        {/* Hexagonal shapes */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-10"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.3) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 15s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute bottom-32 right-32 w-24 h-24 opacity-15"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 12s ease-in-out infinite reverse'
          }}
        />

        {/* Circuit-like lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-60" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-40" />
        
        {/* Floating particles with different pattern than Approach */}
        <div 
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-pulse"
          style={{ animationDelay: '1.5s', animationDuration: '4s' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '2.5s' }}
        />
      </div>

      {/* Ambient corner glows - different colors and positions than Approach */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      {/* Tech-inspired overlay pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
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

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes grid-flow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          @keyframes float-hexagon {
            0%, 100% { 
              transform: rotate(0deg) translateY(0px) scale(1);
              opacity: 0.1;
            }
            50% { 
              transform: rotate(180deg) translateY(-20px) scale(1.1);
              opacity: 0.2;
            }
          }
        `
      }} />
    </>
  );
};

export default WorkMethodologyBackground;
