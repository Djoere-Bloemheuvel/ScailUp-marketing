import React from 'react';
import { Play, ArrowRight, Sparkles, Users, Target, Briefcase } from 'lucide-react';

const CustomAgentCTASection = () => {
  const handlePartnershipClick = () => {
    window.location.href = '/contact';
  };

  const handleGetStartedClick = () => {
    if (typeof window !== 'undefined') {
      // Find next section after this one and scroll to it
      const currentSection = document.getElementById('what-is-buildrs-section');
      if (currentSection) {
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Fallback to agency page if no next section
          window.location.href = '/agency';
        }
      } else {
        window.location.href = '/agency';
      }
    }
  };

  return (
    <section id="what-is-buildrs-section" className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Ambient Background Lights - Agency Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main agency orbs - partnership theme */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/25 rounded-full blur-2xl opacity-60 will-change-transform"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-500/30 to-cyan-500/25 rounded-full blur-2xl opacity-65"></div>
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-gradient-to-r from-blue-400/25 to-purple-400/20 rounded-full blur-2xl opacity-55"></div>
        
        {/* Secondary ambient glows - agency growth theme */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-pink-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-blue-500/20 to-purple-500/15 rounded-full blur-xl opacity-75"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-t from-pink-500/18 to-purple-500/15 rounded-full blur-xl opacity-80"></div>
        
        {/* Corner partnership glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/25 to-pink-500/20 rounded-full blur-lg opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-500/25 to-cyan-500/20 rounded-full blur-lg opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-blue-400/20 to-purple-400/15 rounded-full blur-lg opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-gradient-to-tl from-pink-500/22 to-purple-500/18 rounded-full blur-lg opacity-48"></div>
        
        {/* Floating connection particles - agency network theme */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-purple-400/40 rounded-full blur-sm opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-400/40 rounded-full blur-sm opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400/40 rounded-full blur-sm opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed text-center lg:text-left pb-2" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif' }}>
                <span className="block font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap pb-1">
                  Agents & Automations
                </span>
                <span className="block font-light text-white whitespace-nowrap">Op maat gemaakt</span>
                <span className="block font-light text-white whitespace-nowrap">Voor jouw business</span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Standard software kan het niet. Jouw team blijft vastzitten in handmatig werk. 
              <span className="font-semibold text-white"> Wij bouwen precies wat jij nodig hebt.</span> Werkend binnen 14 dagen.
            </p>

            {/* Hard Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">€50K+ per jaar terug</h3>
                  <p className="text-white/70 text-sm">Automatisering betaalt zichzelf binnen 3 maanden terug</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">Werkt in je bestaande systemen</h3>
                  <p className="text-white/70 text-sm">Geen dure migraties. Plug & play in wat je al hebt</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Briefcase className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">30 dagen garantie</h3>
                  <p className="text-white/70 text-sm">Werkt niet zoals beloofd? Geld terug</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handlePartnershipClick}
                className="group flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
              >
                <span>Ja, bouw dit voor ons</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={handleGetStartedClick}
                className="group flex items-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Toon me voorbeelden</span>
              </button>
            </div>
          </div>

          {/* Right Side - Custom Development Dashboard */}
          <div className="relative">
            {/* Browser Window - Custom Agent Development */}
            <div 
              className="relative w-full rounded-xl shadow-2xl border overflow-hidden"
              style={{ 
                backgroundColor: '#0A0A0A',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: '1.5px',
                minHeight: '400px'
              }}
            >
              {/* Browser Top Bar */}
              <div className="flex items-center px-4 py-2 border-b" style={{ 
                borderColor: 'rgba(255, 255, 255, 0.05)',
                backgroundColor: '#0A0A0A'
              }}>
                {/* Traffic Light Buttons */}
                <div className="flex items-center space-x-1.5 mr-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.6)' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(245, 158, 11, 0.6)' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.6)' }}></div>
                </div>
                
                {/* Address Bar */}
                <div className="flex-1 max-w-sm">
                  <div className="rounded-md px-3 py-1 text-sm text-gray-500 border" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'rgba(255, 255, 255, 0.05)'
                  }}>
                    <span className="text-green-400 mr-1">🔐</span>
                    <span>buildrs.ai/agency</span>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="p-4 border-b" style={{ 
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: '#0A0A0A'
              }}>
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-lg">Custom Agent Development</h4>
                    <p className="text-sm text-gray-400">Project overzicht & voortgang</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-xl text-sm font-medium">
                    In ontwikkeling
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="p-4" style={{ backgroundColor: '#0A0A0A' }}>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  
                  {/* Development Time */}
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-3 text-white border border-purple-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs opacity-90 font-medium">Ontwikkeltijd</span>
                      <Sparkles className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-lg font-bold">4.2 weken</div>
                    <div className="text-xs opacity-75">binnen timeline</div>
                  </div>

                  {/* API Integrations */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 text-white border border-blue-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs opacity-90 font-medium">Integraties</span>
                      <Briefcase className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-lg font-bold">8</div>
                    <div className="text-xs opacity-75">API's connected</div>
                  </div>

                </div>

                {/* Development Progress */}
                <div className="rounded-lg p-3 border" style={{
                  backgroundColor: '#0A0A0A',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-white text-sm">Development Status</h5>
                  </div>
                  
                  {/* Progress Items */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-green-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">Lead Qualification Agent</div>
                        <div className="text-gray-400 text-xs">Custom scoring & routing</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-green-400 text-sm">✓ Live</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-blue-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">Process Automation</div>
                        <div className="text-gray-400 text-xs">Workflow optimization</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-blue-400 text-sm">Testing</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-yellow-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">API Integration Suite</div>
                        <div className="text-gray-400 text-xs">Multi-platform sync</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-yellow-400 text-sm">Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Custom Built
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              API Ready
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomAgentCTASection;