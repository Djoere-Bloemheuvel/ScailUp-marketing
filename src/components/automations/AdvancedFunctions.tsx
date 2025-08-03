
import { CheckCircle, Cog } from 'lucide-react';

const AdvancedFunctions = () => {
  const features = [
    'Intelligent document processing met 99.9% nauwkeurigheid',
    'Automatische data extractie uit ongestructureerde bronnen',
    'Smart workflow orchestration voor complexe processen',
    'Real-time monitoring met proactieve alerts',
    'Seamless integratie met bestaande systemen',
    'Custom business rule engine voor unieke logica'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-premium-black via-blue-950/10 to-premium-black relative overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '4s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-green-400/70 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Enterprise-Grade Functies
            </h2>
            <p className="text-lg text-premium-silver/70 mb-10 leading-relaxed">
              Geavanceerde AI die verder gaat dan scripts. Intelligente systemen die 
              leren, beslissen en evolueren met uw organisatie.
            </p>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-premium-silver leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border border-premium-silver/20 backdrop-blur-md p-8 overflow-hidden">
              {/* Animated automation visual */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                   radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
                }} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/40 flex items-center justify-center mb-6">
                  <Cog className="w-12 h-12 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">Automation Engine</h3>
                  <p className="text-premium-silver/60 text-sm">Actief en lerend</p>
                </div>

                {/* Status indicators */}
                <div className="absolute top-12 left-12 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-premium-silver/40">Live</span>
                </div>

                {/* Floating data points */}
                <div className="absolute top-12 left-12 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-20 right-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-16 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFunctions;
