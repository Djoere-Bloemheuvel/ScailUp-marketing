import React from 'react';
import { ArrowRight, Play, Zap, Target, Clock, Users, Briefcase, Sparkles, TrendingUp, Bot, PenTool } from 'lucide-react';

const DienstenSection = () => {
  return (
    <>
      {/* CSS Fallback Styles */}
      <style>{`
        .lead-engine-fallback {
          background-image: url(/lead-engine-portrait.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        
        .agents-automations-fallback {
          background-image: url(/marketing_engine_backup_image.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        
        .marketing-engine-fallback {
          background-image: url(/marketing-engine-tree-2k.png);
          background-size: cover;
          background-position: 30% center;
          background-repeat: no-repeat;
          transform: scale(1.1);
        }
      `}</style>
      
      <section className="relative w-full bg-black py-20 lg:py-28">

        {/* Subtle fade to black at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 100%)'
          }}
        />

        {/* Balanced Lead Engine & Marketing Engine Ambient Lighting */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-45">
          {/* Lead Engine blue glows (left side) */}
          <div className="absolute top-1/4 left-1/5 w-[40rem] h-[35rem] bg-gradient-radial from-blue-500/30 via-blue-500/15 to-transparent blur-3xl" />
          <div className="absolute bottom-1/3 left-1/8 w-[35rem] h-[30rem] bg-gradient-radial from-blue-500/25 via-blue-500/10 to-transparent blur-3xl" />
          
          {/* Marketing Engine pink glows (right side) - Enhanced 3D wrap effect */}
          <div className="absolute top-1/3 right-1/5 w-[40rem] h-[35rem] bg-gradient-radial from-pink-500/28 via-pink-500/14 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/8 w-[37rem] h-[32rem] bg-gradient-radial from-pink-500/26 via-pink-500/12 to-transparent blur-3xl" />
          
          {/* Additional wrap-around glows for 3D effect behind Marketing Engine */}
          <div className="absolute top-[40%] right-[2%] w-[25rem] h-[40rem] bg-gradient-radial from-pink-500/20 via-pink-500/8 to-transparent blur-3xl" />
          <div className="absolute top-[25%] right-[8%] w-[30rem] h-[25rem] bg-gradient-radial from-pink-500/18 via-pink-500/6 to-transparent blur-3xl" />
          <div className="absolute bottom-[15%] right-[5%] w-[28rem] h-[30rem] bg-gradient-radial from-pink-500/22 via-pink-500/9 to-transparent blur-3xl" />
          
          {/* Balanced headline backlighting */}
          <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-[45rem] h-[25rem] bg-gradient-radial from-blue-500/18 via-blue-500/8 to-transparent blur-3xl" />
          
          {/* Service card balanced accents */}
          <div className="absolute top-[50%] left-[12%] w-[22rem] h-[25rem] bg-gradient-radial from-blue-500/22 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute top-[50%] right-[12%] w-[22rem] h-[25rem] bg-gradient-radial from-pink-500/22 via-pink-500/10 to-transparent blur-3xl" />
          
          {/* Center middle service subtle glow */}
          <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 w-[20rem] h-[22rem] bg-gradient-radial from-blue-500/15 via-pink-500/8 to-transparent blur-3xl" />
        </div>

        {/* Header Section */}
        <div className="relative text-left mb-8 lg:mb-12 z-10">
          {/* Subtle glow behind headline */}
          <div className="absolute top-1/2 left-1/4 w-32 h-20 bg-blue-400 rounded-full blur-3xl opacity-5 transform -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/3 w-24 h-16 bg-pink-400 rounded-full blur-3xl opacity-4 transform -translate-y-1/2" />
          
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight tracking-[-0.03em]" 
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '300'
                }}>
              <div className="space-y-2">
                <div style={{ fontWeight: '300' }}>
                  Kies de AI-engine
                </div>
                <div style={{ fontWeight: '400', marginLeft: '2rem' }}>
                  voor jouw platform.
                </div>
              </div>
            </h2>
          </div>
        </div>

        {/* 3 Portrait Cards - responsive width */}
        <div className="relative w-full z-10 flex justify-center">
          <div className="w-[90vw] 2xl:w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Portrait 1 - Sales Engine */}
            <div className="relative group">
              {/* Service Name - Top */}
              <div className="absolute top-6 left-6 z-30">
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.8)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '-0.02em', willChange: 'transform, filter' }}>
                    Lead Engine
                  </h4>
                  <p className="text-sm font-light text-white/70 drop-shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:text-white/90 group-hover:drop-shadow-xl" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.02em' }}>
                    AI Sales Agent
                  </p>
                </div>
              </div>
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Sales Engine Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="/lead-engine-portrait.png" 
                    alt="Sales Engine"
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75 lead-engine-img"
                    width="800"
                    height="1200"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                    style={{
                      imageRendering: 'crisp-edges',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  {/* CSS Background Fallback */}
                  <div 
                    className="absolute inset-0 lead-engine-fallback"
                    style={{ display: 'none' }}
                  />
                </div>
                
                {/* Subtle overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '200ms' }} />
                
                
                {/* Apple-Style Content Section - Always visible base state */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <div>
                    {/* Title - Always visible */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-extralight">
                          Automatische 
                        </span>
                        <span className="block font-semibold">
                          leadgeneratie
                        </span>
                      </h3>
                    </div>
                    
                    {/* Description - Always visible */}
                    <div className="mt-3">
                      <p className="text-sm sm:text-base text-white/85 font-medium drop-shadow-md">
                        2.500+ leads per maand met 95% deliverability
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-3 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-blue-400/30 shadow-[0_8px_32px_rgba(96,165,250,0.2)]">
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-blue-50 font-medium tracking-wide">Geautomatiseerde prospecting en enrichment</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-blue-50 font-medium tracking-wide">Enterprise-grade email infrastructure</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-blue-50 font-medium tracking-wide">24/7 automatisch actief</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button - Latest reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-blue-300/30 hover:border-blue-300/50 backdrop-blur-sm hover:bg-blue-400/15 transition-all duration-200 text-xs sm:text-sm group/cta">
                        <span className="mr-2">Start vandaag nog</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 2 - Agents & Automations */}
            <div className="relative group">
              {/* Service Name - Top */}
              <div className="absolute top-6 left-6 z-30">
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-200 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(200,42,255,0.8)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '-0.02em', willChange: 'transform, filter' }}>
                    Agents & Automations
                  </h4>
                  <p className="text-sm font-light text-white/70 drop-shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:text-white/90 group-hover:drop-shadow-xl" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.02em' }}>
                    Custom AI Workflows
                  </p>
                </div>
              </div>
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(14,165,233,0.3),0_0_60px_rgba(219,39,119,0.3)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Portrait 2 Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="/marketing_engine_backup_image.png" 
                    alt="Agents & Automations"
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75 agents-automations-img"
                    width="800"
                    height="1200"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                    style={{
                      imageRendering: 'crisp-edges',
                      objectPosition: 'center center',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  {/* CSS Background Fallback */}
                  <div 
                    className="absolute inset-0 agents-automations-fallback"
                    style={{ display: 'none' }}
                  />
                </div>
                
                {/* Subtle overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '200ms' }} />
                
                
                {/* Apple-Style Content Section - Always visible base state */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <div>
                    {/* Title - Always visible */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                        <span className="bg-gradient-to-r from-white via-cyan-100 via-purple-100 to-pink-100 bg-clip-text text-transparent font-extralight">
                          Custom AI 
                        </span>
                        <span className="block font-semibold">
                          workflows
                        </span>
                      </h3>
                    </div>
                    
                    {/* Description - Always visible */}
                    <div className="mt-3">
                      <p className="text-sm sm:text-base text-white/85 font-medium drop-shadow-md">
                        €50K+ besparing per jaar, 14 dagen oplevering
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-3 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-purple-400/30 shadow-[0_8px_32px_rgba(168,85,247,0.2)]">
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-purple-50 font-medium tracking-wide">Automatisering betaalt zichzelf binnen 3 maanden terug</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-purple-50 font-medium tracking-wide">Geen dure migraties, plug & play integratie</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-purple-50 font-medium tracking-wide">Van concept naar werkende AI-oplossing</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button - Latest reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-purple-400/30 hover:border-purple-400/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10 transition-all duration-200 text-xs sm:text-sm group/cta">
                        <span className="mr-2">Ja, bouw voor ons</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 3 - Marketing Engine */}
            <div className="relative group">
              {/* Service Name - Top */}
              <div className="absolute top-6 left-6 z-30">
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(219,39,119,0.8)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '-0.02em', willChange: 'transform, filter' }}>
                    Marketing Engine
                  </h4>
                  <p className="text-sm font-light text-white/70 drop-shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:text-white/90 group-hover:drop-shadow-xl" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.02em' }}>
                    AI Content Engine
                  </p>
                </div>
              </div>
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-600/60 hover:shadow-[0_0_40px_rgba(219,39,119,0.4),0_0_60px_rgba(139,92,246,0.2)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Portrait 3 Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="/marketing-engine-tree-2k.png" 
                    alt="Marketing Engine"
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75 scale-110 marketing-engine-img"
                    width="800"
                    height="1200"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                    style={{
                      imageRendering: 'crisp-edges',
                      objectPosition: '30% center',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  {/* CSS Background Fallback */}
                  <div 
                    className="absolute inset-0 marketing-engine-fallback"
                    style={{ display: 'none' }}
                  />
                </div>
                
                {/* Subtle overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '200ms' }} />
                
                {/* Coming Soon Overlay - Only on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] backdrop-blur-sm z-20" style={{ transitionDelay: '300ms' }} />
                
                {/* Premium Coming Soon Badge - Only on Hover */}
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '500ms' }}>
                  <div className="text-center bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl rounded-3xl px-8 py-8 border border-pink-400/30 shadow-[0_0_60px_rgba(219,39,119,0.4)] transform scale-95 group-hover:scale-100 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(219,39,119,0.6)]">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-300 via-pink-200 to-white bg-clip-text text-transparent mb-3" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                      Coming Soon
                    </h3>
                    <p className="text-pink-200/90 text-lg font-medium mb-2">Q1 2025 Release</p>
                    <p className="text-gray-300 text-sm max-w-xs">
                      Wordt momenteel ontwikkeld voor early access klanten
                    </p>
                  </div>
                </div>
                
                
                {/* Apple-Style Content Section - Always visible base state */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent group-hover:opacity-20 transition-opacity duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                  <div>
                    {/* Title - Always visible */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                        <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent font-extralight">
                          AI Content 
                        </span>
                        <span className="block font-semibold">
                          workflows
                        </span>
                      </h3>
                    </div>
                    
                    {/* Description - Always visible */}
                    <div className="mt-3">
                      <p className="text-sm sm:text-base text-white/85 font-medium drop-shadow-md">
                        10x sneller content, Q1 2025 verwacht
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-3 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-pink-400/30 shadow-[0_8px_32px_rgba(236,72,153,0.2)]">
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-pink-50 font-medium tracking-wide">AI-gedreven content workflows en optimalisatie</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-pink-50 font-medium tracking-wide">Automatische SEO-optimalisatie en ranking boost</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>
                          <p className="text-xs sm:text-sm text-pink-50 font-medium tracking-wide">Early access voor pre-launch klanten</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button - Latest reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-pink-400/30 hover:border-pink-400/50 backdrop-blur-sm hover:bg-pink-500/15 transition-all duration-200 text-xs sm:text-sm group/cta">
                        <span className="mr-2">Interesse? Meld je aan</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default DienstenSection;