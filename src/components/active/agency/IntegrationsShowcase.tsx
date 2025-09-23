import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntegrationsShowcase = () => {
  const allIntegrations = [
    // CRM & Sales
    { name: 'Pipedrive', logo: 'https://logo.clearbit.com/pipedrive.com', type: 'clearbit' },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59', type: 'simple' },
    { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0', type: 'simple' },
    { name: 'Copper', logo: 'https://logo.clearbit.com/copper.com', type: 'clearbit' },
    { name: 'Zoho', logo: 'https://cdn.simpleicons.org/zoho/C83E2C', type: 'simple' },
    
    // Marketing & Advertising
    { name: 'Mailchimp', logo: 'https://cdn.simpleicons.org/mailchimp/FFE01B', type: 'simple' },
    { name: 'ActiveCampaign', logo: 'https://logo.clearbit.com/activecampaign.com', type: 'clearbit' },
    { name: 'Meta Ads', logo: 'https://cdn.simpleicons.org/meta/0866FF', type: 'simple' },
    { name: 'Google Ads', logo: 'https://cdn.simpleicons.org/googleads/4285F4', type: 'simple' },
    { name: 'Facebook', logo: 'https://cdn.simpleicons.org/facebook/1877F2', type: 'simple' },
    { name: 'Instagram', logo: 'https://cdn.simpleicons.org/instagram/E4405F', type: 'simple' },
    { name: 'TikTok Ads', logo: 'https://cdn.simpleicons.org/tiktok/FFFFFF', type: 'simple' },
    
    // Analytics & Tracking  
    { name: 'Google Analytics', logo: 'https://cdn.simpleicons.org/googleanalytics/E37400', type: 'simple' },
    { name: 'Hotjar', logo: 'https://cdn.simpleicons.org/hotjar/FD3A5C', type: 'simple' },
    { name: 'Tag Manager', logo: 'https://cdn.simpleicons.org/googletagmanager/246FDB', type: 'simple' },
    
    // Project Management
    { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana/F06A6A', type: 'simple' },
    { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/mondotcom/FFFFFF', type: 'simple' },
    { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello/0052CC', type: 'simple' },
    { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira/0052CC', type: 'simple' },
    
    // Communication & Productivity
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/FFFFFF', type: 'simple' },
    { name: 'Microsoft Teams', logo: 'https://cdn.simpleicons.org/microsoftteams/FFFFFF', type: 'simple' },
    { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google/4285F4', type: 'simple' },
    { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom/2D8CFF', type: 'simple' },
    { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/FFFFFF', type: 'simple' },
    { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF', type: 'simple' },
    
    // E-commerce & Payments
    { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/7AB55C', type: 'simple' },
    { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588A', type: 'simple' },
    { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/FFFFFF', type: 'simple' },
    { name: 'PayPal', logo: 'https://cdn.simpleicons.org/paypal/00457C', type: 'simple' },
    
    // Development & Automation
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF', type: 'simple' },
    { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26', type: 'simple' },
    { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00', type: 'simple' },
    { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC', type: 'simple' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E', type: 'simple' },
    
    // Design & Content Tools
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E', type: 'simple' },
    { name: 'Adobe', logo: 'https://cdn.simpleicons.org/adobe/FF0000', type: 'simple' },
    { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva/00C4CC', type: 'simple' },
    
    // Customer Support  
    { name: 'Intercom', logo: 'https://cdn.simpleicons.org/intercom/5D5FEF', type: 'simple' },
    { name: 'Zendesk', logo: 'https://cdn.simpleicons.org/zendesk/03A047', type: 'simple' },
    { name: 'Freshdesk', logo: 'https://cdn.simpleicons.org/freshworks/FF6900', type: 'simple' },
    
    // Productivity Tools
    { name: 'Calendly', logo: 'https://cdn.simpleicons.org/calendly/006BFF', type: 'simple' },
    { name: 'Dropbox', logo: 'https://cdn.simpleicons.org/dropbox/0061FF', type: 'simple' },
    { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio/F22F46', type: 'simple' },
    { name: 'Discord', logo: 'https://cdn.simpleicons.org/discord/5865F2', type: 'simple' },
    { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366', type: 'simple' },
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/FFFFFF', type: 'simple' }
  ];
  
  // Split integrations into two rows for different scroll speeds
  const topRowIntegrations = allIntegrations.slice(0, Math.ceil(allIntegrations.length / 2));
  const bottomRowIntegrations = allIntegrations.slice(Math.ceil(allIntegrations.length / 2));

  return (
    <section className="relative w-screen bg-black py-20 overflow-hidden">
      

      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Blue and Pink Ambient Backlights */}
      <div className="absolute inset-0 overflow-hidden z-5">
        {/* Large blue backlight - top left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-60" />
        
        {/* Large pink backlight - bottom right */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-60" />
        
        {/* Medium blue backlight - center left */}
        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl opacity-50" />
        
        {/* Medium pink backlight - center right */}
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl opacity-50" />
        
        {/* Small accent lights */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-300/10 rounded-full blur-xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-pink-300/10 rounded-full blur-xl opacity-40" />
        
        {/* Central subtle glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-pink-500/8 rounded-full blur-3xl opacity-30" />
      </div>
      
      {/* Top scrolling logos row */}
      <div className="relative mb-8 logo-fade z-20">
        <div className="flex scroll-left">
          {/* Double the logos for seamless infinite scroll */}
          {[...topRowIntegrations, ...topRowIntegrations].map((integration, index) => (
            <div
              key={`top-${integration.name}-${index}`}
              className="flex items-center justify-center mx-10 flex-shrink-0"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className={`w-auto ${integration.name === 'Zoho' || integration.name === 'WooCommerce' ? 'h-10' : 'h-8'}`}
                style={{
                  opacity: 0.9
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Center content */}
      <div className="relative text-left px-6 py-8 z-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight tracking-tight" 
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
                letterSpacing: '-0.03em'
              }}>
            <div className="space-y-2">
              <div style={{ fontWeight: '300' }}>
                Niet jij die zich aanpast aan het platform,
              </div>
              <div style={{ fontWeight: '400' }}>
                maar het platform dat zich aanpast aan jou.
              </div>
            </div>
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl text-left">
            Of je nu met HubSpot of Pipedrive werkt, Slack of Teams, Airtable of Notion.<br/>
            We verbinden alles in één naadloos platform.
          </p>
          
          {/* CTA */}
          <div className="mt-8">
            <button className="group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 text-base font-medium">
              <span className="relative">
                Staat jouw tool er niet bij? Challenge accepted.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom scrolling logos row */}
      <div className="relative mt-8 logo-fade z-20">
        <div className="flex scroll-left-slow">
          {/* Double the logos for seamless infinite scroll */}
          {[...bottomRowIntegrations, ...bottomRowIntegrations].map((integration, index) => (
            <div
              key={`bottom-${integration.name}-${index}`}
              className="flex items-center justify-center mx-10 flex-shrink-0"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className={`w-auto ${integration.name === 'Zoho' || integration.name === 'WooCommerce' ? 'h-10' : 'h-8'}`}
                style={{
                  opacity: 0.9
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-30" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-30" />
      
      {/* Ultra subtle top and bottom fade to black */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black via-black/20 to-transparent pointer-events-none z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default IntegrationsShowcase;