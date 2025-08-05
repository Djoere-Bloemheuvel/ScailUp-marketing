
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-gray-900/20 to-premium-black" />
      
      {/* Smooth fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      {/* Ambient lighting effects - more subtle than current */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Main CTA Headlines */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Klaar voor{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  AI transformatie?
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-light text-premium-silver/90 leading-relaxed max-w-xl">
                Elite engineers. Tastbare resultaten in 2-4 weken. Van strategie tot implementatie.
              </h2>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className="group bg-white text-black hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                <span className="flex items-center">
                  Start het gesprek
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Subtle supporting points - minimal and understated */}
            <div className="grid grid-cols-2 gap-4 pt-6 opacity-70">
              {coreStrengths.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className={`w-3 h-3 ${item.iconColor}`} />
                  </div>
                  <span className="text-sm text-premium-silver/80 font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer text */}
            <p className="text-premium-silver/60 text-sm italic pt-4">
              Gratis kennismaking. Concrete strategie. Geen verplichtingen.
            </p>
          </div>

          {/* Right side - Visual Element */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-12">
            {/* Central AI Brain Visual */}
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse opacity-40" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Middle ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full animate-pulse opacity-60" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 70%)',
                animationDuration: '3s',
                animationDelay: '-1s'
              }} />
              
              {/* Core brain element */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                boxShadow: '0 0 80px rgba(147, 51, 234, 0.2), inset 0 0 40px rgba(16, 185, 129, 0.1)'
              }}>
                <Brain className="w-24 h-24 md:w-32 md:h-32 text-white/90 drop-shadow-2xl animate-pulse" style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                  animationDuration: '6s'
                }} />
              </div>
              
              {/* Subtle orbiting dots */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2].map(i => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full animate-spin" 
                    style={{
                      background: i === 0 ? 'rgba(59, 130, 246, 0.6)' : i === 1 ? 'rgba(147, 51, 234, 0.6)' : 'rgba(16, 185, 129, 0.6)',
                      animationDuration: `${12 + i * 4}s`,
                      transform: `rotate(${i * 120}deg) translateY(-${100 + i * 10}px)`,
                      transformOrigin: '50% 50%'
                    }} 
                  />
                ))}
              </div>
            </div>

            {/* Minimal connection lines */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent transform rotate-45 animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-16 h-0.5 bg-gradient-to-l from-purple-400/40 to-transparent transform -rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndingCTA;
