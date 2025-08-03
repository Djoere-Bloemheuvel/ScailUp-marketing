
import { ArrowRight, Zap, Sparkles, Brain, Cpu, Eye, Network, CircuitBoard, Bot, Code, Server, Database, BarChart3, Layers, Grid3X3, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Sequential headline animation
    const timer1 = setTimeout(() => setShowLine1(true), 300);
    const timer2 = setTimeout(() => setShowLine2(true), 800);
    const timer3 = setTimeout(() => setShowLine3(true), 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20"></div>
        
        {/* Floating minimal elements */}
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

      {/* Left AI Device - Enhanced with breathing animation */}
      <div className="absolute left-20 top-1/3 transform -translate-y-1/2 z-20">
        <div className="relative ai-device-breathe">
          {/* Glossy sweep overlay */}
          <div 
            className="absolute inset-0 ai-glossy-sweep z-50 pointer-events-none"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              transform: 'translateX(-100%)'
            }}
          ></div>

          {/* Main AI Device Body */}
          <div className="relative w-72 h-96 ai-device-float overflow-visible">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-premium-gray-dark/80 to-black/90 backdrop-blur-xl border border-premium-silver/20 overflow-hidden ai-device-pulse"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                }}
              ></div>
            </div>
            
            {/* Dashboard elements with enhanced animations */}
            <div 
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-black/60 border border-premium-silver/25 overflow-hidden rounded-lg ai-element-fade"
            >
              <div className="relative w-full h-full p-3">
                <div className="flex items-end justify-between h-full space-x-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`chart-bar-${i}`}
                      className="bg-premium-silver/40 rounded-sm chart-neural-pulse"
                      style={{
                        width: '8px',
                        height: `${20 + (i % 3) * 15}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute top-2 right-2">
                  <BarChart3 className="w-3 h-3 text-premium-silver/60 neural-icon-pulse" />
                </div>
              </div>
            </div>

            {/* Enhanced dashboard panels */}
            <div className="absolute top-32 left-8 w-24 h-32 bg-black/50 border border-premium-silver/20 rounded-xl overflow-hidden ai-element-fade" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 opacity-20">
                <Grid3X3 className="w-full h-full text-premium-silver/30" />
              </div>
              
              <div className="relative p-3 space-y-3">
                <div className="w-full h-6 bg-premium-silver/30 rounded neural-element-pulse"></div>
                <div className="w-3/4 h-4 bg-premium-silver/20 rounded neural-element-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="w-full h-4 bg-premium-silver/25 rounded neural-element-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="absolute bottom-2 right-2">
                <Activity className="w-4 h-4 text-premium-silver neural-icon-pulse" />
              </div>
            </div>

            <div className="absolute top-32 right-8 w-24 h-32 bg-black/50 border border-premium-silver/20 rounded-xl overflow-hidden ai-element-fade" style={{ animationDelay: '1s' }}>
              <div className="relative p-3 space-y-2">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-premium-silver/40 rounded-sm neural-element-pulse"></div>
                  <div className="w-4 h-4 bg-premium-silver/30 rounded-sm neural-element-pulse" style={{ animationDelay: '0.8s' }}></div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-premium-silver/25 rounded-sm neural-element-pulse" style={{ animationDelay: '1.6s' }}></div>
                  <div className="w-4 h-4 bg-premium-silver/35 rounded-sm neural-element-pulse" style={{ animationDelay: '2.4s' }}></div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2">
                <Layers className="w-4 h-4 text-premium-silver neural-icon-pulse" />
              </div>
            </div>

            {/* Central Interface Core with enhanced animation */}
            <div 
              className="absolute top-52 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-premium-silver/15 to-black/30 border border-premium-silver/30 rounded-xl overflow-hidden ai-core-pulse"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-2 grid grid-cols-2 gap-1">
                  <div className="bg-premium-silver/20 rounded-sm neural-element-pulse"></div>
                  <div className="bg-premium-silver/30 rounded-sm neural-element-pulse" style={{ animationDelay: '0.7s' }}></div>
                  <div className="bg-premium-silver/25 rounded-sm neural-element-pulse" style={{ animationDelay: '1.4s' }}></div>
                  <div className="bg-premium-silver/35 rounded-sm neural-element-pulse" style={{ animationDelay: '2.1s' }}></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border border-premium-silver/40 rounded-full flex items-center justify-center ai-central-pulse">
                    <div className="w-2 h-2 bg-premium-silver rounded-full neural-core-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom interface with enhanced animation */}
            <div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-black/50 border border-premium-silver/20 rounded-lg overflow-hidden ai-element-fade"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center px-3">
                  <div className="flex-1 space-y-1">
                    <div className="w-3/4 h-2 bg-premium-silver/30 rounded neural-element-pulse"></div>
                    <div className="w-1/2 h-1 bg-premium-silver/20 rounded neural-element-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-premium-silver/40 rounded-full neural-status-blink"></div>
                    <div className="w-2 h-2 bg-premium-silver/30 rounded-full neural-status-blink" style={{ animationDelay: '0.8s' }}></div>
                    <div className="w-2 h-2 bg-premium-silver/50 rounded-full neural-status-blink" style={{ animationDelay: '1.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced glow effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5 ai-device-breathing-glow"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
              }}
            ></div>
          </div>

          <div 
            className="absolute inset-0 bg-gradient-to-br from-premium-silver/5 to-black/30 blur-2xl transform translate-y-4 scale-95 -z-10"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
            }}
          ></div>
        </div>
      </div>

      {/* Right AI Device - Enhanced with breathing animation */}
      <div className="absolute right-20 top-2/3 transform -translate-y-1/2 z-20">
        <div className="relative ai-device-breathe" style={{ animationDelay: '1s' }}>
          {/* Glossy sweep overlay for right device */}
          <div 
            className="absolute inset-0 rounded-3xl ai-glossy-sweep-right z-50 pointer-events-none"
            style={{
              background: 'linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
              transform: 'translateX(100%)'
            }}
          ></div>

          <div className="relative w-72 h-96 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 ai-device-float ai-device-pulse overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-black/10"></div>
            
            {/* Enhanced Neural Network Display */}
            <div className="absolute top-8 left-8 right-8 h-20 rounded-2xl bg-black/40 border border-white/20 overflow-hidden ai-element-fade">
              <div className="relative w-full h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`right-node-${i}`}
                    className="absolute w-2 h-2 bg-premium-silver rounded-full neural-node-pulse"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                      animationDelay: `${i * 0.4}s`
                    }}
                  />
                ))}
                
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
                      className="neural-connection-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Enhanced AI Processing Units */}
            <div className="absolute top-36 left-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center ai-element-fade" style={{ animationDelay: '0.8s' }}>
              <Brain className="w-8 h-8 text-premium-silver neural-icon-breathe" />
            </div>

            <div className="absolute top-36 right-8 w-16 h-16 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-center ai-element-fade" style={{ animationDelay: '1.2s' }}>
              <Cpu className="w-8 h-8 text-premium-silver neural-icon-breathe" style={{ animationDelay: '2s' }} />
            </div>

            {/* Enhanced Central AI Eye */}
            <div className="absolute top-56 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-black/20 border border-white/25 flex items-center justify-center ai-core-pulse">
              <div className="w-16 h-16 rounded-full bg-black/40 border border-premium-silver/30 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white ai-eye-breathe" />
              </div>
            </div>

            {/* Enhanced data streams */}
            <div className="absolute bottom-8 left-8 right-8 h-12 rounded-xl bg-black/30 border border-white/15 overflow-hidden ai-element-fade" style={{ animationDelay: '2s' }}>
              <div className="relative w-full h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`right-stream-${i}`}
                    className="absolute top-2 h-2 bg-gradient-to-r from-transparent via-premium-silver/60 to-transparent rounded-full neural-data-flow"
                    style={{
                      width: `${20 + Math.random() * 40}%`,
                      left: '-50%',
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced breathing glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-premium-silver/5 via-transparent to-white/5 ai-device-breathing-glow"></div>
          </div>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/20 to-black/40 blur-2xl transform translate-y-4 scale-95 -z-10"></div>
        </div>
      </div>

      {/* Enhanced Content - Sequential headline animation */}
      <div className="relative max-w-5xl mx-auto z-30 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Sequential headline build-up */}
          <div className="mb-2">
            <div 
              className={`text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight leading-[0.9] transition-all duration-700 ease-in-out ${
                showLine1 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
              }`}
              style={{ letterSpacing: '-0.01em' }}
            >
              AI die denkt.
            </div>
            <div 
              className={`text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight leading-[0.9] transition-all duration-700 ease-in-out ${
                showLine2 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
              }`}
              style={{ letterSpacing: '-0.01em' }}
            >
              AI die bouwt.
            </div>
            <div 
              className={`text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight leading-[0.9] transition-all duration-700 ease-in-out ${
                showLine3 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
              }`}
              style={{ letterSpacing: '-0.01em' }}
            >
              AI die werkt.
            </div>
          </div>
          
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-premium-silver/40 to-transparent">
          <div className="w-[1px] h-6 bg-premium-silver/60 apple-scroll-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
