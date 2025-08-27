import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const LeadEnginePricing = () => {
  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const pricingPlans = [
    {
      name: 'Pilot',
      price: '€997',
      period: 'per maand',
      yearlyDiscount: null,
      description: 'Test de kracht. Ontdek wat mogelijk is.',
      features: [
        '500 leads per maand',
        'Email automation',
        'LinkedIn outreach',  
        'Basic reporting',
        'Setup inbegrepen',
        'Email support'
      ],
      buttonText: 'Start pilot',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'Lead Engine',
      price: '€2.497',
      period: 'per maand',
      yearlyDiscount: 'Bespaar 17% jaarlijks',
      description: 'Meer leads, minder werk.',
      features: [
        '1.000 leads per maand',
        'Email-to-meeting automation',
        'LinkedIn op autopilot',
        'CRM integraties',
        'Advanced reporting',
        'Priority support'
      ],
      buttonText: 'Start nu',
      buttonStyle: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      yearlyDiscount: null,
      description: 'Onbeperkt. Op jouw manier.',
      features: [
        'Unlimited leads',
        'Multi-channel automation',
        'White-label oplossing',
        'API toegang',
        'Custom integraties',
        'Dedicated support'
      ],
      buttonText: 'Neem contact op',
      buttonStyle: 'outline',
      popular: false
    }
  ];

  const features = [
    {
      category: 'Lead generation',
      items: [
        { name: 'Maandelijkse leads', pilot: '500', engine: '1.000', enterprise: 'Unlimited' },
        { name: 'Data kwaliteit', pilot: '95%+', engine: '98%+', enterprise: '99%+' },
        { name: 'Lead scoring', pilot: '✓', engine: '✓', enterprise: '✓' },
        { name: 'Custom filters', pilot: '5', engine: '15', enterprise: 'Unlimited' },
        { name: 'Export formaten', pilot: '2', engine: '5', enterprise: 'Custom' },
        { name: 'Real-time updates', pilot: '✓', engine: '✓', enterprise: '✓' },
      ]
    },
    {
      category: 'Automation & workflows',
      items: [
        { name: 'Email sequenties', pilot: '3', engine: '10', enterprise: 'Unlimited' },
        { name: 'LinkedIn automation', pilot: 'Basic', engine: 'Advanced', enterprise: 'Full suite' },
        { name: 'Multi-channel campaigns', pilot: '-', engine: '✓', enterprise: '✓' },
        { name: 'A/B testing', pilot: '-', engine: '✓', enterprise: '✓' },
        { name: 'Custom workflows', pilot: '-', engine: '3', enterprise: 'Unlimited' },
        { name: 'Trigger-based actions', pilot: '✓', engine: '✓', enterprise: '✓' },
      ]
    },
    {
      category: 'Integraties',
      items: [
        { name: 'CRM integraties', pilot: '2', engine: '10', enterprise: 'Unlimited' },
        { name: 'Zapier', pilot: '✓', engine: '✓', enterprise: '✓' },
        { name: 'API toegang', pilot: 'Read-only', engine: 'Full', enterprise: 'Custom' },
        { name: 'Webhooks', pilot: '5', engine: '25', enterprise: 'Unlimited' },
        { name: 'Custom integraties', pilot: '-', engine: '1', enterprise: 'Unlimited' },
      ]
    },
    {
      category: 'Rapportage & analytics',  
      items: [
        { name: 'Performance dashboard', pilot: '✓', engine: '✓', enterprise: '✓' },
        { name: 'Campaign analytics', pilot: 'Basic', engine: 'Advanced', enterprise: 'Custom' },
        { name: 'ROI tracking', pilot: '✓', engine: '✓', enterprise: '✓' },
        { name: 'Custom reports', pilot: '-', engine: '5', enterprise: 'Unlimited' },
        { name: 'Data export', pilot: '✓', engine: '✓', enterprise: '✓' },
        { name: 'White-label reporting', pilot: '-', engine: '-', enterprise: '✓' },
      ]
    },
    {
      category: 'Support & services',
      items: [
        { name: 'Onboarding', pilot: 'Self-service', engine: 'Guided', enterprise: 'Dedicated' },
        { name: 'Support kanalen', pilot: 'Email', engine: 'Email + Chat', enterprise: 'Priority' },
        { name: 'Reactietijd', pilot: '24u', engine: '4u', enterprise: '1u' },
        { name: 'Account manager', pilot: '-', engine: 'Shared', enterprise: 'Dedicated' },
        { name: 'Custom training', pilot: '-', engine: '-', enterprise: '✓' },
        { name: 'Strategisch advies', pilot: '-', engine: '-', enterprise: '✓' },
      ]
    }
  ];

  return (
    <section className="relative w-full bg-black py-16 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pricing die
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              schaalt met jou
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Van pilot project tot enterprise oplossing.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparante prijzen. Geen verrassingen. Schaal op wanneer je klaar bent.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`group relative overflow-hidden rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10' 
                  : 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10'
              } transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-white/20`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glassmorphic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5"></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20">
                    Meest gekozen
                  </span>
                </div>
              )}

              {/* Content overlay for better readability */}
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-white drop-shadow-md">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-white/70 ml-3 text-lg drop-shadow-sm">{plan.period}</span>
                    )}
                  </div>
                  {plan.yearlyDiscount && (
                    <span className="inline-block bg-gradient-to-r from-emerald-500/80 to-emerald-400/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mb-4 border border-white/20">
                      {plan.yearlyDiscount}
                    </span>
                  )}
                  <p className="text-white/80 text-lg leading-relaxed drop-shadow-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1 mt-0.5">
                          <Check className="w-4 h-4 text-blue-300 flex-shrink-0" />
                        </div>
                        <span className="text-white/90 drop-shadow-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleContactClick}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    plan.buttonStyle === 'primary'
                      ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-xl text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 border border-white/20'
                      : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-lg'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

              {/* Subtle animated background glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          
          {/* Table Header */}
          <div className="relative border-b border-white/10 p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-sm">
              Vergelijk alle features
            </h3>
            <p className="text-white/70 drop-shadow-sm">
              Alles wat je nodig hebt om je lead generation te automatiseren
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto relative">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-6 px-6 text-white/80 font-medium drop-shadow-sm">Feature</th>
                  <th className="text-center py-6 px-6 text-white/80 font-medium drop-shadow-sm">Pilot</th>
                  <th className="text-center py-6 px-6 text-white/80 font-medium drop-shadow-sm">Lead Engine</th>
                  <th className="text-center py-6 px-6 text-white/80 font-medium drop-shadow-sm">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category) => (
                  <>
                    <tr key={category.category} className="border-b border-white/5 bg-white/2">
                      <td colSpan={4} className="py-4 px-6">
                        <h4 className="text-lg font-semibold text-white drop-shadow-sm">
                          {category.category}
                        </h4>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                        <td className="py-4 px-6 text-white/90 drop-shadow-sm">{item.name}</td>
                        <td className="py-4 px-6 text-center text-white/90">
                          {item.pilot === '✓' ? (
                            <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto">
                              <Check className="w-4 h-4 text-blue-300" />
                            </div>
                          ) : (
                            <span className="drop-shadow-sm">{item.pilot}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center text-white/90">
                          {item.engine === '✓' ? (
                            <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto">
                              <Check className="w-4 h-4 text-blue-300" />
                            </div>
                          ) : (
                            <span className="drop-shadow-sm">{item.engine}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center text-white/90">
                          {item.enterprise === '✓' ? (
                            <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto">
                              <Check className="w-4 h-4 text-blue-300" />
                            </div>
                          ) : (
                            <span className="drop-shadow-sm">{item.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Accordion */}
          <div className="lg:hidden p-6 relative">
            {features.map((category) => (
              <div key={category.category} className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <h5 className="text-white font-medium mb-3 drop-shadow-sm">{item.name}</h5>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-white/60 mb-1">Pilot</div>
                          <div className="text-white/90 drop-shadow-sm">{item.pilot}</div>
                        </div>
                        <div>
                          <div className="text-white/60 mb-1">Lead Engine</div>
                          <div className="text-white/90 drop-shadow-sm">{item.engine}</div>
                        </div>
                        <div>
                          <div className="text-white/60 mb-1">Enterprise</div>
                          <div className="text-white/90 drop-shadow-sm">{item.enterprise}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg mb-6 drop-shadow-sm">
            Nog vragen? We helpen je graag bij het kiezen van het juiste plan.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Neem contact op
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadEnginePricing;