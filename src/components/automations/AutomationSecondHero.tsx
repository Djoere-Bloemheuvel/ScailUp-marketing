
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AutomationThreeFeatures from './AutomationThreeFeatures';

const AutomationSecondHero = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-indigo-950/15 to-purple-950/20" />
      
      {/* Reduced ambient lighting effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                AI Automatisering
              </h1>
              
              <h2 className="text-xl md:text-2xl font-light text-premium-silver/90 leading-relaxed">
                Slim. Snel. Onzichtbaar.
              </h2>
            </div>

            <p className="text-lg text-premium-silver/80 leading-relaxed max-w-xl">
              Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
            </p>

            {/* Three Features Component */}
            <div className="pt-4">
              <AutomationThreeFeatures />
            </div>

            <div className="pt-2">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  // Basic spam protection - simple rate limiting
                  const lastClick = localStorage.getItem('cta-last-click');
                  const now = Date.now();
                  if (lastClick && now - parseInt(lastClick) < 2000) return;
                  localStorage.setItem('cta-last-click', now.toString());
                  
                  // Scroll to next section
                  const nextSection = document.querySelector('section:nth-of-type(3)'); // Skip to third section
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ontdek de mogelijkheden
              </Button>
            </div>
          </div>

          {/* Right side - Simplified AI Automation Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Simplified central icon */}
            <div className="relative">
              {/* Single glow ring */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Core with icon */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)'
              }}>
                <Settings className="w-12 h-12 md:w-16 md:h-16 text-blue-300 animate-spin" style={{
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
                  animationDuration: '20s'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSecondHero;
