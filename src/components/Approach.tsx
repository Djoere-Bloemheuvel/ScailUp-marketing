
import { Sparkles } from 'lucide-react';
import ApproachTimeline from './ApproachTimeline';
import FlowingGradientBackground from './FlowingGradientBackground';

const Approach = () => {
  return (
    <section className="relative py-32 lg:py-40 px-4 overflow-hidden bg-black">
      {/* Unique flowing gradient background */}
      <FlowingGradientBackground />
      
      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with unique layout */}
        <div className="text-center mb-20 lg:mb-28">
          {/* Floating badge */}
          <div className="inline-flex items-center px-6 py-3 mb-12 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse" />
            <span className="text-white/90 font-medium tracking-wide">Onze Werkwijze</span>
            <Sparkles className="w-4 h-4 text-cyan-400 ml-3" />
          </div>
          
          {/* Split title design */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
              Vier principes.
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Eén revolutie.
              </span>
            </h2>
          </div>
          
          <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Ontdek hoe wij elk project transformeren van concept naar 
            <br className="hidden md:block" />
            game-changing realiteit.
          </p>
        </div>

        {/* Interactive timeline */}
        <div className="mb-20">
          <ApproachTimeline />
        </div>

        {/* Bottom CTA section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/8 to-white/4 border border-white/20 backdrop-blur-xl shadow-2xl max-w-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Klaar voor de volgende stap?
            </h3>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Laten we samen uw visie tot leven brengen met onze bewezen aanpak.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes animate-gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .bg-size-200 { background-size: 200% 200%; }
          .animate-gradient { animation: animate-gradient 6s ease infinite; }
        `
      }} />
    </section>
  );
};

export default Approach;
