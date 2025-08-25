import { motion } from 'framer-motion';

const AgentsIntegrationsSection = () => {
  const integrations = [
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', category: 'CRM' },
    { name: 'Salesforce', logo: 'https://img.icons8.com/color/48/salesforce.png', category: 'CRM' },
    { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg', category: 'CRM' },
    { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png', category: 'Communication' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', category: 'Communication' },
    { name: 'WhatsApp', logo: 'https://img.icons8.com/color/48/whatsapp.png', category: 'Communication' },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', category: 'Automation' },
    { name: 'Make', logo: 'https://cdn.worldvectorlogo.com/logos/make-com.svg', category: 'Automation' },
    { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', category: 'Email Marketing' },
    { name: 'Gmail', logo: 'https://img.icons8.com/color/48/gmail.png', category: 'Email' },
    { name: 'Outlook', logo: 'https://img.icons8.com/color/48/microsoft-outlook-2019.png', category: 'Email' },
    { name: 'Calendar', logo: 'https://img.icons8.com/color/48/google-calendar.png', category: 'Calendar' },
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
                Integreert met alles
              </span>
              <br />
              <span className="text-blue-400 font-normal">
                wat je al gebruikt.
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Onze AI agents sluiten naadloos aan op je bestaande tools. 
              Geen gedoe met nieuwe systemen - alles werkt samen.
            </p>
          </motion.div>

          {/* Main Container - Vercel Style */}
          <motion.div
            className="border-2 border-blue-500/30 rounded-2xl overflow-hidden bg-[#0a0a0a]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            
            {/* Integration Flow Visualization */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Left: Input Systems */}
                <div className="text-center lg:text-right">
                  <h3 className="text-white font-medium mb-6">Jouw Systemen</h3>
                  <div className="space-y-4">
                    {integrations.slice(0, 4).map((integration, index) => (
                      <motion.div
                        key={integration.name}
                        className="flex items-center justify-center lg:justify-end gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        <img src={integration.logo} alt={integration.name} className="w-6 h-6" />
                        <div className="text-left lg:text-right">
                          <div className="text-white font-medium">{integration.name}</div>
                          <div className="text-white/60 text-xs">{integration.category}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Center: Smart AI Node */}
                <div className="relative">
                  <motion.div
                    className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/40 rounded-xl p-8 text-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Animated background particles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                          style={{
                            left: `${20 + (i * 12)}%`,
                            top: `${30 + (i * 8)}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2 + (i * 0.3),
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>

                    {/* Pulsing rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-24 h-24 border border-blue-400/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute w-32 h-32 border border-purple-400/20 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Smart AI Icon with rotation */}
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* Inner core */}
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {/* Neural network pattern */}
                          <div className="relative w-6 h-6">
                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-0 left-0"></div>
                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-0 right-0"></div>
                            <div className="absolute w-px h-3 bg-white/60 top-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                            <div className="absolute w-px h-3 bg-white/60 top-2 left-1/2 transform -translate-x-1/2 -rotate-45"></div>
                          </div>
                        </motion.div>
                      </motion.div>
                      
                      <h4 className="text-white font-bold text-xl mb-2">
                        <motion.span
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%]"
                        >
                          Smart AI Node
                        </motion.span>
                      </h4>
                      <p className="text-white/80 text-sm">
                        Intelligente hub die real-time<br />
                        connecties en automaties beheert
                      </p>
                    </div>

                    {/* Animated connection lines */}
                    <motion.div
                      className="absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-r from-transparent to-blue-400/60 hidden lg:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-l from-transparent to-purple-400/60 hidden lg:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />

                    {/* Data flow indicators */}
                    <motion.div
                      className="absolute top-1/2 -left-6 w-2 h-2 bg-blue-400 rounded-full hidden lg:block"
                      animate={{
                        x: [0, 48, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-400 rounded-full hidden lg:block"
                      animate={{
                        x: [0, -48, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right: Output/Actions */}
                <div className="text-center lg:text-left">
                  <h3 className="text-white font-medium mb-6">Automatiseert naar</h3>
                  <div className="space-y-4">
    {integrations.slice(8, 12).map((integration, index) => (
                      <motion.div
                        key={integration.name}
                        className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      >
                        <img src={integration.logo} alt={integration.name} className="w-6 h-6" />
                        <div className="text-left">
                          <div className="text-white font-medium">{integration.name}</div>
                          <div className="text-white/60 text-xs">{integration.category}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-blue-500/20"></div>

            {/* All Integrations Grid */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-white font-medium text-xl mb-2">200+ integraties beschikbaar</h3>
                <p className="text-white/60">En elke week komen er nieuwe bij</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="group relative p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 rounded-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <img src={integration.logo} alt={integration.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-white font-medium text-sm mb-1">{integration.name}</div>
                      <div className="text-white/40 text-xs">{integration.category}</div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-blue-500/20"></div>

            {/* AI Capabilities Section */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-white font-medium text-2xl mb-4">AI die echt begrijpt wat je doet</h3>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Onze agents zijn niet zomaar chatbots. Ze begrijpen context, leren van interacties en maken slimme beslissingen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Natural Language Processing */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Natural Language Processing</h4>
                      <p className="text-white/60 text-sm">Begrijpt menselijke taal perfect</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-white/80">Detecteert intentie achter vragen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-white/80">Verstaat context en nuance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-white/80">Reageert natuurlijk en persoonlijk</span>
                    </div>
                  </div>
                </motion.div>

                {/* Machine Learning */}
                <motion.div
                  className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Continuous Learning</h4>
                      <p className="text-white/60 text-sm">Wordt elke dag slimmer</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">Leert van elke interactie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">Past zich aan jouw bedrijf aan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">Optimaliseert automatisch</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-blue-500/20"></div>

            {/* Use Cases Grid */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-white font-medium text-2xl mb-4">Veelzijdige AI agents voor elke situatie</h3>
                <p className="text-white/60">Van simpele chatbots tot complexe business processen</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Customer Service Agent */}
                <motion.div
                  className="group bg-white/5 border border-white/10 hover:border-purple-400/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">🎧</div>
                  <h4 className="text-white font-semibold mb-2">Customer Service Agent</h4>
                  <p className="text-white/60 text-sm mb-4">24/7 klantenservice zonder pauzes</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• Beantwoordt 87% van vragen direct</div>
                    <div>• Escaleert complexe cases automatisch</div>
                    <div>• Spreekt in jouw merkidentiteit</div>
                  </div>
                </motion.div>

                {/* Sales Agent */}
                <motion.div
                  className="group bg-white/5 border border-white/10 hover:border-green-400/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">💼</div>
                  <h4 className="text-white font-semibold mb-2">Sales Agent</h4>
                  <p className="text-white/60 text-sm mb-4">Kwalificeert leads en plant afspraken</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• Verhoogt conversie met 124%</div>
                    <div>• Integreert met je CRM</div>
                    <div>• Follow-up sequenties automatisch</div>
                  </div>
                </motion.div>

                {/* HR Agent */}
                <motion.div
                  className="group bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="text-white font-semibold mb-2">HR Agent</h4>
                  <p className="text-white/60 text-sm mb-4">Screening en onboarding geautomatiseerd</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• Screent kandidaten 24/7</div>
                    <div>• Plant interviews automatisch</div>
                    <div>• Onboarding volledig geregeld</div>
                  </div>
                </motion.div>

                {/* Marketing Agent */}
                <motion.div
                  className="group bg-white/5 border border-white/10 hover:border-orange-400/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="text-white font-semibold mb-2">Marketing Agent</h4>
                  <p className="text-white/60 text-sm mb-4">Campagnes en content volledig geautomatiseerd</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• Personaliseerde content</div>
                    <div>• A/B test automatisch</div>
                    <div>• ROI tracking real-time</div>
                  </div>
                </motion.div>

                {/* Finance Agent */}
                <motion.div
                  className="group bg-white/5 border border-white/10 hover:border-yellow-400/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-white font-semibold mb-2">Finance Agent</h4>
                  <p className="text-white/60 text-sm mb-4">Facturen en betalingen geautomatiseerd</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• Verstuur facturen automatisch</div>
                    <div>• Payment reminders</div>
                    <div>• Financiële rapportages</div>
                  </div>
                </motion.div>

                {/* Custom Agent */}
                <motion.div
                  className="group bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-xl p-6 hover:bg-purple-500/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">🔧</div>
                  <h4 className="text-white font-semibold mb-2">Custom Agent</h4>
                  <p className="text-white/60 text-sm mb-4">Op maat gebouwd voor jouw specifieke proces</p>
                  <div className="space-y-2 text-xs text-white/50">
                    <div>• 100% aangepast aan jou</div>
                    <div>• Integreert met alles</div>
                    <div>• Unlimited mogelijkheden</div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-purple-300 text-xs font-medium">
                    <span>Vraag naar mogelijkheden</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-blue-500/20"></div>

            {/* Performance Metrics */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-white font-medium text-2xl mb-4">Bewezen prestaties die overtuigen</h3>
                <p className="text-white/60">Echte resultaten van echte bedrijven</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">98.5%</div>
                  <div className="text-white font-medium mb-1">Tijdsbesparing</div>
                  <div className="text-white/60 text-sm">Gemiddeld bij alle klanten</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">40s</div>
                  <div className="text-white font-medium mb-1">Response tijd</div>
                  <div className="text-white/60 text-sm">Van 7 minuten naar 40 seconden</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">124%</div>
                  <div className="text-white font-medium mb-1">Meer conversie</div>
                  <div className="text-white/60 text-sm">Hogere lead-to-customer ratio</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-4xl font-bold text-orange-400 mb-2">30d</div>
                  <div className="text-white font-medium mb-1">ROI realized</div>
                  <div className="text-white/60 text-sm">Gemiddelde terugverdientijd</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-white font-medium mb-1">Integraties</div>
              <div className="text-white/60 text-sm">Alle belangrijke tools</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white font-medium mb-1">Synchronisatie</div>
              <div className="text-white/60 text-sm">Real-time updates</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white font-medium mb-1">Uptime</div>
              <div className="text-white/60 text-sm">Betrouwbare verbindingen</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsIntegrationsSection;