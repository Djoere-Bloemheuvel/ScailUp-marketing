
import { ExternalLink, Target, TrendingUp, Users } from 'lucide-react';

const Showcase = () => {
  return (
    <section className="py-32 px-4 bg-premium-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-premium-silver/20 bg-premium-gray/50 backdrop-blur-sm mb-6">
                <span className="text-premium-silver text-sm font-medium">Showcase</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ScailUp:<br />
                <span className="text-gradient">Ons eigen succes</span>
              </h2>
              <p className="text-premium-silver/90 text-lg leading-relaxed mb-8">
                Een AI-gedreven outbound platform dat email, LinkedIn en ABM integreert. 
                Gebouwd met onze eigen methodologie. Bewijs van wat mogelijk is.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="w-6 h-6 text-premium-silver" />
                <span className="text-premium-silver/90">Hypergerichte prospectie</span>
              </div>
              <div className="flex items-center space-x-4">
                <TrendingUp className="w-6 h-6 text-premium-silver" />
                <span className="text-premium-silver/90">AI-geoptimaliseerde messaging</span>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-premium-silver" />
                <span className="text-premium-silver/90">Multi-channel orchestratie</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="group inline-flex items-center text-premium-silver hover:text-white transition-colors duration-300">
                <span className="font-medium">Bekijk ScailUp</span>
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-premium-gray via-premium-silver/10 to-premium-gray border border-premium-silver/20 backdrop-blur-sm p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl border border-premium-silver/30 bg-premium-black/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-premium-silver/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-premium-silver" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">ScailUp</h3>
                  <p className="text-premium-silver/80 text-sm">AI Outbound Platform</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-premium-silver/20 to-transparent rounded-3xl blur-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
