import { Sparkles, Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';
import PrincipleCard from './PrincipleCard';
const Approach = () => {
  const principles = [{
    id: 1,
    title: "Snelheid zonder compromissen",
    subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
    icon: Clock,
    color: "from-slate-400 to-blue-400",
    glowColor: "shadow-blue-400/20",
    hoverGlow: "group-hover:shadow-blue-400/40"
  }, {
    id: 2,
    title: "Ownership mentaliteit",
    subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
    icon: HandHeart,
    color: "from-blue-500 to-purple-500",
    glowColor: "shadow-purple-500/20",
    hoverGlow: "group-hover:shadow-purple-500/40"
  }, {
    id: 3,
    title: "Design-first filosofie",
    subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
    icon: Layers,
    color: "from-purple-400 to-pink-400",
    glowColor: "shadow-purple-400/20",
    hoverGlow: "group-hover:shadow-purple-400/40"
  }, {
    id: 4,
    title: "ROI-gedreven ontwikkeling",
    subtitle: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
    icon: TrendingUp,
    color: "from-slate-300 to-white",
    glowColor: "shadow-slate-300/20",
    hoverGlow: "group-hover:shadow-slate-300/40"
  }];
  return <>
      <section className="py-24 lg:py-32 px-4 relative overflow-hidden bg-black">
        {/* Ambient background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/6 w-80 lg:w-96 h-80 lg:h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/8 w-64 lg:w-80 h-64 lg:h-80 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto z-10">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            
            
            
            
            <p className="text-white/60 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed apple-fade-in apple-stagger-3 tracking-wide">
              Vier principes die elk project tot succes maken.
            </p>
          </div>

          {/* Optimized Grid Layout with Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto" style={{
          gridAutoRows: '1fr'
        }}>
            {principles.map((principle, index) => <div key={principle.id} className="w-full" style={{
            aspectRatio: 'auto',
            minHeight: '280px'
          }}>
                <PrincipleCard principle={principle} delay={`${0.1 + index * 0.1}s`} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Optimized CSS using native styles instead of dangerouslySetInnerHTML */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>;
};
export default Approach;