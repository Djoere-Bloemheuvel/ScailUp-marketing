
import { Check, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('approach-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <section id="approach-section" className="py-40 px-4 bg-gradient-to-br from-premium-gray via-premium-black to-premium-gray relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-premium-silver/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-24">
          <div className={`inline-flex items-center px-6 py-3 rounded-full glass-morphism mb-8 ${isVisible ? 'fade-in-up' : ''}`}>
            <Sparkles className="w-5 h-5 text-premium-silver mr-2" />
            <span className="text-premium-silver text-sm font-medium tracking-wide">Onze Filosofie</span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold text-white mb-8 ${isVisible ? 'fade-in-up stagger-2' : ''}`}>
            Onze aanpak: <span className="text-gradient-premium">Slim. Snel. Eigentijds.</span>
          </h2>
          
          <p className={`text-premium-silver/80 text-xl md:text-2xl max-w-3xl mx-auto font-light ${isVisible ? 'fade-in-up stagger-3' : ''}`}>
            Vier principes die elk project tot succes maken.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className={`group flex items-start space-x-6 p-10 rounded-3xl premium-card hover-lift transition-all duration-700 ${isVisible ? 'slide-in-left' : ''}`}
              style={{ animationDelay: principle.delay }}
            >
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-premium-silver to-premium-silver/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Check className="w-6 h-6 text-black font-bold" />
                </div>
                
                {/* Floating sparkle effect */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-premium-silver rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient-premium transition-all duration-300">
                  {principle.title}
                </h3>
                <p className="text-premium-silver/90 leading-relaxed text-lg group-hover:text-premium-silver transition-colors duration-300">
                  {principle.description}
                </p>
              </div>

              {/* Premium hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-silver/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
