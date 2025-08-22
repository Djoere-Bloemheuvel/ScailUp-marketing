import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Target, TrendingDown, Mail, Users, MessageSquare, Zap, X, ArrowRight, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

const ProblemStatement = () => {
  const brokenPipeline = [
    { 
      icon: Users, 
      label: "Prospects", 
      problem: "Random lijsten",
      result: "2% respons",
      status: "broken"
    },
    { 
      icon: Mail, 
      label: "E-mail", 
      problem: "Template spam",
      result: "95% spam folder",
      status: "broken"
    },
    { 
      icon: MessageSquare, 
      label: "LinkedIn", 
      problem: "Generic berichten",
      result: "1% conversie",
      status: "broken"
    },
    { 
      icon: X, 
      label: "Resultaat", 
      problem: "€10k verlies",
      result: "0 nieuwe klanten",
      status: "failed"
    }
  ];

  const scailupSolution = [
    { 
      icon: Users, 
      label: "AI Prospects", 
      solution: "Smart targeting",
      result: "15% respons",
      status: "success"
    },
    { 
      icon: Mail, 
      label: "Personal E-mails", 
      solution: "AI personalisatie",
      result: "85% inbox rate",
      status: "success"
    },
    { 
      icon: MessageSquare, 
      label: "Strategic Follow-up", 
      solution: "Timing & relevantie",
      result: "12% conversie",
      status: "success"
    },
    { 
      icon: CheckCircle, 
      label: "Resultaat", 
      solution: "€50k revenue",
      result: "25+ nieuwe klanten",
      status: "winning"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Waarom jouw outbound{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              niet werkt
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            De realiteit van ineffectieve outbound vs. de ScailUp methode
          </p>
        </motion.div>

        {/* Professional Pipeline Diagram */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            
            {/* Diagram Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-3">Outbound Performance Analysis</h3>
              <p className="text-gray-400">Typische resultaten vs. ScailUp methode</p>
            </div>

            {/* Pipeline Comparison Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Current State Column */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-300">Huidige Aanpak</h4>
                  <div className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-400">
                    INEFFECTIEF
                  </div>
                </div>
                
                {brokenPipeline.slice(0, 3).map((step, index) => {
                  const IconComponent = step.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <h5 className="font-medium text-white text-sm">{step.label}</h5>
                          <p className="text-gray-500 text-xs">{step.problem}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-300 font-mono text-sm">{step.result}</div>
                      </div>
                    </motion.div>
                  );
                })}
                
                {/* Current Result */}
                <motion.div 
                  className="p-4 bg-gradient-to-r from-gray-800/60 to-gray-700/40 border border-gray-600/40 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-medium">Maandelijkse Impact</span>
                    <span className="text-gray-300 font-mono">€10k verlies</span>
                  </div>
                </motion.div>
              </div>

              {/* Transformation Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <ArrowRight className="w-12 h-12 text-blue-500 mb-2" />
                  <span className="text-blue-400 font-semibold text-sm">ScailUp</span>
                  <span className="text-blue-400 font-semibold text-sm">Transformatie</span>
                </motion.div>
              </div>

              {/* ScailUp Results Column */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-white">ScailUp Methode</h4>
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full text-xs text-white font-medium">
                    GEOPTIMALISEERD
                  </div>
                </div>
                
                {scailupSolution.slice(0, 3).map((step, index) => {
                  const IconComponent = step.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-blue-900/20 border border-blue-800/40 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-medium text-white text-sm">{step.label}</h5>
                          <p className="text-blue-300 text-xs">{step.solution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 font-mono text-sm">{step.result}</div>
                      </div>
                    </motion.div>
                  );
                })}
                
                {/* ScailUp Result */}
                <motion.div 
                  className="p-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Maandelijkse Impact</span>
                    <span className="text-white font-mono font-bold">€50k winst</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Summary */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-700/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Performance verbetering: </span>
                <span className="text-blue-400 font-bold">+€60.000 per maand</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemStatement;