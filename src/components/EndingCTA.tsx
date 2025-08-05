import { ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-black flex items-center justify-center py-20">
      {/* Smooth vertical fade from black at top - 25% height */}
      <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />

      {/* Much More Intense Blue Ambient Glow Container - Behind everything with proper layering */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Primary large glow - bottom left quadrant - MUCH MORE INTENSE */}
        <div 
          className="absolute -bottom-1/2 -left-1/3 w-[50rem] h-[50rem] rounded-full opacity-85 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 123, 255, 0.8) 0%, rgba(30, 144, 255, 0.65) 25%, rgba(59, 130, 246, 0.5) 45%, rgba(37, 99, 235, 0.35) 65%, rgba(0, 100, 200, 0.2) 85%, transparent 95%)',
            filter: 'blur(60px)',
            animationDuration: '12s'
          }}
        />
        
        {/* Secondary glow - top right quadrant - MORE INTENSE BLUE */}
        <div 
          className="absolute -top-1/3 -right-1/3 w-[35rem] h-[35rem] rounded-full opacity-75 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 119, 255, 0.7) 0%, rgba(59, 130, 246, 0.55) 30%, rgba(30, 144, 255, 0.4) 55%, rgba(37, 99, 235, 0.25) 75%, rgba(0, 123, 255, 0.15) 90%, transparent 100%)',
            filter: 'blur(50px)',
            animationDuration: '8s',
            animationDelay: '-4s'
          }}
        />
        
        {/* Center ambient glow - MUCH MORE INTENSE */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full opacity-70 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 150, 255, 0.6) 0%, rgba(30, 144, 255, 0.45) 35%, rgba(59, 130, 246, 0.3) 60%, rgba(0, 123, 255, 0.18) 80%, transparent 100%)',
            filter: 'blur(45px)',
            animationDuration: '15s',
            animationDelay: '-7s'
          }}
        />
        
        {/* Focused accent glow - bottom right - MUCH MORE INTENSE */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[25rem] h-[25rem] rounded-full opacity-80 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 119, 255, 0.75) 0%, rgba(30, 144, 255, 0.55) 35%, rgba(59, 130, 246, 0.4) 60%, rgba(37, 99, 235, 0.25) 80%, transparent 100%)',
            filter: 'blur(35px)',
            animationDuration: '10s',
            animationDelay: '-2s'
          }}
        />

        {/* Additional wide coverage glow - full screen - MORE INTENSE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full opacity-55 animate-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 123, 255, 0.4) 0%, rgba(30, 144, 255, 0.25) 30%, rgba(59, 130, 246, 0.15) 55%, rgba(37, 99, 235, 0.08) 80%, transparent 95%)',
            filter: 'blur(80px)',
            animationDuration: '20s',
            animationDelay: '-10s'
          }}
        />

        {/* NEW: Additional concentrated center glow for maximum intensity */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full opacity-60 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 162, 255, 0.8) 0%, rgba(30, 144, 255, 0.6) 40%, rgba(59, 130, 246, 0.35) 70%, transparent 90%)',
            filter: 'blur(30px)',
            animationDuration: '8s',
            animationDelay: '-1s'
          }}
        />

        {/* NEW: Intense blue rim lighting */}
        <div 
          className="absolute inset-0 w-full h-full opacity-45 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.3) 0%, transparent 20%, transparent 80%, rgba(30, 144, 255, 0.25) 100%)',
            filter: 'blur(40px)',
            animationDuration: '25s',
            animationDelay: '-12s'
          }}
        />

        {/* Subtle edge enhancement glows - MORE BLUE AND INTENSE */}
        <div 
          className="absolute top-0 left-0 w-[20rem] h-[20rem] rounded-full opacity-65 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 119, 255, 0.6) 0%, rgba(59, 130, 246, 0.35) 50%, transparent 80%)',
            filter: 'blur(30px)',
            animationDuration: '14s',
            animationDelay: '-6s'
          }}
        />
        
        <div 
          className="absolute bottom-0 right-0 w-[18rem] h-[18rem] rounded-full opacity-70 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(30, 144, 255, 0.65) 0%, rgba(0, 123, 255, 0.4) 45%, transparent 75%)',
            filter: 'blur(35px)',
            animationDuration: '16s',
            animationDelay: '-8s'
          }}
        />
      </div>

      {/* Premium Glass Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Main Glass Container */}
          <div className="premium-glass-main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Statement Title */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight premium-title-entrance">
                    <span className="block text-white mb-3">Klaar voor</span>
                    <span className="text-white block">
                      AI transformatie?
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-premium-silver/90 leading-relaxed max-w-2xl premium-subtitle-entrance">
                    Van strategie tot implementatie. Elite engineers leveren tastbare resultaten in 2-4 weken.
                  </p>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-4 premium-button-entrance">
                  <Button 
                    onClick={handleContactClick}
                    size="lg" 
                    className="premium-cta-button group relative overflow-hidden"
                  >
                    <div className="premium-button-shimmer" />
                    <div className="relative z-10 flex items-center px-6 py-3">
                      <span className="text-lg font-semibold text-black">Start het gesprek</span>
                      <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </Button>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative flex items-center justify-center order-1 lg:order-2 premium-visual-entrance">
                {/* Premium AI Visualization */}
                <div className="relative">
                  {/* Outer quantum field */}
                  <div className="absolute inset-0 w-80 h-80 rounded-full premium-quantum-field" />
                  
                  {/* Core visualization container */}
                  <div className="relative w-64 h-64 rounded-full premium-core-container flex items-center justify-center">
                    {/* Central brain element */}
                    <div className="relative z-10">
                      <Brain className="w-20 h-20 text-white/90 premium-brain-pulse" />
                    </div>
                    
                    {/* Orbiting intelligence nodes */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3].map(i => (
                        <div 
                          key={`node-${i}`} 
                          className="absolute w-2.5 h-2.5 rounded-full premium-orbit-node"
                          style={{
                            background: i % 2 === 0 ? 
                              'linear-gradient(45deg, rgba(59, 130, 246, 0.7), rgba(6, 182, 212, 0.7))' : 
                              'linear-gradient(45deg, rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.7))',
                            animation: `premium-orbit ${20 + i * 4}s linear infinite`,
                            transform: `rotate(${i * 90}deg) translateY(-${110 + i * 8}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.35), 0 0 30px rgba(59, 130, 246, 0.21)'
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Neural network connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-21">
                      {[0, 1, 2].map(i => (
                        <circle
                          key={`connection-${i}`}
                          cx="50%"
                          cy="50%"
                          r={50 + i * 20}
                          fill="none"
                          stroke="url(#neuralGradient)"
                          strokeWidth="1"
                          strokeDasharray="4 8"
                          className="premium-neural-ring"
                          style={{
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                      
                      <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.56)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Footer Section */}
          <div className="mt-16 pt-12 border-t border-white/10 premium-footer-entrance">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Buildrs.AI</h3>
                <p className="text-premium-silver/70 italic text-sm max-w-md">
                  Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-premium-silver/50 text-sm mb-1">© 2024 Buildrs.AI</p>
                <p className="text-premium-silver/40 text-xs italic">Designed for disruption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-orbit {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg);
              opacity: 0.42;
            }
            50% {
              opacity: 0.7;
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-distance)) rotate(-360deg);
              opacity: 0.42;
            }
          }

          @keyframes premium-neural-ring {
            0%, 100% { 
              opacity: 0.21;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.42;
              transform: rotate(180deg);
            }
          }

          @keyframes premium-brain-pulse {
            0%, 100% { 
              filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.21));
              transform: scale(1);
            }
            50% { 
              filter: drop-shadow(0 0 50px rgba(59, 130, 246, 0.42));
              transform: scale(1.05);
            }
          }

          @keyframes premium-entrance-fade {
            0% { 
              opacity: 0;
              transform: translateY(30px) scale(0.95);
              filter: blur(10px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes premium-shimmer {
            0% { transform: translateX(-100%) rotate(35deg); }
            100% { transform: translateX(400%) rotate(35deg); }
          }

          /* Premium Glass Container */
          .premium-glass-main-container {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.08) 0%, 
              rgba(255, 255, 255, 0.02) 50%, 
              rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(40px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 24px;
            box-shadow: 
              0 24px 48px rgba(0, 0, 0, 0.4),
              0 12px 24px rgba(59, 130, 246, 0.07),
              0 6px 12px rgba(147, 51, 234, 0.056),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05);
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
          }

          .premium-glass-main-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg,
              rgba(59, 130, 246, 0.021) 0%,
              rgba(147, 51, 234, 0.014) 50%,
              rgba(34, 211, 238, 0.021) 100%);
            border-radius: 24px;
            pointer-events: none;
          }

          /* Premium Button */
          .premium-cta-button {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            box-shadow: 
              0 6px 24px rgba(0, 0, 0, 0.3),
              0 3px 12px rgba(59, 130, 246, 0.14),
              inset 0 1px 0 rgba(255, 255, 255, 0.8),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }

          .premium-cta-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 
              0 12px 36px rgba(0, 0, 0, 0.4),
              0 6px 18px rgba(59, 130, 246, 0.21),
              0 3px 9px rgba(147, 51, 234, 0.14);
          }

          .premium-button-shimmer {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0.4) 50%, 
              transparent 100%);
            animation: premium-shimmer 3s ease-in-out infinite;
          }

          /* Visual Elements */
          .premium-quantum-field {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.105) 0%,
              rgba(147, 51, 234, 0.07) 35%,
              rgba(34, 211, 238, 0.056) 70%,
              transparent 85%);
            filter: blur(50px);
            animation: premium-focal-glow 15s ease-in-out infinite;
          }

          .premium-core-container {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.056) 0%,
              rgba(147, 51, 234, 0.028) 50%,
              transparent 70%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 
              0 0 40px rgba(59, 130, 246, 0.14),
              0 0 80px rgba(147, 51, 234, 0.07),
              inset 0 0 30px rgba(255, 255, 255, 0.05);
          }

          .premium-brain-pulse {
            animation: premium-brain-pulse 4s ease-in-out infinite;
          }

          .premium-neural-ring {
            animation: premium-neural-ring 20s linear infinite;
          }

          /* Entrance Animations */
          .premium-title-entrance {
            animation: premium-entrance-fade 1s ease-out 0.2s forwards;
            opacity: 0;
          }

          .premium-subtitle-entrance {
            animation: premium-entrance-fade 1s ease-out 0.4s forwards;
            opacity: 0;
          }

          .premium-button-entrance {
            animation: premium-entrance-fade 1s ease-out 0.6s forwards;
            opacity: 0;
          }

          .premium-visual-entrance {
            animation: premium-entrance-fade 1.2s ease-out 0.3s forwards;
            opacity: 0;
          }

          .premium-footer-entrance {
            animation: premium-entrance-fade 1s ease-out 1.2s forwards;
            opacity: 0;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .premium-glass-main-container {
              border-radius: 20px;
              padding: 1rem;
            }
            
            .premium-quantum-field {
              width: 240px;
              height: 240px;
            }
            
            .premium-core-container {
              width: 200px;
              height: 200px;
            }
            
            .premium-orbit-node {
              --orbit-distance: -60px;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-quantum-field,
            .premium-brain-pulse,
            .premium-neural-ring,
            .premium-orbit-node {
              animation: none;
            }
          }

          /* Performance Optimizations */
          .premium-glass-main-container,
          .premium-cta-button {
            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0);
          }
        `
      }} />
    </section>
  );
};

export default EndingCTA;
