
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-premium-black flex items-center justify-center py-20">
      {/* Premium Background System */}
      <div className="absolute inset-0">
        {/* Base gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-gray-900/95 to-premium-black" />
        
        {/* Premium ambient lighting layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary focal glow - blue tones */}
          <div 
            className="absolute top-1/3 left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-40 premium-glow-primary"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 35%, rgba(29, 78, 216, 0.08) 60%, rgba(30, 64, 175, 0.03) 80%, transparent 95%)',
              filter: 'blur(120px)',
            }}
          />
          
          {/* Secondary accent glow - purple tones */}
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-35 premium-glow-secondary"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.20) 0%, rgba(109, 40, 217, 0.12) 40%, rgba(88, 28, 135, 0.06) 70%, rgba(67, 56, 202, 0.02) 85%, transparent 95%)',
              filter: 'blur(100px)',
            }}
          />
          
          {/* Tertiary blend glow - cyan accent */}
          <div 
            className="absolute top-1/2 right-1/3 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-30 premium-glow-tertiary"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(6, 182, 212, 0.10) 45%, rgba(8, 145, 178, 0.05) 70%, rgba(14, 116, 144, 0.02) 90%, transparent 100%)',
              filter: 'blur(90px)',
            }}
          />
        </div>

        {/* Premium mesh overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/4 to-cyan-500/6 premium-mesh-flow" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/3 via-blue-500/6 to-indigo-500/4 premium-mesh-counter" />
        </div>

        {/* Subtle texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 2%),
              radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 2%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 1.5%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Enhanced Premium Glass Container */}
          <div className="premium-glass-enhanced">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 lg:py-20">
              
              {/* Left Content Section */}
              <div className="space-y-10 order-2 lg:order-1 relative">
                {/* Floating accent elements */}
                <div className="absolute -top-4 -left-2 opacity-60 premium-float" aria-hidden="true">
                  <Sparkles className="w-4 h-4 text-premium-silver" />
                </div>
                <div className="absolute -top-2 right-12 opacity-40 premium-float-delayed" aria-hidden="true">
                  <Zap className="w-3 h-3 text-blue-400" />
                </div>

                {/* Premium Title Section */}
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight premium-title-entrance">
                    <span className="block text-white mb-4">Klaar voor</span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent premium-gradient-flow">
                      AI transformatie?
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-premium-silver/90 leading-relaxed max-w-xl premium-subtitle-entrance">
                    Van strategie tot implementatie. Elite engineers leveren tastbare resultaten in 2-4 weken.
                  </p>
                </div>

                {/* Enhanced CTA Button */}
                <div className="pt-6 premium-button-entrance">
                  <Button 
                    onClick={handleContactClick}
                    className="group relative premium-cta-enhanced overflow-hidden"
                  >
                    {/* Button background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-premium-silver rounded-xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-r from-gray-50 to-gray-100 rounded-[11px]" />
                    
                    {/* Enhanced shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out premium-shimmer" />
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center px-8 py-4">
                      <span className="text-lg font-semibold text-black group-hover:text-gray-800 transition-colors duration-300">
                        Start het gesprek
                      </span>
                      <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </Button>
                </div>

                <p className="text-premium-silver/60 text-sm italic premium-disclaimer-entrance">
                  Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
                </p>
              </div>

              {/* Right Visual Section - Enhanced */}
              <div className="relative flex items-center justify-center order-1 lg:order-2 premium-visual-entrance">
                <div className="relative">
                  {/* Quantum field background */}
                  <div className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full premium-quantum-field" />
                  
                  {/* Main AI visualization container */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full premium-ai-core flex items-center justify-center">
                    
                    {/* Central brain with enhanced glow */}
                    <div className="relative z-20">
                      <Brain className="w-20 h-20 sm:w-24 sm:h-24 text-white premium-brain-enhanced" />
                    </div>
                    
                    {/* Enhanced orbital system */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3, 4, 5].map(i => (
                        <div 
                          key={`enhanced-node-${i}`} 
                          className="absolute rounded-full premium-orbit-enhanced"
                          style={{
                            width: i < 3 ? '12px' : '8px',
                            height: i < 3 ? '12px' : '8px',
                            background: i % 3 === 0 ? 
                              'linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(34, 211, 238, 0.8))' : 
                              i % 3 === 1 ?
                              'linear-gradient(45deg, rgba(139, 92, 246, 1), rgba(168, 85, 247, 0.8))' :
                              'linear-gradient(45deg, rgba(34, 211, 238, 1), rgba(16, 185, 129, 0.8))',
                            animation: `premium-enhanced-orbit ${18 + i * 3}s linear infinite`,
                            transform: `rotate(${i * 60}deg) translateY(-${130 + i * 12}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: `0 0 20px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.6)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(34, 211, 238, 0.6)'}`
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Enhanced neural network rings */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                      {[0, 1, 2, 3].map(i => (
                        <circle
                          key={`neural-ring-${i}`}
                          cx="50%"
                          cy="50%"
                          r={60 + i * 25}
                          fill="none"
                          stroke={`url(#enhancedGradient${i})`}
                          strokeWidth="1.5"
                          strokeDasharray="6 12"
                          className="premium-neural-enhanced"
                          style={{
                            animationDelay: `${i * 0.8}s`
                          }}
                        />
                      ))}
                      
                      <defs>
                        <linearGradient id="enhancedGradient0" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.9)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </linearGradient>
                        <linearGradient id="enhancedGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.7)" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                        </linearGradient>
                        <linearGradient id="enhancedGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)" />
                          <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                        </linearGradient>
                        <linearGradient id="enhancedGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
                          <stop offset="50%" stopColor="rgba(16, 185, 129, 0.6)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Section */}
          <div className="mt-20 pt-16 border-t border-white/8 premium-footer-entrance">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Buildrs.AI</h3>
                <p className="text-premium-silver/70 italic text-sm max-w-md">
                  Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
                </p>
              </div>
              
              <div className="text-center md:text-right space-y-2">
                <p className="text-premium-silver/50 text-sm">© 2024 Buildrs.AI</p>
                <p className="text-premium-silver/40 text-xs italic">Designed for disruption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Premium Glow Animations */
          @keyframes premium-glow-primary {
            0%, 100% { 
              opacity: 0.40;
              transform: scale(1) rotate(0deg);
              filter: blur(120px);
            }
            33% { 
              opacity: 0.55;
              transform: scale(1.12) rotate(3deg);
              filter: blur(130px);
            }
            66% { 
              opacity: 0.30;
              transform: scale(0.92) rotate(-2deg);
              filter: blur(110px);
            }
          }

          @keyframes premium-glow-secondary {
            0%, 100% { 
              opacity: 0.35;
              transform: scale(1) rotate(0deg);
              filter: blur(100px);
            }
            50% { 
              opacity: 0.50;
              transform: scale(1.08) rotate(-4deg);
              filter: blur(110px);
            }
          }

          @keyframes premium-glow-tertiary {
            0%, 100% { 
              opacity: 0.30;
              transform: scale(1) rotate(0deg);
              filter: blur(90px);
            }
            40% { 
              opacity: 0.45;
              transform: scale(1.05) rotate(2deg);
              filter: blur(95px);
            }
            80% { 
              opacity: 0.25;
              transform: scale(0.98) rotate(-1deg);
              filter: blur(85px);
            }
          }

          /* Mesh Flow Animations */
          @keyframes premium-mesh-flow {
            0%, 100% { 
              opacity: 0.20;
              transform: translateX(0) translateY(0);
            }
            50% { 
              opacity: 0.25;
              transform: translateX(-10px) translateY(-5px);
            }
          }

          @keyframes premium-mesh-counter {
            0%, 100% { 
              opacity: 0.15;
              transform: translateX(0) translateY(0);
            }
            50% { 
              opacity: 0.20;
              transform: translateX(8px) translateY(12px);
            }
          }

          /* Enhanced AI Visualization */
          @keyframes premium-enhanced-orbit {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-distance, -130px)) rotate(0deg);
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-distance, -130px)) rotate(-360deg);
              opacity: 0.7;
            }
          }

          @keyframes premium-neural-enhanced {
            0%, 100% { 
              opacity: 0.4;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.7;
              transform: rotate(180deg);
            }
          }

          @keyframes premium-brain-enhanced {
            0%, 100% { 
              filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.4));
              transform: scale(1);
            }
            50% { 
              filter: drop-shadow(0 0 60px rgba(59, 130, 246, 0.8));
              transform: scale(1.08);
            }
          }

          @keyframes premium-gradient-flow {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes premium-float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-8px) rotate(5deg);
              opacity: 1;
            }
          }

          @keyframes premium-entrance {
            0% { 
              opacity: 0;
              transform: translateY(40px) scale(0.92);
              filter: blur(15px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          /* Component Classes */
          .premium-glow-primary {
            animation: premium-glow-primary 16s ease-in-out infinite;
            will-change: transform, opacity, filter;
          }

          .premium-glow-secondary {
            animation: premium-glow-secondary 18s ease-in-out infinite;
            animation-delay: -6s;
            will-change: transform, opacity, filter;
          }

          .premium-glow-tertiary {
            animation: premium-glow-tertiary 14s ease-in-out infinite;
            animation-delay: -9s;
            will-change: transform, opacity, filter;
          }

          .premium-mesh-flow {
            animation: premium-mesh-flow 20s ease-in-out infinite;
          }

          .premium-mesh-counter {
            animation: premium-mesh-counter 25s ease-in-out infinite;
            animation-delay: -12s;
          }

          .premium-float {
            animation: premium-float 6s ease-in-out infinite;
          }

          .premium-float-delayed {
            animation: premium-float 8s ease-in-out infinite;
            animation-delay: 2s;
          }

          .premium-gradient-flow {
            background-size: 200% 200%;
            animation: premium-gradient-flow 8s ease-in-out infinite;
          }

          /* Enhanced Glass Container */
          .premium-glass-enhanced {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.12) 0%, 
              rgba(255, 255, 255, 0.04) 30%,
              rgba(255, 255, 255, 0.08) 70%,
              rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(60px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 32px;
            box-shadow: 
              0 32px 80px rgba(0, 0, 0, 0.5),
              0 16px 32px rgba(59, 130, 246, 0.15),
              0 8px 16px rgba(139, 92, 246, 0.12),
              0 4px 8px rgba(34, 211, 238, 0.08),
              inset 0 2px 0 rgba(255, 255, 255, 0.2),
              inset 0 -2px 0 rgba(255, 255, 255, 0.05);
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .premium-glass-enhanced::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg,
              rgba(59, 130, 246, 0.05) 0%,
              rgba(139, 92, 246, 0.03) 30%,
              rgba(34, 211, 238, 0.04) 70%,
              rgba(16, 185, 129, 0.02) 100%);
            border-radius: 32px;
            pointer-events: none;
          }

          /* Enhanced CTA Button */
          .premium-cta-enhanced {
            border-radius: 16px;
            padding: 0;
            background: transparent;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 4px 16px rgba(59, 130, 246, 0.25),
              0 2px 8px rgba(139, 92, 246, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }

          .premium-cta-enhanced:hover {
            transform: translateY(-4px) scale(1.03);
            box-shadow: 
              0 16px 48px rgba(0, 0, 0, 0.5),
              0 8px 24px rgba(59, 130, 246, 0.4),
              0 4px 12px rgba(139, 92, 246, 0.25),
              0 2px 6px rgba(34, 211, 238, 0.2);
          }

          /* AI Core Visualization */
          .premium-quantum-field {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.18) 0%,
              rgba(139, 92, 246, 0.12) 30%,
              rgba(34, 211, 238, 0.10) 60%,
              rgba(16, 185, 129, 0.06) 80%,
              transparent 95%);
            filter: blur(80px);
            animation: premium-glow-primary 20s ease-in-out infinite;
          }

          .premium-ai-core {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.12) 0%,
              rgba(139, 92, 246, 0.08) 40%,
              rgba(34, 211, 238, 0.06) 70%,
              transparent 85%);
            backdrop-filter: blur(30px);
            border: 2px solid rgba(255, 255, 255, 0.12);
            box-shadow: 
              0 0 60px rgba(59, 130, 246, 0.3),
              0 0 120px rgba(139, 92, 246, 0.2),
              0 0 180px rgba(34, 211, 238, 0.1),
              inset 0 0 40px rgba(255, 255, 255, 0.08);
          }

          .premium-brain-enhanced {
            animation: premium-brain-enhanced 5s ease-in-out infinite;
          }

          .premium-neural-enhanced {
            animation: premium-neural-enhanced 25s linear infinite;
          }

          /* Entrance Animations */
          .premium-title-entrance {
            animation: premium-entrance 1.2s ease-out 0.3s forwards;
            opacity: 0;
          }

          .premium-subtitle-entrance {
            animation: premium-entrance 1.2s ease-out 0.5s forwards;
            opacity: 0;
          }

          .premium-button-entrance {
            animation: premium-entrance 1.2s ease-out 0.7s forwards;
            opacity: 0;
          }

          .premium-visual-entrance {
            animation: premium-entrance 1.5s ease-out 0.4s forwards;
            opacity: 0;
          }

          .premium-footer-entrance {
            animation: premium-entrance 1.2s ease-out 1.5s forwards;
            opacity: 0;
          }

          .premium-disclaimer-entrance {
            animation: premium-entrance 1.2s ease-out 0.9s forwards;
            opacity: 0;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .premium-glass-enhanced {
              border-radius: 24px;
              padding: 1.5rem;
            }
            
            .premium-quantum-field {
              width: 280px !important;
              height: 280px !important;
            }
            
            .premium-ai-core {
              width: 240px !important;
              height: 240px !important;
            }
            
            .premium-glow-primary,
            .premium-glow-secondary,
            .premium-glow-tertiary {
              opacity: 0.6 !important;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-glow-primary,
            .premium-glow-secondary,
            .premium-glow-tertiary,
            .premium-mesh-flow,
            .premium-mesh-counter,
            .premium-float,
            .premium-float-delayed,
            .premium-gradient-flow,
            .premium-brain-enhanced,
            .premium-neural-enhanced {
              animation: none;
            }
          }

          /* Performance Optimizations */
          .premium-glass-enhanced,
          .premium-cta-enhanced,
          .premium-ai-core {
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
