
import { Brain, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CinematicBackground from '@/components/hero/CinematicBackground';

const AgentHero = () => {
  const features = [
    {
      icon: Brain,
      title: 'Zelfstandig beslissen',
      description: 'AI-agents die denken, redeneren en handelen zonder menselijke tussenkomst.',
      accentColor: 'from-emerald-400 to-teal-500',
      glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20',
      backgroundTint: 'rgba(16, 185, 129, 0.03)'
    },
    {
      icon: Zap,
      title: '24/7 operationeel',
      description: 'Altijd alert, altijd actief - geen pauzes, geen fouten, maximale efficiëntie.',
      accentColor: 'from-blue-400 to-cyan-500',
      glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      backgroundTint: 'rgba(59, 130, 246, 0.03)'
    },
    {
      icon: Shield,
      title: 'Veilig & compliant',
      description: 'Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole.',
      accentColor: 'from-teal-400 to-green-500',
      glowColor: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(20,184,166,0.5)]',
      iconColor: 'text-teal-400',
      borderColor: 'border-teal-500/20',
      backgroundTint: 'rgba(20, 184, 166, 0.03)'
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Cinematic Background */}
      <CinematicBackground />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Autonomous AI Agents
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-premium-silver/90 leading-relaxed tracking-wide">
              Slimme assistenten. Volledig zelfstandig.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-premium-silver/80 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen, en automatiseren repetitieve workflows zonder handmatige input.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden cursor-default transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 ${feature.glowColor} ${feature.hoverGlow} ${feature.borderColor} hover:${feature.borderColor.replace('/20', '/40')}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.05) 0%, 
                      ${feature.backgroundTint} 20%, 
                      rgba(255, 255, 255, 0.02) 100%
                    ),
                    radial-gradient(ellipse 200px 100px at 50% 0%, ${feature.backgroundTint} 0%, transparent 70%)
                  `,
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                  borderRadius: '16px',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    0 4px 16px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <CardContent className="p-6 text-center relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto mb-4 transform transition-all duration-500 ease-out group-hover:scale-110">
                    <div className="absolute inset-0 rounded-xl p-0.5 transition-all duration-500" style={{
                      background: `linear-gradient(135deg, ${feature.accentColor})`,
                      opacity: '0.9'
                    }}>
                      <div className="w-full h-full rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500" style={{
                        background: `
                          linear-gradient(135deg, 
                            rgba(0, 0, 0, 0.8) 0%, 
                            ${feature.backgroundTint} 30%, 
                            rgba(0, 0, 0, 0.9) 100%
                          )
                        `,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${feature.borderColor.replace('border-', '').replace('/20', ', 0.2)')}`
                      }}>
                        <feature.icon className={`w-8 h-8 ${feature.iconColor} relative z-10 drop-shadow-lg transition-all duration-500 group-hover:scale-110`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:scale-105 transition-all duration-500 transform text-white">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-all duration-500 transform group-hover:scale-[1.02]">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Hover effects */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 ease-out" style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.backgroundTint} 0%, transparent 70%)`
                }} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
