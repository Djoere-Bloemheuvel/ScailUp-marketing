import { motion } from 'framer-motion';

const AgentsIntegrationsSection = () => {
  const inputSources = [
    { name: 'Gmail', logo: '/gmail-logo.png', category: 'Email' },
    { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png', category: 'Communication' },
    { name: 'Trello', logo: 'https://img.icons8.com/color/48/trello.png', category: 'Project Management' },
    { name: 'Google Calendar', logo: '/google-calendar-logo.png', category: 'Calendar' },
    { name: 'Calendly', logo: '/calendly-logo.png', category: 'Scheduling' },
    { name: 'Google Sheets', logo: 'https://img.icons8.com/color/48/google-sheets.png', category: 'Spreadsheet' },
    { name: 'PandaDoc', logo: '/pandadoc-logo.png', category: 'Document Management' },
    { name: 'WhatsApp', logo: 'https://img.icons8.com/color/48/whatsapp.png', category: 'Messaging' },
  ];

  const outputDestinations = [
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', category: 'CRM' },
    { name: 'Salesforce', logo: '/salesforce-logo.png', category: 'CRM' },
    { name: 'Notion', logo: 'https://img.icons8.com/color/48/notion.png', category: 'Workspace' },
    { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png', category: 'Project Management' },
    { name: 'Microsoft Teams', logo: 'https://img.icons8.com/color/48/microsoft-teams.png', category: 'Communication' },
    { name: 'Instantly', logo: '/instantly-logo.webp', category: 'Email Marketing' },
    { name: 'Pipedrive', logo: '/pipedrive-logo.svg', category: 'CRM' },
    { name: 'Stripe', logo: '/stripe-logo.png', category: 'Payment Processing' },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative w-full z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Alle tools die je gebruikt,
              </span>
              <br />
              <span className="text-blue-400 font-normal">
                praten met elkaar.
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              200+ integraties. Elke week komen er nieuwe bij.
            </p>
          </motion.div>

          {/* Three Column Layout: Input - AI Agent - Output */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Input Sources - Left */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90 mb-6 text-center lg:text-left">Input Sources</h3>
                <div className="grid grid-cols-2 gap-3">
                  {inputSources.map((source, index) => (
                    <motion.div
                      key={source.name}
                      className="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg backdrop-blur-sm hover:from-white/8 hover:to-white/4 hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {source.logo ? (
                        <img
                          src={source.logo}
                          alt={`${source.name} logo`}
                          className={`rounded-md shadow-lg flex-shrink-0 object-contain ${source.name === 'Gmail' ? 'w-6 h-6 bg-white p-0.5' : 'w-8 h-8 p-1'}`}
                        />
                      ) : (
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg flex-shrink-0"
                          style={{ backgroundColor: source.color }}
                        >
                          {source.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-white/80 text-sm font-medium">{source.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Agent - Center */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative mb-8">
                  {/* Data Flow Pipeline */}
                  <div className="relative w-40 h-16 flex items-center justify-center">
                    
                    {/* Pipeline track */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-1 bg-gradient-to-r from-blue-300/30 via-purple-300/50 to-purple-300/30 rounded-full"></div>
                    </div>
                    
                    {/* Central Processing Orb */}
                    <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 via-blue-600 to-purple-600 rounded-full shadow-lg border border-blue-300/50 flex items-center justify-center z-10">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Input Icons flowing from left */}
                    {[
                      { name: 'Gmail', logo: '/gmail-logo.png' },
                      { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png' },
                      { name: 'Trello', logo: 'https://img.icons8.com/color/48/trello.png' }
                    ].map((app, index) => (
                      <motion.div
                        key={`input-${index}`}
                        className="absolute w-7 h-7 rounded-lg shadow-lg flex items-center justify-center bg-white"
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ 
                          x: [-80, -20, 60],
                          opacity: [0, 1, 1, 0],
                          scale: [1, 1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 1,
                          ease: "easeInOut"
                        }}
                      >
                        {app.logo ? (
                          <img
                            src={app.logo}
                            alt={`${app.name} logo`}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <div
                            className="w-5 h-5 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                            style={{ backgroundColor: app.color }}
                          >
                            {app.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </motion.div>
                    ))}
                    
                    {/* Output Icons flowing to right */}
                    {[
                      { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
                      { name: 'Salesforce', logo: 'https://img.icons8.com/color/48/salesforce.png' },
                      { name: 'Notion', logo: 'https://img.icons8.com/color/48/notion.png' }
                    ].map((app, index) => (
                      <motion.div
                        key={`output-${index}`}
                        className="absolute w-7 h-7 rounded-lg shadow-lg flex items-center justify-center bg-white"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ 
                          x: [-20, 20, 80],
                          opacity: [0, 1, 1, 0],
                          scale: [0.8, 1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 1 + 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        {app.logo ? (
                          <img
                            src={app.logo}
                            alt={`${app.name} logo`}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <div
                            className="w-5 h-5 rounded-sm flex items-center justify-center text-white font-bold text-xs"
                            style={{ backgroundColor: app.color }}
                          >
                            {app.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </motion.div>
                    ))}
                    
                    {/* Processing particles in orb */}
                    <motion.div
                      className="absolute w-2 h-2 bg-white rounded-full"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ 
                        transformOrigin: '50% 8px'
                      }}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Intelligent Processing</h3>
                  <p className="text-white/70 text-base">Advanced AI workflow automation</p>
                </div>
              </motion.div>

              {/* Output Destinations - Right */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90 mb-6 text-center lg:text-right">Output Destinations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {outputDestinations.map((destination, index) => (
                    <motion.div
                      key={destination.name}
                      className="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg backdrop-blur-sm hover:from-white/8 hover:to-white/4 hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {destination.logo ? (
                        <img
                          src={destination.logo}
                          alt={`${destination.name} logo`}
                          className="w-8 h-8 rounded-md shadow-lg flex-shrink-0 object-contain p-1"
                        />
                      ) : (
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg flex-shrink-0"
                          style={{ backgroundColor: destination.color }}
                        >
                          {destination.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-white/80 text-sm font-medium">{destination.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-3">200+</div>
              <div className="text-white font-semibold mb-2">Integraties</div>
              <div className="text-white/60 text-sm">Alle belangrijke tools</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-3">Real-time</div>
              <div className="text-white font-semibold mb-2">Processing</div>
              <div className="text-white/60 text-sm">Instant data flow</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-cyan-400 mb-3">99.9%</div>
              <div className="text-white font-semibold mb-2">Uptime</div>
              <div className="text-white/60 text-sm">Betrouwbare verbindingen</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsIntegrationsSection;