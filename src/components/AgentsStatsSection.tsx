import { motion } from 'framer-motion';

const AgentsStatsSection = () => {
  return (
    <section className="relative bg-black py-24 lg:py-40 overflow-hidden ambient">
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
        
        {/* Subtle fade to black overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="relative w-full z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

          {/* Single Large Container - Vercel Style - Responsive */}
          <div className="border border-white/5 sm:border-2 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-[0_0_20px_rgba(192,192,192,0.08)] sm:shadow-[0_0_30px_rgba(192,192,192,0.12)]">
            
            {/* Top Section - Responsive Stacked */}
            <div className="grid grid-cols-1 xl:grid-cols-2">
              
              {/* Left: Deploy AI Section */}
              <div className="border-r-0 xl:border-r border-white/5">
                {/* Browser Header */}
                <div className="bg-[#0a0a0a] border-b border-white/5 px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white/60 text-xs sm:text-sm ml-3 sm:ml-4">Deploy AI</span>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                
                {/* Title and description */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                    Deploy AI in seconden. <span className="text-white/60">Toegang tot onze plug & play agents. Volledig afgestemd op jouw business en direct inzetbaar.</span>
                  </h3>
                </div>
                
                {/* AI Flow Diagram - Responsive */}
                <div className="relative">
                  {/* Mobile: Vertical Stack */}
                  <div className="block lg:hidden space-y-4">
                    {/* Form mockup */}
                    <div className="bg-black/60 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10">
                      <div className="flex gap-1 mb-3 sm:mb-4">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div className="h-2.5 sm:h-3 bg-white/10 rounded"></div>
                        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-3/4"></div>
                        <div className="h-8 sm:h-10 bg-blue-500/20 rounded border border-blue-500/30"></div>
                        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-2/3"></div>
                        <div className="h-8 sm:h-10 bg-white/5 rounded border border-white/10"></div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    
                    {/* AI Models */}
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { name: 'Speed to Lead', icon: 'S', colors: 'from-blue-500 to-cyan-500' },
                        { name: 'Seal The Deal', icon: 'D', colors: 'from-green-500 to-emerald-500' },
                        { name: 'Onboard & Beyond', icon: 'O', colors: 'from-orange-500 to-red-500' },
                        { name: 'Custom AI Agent', icon: 'C', colors: 'from-purple-500 to-pink-500' }
                      ].map((model) => (
                        <div key={model.name} className="bg-black/80 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-white/10 flex items-center gap-2.5 sm:gap-3">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${model.colors} rounded flex items-center justify-center text-xs font-bold text-white`}>
                            {model.icon}
                          </div>
                          <span className="text-white/80 text-sm font-medium">{model.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Desktop: Horizontal Flow */}
                  <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                    {/* Form mockup */}
                    <div className="bg-black/60 rounded-xl p-4 lg:p-5 w-48 xl:w-64 border border-white/10 flex-shrink-0">
                      <div className="flex gap-1 mb-3 lg:mb-4">
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-3 lg:space-y-4">
                        <div className="h-2.5 lg:h-3 bg-white/10 rounded"></div>
                        <div className="h-2.5 lg:h-3 bg-white/10 rounded w-3/4"></div>
                        <div className="h-8 lg:h-10 bg-blue-500/20 rounded border border-blue-500/30"></div>
                        <div className="h-2.5 lg:h-3 bg-white/10 rounded w-2/3"></div>
                        <div className="h-8 lg:h-10 bg-white/5 rounded border border-white/10"></div>
                      </div>
                    </div>
                    
                    {/* Arrow connections */}
                    <div className="flex flex-col gap-8 lg:gap-11">
                      {['rgba(59, 130, 246, 0.6)', 'rgba(16, 185, 129, 0.6)', 'rgba(249, 115, 22, 0.6)', 'rgba(168, 85, 247, 0.6)'].map((color, i) => (
                        <svg key={i} className="w-4 h-3 lg:w-6 lg:h-4" viewBox="0 0 24 16" fill="none">
                          <path d="M0 8h20" stroke={color} strokeWidth="2"/>
                          <path d="M16 4l4 4-4 4" stroke={color} strokeWidth="2" fill="none"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* AI Models flow */}
                    <div className="flex-1 space-y-2.5 lg:space-y-3">
                      {[
                        { name: 'Speed to Lead', icon: 'S', colors: 'from-blue-500 to-cyan-500' },
                        { name: 'Seal The Deal', icon: 'D', colors: 'from-green-500 to-emerald-500' },
                        { name: 'Onboard & Beyond', icon: 'O', colors: 'from-orange-500 to-red-500' },
                        { name: 'Custom AI Agent', icon: 'C', colors: 'from-purple-500 to-pink-500' }
                      ].map((model) => (
                        <div key={model.name} className="bg-black/80 rounded-lg px-3 lg:px-4 py-2.5 lg:py-3 border border-white/10 flex items-center gap-2.5 lg:gap-3">
                          <div className={`w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r ${model.colors} rounded flex items-center justify-center text-xs font-bold text-white`}>
                            {model.icon}
                          </div>
                          <span className="text-white/80 text-sm font-medium">{model.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Right: Chat Interface */}
              <div>
                {/* Chat Header */}
                <div className="bg-[#0a0a0a] border-b border-white/5 px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-2.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/80 font-medium text-xs sm:text-sm">AI Assistant</span>
                  <span className="text-white/40 text-xs sm:text-sm ml-auto">Online</span>
                </div>
                
                {/* Chat Content - Responsive Height */}
                <div className="p-3 sm:p-4 h-64 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-transparent via-blue-500/[0.01] to-purple-500/[0.02] relative">
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2%, transparent 0%)',
                    backgroundSize: '100px 100px'
                  }}></div>
                  
                  <div className="space-y-1.5 sm:space-y-2 relative z-10">
                    {[
                      { type: 'user', text: 'Hallo! Wij zijn een marketingbureau. Doen jullie ook lead qualification?' },
                      { type: 'ai', text: 'Ja, natuurlijk! We scoren leads op budget, timing en urgentie.' },
                      { type: 'user', text: 'En automatisch doorsturen naar ons CRM?' },
                      { type: 'ai', text: 'Ja! HubSpot, Salesforce, Pipedrive... wat jullie ook gebruiken.' },
                      { type: 'user', text: 'Wauw... en kunnen jullie ook afspraken inplannen?' },
                      { type: 'ai', text: 'Ja! Direct in jullie agenda. Geen handwerk meer.' },
                      { type: 'user', text: 'Dat klinkt te mooi om waar te zijn... what\'s the catch?' },
                      { type: 'ai', text: 'Geen catch! Setup in 24u, ROI binnen 30 dagen gegarandeerd.' },
                      { type: 'user', text: '🤯 Wanneer kunnen we beginnen?' }
                    ].map((message, i) => (
                      <div key={i} className={`flex items-start gap-2 sm:gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                        {message.type === 'ai' && (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/30 border border-blue-400/30 flex-shrink-0">AI</div>
                        )}
                        <div className={`rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm backdrop-blur-sm shadow-lg max-w-xs ${message.type === 'user' ? 'bg-gradient-to-br from-white/8 to-white/4 text-white border border-white/10' : 'bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-300 border border-blue-400/30'}`}>
                          {message.type === 'ai' && <span className="font-medium">{message.text.split('!')[0]}!</span>}
                          {message.type === 'ai' ? message.text.split('!').slice(1).join('!') : message.text}
                        </div>
                        {message.type === 'user' && (
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-gray-500/30 border border-gray-400/30 flex-shrink-0 ${i === 8 ? 'animate-pulse' : ''}`}>M</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-white/5 sm:border-t-2"></div>

            {/* Middle Section - Integrations Display */}
            <div className="pt-12 sm:pt-14 lg:pt-16 xl:pt-20 px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-8 xl:pb-12">
              {/* Three Column Layout: Input - AI Agent - Output */}
              <div className="mb-6 sm:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-stretch">
                  
                  {/* Input Sources - Left */}
                  <div className="flex items-center h-full">
                    <div className="w-full">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {[
                          { name: 'Gmail', logo: '/gmail-logo.png', category: 'Email' },
                          { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png', category: 'Communication' },
                          { name: 'Trello', logo: 'https://img.icons8.com/color/48/trello.png', category: 'Project Management' },
                          { name: 'Google Calendar', logo: '/google-calendar-logo.png', category: 'Calendar' },
                          { name: 'Calendly', logo: '/calendly-logo.png', category: 'Scheduling' },
                          { name: 'Google Sheets', logo: 'https://img.icons8.com/color/48/google-sheets.png', category: 'Spreadsheet' },
                          { name: 'PandaDoc', logo: '/pandadoc-logo.png', category: 'Document Management' },
                          { name: 'WhatsApp', logo: 'https://img.icons8.com/color/48/whatsapp.png', category: 'Messaging' },
                        ].map((source, index) => (
                          <div
                            key={source.name}
                            className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg backdrop-blur-sm hover:from-white/8 hover:to-white/4 hover:border-white/20 transition-all duration-300"
                          >
                            {source.logo ? (
                              <img
                                src={source.logo}
                                alt={`${source.name} logo`}
                                className={`rounded-md shadow-lg flex-shrink-0 object-contain ${source.name === 'Gmail' ? 'w-5 h-5 sm:w-6 sm:h-6 bg-white p-0.5' : 'w-6 h-6 sm:w-8 sm:h-8 p-0.5 sm:p-1'}`}
                              />
                            ) : (
                              <div
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg flex-shrink-0"
                                style={{ backgroundColor: source.color }}
                              >
                                {source.name.substring(0, 2).toUpperCase()}
                              </div>
                            )}
                            <span className="text-white/80 text-xs sm:text-sm font-medium">{source.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Agent - Center */}
                  <div className="flex items-center justify-center order-first lg:order-none h-full min-h-0">
                    <div className="text-center relative">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/45 via-purple-600/65 to-blue-500/45 rounded-full blur-2xl scale-130"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-0.5 sm:mb-1 leading-[1.1] tracking-[-0.01em] antialiased">
                          Alles verbonden.
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base font-light leading-[1.4] tracking-[-0.005em] antialiased mb-2 sm:mb-3">
                          200+ integraties. Elke week komen er nieuwe bij.
                        </p>
                        <p className="text-white/40 text-xs sm:text-sm font-light leading-[1.4] tracking-[-0.005em] antialiased">
                          Van losse tools naar één geheel.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Output Destinations - Right */}
                  <div className="flex items-center h-full">
                    <div className="w-full">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {[
                        { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', category: 'CRM' },
                        { name: 'Salesforce', logo: '/salesforce-logo.png', category: 'CRM' },
                        { name: 'Notion', logo: 'https://img.icons8.com/color/48/notion.png', category: 'Workspace' },
                        { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png', category: 'Project Management' },
                        { name: 'Microsoft Teams', logo: 'https://img.icons8.com/color/48/microsoft-teams.png', category: 'Communication' },
                        { name: 'Instantly', logo: '/instantly-logo.webp', category: 'Email Marketing' },
                        { name: 'Pipedrive', logo: '/pipedrive-logo.svg', category: 'CRM' },
                        { name: 'Stripe', logo: '/stripe-logo.png', category: 'Payment Processing' },
                      ].map((destination, index) => (
                        <div
                          key={destination.name}
                          className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg backdrop-blur-sm hover:from-white/8 hover:to-white/4 hover:border-white/20 transition-all duration-300"
                        >
                          {destination.logo ? (
                            <img
                              src={destination.logo}
                              alt={`${destination.name} logo`}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-md shadow-lg flex-shrink-0 object-contain p-0.5 sm:p-1"
                            />
                          ) : (
                            <div
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg flex-shrink-0"
                              style={{ backgroundColor: destination.color }}
                            >
                              {destination.name.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                          <span className="text-white/80 text-xs sm:text-sm font-medium">{destination.name}</span>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-white/5 sm:border-t-2"></div>

            {/* Raycast-style Benefits Section */}
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                
                {/* Left: Main Message */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    Het gaat niet om tijd besparen.
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/60 leading-tight">
                    Het gaat erom dat je nooit meer het gevoel hebt dat je tijd verspilt.
                  </p>
                  
                  <div className="mt-6 sm:mt-8">
                    <button className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Start Automation
                    </button>
                  </div>
                </div>

                {/* Right: Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { title: 'Snel.', desc: 'Deploy AI in seconden.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Ergonomisch.', desc: 'AI first.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z' },
                    { title: 'Natuurlijk.', desc: 'Pure prestaties.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                    { title: 'Betrouwbaar.', desc: '99.8% uptime.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
                  ].map((benefit) => (
                    <div key={benefit.title} className="bg-black/40 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{benefit.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentsStatsSection;