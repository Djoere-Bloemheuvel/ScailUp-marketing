import React from 'react';
import { motion } from 'framer-motion';
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-600/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full blur-3xl opacity-65"></div>
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-gradient-to-r from-blue-400/35 to-purple-500/35 rounded-full blur-3xl opacity-55 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows - service color combinations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/15 via-purple-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-blue-500/25 to-blue-400/25 rounded-full blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-tr from-purple-500/22 to-pink-600/22 rounded-full blur-2xl opacity-80 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner service glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-blue-400/25 to-transparent rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-600/25 to-transparent rounded-full blur-xl opacity-45"></div>
        
      </div>

      <div className="relative z-20 w-[85%] mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl" style={{ 
        backgroundColor: '#0A0A0A',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="w-[85%] mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Video/Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 rounded-3xl p-8 overflow-hidden">
              
              {/* Background Decorative Elements */}
              <div className="absolute top-6 right-6">
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute top-12 right-12">
                <Sparkles className="w-4 h-4 text-green-500" />
              </div>
              
              {/* Blue Accent Lines */}
              <div className="absolute bottom-8 left-0 w-full h-2 bg-blue-500 rounded-r-full"></div>
              <div className="absolute bottom-12 left-0 w-3/4 h-1 bg-blue-400 rounded-r-full"></div>
              
              {/* Main Content Area */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg">
                
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Hoe Buildrs
                    <br />
                    werkt
                  </h3>
                </div>
                
                {/* Person Image Placeholder */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  {/* Play Button */}
                  <button
                    className="absolute inset-0 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                    onClick={() => {
                      // Video play functionality would go here
                      console.log('Play video');
                    }}
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </button>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-center">
                  Ontdek in 3 minuten hoe onze AI-agents
                  <br />
                  jouw outbound transformeren
                </p>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 hover:scale-102 active:scale-98 transition-all"
                >
                  Plan een demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <button
                  onClick={handleGetStartedClick}
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-102 active:scale-98 transition-all group"
                >
                  Ontdek de functies
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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