
import { ChevronRight, Cog, Sparkles, Zap, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AutomationHero = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Snelheid',
      description: 'Processen die 8 uur duurden, voltooien wij in 3 minuten. Elke dag opnieuw.',
      accentColor: 'from-blue-500 to-purple-600'
    },
    {
      icon: Clock,
      title: '24/7 Operationeel', 
      description: 'Uw automatisering stopt nooit. Weekenden, nachten — altijd actief.',
      accentColor: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Precisie',
      description: 'Nul fouten. Elke handeling exact zoals bedoeld. Geen uitzonderingen.',
      accentColor: 'from-green-500 to-blue-600'
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
            Slim. Snel. 
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base">
              Start uw automatisering
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-4 border-premium-silver/30 text-premium-silver hover:border-white hover:text-white rounded-full transition-all duration-300 hover:scale-105 text-base">
              <Sparkles className="mr-2 w-5 h-5" />
              Bekijk voorbeelden
            </Button>
          </div>
        </div>

        {/* Core Benefits Section - Glassmorphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden cursor-default animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
                  radial-gradient(ellipse 400px 200px at 50% 0%, rgba(34, 211, 238, 0.06) 0%, transparent 70%),
                  radial-gradient(ellipse 300px 150px at 50% 100%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)
                `,
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  0 4px 16px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `
              }}
            >
              {/* Glassmorphic hover glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10`}
                style={{
                  background: `linear-gradient(135deg, ${benefit.accentColor.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('blue-500', '59, 130, 246, 0.2').replace('purple-600', '147, 51, 234, 0.2').replace('purple-500', '168, 85, 247, 0.2').replace('pink-600', '219, 39, 119, 0.2').replace('green-500', '34, 197, 94, 0.2')}`,
                  filter: 'blur(20px)'
                }}
              />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container with glassmorphic styling */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div 
                    className="absolute inset-0 rounded-2xl p-0.5 transition-all duration-500 shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.accentColor})`,
                      opacity: '0.9'
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `
                          linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%),
                          radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)
                        `,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {/* Icon with enhanced glow */}
                      <benefit.icon className="w-10 h-10 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300 group-hover:scale-110" />
                      
                      {/* Glassmorphic inner glow */}
                      <div 
                        className="absolute inset-2 rounded-xl opacity-10 group-hover:opacity-20 transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${benefit.accentColor})`
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Floating glassmorphic accent elements */}
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-lg opacity-80 group-hover:opacity-90 group-hover:rotate-12 transition-all duration-500 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.accentColor})`,
                      backdropFilter: 'blur(4px)'
                    }}
                  />
                  <div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-75 group-hover:opacity-85 group-hover:-rotate-45 transition-all duration-700 delay-100 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.accentColor})`,
                      backdropFilter: 'blur(4px)'
                    }}
                  />
                </div>
                
                {/* Typography with glassmorphic text shadow */}
                <h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {benefit.title}
                </h3>
                
                <p 
                  className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/85 transition-colors duration-300"
                  style={{
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
