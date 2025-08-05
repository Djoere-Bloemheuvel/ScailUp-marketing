
import { ArrowRight, Brain, Zap, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const coreStrengths = [
    {
      icon: Brain,
      title: "Elite engineering",
      iconColor: "text-blue-400"
    },
    {
      icon: Zap,
      title: "2-4 weken levering",
      iconColor: "text-emerald-400"
    },
    {
      icon: Target,
      title: "Strategisch meedenken",
      iconColor: "text-purple-400"
    },
    {
      icon: Users,
      title: "Volledige ontzorging",
      iconColor: "text-cyan-400"
    }
  ];

  return (
    <footer className="relative bg-premium-black border-t border-premium-silver/5 overflow-hidden">
      {/* Enhanced Background Glow - More Visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left large ambient glow */}
        <div 
          className="absolute -top-1/3 -left-1/3 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[1000px] lg:h-[1000px] rounded-full opacity-60 md:opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.18) 30%, rgba(29, 78, 216, 0.12) 50%, rgba(30, 64, 175, 0.06) 70%, transparent 85%)',
            filter: 'blur(120px)',
            animation: 'enhanced-glow-blue 15s ease-in-out infinite'
          }}
        />
        
        {/* Bottom-right large ambient glow */}
        <div 
          className="absolute -bottom-1/3 -right-1/3 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] rounded-full opacity-55 md:opacity-65"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(79, 70, 229, 0.16) 35%, rgba(67, 56, 202, 0.10) 55%, rgba(55, 48, 163, 0.05) 75%, transparent 90%)',
            filter: 'blur(130px)',
            animation: 'enhanced-glow-purple 18s ease-in-out infinite',
            animationDelay: '-5s'
          }}
        />
        
        {/* Center accent glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-40 md:opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.12) 40%, rgba(79, 70, 229, 0.08) 60%, rgba(29, 78, 216, 0.04) 80%, transparent 95%)',
            filter: 'blur(100px)',
            animation: 'enhanced-glow-center 14s ease-in-out infinite',
            animationDelay: '-8s'
          }}
        />

        {/* Additional side accent glow */}
        <div 
          className="absolute top-1/4 -right-1/4 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full opacity-35 md:opacity-45"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.18) 0%, rgba(59, 130, 246, 0.12) 40%, rgba(79, 70, 229, 0.06) 70%, transparent 90%)',
            filter: 'blur(110px)',
            animation: 'enhanced-glow-accent 16s ease-in-out infinite',
            animationDelay: '-3s'
          }}
        />

        {/* Enhanced grain texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.12) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.10) 0%, transparent 2%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.06) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(255, 255, 255, 0.04) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Starfield layer */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 15% 25%, rgba(255, 255, 255, 0.9), transparent),
              radial-gradient(1px 1px at 35% 65%, rgba(59, 130, 246, 0.8), transparent),
              radial-gradient(1px 1px at 65% 15%, rgba(255, 255, 255, 0.7), transparent),
              radial-gradient(1px 1px at 85% 75%, rgba(99, 102, 241, 0.6), transparent),
              radial-gradient(1px 1px at 25% 85%, rgba(37, 99, 235, 0.5), transparent),
              radial-gradient(1px 1px at 75% 35%, rgba(255, 255, 255, 0.8), transparent)
            `,
            backgroundSize: '600px 600px, 400px 400px, 500px 500px, 550px 550px, 450px 450px, 650px 650px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main CTA Content */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Primary Headlines - Clean white title without gradient */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Klaar voor AI transformatie?
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-premium-silver/80 leading-relaxed max-w-2xl">
                Van strategie tot implementatie. Elite engineers leveren tastbare resultaten in 2-4 weken.
              </p>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className="group bg-white text-black hover:bg-gray-100 px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                <span className="flex items-center">
                  Start het gesprek
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
                </span>
              </Button>
            </div>

            {/* Core Strengths - Minimal and Elegant */}
            <div className="grid grid-cols-2 gap-6 pt-8 opacity-60">
              {coreStrengths.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <span className="text-sm text-premium-silver/70 font-medium tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Minimal Disclaimer */}
            <p className="text-premium-silver/50 text-sm italic pt-6 border-t border-premium-silver/5">
              Gratis kennismaking • Concrete strategie • Geen verplichtingen
            </p>
          </div>

          {/* Right side - Premium Visual Element */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-16">
            {/* Enhanced AI Brain Visual */}
            <div className="relative">
              {/* Outer premium glow - more visible */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.10) 50%, transparent 70%)',
                animation: 'premium-glow 8s ease-in-out infinite'
              }} />
              
              {/* Core brain container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 0 120px rgba(59, 130, 246, 0.15), inset 0 0 60px rgba(147, 51, 234, 0.08)'
              }}>
                <Brain className="w-20 h-20 md:w-24 md:h-24 text-white/80 animate-pulse" style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.2))',
                  animationDuration: '8s'
                }} />
              </div>
              
              {/* Elegant orbiting elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2].map(i => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full" 
                    style={{
                      background: i === 0 ? 'rgba(59, 130, 246, 0.6)' : i === 1 ? 'rgba(147, 51, 234, 0.6)' : 'rgba(16, 185, 129, 0.6)',
                      animation: `elegant-orbit ${20 + i * 6}s linear infinite`,
                      transform: `rotate(${i * 120}deg) translateY(-${120 + i * 15}px)`,
                      transformOrigin: '50% 50%'
                    }} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Footer Bottom Section */}
        <div className="mt-20 pt-12 border-t border-premium-silver/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Buildrs.AI</h3>
              <p className="text-premium-silver/60 italic text-sm max-w-md">
                Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-premium-silver/50 text-sm mb-2">
                © 2024 Buildrs.AI
              </p>
              <p className="text-premium-silver/40 text-xs italic">
                Designed for disruption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes enhanced-glow-blue {
            0%, 100% { 
              opacity: 0.60;
              transform: scale(1) rotate(0deg);
              filter: blur(120px);
            }
            33% { 
              opacity: 0.75;
              transform: scale(1.05) rotate(1deg);
              filter: blur(125px);
            }
            66% { 
              opacity: 0.50;
              transform: scale(0.98) rotate(-0.5deg);
              filter: blur(115px);
            }
          }

          @keyframes enhanced-glow-purple {
            0%, 100% { 
              opacity: 0.55;
              transform: scale(1) rotate(0deg);
              filter: blur(130px);
            }
            50% { 
              opacity: 0.70;
              transform: scale(1.08) rotate(-2deg);
              filter: blur(135px);
            }
          }

          @keyframes enhanced-glow-center {
            0%, 100% { 
              opacity: 0.40;
              transform: scale(1) rotate(0deg);
              filter: blur(100px);
            }
            40% { 
              opacity: 0.55;
              transform: scale(1.03) rotate(0.8deg);
              filter: blur(105px);
            }
            80% { 
              opacity: 0.35;
              transform: scale(0.97) rotate(-1.2deg);
              filter: blur(95px);
            }
          }

          @keyframes enhanced-glow-accent {
            0%, 100% { 
              opacity: 0.35;
              transform: scale(1) rotate(0deg);
              filter: blur(110px);
            }
            30% { 
              opacity: 0.50;
              transform: scale(1.06) rotate(1.5deg);
              filter: blur(115px);
            }
            70% { 
              opacity: 0.25;
              transform: scale(0.94) rotate(-1deg);
              filter: blur(105px);
            }
          }

          @keyframes premium-glow {
            0%, 100% { 
              opacity: 0.8;
              transform: scale(1);
            }
            50% { 
              opacity: 1;
              transform: scale(1.05);
            }
          }

          @keyframes elegant-orbit {
            0% { 
              transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg);
              opacity: 0.4;
            }
            50% {
              opacity: 0.8;
            }
            100% { 
              transform: rotate(360deg) translateY(var(--orbit-radius)) rotate(-360deg);
              opacity: 0.4;
            }
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .enhanced-glow-blue,
            .enhanced-glow-purple,
            .enhanced-glow-center,
            .enhanced-glow-accent {
              animation-duration: 20s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .enhanced-glow-blue,
            .enhanced-glow-purple,
            .enhanced-glow-center,
            .enhanced-glow-accent {
              animation: none;
            }
          }
        `
      }} />
    </footer>
  );
};

export default EndingCTA;
