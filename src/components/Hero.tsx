import { ArrowRight, Zap, Sparkles, Brain, Cpu, Eye, Network, CircuitBoard, Bot, Code, Server, Database, BarChart3, Layers, Grid3X3, Activity, Cog, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import AnimatedHeadline from './AnimatedHeadline';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Enhanced AI Ecosystem Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20"></div>
        
        {/* Scanning sweeps that move across screen */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent scan-sweep-horizontal" />
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent scan-sweep-vertical" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent scan-sweep-diagonal" />
        </div>

        {/* AI Automations Device - Top Left */}
        <div className="absolute top-16 left-16 ai-device-ecosystem-float">
          <div className="relative w-48 h-32">
            {/* Main device body */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-400/20 backdrop-blur-md ai-ecosystem-glow-blue">
              {/* Internal processing grid */}
              <div className="absolute inset-4 grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={`automation-cell-${i}`}
                    className="bg-blue-400/20 rounded-sm ai-ecosystem-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              
              {/* Central processing core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-blue-400/50 rounded-full flex items-center justify-center">
                <Cog className="w-4 h-4 text-blue-400 ai-ecosystem-spin" />
              </div>

              {/* Data streams */}
              <div className="absolute bottom-2 left-2 right-2 h-1 bg-black/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent ai-ecosystem-data-flow" />
              </div>
            </div>

            {/* Neural connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="100%" y1="50%" x2="120%" y2="40%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="ai-ecosystem-connection-pulse" />
              <line x1="50%" y1="100%" x2="60%" y2="120%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="ai-ecosystem-connection-pulse" style={{ animationDelay: '1s' }} />
            </svg>
          </div>
        </div>

        {/* Custom AI SaaS Device - Top Right */}
        <div className="absolute top-20 right-20 ai-device-ecosystem-float-delayed">
          <div className="relative w-40 h-40">
            {/* Hexagonal device */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-400/30 backdrop-blur-md ai-ecosystem-glow-purple"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
              }}
            >
              {/* Central brain */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center border border-purple-400/40">
                <Brain className="w-6 h-6 text-purple-400 ai-ecosystem-brain-pulse" />
              </div>

              {/* Orbiting data points */}
              <div className="absolute inset-0 ai-ecosystem-orbit">
                <div className="absolute top-4 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute left-4 top-1/2 w-2 h-2 bg-violet-400 rounded-full transform -translate-y-1/2" />
                <div className="absolute right-4 top-1/2 w-2 h-2 bg-fuchsia-400 rounded-full transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Consultancy Device - Middle Left */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 ai-device-ecosystem-float-slow">
          <div className="relative w-36 h-24">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-900/60 to-blue-950/30 border border-gray-400/20 backdrop-blur-md ai-ecosystem-glow-gray">
              {/* Message interface */}
              <div className="absolute inset-3 space-y-2">
                <div className="h-2 bg-gray-400/30 rounded-full ai-ecosystem-message-type" />
                <div className="h-1.5 bg-gray-400/20 rounded-full w-3/4 ai-ecosystem-message-type" style={{ animationDelay: '0.5s' }} />
                <div className="h-1.5 bg-blue-400/30 rounded-full w-1/2 ai-ecosystem-message-type" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Communication indicator */}
              <div className="absolute top-2 right-2">
                <MessageSquare className="w-4 h-4 text-gray-400 ai-ecosystem-message-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Studio Service Device - Bottom Center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 ai-device-ecosystem-float-center">
          <div className="relative w-56 h-36">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-400/30 backdrop-blur-md ai-ecosystem-glow-cyan">
              {/* Multi-layered interface */}
              <div className="absolute inset-6">
                {/* Top layer - Analytics */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-black/40 rounded-lg border border-cyan-400/20">
                  <div className="flex items-center justify-between h-full px-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`analytics-bar-${i}`}
                        className="w-1 bg-cyan-400/60 rounded-full ai-ecosystem-analytics-pulse"
                        style={{
                          height: `${60 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Middle layer - Processing */}
                <div className="absolute top-6 left-0 right-0 h-8 bg-black/30 rounded-lg flex items-center justify-center border border-cyan-400/15">
                  <Server className="w-4 h-4 text-cyan-400 ai-ecosystem-server-pulse" />
                  <div className="ml-2 flex space-x-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" />
                    <div className="w-1 h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" style={{ animationDelay: '0.5s' }} />
                    <div className="w-1 h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Autonomous Agents Device - Bottom Right */}
        <div className="absolute bottom-16 right-16 ai-device-ecosystem-float-autonomous">
          <div className="relative w-44 h-44">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-950/40 to-green-950/40 border border-green-400/20 backdrop-blur-md ai-ecosystem-glow-green rotate-45">
              {/* Agent network */}
              <div className="absolute inset-4 -rotate-45">
                {/* Central coordinator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-green-600/40 to-blue-600/40 border border-green-400/50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-400" />
                </div>
                
                {/* Agent nodes */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const radius = 40;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={`agent-node-${i}`}
                      className="absolute w-3 h-3 rounded-full bg-green-400/60 ai-ecosystem-agent-pulse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Additional floating elements for ecosystem feel */}
        <div className="absolute top-32 left-1/3">
          <div className="w-6 h-6 rounded-full bg-blue-400/30 ai-ecosystem-float-particle" />
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className="w-4 h-4 rounded-full bg-purple-400/30 ai-ecosystem-float-particle" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-1/3 left-1/4">
          <div className="w-5 h-5 rounded-full bg-cyan-400/30 ai-ecosystem-float-particle" style={{ animationDelay: '4s' }} />
        </div>

        {/* Subtle scan lines that respond to mouse movement */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Content - Centered with new animated headline */}
      <div className="relative max-w-5xl mx-auto z-30 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <div className={`mb-2 ${isLoaded ? 'apple-fade-in apple-stagger-2' : ''}`}>
            <AnimatedHeadline />
          </div>
          
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

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        /* Ecosystem Animation Keyframes */
        @keyframes ai-ecosystem-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes ai-ecosystem-float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }

        @keyframes ai-ecosystem-float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        @keyframes ai-ecosystem-float-center {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-25px) rotate(1deg); }
        }

        @keyframes ai-ecosystem-float-autonomous {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-18px) rotate(47deg); }
        }

        @keyframes ai-ecosystem-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes ai-ecosystem-glow-blue {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1); }
        }

        @keyframes ai-ecosystem-glow-purple {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.1); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(147, 51, 234, 0.1); }
        }

        @keyframes ai-ecosystem-glow-gray {
          0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.1); }
          50% { box-shadow: 0 0 30px rgba(156, 163, 175, 0.2), inset 0 0 15px rgba(156, 163, 175, 0.1); }
        }

        @keyframes ai-ecosystem-glow-cyan {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.1); }
          50% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.3), inset 0 0 25px rgba(34, 211, 238, 0.1); }
        }

        @keyframes ai-ecosystem-glow-green {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1); }
        }

        @keyframes ai-ecosystem-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ai-ecosystem-data-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes ai-ecosystem-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ai-ecosystem-brain-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes ai-ecosystem-message-type {
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.6; }
        }

        @keyframes ai-ecosystem-message-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-analytics-pulse {
          0%, 100% { opacity: 0.4; height: 60%; }
          50% { opacity: 1; height: 100%; }
        }

        @keyframes ai-ecosystem-server-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-status-blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-agent-pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        @keyframes ai-ecosystem-float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.7; }
        }

        @keyframes scan-sweep-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes scan-sweep-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }

        @keyframes scan-sweep-diagonal {
          0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) translateY(200%); opacity: 0; }
        }

        @keyframes ai-ecosystem-connection-pulse {
          0%, 100% { opacity: 0.2; stroke-width: 1; }
          50% { opacity: 0.8; stroke-width: 2; }
        }

        /* Apply animations */
        .ai-device-ecosystem-float {
          animation: ai-ecosystem-float 6s ease-in-out infinite;
        }

        .ai-device-ecosystem-float-delayed {
          animation: ai-ecosystem-float-delayed 8s ease-in-out infinite;
        }

        .ai-device-ecosystem-float-slow {
          animation: ai-ecosystem-float-slow 10s ease-in-out infinite;
        }

        .ai-device-ecosystem-float-center {
          animation: ai-ecosystem-float-center 7s ease-in-out infinite;
        }

        .ai-device-ecosystem-float-autonomous {
          animation: ai-ecosystem-float-autonomous 9s ease-in-out infinite;
        }

        .ai-ecosystem-pulse {
          animation: ai-ecosystem-pulse 2s ease-in-out infinite;
        }

        .ai-ecosystem-glow-blue {
          animation: ai-ecosystem-glow-blue 4s ease-in-out infinite;
        }

        .ai-ecosystem-glow-purple {
          animation: ai-ecosystem-glow-purple 5s ease-in-out infinite;
        }

        .ai-ecosystem-glow-gray {
          animation: ai-ecosystem-glow-gray 6s ease-in-out infinite;
        }

        .ai-ecosystem-glow-cyan {
          animation: ai-ecosystem-glow-cyan 4.5s ease-in-out infinite;
        }

        .ai-ecosystem-glow-green {
          animation: ai-ecosystem-glow-green 5.5s ease-in-out infinite;
        }

        .ai-ecosystem-spin {
          animation: ai-ecosystem-spin 4s linear infinite;
        }

        .ai-ecosystem-data-flow {
          animation: ai-ecosystem-data-flow 3s ease-in-out infinite;
        }

        .ai-ecosystem-orbit {
          animation: ai-ecosystem-orbit 20s linear infinite;
        }

        .ai-ecosystem-brain-pulse {
          animation: ai-ecosystem-brain-pulse 3s ease-in-out infinite;
        }

        .ai-ecosystem-message-type {
          animation: ai-ecosystem-message-type 4s ease-in-out infinite;
        }

        .ai-ecosystem-message-pulse {
          animation: ai-ecosystem-message-pulse 2s ease-in-out infinite;
        }

        .ai-ecosystem-analytics-pulse {
          animation: ai-ecosystem-analytics-pulse 2.5s ease-in-out infinite;
        }

        .ai-ecosystem-server-pulse {
          animation: ai-ecosystem-server-pulse 1.8s ease-in-out infinite;
        }

        .ai-ecosystem-status-blink {
          animation: ai-ecosystem-status-blink 1.5s ease-in-out infinite;
        }

        .ai-ecosystem-agent-pulse {
          animation: ai-ecosystem-agent-pulse 2.2s ease-in-out infinite;
        }

        .ai-ecosystem-float-particle {
          animation: ai-ecosystem-float-particle 8s ease-in-out infinite;
        }

        .scan-sweep-horizontal {
          animation: scan-sweep-horizontal 8s ease-in-out infinite;
          top: 20%;
        }

        .scan-sweep-vertical {
          animation: scan-sweep-vertical 10s ease-in-out infinite;
          left: 30%;
        }

        .scan-sweep-diagonal {
          animation: scan-sweep-diagonal 12s ease-in-out infinite;
          top: 0;
          left: 0;
          width: 200%;
          height: 1px;
          transform-origin: 0 0;
          transform: rotate(25deg);
        }

        .ai-ecosystem-connection-pulse {
          animation: ai-ecosystem-connection-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
