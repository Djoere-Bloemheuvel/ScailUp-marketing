
import { ChevronRight, Cog, Sparkles, Zap, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const AutomationHero = () => {
  const benefits = [{
    icon: Zap,
    title: 'Snelheid',
    description: 'Processen die 8 uur duurden, voltooien wij in 3 minuten. Elke dag opnieuw.',
    accentColor: 'from-blue-500 to-purple-600',
    glowColor: 'rgba(59, 130, 246, 0.3)' // Blue glow
  }, {
    icon: Clock,
    title: '24/7 Operationeel',
    description: 'Uw automatisering stopt nooit. Weekenden, nachten — altijd actief.',
    accentColor: 'from-purple-500 to-pink-600',
    glowColor: 'rgba(147, 51, 234, 0.3)' // Purple glow
  }, {
    icon: Target,
    title: 'Precisie',
    description: 'Nul fouten. Elke handeling exact zoals bedoeld. Geen uitzonderingen.',
    accentColor: 'from-green-500 to-blue-600',
    glowColor: 'rgba(236, 72, 153, 0.3)' // Pink glow
  }];

  return <section className="relative py-20 lg:py-32 overflow-hidden">
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

        {/* Core Benefits Section - Enhanced Glassmorphic with Premium Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <Card key={index} className="group relative overflow-hidden cursor-default animate-fade-in transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3" style={{
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
                  inset 0 -1px 0 rgba(255, 255, 255, 0.05),
                  0 0 20px ${benefit.glowColor}
                `
        }}>
              {/* Enhanced Glassmorphic hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out -z-10`} style={{
            background: `linear-gradient(135deg, ${benefit.accentColor.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('blue-500', '59, 130, 246, 0.3').replace('purple-600', '147, 51, 234, 0.3').replace('purple-500', '168, 85, 247, 0.3').replace('pink-600', '219, 39, 119, 0.3').replace('green-500', '34, 197, 94, 0.3')}`,
            filter: 'blur(25px)',
            transform: 'scale(1.1)'
          }} />

              {/* Premium hover border enhancement */}
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/30 transition-all duration-500 ease-out" />
              
              {/* Stronger glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out -z-20" 
                style={{
                  boxShadow: `0 0 40px ${benefit.glowColor.replace('0.3', '0.6')}, 0 0 80px ${benefit.glowColor.replace('0.3', '0.4')}`
                }}
              />
              
              {/* Dynamic ambient glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out" style={{
            background: `radial-gradient(circle at 50% 50%, ${benefit.accentColor.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : benefit.accentColor.includes('purple') ? 'rgba(147, 51, 234, 0.2)' : 'rgba(34, 197, 94, 0.2)'} 0%, transparent 70%)`
          }} />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container with enhanced glassmorphic styling and hover effects */}
                <div className="relative w-20 h-20 mx-auto mb-6 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 rounded-2xl p-0.5 transition-all duration-500 shadow-xl group-hover:shadow-2xl" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                opacity: '0.9',
                filter: 'brightness(1) group-hover:brightness(1.2)'
              }}>
                    <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:bg-black/95 transition-all duration-500" style={{
                  background: `
                          linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%),
                          radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)
                        `,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                      {/* Icon with uniform white color and enhanced glow and hover animation */}
                      <benefit.icon className="w-10 h-10 text-white relative z-10 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl group-hover:scale-110" />
                      
                      {/* Enhanced glassmorphic inner glow with hover animation */}
                      <div className="absolute inset-2 rounded-xl opacity-10 group-hover:opacity-30 transition-all duration-500" style={{
                    background: `linear-gradient(135deg, ${benefit.accentColor})`,
                    filter: 'blur(8px) group-hover:blur(6px)'
                  }} />

                      {/* Pulsing hover effect overlay */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ease-out animate-pulse" style={{
                    background: `linear-gradient(135deg, ${benefit.accentColor})`,
                    animationDuration: '2s'
                  }} />
                    </div>
                  </div>
                  
                  {/* Enhanced floating glassmorphic accent elements with hover animations */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg opacity-80 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700 shadow-lg" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                backdropFilter: 'blur(4px)',
                filter: 'brightness(1.2)'
              }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-75 group-hover:opacity-95 group-hover:-rotate-90 group-hover:scale-150 transition-all duration-800 delay-100 shadow-lg" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                backdropFilter: 'blur(4px)',
                filter: 'brightness(1.1)'
              }} />

                  {/* Orbiting particle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-500">
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-spin" style={{
                  background: benefit.accentColor.includes('blue') ? '#3b82f6' : benefit.accentColor.includes('purple') ? '#9333ea' : '#22c55e',
                  transform: 'translate(-50%, -50%)',
                  animationDuration: '3s'
                }}>
                      <div className="absolute w-2 h-2 rounded-full -top-8" style={{
                    background: benefit.accentColor.includes('blue') ? '#60a5fa' : benefit.accentColor.includes('purple') ? '#a855f7' : '#4ade80'
                  }} />
                    </div>
                  </div>
                </div>
                
                {/* Typography with enhanced glassmorphic text shadow and hover effects */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-all duration-500 transform group-hover:scale-105" style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)'
            }}>
                  {benefit.title}
                </h3>
                
                <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-all duration-500 transform group-hover:scale-[1.02]" style={{
              textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
            }}>
                  {benefit.description}
                </p>

                {/* Subtle scanning line effect on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-80 transition-all duration-1000 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-y-full group-hover:translate-y-full" style={{
              animationDelay: '0.2s'
            }} />
              </CardContent>

              {/* Enhanced hover shimmer effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" />
              
              {/* Premium hover reflection */}
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
            </Card>)}
        </div>
      </div>
    </section>;
};
export default AutomationHero;
