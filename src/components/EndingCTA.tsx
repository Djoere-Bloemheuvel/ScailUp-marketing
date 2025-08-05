
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
      {/* Premium background with ultra-subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-gray-900/5 to-premium-black" />
      
      {/* Extremely subtle ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s', animationDelay: '-8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main CTA Content */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Primary Headlines */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Klaar voor{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  AI transformatie?
                </span>
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
            {/* Refined AI Brain Visual */}
            <div className="relative">
              {/* Outer premium glow - very subtle */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 70%)',
                animation: 'premium-glow 8s ease-in-out infinite'
              }} />
              
              {/* Core brain container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 0 100px rgba(59, 130, 246, 0.1), inset 0 0 50px rgba(147, 51, 234, 0.05)'
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
                      background: i === 0 ? 'rgba(59, 130, 246, 0.4)' : i === 1 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(16, 185, 129, 0.4)',
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

      {/* Premium Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
    </footer>
  );
};

export default EndingCTA;
