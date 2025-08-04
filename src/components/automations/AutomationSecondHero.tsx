
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';
import PremiumOrbs from '@/components/hero/PremiumOrbs';
import CinematicAnimations from '@/components/hero/CinematicAnimations';

const AutomationSecondHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Premium Cinematic Background with all the luxury elements */}
      <CinematicBackground hideGlassContainer={true} />
      
      {/* Premium Orbs for luxury feel */}
      <PremiumOrbs />
      
      {/* Cinematic Animations */}
      <CinematicAnimations />

      {/* Premium glassmorphic container for content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 z-10">
        <div className="relative">
          {/* Main glassmorphic container with luxury styling */}
          <div className="relative rounded-3xl p-8 md:p-12 lg:p-16" style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.03) 100%),
              radial-gradient(ellipse 800px 400px at 0% 0%, rgba(20, 184, 166, 0.015) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 100% 100%, rgba(34, 211, 238, 0.012) 0%, transparent 50%)
            `,
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: `
              0 32px 64px rgba(0, 0, 0, 0.4),
              0 16px 32px rgba(20, 184, 166, 0.03),
              0 8px 16px rgba(34, 211, 238, 0.025),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(255, 255, 255, 0.04),
              inset 0 0 120px rgba(20, 184, 166, 0.01)
            `
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Content with premium styling */}
              <div className="space-y-8 cinematic-entrance">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-white via-premium-silver to-teal-200 bg-clip-text text-transparent">
                      AI Automatisering
                    </span>
                  </h1>
                  
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                    <span className="bg-gradient-to-r from-premium-silver via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                      Slim. Snel. Onzichtbaar.
                    </span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
                  Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
                </p>

                <div className="pt-4">
                  <Button 
                    size="lg"
                    className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                    onClick={() => {
                      // Basic spam protection - simple rate limiting
                      const lastClick = localStorage.getItem('cta-last-click');
                      const now = Date.now();
                      if (lastClick && now - parseInt(lastClick) < 2000) return;
                      localStorage.setItem('cta-last-click', now.toString());
                      
                      // Scroll to next section
                      const nextSection = document.querySelector('section:nth-of-type(3)'); // Skip to third section
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {/* Premium shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Button content */}
                    <span className="relative z-10">Ontdek de mogelijkheden</span>
                  </Button>
                </div>
              </div>

              {/* Right side - Luxurious AI Automation Visual */}
              <div className="relative flex items-center justify-center cinematic-entrance premium-stagger-1">
                {/* Premium backdrop blur circle */}
                <div className="absolute inset-0 w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full" style={{
                  background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, rgba(34, 211, 238, 0.05) 40%, rgba(16, 185, 129, 0.03) 70%, transparent 100%)',
                  backdropFilter: 'blur(60px)',
                  filter: 'blur(1px)'
                }} />

                {/* Central luxury automation core */}
                <div className="relative z-10">
                  {/* Outer luxury glow ring with premium glass effect */}
                  <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-cinematic-ring-pulse" style={{
                    background: `
                      linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(20, 184, 166, 0.08) 50%, rgba(34, 211, 238, 0.06) 100%),
                      radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(34, 211, 238, 0.08) 30%, rgba(16, 185, 129, 0.04) 60%, transparent 80%)
                    `,
                    backdropFilter: 'blur(30px)',
                    border: '1px solid rgba(20, 184, 166, 0.15)',
                    boxShadow: `
                      0 0 80px rgba(20, 184, 166, 0.2),
                      0 0 160px rgba(34, 211, 238, 0.15),
                      inset 0 0 80px rgba(20, 184, 166, 0.05)
                    `
                  }} />
                  
                  {/* Middle luxury glass ring */}
                  <div className="absolute inset-8 md:inset-12 rounded-full animate-cinematic-float-2" style={{
                    background: `
                      linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(34, 211, 238, 0.06) 50%, rgba(20, 184, 166, 0.04) 100%)
                    `,
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(34, 211, 238, 0.12)',
                    boxShadow: `
                      0 0 60px rgba(34, 211, 238, 0.15),
                      inset 0 0 40px rgba(34, 211, 238, 0.03)
                    `
                  }} />
                  
                  {/* Inner premium core with luxury materials */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-cinematic-core-pulse" style={{
                    background: `
                      radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(34, 211, 238, 0.10) 40%, rgba(16, 185, 129, 0.08) 60%, rgba(6, 78, 59, 0.12) 80%, transparent 100%),
                      linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(20, 184, 166, 0.08) 50%, rgba(34, 211, 238, 0.06) 100%)
                    `,
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(20, 184, 166, 0.2)',
                    boxShadow: `
                      0 0 120px rgba(20, 184, 166, 0.3),
                      0 0 240px rgba(34, 211, 238, 0.2),
                      inset 0 0 80px rgba(20, 184, 166, 0.08),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `
                  }}>
                    {/* Premium automation cog with luxury styling */}
                    <Settings className="w-24 h-24 md:w-32 md:h-32 text-teal-200 drop-shadow-2xl animate-spin" style={{
                      filter: `
                        drop-shadow(0 0 30px rgba(20, 184, 166, 0.8))
                        drop-shadow(0 0 60px rgba(34, 211, 238, 0.6))
                      `,
                      animationDuration: '20s'
                    }} />
                  </div>
                  
                  {/* Luxury orbiting automation elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Premium orbiting dots with glass effect */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 rounded-full animate-spin animate-cinematic-pulse-fast"
                        style={{
                          background: i % 2 === 0 
                            ? 'radial-gradient(circle, rgba(20, 184, 166, 0.9) 0%, rgba(20, 184, 166, 0.6) 70%, transparent 100%)'
                            : 'radial-gradient(circle, rgba(34, 211, 238, 0.9) 0%, rgba(34, 211, 238, 0.6) 70%, transparent 100%)',
                          animationDuration: `${8 + i * 2}s`,
                          transform: `rotate(${i * 60}deg) translateY(-${120 + i * 20}px)`,
                          boxShadow: `
                            0 0 20px ${i % 2 === 0 ? 'rgba(20, 184, 166, 0.8)' : 'rgba(34, 211, 238, 0.8)'},
                            0 0 40px ${i % 2 === 0 ? 'rgba(20, 184, 166, 0.4)' : 'rgba(34, 211, 238, 0.4)'}
                          `,
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${i % 2 === 0 ? 'rgba(20, 184, 166, 0.3)' : 'rgba(34, 211, 238, 0.3)'}`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Premium process flow connections with luxury styling */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Luxury automation flow lines with glass effect */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-1 rounded-full animate-cinematic-pulse-medium" style={{
                    background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.6) 0%, rgba(34, 211, 238, 0.4) 50%, transparent 100%)',
                    transform: 'rotate(45deg)',
                    boxShadow: '0 0 20px rgba(20, 184, 166, 0.4)',
                    backdropFilter: 'blur(5px)'
                  }} />
                  
                  <div className="absolute top-3/4 right-1/4 w-24 h-1 rounded-full animate-cinematic-pulse-slow" style={{
                    background: 'linear-gradient(-90deg, rgba(34, 211, 238, 0.6) 0%, rgba(16, 185, 129, 0.4) 50%, transparent 100%)',
                    transform: 'rotate(-45deg)',
                    animationDelay: '1s',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
                    backdropFilter: 'blur(5px)'
                  }} />
                  
                  <div className="absolute bottom-1/3 left-1/3 w-28 h-1 rounded-full animate-cinematic-pulse-fast" style={{
                    background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.6) 0%, rgba(20, 184, 166, 0.4) 50%, transparent 100%)',
                    transform: 'rotate(12deg)',
                    animationDelay: '2s',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                    backdropFilter: 'blur(5px)'
                  }} />
                </div>

                {/* Premium floating particles for luxury ambiance */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`luxury-particle-${i}`}
                      className="absolute w-1 h-1 rounded-full animate-cinematic-depth-float"
                      style={{
                        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.8) 0%, transparent 70%)',
                        left: `${20 + (i * 10)}%`,
                        top: `${15 + (i * 8)}%`,
                        animationDelay: `${i * 0.5}s`,
                        boxShadow: '0 0 10px rgba(20, 184, 166, 0.6)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scan lines for cinematic tech feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent top-1/3 animate-cinematic-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent bottom-1/3 animate-cinematic-scan-horizontal-delayed" />
      </div>
    </section>
  );
};

export default AutomationSecondHero;
