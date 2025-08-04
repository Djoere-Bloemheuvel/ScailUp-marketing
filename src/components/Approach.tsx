
import { Sparkles } from 'lucide-react';
import AppleGlassMorphicCards from './AppleGlassMorphicCards';
import AppleNebulaBackground from './AppleNebulaBackground';

const Approach = () => {
  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden bg-black">
      {/* Nebula background */}
      <AppleNebulaBackground />
      
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header */}
        <div className="text-center mb-20 lg:mb-24">
          {/* Floating badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse" />
            <span className="text-white/90 font-medium tracking-wide text-sm">Onze Werkwijze</span>
            <Sparkles className="w-4 h-4 text-cyan-400 ml-3" />
          </div>
          
          {/* Hero title - Apple style */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
              Vier principes.
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Eén revolutie.
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Ontdek hoe wij elk project transformeren van concept naar
            <br className="hidden md:block" />
            game-changing realiteit.
          </p>
        </div>

        {/* Apple-style glassmorphic cards */}
        <AppleGlassMorphicCards />

        {/* Bottom CTA - Apple inspired */}
        <div className="text-center mt-20 lg:mt-24">
          <div className="inline-flex flex-col items-center p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl max-w-xl transition-all duration-700 hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.08]">
            <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              Klaar voor de volgende stap?
            </h3>
            
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Laten we samen uw visie tot leven brengen met onze bewezen aanpak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
