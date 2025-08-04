
const LightweightBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Simplified ambient lighting - much lighter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left simple glow */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Bottom-right simple glow */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-80 h-80 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Simple glass container - no heavy animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[75vh] sm:h-[69vh] md:h-[64vh] lg:h-[67vh] xl:h-[72vh] transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
          <div className="absolute inset-0 rounded-3xl" style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%)
            `,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 32px 64px rgba(255, 255, 255, 0.01), 0 16px 32px rgba(20, 184, 166, 0.025)'
          }} />
        </div>
      </div>
    </div>
  );
};

export default LightweightBackground;
