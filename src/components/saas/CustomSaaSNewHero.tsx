import { Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomSaaSNewHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-violet-950/20 to-fuchsia-950/30" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Custom AI SaaS Development
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Van concept naar schaalbare AI-oplossing.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Wij bouwen op maat gemaakte AI-SaaS platformen die perfect aansluiten op jouw bedrijfsmodel. 
              Schaalbaar, betrouwbaar en klaar voor de toekomst.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start je SaaS-project
              </Button>
            </div>
          </div>

          {/* Right side - SaaS Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Inner core */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 40%, rgba(168, 85, 247, 0.05) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                boxShadow: `0 0 60px rgba(139, 92, 246, 0.3), 0 0 120px rgba(236, 72, 153, 0.2)`
              }}>
                <Cpu className="w-24 h-24 md:w-32 md:h-32 text-violet-300 drop-shadow-2xl" style={{
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSaaSNewHero;
