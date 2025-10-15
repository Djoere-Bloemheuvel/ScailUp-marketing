import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar } from 'lucide-react';
import { trackEvent, EVENTS } from '@/utils/analytics';

const MarketingBureauFinalCTA = () => {
  return (
    <section 
      className="relative bg-gradient-to-br from-black via-black to-gray-900/50"
      data-section-theme="dark"
      data-section-accent="purple"
      data-section-id="finalcta"
      data-lighting-intensity="moderate"
    >
      {/* Ambient Background Lighting - matches ServicesOfferingSection */}
      <div className="absolute inset-0 z-0" style={{ contain: 'paint', transform: 'translateZ(0)' }}>
        {/* Top-left subtle blue glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-25" 
          style={{
            top: '15%',
            left: '8%',
            width: '350px',
            height: '250px',
            background: 'radial-gradient(ellipse 350px 250px, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Behind left panel - gentle blue glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-22" 
          style={{
            top: '35%',
            left: '5%',
            width: '300px',
            height: '400px',
            background: 'radial-gradient(ellipse 300px 400px, rgba(96, 165, 250, 0.25) 0%, rgba(96, 165, 250, 0.15) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Middle-right pink glow cloud */}
        <div 
          className="absolute rounded-full blur-3xl opacity-15" 
          style={{
            top: '45%',
            right: '10%',
            width: '450px',
            height: '500px',
            background: 'radial-gradient(ellipse 450px 500px, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.08) 25%, rgba(244, 114, 182, 0.04) 60%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Bottom-left gentle blue accent */}
        <div 
          className="absolute rounded-full blur-2xl opacity-22" 
          style={{
            bottom: '20%',
            left: '12%',
            width: '240px',
            height: '180px',
            background: 'radial-gradient(ellipse 240px 180px, rgba(96, 165, 250, 0.28) 0%, rgba(96, 165, 250, 0.18) 60%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Top-right pink glow cloud */}
        <div 
          className="absolute rounded-full blur-3xl opacity-12" 
          style={{
            top: '20%',
            right: '5%',
            width: '400px',
            height: '450px',
            background: 'radial-gradient(ellipse 400px 450px, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.06) 30%, rgba(244, 114, 182, 0.03) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* SF Pro Display typography matching ServicesOfferingSection */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2" />
            <span className="text-xs text-white/80 uppercase tracking-wide font-medium">
              Marketing Bureau Specialist
            </span>
          </div>
          
          {/* Main Headline - SF Pro Display style */}
          <h2
            className="text-white font-light mb-8"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              fontWeight: '200'
            }}
          >
            <div className="space-y-1">
              <div style={{ fontWeight: '200' }}>
                Zullen we even
              </div>
              <div style={{ fontWeight: '500' }}>
                bellen?
              </div>
            </div>
          </h2>
          
          {/* Description */}
          <p
            className="text-white/90 leading-relaxed max-w-2xl mx-auto mb-12"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '1.6',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
            }}
          >
            Geen lange formulieren. Geen verkooppraatje. Gewoon een eerlijk gesprek over wat er mogelijk is voor jouw bureau.
          </p>

          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mx-auto mb-16" />
        </div>
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Simple Stats */}
          <div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 mb-8">
              <div className="text-center lg:text-left">
                <div 
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '200',
                    lineHeight: '1'
                  }}
                >
                  2-4x
                </div>
                <div 
                  className="text-white/60 uppercase tracking-wide"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  Meer leads
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div 
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '200',
                    lineHeight: '1'
                  }}
                >
                  70%
                </div>
                <div 
                  className="text-white/60 uppercase tracking-wide"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  Tijdsbesparing
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div 
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '200',
                    lineHeight: '1'
                  }}
                >
                  15 min
                </div>
                <div 
                  className="text-white/60 uppercase tracking-wide"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  Setup tijd
                </div>
              </div>
            </div>
            
            <div 
              className="text-white/70 text-center lg:text-left"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontWeight: '300',
                lineHeight: '1.6',
                fontSize: '0.875rem'
              }}
            >
              ✓ Geen gedoe met ingewikkelde tools<br/>
              ✓ Alles blijft volledig in jouw eigendom<br/>
              ✓ Resultaat binnen 14 dagen zichtbaar
            </div>
          </div>
          
          {/* Right: Lead Form - Import the Astro component */}
          <div className="marketing-bureau-form">
            {/* This will be replaced with the actual LeadForm component */}
          </div>
          
        </div>
      </div>
      
      {/* Subtle fade to black at bottom - matches ServicesOfferingSection */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default MarketingBureauFinalCTA;