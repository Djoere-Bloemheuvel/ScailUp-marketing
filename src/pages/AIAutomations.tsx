
import { ArrowLeft, Cog, Zap, Clock, Target, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIAutomations = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Snelheid',
      description: 'Processen die uren duurden, worden binnen minuten uitgevoerd.'
    },
    {
      icon: Clock,
      title: '24/7 Beschikbaarheid',
      description: 'Uw automatisering werkt door, zelfs als u slaapt.'
    },
    {
      icon: Target,
      title: 'Precisie',
      description: 'Geen menselijke fouten meer, alleen perfecte uitvoering.'
    }
  ];

  const features = [
    'Intelligent document processing',
    'Automatische data extractie',
    'Smart workflow orchestration',
    'Real-time monitoring & alerts',
    'Seamless system integratie',
    'Custom business rule engine'
  ];

  return (
    <div className="min-h-screen bg-premium-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-premium-black/80 backdrop-blur-md border-b border-premium-silver/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center text-premium-silver hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Terug naar home
          </Link>
          
          <div className="flex items-center space-x-2">
            <Cog className="w-6 h-6 text-blue-400" />
            <span className="text-white font-medium">AI Automations</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black" />
        
        {/* Ambient lighting effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8">
            <Cog className="w-4 h-4 mr-2" />
            AI Automations
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Slim. Snel. 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
              Onzichtbaar.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Onze automatisering werkt in de achtergrond — maar voelt als magie op de voorgrond. 
            Van repetitieve taken tot complexe besluitvorming: wij maken het naadloos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base">
              Start uw automatisering
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-4 border-premium-silver/30 text-premium-silver hover:border-white hover:text-white rounded-full transition-all duration-300 hover:scale-105 text-base">
              Bekijk voorbeelden
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Waarom AI Automations?
            </h2>
            <p className="text-lg text-premium-silver/70 max-w-3xl mx-auto">
              Transformeer uw bedrijfsprocessen met intelligente automatisering die zich aanpast, 
              leert en evolueert met uw organisatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border-premium-silver/20 backdrop-blur-md hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-premium-silver/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-premium-black via-blue-950/10 to-premium-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Geavanceerde Functies
              </h2>
              <p className="text-lg text-premium-silver/70 mb-8 leading-relaxed">
                Onze AI automatisering gaat verder dan eenvoudige scripts. We bouwen intelligente 
                systemen die complexe beslissingen kunnen nemen en zich aanpassen aan veranderende omstandigheden.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-premium-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border border-premium-silver/20 backdrop-blur-md p-8 overflow-hidden">
                {/* Animated automation visual */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
                  }} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/40 flex items-center justify-center mb-6">
                    <Cog className="w-12 h-12 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg mb-2">Automation Engine</h3>
                    <p className="text-premium-silver/60 text-sm">Actief en lerend</p>
                  </div>

                  {/* Floating data points */}
                  <div className="absolute top-12 left-12 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-20 right-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-16 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-12 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-premium-black to-purple-950/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om te automatiseren?
          </h2>
          <p className="text-lg text-premium-silver/70 mb-10 max-w-2xl mx-auto">
            Laat ons uw unieke uitdagingen analyseren en een op maat gemaakte automatisering oplossing ontwikkelen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base">
              Plan een gesprek
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-4 border-premium-silver/30 text-premium-silver hover:border-white hover:text-white rounded-full transition-all duration-300 hover:scale-105 text-base">
              Download whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomations;
