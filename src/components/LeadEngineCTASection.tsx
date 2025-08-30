import React from 'react';
import { Play, ArrowRight, Database, Mail, Users, Target, TrendingUp } from 'lucide-react';

const LeadEngineCTASection = () => {
  const handleGetStartedClick = () => {
    window.location.href = '/lead-engine';
  };

  const handleDemoClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Ambient Background Lights - Lead Engine Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main lead engine orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/25 rounded-full blur-2xl opacity-60 will-change-transform"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/30 to-blue-500/25 rounded-full blur-2xl opacity-65"></div>
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-gradient-to-r from-cyan-400/25 to-blue-400/20 rounded-full blur-2xl opacity-55"></div>
        
        {/* Secondary ambient glows - lead generation theme */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-cyan-500/20 to-blue-500/15 rounded-full blur-xl opacity-75"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-t from-blue-500/18 to-purple-500/15 rounded-full blur-xl opacity-80"></div>
        
        {/* Corner lead engine glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 rounded-full blur-lg opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-purple-500/25 to-blue-500/20 rounded-full blur-lg opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-cyan-400/20 to-blue-400/15 rounded-full blur-lg opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-gradient-to-tl from-blue-500/22 to-purple-500/18 rounded-full blur-lg opacity-48"></div>
        
        {/* Floating lead generation particles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400/40 rounded-full blur-sm opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full blur-sm opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed text-center lg:text-left pb-2" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif' }}>
                <span className="block font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap pb-1">
                  Lead Engine
                </span>
                <span className="block font-light text-white whitespace-nowrap">Complete outbound</span>
                <span className="block font-light text-white whitespace-nowrap">op autopilot</span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Van lead database tot geboekte meeting - alles geautomatiseerd. 
              <span className="font-semibold text-white"> 100k+ prospects, AI-personalisatie en automatische follow-up.</span> Start nu direct.
            </p>

            {/* Test Pilot Highlight */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">Eerste maand €99 <span className="text-white/60 line-through text-base font-normal">normaal €249</span></h3>
                  <p className="text-white/80 text-sm">1000 leads • 2000 emails • Garantie: minimaal 1 meeting of geld terug</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Beperkt beschikbaar
                </div>
              </div>
            </div>

            {/* Hard Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Database className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">100k+ geverifieerde leads</h3>
                  <p className="text-white/70 text-sm">Altijd up-to-date database van beslissers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">AI-personalisatie op schaal</h3>
                  <p className="text-white/70 text-sm">Elke email uniek, elke LinkedIn bericht authentiek</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <Target className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold">Inbox naar meeting</h3>
                  <p className="text-white/70 text-sm">Automatische follow-up tot afspraak geboekt is</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleGetStartedClick}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-lg"
              >
                <span>Start met Lead Engine</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={handleDemoClick}
                className="group flex items-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Lees meer</span>
              </button>
            </div>
          </div>

          {/* Right Side - Lead Engine Dashboard Mockup */}
          <div className="relative">
            {/* Browser Window - Email Campaign Dashboard */}
            <div 
              className="relative w-full rounded-xl shadow-2xl border overflow-hidden"
              style={{ 
                backgroundColor: '#0A0A0A',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: '1.5px',
                minHeight: '500px'
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
                    <h4 className="font-bold text-white text-lg">Lead Engine Dashboard</h4>
                    <p className="text-sm text-gray-400">Geautomatiseerde outbound en lead generation</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-xl text-sm font-medium">
                    Live
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="p-4" style={{ backgroundColor: '#0A0A0A' }}>
                <div className="grid grid-cols-3 gap-3 mb-4">
                    
                  {/* Leads */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 text-white border border-blue-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs opacity-90 font-medium">Leads</span>
                      <Database className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-lg font-bold">12,847</div>
                    <div className="text-xs opacity-75">qualified</div>
                  </div>

                  {/* Conversion Rate */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-3 text-white border border-green-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs opacity-90 font-medium">Conversie</span>
                      <TrendingUp className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-lg font-bold">8.4%</div>
                    <div className="text-xs opacity-75">naar meeting</div>
                  </div>

                  {/* Revenue */}
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-3 text-white border border-purple-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs opacity-90 font-medium">Revenue</span>
                      <Users className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-lg font-bold">€284K</div>
                    <div className="text-xs opacity-75">pipeline</div>
                  </div>

                  </div>

                {/* Campaign List Preview */}
                <div className="rounded-lg p-3 border" style={{
                  backgroundColor: '#0A0A0A',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-white text-sm">Actieve Sequences</h5>
                  </div>
                  
                  {/* Sample Campaign Rows */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-blue-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">B2B SaaS Outreach</div>
                        <div className="text-gray-400 text-xs">Email + LinkedIn • Actief</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-blue-400 text-sm">247</div>
                        <div className="text-gray-400 text-xs">prospects</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-green-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">Enterprise ABM</div>
                        <div className="text-gray-400 text-xs">Key Accounts • Live</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-green-400 text-sm">12</div>
                        <div className="text-gray-400 text-xs">targets</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded border-l-2 border-l-purple-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200 text-sm">Tech Startup Outreach</div>
                        <div className="text-gray-400 text-xs">Email nurturing • Scheduled</div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-bold text-purple-400 text-sm">89</div>
                        <div className="text-gray-400 text-xs">prospects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              100% Automated
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              AI Powered
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadEngineCTASection;