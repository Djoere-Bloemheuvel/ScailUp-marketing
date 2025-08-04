
import { Sparkles, Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';
import ApproachCard from './ApproachCard';
import ApproachAnimations from './ApproachAnimations';

const Approach = () => {
  const principles = [
    {
      id: 1,
      title: "Snelheid zonder concessies",
      subtitle: "Van idee naar werkende oplossing in weken, niet maanden.",
      icon: Clock,
      delay: "0.1s"
    },
    {
      id: 2,
      title: "Eigenaarschap tot in detail", 
      subtitle: "Uw succes is ons succes. Wij bouwen als strategisch verlengstuk van uw team.",
      icon: HandHeart,
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Design als vertrekpunt",
      subtitle: "Functie volgt vorm. Onze oplossingen voelen intuïtief vanaf de eerste klik.",
      icon: Layers,
      delay: "0.3s"
    },
    {
      id: 4,
      title: "Gedreven door impact",
      subtitle: "Iedere feature heeft een reden. Iedere lijn code levert rendement.",
      icon: TrendingUp,
      delay: "0.4s"
    }
  ];

  return (
    <>
      <ApproachAnimations />
      <section className="py-24 lg:py-32 px-4 relative overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header Section */}
          <div className="text-center mb-20 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full group-hover:bg-white/8 group-hover:border-white/15 transition-all duration-300" />
              <Sparkles className="w-4 h-4 text-white/70 mr-2 z-10 relative group-hover:text-white/90 transition-colors duration-300" />
              <span className="text-white/80 text-sm font-medium tracking-wide z-10 relative group-hover:text-white/95 transition-colors duration-300">Onze Filosofie</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 tracking-tight leading-none">
              Onze aanpak: <br className="md:hidden" />
              <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                Elegant. Doeltreffend. Onzichtbaar.
              </span>
            </h2>
            
            <p className="text-[#aaaaaa] text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              Door technologie onzichtbaar te maken, komt waarde naar voren.
            </p>
          </div>

          {/* Apple-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {principles.map((principle) => (
              <ApproachCard 
                key={principle.id}
                principle={principle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;
