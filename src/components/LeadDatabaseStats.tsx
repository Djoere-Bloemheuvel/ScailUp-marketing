import React from 'react';
import { motion } from 'framer-motion';
import { Database, Target, Users, RefreshCw, Brain, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const LeadDatabaseStats = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              number: "500k+",
              description: "decision makers in database",
              icon: Users,
              theme: "database"
            },
            {
              number: "AI-first",
              description: "segmentatie en match scores",
              icon: Brain,
              theme: "intelligence"
            },
            {
              number: "GDPR",
              description: "compliant met audit trails",
              icon: Shield,
              theme: "compliance"
            },
            {
              number: "Real-time",
              description: "verrijking en validatie",
              icon: RefreshCw,
              theme: "enrichment"
            },
            {
              number: "89%",
              description: "van leadlijsten bevat foute data",
              icon: Database,
              theme: "problem"
            },
            {
              number: "30%",
              description: "bounce rate door slechte validatie",
              icon: TrendingUp,
              theme: "problem"
            },
            {
              number: "Match Score",
              description: "0-100 met explainable AI",
              icon: Target,
              theme: "scoring"
            },
            {
              number: "Zero overlap",
              description: "suppression tussen alle agents",
              icon: CheckCircle,
              theme: "efficiency"
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
              <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-4 sm:p-6 hover:border-blue-400/40 transition-all duration-300 hover:bg-black/60 text-center h-[160px] sm:h-[180px] flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

export default LeadDatabaseStats;