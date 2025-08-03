import { ChevronRight, Cog, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
const AutomationHero = () => {
  return <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
        animationDelay: '0s',
        animationDuration: '4s'
      }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
        animationDelay: '2s',
        animationDuration: '3s'
      }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
        animationDelay: '1s',
        animationDuration: '5s'
      }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-green-400/60 rounded-full animate-pulse" style={{
        animationDelay: '3s',
        animationDuration: '4s'
      }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Slim. Snel. 
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
              Onzichtbaar.
            </span>
            {/* Light gradient glow behind "Onzichtbaar" */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-2xl -z-10 scale-110" />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
          Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. 
          Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base">
            Start uw automatisering
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="px-8 py-4 border-premium-silver/30 text-premium-silver hover:border-white hover:text-white rounded-full transition-all duration-300 hover:scale-105 text-base">
            <Sparkles className="mr-2 w-5 h-5" />
            Bekijk voorbeelden
          </Button>
        </div>
      </div>
    </section>;
};
export default AutomationHero;