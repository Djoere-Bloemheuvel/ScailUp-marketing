import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Building2, ThumbsUp, BarChart3, MapPin, Search, MessageSquare } from 'lucide-react';

const TrustSection = () => {
  const mockupCards = [
    {
      title: 'Engagement signals',
      bgGradient: 'from-blue-100 to-blue-200',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="text-sm font-medium text-gray-900">Michael Chang</div>
              <div className="text-xs text-gray-500">2nd degree</div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-gray-600">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Liked your post
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Users className="w-3 h-3 mr-1" />
              Followed you
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <MessageSquare className="w-3 h-3 mr-1" />
              Why they fit
            </div>
            <div className="text-xs text-gray-400">
              More about sales software
            </div>
          </div>
          <div className="text-xs text-gray-500 mb-2">Move this lead forward</div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-100 text-xs py-1 px-2 rounded text-gray-700">Save to CRM</button>
            <button className="flex-1 bg-blue-600 text-white text-xs py-1 px-2 rounded">Connect</button>
          </div>
        </div>
      )
    },
    {
      title: 'Lead insights',
      bgGradient: 'from-blue-200 to-blue-300',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="text-sm font-medium text-gray-900">Charlotte Harris</div>
              <div className="text-xs text-gray-500">VP Marketing · 2nd degree</div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-gray-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              Is hiring
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Users className="w-3 h-3 mr-1" />
              Why they fit
            </div>
            <div className="text-xs text-gray-400">
              Sells lead generation
            </div>
          </div>
          <div className="text-xs text-gray-500 mb-2">Move this lead forward</div>
          <button className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded">
            Generate 25 personalized messages
          </button>
        </div>
      )
    },
    {
      title: 'Company intel',
      bgGradient: 'from-blue-300 to-blue-400',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Redbeet</div>
              <div className="text-xs text-gray-500">www.redbeet.com</div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-gray-600">
              <Building2 className="w-3 h-3 mr-1" />
              Company raised funds
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Users className="w-3 h-3 mr-1" />
              Why they fit
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <BarChart3 className="w-3 h-3 mr-1" />
              Industry: Information technology
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <MapPin className="w-3 h-3 mr-1" />
              Headquarters in Chicago
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              Headcount grew 30% last year
            </div>
          </div>
          <div className="text-xs text-gray-500 mb-2">More this lead forward</div>
          <button className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded">
            Find decision makers
          </button>
        </div>
      )
    }
  ];

  const logos = [
    { name: 'belkins', alt: 'Belkins' },
    { name: 'airtable', alt: 'Airtable' },
    { name: 'paddle', alt: 'Paddle' },
    { name: 'brightwheel', alt: 'Brightwheel' },
    { name: 'wojo', alt: 'Wojo' },
    { name: 'wealthify', alt: 'Wealthify' }
  ];

  const stats = [
    {
      number: '270K+',
      description: 'Automations launched daily',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900'
    },
    {
      number: '2.5M+',
      description: 'Satisfied users since 2016',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900'
    },
    {
      number: '1M',
      description: 'Unique leads generated everyday',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-900'
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mockupCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`bg-gradient-to-br ${card.bgGradient} rounded-2xl p-6 shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-white/60 font-semibold text-lg">
                  {logo.alt}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              className={`${stat.bgColor} rounded-2xl p-8 text-center shadow-lg border border-gray-100`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`text-4xl lg:text-5xl font-bold ${stat.textColor} mb-2`}>
                {stat.number}
              </div>
              <p className={`text-sm lg:text-base ${stat.textColor} opacity-80 font-medium`}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;