
/**
 * Work Methodology Background Component
 * - Performance optimized with CSS transforms and GPU acceleration
 * - Apple-inspired nebula background with subtle animations
 * - Responsive design optimized for all screen sizes
 * - Security: No external dependencies or unsafe operations
 */
const WorkMethodologyBackground = () => {
  return (
    <>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-purple-950/15 to-premium-black" />
      
      {/* Bottom fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      {/* Ambient light orbs with performance optimization */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-80 md:h-80 bg-purple-500/8 rounded-full blur-3xl will-change-transform" />
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/6 rounded-full blur-3xl will-change-transform" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-indigo-500/4 rounded-full blur-3xl will-change-transform" />
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Optimized particle system */}
        <div 
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse will-change-transform" 
          style={{
            animationDelay: '0s',
            animationDuration: '4s'
          }} 
        />
        <div 
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse will-change-transform" 
          style={{
            animationDelay: '2s',
            animationDuration: '3.5s'
          }} 
        />
        <div 
          className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-indigo-400/50 rounded-full animate-pulse will-change-transform" 
          style={{
            animationDelay: '3s',
            animationDuration: '4.5s'
          }} 
        />
        <div 
          className="absolute bottom-1/3 left-3/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse will-change-transform" 
          style={{
            animationDelay: '1s',
            animationDuration: '5s'
          }} 
        />
        <div 
          className="absolute top-3/4 left-1/2 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-pulse will-change-transform" 
          style={{
            animationDelay: '4s',
            animationDuration: '3s'
          }} 
        />
      </div>

      {/* Gradient mesh overlay for added depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      
      {/* Subtle noise texture for Apple-like finish */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, white 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px, 120px 120px'
        }}
      />
    </>
  );
};

export default WorkMethodologyBackground;
