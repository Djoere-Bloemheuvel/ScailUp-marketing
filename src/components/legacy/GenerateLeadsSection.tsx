import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp, Mail, Database } from 'lucide-react';

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
            Genereer moeiteloos leads
          </h2>
        </div>

        {/* Two Column Layout - Large left, Right with stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          
          {/* Left Column - Large Workflows Card */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden" style={{ 
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: '100%'
            }}>
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Start direct met AI-first outbound
                </h3>
                
                <button
                  onClick={handleAutomationsClick}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors group mb-4 md:mb-6 lg:mb-8 text-sm md:text-base"
                >
                  Bekijk alle automations
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Browser Window - Email Campaign Dashboard */}
              <div 
                className="absolute -bottom-4 md:-bottom-6 lg:-bottom-8 -right-1 md:-right-2 lg:-right-3 w-[90%] md:w-[85%] lg:w-[88%] h-[70%] md:h-[75%] lg:h-[80%] rounded-tl-xl md:rounded-tl-2xl rounded-tr-xl md:rounded-tr-2xl shadow-2xl border overflow-hidden"
                style={{ 
                  transform: 'rotate(-1deg)', 
                  transformOrigin: 'bottom right',
                  backgroundColor: '#0A0A0A',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: '1.5px'
                }}
              >
                {/* Browser Top Bar */}
                <div className="flex items-center px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 border-b" style={{ 
                  borderColor: 'rgba(255, 255, 255, 0.05)',
                  backgroundColor: '#0A0A0A'
                }}>
                  {/* Traffic Light Buttons */}
                  <div className="flex items-center space-x-1 md:space-x-1.5 mr-2 md:mr-3">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.6)' }}></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ backgroundColor: 'rgba(245, 158, 11, 0.6)' }}></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.6)' }}></div>
                  </div>
                  
                  {/* Address Bar */}
                  <div className="flex-1 max-w-[200px] md:max-w-sm">
                    <div className="rounded-md px-2 md:px-2.5 py-0.5 md:py-1 text-xs text-gray-500 border" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'rgba(255, 255, 255, 0.05)'
                    }}>
                      <span className="text-green-400 mr-1">🔐</span>
                      <span className="hidden md:inline">app.buildrs.ai/campagnes</span>
                      <span className="md:hidden">buildrs.ai</span>
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="p-2 md:p-3 lg:p-4 border-b" style={{ 
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#0A0A0A'
                }}>
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white text-sm md:text-base lg:text-lg truncate">Lead Generation Campaign</h4>
                      <p className="text-xs md:text-sm text-gray-400 truncate">Geautomatiseerde outreach en lead nurturing</p>
                    </div>
                    <div className="bg-blue-500 text-white px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium whitespace-nowrap ml-2">
                      <span className="hidden md:inline">+ Nieuwe Campagne</span>
                      <span className="md:hidden">+ Nieuw</span>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="p-2 md:p-3" style={{ backgroundColor: '#0A0A0A' }}>
                  <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-2 md:mb-3">
                    
                    {/* Messages Sent */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl p-2 md:p-3 text-white border border-blue-500/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs opacity-90 font-medium truncate">Berichten</span>
                        <Mail className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-75 flex-shrink-0" />
                      </div>
                      <div className="text-sm md:text-lg font-bold leading-tight">7,869</div>
                      <div className="text-xs opacity-75 leading-tight">verzonden</div>
                    </div>

                    {/* Response Rate */}
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg md:rounded-xl p-2 md:p-3 text-white border border-green-500/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs opacity-90 font-medium truncate">Reacties</span>
                        <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-75 flex-shrink-0" />
                      </div>
                      <div className="text-sm md:text-lg font-bold leading-tight">4.7%</div>
                      <div className="text-xs opacity-75 leading-tight">reactie</div>
                    </div>

                    {/* Meetings Booked */}
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg md:rounded-xl p-2 md:p-3 text-white border border-purple-500/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs opacity-90 font-medium truncate">Afspraken</span>
                        <Users className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-75 flex-shrink-0" />
                      </div>
                      <div className="text-sm md:text-lg font-bold leading-tight">84</div>
                      <div className="text-xs opacity-75 leading-tight">geboekt</div>
                    </div>

                  </div>

                  {/* Campaign List Preview */}
                  <div className="rounded-md md:rounded-lg p-2 md:p-2.5 border" style={{
                    backgroundColor: '#0A0A0A',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white text-xs md:text-sm truncate">Actieve Campagnes</h5>
                      <div className="flex space-x-1">
                        <button className="text-xs px-1.5 md:px-2 py-0.5 rounded border text-gray-300 hover:bg-gray-800" style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}>Filter</button>
                        <button className="hidden md:inline-block text-xs px-2 py-0.5 rounded border text-gray-300 hover:bg-gray-800" style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}>Export</button>
                      </div>
                    </div>
                    
                    {/* Sample Campaign Rows */}
                    <div className="space-y-1 md:space-y-1.5 text-xs">
                      <div className="flex items-center justify-between p-1.5 md:p-2 rounded border-l-2 border-l-blue-500" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)'
                      }}>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-gray-200 truncate text-xs">Marketing Lead Engine</div>
                          <div className="text-gray-400 text-xs truncate">B2B Tech • 3 dagen</div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div className="font-bold text-blue-400 text-xs">28%</div>
                          <div className="text-gray-400 text-xs">245</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-1.5 md:p-2 rounded border-l-2 border-l-green-500" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)'
                      }}>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-gray-200 truncate text-xs">SaaS Outreach Pro</div>
                          <div className="text-gray-400 text-xs truncate">Enterprise • 1 week</div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div className="font-bold text-green-400 text-xs">19%</div>
                          <div className="text-gray-400 text-xs">142</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-1.5 md:p-2 rounded border-l-2 border-l-purple-500" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)'
                      }}>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-gray-200 truncate text-xs">LinkedIn Connect Flow</div>
                          <div className="text-gray-400 text-xs truncate">B2B Sales • 5 dagen</div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div className="font-bold text-purple-400 text-xs">31%</div>
                          <div className="text-gray-400 text-xs">89</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Analytics Card */}
            <div>
              <div className="rounded-2xl p-12 h-80 relative overflow-hidden" style={{ 
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {/* Header Content */}
                <div className="relative z-10 mb-6 -mt-2">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-2 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Elke week meer meetings
                    <br />
                    <span className="text-white/70">Zie je omzet groeien</span>
                    <br />
                    <span className="font-bold text-white text-2xl md:text-3xl">Zoals het hoort.</span>
                  </h3>
                </div>

                {/* Full Card Background Analytics Line */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  
                  {/* Single Elegant Line Chart - Full Background */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                    {/* Main Performance Line - Elegant curve */}
                    <defs>
                      <linearGradient id="cardLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6"/>
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.7"/>
                        <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.8"/>
                      </linearGradient>
                      <filter id="cardGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Main elegant curved line across full card */}
                    <path
                      d="M 20,240 Q 80,220 120,180 T 200,140 T 280,100 T 380,70"
                      fill="none"
                      stroke="url(#cardLineGradient)"
                      strokeWidth="2"
                      filter="url(#cardGlow)"
                      className="drop-shadow-lg"
                    />

                    {/* Additional subtle background lines */}
                    <path
                      d="M 20,260 Q 80,250 120,220 T 200,190 T 280,160 T 380,140"
                      fill="none"
                      stroke="url(#cardLineGradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="drop-shadow-sm"
                    />

                    {/* Subtle data points */}
                    <circle cx="380" cy="70" r="3" fill="rgb(236, 72, 153)" className="drop-shadow-lg opacity-80" />
                    <circle cx="280" cy="100" r="2.5" fill="rgb(147, 51, 234)" className="drop-shadow-lg opacity-70" />
                    <circle cx="200" cy="140" r="2" fill="rgb(99, 102, 241)" className="drop-shadow-lg opacity-60" />
                  </svg>

                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  {/* Response Rate Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="text-right">
                      <div className="text-2xl font-light text-white mb-1">8.4%</div>
                      <div className="text-xs text-white/60 uppercase tracking-widest">Response Rate</div>
                    </div>
                  </div>


                  {/* Meeting Conversion */}
                  <div className="absolute bottom-6 right-4">
                    <div className="text-right">
                      <div className="text-lg font-medium text-white mb-0.5">84</div>
                      <div className="text-xs text-white/60">Meetings geboekt</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Card */}
            <div>
              <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-2xl p-8 relative overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 30px -8px rgba(59, 130, 246, 0.3)' }}>
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