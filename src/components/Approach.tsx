
import { Sparkles, Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';
import PrincipleCard from './PrincipleCard';

const Approach = () => {
  const principles = [
    {
      id: 1,
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      icon: Clock,
      color: "from-blue-400 to-cyan-400",
      glowColor: "shadow-blue-400/20",
      hoverGlow: "group-hover:shadow-blue-400/40"
    },
    {
      id: 2,
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      color: "from-purple-500 to-blue-500",
      glowColor: "shadow-purple-500/20",
      hoverGlow: "group-hover:shadow-purple-500/40"
    },
    {
      id: 3,
      title: "Design-first filosofie",
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      color: "from-purple-400 to-pink-400",
      glowColor: "shadow-purple-400/20",
      hoverGlow: "group-hover:shadow-purple-400/40"
    },
    {
      id: 4,
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      color: "from-emerald-400 to-teal-400",
      glowColor: "shadow-emerald-400/20",
      hoverGlow: "group-hover:shadow-emerald-400/40"
    }
  ];

  return (
    <>
      <section className="relative py-24 lg:py-32 px-4 overflow-hidden bg-black">
        {/* Cinematic Background Effects */}
        <div className="absolute inset-0">
          {/* Ambient lighting layers inspired by your hero section */}
          <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/3 left-1/8 w-80 h-80 bg-gradient-radial from-purple-500/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '-4s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-teal-400/4 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '-6s' }} />
          
          {/* Additional depth layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Header Section with Premium Typography */}
          <div className="text-center mb-20 lg:mb-24">
            {/* Premium badge indicator */}
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Onze Kernwaarden</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              <span className="block mb-2">Onze aanpak:</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Slim. Snel. Eigentijds.
              </span>
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              Vier principes die elk project tot succes maken. Van concept tot realisatie, 
              <br className="hidden md:block" />
              wij staan voor kwaliteit zonder compromissen.
            </p>
          </div>

          {/* Premium Grid Layout with Enhanced Glassmorphism */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div key={principle.id} className="w-full">
                <PrincipleCard principle={principle} delay={`${0.2 + index * 0.15}s`} />
              </div>
            ))}
          </div>

          {/* Bottom accent section */}
          <div className="mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced scan line animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-horizontal" />
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-scan-horizontal-delayed" />
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes animate-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes animate-scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
        @keyframes animate-scan-horizontal-delayed {
          0% { transform: translateX(200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .animate-gradient { animation: animate-gradient 8s ease infinite; }
        .animate-scan-horizontal { animation: animate-scan-horizontal 20s linear infinite; }
        .animate-scan-horizontal-delayed { animation: animate-scan-horizontal-delayed 25s linear infinite; animation-delay: -10s; }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};

export default Approach;
