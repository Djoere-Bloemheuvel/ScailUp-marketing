import React from 'react';
import { Mail, Linkedin, Building2, ArrowRight } from 'lucide-react';

const AIAgentsSection = () => {
  const agents = [
    {
      title: 'Outbound Email Agent',
      description: 'Personaliseert en verstuurt automatisch email sequences die daadwerkelijk responses krijgen.',
      icon: Mail,
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/30 to-blue-800/30',
      href: '/lead-engine/lead-database',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-white">Email Agent</span>
            </div>
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Schrijft email
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Aan: Jan</div>
            <div className="space-y-1">
              <p className="text-xs text-white font-medium">Gepersonaliseerde Email Draft</p>
              <p className="text-xs text-gray-300">Hoi <span className="bg-blue-500 text-white px-1 rounded">{'{first_name}'}</span>,</p>
              <p className="text-xs text-gray-300">Ik zag dat <span className="bg-blue-500 text-white px-1 rounded">{'{recent_achievement}'}</span>. Wat gaaf! <span className="bg-blue-500 text-white px-1 rounded">{'{company}'}</span> groeit hard in <span className="bg-blue-500 text-white px-1 rounded">{'{industry}'}</span>.</p>
              <p className="text-xs text-gray-300">Ik help bedrijven met <span className="bg-blue-500 text-white px-1 rounded">{'{pain_point}'}</span>. 5 min call deze week?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'LinkedIn Outreach Agent',
      description: 'Identificeert en kwalificeert automatisch leads uit jouw database van 500k+ decision makers.',
      icon: Linkedin,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-pink-900/30 to-purple-900/30',
      href: '/lead-engine/connect-to-client',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <span className="text-xs font-medium text-white">LinkedIn Outreach</span>
            </div>
            <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              Connecting
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700 border-l-4 border-l-pink-500">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              <div>
                <p className="text-xs font-semibold text-white">Marieke van der Berg</p>
                <p className="text-xs text-gray-400">Marketing Manager bij InnovaTech</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded p-2 text-xs text-gray-300 mb-1">
              "Hoi <span className="bg-pink-500 text-white px-1 rounded">{'{first_name}'}</span>, ik zag dat <span className="bg-pink-500 text-white px-1 rounded">{'{interessante_insight}'}</span>. Wat goed! Ik help bedrijven zoals <span className="bg-pink-500 text-white px-1 rounded">{'{company}'}</span> met <span className="bg-pink-500 text-white px-1 rounded">{'{pain_point}'}</span>. Zullen we verbinden?"
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-pink-400 font-medium">Connectieverzoek verzonden</span>
              <span className="text-gray-500">3 min geleden</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Key Account Agent', 
      description: 'Plant automatisch meetings en zorgt voor naadloze overdracht van inbox naar agenda.',
      icon: Building2,
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/30 to-blue-800/30',
      href: '/lead-engine/inbox-to-meeting',
      mockup: (
        <div className="bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-700 scale-90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Building2 className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-white">Key Account ABM</span>
            </div>
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Targeting
            </div>
          </div>
          <div className="bg-gray-800 rounded p-2 border border-gray-700 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">TechStart Nederland</p>
                  <p className="text-xs text-gray-400">Target Account</p>
                </div>
              </div>
              <div className="text-xs text-blue-400 font-medium">3/5 contacts</div>
            </div>
            <div className="bg-gray-700 rounded p-2 text-xs text-gray-300 mb-1">
              "Hoi <span className="bg-blue-500 text-white px-1 rounded">{'{stakeholder_name}'}</span>, zag jullie <span className="bg-blue-500 text-white px-1 rounded">{'{company_news}'}</span>. Perfect timing! Wij helpen <span className="bg-blue-500 text-white px-1 rounded">{'{industry}'}</span> bedrijven met <span className="bg-blue-500 text-white px-1 rounded">{'{solution}'}</span>."
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-400 font-medium">ABM sequence actief</span>
              <span className="text-gray-500">5 touchpoints</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative pt-24 pb-16 bg-black overflow-hidden" style={{ minHeight: '60vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="relative">
            {/* Optimized blacklight glow - using transform3d for GPU acceleration */}
            <div className="absolute top-0 left-1/2 pointer-events-none will-change-transform" style={{ transform: 'translate3d(-50%, 0, 0)' }}>
              <div className="w-[1400px] h-32 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent rounded-full blur-3xl will-change-transform"></div>
              <div className="w-[1200px] h-24 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rounded-full blur-2xl will-change-transform" style={{ transform: 'translate3d(0, -2.5rem, 0)' }}></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Buildrs Agents — <span className="text-white/70">Jouw AI outbound team.</span>
            </h2>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              <span className="font-medium text-white">24/7 leads identificeren, personaliseren en meetings boeken.</span>
            </p>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.title}
                className="relative group"
              >
                {/* Card - optimized for performance */}
                <div className="rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative will-change-transform" style={{ 
                  backgroundColor: '#0A0A0A', 
                  boxShadow: `0 0 40px -10px ${agent.color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                  border: `1px solid ${agent.color.includes('pink') ? 'rgba(236, 72, 153, 0.1)' : 'rgba(59, 130, 246, 0.1)'}`
                }}>
                  
                  {/* Enhanced Colored Header with Mockup - performance optimized */}
                  <div className={`${agent.bgColor} p-6 pb-8 relative overflow-hidden will-change-transform`}>
                    {/* Simplified background patterns for better performance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 will-change-transform"></div>
                    <div className="relative z-10 h-40 flex items-center justify-center">
                      <div className="w-full max-w-sm">
                        <div className="relative will-change-transform">
                          {/* Simplified shadow */}
                          <div className="absolute inset-0 bg-black/20 rounded-lg will-change-transform" style={{ transform: 'translate3d(8px, 8px, 0)' }}></div>
                          <div className="relative z-10">
                            {agent.mockup}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {agent.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                      {agent.description}
                    </p>

                    <button
                      onClick={() => window.location.href = agent.href}
                      className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
                    >
                      Leer meer over {agent.title.toLowerCase()}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AIAgentsSection;