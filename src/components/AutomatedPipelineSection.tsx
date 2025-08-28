import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AutomatedPipelineSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Een zelf vullende pijplijn — <span className="text-white/70">volledig geautomatiseerd</span>
          </h2>
        </motion.div>

        {/* First Section - Lead Engine */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Lead Engine: Outbound die werkt
            </h3>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Brengt je afspraken via outbound, email, LinkedIn en Account Based Marketing. 
              Automatisch leads identificeren uit 500k+ prospects.
            </p>
            <button className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
              Bekijk lead automations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-12 shadow-xl border border-white/10">
              {/* Center device with platforms */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
                
                {/* Platform connections */}
                <div className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-px h-16 bg-gray-300"></div>
                  <div className="grid grid-cols-5 gap-4 mt-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">Li</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-2 font-medium">LinkedIn</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">F</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-2 font-medium">Facebook</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">G</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-2 font-medium">Google</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">H</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-2 font-medium">Hubspot</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">N</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-2 font-medium">Naval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Section - Marketing Engine */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Mockup */}
          <div className="relative lg:order-1">
            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 rounded-3xl p-12 shadow-xl border border-white/10">
              {/* Lead segmentation flow */}
              <div className="relative">
                {/* Top section with connecting lines */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-12">
                    <div className="text-center">
                      <div className="w-4 h-4 bg-orange-400 rounded-full mb-3"></div>
                      <div className="bg-white text-black text-sm px-4 py-2 rounded-full font-semibold shadow-sm">Warm Leads</div>
                    </div>
                    <div className="w-16 h-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="w-4 h-4 bg-black rounded-full mb-3"></div>
                      <div className="bg-white text-black text-sm px-4 py-2 rounded-full font-semibold shadow-sm">Cold Leads</div>
                    </div>
                  </div>
                </div>

                {/* Lead cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-sm text-gray-600 mb-4 font-semibold">Leads based on Engagement</div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-gray-800 font-medium">Liam O'Connor</span>
                        <span className="text-gray-500 ml-auto">Liked</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-gray-800 font-medium">Priya Sharma</span>
                        <span className="text-gray-500 ml-auto">Commented</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-sm text-gray-600 mb-4 font-semibold">Leads to Contact based on ICP fit</div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-gray-800 font-medium">Sally Thompson</span>
                        <span className="text-gray-500 ml-auto">VP Operations</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-gray-800 font-medium">Carlos Jimenez</span>
                        <span className="text-gray-500 ml-auto">CTO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:order-2">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Marketing Engine: Inbound op autopilot
            </h3>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Brengt je afspraken via inbound, SEO, vindbaarheid en ads. 
              Slimme segmentatie met 1000+ live data points.
            </p>
            <button className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
              Bekijk enrichment oplossingen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Third Section - Sales Engine */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Sales Engine: Close meer deals
            </h3>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Geeft je alle handvaten om de deals te closen. 
              Gepersonaliseerde LinkedIn berichten met AI die daadwerkelijk converteren.
            </p>
            <button className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
              Bekijk outreach automations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-3xl p-12 shadow-xl border border-white/10">
              {/* LinkedIn message flow */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Notification */}
                <div className="bg-yellow-100 rounded-xl p-4 mb-6 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <span className="text-base text-gray-800 font-medium">John commented on your post</span>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
                
                {/* AI Message */}
                <div className="bg-gray-50 border rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span>✨</span>
                    <span>AI message</span>
                  </div>
                  <p className="text-base text-gray-800 leading-relaxed">
                    Hey John, I noticed your comment on evaluating 
                    lead gen tools - happy to share some ideas!
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
                
                {/* Follow up */}
                <div className="bg-green-100 rounded-xl p-4 text-center">
                  <span className="text-base text-green-800 font-semibold">Follow up message</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AutomatedPipelineSection;