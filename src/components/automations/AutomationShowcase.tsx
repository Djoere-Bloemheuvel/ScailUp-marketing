
import { Users, FileText, Zap, CreditCard, BarChart, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AutomationShowcase = () => {
  const automationCategories = [
    {
      icon: Users,
      title: 'Leadgeneratie',
      description: 'Automatische prospect identificatie en intelligent outreach',
      accent: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Offertes & Contracten',
      description: 'Geautomatiseerde documentgeneratie op basis van klantdata',
      accent: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Klant Onboarding',
      description: 'Naadloze onboarding workflows voor nieuwe klanten',
      accent: 'from-green-500 to-emerald-500'
    },
    {
      icon: CreditCard,
      title: 'Facturatie',
      description: 'Automatische factuurverwerking en betalingsherinneringen',
      accent: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart,
      title: 'Rapportage',
      description: 'Real-time dashboards en geautomatiseerde insights',
      accent: 'from-indigo-500 to-blue-500'
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Workflows',
      description: 'Intelligente klantcommunicatie en retentie systemen',
      accent: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationCategories.map((category, index) => (
            <Card 
              key={index}
              className="group bg-gradient-to-br from-premium-gray/15 to-premium-black/30 border-premium-silver/15 backdrop-blur-sm hover:border-blue-400/25 transition-all duration-500 hover:scale-[1.02] cursor-default overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  {/* Icon container with enhanced styling */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center shadow-xl">
                    <div className="relative w-14 h-14">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.accent} p-0.5 transition-all duration-500 shadow-lg opacity-80 group-hover:opacity-100`}>
                        <div className="w-full h-full rounded-xl bg-premium-black flex items-center justify-center relative overflow-hidden">
                          
                          {/* Icon with glow effect */}
                          <category.icon className="w-7 h-7 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300 group-hover:scale-110" 
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))'
                            }} />
                          
                          {/* Subtle sweep animation on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          
                          {/* Ambient glow */}
                          <div className={`absolute inset-1 rounded-lg bg-gradient-to-br ${category.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating accent dots */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${category.accent} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gradient-to-br ${category.accent} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                </div>
                
                <CardTitle className="text-white text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-premium-silver/80 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
