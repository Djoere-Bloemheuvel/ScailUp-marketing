
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';
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

      {/* Enhanced Blue Ambient Glow Container - Behind everything with proper layering */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Primary large glow - bottom left quadrant */}
        <div 
          className="absolute -bottom-1/2 -left-1/3 w-[50rem] h-[50rem] rounded-full opacity-50 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(34, 211, 238, 0.28) 30%, rgba(37, 99, 235, 0.16) 50%, rgba(59, 130, 246, 0.08) 75%, transparent 90%)',
            filter: 'blur(80px)',
            animationDuration: '12s'
          }}
        />
        
        {/* Secondary glow - top right quadrant */}
        <div 
          className="absolute -top-1/3 -right-1/3 w-[35rem] h-[35rem] rounded-full opacity-45 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(99, 102, 241, 0.22) 35%, rgba(59, 130, 246, 0.12) 60%, rgba(147, 51, 234, 0.06) 80%, transparent 95%)',
            filter: 'blur(70px)',
            animationDuration: '8s',
            animationDelay: '-4s'
          }}
        />
        
        {/* Center ambient glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full opacity-35 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(16, 185, 129, 0.18) 40%, rgba(59, 130, 246, 0.1) 70%, rgba(34, 211, 238, 0.04) 90%, transparent 100%)',
            filter: 'blur(60px)',
            animationDuration: '15s',
            animationDelay: '-7s'
          }}
        />
        
        {/* Focused accent glow - bottom right */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[25rem] h-[25rem] rounded-full opacity-55 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(34, 211, 238, 0.28) 40%, rgba(147, 51, 234, 0.15) 65%, rgba(59, 130, 246, 0.06) 85%, transparent 100%)',
            filter: 'blur(50px)',
            animationDuration: '10s',
            animationDelay: '-2s'
          }}
        />

        {/* Additional wide coverage glow - full screen */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.08) 35%, rgba(37, 99, 235, 0.04) 60%, transparent 85%)',
            filter: 'blur(120px)',
            animationDuration: '20s',
            animationDelay: '-10s'
          }}
        />

        {/* Subtle edge enhancement glows */}
        <div 
          className="absolute top-0 left-0 w-[20rem] h-[20rem] rounded-full opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%)',
            filter: 'blur(40px)',
            animationDuration: '14s',
            animationDelay: '-6s'
          }}
        />
        
        <div 
          className="absolute bottom-0 right-0 w-[18rem] h-[18rem] rounded-full opacity-35 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.28) 0%, rgba(16, 185, 129, 0.15) 45%, transparent 75%)',
            filter: 'blur(45px)',
            animationDuration: '16s',
            animationDelay: '-8s'
          }}
        />
      </div>

      {/* Reduced Intensity Blue Ambient Orb - Positioned behind glass container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
        {/* Core blue orb - reduced opacity and saturation */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full opacity-40 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(37, 99, 235, 0.25) 20%, rgba(29, 78, 216, 0.18) 40%, rgba(59, 130, 246, 0.12) 60%, rgba(34, 211, 238, 0.08) 75%, rgba(59, 130, 246, 0.04) 85%, transparent 95%)',
            filter: 'blur(120px)',
            animationDuration: '8s'
          }}
        />
        
        {/* Inner core - reduced intensity */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full opacity-50 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0.35) 25%, rgba(29, 78, 216, 0.25) 45%, rgba(59, 130, 246, 0.18) 65%, rgba(34, 211, 238, 0.1) 80%, transparent 90%)',
            filter: 'blur(80px)',
            animationDuration: '6s',
            animationDelay: '-2s'
          }}
        />
        
        {/* Radiating light rays - much softer */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full opacity-35 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.3) 30%, rgba(29, 78, 216, 0.22) 50%, rgba(59, 130, 246, 0.15) 70%, rgba(34, 211, 238, 0.08) 85%, transparent 95%)',
            filter: 'blur(60px)',
            animationDuration: '4s',
            animationDelay: '-1s'
          }}
        />
        
        {/* Outer glow expansion - reduced opacity */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.18) 15%, rgba(29, 78, 216, 0.12) 30%, rgba(59, 130, 246, 0.08) 50%, rgba(34, 211, 238, 0.04) 70%, rgba(59, 130, 246, 0.02) 85%, transparent 95%)',
            filter: 'blur(140px)',
            animationDuration: '10s',
            animationDelay: '-3s'
          }}
        />
      </div>

      {/* Premium Glass Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Main Glass Container */}
          <div className="premium-glass-main-container">
            {/* Floating Particles inside container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${15 + i * 10}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${4 + i * 0.5}s`
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1 relative">
                {/* Animated accent lines */}
                <div className="absolute -left-6 top-8 w-1 h-20 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full opacity-60 animate-pulse" />
                
                {/* Statement Title with enhanced animations */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight premium-title-entrance">
                    <span className="block text-white mb-3 relative overflow-hidden">
                      <span className="inline-block animate-slide-up">Klaar voor</span>
                      <Sparkles className="inline-block ml-3 w-8 h-8 text-yellow-400 animate-twinkle" />
                    </span>
                    <span className="text-white block relative overflow-hidden">
                      <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        AI transformatie?
                      </span>
                      <Zap className="inline-block ml-3 w-8 h-8 text-blue-400 animate-electric" />
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl font-light text-premium-silver/90 leading-relaxed max-w-2xl premium-subtitle-entrance relative">
                    <span className="animate-typewriter">
                      Van strategie tot implementatie. Elite engineers leveren tastbare resultaten in 2-4 weken.
                    </span>
                    {/* Animated cursor */}
                    <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-blink" />
                  </p>
                </div>

                {/* Premium CTA Button with enhanced effects */}
                <div className="pt-4 premium-button-entrance">
                  <Button 
                    onClick={handleContactClick}
                    size="lg" 
                    className="premium-cta-button group relative overflow-hidden hover:scale-105 transition-all duration-300"
                  >
                    <div className="premium-button-shimmer" />
                    <div className="relative z-10 flex items-center px-6 py-3">
                      <span className="text-lg font-semibold text-black">Start het gesprek</span>
                      <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                      {/* Animated dots */}
                      <div className="flex ml-3 space-x-1">
                        {[0, 1, 2].map(i => (
                          <div 
                            key={i}
                            className="w-1 h-1 bg-black/40 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </Button>
                </div>

                {/* Animated stats or badges */}
                <div className="flex flex-wrap gap-4 pt-6 premium-stats-entrance">
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 animate-fade-in-up">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white/80">100% op maat</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white/80">2-4 weken</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white/80">Elite engineers</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Element with enhanced interactivity */}
              <div className="relative flex items-center justify-center order-1 lg:order-2 premium-visual-entrance">
                {/* Premium AI Visualization */}
                <div className="relative group cursor-pointer">
                  {/* Outer quantum field with hover effect */}
                  <div className="absolute inset-0 w-80 h-80 rounded-full premium-quantum-field group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Core visualization container */}
                  <div className="relative w-64 h-64 rounded-full premium-core-container flex items-center justify-center group-hover:shadow-2xl transition-all duration-500">
                    {/* Central brain element with enhanced animations */}
                    <div className="relative z-10 group-hover:scale-125 transition-transform duration-500">
                      <Brain className="w-20 h-20 text-white/90 premium-brain-pulse group-hover:text-blue-300 transition-colors duration-500" />
                      {/* Pulsing rings around brain */}
                      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping" style={{ animationDelay: '0.5s' }} />
                    </div>
                    
                    {/* Enhanced orbiting intelligence nodes */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3, 4, 5].map(i => (
                        <div 
                          key={`node-${i}`} 
                          className="absolute w-3 h-3 rounded-full premium-orbit-node group-hover:w-4 group-hover:h-4 transition-all duration-300"
                          style={{
                            background: i % 3 === 0 ? 
                              'linear-gradient(45deg, rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.8))' : 
                              i % 3 === 1 ?
                              'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))' :
                              'linear-gradient(45deg, rgba(16, 185, 129, 0.8), rgba(34, 211, 238, 0.8))',
                            animation: `premium-orbit ${15 + i * 3}s linear infinite`,
                            transform: `rotate(${i * 60}deg) translateY(-${100 + i * 6}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Enhanced neural network connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                      {[0, 1, 2, 3].map(i => (
                        <circle
                          key={`connection-${i}`}
                          cx="50%"
                          cy="50%"
                          r={40 + i * 15}
                          fill="none"
                          stroke="url(#neuralGradient)"
                          strokeWidth="2"
                          strokeDasharray="6 12"
                          className="premium-neural-ring"
                          style={{
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                      
                      <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                          <stop offset="25%" stopColor="rgba(59, 130, 246, 0.4)" />
                          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
                          <stop offset="75%" stopColor="rgba(34, 211, 238, 0.4)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Data flow particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`particle-${i}`}
                          className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full animate-flow-particle"
                          style={{
                            left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 80}%`,
                            top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 80}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '3s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Footer Section with enhanced animations */}
          <div className="mt-16 pt-12 border-t border-white/10 premium-footer-entrance">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="animate-slide-in-left">
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight relative">
                  Buildrs.AI
                  <div className="absolute -top-1 -right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </h3>
                <p className="text-premium-silver/70 italic text-sm max-w-md">
                  Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
                </p>
              </div>
              
              <div className="text-center md:text-right animate-slide-in-right">
                <p className="text-premium-silver/50 text-sm mb-1">© 2024 Buildrs.AI</p>
                <p className="text-premium-silver/40 text-xs italic">Designed for disruption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-orbit {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg);
              opacity: 0.42;
            }
            50% {
              opacity: 0.8;
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-distance)) rotate(-360deg);
              opacity: 0.42;
            }
          }

          @keyframes premium-neural-ring {
            0%, 100% { 
              opacity: 0.3;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.7;
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
              transform: scale(1.08);
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

          @keyframes animate-float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.6;
            }
            33% { 
              transform: translateY(-10px) rotate(120deg);
              opacity: 0.8;
            }
            66% { 
              transform: translateY(5px) rotate(240deg);
              opacity: 0.4;
            }
          }

          @keyframes slide-up {
            0% { 
              transform: translateY(100%);
              opacity: 0;
            }
            100% { 
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes twinkle {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1) rotate(0deg);
            }
            50% { 
              opacity: 1;
              transform: scale(1.2) rotate(180deg);
            }
          }

          @keyframes electric {
            0%, 100% { 
              opacity: 0.7;
              filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
            }
            50% { 
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8));
            }
          }

          @keyframes typewriter {
            0% { width: 0; }
            100% { width: 100%; }
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in-left {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes flow-particle {
            0% {
              opacity: 0;
              transform: scale(0);
            }
            50% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0) rotate(360deg);
            }
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

          /* Enhanced Premium Button */
          .premium-cta-button {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            box-shadow: 
              0 6px 24px rgba(0, 0, 0, 0.3),
              0 3px 12px rgba(59, 130, 246, 0.14),
              inset 0 1px 0 rgba(255, 255, 255, 0.8),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }

          .premium-cta-button:hover {
            transform: translateY(-3px) scale(1.05);
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
              rgba(255, 255, 255, 0.6) 50%, 
              transparent 100%);
            animation: premium-shimmer 2s ease-in-out infinite;
          }

          /* Enhanced Visual Elements */
          .premium-quantum-field {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.15) 0%,
              rgba(147, 51, 234, 0.1) 35%,
              rgba(34, 211, 238, 0.08) 70%,
              transparent 85%);
            filter: blur(50px);
            animation: premium-focal-glow 12s ease-in-out infinite;
          }

          .premium-core-container {
            background: radial-gradient(circle,
              rgba(59, 130, 246, 0.08) 0%,
              rgba(147, 51, 234, 0.04) 50%,
              transparent 70%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 0 40px rgba(59, 130, 246, 0.2),
              0 0 80px rgba(147, 51, 234, 0.1),
              inset 0 0 30px rgba(255, 255, 255, 0.08);
          }

          .premium-brain-pulse {
            animation: premium-brain-pulse 3s ease-in-out infinite;
          }

          .premium-neural-ring {
            animation: premium-neural-ring 15s linear infinite;
          }

          /* Enhanced Entrance Animations */
          .premium-title-entrance {
            animation: premium-entrance-fade 1.2s ease-out 0.2s forwards;
            opacity: 0;
          }

          .premium-subtitle-entrance {
            animation: premium-entrance-fade 1.2s ease-out 0.5s forwards;
            opacity: 0;
          }

          .premium-button-entrance {
            animation: premium-entrance-fade 1.2s ease-out 0.8s forwards;
            opacity: 0;
          }

          .premium-visual-entrance {
            animation: premium-entrance-fade 1.5s ease-out 0.3s forwards;
            opacity: 0;
          }

          .premium-footer-entrance {
            animation: premium-entrance-fade 1.2s ease-out 1.5s forwards;
            opacity: 0;
          }

          .premium-stats-entrance {
            animation: premium-entrance-fade 1.2s ease-out 1.1s forwards;
            opacity: 0;
          }

          /* New Animation Classes */
          .animate-float {
            animation: animate-float 4s ease-in-out infinite;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .animate-twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }

          .animate-electric {
            animation: electric 1.5s ease-in-out infinite;
          }

          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typewriter 3s steps(40) 1s forwards;
          }

          .animate-blink {
            animation: blink 1s infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out 1.8s forwards;
            opacity: 0;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out 2s forwards;
            opacity: 0;
          }

          .animate-flow-particle {
            animation: flow-particle 3s ease-in-out infinite;
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

            .animate-typewriter {
              white-space: normal;
              overflow: visible;
              animation: none;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-quantum-field,
            .premium-brain-pulse,
            .premium-neural-ring,
            .premium-orbit-node,
            .animate-float,
            .animate-twinkle,
            .animate-electric,
            .animate-flow-particle {
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
