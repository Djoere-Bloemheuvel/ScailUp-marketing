
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
      {/* Professional AI Ecosystem Background */}
      <div className="absolute inset-0">
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/60 to-black"></div>
        
        {/* Subtle professional scan lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent professional-scan-horizontal" />
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/8 to-transparent professional-scan-vertical" />
        </div>

        {/* Premium AI Robot Device - Top Left */}
        <div className="absolute top-16 left-16 professional-device-float">
          <div className="relative w-60 h-72">
            {/* Elegant robot chassis with premium materials */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-600/30 backdrop-blur-xl professional-device-glow shadow-2xl">
              
              {/* Professional status panel */}
              <div className="absolute top-4 left-4 right-4 h-16 bg-black/60 rounded-lg border border-gray-500/20 overflow-hidden backdrop-blur-sm">
                {/* Elite connection matrix */}
                <div className="absolute inset-3 grid grid-cols-4 grid-rows-2 gap-1.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`elite-connection-${i}`}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i % 4 === 0 ? 'bg-blue-400/60' : 
                        i % 4 === 1 ? 'bg-cyan-400/50' : 
                        i % 4 === 2 ? 'bg-gray-400/40' : 'bg-gray-500/30'
                      } professional-status-pulse`}
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Executive processing modules */}
              <div className="absolute top-24 left-4 right-4 flex justify-between items-center">
                {/* Neural processing unit */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/60 rounded-xl border border-gray-500/25 flex items-center justify-center professional-neural-glow shadow-lg">
                  <Brain className="w-6 h-6 text-blue-300/80 professional-brain-process" />
                </div>
                
                {/* Quantum chip module */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800/80 to-blue-950/30 rounded-xl border border-gray-500/25 flex items-center justify-center professional-quantum-glow shadow-lg">
                  <Cpu className="w-6 h-6 text-cyan-300/80 professional-chip-compute" />
                </div>
              </div>

              {/* Premium optical sensor */}
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-20 h-20">
                {/* Sophisticated sensor ring */}
                <div className="absolute inset-0 rounded-full border border-gray-400/20 professional-sensor-ring">
                  {/* Central vision core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-gray-800/90 to-gray-900/70 rounded-full border border-gray-500/30 flex items-center justify-center professional-vision-core shadow-lg">
                    <Eye className="w-5 h-5 text-blue-200/70 professional-eye-scan" />
                  </div>
                </div>
              </div>

              {/* Executive progress indicator */}
              <div className="absolute bottom-4 left-4 right-4 h-6 bg-black/70 rounded-lg border border-gray-500/20 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-1 bg-gray-900/60 rounded-md overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500/40 to-cyan-400/30 professional-progress-flow shadow-inner" />
                </div>
              </div>

              {/* Ambient luxury particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 right-8 w-0.5 h-0.5 bg-blue-300/40 rounded-full professional-ambient-drift" />
                <div className="absolute bottom-16 left-6 w-0.5 h-0.5 bg-cyan-300/30 rounded-full professional-ambient-drift" style={{ animationDelay: '3s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise SaaS Platform - Top Right */}
        <div className="absolute top-20 right-20 professional-saas-float">
          <div className="relative w-36 h-36">
            {/* Hexagonal enterprise platform */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-400/20 backdrop-blur-xl professional-saas-glow shadow-xl"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
              }}
            >
              {/* Central intelligence core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/25 flex items-center justify-center border border-purple-400/25 shadow-lg">
                <Brain className="w-5 h-5 text-purple-200/70 professional-core-process" />
              </div>

              {/* Strategic data orbits */}
              <div className="absolute inset-0 professional-data-orbit">
                <div className="absolute top-3 left-1/2 w-1.5 h-1.5 bg-purple-300/50 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-3 left-1/2 w-1.5 h-1.5 bg-blue-300/50 rounded-full transform -translate-x-1/2" />
                <div className="absolute left-3 top-1/2 w-1.5 h-1.5 bg-cyan-300/40 rounded-full transform -translate-y-1/2" />
                <div className="absolute right-3 top-1/2 w-1.5 h-1.5 bg-indigo-300/40 rounded-full transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Executive Consultancy Interface - Middle Left */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 professional-consulting-float">
          <div className="relative w-32 h-20">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-900/70 to-blue-950/20 border border-gray-500/15 backdrop-blur-xl professional-consulting-glow shadow-lg">
              {/* Professional communication streams */}
              <div className="absolute inset-2 space-y-1.5">
                <div className="h-1.5 bg-gray-400/20 rounded-full professional-message-stream" />
                <div className="h-1 bg-gray-400/15 rounded-full w-3/4 professional-message-stream" style={{ animationDelay: '0.8s' }} />
                <div className="h-1 bg-blue-400/20 rounded-full w-1/2 professional-message-stream" style={{ animationDelay: '1.6s' }} />
              </div>
              
              {/* Executive communication indicator */}
              <div className="absolute top-1.5 right-1.5">
                <MessageSquare className="w-3 h-3 text-gray-300/60 professional-comm-indicator" />
              </div>
            </div>
          </div>
        </div>

        {/* Premium Studio Service Platform - Bottom Center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 professional-studio-float">
          <div className="relative w-48 h-28">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border border-cyan-400/20 backdrop-blur-xl professional-studio-glow shadow-xl">
              {/* Executive analytics dashboard */}
              <div className="absolute inset-4">
                {/* Premium analytics bars */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-black/50 rounded-md border border-cyan-400/15 overflow-hidden">
                  <div className="flex items-end justify-between h-full px-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={`premium-analytics-${i}`}
                        className="w-1 bg-cyan-300/40 rounded-sm professional-analytics-flow"
                        style={{
                          height: `${50 + (i % 4) * 15}%`,
                          animationDelay: `${i * 0.4}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Executive server status */}
                <div className="absolute top-5 left-0 right-0 h-6 bg-black/40 rounded-md flex items-center justify-center border border-cyan-400/10">
                  <Server className="w-3 h-3 text-cyan-300/60 professional-server-status" />
                  <div className="ml-2 flex space-x-1">
                    <div className="w-1 h-1 bg-cyan-300/50 rounded-full professional-status-indicator" />
                    <div className="w-1 h-1 bg-cyan-300/50 rounded-full professional-status-indicator" style={{ animationDelay: '0.6s' }} />
                    <div className="w-1 h-1 bg-green-300/40 rounded-full professional-status-indicator" style={{ animationDelay: '1.2s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Autonomous Network - Bottom Right */}
        <div className="absolute bottom-16 right-16 professional-autonomous-float">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-900/30 to-blue-900/25 border border-green-400/15 backdrop-blur-xl professional-network-glow rotate-45 shadow-xl">
              {/* Executive network coordinator */}
              <div className="absolute inset-3 -rotate-45">
                {/* Central command hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-green-500/30 to-blue-500/25 border border-green-400/30 flex items-center justify-center shadow-md">
                  <Users className="w-3 h-3 text-green-200/60" />
                </div>
                
                {/* Strategic agent nodes */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 60) * Math.PI / 180;
                  const radius = 32;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={`executive-agent-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-green-300/40 professional-agent-network"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Executive ambient elements */}
        <div className="absolute top-1/4 left-1/3">
          <div className="w-4 h-4 rounded-full bg-blue-400/15 professional-ambient-luxury" />
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className="w-3 h-3 rounded-full bg-purple-400/15 professional-ambient-luxury" style={{ animationDelay: '3s' }} />
        </div>

        {/* Sophisticated mouse interaction overlay */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.008) 0%, transparent 60%)`
          }}
        />
      </div>

      {/* Content - Premium presentation */}
      <div className="relative max-w-5xl mx-auto z-30 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional animated headline */}
          <div className={`mb-2 ${isLoaded ? 'professional-fade-in professional-stagger-2' : ''}`}>
            <AnimatedHeadline />
          </div>
          
          {/* Executive subtitle */}
          <p className={`text-2xl md:text-3xl lg:text-4xl text-premium-silver/90 mb-16 leading-relaxed font-light ${isLoaded ? 'professional-fade-in professional-stagger-3' : ''}`}>
            Wij bouwen AI-systemen die uw business 
            <br />
            <span className="text-white font-normal">daadwerkelijk transformeren.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 ${isLoaded ? 'professional-fade-in professional-stagger-4' : ''}`}>
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-500 px-10 py-6 text-xl font-semibold rounded-xl overflow-hidden professional-button-hover shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
              }}
            >
              <span className="relative z-10 flex items-center">
                Ontdek de mogelijkheden
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="relative text-premium-silver hover:text-white px-10 py-6 text-xl font-semibold rounded-xl border-premium-silver/20 hover:border-premium-silver/40 transition-all duration-500 professional-button-hover group overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center">
                Plan een deepdive
                <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-premium-silver/30 to-transparent">
          <div className="w-[1px] h-4 bg-premium-silver/40 professional-scroll-indicator"></div>
        </div>
      </div>

      {/* Professional Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Professional Device Animations */
        @keyframes professional-device-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }

        @keyframes professional-saas-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-0.3deg); }
        }

        @keyframes professional-consulting-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes professional-studio-float {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-10px) rotate(0.2deg); }
        }

        @keyframes professional-autonomous-float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-9px) rotate(45.3deg); }
        }

        /* Professional Glow Effects */
        @keyframes professional-device-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(156, 163, 175, 0.08), 0 8px 32px rgba(0, 0, 0, 0.12); }
          50% { box-shadow: 0 0 30px rgba(156, 163, 175, 0.12), 0 12px 40px rgba(0, 0, 0, 0.15); }
        }

        @keyframes professional-saas-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.06), 0 8px 32px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.1), 0 12px 40px rgba(0, 0, 0, 0.12); }
        }

        @keyframes professional-consulting-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.06), 0 4px 20px rgba(0, 0, 0, 0.08); }
          50% { box-shadow: 0 0 20px rgba(156, 163, 175, 0.08), 0 8px 28px rgba(0, 0, 0, 0.1); }
        }

        @keyframes professional-studio-glow {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.06), 0 10px 40px rgba(0, 0, 0, 0.12); }
          50% { box-shadow: 0 0 35px rgba(34, 211, 238, 0.1), 0 15px 50px rgba(0, 0, 0, 0.15); }
        }

        @keyframes professional-network-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.06), 0 8px 32px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.1), 0 12px 40px rgba(0, 0, 0, 0.12); }
        }

        /* Professional Component Animations */
        @keyframes professional-status-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes professional-brain-process {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.03); }
        }

        @keyframes professional-chip-compute {
          0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.03) rotate(1deg); }
        }

        @keyframes professional-neural-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(156, 163, 175, 0.08); }
          50% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.12), inset 0 0 8px rgba(156, 163, 175, 0.05); }
        }

        @keyframes professional-quantum-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.08); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.12), inset 0 0 8px rgba(59, 130, 246, 0.05); }
        }

        @keyframes professional-sensor-ring {
          0%, 100% { border-color: rgba(156, 163, 175, 0.2); transform: scale(1); }
          50% { border-color: rgba(156, 163, 175, 0.3); transform: scale(1.02); }
        }

        @keyframes professional-vision-core {
          0%, 100% { box-shadow: 0 0 12px rgba(156, 163, 175, 0.1); }
          50% { box-shadow: 0 0 20px rgba(156, 163, 175, 0.15), inset 0 0 10px rgba(156, 163, 175, 0.08); }
        }

        @keyframes professional-eye-scan {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }

        @keyframes professional-progress-flow {
          0% { width: 30%; opacity: 0.3; }
          50% { width: 75%; opacity: 0.6; }
          100% { width: 55%; opacity: 0.4; }
        }

        @keyframes professional-ambient-drift {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 0.4; }
        }

        @keyframes professional-core-process {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes professional-data-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes professional-message-stream {
          0% { width: 0; opacity: 0; }
          50% { opacity: 0.6; }
          100% { width: 100%; opacity: 0.3; }
        }

        @keyframes professional-comm-indicator {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        @keyframes professional-analytics-flow {
          0%, 100% { opacity: 0.3; height: 50%; }
          50% { opacity: 0.6; height: 100%; }
        }

        @keyframes professional-server-status {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes professional-status-indicator {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes professional-agent-network {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes professional-ambient-luxury {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
          50% { transform: translateY(-20px) scale(1.08); opacity: 0.3; }
        }

        @keyframes professional-scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes professional-scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(200%); opacity: 0; }
        }

        @keyframes professional-fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes professional-scroll-indicator {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.6; transform: translateY(4px); }
        }

        /* Apply Professional Animations */
        .professional-device-float {
          animation: professional-device-float 8s ease-in-out infinite;
        }

        .professional-saas-float {
          animation: professional-saas-float 10s ease-in-out infinite;
        }

        .professional-consulting-float {
          animation: professional-consulting-float 12s ease-in-out infinite;
        }

        .professional-studio-float {
          animation: professional-studio-float 9s ease-in-out infinite;
        }

        .professional-autonomous-float {
          animation: professional-autonomous-float 11s ease-in-out infinite;
        }

        .professional-device-glow {
          animation: professional-device-glow 6s ease-in-out infinite;
        }

        .professional-saas-glow {
          animation: professional-saas-glow 7s ease-in-out infinite;
        }

        .professional-consulting-glow {
          animation: professional-consulting-glow 8s ease-in-out infinite;
        }

        .professional-studio-glow {
          animation: professional-studio-glow 6.5s ease-in-out infinite;
        }

        .professional-network-glow {
          animation: professional-network-glow 7.5s ease-in-out infinite;
        }

        .professional-status-pulse {
          animation: professional-status-pulse 3s ease-in-out infinite;
        }

        .professional-brain-process {
          animation: professional-brain-process 4s ease-in-out infinite;
        }

        .professional-chip-compute {
          animation: professional-chip-compute 4.5s ease-in-out infinite;
        }

        .professional-neural-glow {
          animation: professional-neural-glow 5s ease-in-out infinite;
        }

        .professional-quantum-glow {
          animation: professional-quantum-glow 5.5s ease-in-out infinite;
        }

        .professional-sensor-ring {
          animation: professional-sensor-ring 6s ease-in-out infinite;
        }

        .professional-vision-core {
          animation: professional-vision-core 6.5s ease-in-out infinite;
        }

        .professional-eye-scan {
          animation: professional-eye-scan 4s ease-in-out infinite;
        }

        .professional-progress-flow {
          animation: professional-progress-flow 5s ease-in-out infinite;
        }

        .professional-ambient-drift {
          animation: professional-ambient-drift 8s ease-in-out infinite;
        }

        .professional-core-process {
          animation: professional-core-process 4.5s ease-in-out infinite;
        }

        .professional-data-orbit {
          animation: professional-data-orbit 25s linear infinite;
        }

        .professional-message-stream {
          animation: professional-message-stream 6s ease-in-out infinite;
        }

        .professional-comm-indicator {
          animation: professional-comm-indicator 3s ease-in-out infinite;
        }

        .professional-analytics-flow {
          animation: professional-analytics-flow 3.5s ease-in-out infinite;
        }

        .professional-server-status {
          animation: professional-server-status 2.5s ease-in-out infinite;
        }

        .professional-status-indicator {
          animation: professional-status-indicator 2s ease-in-out infinite;
        }

        .professional-agent-network {
          animation: professional-agent-network 3s ease-in-out infinite;
        }

        .professional-ambient-luxury {
          animation: professional-ambient-luxury 10s ease-in-out infinite;
        }

        .professional-scan-horizontal {
          animation: professional-scan-horizontal 12s ease-in-out infinite;
        }

        .professional-scan-vertical {
          animation: professional-scan-vertical 15s ease-in-out infinite;
        }

        .professional-fade-in {
          animation: professional-fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .professional-stagger-2 {
          animation-delay: 0.2s;
        }

        .professional-stagger-3 {
          animation-delay: 0.4s;
        }

        .professional-stagger-4 {
          animation-delay: 0.6s;
        }

        .professional-scroll-indicator {
          animation: professional-scroll-indicator 3s ease-in-out infinite;
        }

        .professional-button-hover {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .professional-button-hover:hover {
          transform: translateY(-1px);
        }
        `
      }} />
    </section>
  );
};

export default Hero;
