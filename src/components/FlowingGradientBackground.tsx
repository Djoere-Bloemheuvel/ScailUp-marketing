
import { useEffect } from 'react';

const FlowingGradientBackground = () => {
  useEffect(() => {
    // Import the animations CSS
    import('../styles/animations.css');
  }, []);

  return (
    <>
      {/* CSS-only floating gradient orbs - No DOM manipulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="flowing-orb" 
          style={{ 
            '--size': '400px',
            '--x': '10%', 
            '--y': '20%', 
            '--opacity': '0.2',
            '--duration': '8s',
            '--gradient': 'radial-gradient(circle, rgba(6,182,212,0.3), rgba(59,130,246,0.2), transparent)'
          } as React.CSSProperties} 
        />
        <div 
          className="flowing-orb" 
          style={{ 
            '--size': '300px',
            '--x': '70%', 
            '--y': '10%', 
            '--opacity': '0.2',
            '--duration': '10s',
            '--delay': '2s',
            '--gradient': 'radial-gradient(circle, rgba(147,51,234,0.3), rgba(219,39,119,0.2), transparent)'
          } as React.CSSProperties} 
        />
        <div 
          className="flowing-orb" 
          style={{ 
            '--size': '350px',
            '--x': '20%', 
            '--y': '70%', 
            '--opacity': '0.2',
            '--duration': '12s',
            '--delay': '4s',
            '--gradient': 'radial-gradient(circle, rgba(16,185,129,0.3), rgba(6,182,212,0.2), transparent)'
          } as React.CSSProperties} 
        />
        <div 
          className="flowing-orb" 
          style={{ 
            '--size': '250px',
            '--x': '80%', 
            '--y': '60%', 
            '--opacity': '0.2',
            '--duration': '14s',
            '--delay': '6s',
            '--gradient': 'radial-gradient(circle, rgba(249,115,22,0.3), rgba(239,68,68,0.2), transparent)'
          } as React.CSSProperties} 
        />
        <div 
          className="flowing-orb" 
          style={{ 
            '--size': '200px',
            '--x': '50%', 
            '--y': '40%', 
            '--opacity': '0.15',
            '--duration': '9s',
            '--delay': '1s',
            '--gradient': 'radial-gradient(circle, rgba(139,92,246,0.2), rgba(168,85,247,0.1), transparent)'
          } as React.CSSProperties} 
        />
      </div>
      
      {/* Flowing mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-blue-500/10 to-orange-500/5 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* CSS-only animated scanlines - Better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="scanline" 
          style={{
            '--duration': '15s',
            '--gradient': 'linear-gradient(to right, transparent, rgba(6,182,212,0.5), transparent)'
          } as React.CSSProperties}
        />
        <div 
          className="scanline" 
          style={{
            '--duration': '20s',
            '--delay': '5s',
            '--gradient': 'linear-gradient(to right, transparent, rgba(147,51,234,0.5), transparent)'
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default FlowingGradientBackground;
