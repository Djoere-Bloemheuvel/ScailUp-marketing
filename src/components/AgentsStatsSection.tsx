import { motion } from 'framer-motion';

const AgentsStatsSection = () => {
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative w-full z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                agents & automations
              </span>
              <br />
              <span className="text-blue-400 font-normal">
                response tijden gingen van 7m naar 40s.
              </span>
            </h2>
          </motion.div>

          {/* Single Large Container - Vercel Style */}
          <motion.div
            className="border-2 border-blue-500/30 rounded-2xl overflow-hidden bg-[#111111]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            
            {/* Top Section - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left: Terminal/Code Interface */}
              <div className="border-r-0 lg:border-r border-blue-500/20">
                {/* Terminal Header */}
                <div className="bg-[#0a0a0a] border-b border-blue-500/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white/60 text-sm ml-4">scailup-agent/lead-response</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ scailup deploy lead-agent</div>
                  <div className="text-white/60 mb-1">Deploying agent configuration...</div>
                  <div className="text-white/60 mb-1">✓ Lead detection: enabled</div>
                  <div className="text-white/60 mb-1">✓ Response time: 40s average</div>
                  <div className="text-white/60 mb-1">✓ Qualification rate: 87%</div>
                  <div className="text-blue-400 mb-2">✓ Deployment successful</div>
                  
                  <div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/20 rounded">
                    <div className="text-blue-400 text-xs mb-1">PERFORMANCE BOOST</div>
                    <div className="text-white">Response time improved by <span className="text-green-400 font-bold">91.5%</span></div>
                  </div>
                </div>
              </div>

              {/* Right: Chat Interface */}
              <div>
                {/* Chat Header */}
                <div className="bg-[#0a0a0a] border-b border-purple-500/10 px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">AI Agent - Live Chat</span>
                  <span className="text-purple-400 text-sm ml-auto">Online</span>
                </div>
                
                {/* Chat Content */}
                <div className="p-4 h-64 overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">U</div>
                      <div className="bg-white/5 rounded-lg px-3 py-2 text-white text-sm">
                        Hallo, ik heb interesse in jullie automatiseringsoplossingen
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">AI</div>
                      <div className="bg-purple-500/20 rounded-lg px-3 py-2 text-white text-sm">
                        Geweldig! Ik help je graag. Mag ik vragen wat voor bedrijf je hebt en welke processen je wilt automatiseren?
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">U</div>
                      <div className="bg-white/5 rounded-lg px-3 py-2 text-white text-sm">
                        We zijn een marketingbureau en willen lead response automatiseren
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">AI</div>
                      <div className="bg-purple-500/20 rounded-lg px-3 py-2 text-white text-sm">
                        Perfect! Onze lead agents kunnen response tijden terugbrengen van 7 minuten naar 40 seconden. Zal ik een demo inplannen?
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 text-xs text-white/40">
                    Response: 23s
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t-2 border-blue-500/20"></div>

            {/* Bottom Section - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left: Performance Chart */}
              <div className="border-r-0 lg:border-r border-blue-500/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Response Time Analysis</h3>
                  <div className="text-green-400 text-sm">Real-time</div>
                </div>
                
                {/* Chart */}
                <div className="relative h-32 mb-4">
                  <div className="absolute inset-0 flex items-end justify-between px-2">
                    {/* Before bars */}
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        className="w-8 bg-red-500 rounded-t"
                        style={{ height: '120px' }}
                        initial={{ height: 0 }}
                        whileInView={{ height: '120px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <span className="text-xs text-white/60">Voor</span>
                    </div>
                    
                    {/* After bars */}
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        className="w-8 bg-green-500 rounded-t"
                        style={{ height: '8px' }}
                        initial={{ height: 0 }}
                        whileInView={{ height: '8px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                      <span className="text-xs text-white/60">Na</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div className="text-red-400">7min gemiddeld</div>
                  <div className="text-green-400">40s gemiddeld</div>
                </div>
              </div>

              {/* Right: Results Summary */}
              <div className="p-6">
                <h3 className="text-white font-medium mb-6">Bewezen Resultaten</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Response snelheid</span>
                    <span className="text-green-400 font-bold">+91.5%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Lead kwaliteit</span>
                    <span className="text-blue-400 font-bold">+87%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Conversion rate</span>
                    <span className="text-purple-400 font-bold">+124%</span>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        <span className="text-green-400">98.5%</span> minder tijd
                      </div>
                      <div className="text-white/60 text-sm">
                        Van 8+ uur naar 7 minuten per lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {['AI Agents', 'Lead Automation', 'Sales Workflows', 'Custom Integrations', 'White-label'].map((category, index) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full text-white/80 text-sm font-medium hover:bg-blue-500/10 transition-colors duration-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsStatsSection;