
import { useEffect, useRef, useState } from 'react';
import { Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';

const AppleGlassMorphicCards = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      icon: Clock,
      glowColor: "from-blue-500/30 to-cyan-400/20",
      glowColorHover: "from-blue-500/40 to-cyan-400/30",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      glowColor: "from-purple-500/30 to-violet-400/20",
      glowColorHover: "from-purple-500/40 to-violet-400/30",
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      glowColor: "from-pink-500/30 to-rose-400/20",
      glowColorHover: "from-pink-500/40 to-rose-400/30",
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      glowColor: "from-emerald-500/30 to-teal-400/20",
      glowColorHover: "from-emerald-500/40 to-teal-400/30",
    }
  ];

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isVisible = visibleCards[index];
        
        return (
          <div
            key={step.id}
            ref={el => cardsRef.current[index] = el}
            className={`
              relative group transition-all duration-1000 ease-out
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
            `}
            style={{ 
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Ambient Glow - Behind the card */}
            <div 
              className={`
                absolute inset-0 rounded-3xl blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 scale-110
                bg-gradient-to-br ${step.glowColorHover}
              `}
            />
            
            {/* Base ambient glow - Always visible but subtle */}
            <div 
              className={`
                absolute inset-0 rounded-3xl blur-2xl transition-all duration-1000
                bg-gradient-to-br ${step.glowColor} opacity-60
              `}
            />

            {/* Glassmorphic Card */}
            <div className={`
              relative z-10 p-6 lg:p-8 rounded-2xl cursor-pointer
              bg-white/[0.03] backdrop-blur-xl
              border border-white/[0.08]
              transition-all duration-700 ease-out
              hover:bg-white/[0.06] hover:border-white/[0.15]
              hover:shadow-2xl hover:shadow-white/[0.05]
              hover:-translate-y-2 hover:scale-[1.02]
            `}>
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center backdrop-blur-sm">
                    <span className="text-sm font-bold text-white tracking-tight">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-white/65 text-base leading-relaxed font-light">
                  {step.subtitle}
                </p>
              </div>

              {/* Subtle highlight line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppleGlassMorphicCards;
