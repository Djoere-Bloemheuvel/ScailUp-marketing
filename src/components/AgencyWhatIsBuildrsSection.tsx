import React from 'react';
import { Play, ArrowRight, Sparkles, Users, Target, Briefcase } from 'lucide-react';

const AgencyWhatIsBuildrsSection = () => {
  const handlePartnershipClick = () => {
    window.location.href = '/contact';
  };

  const handleGetStartedClick = () => {
    window.location.href = '/agency';
  };

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="block">Custom development</span>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                die past.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Standaard oplossingen schieten tekort? Wij ontwikkelen custom AI agents en automations. 
              <span className="font-semibold text-white"> Precies zoals jouw business het nodig heeft</span> - geïntegreerd in jouw bestaande systemen.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">Maatwerk oplossingen</h3>
                  <p className="text-white/70 text-sm">100% custom voor jouw specifieke behoeften</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">Volledige integratie</h3>
                  <p className="text-white/70 text-sm">Naadloos in je bestaande systemen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Briefcase className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">4-6 weken delivery</h3>
                  <p className="text-white/70 text-sm">Van concept tot werkende oplossing</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handlePartnershipClick}
                className="group flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
              >
                <span>Bespreek je project</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={handleGetStartedClick}
                className="group flex items-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Bekijk voorbeelden</span>
              </button>
            </div>
          </div>

          {/* Right Side - Custom Development Showcase */}
          <div className="relative">
            {/* Main Development Mockup */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Custom Agent Development</h3>
                      <p className="text-gray-400 text-sm">Project overzicht</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    In ontwikkeling
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">4.2 weken</div>
                    <div className="text-gray-400 text-sm">Ontwikkeltijd</div>
                    <div className="text-green-400 text-xs">Binnen timeline</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-gray-400 text-sm">API integraties</div>
                    <div className="text-blue-400 text-xs">CRM + Marketing stack</div>
                  </div>
                </div>

                {/* Development Progress */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-3">Development Status</h4>
                  
                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                      <div>
                        <div className="text-white font-medium">Lead Qualification Agent</div>
                        <div className="text-gray-400 text-sm">Custom scoring & routing</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-semibold">Live</div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                        ⚡
                      </div>
                      <div>
                        <div className="text-white font-medium">Process Automation</div>
                        <div className="text-gray-400 text-sm">Workflow optimization</div>
                      </div>
                    </div>
                    <div className="text-blue-400 font-semibold">Testing</div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">
                        🔧
                      </div>
                      <div>
                        <div className="text-white font-medium">API Integration Suite</div>
                        <div className="text-gray-400 text-sm">Multi-platform sync</div>
                      </div>
                    </div>
                    <div className="text-yellow-400 font-semibold">Development</div>
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

export default AgencyWhatIsBuildrsSection;