
import { Brain, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AgentHero = () => {
  const benefits = [{
    icon: Brain,
    title: 'Zelfstandig beslissen',
    description: 'AI-agents die denken, redeneren en handelen zonder menselijke tussenkomst.',
    accentColor: 'from-emerald-500 to-teal-700',
    glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.4),0_0_80px_rgba(16,185,129,0.2)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(16,185,129,0.15),0_0_120px_rgba(16,185,129,0.08),0_0_200px_rgba(16,185,129,0.04)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(16,185,129,0.3),0_0_160px_rgba(16,185,129,0.15),0_0_300px_rgba(16,185,129,0.08)]',
    iconColor: 'text-emerald-400',
    nativeColor: 'emerald',
    borderColor: 'border-emerald-500/15',
    hoverBorderColor: 'group-hover:border-emerald-400/30',
    backgroundTint: 'rgba(16, 185, 129, 0.02)',
    hoverBackgroundTint: 'rgba(16, 185, 129, 0.06)'
  }, {
    icon: Zap,
    title: '24/7 operationeel',
    description: 'Altijd alert, altijd actief - geen pauzes, geen fouten, maximale efficiëntie.',
    accentColor: 'from-teal-500 to-emerald-700',
    glowColor: 'shadow-[0_0_30px_rgba(20,184,166,0.25)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(20,184,166,0.4),0_0_80px_rgba(20,184,166,0.2)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(20,184,166,0.15),0_0_120px_rgba(20,184,166,0.08),0_0_200px_rgba(20,184,166,0.04)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(20,184,166,0.3),0_0_160px_rgba(20,184,166,0.15),0_0_300px_rgba(20,184,166,0.08)]',
    iconColor: 'text-teal-400',
    nativeColor: 'teal',
    borderColor: 'border-teal-500/15',
    hoverBorderColor: 'group-hover:border-teal-400/30',
    backgroundTint: 'rgba(20, 184, 166, 0.02)',
    hoverBackgroundTint: 'rgba(20, 184, 166, 0.06)'
  }, {
    icon: Shield,
    title: 'Veilig & compliant',
    description: 'Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole.',
    accentColor: 'from-slate-600 to-teal-600',
    glowColor: 'shadow-[0_0_30px_rgba(71,85,105,0.2)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(71,85,105,0.35),0_0_80px_rgba(71,85,105,0.18)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(71,85,105,0.12),0_0_120px_rgba(71,85,105,0.06),0_0_200px_rgba(71,85,105,0.03)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(71,85,105,0.25),0_0_160px_rgba(71,85,105,0.12),0_0_300px_rgba(71,85,105,0.06)]',
    iconColor: 'text-slate-300',
    nativeColor: 'slate',
    borderColor: 'border-slate-500/15',
    hoverBorderColor: 'group-hover:border-slate-400/30',
    backgroundTint: 'rgba(71, 85, 105, 0.02)',
    hoverBackgroundTint: 'rgba(71, 85, 105, 0.05)'
  }];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient with dark green/teal tints inspired by the uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-emerald-950/80" />
      
      {/* Ambient lighting effects with darker green/teal colors */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-600/08 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/06 rounded-full blur-3xl" />

      {/* Subtle animated particles with muted green/teal colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-teal-400/30 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-slate-400/35 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-emerald-500/45 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Autonoom. Intelligent.{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent block">
                Onmisbaar.
              </span>
              {/* Light gradient glow behind "Onmisbaar" with darker tones */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 blur-2xl -z-10 scale-110" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen, en automatiseren repetitieve workflows zonder handmatige input.
          </p>
        </div>

        {/* Core Benefits Section - Updated with darker green/teal color scheme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden cursor-default animate-fade-in transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 ${benefit.glowColor} ${benefit.hoverGlow} ${benefit.radiantGlow} ${benefit.hoverRadiantGlow} ${benefit.borderColor} ${benefit.hoverBorderColor}`} 
              style={{
                animationDelay: `${index * 0.2}s`,
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.02) 0%, 
                    ${benefit.backgroundTint} 20%, 
                    rgba(255, 255, 255, 0.01) 100%
                  ),
                  radial-gradient(ellipse 400px 200px at 50% 0%, ${benefit.backgroundTint} 0%, transparent 70%),
                  radial-gradient(ellipse 300px 150px at 50% 100%, ${benefit.backgroundTint} 0%, transparent 70%)
                `,
                backdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid rgba(255, 255, 255, 0.06)`,
                borderRadius: '16px',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  0 4px 16px rgba(0, 0, 0, 0.25),
                  inset 0 1px 0 rgba(255, 255, 255, 0.06),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.03)
                `
              }}
            >
              {/* Enhanced Glassmorphic hover glow effect with darker native color integration */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out -z-10`} style={{
                background: `
                  linear-gradient(135deg, 
                    ${benefit.hoverBackgroundTint} 0%, 
                    ${benefit.accentColor.replace('from-', 'rgba(').replace('to-', 'rgba(')
                      .replace('emerald-500', '16, 185, 129, 0.25').replace('teal-700', '15, 118, 110, 0.25')
                      .replace('teal-500', '20, 184, 166, 0.25').replace('emerald-700', '4, 120, 87, 0.25')
                      .replace('slate-600', '71, 85, 105, 0.2').replace('teal-600', '8, 145, 178, 0.2')} 50%, 
                    ${benefit.hoverBackgroundTint} 100%
                  )
                `,
                filter: 'blur(25px)',
                transform: 'scale(1.1)'
              }} />

              {/* Premium hover border enhancement with darker native colors */}
              <div className={`absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`} style={{
                borderColor: benefit.nativeColor === 'emerald' ? 'rgba(16, 185, 129, 0.25)' : 
                           benefit.nativeColor === 'teal' ? 'rgba(20, 184, 166, 0.25)' : 
                           'rgba(71, 85, 105, 0.2)'
              }} />
              
              {/* Dynamic ambient glow on hover with darker native colors */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out" style={{
                background: `radial-gradient(circle at 50% 50%, ${benefit.hoverBackgroundTint} 0%, transparent 70%)`
              }} />

              {/* Extended Outward Radiant Glow - positioned outside the card */}
              <div className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000 ease-out -z-20" style={{
                background: `radial-gradient(ellipse 200% 150% at 50% 50%, ${benefit.nativeColor === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : benefit.nativeColor === 'teal' ? 'rgba(20, 184, 166, 0.08)' : 'rgba(71, 85, 105, 0.06)'} 0%, transparent 60%)`,
                filter: 'blur(40px)'
              }} />

              {/* Far Extended Radiant Glow - even further outward */}
              <div className="absolute -inset-16 rounded-full opacity-0 group-hover:opacity-15 transition-all duration-1500 ease-out -z-30" style={{
                background: `radial-gradient(ellipse 300% 200% at 50% 50%, ${benefit.nativeColor === 'emerald' ? 'rgba(16, 185, 129, 0.04)' : benefit.nativeColor === 'teal' ? 'rgba(20, 184, 166, 0.04)' : 'rgba(71, 85, 105, 0.03)'} 0%, transparent 70%)`,
                filter: 'blur(60px)'
              }} />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container with enhanced darker color integration */}
                <div className="relative w-20 h-20 mx-auto mb-6 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 rounded-2xl p-0.5 transition-all duration-500 shadow-xl group-hover:shadow-2xl" style={{
                    background: `linear-gradient(135deg, ${benefit.accentColor})`,
                    opacity: '0.8',
                    filter: 'brightness(0.9) group-hover:brightness(1.1)'
                  }}>
                    <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500" style={{
                      background: `
                        linear-gradient(135deg, 
                          rgba(0, 0, 0, 0.85) 0%, 
                          ${benefit.backgroundTint} 30%, 
                          rgba(0, 0, 0, 0.9) 100%
                        ),
                        radial-gradient(ellipse at center, ${benefit.backgroundTint} 0%, transparent 70%)
                      `,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${benefit.nativeColor === 'emerald' ? 'rgba(16, 185, 129, 0.15)' : 
                              benefit.nativeColor === 'teal' ? 'rgba(20, 184, 166, 0.15)' : 
                              'rgba(71, 85, 105, 0.12)'}`
                    }}>
                      {/* Icon with darker native color */}
                      <benefit.icon className={`w-10 h-10 ${benefit.iconColor} relative z-10 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl group-hover:scale-110`} />
                      
                      {/* Enhanced glassmorphic inner glow with darker native colors */}
                      <div className="absolute inset-2 rounded-xl opacity-15 group-hover:opacity-30 transition-all duration-500" style={{
                        background: `linear-gradient(135deg, ${benefit.hoverBackgroundTint} 0%, ${benefit.accentColor} 50%, ${benefit.hoverBackgroundTint} 100%)`,
                        filter: 'blur(8px)'
                      }} />

                      {/* Pulsing hover effect overlay with darker native colors */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ease-out animate-pulse" style={{
                        background: `linear-gradient(135deg, ${benefit.hoverBackgroundTint} 0%, ${benefit.accentColor} 100%)`,
                        animationDuration: '2s'
                      }} />
                    </div>
                  </div>
                  
                  {/* Enhanced floating glassmorphic accent elements with darker native colors */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg opacity-70 group-hover:opacity-90 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700 shadow-lg" style={{
                    background: `linear-gradient(135deg, ${benefit.accentColor})`,
                    backdropFilter: 'blur(4px)',
                    filter: 'brightness(1.1)'
                  }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-65 group-hover:opacity-85 group-hover:-rotate-90 group-hover:scale-150 transition-all duration-800 delay-100 shadow-lg" style={{
                    background: `linear-gradient(135deg, ${benefit.accentColor})`,
                    backdropFilter: 'blur(4px)',
                    filter: 'brightness(1.0)'
                  }} />

                  {/* Orbiting particle effect on hover with darker native colors */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-all duration-500">
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-spin" style={{
                      background: benefit.nativeColor === 'emerald' ? '#10b981' : benefit.nativeColor === 'teal' ? '#14b8a6' : '#94a3b8',
                      transform: 'translate(-50%, -50%)',
                      animationDuration: '3s'
                    }}>
                      <div className="absolute w-2 h-2 rounded-full -top-8" style={{
                        background: benefit.nativeColor === 'emerald' ? '#34d399' : benefit.nativeColor === 'teal' ? '#2dd4bf' : '#cbd5e1'
                      }} />
                    </div>
                  </div>
                </div>
                
                {/* Typography with enhanced darker color integration */}
                <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-all duration-500 transform" style={{
                  color: benefit.nativeColor === 'emerald' ? '#a7f3d0' : 
                         benefit.nativeColor === 'teal' ? '#99f6e4' : 
                         '#cbd5e1',
                  textShadow: `0 2px 10px rgba(0, 0, 0, 0.6), 0 0 20px ${benefit.backgroundTint}`
                }}>
                  {benefit.title}
                </h3>
                
                <p className="text-slate-300/70 leading-relaxed text-sm group-hover:text-slate-300/90 transition-all duration-500 transform group-hover:scale-[1.02]" style={{
                  textShadow: `0 1px 5px rgba(0, 0, 0, 0.4), 0 0 10px ${benefit.backgroundTint}`
                }}>
                  {benefit.description}
                </p>

                {/* Subtle scanning line effect on hover with darker native colors */}
                <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-60 transition-all duration-1000 ease-out transform -translate-y-full group-hover:translate-y-full" style={{
                  background: `linear-gradient(to right, transparent, ${benefit.nativeColor === 'emerald' ? 'rgba(16, 185, 129, 0.4)' : benefit.nativeColor === 'teal' ? 'rgba(20, 184, 166, 0.4)' : 'rgba(71, 85, 105, 0.3)'}, transparent)`,
                  animationDelay: '0.2s'
                }} />
              </CardContent>

              {/* Enhanced hover shimmer effect with darker native colors */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" style={{
                background: `linear-gradient(to right, transparent, ${benefit.backgroundTint}, transparent)`
              }} />
              
              {/* Premium hover reflection with darker native color tint */}
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" style={{
                background: `linear-gradient(to bottom, ${benefit.backgroundTint}, transparent)`
              }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
