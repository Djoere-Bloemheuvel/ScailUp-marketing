
import { Sparkles } from 'lucide-react';
import AppleTimeline from './AppleTimeline';
import AppleNebulaBackground from './AppleNebulaBackground';

const Approach = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden bg-black">
      {/* Enhanced nebula background */}
      <AppleNebulaBackground />
      
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header with refined typography */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Floating badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full bg-white/[0.05] border border-white/[0.15] backdrop-blur-2xl shadow-lg shadow-black/20">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse" />
            <span className="text-white/90 font-medium tracking-wide text-sm" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              Onze Werkwijze
            </span>
            <Sparkles className="w-4 h-4 text-cyan-400 ml-3" />
          </div>
          
          {/* Hero title - Apple style with refined fonts */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              Vier principes.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Eén revolutie.
              </span>
            </h2>
          </div>
          
          {/* Subtitle with Apple typography */}
          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
            Ontdek hoe wij elk project transformeren van concept naar
            <br className="hidden md:block" />
            game-changing realiteit.
          </p>
        </div>

        {/* Refined Apple-style vertical timeline */}
        <AppleTimeline />

        {/* Bottom CTA - More refined */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col items-center p-8 lg:p-9 rounded-3xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-2xl max-w-xl transition-all duration-700 hover:bg-white/[0.07] hover:border-white/[0.18] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.05] shadow-lg shadow-black/10">
            <div className="w-12 h-12 bg-gradient-to-br from-white/12 to-white/6 rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/15">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              Klaar voor de volgende stap?
            </h3>
            
            <p className="text-white/55 text-lg leading-relaxed font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
              Laten we samen uw visie tot leven brengen met onze bewezen aanpak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
