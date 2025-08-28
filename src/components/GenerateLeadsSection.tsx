import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

const GenerateLeadsSection = () => {
  const handleAutomationsClick = () => {
    window.location.href = '/agents-automations';
  };

  const handleTryNowClick = () => {
    window.location.href = '/lead-engine';
  };

  const handleSignUpClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Ambient Background Lights - Service Colors (Color Inverted) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main service orbs - same positions, inverted colors */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/40 to-pink-600/40 rounded-full blur-3xl opacity-65"></div>
        <div className="absolute bottom-1/3 left-1/4 w-88 h-88 bg-gradient-to-r from-purple-500/35 to-blue-400/35 rounded-full blur-3xl opacity-55 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows - same positions, inverted colors */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-blue-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/25 to-pink-600/25 rounded-full blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-tr from-blue-500/22 to-blue-400/22 rounded-full blur-2xl opacity-80 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner service glows - same positions, inverted colors */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-400/30 to-transparent rounded-full blur-xl opacity-45"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-pink-600/25 to-transparent rounded-full blur-xl opacity-50"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/25 to-transparent rounded-full blur-xl opacity-45"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Genereer leads moeiteloos
          </h2>
        </div>

        {/* Two Column Layout - Large left, Right with stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Large Workflows Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-8 h-full" style={{ 
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Start snel met pre-built workflows
                </h3>
                
                <button
                  onClick={handleAutomationsClick}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors group mb-8"
                >
                  Bekijk alle automations
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Workflows Preview */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Populairste Automations (248)</h4>
                    <p className="text-sm text-gray-300">Optimaliseer je sales funnel met onze ready-to-use flows</p>
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                    <span className="mr-2">💼</span> LinkedIn
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full">
                    Sales Navigator
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full">
                    Google
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-pink-500 text-white text-xs rounded-full">
                    Instagram
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full">
                    HubSpot
                  </span>
                </div>

                {/* Workflow Examples */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <Users className="w-4 h-4 text-blue-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">LinkedIn leads scrapen uit bedrijfsposts</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">80</div>
                      <div className="text-xs text-gray-400">Kliks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <TrendingUp className="w-4 h-4 text-pink-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">Connect met profielen uit LinkedIn search</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">56</div>
                      <div className="text-xs text-gray-400">Connections</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Integrations Card */}
            <div>
              <div className="rounded-2xl p-8" style={{ 
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    We werken met jouw bestaande tool stack
                  </h3>
                  
                  <button
                    onClick={handleTryNowClick}
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    Probeer nu
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Integration Icons Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-400 rounded text-white text-xs font-bold flex items-center justify-center">
                      SF
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gray-700 rounded text-white text-xs font-bold flex items-center justify-center">
                      ⚙️
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded text-white text-xs font-bold flex items-center justify-center">
                      HS
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                      LI
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white text-xs font-bold flex items-center justify-center">
                      Y
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-600">
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 rounded text-white text-xs font-bold flex items-center justify-center">
                      D
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div>
              <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-2xl p-8 relative overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 60px -8px rgba(59, 130, 246, 0.6)' }}>
                {/* Shadow overlay with gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/50 rounded-2xl"></div>
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Begin vandaag nog met warme leads genereren
                  </h3>
                </div>
                
                <button
                  onClick={handleSignUpClick}
                  className="relative z-10 w-full bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Meld je nu aan
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GenerateLeadsSection;