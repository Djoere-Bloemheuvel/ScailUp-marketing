import React from 'react';
import { Mail, Linkedin, Building2, ArrowRight, Users, Target, Briefcase } from 'lucide-react';

const AgencyAIAgentsSection = () => {
  const agents = [
    {
      title: 'Lead Kwalificatie Automatisering',
      description: 'Stop met handmatige lead scoring. Automatisch de beste prospects identificeren en doorsturen naar sales.',
      icon: Building2,
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/30 to-blue-800/30',
      href: '/agency/lead-qualification',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Building2 className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-white">Custom Agent</span>
            </div>
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              In ontwikkeling
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Agent Specificaties</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-white">CRM Integratie</span>
                <span className="text-green-400">✓ Salesforce</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white">Workflow</span>
                <span className="text-green-400">✓ Custom</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white">API Endpoints</span>
                <span className="text-green-400">✓ Ready</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Follow-up Sequence Automatisering',
      description: 'Geen prospect valt meer door de mazen. Automatische, gepersonaliseerde follow-ups die converteren.',
      icon: Target,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-pink-900/30 to-purple-900/30',
      href: '/agency/follow-up-automation',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Target className="w-3 h-3 text-pink-400" />
              <span className="text-xs font-medium text-white">Process Automation</span>
            </div>
            <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              Live
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white">Lead kwalificatie</span>
                <span className="text-xs text-green-400">Automated</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white">Follow-up sequenties</span>
                <span className="text-xs text-green-400">Running</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white">CRM updates</span>
                <span className="text-xs text-green-400">Real-time</span>
              </div>
              <div className="text-xs text-gray-400 mt-2">Efficiency: +340%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Client Onboarding Stroomlijning',
      description: 'Van 2 weken naar 2 dagen. Automatisch nieuwe klanten onboarden zonder kwaliteitsverlies.',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-900/30 to-teal-900/30',
      href: '/agency/onboarding-automation',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Users className="w-3 h-3 text-green-400" />
              <span className="text-xs font-medium text-white">API Integraties</span>
            </div>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Connected
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700">
            <div className="space-y-1">
              <div className="flex items-center text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-white">CRM Synchronisatie</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-white">Marketing Platform</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-white">Analytics Dashboard</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Real-time sync</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <span className="block sm:inline">Custom ontwikkeling</span>
            <span className="sm:hidden"> </span><br className="hidden sm:block" />
            <span className="font-bold">voor unique cases.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Standaard oplossingen niet genoeg? Wij ontwikkelen <span className="font-semibold text-white">custom AI agents en automations</span> 
            die perfect aansluiten bij jouw specifieke business processen.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Background with Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative ${agent.bgColor} backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:transform group-hover:scale-[1.02]`}>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {agent.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Mockup */}
                  <div className="mb-6">
                    {agent.mockup}
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = agent.href;
                      }
                    }}
                    className="group/btn flex items-center text-white hover:text-blue-400 transition-colors text-sm sm:text-base font-semibold"
                  >
                    <span>Meer details</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/contact';
              }
            }}
            className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 group"
          >
            <span className="flex items-center">
              Bespreek je project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgencyAIAgentsSection;