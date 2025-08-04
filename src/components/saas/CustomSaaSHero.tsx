
import { ArrowRight, Brain, Sparkles, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomSaaSHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-purple-950/20 to-premium-black" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-pink-400/60 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-sm">
              <Brain className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-premium-silver font-medium">Custom AI SaaS Ontwikkeling</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Slim. Schaalbaar.{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent block">
                Toekomstbestendig.
              </span>
              {/* Light gradient glow behind "Toekomstbestendig" */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-2xl -z-10 scale-110" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Wij bouwen schaalbare AI-gedreven software-oplossingen, volledig afgestemd op jouw organisatie. 
            Van prototype tot product – zonder afhankelijk te zijn van developers.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-12 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.4), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(147, 51, 234, 0.1),
                  0 0 40px rgba(79, 70, 229, 0.05)
                `
              }}
            >
              <span className="relative z-10 flex items-center">
                Plan een consult
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default CustomSaaSHero;
