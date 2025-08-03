
import { Check } from 'lucide-react';

const Approach = () => {
  const principles = [
    {
      title: "Snelheid zonder compromissen",
      description: "Van idee naar werkende POC in dagen, niet maanden."
    },
    {
      title: "Ownership mentaliteit",
      description: "Uw succes is ons succes. Wij denken mee als strategische partner."
    },
    {
      title: "Design-first filosofie",
      description: "Technologie moet intuïtief aanvoelen. Altijd."
    },
    {
      title: "ROI-gedreven ontwikkeling",
      description: "Elke feature, elke functie wordt gemeten aan zakelijke impact."
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-premium-gray via-premium-black to-premium-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Onze aanpak: <span className="text-gradient">Slim. Snel. Eigentijds.</span>
          </h2>
          <p className="text-premium-silver/80 text-lg max-w-2xl mx-auto">
            Vier principes die elk project tot succes maken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-8 rounded-2xl border border-premium-silver/10 bg-premium-gray/30 backdrop-blur-sm hover:border-premium-silver/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-premium-silver flex items-center justify-center">
                  <Check className="w-5 h-5 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-premium-silver/90 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
