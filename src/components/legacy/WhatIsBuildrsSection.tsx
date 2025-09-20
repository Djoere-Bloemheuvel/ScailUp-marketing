import React from 'react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

const WhatIsBuildrsSection = () => {
  const handleDemoClick = () => {
    window.location.href = '/contact';
  };

  const handleGetStartedClick = () => {
    window.location.href = '/lead-engine';
  };

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Ambient Background Lights - Service Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main service orbs - matching the 3 agents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-2xl opacity-60 will-change-transform"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/30 rounded-full blur-2xl opacity-65"></div>
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-blue-400/25 rounded-full blur-2xl opacity-55"></div>
        
        {/* Secondary ambient glows - service color combinations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-xl opacity-75"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500/18 rounded-full blur-xl opacity-80"></div>
        
        {/* Corner service glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/25 rounded-full blur-lg opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/25 rounded-full blur-lg opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-blue-400/20 rounded-full blur-lg opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-lg opacity-45"></div>
        
      </div>

      <div className="relative z-20 w-[85%] mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl" style={{ 
        backgroundColor: '#0A0A0A',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="w-[85%] mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Browser Mockup */}
          <div className="relative order-2 lg:order-1" style={{ 
            transform: 'perspective(1000px) rotateY(4deg) rotateX(1deg)',
            transformOrigin: 'center center'
          }}>
            {/* Multi-layer floating glow effects - performance optimized */}
            <div className="absolute -inset-6 bg-blue-500/15 rounded-3xl blur-xl opacity-50 will-change-transform"></div>
            <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-lg opacity-60"></div>
            
            {/* Browser Window - Buildrs Platform Dashboard */}
            <div 
              className="relative w-full h-[450px] rounded-3xl overflow-hidden group shadow-2xl"
              style={{ 
                backgroundColor: '#0A0A0A',
                boxShadow: '0 60px 120px rgba(0, 0, 0, 0.9), 0 30px 60px rgba(59, 130, 246, 0.4), 0 15px 30px rgba(147, 51, 234, 0.3), 0 5px 15px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Minimal glass reflection overlay - static */}
              <div className="absolute top-0 left-0 w-full h-1/4 bg-white/3 pointer-events-none"></div>
              {/* Browser Top Bar */}
              <div className="relative z-10 flex items-center px-4 py-3 border-b" style={{ 
                borderColor: 'rgba(255, 255, 255, 0.08)',
                backgroundColor: '#000000'
              }}>
                {/* Traffic Light Buttons */}
                <div className="flex items-center space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                
                {/* Address Bar */}
                <div className="flex-1 max-w-sm">
                  <div className="rounded-xl px-4 py-2 text-sm text-gray-300 border" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.15)'
                  }}>
                    <span className="text-green-400 mr-2">🔐</span>
                    app.buildrs.ai/platform
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="p-6 border-b" style={{ 
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: '#0A0A0A'
              }}>
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-lg">Buildrs Platform</h4>
                    <p className="text-sm text-gray-400">AI-gedreven outbound in één platform</p>
                  </div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium">
                    + Nieuw Project
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6" style={{ backgroundColor: '#0A0A0A' }}>
                
                {/* Stats Overview */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-600 rounded-xl p-4 text-white border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90 font-medium">AI Agents</span>
                      <Sparkles className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-xl font-bold">12</div>
                    <div className="text-xs opacity-75">Actief</div>
                  </div>

                  <div className="bg-green-600 rounded-xl p-4 text-white border border-green-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90 font-medium">Prospects</span>
                      <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="text-xl font-bold">500k+</div>
                    <div className="text-xs opacity-75">Database</div>
                  </div>

                  <div className="bg-purple-600 rounded-xl p-4 text-white border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90 font-medium">Automation</span>
                      <Play className="w-4 h-4 opacity-75" />
                    </div>
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-xs opacity-75">Running</div>
                  </div>
                </div>

                {/* Feature Showcase */}
                <div className="rounded-xl p-4 border" style={{
                  backgroundColor: '#0A0A0A',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-semibold text-white text-sm">Actieve Workflows</h5>
                    <div className="flex space-x-2">
                      <button className="text-xs px-2 py-1 rounded border text-gray-300" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.1)'
                      }}>View All</button>
                    </div>
                  </div>
                  
                  {/* Workflow Items */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 rounded border-l-2 border-l-blue-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200">LinkedIn Outreach Agent</div>
                        <div className="text-gray-400 text-xs">B2B • Geautomatiseerd</div>
                      </div>
                      <div className="text-right ml-3">
                        <div className="font-bold text-blue-400">Active</div>
                        <div className="text-gray-400 text-xs">124 sent</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded border-l-2 border-l-green-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200">Email Sequence Pro</div>
                        <div className="text-gray-400 text-xs">SaaS • Multi-touch</div>
                      </div>
                      <div className="text-right ml-3">
                        <div className="font-bold text-green-400">Running</div>
                        <div className="text-gray-400 text-xs">89 leads</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded border-l-2 border-l-purple-500" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-200">Meeting Automation</div>
                        <div className="text-gray-400 text-xs">Calendar • Integration</div>
                      </div>
                      <div className="text-right ml-3">
                        <div className="font-bold text-purple-400">Live</div>
                        <div className="text-gray-400 text-xs">31 booked</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="lg:pl-8">
              {/* Main Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-5 lg:mb-6 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Wat is Buildrs?
                <br />
                <span className="text-white/70">Jouw outbound in één platform.</span>
              </h2>
              
              {/* Description Paragraphs */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-7 lg:mb-8">
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  AI-agents, lead database, email sequenties en meeting automation.
                  <br />
                  <span className="font-medium text-white">Alles wat outbound hoort te zijn.</span>
                </p>
                
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Van 500k+ prospects naar geboekte meetings — volledig geautomatiseerd.
                  <br />
                  <span className="font-medium text-white">Focus op wat telt: jouw klanten.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 bg-white text-black font-medium sm:font-semibold rounded-full hover:bg-gray-100 hover:scale-102 active:scale-98 transition-all text-xs sm:text-sm md:text-base"
                >
                  Plan een demo
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                
                <button
                  onClick={handleGetStartedClick}
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 bg-transparent border border-white/20 md:border-2 text-white font-medium sm:font-semibold rounded-full hover:bg-white/10 hover:scale-102 active:scale-98 transition-all group text-xs sm:text-sm md:text-base"
                >
                  Ontdek de functies
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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

export default WhatIsBuildrsSection;