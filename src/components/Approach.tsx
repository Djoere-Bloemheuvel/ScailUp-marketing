import { Check, Sparkles, ArrowRight, Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Approach = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const principles = [
    {
      id: 1,
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      icon: Clock,
      color: "from-slate-400 to-blue-400",
      glowColor: "shadow-blue-400/20",
      hoverGlow: "group-hover:shadow-blue-400/40",
      delay: "0.1s"
    },
    {
      id: 2,
      title: "Ownership mentaliteit", 
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      color: "from-blue-500 to-purple-500",
      glowColor: "shadow-purple-500/20",
      hoverGlow: "group-hover:shadow-purple-500/40",
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Design-first filosofie",
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      color: "from-purple-400 to-pink-400",
      glowColor: "shadow-purple-400/20",
      hoverGlow: "group-hover:shadow-purple-400/40",
      delay: "0.3s"
    },
    {
      id: 4,
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      color: "from-slate-300 to-white",
      glowColor: "shadow-slate-300/20",
      hoverGlow: "group-hover:shadow-slate-300/40",
      delay: "0.4s"
    }
  ];

  const SpeedVisual = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-24 h-24 mx-auto">
      {/* Enhanced pulsating speed circles with more base color */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-slate-400/40 to-blue-400/40 animate-pulse transition-all duration-700 ${isHovered ? 'scale-110 opacity-90 from-slate-400/60 to-blue-400/60' : 'scale-100 opacity-60'}`} />
      <div className={`absolute inset-3 rounded-full bg-gradient-to-r from-slate-400/50 to-blue-400/50 animate-pulse transition-all duration-500 ${isHovered ? 'scale-105 from-slate-400/70 to-blue-400/70' : 'scale-100'}`} style={{ animationDelay: '0.3s' }} />
      <div className={`absolute inset-6 rounded-full bg-gradient-to-r from-slate-400/60 to-blue-400/60 animate-pulse transition-all duration-300 ${isHovered ? 'scale-110 from-slate-400/80 to-blue-400/80' : 'scale-100'}`} style={{ animationDelay: '0.6s' }} />
      
      {/* Central icon with enhanced base color */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Clock className={`w-8 h-8 text-blue-300 transition-all duration-300 ${isHovered ? 'scale-110 drop-shadow-lg text-blue-200' : ''}`} />
      </div>
      
      {/* Enhanced light trail on hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-spin opacity-80" style={{ animationDuration: '2s' }} />
      )}
    </div>
  );

  const OwnershipVisual = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-24 h-24 mx-auto">
      {/* Enhanced two collaborating circles with more base color */}
      <div className={`absolute left-2 top-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-500/50 transition-all duration-500 ${isHovered ? 'translate-x-1 scale-105 from-blue-500/70 to-purple-500/70' : ''}`} />
      <div className={`absolute right-2 top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 transition-all duration-500 ${isHovered ? '-translate-x-1 scale-105 from-purple-500/70 to-blue-500/70' : ''}`} />
      
      {/* Enhanced connection line */}
      <div className={`absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500/70 to-purple-500/70 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'scale-110 opacity-100 from-blue-400/90 to-purple-400/90' : 'opacity-80'}`} />
      
      {/* Central handshake icon with enhanced color */}
      <div className="absolute inset-0 flex items-center justify-center">
        <HandHeart className={`w-6 h-6 text-purple-300 transition-all duration-300 ${isHovered ? 'scale-110 text-purple-200' : ''}`} />
      </div>
      
      {/* Enhanced pulsing connection effect */}
      <div className={`absolute inset-0 rounded-full border border-purple-400/40 animate-pulse transition-opacity duration-500 ${isHovered ? 'opacity-100 border-purple-300/60' : 'opacity-70'}`} style={{ animationDuration: '3s' }} />
    </div>
  );

  const DesignVisual = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-24 h-24 mx-auto">
      {/* Enhanced building blocks with more base color */}
      <div className={`absolute top-2 left-4 w-4 h-4 rounded bg-gradient-to-br from-purple-400/60 to-pink-400/60 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-purple-400/80 to-pink-400/80' : ''}`} />
      <div className={`absolute top-2 right-4 w-4 h-4 rounded bg-gradient-to-br from-pink-400/60 to-purple-400/60 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-pink-400/80 to-purple-400/80' : ''}`} style={{ animationDelay: '0.1s' }} />
      <div className={`absolute bottom-2 left-4 w-4 h-4 rounded bg-gradient-to-br from-purple-400/60 to-pink-400/60 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-purple-400/80 to-pink-400/80' : ''}`} style={{ animationDelay: '0.2s' }} />
      <div className={`absolute bottom-2 right-4 w-4 h-4 rounded bg-gradient-to-br from-pink-400/60 to-purple-400/60 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-pink-400/80 to-purple-400/80' : ''}`} style={{ animationDelay: '0.3s' }} />
      
      {/* Central layers icon with enhanced color */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Layers className={`w-8 h-8 text-purple-300 transition-all duration-300 ${isHovered ? 'scale-110 text-pink-300' : ''}`} />
      </div>
      
      {/* Enhanced scan sweep effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{ animation: 'sweep 1.5s ease-in-out infinite' }} />
      )}
    </div>
  );

  const ROIVisual = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-24 h-24 mx-auto">
      {/* Enhanced rising graph bars with more base color */}
      <div className="absolute bottom-6 left-3 flex items-end space-x-1">
        <div className={`w-2 h-4 bg-gradient-to-t from-slate-300/60 to-white/60 rounded-sm transition-all duration-500 ${isHovered ? 'h-6 from-slate-300/80 to-white/80' : ''}`} />
        <div className={`w-2 h-6 bg-gradient-to-t from-slate-300/60 to-white/60 rounded-sm transition-all duration-500 ${isHovered ? 'h-8 from-slate-300/80 to-white/80' : ''}`} style={{ animationDelay: '0.1s' }} />
        <div className={`w-2 h-8 bg-gradient-to-t from-slate-300/60 to-white/60 rounded-sm transition-all duration-500 ${isHovered ? 'h-10 from-slate-300/80 to-white/80' : ''}`} style={{ animationDelay: '0.2s' }} />
        <div className={`w-2 h-10 bg-gradient-to-t from-slate-300/60 to-white/60 rounded-sm transition-all duration-500 ${isHovered ? 'h-12 from-slate-300/80 to-white/80' : ''}`} style={{ animationDelay: '0.3s' }} />
      </div>
      
      {/* Central trending icon with enhanced color */}
      <div className="absolute inset-0 flex items-center justify-center">
        <TrendingUp className={`w-8 h-8 text-slate-200 transition-all duration-300 ${isHovered ? 'scale-110 text-white drop-shadow-lg' : ''}`} />
      </div>
      
      {/* Enhanced reflective highlights */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100 from-white/15' : 'opacity-70'}`} />
    </div>
  );

  const getVisualComponent = (id: number, isHovered: boolean) => {
    switch (id) {
      case 1: return <SpeedVisual isHovered={isHovered} />;
      case 2: return <OwnershipVisual isHovered={isHovered} />;
      case 3: return <DesignVisual isHovered={isHovered} />;
      case 4: return <ROIVisual isHovered={isHovered} />;
      default: return null;
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 left-1/8 w-80 h-80 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full mb-8 apple-fade-in relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full group-hover:bg-white/8 group-hover:border-white/15 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-transparent to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Sparkles className="w-4 h-4 text-white/70 mr-2.5 z-10 relative group-hover:text-white/90 transition-colors duration-300" />
            <span className="text-white/80 text-sm font-medium tracking-wide z-10 relative group-hover:text-white/95 transition-colors duration-300">Onze Filosofie</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 apple-fade-in apple-stagger-2 tracking-tight">
            Onze aanpak: <br className="md:hidden" />
            <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
              Slim. Snel. Eigentijds.
            </span>
          </h2>
          
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed apple-fade-in apple-stagger-3 tracking-wide">
            Vier principes die elk project tot succes maken.
          </p>
        </div>

        {/* Premium 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={principle.id}
              className="group relative apple-fade-in cursor-pointer"
              style={{ animationDelay: principle.delay }}
              onMouseEnter={() => setHoveredCard(principle.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Premium card with subtle glow */}
              <div className={`relative p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-sm transition-all duration-700 hover:border-white/20 hover:-translate-y-3 shadow-2xl ${principle.glowColor} ${principle.hoverGlow} hover:shadow-2xl overflow-hidden`}>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
                
                {/* Hover shimmer effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" />
                
                <div className="relative z-10 text-center">
                  {/* Premium animated visual with enhanced presence */}
                  <div className="mb-8 transform transition-all duration-500 group-hover:scale-105">
                    {getVisualComponent(principle.id, hoveredCard === principle.id)}
                  </div>
                  
                  {/* Typography */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-white transition-all duration-300">
                    {principle.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed text-base font-light tracking-wide group-hover:text-white/85 transition-colors duration-300 max-w-sm mx-auto">
                    {principle.subtitle}
                  </p>
                </div>

                {/* Subtle idle pulse */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 animate-pulse opacity-30 group-hover:opacity-0 transition-opacity duration-500" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for sweep animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </section>
  );
};

export default Approach;
