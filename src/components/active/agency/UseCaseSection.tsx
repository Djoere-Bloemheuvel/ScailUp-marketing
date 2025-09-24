import React from 'react';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';

const UseCaseSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Section Header */}
      <div className="relative py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-8 tracking-tight" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif' }}>
              <span className="block font-light text-white/95 mb-2">3 manieren waarop AI agents</span>
              <span className="block font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                jouw business transformeren
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Visual Blocks Grid - Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 h-[180vh] sm:h-[170vh] md:h-[180vh] lg:h-[80vh]">
          
          {/* B2B Consultants Block */}
          <div className="group relative h-full">
            {/* Business Type Label */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30">
              <div className="bg-black/30 backdrop-blur-md border border-purple-400/30 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-light text-purple-200/90 tracking-[0.15em] sm:tracking-[0.2em] uppercase">B2B Consultants</span>
              </div>
            </div>
            <div className="relative overflow-hidden transition-all duration-700 cursor-pointer h-full">
              
              {/* Hero Image Container */}
              <div className="relative h-full overflow-hidden">
                
                {/* Holographic Campaign Elements */}
                <div className="absolute inset-0 z-5">
                  <div className="absolute top-4 right-4 bg-purple-400/20 backdrop-blur-sm rounded-lg p-2 border border-purple-300/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-xs font-medium">Live Campaign</span>
                    </div>
                  </div>
                  
                  {/* Floating Campaign Cards */}
                  <div className="absolute top-16 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">Content Pipeline</div>
                    <div className="flex space-x-1">
                      <div className="w-8 h-1 bg-blue-400 rounded"></div>
                      <div className="w-6 h-1 bg-purple-400 rounded"></div>
                      <div className="w-4 h-1 bg-pink-400 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">ROI Tracking</div>
                    <div className="text-green-400 text-sm font-bold">+347%</div>
                  </div>
                  
                  {/* Microtext Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white/70 text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10">
                      Van advies naar actie in een fractie van de tijd
                    </div>
                  </div>
                </div>
                
                {/* Background Image - simplified */}
                <div 
                  className="absolute inset-0 bg-cover bg-center md:bg-[center_35%] bg-no-repeat transition-all duration-700 group-hover:blur-[2px]"
                  style={{
                    backgroundImage: `url('/images/marketing-agency-owner.webp')`
                  }}
                >
                  {/* Hover Color Overlay - only on background */}
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-all duration-700"></div>
                  {/* Dark Focus Overlay - only on background */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700"></div>
                </div>

              </div>
              
              {/* Apple-Style Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                {/* Natural flow container */}
                <div>
                  {/* Business Type and Title - Always visible */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                      <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent font-extralight">
                        Meer klanten bedienen 
                      </span>
                      <span className="block font-semibold">
                        zonder extra uren
                      </span>
                    </h3>
                  </div>
                  
                  {/* Description - Progressive reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                    <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                      AI-agents automatiseren je rapportage, client intake en follow-up processen
                    </p>
                  </div>
                  
                  {/* Concrete Benefits - Final reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-purple-400/20">
                      <p className="text-xs sm:text-sm text-purple-100 font-medium">• 40% minder tijd besteed aan administratie</p>
                      <p className="text-xs sm:text-sm text-purple-100 font-medium">• 3x snellere client onboarding proces</p>
                      <p className="text-xs sm:text-sm text-purple-100 font-medium">• 25% hogere client retentie door betere follow-up</p>
                    </div>
                  </div>
                  
                  {/* CTA Button - Latest reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-purple-400/30 hover:border-purple-400/50 backdrop-blur-sm hover:bg-purple-500/15 transition-all duration-200 text-xs sm:text-sm group/cta">
                      <span className="mr-2">Lees hoe dit werkt</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketingbureau's Block */}
          <div className="group relative h-full">
            {/* Business Type Label */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30">
              <div className="bg-black/30 backdrop-blur-md border border-pink-400/30 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-light text-pink-200/90 tracking-[0.15em] sm:tracking-[0.2em] uppercase">Marketingbureau's</span>
              </div>
            </div>
            <div className="relative overflow-hidden transition-all duration-700 cursor-pointer h-full">
              
              {/* Hero Image Container */}
              <div className="relative h-full overflow-hidden">
                
                {/* Holographic Dashboard Elements */}
                <div className="absolute inset-0 z-5">
                  <div className="absolute top-4 left-4 bg-blue-400/20 backdrop-blur-sm rounded-lg p-2 border border-blue-300/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-xs font-medium">AI Dashboard</span>
                    </div>
                  </div>
                  
                  {/* Floating Analytics Cards */}
                  <div className="absolute top-16 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">Client Insights</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-6 bg-blue-400 rounded"></div>
                      <div className="w-2 h-8 bg-cyan-400 rounded"></div>
                      <div className="w-2 h-4 bg-blue-300 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">Time Saved</div>
                    <div className="text-cyan-400 text-sm font-bold">32 hrs/week</div>
                  </div>
                  
                  {/* Microtext Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white/70 text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10">
                      Schaalbaar zonder stress
                    </div>
                  </div>
                </div>
                
                {/* Background Image - simplified */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:blur-[2px]"
                  style={{
                    backgroundImage: `url('/images/consultancy-founder.webp')`
                  }}
                >
                  {/* Light pink/magenta overlay to enhance the existing tint */}
                  <div className="absolute inset-0 bg-pink-500/10"></div>
                  {/* Hover Color Overlay - only on background */}
                  <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/15 transition-all duration-700"></div>
                  {/* Dark Focus Overlay - only on background */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700"></div>
                </div>

              </div>
              
              {/* Apple-Style Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                {/* Natural flow container */}
                <div>
                  {/* Business Type and Title - Always visible */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                      <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent font-extralight">
                        Schaal naar 50+ klanten 
                      </span>
                      <span className="block font-semibold">
                        zonder burnout
                      </span>
                    </h3>
                  </div>
                  
                  {/* Description - Progressive reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                    <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                      AI-powered lead generation, content planning en campagne optimalisatie
                    </p>
                  </div>
                  
                  {/* Concrete Benefits - Final reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-pink-400/20">
                      <p className="text-xs sm:text-sm text-pink-100 font-medium">• 60% meer gekwalificeerde leads per maand</p>
                      <p className="text-xs sm:text-sm text-pink-100 font-medium">• 32 uur per week tijdsbesparing op content</p>
                      <p className="text-xs sm:text-sm text-pink-100 font-medium">• 50+ klanten beheren zonder extra personeel</p>
                    </div>
                  </div>
                  
                  {/* CTA Button - Latest reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-pink-400/30 hover:border-pink-400/50 backdrop-blur-sm hover:bg-pink-500/15 transition-all duration-200 text-xs sm:text-sm group/cta">
                      <span className="mr-2">Lees hoe dit werkt</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Bedrijven Block */}
          <div className="group relative h-full">
            {/* Business Type Label */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30">
              <div className="bg-black/30 backdrop-blur-md border border-blue-400/30 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-light text-blue-200/90 tracking-[0.15em] sm:tracking-[0.2em] uppercase">SaaS Bedrijven</span>
              </div>
            </div>
            <div className="relative overflow-hidden transition-all duration-700 cursor-pointer h-full">
              
              {/* Hero Image Container */}
              <div className="relative h-full overflow-hidden">
                
                {/* Holographic Growth Elements */}
                <div className="absolute inset-0 z-5">
                  <div className="absolute top-4 right-4 bg-emerald-400/20 backdrop-blur-sm rounded-lg p-2 border border-emerald-300/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-xs font-medium">Growth Engine</span>
                    </div>
                  </div>
                  
                  {/* Floating Growth Metrics */}
                  <div className="absolute top-16 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">MRR Growth</div>
                    <div className="flex items-end space-x-1">
                      <div className="w-1 h-2 bg-emerald-400 rounded"></div>
                      <div className="w-1 h-4 bg-emerald-400 rounded"></div>
                      <div className="w-1 h-6 bg-emerald-400 rounded"></div>
                      <div className="w-1 h-8 bg-green-400 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white/90 text-xs font-medium mb-1">AI Calls</div>
                    <div className="text-green-400 text-sm font-bold">247/day</div>
                  </div>
                  
                  {/* Microtext Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white/70 text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10">
                      100% focus op visie
                    </div>
                  </div>
                </div>
                
                {/* Background Image - simplified */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:blur-[2px]"
                  style={{
                    backgroundImage: `url('/images/saas-team-meeting.webp')`
                  }}
                >
                  {/* Light blue overlay */}
                  <div className="absolute inset-0 bg-blue-500/10"></div>
                  {/* Hover Color Overlay - only on background */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/15 transition-all duration-700"></div>
                  {/* Dark Focus Overlay - only on background */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700"></div>
                </div>

              </div>
              
              {/* Apple-Style Content Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                {/* Natural flow container */}
                <div>
                  {/* Business Type and Title - Always visible */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-light mb-1 text-white drop-shadow-xl tracking-tight leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-extralight">
                        Focus op product, 
                      </span>
                      <span className="block font-semibold">
                        AI regelt de rest
                      </span>
                    </h3>
                  </div>
                  
                  {/* Description - Progressive reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-3 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-3">
                    <p className="text-sm sm:text-base text-white/95 font-medium drop-shadow-md">
                      Enterprise AI-platform voor geautomatiseerde sales, support en operaties
                    </p>
                  </div>
                  
                  {/* Concrete Benefits - Final reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-blue-400/20">
                      <p className="text-xs sm:text-sm text-blue-100 font-medium">• 247 prospects per dag automatisch benaderd</p>
                      <p className="text-xs sm:text-sm text-blue-100 font-medium">• 85% reductie in customer churn rate</p>
                      <p className="text-xs sm:text-sm text-blue-100 font-medium">• 99.9% uptime zonder technische zorgen</p>
                    </div>
                  </div>
                  
                  {/* CTA Button - Latest reveal */}
                  <div className="overflow-hidden transition-all duration-[800ms] delay-[700ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium rounded-full border border-blue-400/30 hover:border-blue-400/50 backdrop-blur-sm hover:bg-blue-500/15 transition-all duration-200 text-xs sm:text-sm group/cta">
                      <span className="mr-2">Lees hoe dit werkt</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default UseCaseSection;