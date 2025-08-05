import { ArrowRight, Zap, Shield, Target, Users, Code, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
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
      iconColor: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Razendsnel resultaat",
      description: "Van concept tot werkend systeem in 2-4 weken. Anderen beloven, wij leveren.",
      accent: "from-emerald-500/20 to-green-500/20", 
      borderGlow: "border-emerald-400/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Shield,
      title: "Enterprise-grade beveiliging",
      description: "Bank-niveau security en compliance. Jouw data blijft waar het hoort: bij jou.",
      accent: "from-purple-500/20 to-violet-500/20",
      borderGlow: "border-purple-400/30", 
      iconColor: "text-purple-400"
    },
    {
      icon: Target,
      title: "Strategisch meedenken",
      description: "We analyseren je processen en bouwen wat écht waarde toevoegt. Geen agency-bullshit.",
      accent: "from-orange-500/20 to-red-500/20",
      borderGlow: "border-orange-400/30",
      iconColor: "text-orange-400"
    },
    {
      icon: Users,
      title: "Volledige ontzorging",
      description: "Van strategieadvies tot implementatie en onderhoud. Geen tech team nodig.",
      accent: "from-cyan-500/20 to-blue-500/20",
      borderGlow: "border-cyan-400/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: Code,
      title: "Autonome AI-systemen",
      description: "Agents die écht zelfstandig werken. Niet alleen chatbots, maar intelligente assistenten.",
      accent: "from-pink-500/20 to-rose-500/20",
      borderGlow: "border-pink-400/30",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden">
      {/* Dark background with gradient - matching hero style */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-purple-950/20 to-premium-black" />
      
      {/* Smooth vertical fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 md:w-[600px] md:h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-emerald-400/60 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-purple-400/25 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Waarom kiezen voor{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Buildrs?
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Het verschil tussen beloven en bouwen. Elite engineers die autonome AI-systemen ontwikkelen die écht werken.
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Van strategieadvies tot implementatie — wij begeleiden je stap voor stap naar AI-transformatie. Strategisch denken, praktische uitvoering, tastbare resultaten.
            </p>

            <div className="pt-2 md:pt-4">
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start het gesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Key differentiators as bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {differentiators.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.accent} border ${item.borderGlow} flex items-center justify-center`}>
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <span className="text-sm text-premium-silver/90 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-8 md:py-12 lg:py-0">
            {/* Central Visual */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Middle glow ring */}
              <div className="absolute inset-6 sm:inset-8 md:inset-10 lg:inset-12 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%)',
                animationDuration: '3s',
                animationDelay: '-1s'
              }} />
              
              {/* Inner core */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(16, 185, 129, 0.05) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                boxShadow: `
                  0 0 60px rgba(147, 51, 234, 0.3),
                  0 0 120px rgba(59, 130, 246, 0.2),
                  inset 0 0 60px rgba(16, 185, 129, 0.1)
                `
              }}>
                <Brain className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-purple-300 drop-shadow-2xl animate-pulse" style={{
                  filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))',
                  animationDuration: '6s'
                }} />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <div 
                    key={i} 
                    className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full animate-spin" 
                    style={{
                      background: i % 3 === 0 ? 'rgba(147, 51, 234, 0.8)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(16, 185, 129, 0.8)',
                      animationDuration: `${8 + i * 2}s`,
                      transform: `rotate(${i * 60}deg) translateY(-${90 + i * 15}px)`,
                      transformOrigin: '50% 50%',
                      boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgba(147, 51, 234, 0.8)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(16, 185, 129, 0.8)'}`
                    }} 
                  />
                ))}
              </div>
            </div>

            {/* Connection lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-0.5 bg-gradient-to-r from-purple-400/40 to-transparent transform rotate-45 animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-18 md:w-24 h-0.5 bg-gradient-to-l from-blue-400/40 to-transparent transform -rotate-45 animate-pulse" style={{
                animationDelay: '1s'
              }} />
              <div className="absolute bottom-1/3 left-1/3 w-20 md:w-28 h-0.5 bg-gradient-to-r from-emerald-400/40 to-transparent transform rotate-12 animate-pulse" style={{
                animationDelay: '2s'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndingCTA;
