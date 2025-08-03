
import { Users, FileText, Zap, CreditCard, BarChart, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

const AutomationShowcase = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-automation-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const automationFeatures = [
    {
      icon: Users,
      title: 'Leadgeneratie',
      subtitle: 'Slimme prospectherkenning en automatische outreach',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: FileText,
      title: 'Offertes & Contracten',
      subtitle: 'Documenten gegenereerd op basis van klantdata',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: Zap,
      title: 'Klant Onboarding',
      subtitle: 'Vloeiende start voor nieuwe klanten',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: CreditCard,
      title: 'Facturatie',
      subtitle: 'Automatische verwerking & herinneringen',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'Rapportage',
      subtitle: 'Real-time inzichten, automatisch geleverd',
      accent: 'from-indigo-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Workflows',
      subtitle: 'Blijf top-of-mind, automatisch en slim',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 500
    }
  ];

  return (
    <>
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Ambient background with layered depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black/95 to-premium-gray/30" />
        
        <div className="max-w-7xl mx-auto relative">
          {/* Premium staggered grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-20">
            {automationFeatures.map((feature, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  data-automation-item
                  data-index={index}
                  className={`
                    group relative transition-all duration-1000 ease-out
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                    }
                    ${!isEven ? 'lg:mt-24' : ''}
                  `}
                  style={{ 
                    transitionDelay: `${feature.delay}ms`,
                    transform: 'translateZ(0)', // GPU optimization
                    backfaceVisibility: 'hidden', // GPU optimization
                    perspective: '1000px' // GPU optimization
                  }}
                >
                  {/* Main premium card container with Apple-style glassmorphism */}
                  <div className={`
                    relative p-8 lg:p-10 rounded-[24px] backdrop-blur-xl 
                    border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent 
                    hover:from-white/[0.06] hover:via-white/[0.03] hover:to-white/[0.01]
                    transition-all duration-700 ease-out
                    will-change-transform
                    group-hover:scale-[1.02] group-hover:translate-y-[-8px]
                    group-active:scale-[0.98] group-active:transition-duration-150
                    ${feature.glowColor} hover:shadow-2xl
                  `}>
                    
                    {/* Subtle ambient glow effect - GPU optimized */}
                    <div className={`
                      absolute inset-0 rounded-[24px] bg-gradient-to-r ${feature.accent} 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                      will-change-opacity blur-xl
                    `} />
                    
                    {/* Enhanced border glow on hover */}
                    <div className={`
                      absolute inset-0 rounded-[24px] border ${feature.borderGlow}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    `} />
                    
                    {/* Icon container with premium styling */}
                    <div className="relative mb-8">
                      <div className="relative w-20 h-20 mx-auto lg:mx-0">
                        {/* Multi-layered icon background with depth */}
                        <div className={`
                          absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} 
                          opacity-20 group-hover:opacity-30 transition-all duration-500
                          will-change-opacity
                        `} />
                        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-premium-black/90 to-premium-gray/20 backdrop-blur-sm" />
                        
                        {/* Icon with smooth animations - GPU optimized */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <feature.icon 
                            className={`
                              w-9 h-9 text-white/80 transition-all duration-500 ease-out
                              group-hover:scale-110 group-hover:${feature.iconGlow} group-hover:text-white
                              will-change-transform
                              group-active:scale-105
                            `}
                            style={{
                              filter: 'drop-shadow(0 2px 12px rgba(255, 255, 255, 0.1))',
                              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          />
                        </div>
                        
                        {/* Pulsing accent ring */}
                        <div className={`
                          absolute inset-[-3px] rounded-2xl bg-gradient-to-r ${feature.accent} 
                          opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm
                          will-change-opacity animate-pulse
                        `} />
                      </div>
                    </div>

                    {/* Content with refined typography */}
                    <div className="text-center lg:text-left space-y-4">
                      {/* Title with Apple-style typography and subtle glow */}
                      <h3 className={`
                        text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight
                        transition-all duration-500 group-hover:${feature.iconGlow}
                        will-change-color
                      `}>
                        {feature.title}
                      </h3>
                      
                      {/* Subtitle with enhanced readability */}
                      <p className="text-base lg:text-lg text-premium-silver/80 font-light leading-relaxed max-w-sm mx-auto lg:mx-0 transition-colors duration-500 group-hover:text-premium-silver/90">
                        {feature.subtitle}
                      </p>
                    </div>

                    {/* Subtle microinteraction elements */}
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/25 transition-all duration-500 group-hover:scale-125" />
                    <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-150" />
                  </div>

                  {/* Premium floating shadow with ambient lighting */}
                  <div className={`
                    absolute inset-0 rounded-[24px] ${feature.glowColor} opacity-0 
                    group-hover:opacity-60 transition-opacity duration-700 -z-10 blur-2xl
                    will-change-opacity
                  `} style={{ transform: 'translateY(12px)' }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating ambient particles for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-emerald-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          <div className="absolute bottom-20 right-1/4 w-0.5 h-0.5 bg-cyan-400/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '6s' }} />
        </div>
      </section>

      {/* Performance-optimized CSS for GPU acceleration */}
      <style jsx>{`
        @media (max-width: 768px) {
          .group:active {
            transform: scale(0.98) !important;
            transition-duration: 150ms !important;
          }
        }
        
        /* Hardware acceleration hints */
        .group {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
};

export default AutomationShowcase;
