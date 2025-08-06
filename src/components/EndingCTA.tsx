
import { ArrowRight, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import CinematicBackground from './hero/CinematicBackground';

const EndingCTA = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[120vh] overflow-hidden bg-black flex items-center justify-center py-20"
    >
      {/* Smooth vertical fade from black at top - 25% height */}
      <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
      
      {/* CinematicBackground - positioned behind main content with glass container hidden */}
      <div className="absolute inset-0 z-5">
        <CinematicBackground hideGlassContainer={true} />
      </div>

      {/* Main Content Container - Only one glass container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative">
          {/* Main Glass Container - The only one containing text */}
          <div className="premium-glass-main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Statement Title */}
                <div className="space-y-6">
                  <h1 className={`font-bold leading-tight tracking-tight transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    <span className="block text-white text-4xl md:text-5xl lg:text-6xl mb-2">Zonder AI</span>
                    <span className="text-white block text-[0.9em] md:text-[0.9em] lg:text-[0.9em]" style={{fontSize: '90%'}}>
                      Loop je achter.
                    </span>
                  </h1>
                  
                  <p className={`text-lg md:text-xl font-light text-premium-silver/90 leading-relaxed max-w-2xl transition-all duration-1000 ease-out delay-200 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    Wij brengen je grootste AI-kansen in kaart, zonder verplichtingen. In 30 minuten ontdek je waar jouw bedrijf het meeste rendement uit AI kan halen.
                  </p>
                </div>

                {/* Premium CTA Button */}
                <div className={`pt-4 transition-all duration-1000 ease-out delay-400 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  <button
                    onClick={handleContactClick}
                    aria-label="Plan mijn AI Scan - Start een gesprek met Buildrs.AI"
                    className="premium-ai-scan-button group relative overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center px-6 py-3">
                      <span className="text-lg font-semibold text-white">Plan mijn AI Scan</span>
                      <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Visual Element - Simplified AI Brain */}
              <div className={`relative flex items-center justify-center order-1 lg:order-2 transition-all duration-1000 ease-out delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                {/* Simplified AI Visualization */}
                <div className="relative">
                  {/* Core visualization container - clean and minimal */}
                  <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
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
                              'linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(6, 182, 212, 1))' : 
                              'linear-gradient(45deg, rgba(139, 92, 246, 1), rgba(236, 72, 153, 1))',
                            animation: `premium-orbit ${20 + i * 4}s linear infinite`,
                            transform: `rotate(${i * 90}deg) translateY(-${110 + i * 8}px)`,
                            transformOrigin: '50% 50%',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
                          }} 
                        />
                      ))}
                    </div>
                    
                    {/* Neural network connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
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
          <div className={`mt-16 pt-12 border-t border-white/10 transition-all duration-1000 ease-out delay-600 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
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

      {/* Enhanced Animation Styles with new AI Scan button */}
      <style dangerouslySetInnerHTML={{
        __html: `
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

          @keyframes premium-glow-pulse {
            0%, 100% { 
              box-shadow: 
                0 0 20px rgba(255, 255, 255, 0.3),
                0 0 40px rgba(255, 255, 255, 0.1);
            }
            50% { 
              box-shadow: 
                0 0 30px rgba(255, 255, 255, 0.5),
                0 0 60px rgba(255, 255, 255, 0.2);
            }
          }

          /* Premium Glass Container - Only one main container */
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

          /* New AI Scan Button Design */
          .premium-ai-scan-button {
            background: transparent;
            border: 1px solid white;
            border-radius: 8px;
            padding: 12px 24px;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-weight: 600;
            font-size: 1.125rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .premium-ai-scan-button:hover {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 40px rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }

          .premium-ai-scan-button:active {
            transform: translateY(0);
          }

          .premium-ai-scan-button:focus {
            outline: none;
            box-shadow: 
              0 0 0 2px rgba(255, 255, 255, 0.2),
              0 0 20px rgba(255, 255, 255, 0.3);
          }

          /* Visual Elements */
          .premium-brain-pulse {
            animation: premium-brain-pulse 4s ease-in-out infinite;
          }

          .premium-neural-ring {
            animation: premium-neural-ring 20s linear infinite;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .premium-glass-main-container {
              border-radius: 20px;
              padding: 1rem;
            }
            
            .premium-orbit-node {
              --orbit-distance: -60px;
            }

            .premium-ai-scan-button {
              padding: 10px 20px;
              font-size: 1rem;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .premium-brain-pulse,
            .premium-neural-ring,
            .premium-orbit-node {
              animation: none;
            }
            
            .premium-ai-scan-button {
              transition: none;
            }
          }

          /* Performance Optimizations */
          .premium-glass-main-container,
          .premium-ai-scan-button {
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
