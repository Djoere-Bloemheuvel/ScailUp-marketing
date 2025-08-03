
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
      accent: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: FileText,
      title: 'Offertes & Contracten',
      subtitle: 'Documenten gegenereerd op basis van klantdata',
      accent: 'from-purple-500 to-pink-500',
      delay: 100
    },
    {
      icon: Zap,
      title: 'Klant Onboarding',
      subtitle: 'Vloeiende start voor nieuwe klanten',
      accent: 'from-green-500 to-emerald-500',
      delay: 200
    },
    {
      icon: CreditCard,
      title: 'Facturatie',
      subtitle: 'Automatische verwerking & herinneringen',
      accent: 'from-orange-500 to-red-500',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'Rapportage',
      subtitle: 'Real-time inzichten, automatisch geleverd',
      accent: 'from-indigo-500 to-blue-500',
      delay: 400
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Workflows',
      subtitle: 'Blijf top-of-mind, automatisch en slim',
      accent: 'from-cyan-500 to-teal-500',
      delay: 500
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/98 to-premium-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Staggered grid layout */}
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
                  group relative transition-all duration-1000 ease-out transform
                  ${isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                  }
                  ${!isEven ? 'lg:mt-24' : ''}
                `}
                style={{ 
                  transitionDelay: `${feature.delay}ms` 
                }}
              >
                {/* Main card container */}
                <div className="relative p-8 lg:p-10 rounded-[20px] backdrop-blur-xl border border-white/5 bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent hover:from-white/[0.04] hover:via-white/[0.02] hover:to-white/[0.01] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:translate-y-[-4px]">
                  
                  {/* Ambient glow effect */}
                  <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none blur-xl`} />
                  
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <div className="relative w-20 h-20 mx-auto lg:mx-0">
                      {/* Icon background with premium styling */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-10 group-hover:opacity-15 transition-all duration-500`} />
                      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-premium-black/80 to-premium-black/60 backdrop-blur-sm" />
                      
                      {/* Icon with floating animation */}
                      <div className="absolute inset-0 flex items-center justify-center group-hover:animate-pulse">
                        <feature.icon 
                          className={`w-9 h-9 text-white/90 transition-all duration-500 group-hover:scale-110 group-hover:text-white`}
                          style={{
                            filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.1))',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                      </div>
                      
                      {/* Subtle accent ring */}
                      <div className={`absolute inset-[-2px] rounded-2xl bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left space-y-4">
                    {/* Title with Apple-style typography */}
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    
                    {/* Subtitle with refined styling */}
                    <p className="text-base lg:text-lg text-premium-silver/70 font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Micro interaction elements */}
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-white/5 group-hover:bg-white/15 transition-colors duration-500" />
                  
                  {/* Subtle border enhancement on hover */}
                  <div className="absolute inset-0 rounded-[20px] border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Premium shadow with ambient lighting */}
                <div className="absolute inset-0 rounded-[20px] bg-black/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                     style={{ transform: 'translateY(8px)' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
