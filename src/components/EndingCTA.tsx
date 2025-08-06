
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EndingCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleApproachClick = () => {
    // Navigate to approach section or page
    const approachSection = document.getElementById('approach');
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cta-buildrs-afsluiter" 
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-20"
      style={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A133E 100%)'
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 right-1/3 w-96 h-96 rounded-full opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
            filter: 'blur(100px)',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 80%)',
            filter: 'blur(90px)',
            animationDuration: '10s',
            animationDelay: '-4s'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - CTA Content */}
          <div className="space-y-8 order-2 lg:order-1 cta-content-entrance">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Bouw je{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-voorsprong
              </span>{' '}
              met vertrouwen.
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl">
              Van autonome agents tot schaalbare AI SaaS-oplossingen — wij brengen het tot leven.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button - Plan een kennismaking */}
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Plan een kennismaking
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </Button>

              {/* Secondary Button - Bekijk onze aanpak */}
              <Button 
                onClick={handleApproachClick}
                size="lg"
                variant="outline"
                className="group relative overflow-hidden px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(34, 211, 238, 0.1) 100%)',
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Eye className="mr-3 h-5 w-5" />
                  Bekijk onze aanpak
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>
          </div>

          {/* Right Block - Testimonial Card */}
          <div className="order-1 lg:order-2 flex items-center justify-center testimonial-entrance">
            <div className="relative max-w-md">
              {/* Glassmorphism Card */}
              <div 
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)',
                  boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white/95 text-lg leading-relaxed font-light mb-6 italic">
                  "Buildrs heeft onze AI-strategie volledig getransformeerd. Binnen weken draaiden onze processen sneller en slimmer dan ooit."
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">LV</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Lisa Vermeer</div>
                    <div className="text-premium-silver/70 text-sm">CTO bij VantageOps</div>
                  </div>
                </div>

                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-50 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrance Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes cta-entrance-fade {
            0% { 
              opacity: 0;
              transform: translateY(30px) scale(0.95);
              filter: blur(10px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .cta-content-entrance {
            animation: cta-entrance-fade 1s ease-out 0.2s forwards;
            opacity: 0;
          }

          .testimonial-entrance {
            animation: cta-entrance-fade 1s ease-out 0.6s forwards;
            opacity: 0;
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .cta-content-entrance,
            .testimonial-entrance {
              animation: none;
              opacity: 1;
            }
          }
        `
      }} />
    </section>
  );
};

export default EndingCTA;
