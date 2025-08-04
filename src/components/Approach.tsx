
import { Sparkles } from 'lucide-react';
import AppleTimeline from './AppleTimeline';
import AppleAmbientBackground from './AppleAmbientBackground';

const Approach = () => {
  return (
    <section className="relative py-40 lg:py-48 px-4 overflow-hidden bg-black">
      {/* Apple-style ambient background */}
      <AppleAmbientBackground />
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Apple-inspired header */}
        <div className="text-center mb-32 lg:mb-40">
          {/* Floating badge */}
          <div className="inline-flex items-center px-8 py-4 mb-16 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4 animate-pulse" />
            <span className="text-white/90 font-medium tracking-wide text-lg">Onze Werkwijze</span>
            <Sparkles className="w-5 h-5 text-cyan-400 ml-4" />
          </div>
          
          {/* Hero title - Apple style */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
              Vier principes.
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Eén revolutie.
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Ontdek hoe wij elk project transformeren van concept naar
            <br className="hidden md:block" />
            game-changing realiteit.
          </p>
        </div>

        {/* Apple-style timeline */}
        <div className="mb-32">
          <AppleTimeline />
        </div>

        {/* Bottom CTA - Apple inspired */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center p-12 lg:p-16 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl max-w-2xl transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/[0.05]">
            <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Klaar voor de volgende stap?
            </h3>
            
            <p className="text-white/60 text-xl leading-relaxed font-light">
              Laten we samen uw visie tot leven brengen met onze bewezen aanpak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
