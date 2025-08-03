
import { ChevronRight, Cog, Sparkles, Zap, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AutomationHero = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Snelheid',
      description: 'Processen die 8 uur duurden, voltooien wij in 3 minuten. Elke dag opnieuw.',
      accentColor: 'from-blue-500 to-purple-600',
      glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(147,51,234,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(147,51,234,0.4)]',
      borderGlow: 'border-blue-500/30 hover:border-blue-400/50'
    },
    {
      icon: Clock,
      title: '24/7 Operationeel',
      description: 'Uw automatisering stopt nooit. Weekenden, nachten — altijd actief.',
      accentColor: 'from-purple-500 to-pink-600',
      glowColor: 'shadow-[0_0_30px_rgba(147,51,234,0.4),0_0_60px_rgba(236,72,153,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(147,51,234,0.6),0_0_80px_rgba(236,72,153,0.4)]',
      borderGlow: 'border-purple-500/30 hover:border-purple-400/50'
    },
    {
      icon: Target,
      title: 'Precisie',
      description: 'Nul fouten. Elke handeling exact zoals bedoeld. Geen uitzonderingen.',
      accentColor: 'from-green-500 to-blue-600',
      glowColor: 'shadow-[0_0_30px_rgba(34,197,94,0.4),0_0_60px_rgba(59,130,246,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.6),0_0_80px_rgba(59,130,246,0.4)]',
      borderGlow: 'border-green-500/30 hover:border-green-400/50'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-green-400/60 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Slim. Snel.{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                Onzichtbaar.
              </span>
              {/* Light gradient glow behind "Onzichtbaar" */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-2xl -z-10 scale-110" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. 
            Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
          </p>
        </div>

        {/* Core Benefits Section - Enhanced with colorful glows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden cursor-default animate-fade-in transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 ${benefit.glowColor} ${benefit.hoverGlow}`}
              style={{
                animationDelay: `${index * 0.2}s`,
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%),
                  radial-gradient(ellipse 300px 150px at 50% 0%, ${
                    benefit.accentColor.includes('blue') 
                      ? 'rgba(59, 130, 246, 0.15)' 
                      : benefit.accentColor.includes('purple') 
                      ? 'rgba(147, 51, 234, 0.15)'
                      : 'rgba(34, 197, 94, 0.15)'
                  } 0%, transparent 70%)
                `,
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px'
              }}
            >
              {/* Enhanced hover glow effect with color */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 ease-out bg-gradient-to-br ${
                benefit.accentColor.includes('blue') 
                  ? 'from-blue-500/20 via-purple-500/15 to-transparent' 
                  : benefit.accentColor.includes('purple') 
                  ? 'from-purple-500/20 via-pink-500/15 to-transparent'
                  : 'from-green-500/20 via-blue-500/15 to-transparent'
              }`} />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container - enhanced with colorful styling */}
                <div className="relative w-16 h-16 mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110">
                  <div 
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${benefit.borderGlow}`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        benefit.accentColor.includes('blue') 
                          ? 'rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2)' 
                          : benefit.accentColor.includes('purple') 
                          ? 'rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.2)'
                          : 'rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.2)'
                      })`,
                      border: `1px solid ${
                        benefit.accentColor.includes('blue') 
                          ? 'rgba(59, 130, 246, 0.4)' 
                          : benefit.accentColor.includes('purple') 
                          ? 'rgba(147, 51, 234, 0.4)'
                          : 'rgba(34, 197, 94, 0.4)'
                      }`,
                      boxShadow: `inset 0 0 20px ${
                        benefit.accentColor.includes('blue') 
                          ? 'rgba(59, 130, 246, 0.1)' 
                          : benefit.accentColor.includes('purple') 
                          ? 'rgba(147, 51, 234, 0.1)'
                          : 'rgba(34, 197, 94, 0.1)'
                      }`
                    }}
                  >
                    <div className="w-full h-full rounded-xl flex items-center justify-center bg-black/30 backdrop-blur-sm">
                      <benefit.icon className={`w-8 h-8 transition-all duration-300 ${
                        benefit.accentColor.includes('blue') 
                          ? 'text-blue-300 group-hover:text-blue-200' 
                          : benefit.accentColor.includes('purple') 
                          ? 'text-purple-300 group-hover:text-purple-200'
                          : 'text-green-300 group-hover:text-green-200'
                      }`} />
                    </div>
                  </div>
                </div>
                
                {/* Typography - enhanced colors */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-all duration-300">
                  {benefit.description}
                </p>
              </CardContent>

              {/* Enhanced shimmer effect with color */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full`} />
              
              {/* Additional inner border glow */}
              <div className={`absolute inset-0 rounded-2xl border opacity-30 group-hover:opacity-60 transition-opacity duration-500 ${benefit.borderGlow}`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
