
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleDeepDiveClick = () => {
    navigate('/contact');
  };

  const handleDiscoverClick = () => {
    navigate('/consultancy');
  };

  return (
    <section className="relative min-h-[50vh] bg-black flex items-center justify-center py-20 overflow-hidden">
      {/* Smooth vertical fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
      
      {/* Soft ambient glow behind the card - positioned at lower z-index */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
        <div 
          className="w-[800px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 40%, rgba(16, 24, 40, 0.1) 70%, transparent 85%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative max-w-2xl mx-auto px-6 z-20">
        {/* Floating glassmorphic card */}
        <div 
          className="relative rounded-2xl p-12 md:p-16 text-center backdrop-blur-xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
            boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Subtle card glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-lg opacity-60 -z-10" />
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Strong headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Klaar om het verschil te maken?
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-lg mx-auto">
              Plan een deepdive met ons team. We denken strategisch met je mee.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={handleDeepDiveClick}
                className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Plan een deepdive
              </Button>
              
              <Button 
                onClick={handleDiscoverClick}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-3 text-base font-semibold rounded-xl backdrop-blur-sm hover:-translate-y-1"
              >
                Ontdek de mogelijkheden
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Buildrs.AI</h3>
              <p className="text-white/60 italic text-sm">
                Elite AI Engineering voor visionairs
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/40 text-sm mb-1">© 2024 Buildrs.AI</p>
              <p className="text-white/30 text-xs italic">Designed for disruption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndingCTA;
