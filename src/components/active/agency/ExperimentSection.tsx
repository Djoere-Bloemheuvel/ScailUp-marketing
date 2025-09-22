import React from 'react';
import { ArrowRight, Play, Zap, Target, Clock, Users, Briefcase, Sparkles } from 'lucide-react';

const ExperimentSection = () => {
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

        {/* Subtle Ambient Lights - Portrait Colors */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Sales Engine Blue - left portrait */}
          <div className="absolute top-2/5 left-1/6 w-96 h-96 bg-[#0046FF] rounded-full blur-3xl" />
          
          {/* Agents & Automations Magenta - middle portrait */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#C82AFF] rounded-full blur-3xl" />
          
          {/* Marketing Engine Pink - right portrait */}
          <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-[#DB2777] rounded-full blur-3xl" />
          
          {/* Extra blue depth */}
          <div className="absolute bottom-1/5 left-1/4 w-80 h-80 bg-[#0046FF] rounded-full blur-3xl" />
          
          {/* Additional blue background */}
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#0046FF] rounded-full blur-3xl" />
          
          {/* More pink lights */}
          <div className="absolute top-1/3 left-1/3 w-68 h-68 bg-[#DB2777] rounded-full blur-3xl" />
          <div className="absolute bottom-1/6 right-1/3 w-64 h-64 bg-[#DB2777] rounded-full blur-3xl" />
          
          {/* Small purple accents */}
          <div className="absolute top-1/2 left-1/5 w-48 h-48 bg-[#8B5CF6] rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-1/4 w-52 h-52 bg-[#8B5CF6] rounded-full blur-3xl" />
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
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Sales Engine Image */}
                <div className="w-full h-full relative">
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
                
                {/* Luxury Card Content on Hover */}
                <div className="absolute inset-0 p-7 text-white opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '400ms', willChange: 'opacity, transform' }}>
                  <div className="h-full flex flex-col justify-between pb-6">
                    
                    {/* Header Section - Staggered fade-in */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '500ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <h3 className="text-2xl font-bold leading-tight bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.01em' }}>
                        Sales Engine
                      </h3>
                      <p className="text-base text-white/95 font-medium leading-relaxed transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ letterSpacing: '0.005em' }}>
                        Automatische leadgeneratie die echt werkt
                      </p>
                    </div>
                    
                    {/* Value Props - Staggered micro-animations */}
                    <div className="space-y-4 my-6 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '600ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '650ms' }}>
                        <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <Zap className="w-4 h-4 text-blue-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">2.500+ leads per maand</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Geautomatiseerde prospecting en enrichment</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '700ms' }}>
                        <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <Target className="w-4 h-4 text-blue-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">95% email deliverability</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Enterprise-grade email infrastructure</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '750ms' }}>
                        <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <Clock className="w-4 h-4 text-blue-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">24/7 automatisch actief</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Werkt terwijl jij slaapt, deals binnenkomen</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hero-style CTA Buttons - Final staggered entrance */}
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '800ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      {/* Primary CTA - Gradient border design */}
                      <div className="relative group">
                        {/* Gradient border wrapper */}
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 hover:scale-[1.05] transition-all duration-300">
                          <button
                            onClick={() => window.location.href = '/lead-engine'}
                            className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/40 active:scale-[0.98] transition-all duration-300 text-sm"
                            style={{ 
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                              willChange: 'transform, background-color'
                            }}
                          >
                            <span className="mr-3">Start vandaag nog</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Secondary CTA - Hero outline design */}
                      <div className="relative group">
                        <button
                          onClick={() => window.location.href = '/lead-engine#demo'}
                          className="relative w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 text-sm"
                          style={{ 
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            willChange: 'transform, box-shadow, background-color'
                          }}
                        >
                          <Play className="mr-3 w-4 h-4" />
                          <span>Bekijk live demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Base State Content - Smooth early fade-out */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-all duration-[700ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '0ms', willChange: 'opacity, transform' }}>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Sales Engine</h3>
                    <p className="text-sm text-gray-400">AI Sales Agent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 2 - Agents & Automations */}
            <div className="relative group">
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#C82AFF]/60 hover:shadow-[0_0_40px_rgba(200,42,255,0.4)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Portrait 2 Image */}
                <div className="w-full h-full relative">
                  <img 
                    src="/portrait-2.png" 
                    alt="Agents & Automations"
                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:blur-sm group-hover:brightness-75"
                    style={{
                      imageRendering: 'crisp-edges',
                      objectPosition: 'center 30%',
                      willChange: 'filter, transform',
                      transitionDelay: '100ms'
                    }}
                  />
                </div>
                
                {/* Subtle overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '200ms' }} />
                
                {/* Luxury Card Content on Hover */}
                <div className="absolute inset-0 p-7 text-white opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '400ms', willChange: 'opacity, transform' }}>
                  <div className="h-full flex flex-col justify-between pb-6">
                    
                    {/* Header Section - Staggered fade-in */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '500ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <h3 className="text-2xl font-bold leading-tight bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.01em' }}>
                        Agents & Automations
                      </h3>
                      <p className="text-base text-white/95 font-medium leading-relaxed transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ letterSpacing: '0.005em' }}>
                        AI-workflows op maat voor jouw business
                      </p>
                    </div>
                    
                    {/* Value Props - Staggered micro-animations */}
                    <div className="space-y-4 my-6 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '600ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '650ms' }}>
                        <div className="p-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                          <Users className="w-4 h-4 text-purple-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">€50K+ per jaar besparing</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Automatisering betaalt zichzelf binnen 3 maanden terug</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '700ms' }}>
                        <div className="p-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                          <Target className="w-4 h-4 text-purple-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Werkt in je bestaande systemen</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Geen dure migraties. Plug & play integratie</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '750ms' }}>
                        <div className="p-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                          <Briefcase className="w-4 h-4 text-purple-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">14 dagen oplevering</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Van concept naar werkende AI-oplossing</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hero-style CTA Buttons - Final staggered entrance */}
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '800ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      {/* Primary CTA - Gradient border design */}
                      <div className="relative group">
                        {/* Gradient border wrapper */}
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 hover:scale-[1.05] transition-all duration-300">
                          <button
                            onClick={() => window.location.href = '/contact'}
                            className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/40 active:scale-[0.98] transition-all duration-300 text-sm"
                            style={{ 
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                              willChange: 'transform, background-color'
                            }}
                          >
                            <span className="mr-3">Ja, bouw voor ons</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Secondary CTA - Hero outline design */}
                      <div className="relative group">
                        <button
                          onClick={() => window.location.href = '/agents-automations#voorbeelden'}
                          className="relative w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 text-sm"
                          style={{ 
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            willChange: 'transform, box-shadow, background-color'
                          }}
                        >
                          <Play className="mr-3 w-4 h-4" />
                          <span>Toon voorbeelden</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Base State Content - Smooth early fade-out */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-all duration-[700ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '0ms', willChange: 'opacity, transform' }}>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Agents & Automations</h3>
                    <p className="text-sm text-gray-400">Consultancy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait 3 - Marketing Engine */}
            <div className="relative group">
              <div className="h-[75vh] xl:h-[70vh] 2xl:h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-600/60 hover:shadow-[0_0_40px_rgba(219,39,119,0.4),0_0_60px_rgba(139,92,246,0.2)] hover:scale-[1.015] transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] will-change-transform">
                {/* Portrait 3 Image */}
                <div className="w-full h-full relative">
                  <img 
                    src="/portrait-3.png" 
                    alt="Marketing Engine"
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
                
                {/* Luxury Card Content on Hover */}
                <div className="absolute inset-0 p-7 text-white opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '400ms', willChange: 'opacity, transform' }}>
                  <div className="h-full flex flex-col justify-between pb-6">
                    
                    {/* Header Section - Staggered fade-in */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '500ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <h3 className="text-2xl font-bold leading-tight bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '0.01em' }}>
                        Marketing Engine
                      </h3>
                      <p className="text-base text-white/95 font-medium leading-relaxed transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ letterSpacing: '0.005em' }}>
                        AI-content workflows die converteren
                      </p>
                    </div>
                    
                    {/* Value Props - Staggered micro-animations */}
                    <div className="space-y-4 my-6 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '600ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '650ms' }}>
                        <div className="p-1.5 rounded-lg bg-pink-500/20 border border-pink-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-pink-500/30 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                          <Sparkles className="w-4 h-4 text-pink-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">10x sneller content productie</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">AI-gedreven content workflows en optimalisatie</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '700ms' }}>
                        <div className="p-1.5 rounded-lg bg-pink-500/20 border border-pink-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-pink-500/30 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                          <Target className="w-4 h-4 text-pink-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">SEO volledig geoptimaliseerd</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Automatische SEO-optimalisatie en ranking boost</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '750ms' }}>
                        <div className="p-1.5 rounded-lg bg-pink-500/20 border border-pink-400/30 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] group-hover:scale-105 group-hover:bg-pink-500/30 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                          <Clock className="w-4 h-4 text-pink-300 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Q1 2025 verwacht</h4>
                          <p className="text-white/75 text-xs mt-0.5 leading-relaxed transition-all duration-[400ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]">Early access voor pre-launch klanten</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hero-style CTA Buttons - Final staggered entrance */}
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '800ms', transform: 'translateY(20px)', willChange: 'opacity, transform' }}>
                      {/* Primary CTA - Gradient border design */}
                      <div className="relative group">
                        {/* Gradient border wrapper */}
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 hover:scale-[1.05] transition-all duration-300">
                          <button
                            onClick={() => window.location.href = '/marketing-engine#waitlist'}
                            className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/40 active:scale-[0.98] transition-all duration-300 text-sm"
                            style={{ 
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                              willChange: 'transform, background-color'
                            }}
                          >
                            <span className="mr-3">Interesse? Meld je aan</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Secondary CTA - Hero outline design */}
                      <div className="relative group">
                        <button
                          onClick={() => window.location.href = '/marketing-engine#roadmap'}
                          className="relative w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 text-sm"
                          style={{ 
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            willChange: 'transform, box-shadow, background-color'
                          }}
                        >
                          <Sparkles className="mr-3 w-4 h-4" />
                          <span>Bekijk roadmap</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Base State Content - Smooth early fade-out */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-all duration-[700ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]" style={{ transitionDelay: '0ms', willChange: 'opacity, transform' }}>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Marketing Engine</h3>
                    <p className="text-sm text-gray-400">AI Marketing Agent</p>
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

export default ExperimentSection;