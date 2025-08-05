
import { ArrowRight, Brain, Zap, Target, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CinematicBackground from './hero/CinematicBackground';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const coreStrengths = [
    {
      icon: Brain,
      title: "Elite engineering",
      iconColor: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.2)"
    },
    {
      icon: Zap,
      title: "2-4 weken levering",
      iconColor: "text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.2)"
    },
    {
      icon: Target,
      title: "Strategisch meedenken",
      iconColor: "text-purple-400",
      glowColor: "rgba(147, 51, 234, 0.2)"
    },
    {
      icon: Users,
      title: "Volledige ontzorging",
      iconColor: "text-cyan-400",
      glowColor: "rgba(34, 211, 238, 0.2)"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-premium-black flex items-center justify-center py-20">
      {/* Enhanced Cinematic Background with Custom Colors */}
      <CinematicBackground hideGlassContainer={true} />
      
      {/* Additional Premium Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Central focal glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.10) 40%, rgba(34, 211, 238, 0.05) 70%, transparent 85%)',
            filter: 'blur(120px)',
            animation: 'premium-focal-glow 12s ease-in-out infinite'
          }}
        />
        
        {/* Particle system */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.8)' : 
                           i % 3 === 1 ? 'rgba(147, 51, 234, 0.6)' : 
                           'rgba(34, 211, 238, 0.7)',
                left: `${15 + (i * 7) % 70}%`,
                top: `${20 + (i * 11) % 60}%`,
                animation: `premium-particle-float ${15 + (i % 3) * 5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Premium Glass Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Main Glass Container */}
          <div className="premium-glass-main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
              {/* Left Content */}
              <div className="space-y-10 order-2 lg:order-1">
                {/* Statement Title */}
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight premium-title-entrance">
                    <span className="block text-white mb-4">Klaar voor</span>
                    <span className="premium-gradient-text block">
                      AI transformatie?
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light text-premium-silver/90 leading-relaxed max-w-2xl premium-subtitle-entrance">
                    Van strategie tot implementatie. Elite engineers leveren tastbare resultaten in 2-4 weken.
                  </p>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-6 premium-button-entrance">
                  <Button 
                    onClick={handleContactClick}
                    size="lg" 
                    className="premium-cta-button group relative overflow-hidden"
                  >
                    <div className="premium-button-shimmer" />
                    <div className="relative z-10 flex items-center px-8 py-4">
                      <span className="text-lg font-semibold text-black">Start het gesprek</span>
                      <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </Button>
                </div>

                {/* Glassmorphic Core Strengths */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {coreStrengths.map((item, index) => (
                    <div 
                      key={index} 
                      className="premium-strength-card group"
                      style={{
                        animationDelay: `${0.8 + index * 0.15}s`
                      }}
                    >
                      <div className="flex items-center space-x-4 relative z-10">
                        <div 
                          className="w-10 h-10 rounded-xl premium-icon-container flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                          style={{
                            boxShadow: `0 0 20px ${item.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                          }}
                        >
                          <item.icon className={`w-5 h-5 ${item.iconColor} drop-shadow-lg`} />
                        </div>
                        <span className="text-premium-silver/80 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{
                          background: `radial-gradient(ellipse at center, ${item.glowColor} 0%, transparent 70%)`,
                          filter: 'blur(20px)'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Premium Disclaimer */}
                <div className="pt-8 border-t border-white/10 premium-disclaimer-entrance">
                  <p className="text-premium-silver/60 text-sm italic flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-premium-silver/40" />
                    Gratis kennismaking • Concrete strategie • Geen verplichtingen
                  </p>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative flex items-center justify-center order-1 lg:order-2 premium-visual-entrance">
                {/* Premium AI Visualization */}
                <div className="relative">
                  {/* Outer quantum field */}
                  <div className="absolute inset-0 w-96 h-96 rounded-full premium-quantum-field" />
                  
                  {/* Core visualization container */}
                  <div className="relative w-80 h-80 rounded-full premium-core-container flex items-center justify-center">
                    {/* Central brain element */}
                    <div className="relative z-10">
                      <Brain className="w-28 h-28 text-white/90 premium-brain-pulse" />
                    </div>
                    
                    {/* Orbiting intelligence nodes */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3, 4].map(i => (
                        <div 
                          key={`node-${i}`} 
                          className="absolute w-3 h-3 rounded-full premium-orbit-node"
                          style={{
                            background: i % 2 === 0 ? 
                              'linear-gradient(45deg, #3b82f6, #06b6d4)' : 
                              'linear-gradient(45deg, #8b5cf6, #ec4899)',
                            animation: `premium-orbit ${20 + i * 4}s linear infinite`,
                            transform: `rotate(${i * 72}deg) translateY(-${140 + i * 10}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Neural network connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      {[0, 1, 2, 3].map(i => (
                        <circle
                          key={`connection-${i}`}
                          cx="50%"
                          cy="50%"
                          r={60 + i * 25}
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
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
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
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Buildrs.AI</h3>
                <p className="text-premium-silver/70 italic text-sm max-w-md">
                  Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-premium-silver/50 text-sm mb-2">© 2024 Buildrs.AI</p>
                <p className="text-premium-silver/40 text-xs italic">Designed for disruption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-focal-glow {
            0%, 100% { 
              opacity: 0.40;
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
              filter: blur(120px);
            }
            33% { 
              opacity: 0.55;
              transform: translate(-50%, -50%) scale(1.08) rotate(2deg);
              filter: blur(125px);
            }
            66% { 
              opacity: 0.30;
              transform: translate(-50%, -50%) scale(0.95) rotate(-1deg);
              filter: blur(115px);
            }
          }

          @keyframes premium-particle-float {
            0%, 100% { 
              opacity: 0.6;
              transform: translateY(0px) translateX(0px);
            }
            25% { 
              opacity: 1;
              transform: translateY(-10px) translateX(5px);
            }
            50% { 
              opacity: 0.4;
              transform: translateY(-5px) translateX(-3px);
            }
            75% { 
              opacity: 0.8;
              transform: translateY(8px) translateX(7px);
            }
          }

          @keyframes premium-orbit {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg);
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-distance)) rotate(-360deg);
              opacity: 0.6;
            }
          }

          @keyframes premium-neural-ring {
            0%, 100% { 
              opacity: 0.3;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.6;
              transform: rotate(180deg);
            }
          }

          @keyframes premium-brain-pulse {
            0%, 100% { 
              filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
              transform: scale(1);
            }
            50% { 
              filter: drop-shadow(0 0 50px rgba(59, 130, 246, 0.6));
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
            border-radius: 32px;
            box-shadow: 
              0 32px 64px rgba(0, 0, 0, 0.4),
              0 16px 32px rgba(59, 130, 246, 0.1),
              0 8px 16px rgba(147, 51, 234, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05);
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .premium-glass-main-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg,
              rgba(59, 130, 246, 0.03) 0%,
              rgba(147, 51, 234, 0.02) 50%,
              rgba(34, 211, 238, 0.03) 100%);
            border-radius: 32px;
            pointer-events: none;
          }

          /* Premium Gradient Text */
          .premium-gradient-text {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 35%, #06b6d4 70%, #3b82f6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: premium-gradient-shift 8s ease-in-out infinite;
          }

          @keyframes premium-gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          /* Premium Button */
          .premium-cta-button {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              0 4px 16px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.8),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }

          .premium-cta-button:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 
              0 16px 48px rgba(0, 0, 0, 0.4),
              0 8px 24px rgba(59, 130, 246, 0.3),
              0 4px 12px rgba(147, 51, 234, 0.2);
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

          /* Core Strength Cards */
          .premium-strength-card {
            background: linear-gradient(135deg,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 1rem;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            animation: premium-entrance-fade 0.8s ease-out forwards;
            opacity: 0;
          }

          .premium-strength-card:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.15);
            background: linear-gradient(135deg,
              rgba(255, 255, 255, 0.10) 0%,
              rgba(255, 255, 255, 0.04) 100%);
          }

          .premium-icon-container {
            background: linear-gradient(135deg,
              rgba(255, 255, 255, 0.10) 0%,
              rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.12);
          }

          /* Visual Elements */
          .premium-quantum-field {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.15) 0%,
              rgba(147, 51, 234, 0.10) 35%,
              rgba(34, 211, 238, 0.08) 70%,
              transparent 85%);
            filter: blur(60px);
            animation: premium-focal-glow 15s ease-in-out infinite;
          }

          .premium-core-container {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.08) 0%,
              rgba(147, 51, 234, 0.04) 50%,
              transparent 70%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 
              0 0 60px rgba(59, 130, 246, 0.2),
              0 0 120px rgba(147, 51, 234, 0.1),
              inset 0 0 40px rgba(255, 255, 255, 0.05);
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

          .premium-disclaimer-entrance {
            animation: premium-entrance-fade 1s ease-out 1s forwards;
            opacity: 0;
          }

          .premium-footer-entrance {
            animation: premium-entrance-fade 1s ease-out 1.2s forwards;
            opacity: 0;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .premium-glass-main-container {
              border-radius: 24px;
              padding: 1.5rem;
            }
            
            .premium-quantum-field {
              width: 300px;
              height: 300px;
            }
            
            .premium-core-container {
              width: 250px;
              height: 250px;
            }
            
            .premium-orbit-node {
              --orbit-distance: -80px;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-quantum-field,
            .premium-brain-pulse,
            .premium-neural-ring,
            .premium-orbit-node,
            .premium-gradient-text {
              animation: none;
            }
          }

          /* Performance Optimizations */
          .premium-glass-main-container,
          .premium-strength-card,
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
