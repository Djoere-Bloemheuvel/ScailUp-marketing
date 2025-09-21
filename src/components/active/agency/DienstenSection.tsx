import React from 'react';
import { ArrowRight, Play, Zap, Target, Clock, Users, Briefcase, Sparkles, TrendingUp, Bot, PenTool } from 'lucide-react';

const DienstenSection = () => {
  return (
    <>
      <section className="relative w-full bg-black py-20 lg:py-28">

        {/* Subtle fade to black at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 100%)'
          }}
        />

        {/* Subtle Ambient Lights - Service Colors */}
        <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-40 transition-opacity duration-1000 ease-out z-0">
          {/* Lead Engine Blue - left portrait area */}
          <div className="absolute top-[18%] left-[8%] w-80 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11.8s', animationDelay: '2.1s' }} />
          
          {/* Agents & Automations Purple - middle area */}
          <div className="absolute bottom-[31%] left-[45%] w-72 h-80 bg-purple-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14.3s', animationDelay: '5.7s' }} />
          
          {/* Marketing Engine Pink - right area */}
          <div className="absolute top-[67%] right-[12%] w-64 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9.7s', animationDelay: '8.4s' }} />
          
          {/* Subtle blue accent */}
          <div className="absolute bottom-[23%] left-[28%] w-56 h-64 bg-blue-300/18 rounded-full blur-3xl" />
          
          {/* Subtle pink background */}
          <div className="absolute top-[41%] right-[35%] w-60 h-68 bg-pink-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7.2s', animationDelay: '3.3s' }} />
        </div>

        {/* Header Section */}
        <div className="relative text-center mb-16 lg:mb-20 z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              Kies Jouw <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI-Engine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Van complete sales automation tot maatwerk consultancy - ontdek welke oplossing bij jouw business past
            </p>
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
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75"
                    style={{
                      imageRendering: 'crisp-edges',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms'
                    }}
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
                    
                    {/* Description - Progressive reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                      <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                        2.500+ leads per maand met 95% deliverability
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-blue-300/20">
                        <p className="text-xs sm:text-sm text-blue-100 font-medium">• Geautomatiseerde prospecting en enrichment</p>
                        <p className="text-xs sm:text-sm text-blue-100 font-medium">• Enterprise-grade email infrastructure</p>
                        <p className="text-xs sm:text-sm text-blue-100 font-medium">• 24/7 automatisch actief</p>
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
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75"
                    style={{
                      imageRendering: 'crisp-edges',
                      objectPosition: 'center center',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms'
                    }}
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
                    
                    {/* Description - Progressive reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                      <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                        €50K+ besparing per jaar, 14 dagen oplevering
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-purple-300/20">
                        <p className="text-xs sm:text-sm text-purple-100 font-medium">• Automatisering betaalt zichzelf binnen 3 maanden terug</p>
                        <p className="text-xs sm:text-sm text-purple-100 font-medium">• Geen dure migraties, plug & play integratie</p>
                        <p className="text-xs sm:text-sm text-purple-100 font-medium">• Van concept naar werkende AI-oplossing</p>
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
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75 scale-110"
                    style={{
                      imageRendering: 'crisp-edges',
                      objectPosition: '30% center',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms'
                    }}
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
                        <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent font-extralight">
                          AI Content 
                        </span>
                        <span className="block font-semibold">
                          workflows
                        </span>
                      </h3>
                    </div>
                    
                    {/* Description - Progressive reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                      <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                        10x sneller content, Q1 2025 verwacht
                      </p>
                    </div>
                    
                    {/* Concrete Benefits - Final reveal */}
                    <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                      <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-pink-400/20">
                        <p className="text-xs sm:text-sm text-pink-100 font-medium">• AI-gedreven content workflows en optimalisatie</p>
                        <p className="text-xs sm:text-sm text-pink-100 font-medium">• Automatische SEO-optimalisatie en ranking boost</p>
                        <p className="text-xs sm:text-sm text-pink-100 font-medium">• Early access voor pre-launch klanten</p>
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