
import { ArrowRight, Zap, Shield, Target, Users, Code, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WhyChooseBuildrs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const differentiators = [
    {
      icon: Brain,
      title: "Elite engineering team",
      description: "Senior AI specialists met bewezen enterprise ervaring. Geen juniors, geen experimenteren.",
      accent: "from-blue-500/20 to-cyan-500/20",
      borderGlow: "border-blue-400/30",
      iconColor: "text-blue-400",
      delay: "0ms"
    },
    {
      icon: Zap,
      title: "Razendsnel resultaat",
      description: "Van concept tot werkend systeem in 2-4 weken. Anderen beloven, wij leveren.",
      accent: "from-emerald-500/20 to-green-500/20", 
      borderGlow: "border-emerald-400/30",
      iconColor: "text-emerald-400",
      delay: "200ms"
    },
    {
      icon: Shield,
      title: "Enterprise-grade beveiliging",
      description: "Bank-niveau security en compliance. Jouw data blijft waar het hoort: bij jou.",
      accent: "from-purple-500/20 to-violet-500/20",
      borderGlow: "border-purple-400/30", 
      iconColor: "text-purple-400",
      delay: "400ms"
    },
    {
      icon: Target,
      title: "Strategisch meedenken",
      description: "We analyseren je processen en bouwen wat écht waarde toevoegt. Geen agency-bullshit.",
      accent: "from-orange-500/20 to-red-500/20",
      borderGlow: "border-orange-400/30",
      iconColor: "text-orange-400", 
      delay: "600ms"
    },
    {
      icon: Users,
      title: "Volledige ontzorging",
      description: "Van strategieadvies tot implementatie en onderhoud. Geen tech team nodig.",
      accent: "from-cyan-500/20 to-blue-500/20",
      borderGlow: "border-cyan-400/30",
      iconColor: "text-cyan-400",
      delay: "800ms"
    },
    {
      icon: Code,
      title: "Autonome AI-systemen",
      description: "Agents die écht zelfstandig werken. Niet alleen chatbots, maar intelligente assistenten.",
      accent: "from-pink-500/20 to-rose-500/20",
      borderGlow: "border-pink-400/30",
      iconColor: "text-pink-400",
      delay: "1000ms"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Hero-inspired background - dark with subtle gradients */}
      <div className="absolute inset-0 bg-premium-black" />
      
      {/* Ambient lighting inspired by hero sections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.10) 40%, rgba(29, 78, 216, 0.05) 70%, transparent 90%)',
            filter: 'blur(120px)',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(124, 58, 237, 0.08) 50%, rgba(109, 40, 217, 0.04) 80%, transparent 95%)',
            filter: 'blur(100px)',
            animationDuration: '10s',
            animationDelay: '-4s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] opacity-8"
          style={{
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, rgba(21, 128, 61, 0.04) 50%, transparent 80%)',
            filter: 'blur(150px)'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Hero-inspired header section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Waarom kiezen voor{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Buildrs?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-premium-silver/90 max-w-4xl mx-auto font-light leading-relaxed">
              Het verschil tussen beloven en bouwen. Elite engineers die autonome AI-systemen ontwikkelen die écht werken.
            </p>
          </div>
        </div>

        {/* Differentiator cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className={`group relative rounded-3xl backdrop-blur-xl border ${item.borderGlow} p-8 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-2xl`}
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 100%),
                  linear-gradient(135deg, ${item.accent.replace('from-', '').replace('to-', '').split(' ').join(', ')})
                `,
                animationDelay: item.delay
              }}
            >
              {/* Icon container */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} border ${item.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor} transition-all duration-500 group-hover:rotate-12`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-premium-silver/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Subtle accent elements */}
              <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${item.iconColor.replace('text-', 'via-')} to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500`} />
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${item.iconColor.replace('text-', 'bg-')} opacity-40 group-hover:opacity-80 transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Hero-inspired CTA section */}
        <div className="text-center">
          <div className="relative inline-block rounded-3xl p-12 backdrop-blur-xl border border-white/[0.15] shadow-2xl"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
                 boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/8 to-emerald-500/10 blur-lg opacity-60 -z-10" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Klaar om het verschil te ervaren?
              </h3>
              
              <p className="text-lg text-premium-silver/90 leading-relaxed font-light max-w-2xl mx-auto">
                Plan een vrijblijvend gesprek en ontdek waarom enterprise klanten kiezen voor onze aanpak.
              </p>

              <Button 
                onClick={handleContactClick}
                className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-10 py-4 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4), 
                    inset 0 1px 0 rgba(255, 255, 255, 0.9),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    0 0 20px rgba(59, 130, 246, 0.15)
                  `
                }}
              >
                <span className="relative z-10 flex items-center">
                  Start het gesprek
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </Button>
            </div>

            {/* Floating accent elements */}
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400/40 to-transparent animate-pulse" />
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 left-8 w-1 h-1 rounded-full bg-gradient-to-br from-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBuildrs;
