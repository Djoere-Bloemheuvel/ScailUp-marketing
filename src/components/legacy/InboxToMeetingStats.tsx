import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, MessageSquare, Brain, Calendar, CheckCircle, BarChart3, Shield } from 'lucide-react';

const InboxToMeetingStats = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              number: "5x",
              description: "meer meetings door slimme personalisatie",
              icon: Calendar,
              theme: "conversion"
            },
            {
              number: "100%",
              description: "geautomatiseerd van A tot Z",
              icon: Zap,
              theme: "automation"
            },
            {
              number: "24/7",
              description: "actief, nooit een lead gemist",
              icon: TrendingUp,
              theme: "activity"
            },
            {
              number: "20-30h",
              description: "bespaard per week aan outbound",
              icon: CheckCircle,
              theme: "efficiency"
            },
            {
              number: "89%",
              description: "van outbound e-mail wordt genegeerd",
              icon: MessageSquare,
              theme: "problem"
            },
            {
              number: "95%",
              description: "van cold emails voelt als spam",
              icon: Shield,
              theme: "problem"
            },
            {
              number: "Self-learning",
              description: "wordt slimmer naarmate het langer draait",
              icon: Brain,
              theme: "intelligence"
            },
            {
              number: "Human-like",
              description: "personalisatie op grote schaal",
              icon: BarChart3,
              theme: "personalization"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 sm:p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/60 text-center h-[160px] sm:h-[180px] flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-blue-300 mb-1 sm:mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InboxToMeetingStats;