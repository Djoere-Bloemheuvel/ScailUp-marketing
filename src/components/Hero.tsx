
import { ArrowRight, Zap, Sparkles, Brain, Cpu, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Nothing-inspired minimalistic background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20"></div>
        
        {/* Floating minimal elements inspired by Nothing */}
        <div className="absolute top-20 left-20">
          <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center nothing-float">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20"></div>
          </div>
        </div>

        <div className="absolute top-40 right-32">
          <div className="w-16 h-16 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm nothing-float-delayed">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-premium-silver/20 to-transparent flex items-center justify-center">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-32">
          <div className="w-20 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm nothing-float-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
        </div>

        <div className="absolute top-60 right-20">
          <div className="w-6 h-6 rounded-full bg-white/20 nothing-pulse"></div>
        </div>

        <div className="absolute bottom-40 right-40">
          <div className="w-4 h-4 rounded-sm bg-premium-silver/30 nothing-pulse-delayed"></div>
        </div>
      </div>

      {/* Left AI Device */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 z-20">
        <div className="relative">
          {/* Main AI Device Body */}
          <div className="relative w-72 h-96 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 ai-device-float overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-black/10"></div>
            
            {/* AI Neural Network Display */}
            <div className="absolute top-8 left-8 right-8 h-20 rounded-2xl bg-black/40 border border-white/20 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Neural network nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`left-node-${i}`}
                    className="absolute w-2 h-2 bg-premium-silver rounded-full neural-pulse"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                      animationDelay: `${i * 0.4 + 0.5}s`
                    }}
                  />
                ))}
                
                {/* Neural connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`left-connection-${i}`}
                      x1={`${20 + (i % 3) * 25}%`}
                      y1={`${30 + Math.floor(i / 3) * 20}%`}
                      x2={`${40 + (i % 3) * 15}%`}
                      y2={`${50 + Math.floor(i / 3) * 10}%`}
                      stroke="rgba(192, 192, 192, 0.3)"
                      strokeWidth="1"
                      className="neural-connection"
                      style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* AI Processing Units */}
            <div className="absolute top-36 left-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center">
              <Brain className="w-8 h-8 text-premium-silver ai-icon-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="absolute top-36 right-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center">
              <Cpu className="w-8 h-8 text-premium-silver ai-icon-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Central AI Eye */}
            <div className="absolute top-56 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-black/20 border border-white/25 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/40 border border-premium-silver/30 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white ai-eye-scan" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Data streams */}
            <div className="absolute bottom-8 left-8 right-8 h-12 rounded-xl bg-black/30 border border-white/15 overflow-hidden">
              <div className="relative w-full h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`left-stream-${i}`}
                    className="absolute top-2 h-2 bg-gradient-to-r from-transparent via-premium-silver/60 to-transparent rounded-full data-stream-flow"
                    style={{
                      width: `${20 + Math.random() * 40}%`,
                      left: '-50%',
                      animationDelay: `${i * 0.8 + 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5 ai-device-glow" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Device shadow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/20 to-black/40 blur-2xl transform translate-y-4 scale-95 -z-10"></div>
        </div>
      </div>

      {/* Right AI Device - Moved to right side */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-20">
        <div className="relative">
          {/* Main AI Device Body */}
          <div className="relative w-72 h-96 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 ai-device-float overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-black/10"></div>
            
            {/* AI Neural Network Display */}
            <div className="absolute top-8 left-8 right-8 h-20 rounded-2xl bg-black/40 border border-white/20 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Neural network nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`right-node-${i}`}
                    className="absolute w-2 h-2 bg-premium-silver rounded-full neural-pulse"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
                
                {/* Neural connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`right-connection-${i}`}
                      x1={`${20 + (i % 3) * 25}%`}
                      y1={`${30 + Math.floor(i / 3) * 20}%`}
                      x2={`${40 + (i % 3) * 15}%`}
                      y2={`${50 + Math.floor(i / 3) * 10}%`}
                      stroke="rgba(192, 192, 192, 0.3)"
                      strokeWidth="1"
                      className="neural-connection"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* AI Processing Units */}
            <div className="absolute top-36 left-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center">
              <Brain className="w-8 h-8 text-premium-silver ai-icon-pulse" />
            </div>

            <div className="absolute top-36 right-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center">
              <Cpu className="w-8 h-8 text-premium-silver ai-icon-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Central AI Eye */}
            <div className="absolute top-56 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-black/20 border border-white/25 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/40 border border-premium-silver/30 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white ai-eye-scan" />
              </div>
            </div>

            {/* Data streams */}
            <div className="absolute bottom-8 left-8 right-8 h-12 rounded-xl bg-black/30 border border-white/15 overflow-hidden">
              <div className="relative w-full h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`right-stream-${i}`}
                    className="absolute top-2 h-2 bg-gradient-to-r from-transparent via-premium-silver/60 to-transparent rounded-full data-stream-flow"
                    style={{
                      width: `${20 + Math.random() * 40}%`,
                      left: '-50%',
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5 ai-device-glow"></div>
          </div>

          {/* Device shadow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/20 to-black/40 blur-2xl transform translate-y-4 scale-95 -z-10"></div>
        </div>
      </div>

      {/* Content - Centered */}
      <div className="relative max-w-5xl mx-auto z-30 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Apple-style product badge */}
          <div className={`mb-12 flex justify-center ${isLoaded ? 'apple-fade-in' : ''}`}>
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] apple-card-hover group cursor-pointer">
              <div className="relative mr-3">
                <Zap className="w-5 h-5 text-premium-silver-light group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="text-premium-silver-light group-hover:text-white text-sm font-medium tracking-wide transition-colors duration-500">
                Gebouwd voor AI Intelligence
              </span>
            </div>
          </div>
          
          {/* Apple-inspired typography hierarchy - centered */}
          <h1 className={`font-bold tracking-tight leading-[0.9] ${isLoaded ? 'apple-fade-in apple-stagger-2' : ''}`}>
            <div className="text-6xl md:text-8xl lg:text-9xl text-white">
              AI die werkt.
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl text-premium-silver font-normal">
              Eindelijk.
            </div>
          </h1>
          
          {/* Apple-style subtitle - centered */}
          <p className={`text-2xl md:text-3xl lg:text-4xl text-premium-silver/80 mb-16 leading-relaxed font-light mt-4 ${isLoaded ? 'apple-fade-in apple-stagger-3' : ''}`}>
            Wij bouwen AI-systemen die uw business 
            <br />
            <span className="text-white font-normal">daadwerkelijk transformeren.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 ${isLoaded ? 'apple-fade-in apple-stagger-4' : ''}`}>
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-10 py-6 text-xl font-semibold rounded-full overflow-hidden apple-button-hover apple-scale-hover"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <span className="relative z-10 flex items-center">
                Ontdek de mogelijkheden
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="relative text-premium-silver hover:text-white px-10 py-6 text-xl font-semibold rounded-full border-premium-silver/30 hover:border-premium-silver/60 transition-all duration-700 apple-button-hover group overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08]"
            >
              <span className="relative z-10 flex items-center">
                Plan een deepdive
                <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Apple-style feature highlight - centered */}
          <div className={`${isLoaded ? 'apple-fade-in apple-stagger-5' : ''}`}>
            <p className="text-lg text-premium-silver/60 mb-2">Gebouwd voor Apple Intelligence</p>
            <p className="text-sm text-premium-silver/40 italic">Premium AI-engineering voor visionairs</p>
          </div>
        </div>
      </div>

      {/* Apple-inspired scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-premium-silver/40 to-transparent">
          <div className="w-[1px] h-6 bg-premium-silver/60 apple-scroll-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
