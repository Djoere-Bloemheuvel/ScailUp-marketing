
import { Check, Sparkles, ArrowRight } from 'lucide-react';

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
    <section className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#111213' }}>
      {/* Subtle scanning animation background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
      </div>

      {/* Soft gradient orbs for ambient lighting */}
      <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-white/2 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 left-1/8 w-80 h-80 bg-gradient-radial from-white/1 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full mb-8 apple-fade-in relative overflow-hidden group">
            {/* Frosted glass background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full group-hover:bg-white/8 group-hover:border-white/15 transition-all duration-500"></div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-transparent to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
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

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group relative apple-fade-in"
              style={{ animationDelay: principle.delay }}
            >
              {/* Card Background with subtle border and inner shadow */}
              <div className="relative p-10 rounded-3xl border border-white/5 transition-all duration-500 group-hover:border-white/15 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-white/5 cursor-pointer overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl"></div>
                
                {/* Inner shadow effect */}
                <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/5"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/25 group-hover:to-white/15 transition-all duration-500 border border-white/10 group-hover:border-white/20">
                        <Check className="w-6 h-6 text-white/90 font-bold group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Arrow - appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white transition-all duration-300 leading-tight tracking-tight">
                    {principle.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/85 transition-colors duration-300 font-light tracking-wide">
                    {principle.description}
                  </p>
                </div>

                {/* Subtle card pulse animation when idle */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 animate-pulse opacity-30 group-hover:opacity-0 transition-opacity duration-500" style={{ animationDuration: '4s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional subtle background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};

export default Approach;
