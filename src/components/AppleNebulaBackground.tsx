
import { useEffect } from 'react';

const AppleNebulaBackground = () => {
  useEffect(() => {
    // Import the animations CSS
    import('../styles/animations.css');
  }, []);

  return (
    <>
      {/* CSS-only stardust particles - Much better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        {/* Dense micro stardust layer */}
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '12%', 
            '--y': '18%', 
            '--opacity': '0.7', 
            '--duration': '14s',
            '--color': 'rgba(255,255,255,0.9)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '88%', 
            '--y': '12%', 
            '--opacity': '0.5', 
            '--duration': '16s',
            '--color': 'rgba(59,130,246,0.7)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '28%', 
            '--y': '72%', 
            '--opacity': '0.8', 
            '--duration': '11s',
            '--color': 'rgba(255,255,255,0.8)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '78%', 
            '--y': '88%', 
            '--opacity': '0.4', 
            '--duration': '19s',
            '--color': 'rgba(147,51,234,0.6)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '42%', 
            '--y': '32%', 
            '--opacity': '0.6', 
            '--duration': '15s',
            '--color': 'rgba(236,72,153,0.5)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '68%', 
            '--y': '58%', 
            '--opacity': '0.9', 
            '--duration': '12s',
            '--color': 'rgba(255,255,255,0.7)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '8%', 
            '--y': '62%', 
            '--opacity': '0.5', 
            '--duration': '17s',
            '--color': 'rgba(6,182,212,0.7)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1px',
            '--x': '92%', 
            '--y': '38%', 
            '--opacity': '0.7', 
            '--duration': '13s',
            '--color': 'rgba(255,255,255,0.6)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        
        {/* Medium particles for depth */}
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1.5px',
            '--x': '22%', 
            '--y': '42%', 
            '--opacity': '0.4', 
            '--duration': '18s',
            '--color': 'rgba(59,130,246,0.4)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1.5px',
            '--x': '72%', 
            '--y': '28%', 
            '--opacity': '0.3', 
            '--duration': '21s',
            '--color': 'rgba(147,51,234,0.3)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '1.5px',
            '--x': '52%', 
            '--y': '82%', 
            '--opacity': '0.5', 
            '--duration': '16s',
            '--color': 'rgba(236,72,153,0.4)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        
        {/* Larger ambient dots */}
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '2px',
            '--x': '35%', 
            '--y': '25%', 
            '--opacity': '0.2', 
            '--duration': '22s',
            '--color': 'rgba(59,130,246,0.3)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '2px',
            '--x': '65%', 
            '--y': '75%', 
            '--opacity': '0.15', 
            '--duration': '25s',
            '--color': 'rgba(147,51,234,0.25)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '2px',
            '--x': '48%', 
            '--y': '92%', 
            '--opacity': '0.25', 
            '--duration': '20s',
            '--color': 'rgba(236,72,153,0.2)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        
        {/* Additional micro particles for richness */}
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '0.5px',
            '--x': '18%', 
            '--y': '55%', 
            '--opacity': '0.6', 
            '--duration': '10s',
            '--color': 'rgba(255,255,255,0.8)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '0.5px',
            '--x': '82%', 
            '--y': '65%', 
            '--opacity': '0.4', 
            '--duration': '13s',
            '--color': 'rgba(6,182,212,0.6)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '0.5px',
            '--x': '38%', 
            '--y': '15%', 
            '--opacity': '0.7', 
            '--duration': '11s',
            '--color': 'rgba(255,255,255,0.9)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
        <div 
          className="nebula-particle" 
          style={{ 
            '--size': '0.5px',
            '--x': '62%', 
            '--y': '45%', 
            '--opacity': '0.5', 
            '--duration': '14s',
            '--color': 'rgba(147,51,234,0.4)',
            '--blur': '0.5px'
          } as React.CSSProperties} 
        />
      </div>
      
      {/* Dark fog gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      
      {/* Enhanced ambient nebula clouds with CSS-only animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div 
          className="nebula-cloud" 
          style={{
            '--size': '500px',
            '--y': '5%',
            '--x': '15%',
            '--duration': '28s',
            '--gradient': 'radial-gradient(circle, rgba(59,130,246,0.12), rgba(6,182,212,0.08))'
          } as React.CSSProperties}
        />
        <div 
          className="nebula-cloud" 
          style={{
            '--size': '400px',
            '--y': '55%',
            '--x': '85%', // Changed from right: 10% to left: 85%
            '--duration': '35s',
            '--delay': '8s',
            '--gradient': 'radial-gradient(circle, rgba(147,51,234,0.10), rgba(139,92,246,0.06))',
            animationDirection: 'reverse'
          } as React.CSSProperties}
        />
        <div 
          className="nebula-cloud" 
          style={{
            '--size': '350px',
            '--y': '85%', // Changed from bottom: 15% to top: 85%
            '--x': '55%',
            '--duration': '40s',
            '--delay': '12s',
            '--gradient': 'radial-gradient(circle, rgba(236,72,153,0.08), rgba(244,63,94,0.04))'
          } as React.CSSProperties}
        />
        <div 
          className="nebula-cloud" 
          style={{
            '--size': '300px',
            '--y': '35%',
            '--x': '75%',
            '--duration': '32s',
            '--delay': '15s',
            '--gradient': 'radial-gradient(circle, rgba(16,185,129,0.06), rgba(6,182,212,0.03))'
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default AppleNebulaBackground;
