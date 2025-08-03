import { ArrowRight, Zap, Sparkles, Brain, Cpu, Eye, Network, CircuitBoard, Bot, Code, Server, Database, BarChart3, Layers, Grid3X3, Activity } from 'lucide-react';
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

      {/* Left AI Device - Dashboard/Interface Style */}
      <div className="absolute left-20 top-1/3 transform -translate-y-1/2 z-20">
        <div className="relative">
          {/* Main AI Device Body - Dashboard style design */}
          <div className="relative w-72 h-96 ai-device-float overflow-visible">
            {/* Custom hexagonal shape using CSS clip-path */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-premium-gray-dark/80 to-black/90 backdrop-blur-xl border border-premium-silver/20 overflow-hidden"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}
            >
              {/* Glass effect overlay with premium silver accents */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                }}
              ></div>
            </div>
            
            {/* Top Chart Display - Dashboard style */}
            <div 
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-black/60 border border-premium-silver/25 overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-full p-3">
                {/* Mini bar chart visualization */}
                <div className="flex items-end justify-between h-full space-x-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`chart-bar-${i}`}
                      className="bg-premium-silver/40 rounded-sm chart-pulse"
                      style={{
                        width: '8px',
                        height: `${20 + (i % 3) * 15}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Chart indicator */}
                <div className="absolute top-2 right-2">
                  <BarChart3 className="w-3 h-3 text-premium-silver/60" />
                </div>
              </div>
            </div>

            {/* Left Dashboard Panel */}
            <div className="absolute top-32 left-8 w-24 h-32 bg-black/50 border border-premium-silver/20 rounded-xl overflow-hidden">
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-20">
                <Grid3X3 className="w-full h-full text-premium-silver/30" />
              </div>
              
              {/* Dashboard icons */}
              <div className="relative p-3 space-y-3">
                <div className="w-full h-6 bg-premium-silver/30 rounded dashboard-pulse"></div>
                <div className="w-3/4 h-4 bg-premium-silver/20 rounded dashboard-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-full h-4 bg-premium-silver/25 rounded dashboard-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Activity indicator */}
              <div className="absolute bottom-2 right-2">
                <Activity className="w-4 h-4 text-premium-silver activity-pulse" />
              </div>
            </div>

            {/* Right Dashboard Panel */}
            <div className="absolute top-32 right-8 w-24 h-32 bg-black/50 border border-premium-silver/20 rounded-xl overflow-hidden">
              {/* Layer visualization */}
              <div className="relative p-3 space-y-2">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-premium-silver/40 rounded-sm layer-pulse"></div>
                  <div className="w-4 h-4 bg-premium-silver/30 rounded-sm layer-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-premium-silver/25 rounded-sm layer-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-4 h-4 bg-premium-silver/35 rounded-sm layer-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
              </div>
              
              {/* Layers icon */}
              <div className="absolute bottom-2 right-2">
                <Layers className="w-4 h-4 text-premium-silver layer-icon-pulse" />
              </div>
            </div>

            {/* Central Interface Core - Multi-layered dashboard */}
            <div 
              className="absolute top-52 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-premium-silver/15 to-black/30 border border-premium-silver/30 rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-full">
                {/* Interface grid */}
                <div className="absolute inset-2 grid grid-cols-2 gap-1">
                  <div className="bg-premium-silver/20 rounded-sm interface-pulse"></div>
                  <div className="bg-premium-silver/30 rounded-sm interface-pulse" style={{ animationDelay: '0.25s' }}></div>
                  <div className="bg-premium-silver/25 rounded-sm interface-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="bg-premium-silver/35 rounded-sm interface-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>
                
                {/* Central processing indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border border-premium-silver/40 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-premium-silver rounded-full central-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Interface Panel - Command interface */}
            <div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-black/50 border border-premium-silver/20 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-full">
                {/* Interface elements */}
                <div className="absolute inset-0 flex items-center px-3">
                  <div className="flex-1 space-y-1">
                    <div className="w-3/4 h-2 bg-premium-silver/30 rounded interface-line-pulse"></div>
                    <div className="w-1/2 h-1 bg-premium-silver/20 rounded interface-line-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-premium-silver/40 rounded-full status-blink"></div>
                    <div className="w-2 h-2 bg-premium-silver/30 rounded-full status-blink" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 bg-premium-silver/50 rounded-full status-blink" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow effect - monochrome with hexagonal shape */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5 ai-device-premium-glow"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
              }}
            ></div>
          </div>

          {/* Device shadow - hexagonal */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 to-black/30 blur-2xl transform translate-y-4 scale-95 -z-10"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
            }}
          ></div>
        </div>
      </div>

      {/* Right AI Device - Moved lower down */}
      <div className="absolute right-20 top-2/3 transform -translate-y-1/2 z-20">
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
          {/* Apple-inspired typography hierarchy - centered */}
          <h1 className={`font-bold tracking-tight leading-[0.9] mb-2 ${isLoaded ? 'apple-fade-in apple-stagger-2' : ''}`}>
            <div className="text-6xl md:text-8xl lg:text-9xl text-white">
              AI die werkt.
            </div>
          </h1>
          
          {/* Apple-style subtitle - centered */}
          <p className={`text-2xl md:text-3xl lg:text-4xl text-premium-silver/80 mb-16 leading-relaxed font-light ${isLoaded ? 'apple-fade-in apple-stagger-3' : ''}`}>
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
