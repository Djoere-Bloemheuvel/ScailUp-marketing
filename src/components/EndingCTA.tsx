
import { ArrowRight, Brain, Zap, Target, Users } from 'lucide-react';
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
    <section className="relative min-h-[70vh] overflow-hidden bg-premium-black flex items-center justify-center py-8">
      {/* Enhanced Cinematic Background with Custom Colors */}
      <CinematicBackground hideGlassContainer={true} />
      
      {/* Additional Premium Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Central focal glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.10) 40%, rgba(34, 211, 238, 0.05) 70%, transparent 85%)',
            filter: 'blur(120px)',
            animation: 'premium-focal-glow 12s ease-in-out infinite'
          }}
        />
        
        {/* Particle system */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.8)' : 
                           i % 3 === 1 ? 'rgba(147, 51, 234, 0.6)' : 
                           'rgba(34, 211, 238, 0.7)',
                left: `${15 + (i * 9) % 70}%`,
                top: `${25 + (i * 11) % 50}%`,
                animation: `premium-particle-float ${15 + (i % 3) * 5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Premium Glass Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Main Glass Container */}
          <div className="premium-glass-main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8 lg:py-12">
              {/* Left Content */}
              <div className="space-y-6 order-2 lg:order-1">
                {/* Statement Title */}
                <div className="space-y-4">
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

                {/* Glassmorphic Core Strengths */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {coreStrengths.map((item, index) => (
                    <div 
                      key={index} 
                      className="premium-strength-card group"
                      style={{
                        animationDelay: `${0.8 + index * 0.15}s`
                      }}
                    >
                      <div className="flex items-center space-x-3 relative z-10">
                        <div 
                          className="w-8 h-8 rounded-lg premium-icon-container flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                          style={{
                            boxShadow: `0 0 20px ${item.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                          }}
                        >
                          <item.icon className={`w-4 h-4 ${item.iconColor} drop-shadow-lg`} />
                        </div>
                        <span className="text-premium-silver/80 font-medium tracking-wide group-hover:text-white transition-colors duration-300 text-sm">
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
              </div>

              {/* Right Visual Element - Enhanced Brain */}
              <div className="relative flex items-center justify-center order-1 lg:order-2 premium-visual-entrance">
                {/* Premium AI Brain Visualization */}
                <div className="relative">
                  {/* Outer quantum field - Enhanced */}
                  <div className="absolute inset-0 w-80 h-80 rounded-full premium-quantum-field-enhanced" />
                  
                  {/* Core visualization container - Enhanced */}
                  <div className="relative w-64 h-64 rounded-full premium-core-container-enhanced flex items-center justify-center">
                    {/* Central brain element - More dynamic */}
                    <div className="relative z-10">
                      <Brain className="w-20 h-20 text-white/90 premium-brain-pulse-enhanced" />
                      
                      {/* Brain synapses - New animated elements */}
                      <div className="absolute inset-0">
                        {[0, 1, 2, 3, 4, 5].map(i => (
                          <div 
                            key={`synapse-${i}`} 
                            className="absolute w-0.5 h-8 premium-synapse-flash"
                            style={{
                              background: 'linear-gradient(0deg, transparent, #3b82f6, transparent)',
                              transform: `rotate(${i * 60}deg)`,
                              transformOrigin: 'center 40px',
                              animation: `premium-synapse-fire ${2 + i * 0.5}s ease-in-out infinite`,
                              animationDelay: `${i * 0.3}s`
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Orbiting intelligence nodes - Enhanced */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3].map(i => (
                        <div 
                          key={`node-${i}`} 
                          className="absolute w-3 h-3 rounded-full premium-orbit-node-enhanced"
                          style={{
                            background: i % 2 === 0 ? 
                              'linear-gradient(45deg, #3b82f6, #06b6d4)' : 
                              'linear-gradient(45deg, #8b5cf6, #ec4899)',
                            animation: `premium-orbit-enhanced ${15 + i * 3}s linear infinite`,
                            transform: `rotate(${i * 90}deg) translateY(-${120 + i * 10}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Neural network connections - Enhanced */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                      {[0, 1, 2, 3].map(i => (
                        <circle
                          key={`connection-${i}`}
                          cx="50%"
                          cy="50%"
                          r={40 + i * 25}
                          fill="none"
                          stroke="url(#neuralGradientEnhanced)"
                          strokeWidth="2"
                          strokeDasharray="6 12"
                          className="premium-neural-ring-enhanced"
                          style={{
                            animationDelay: `${i * 0.7}s`
                          }}
                        />
                      ))}
                      
                      {/* Enhanced neural connections */}
                      {[0, 1, 2, 3, 4].map(i => (
                        <line
                          key={`neural-line-${i}`}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + Math.cos(i * 72) * 30}%`}
                          y2={`${50 + Math.sin(i * 72) * 30}%`}
                          stroke="url(#neuralLineGradient)"
                          strokeWidth="1"
                          className="premium-neural-line-pulse"
                          style={{
                            animationDelay: `${i * 0.4}s`
                          }}
                        />
                      ))}
                      
                      <defs>
                        <linearGradient id="neuralGradientEnhanced" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.9)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </linearGradient>
                        <linearGradient id="neuralLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Thought bubbles - New animated elements */}
                    <div className="absolute inset-0">
                      {[0, 1, 2].map(i => (
                        <div 
                          key={`thought-${i}`}
                          className="absolute w-2 h-2 rounded-full premium-thought-bubble"
                          style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            left: `${30 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            animation: `premium-thought-rise ${4 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 1.2}s`,
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Animation Styles */}
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

          @keyframes premium-orbit-enhanced {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg);
              opacity: 0.7;
              filter: blur(0px);
            }
            25% {
              opacity: 1;
              filter: blur(1px);
            }
            50% {
              opacity: 0.9;
              filter: blur(0px);
            }
            75% {
              opacity: 1;
              filter: blur(0.5px);
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-distance)) rotate(-360deg);
              opacity: 0.7;
              filter: blur(0px);
            }
          }

          @keyframes premium-neural-ring-enhanced {
            0%, 100% { 
              opacity: 0.4;
              transform: rotate(0deg) scale(1);
              filter: blur(1px);
            }
            50% { 
              opacity: 0.8;
              transform: rotate(180deg) scale(1.02);
              filter: blur(0px);
            }
          }

          @keyframes premium-neural-line-pulse {
            0%, 100% { 
              opacity: 0.3;
              strokeWidth: 1;
            }
            50% { 
              opacity: 0.9;
              strokeWidth: 2;
            }
          }

          @keyframes premium-brain-pulse-enhanced {
            0%, 100% { 
              filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.3));
              transform: scale(1);
            }
            25% { 
              filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.4));
              transform: scale(1.03);
            }
            50% { 
              filter: drop-shadow(0 0 50px rgba(139, 92, 246, 0.7)) drop-shadow(0 0 100px rgba(236, 72, 153, 0.3));
              transform: scale(1.06);
            }
            75% { 
              filter: drop-shadow(0 0 45px rgba(16, 185, 129, 0.5)) drop-shadow(0 0 90px rgba(59, 130, 246, 0.4));
              transform: scale(1.02);
            }
          }

          @keyframes premium-synapse-fire {
            0%, 90%, 100% { 
              opacity: 0;
              transform: scale(1);
            }
            10%, 80% { 
              opacity: 1;
              transform: scale(1.5);
            }
            45% { 
              opacity: 0.8;
              transform: scale(2);
            }
          }

          @keyframes premium-thought-rise {
            0% { 
              opacity: 0;
              transform: translateY(0px) scale(0.5);
            }
            20% { 
              opacity: 1;
              transform: translateY(-10px) scale(1);
            }
            80% { 
              opacity: 0.8;
              transform: translateY(-40px) scale(0.8);
            }
            100% { 
              opacity: 0;
              transform: translateY(-60px) scale(0.3);
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
              0 12px 24px rgba(59, 130, 246, 0.1),
              0 6px 12px rgba(147, 51, 234, 0.08),
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
              rgba(59, 130, 246, 0.03) 0%,
              rgba(147, 51, 234, 0.02) 50%,
              rgba(34, 211, 238, 0.03) 100%);
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
              0 3px 12px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.8),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }

          .premium-cta-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 
              0 12px 36px rgba(0, 0, 0, 0.4),
              0 6px 18px rgba(59, 130, 246, 0.3),
              0 3px 9px rgba(147, 51, 234, 0.2);
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
            border-radius: 10px;
            padding: 0.75rem;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            animation: premium-entrance-fade 0.8s ease-out forwards;
            opacity: 0;
          }

          .premium-strength-card:hover {
            transform: translateY(-1px);
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

          /* Enhanced Visual Elements */
          .premium-quantum-field-enhanced {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.2) 0%,
              rgba(147, 51, 234, 0.15) 35%,
              rgba(34, 211, 238, 0.12) 70%,
              transparent 85%);
            filter: blur(60px);
            animation: premium-focal-glow 12s ease-in-out infinite;
          }

          .premium-core-container-enhanced {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.12) 0%,
              rgba(147, 51, 234, 0.08) 50%,
              transparent 70%);
            backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 
              0 0 60px rgba(59, 130, 246, 0.3),
              0 0 120px rgba(147, 51, 234, 0.15),
              inset 0 0 40px rgba(255, 255, 255, 0.08);
          }

          .premium-brain-pulse-enhanced {
            animation: premium-brain-pulse-enhanced 3s ease-in-out infinite;
          }

          .premium-neural-ring-enhanced {
            animation: premium-neural-ring-enhanced 15s linear infinite;
          }

          .premium-neural-line-pulse {
            animation: premium-neural-line-pulse 2s ease-in-out infinite;
          }

          .premium-orbit-node-enhanced {
            --orbit-distance: -120px;
            animation: premium-orbit-enhanced 15s linear infinite;
          }

          .premium-synapse-flash {
            animation: premium-synapse-fire 2s ease-in-out infinite;
          }

          .premium-thought-bubble {
            animation: premium-thought-rise 4s ease-in-out infinite;
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

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .premium-glass-main-container {
              border-radius: 20px;
              padding: 1rem;
            }
            
            .premium-quantum-field-enhanced {
              width: 240px;
              height: 240px;
            }
            
            .premium-core-container-enhanced {
              width: 200px;
              height: 200px;
            }
            
            .premium-orbit-node-enhanced {
              --orbit-distance: -80px;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-quantum-field-enhanced,
            .premium-brain-pulse-enhanced,
            .premium-neural-ring-enhanced,
            .premium-orbit-node-enhanced,
            .premium-synapse-flash,
            .premium-thought-bubble {
              animation: none;
            }
          }

          /* Performance Optimizations */
          .premium-glass-main-container,
          .premium-strength-card,
          .premium-cta-button,
          .premium-core-container-enhanced {
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
