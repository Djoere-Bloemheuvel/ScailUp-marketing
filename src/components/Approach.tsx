
import { Check, Sparkles } from 'lucide-react';

const Approach = () => {
  const principles = [
    {
      title: "Snelheid zonder compromissen",
      description: "Van idee naar werkende POC in dagen, niet maanden.",
      delay: "0.1s"
    },
    {
      title: "Ownership mentaliteit", 
      description: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      delay: "0.2s"
    },
    {
      title: "Design-first filosofie",
      description: "Technologie moet intuïtief aanvoelen. Altijd.",
      delay: "0.3s"
    },
    {
      title: "ROI-gedreven ontwikkeling",
      description: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-24 px-4 bg-premium-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-premium-silver/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism mb-6 apple-fade-in">
            <Sparkles className="w-4 h-4 text-premium-silver mr-2" />
            <span className="text-premium-silver text-sm font-medium">Onze Filosofie</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 apple-fade-in apple-stagger-2">
            Onze aanpak: <span className="text-gradient-premium">Slim. Snel. Eigentijds.</span>
          </h2>
          
          <p className="text-premium-silver/80 text-lg md:text-xl max-w-2xl mx-auto font-light apple-fade-in apple-stagger-3">
            Vier principes die elk project tot succes maken.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group flex items-start space-x-4 p-8 rounded-2xl premium-card apple-card-hover apple-fade-in"
              style={{ animationDelay: principle.delay }}
            >
              <div className="flex-shrink-0 relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-premium-silver to-premium-silver/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Check className="w-5 h-5 text-black font-bold" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient-premium transition-all duration-300">
                  {principle.title}
                </h3>
                <p className="text-premium-silver/90 leading-relaxed group-hover:text-premium-silver transition-colors duration-300">
                  {principle.description}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-premium-silver/3 to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
