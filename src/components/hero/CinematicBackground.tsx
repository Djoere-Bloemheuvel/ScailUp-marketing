
import React from 'react';
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';
import PremiumOrbs from './PremiumOrbs';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Initial fade from black to textured background */}
      <div 
        className="absolute inset-0 bg-black transition-opacity duration-400 ease-out"
        style={{
          background: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%),
            radial-gradient(ellipse at 20% 20%, rgba(34, 211, 238, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)
          `
        }}
      />

      {/* Ambient Lighting Layer - Behind all content */}
      <AmbientLighting />

      {/* Premium Orbs - Added to the background */}
      <PremiumOrbs />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background glass container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[68vh] sm:h-[63vh] md:h-[58vh] lg:h-[61vh] xl:h-[65vh] transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
          {/* Glass container with cinematic fade-in */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-container-ambient opacity-0 transition-all duration-800 ease-out"
            style={{
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.006) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.01),
                0 16px 32px rgba(34, 211, 238, 0.02),
                0 8px 16px rgba(139, 92, 246, 0.02),
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                inset 0 -1px 0 rgba(255, 255, 255, 0.03),
                inset 0 0 100px rgba(34, 211, 238, 0.005),
                inset 0 0 80px rgba(139, 92, 246, 0.003)
              `,
              willChange: 'transform, opacity',
              animation: 'cinematicGlassEntry 800ms ease-out 400ms forwards'
            }}
          />
          
          {/* Colored edge lighting layers - fade in with glass */}
          <div 
            className="absolute inset-0 rounded-3xl premium-edge-glow-cyan-ambient opacity-0"
            style={{
              animation: 'cinematicEdgeGlow 800ms ease-out 500ms forwards'
            }}
          />
          <div 
            className="absolute inset-0 rounded-3xl premium-edge-glow-emerald opacity-0"
            style={{
              animation: 'cinematicEdgeGlow 800ms ease-out 600ms forwards',
              animationFillMode: 'forwards'
            }}
          />
          <div 
            className="absolute inset-0 rounded-3xl premium-edge-glow-violet-ambient opacity-0"
            style={{
              animation: 'cinematicEdgeGlow 800ms ease-out 700ms forwards'
            }}
          />
          
          {/* Ambient light diffusion */}
          <div 
            className="absolute inset-0 rounded-3xl premium-ambient-diffusion-enhanced opacity-0"
            style={{
              animation: 'cinematicAmbientEntry 800ms ease-out 800ms forwards'
            }}
          />
        </div>
      </div>

      {/* Cinematic entrance animations + continuous glow animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes cinematicGlassEntry {
            0% { 
              opacity: 0; 
              transform: scale(0.98);
            }
            100% { 
              opacity: 1; 
              transform: scale(1);
            }
          }

          @keyframes cinematicEdgeGlow {
            0% { opacity: 0; }
            100% { opacity: 0.6; }
          }

          @keyframes cinematicAmbientEntry {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes premium-glass-shimmer-ambient {
            0%, 100% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.006) 0%, transparent 50%);
            }
            33% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(34, 211, 238, 0.01) 50%, rgba(139, 92, 246, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.009) 0%, transparent 50%);
            }
            66% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0%, rgba(139, 92, 246, 0.008) 50%, rgba(20, 184, 166, 0.015) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.006) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.012) 0%, transparent 50%);
            }
          }

          @keyframes premium-edge-glow-cyan-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(34, 211, 238, 0.1),
                0 0 60px rgba(34, 211, 238, 0.05),
                inset 0 0 1px rgba(34, 211, 238, 0.15),
                inset 0 0 80px rgba(34, 211, 238, 0.008);
            }
            50% { 
              box-shadow: 
                0 0 45px rgba(34, 211, 238, 0.15),
                0 0 90px rgba(34, 211, 238, 0.08),
                inset 0 0 1px rgba(34, 211, 238, 0.25),
                inset 0 0 100px rgba(34, 211, 238, 0.012);
            }
          }

          @keyframes premium-edge-glow-violet-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(139, 92, 246, 0.09),
                0 0 70px rgba(139, 92, 246, 0.04),
                inset 0 0 1px rgba(139, 92, 246, 0.14),
                inset 0 0 60px rgba(139, 92, 246, 0.006);
            }
            66% { 
              box-shadow: 
                0 0 50px rgba(139, 92, 246, 0.14),
                0 0 100px rgba(139, 92, 246, 0.07),
                inset 0 0 1px rgba(139, 92, 246, 0.22),
                inset 0 0 80px rgba(139, 92, 246, 0.01);
            }
          }

          @keyframes premium-edge-glow-emerald {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(16, 185, 129, 0.08),
                0 0 70px rgba(16, 185, 129, 0.04),
                inset 0 0 1px rgba(16, 185, 129, 0.12),
                inset 0 0 60px rgba(16, 185, 129, 0.005);
            }
            50% { 
              box-shadow: 
                0 0 50px rgba(16, 185, 129, 0.12),
                0 0 100px rgba(16, 185, 129, 0.06),
                inset 0 0 1px rgba(16, 185, 129, 0.18),
                inset 0 0 80px rgba(16, 185, 129, 0.008);
            }
          }

          @keyframes premium-ambient-diffusion-enhanced {
            0%, 100% { 
              background: radial-gradient(
                ellipse at center,
                rgba(34, 211, 238, 0.025) 0%,
                rgba(16, 185, 129, 0.018) 35%,
                rgba(139, 92, 246, 0.015) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.03) 0%,
                rgba(139, 92, 246, 0.022) 35%,
                rgba(34, 211, 238, 0.018) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(139, 92, 246, 0.025) 0%,
                rgba(34, 211, 238, 0.02) 35%,
                rgba(16, 185, 129, 0.015) 70%,
                transparent 100%
              );
            }
          }

          .premium-glass-container-ambient {
            animation: 
              cinematicGlassEntry 800ms ease-out 400ms forwards,
              premium-glass-shimmer-ambient 20s ease-in-out 1.2s infinite;
          }

          .premium-edge-glow-cyan-ambient {
            animation: 
              cinematicEdgeGlow 800ms ease-out 500ms forwards,
              premium-edge-glow-cyan-ambient 14s ease-in-out 1.3s infinite;
            opacity: 0;
          }

          .premium-edge-glow-emerald {
            animation: 
              cinematicEdgeGlow 800ms ease-out 600ms forwards,
              premium-edge-glow-emerald 15s ease-in-out 1.8s infinite;
            opacity: 0;
          }

          .premium-edge-glow-violet-ambient {
            animation: 
              cinematicEdgeGlow 800ms ease-out 700ms forwards,
              premium-edge-glow-violet-ambient 16s ease-in-out 2.1s infinite;
            opacity: 0;
          }

          .premium-ambient-diffusion-enhanced {
            animation: 
              cinematicAmbientEntry 800ms ease-out 800ms forwards,
              premium-ambient-diffusion-enhanced 22s ease-in-out 1.6s infinite;
          }

          /* Mobile optimizations - Skip scale animations */
          @media (max-width: 768px) {
            .premium-edge-glow-cyan-ambient,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet-ambient {
              animation-duration: 25s;
            }
            
            @keyframes cinematicGlassEntry {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            
            .premium-edge-glow-emerald {
              opacity: 0.3 !important;
            }
            
            .premium-edge-glow-violet-ambient {
              opacity: 0.35 !important;
            }
            
            .premium-ambient-diffusion-enhanced {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-container-ambient,
            .premium-edge-glow-cyan-ambient,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet-ambient,
            .premium-ambient-diffusion-enhanced {
              animation: none;
              opacity: 1;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
