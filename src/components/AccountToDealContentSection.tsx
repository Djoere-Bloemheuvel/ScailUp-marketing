import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Target, 
  Brain, 
  Zap, 
  Database, 
  Mail, 
  BarChart3, 
  ChevronDown, 
  ChevronUp,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Shield,
  Clock,
  Search,
  RefreshCw,
  Calendar
} from 'lucide-react';
import ServiceSection from './ServiceSection';

const AccountToDealContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  // Simulate visibility for all steps
  React.useEffect(() => {
    setIsVisible({ 0: true, 1: true, 2: true, 3: true, 4: true });
  }, []);

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Account to Deal statistics
  const statistics = [
    { value: "5-8x", description: "meer stakeholders per deal" },
    { value: "Enterprise", description: "strategische accounts" },
    { value: "100%", description: "geautomatiseerd multithreading" },
    { value: "AI-first", description: "account intelligence" },
    { value: "Multi-channel", description: "LinkedIn + Email" },
    { value: "Strategic", description: "ABM focus" },
    { value: "24/7", description: "continue prospecting" },
    { value: "Compliant", description: "binnen alle richtlijnen" }
  ];

  // Benefits for text blocks
  const benefits = [
    "AI-gedreven stakeholder mapping van enterprise accounts",
    "Hyperpersoonlijke berichten per rol en verantwoordelijkheid", 
    "Automatische multithreading naar alle decision makers"
  ];


  // FAQ data
  const faqData = [
    {
      question: "Hoe verschilt Account to Deal van gewone outreach?",
      answer: "Account to Deal richt zich op strategische accounts met meerdere stakeholders. In plaats van één contact te benaderen, identificeren we 5-8 decision makers per account en benaderen deze simultaan met rol-specifieke berichten. Dit verhoogt je kansen exponentieel."
    },
    {
      question: "Welke type bedrijven zijn geschikt voor Account to Deal?",
      answer: "Account to Deal is ontworpen voor enterprise-gerichte bedrijven die strategische accounts willen ontwikkelen. Denk aan accounts met complexe besluitvormingsprocessen, hogere deal-waarden en meerdere stakeholders. Perfect voor B2B tech, consulting, en enterprise software."
    },
    {
      question: "Hoe zorgt de agent voor consistente messaging?",
      answer: "De agent gebruikt een central narrative per account, maar past de boodschap aan per stakeholder. Alle berichten versterken elkaar en vermijden overlap. CFO hoort over ROI, CTO over technische voordelen, maar de kern-boodschap blijft consistent."
    },
    {
      question: "Kan ik de berichten reviewen voordat ze verstuurd worden?",
      answer: "Ja, je kunt kiezen voor automatische verzending of approval-workflow. Veel klanten starten met review-mode en schakelen later over naar volledig automatisch wanneer ze vertrouwen hebben in de kwaliteit."
    },
    {
      question: "Hoe bepaalt de agent welke stakeholders te benaderen?",
      answer: "De agent analyseert het complete account: organisatie-chart, job functions, recent nieuws, en buying signals. Hij identificeert decision makers, influencers en gatekeepers, plus hun onderlinge relaties en macht-dynamiek."
    },
    {
      question: "Is multithreading niet verwarrend voor prospects?",
      answer: "Juist niet. Professionele accounts verwachten contact vanuit verschillende hoeken. Account to Deal coördineert de timing en messaging zo dat het natuurlijk voelt. Elke stakeholder krijgt relevante informatie voor hun rol."
    },
    {
      question: "Hoe meet ik het succes van Account to Deal campagnes?",
      answer: "Je krijgt volledige zichtbaarheid: response rates per stakeholder, account-level engagement, meeting conversion, en deal progression. Plus inzicht in welke combinaties van stakeholders het best werken voor je industrie."
    },
    {
      question: "Werkt dit ook voor kleinere accounts?",
      answer: "Account to Deal is geoptimaliseerd voor strategische accounts met 50+ employees en complexe besluitvorming. Voor kleinere accounts raden we Connect to Client of Inbox to Meeting aan - die zijn efficiënter voor eenvoudigere sales cycles."
    }
  ];

  // Hoe het werkt - 5 stappen die de Account to Deal Agent doorloopt
  const howItWorksSteps = [
    {
      id: 'account-research',
      icon: Building2,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Account Mapping & Research
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 1: Complete Account Intelligence
          </div>
        </div>
      ),
      subtitle: 'AI analyseert het volledige account en identificeert alle stakeholders',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De agent doet uitgebreid research naar het account: organisatiestructuur, recent nieuws, financiële situatie, tech stack en uitdagingen. Alle beslissers, influencers en gatekeepers worden geïdentificeerd met hun rollen, verantwoordelijkheden en onderlinge relaties. Machine learning voorspelt de buying journey en wie wanneer betrokken moet worden.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-600 to-indigo-500',
      number: '01',
      highlight: 'Complete stakeholder mapping',
      metrics: '5-8 beslissers per account'
    },
    {
      id: 'stakeholder-analysis',
      icon: Users,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Stakeholder Profiling & Intelligence
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 2: Individual Context Building
          </div>
        </div>
      ),
      subtitle: 'Diepgaande analyse van elke stakeholder individueel',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Voor elke geïdentificeerde stakeholder doet AI individueel research: LinkedIn profiel, functiegeschiedenis, verantwoordelijkheden, beslissingsbevoegdheden en persoonlijke interesses. Deze informatie wordt gebruikt om rol-specifieke berichten te creëren die aansluiten bij hun unieke perspectief en prioriteiten binnen de organisatie.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-indigo-400',
      number: '02',
      highlight: 'Individual stakeholder intelligence',
      metrics: 'Per rol en verantwoordelijkheid'
    },
    {
      id: 'multithreaded-outreach',
      icon: MessageSquare,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Multithreaded Outreach Campaign
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 3: Simultane Stakeholder Benadering
          </div>
        </div>
      ),
      subtitle: 'Parallelle outreach met rol-specifieke messaging',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'AI schrijft unieke berichten voor elke stakeholder die aansluiten bij hun rol: CFO hoort over ROI en kostenbesparingen, CTO over technische integratie, CEO over strategische voordelen. Alle berichten versterken elkaar en volgen een gecoördineerde narrative die het account als geheel overtuigt van de waarde.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-indigo-400 to-blue-400',
      number: '03',
      highlight: 'Rol-specifieke personalisatie',
      metrics: 'Consistent account narrative'
    },
    {
      id: 'coordinated-followup',
      icon: RefreshCw,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Gecoördineerde Opvolgstrategie
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 4: Strategic Nurturing Sequences
          </div>
        </div>
      ),
      subtitle: 'Intelligente timing en follow-up per stakeholder',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De agent coördineert follow-ups tussen stakeholders om momentum te creëren. Wanneer de CTO interesse toont, wordt de CEO geïnformeerd over technische haalbaarheid. Bij budget-vragen van de CFO krijgt de CEO ROI-informatie. Deze orchestratie verhoogt de kans dat alle stakeholders synchroon naar een beslissing bewegen.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-500 to-indigo-500',
      number: '04',
      highlight: 'Cross-stakeholder orchestratie',
      metrics: 'Synchronized decision making'
    },
    {
      id: 'deal-acceleration',
      icon: Target,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Deal Acceleration & Closing
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 5: Strategic Meeting Facilitation
          </div>
        </div>
      ),
      subtitle: 'Van interesse naar strategische partnership',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Wanneer meerdere stakeholders interesse tonen, faciliteert de agent strategische meetings met de juiste combinatie van beslissers. AI analyseert sentiment en timing om het optimale moment voor proposals te identificeren. Je krijgt een complete briefing over alle stakeholders, hun posities en de beste aanpak voor deal-closing.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-indigo-500 to-blue-500',
      number: '05',
      highlight: 'Strategic deal facilitation',
      metrics: 'Account-level partnerships'
    }
  ];

  return (
    <div className="bg-black text-white">
      
      {/* Statistics Section - Direct onder hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Resultaten die <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">tellen</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
              Account to Deal transformeert strategische accounts in predictable revenue. Elke metric toont de kracht van AI-gedreven multithreading.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400/40 transition-all duration-500 hover:bg-black/60"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-blue-300 font-medium leading-tight group-hover:text-blue-200 transition-colors duration-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Text + Visual Block 1 - Account Intelligence */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Enhanced Background Effects with stronger backlight */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/40 to-indigo-500/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-gradient-to-tl from-blue-500/35 to-indigo-400/35 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-blue-600/25 to-indigo-600/25 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle fade to black at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-5"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
          }}
        />
        
        {/* Subtle fade to black at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-5"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Enterprise accounts <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">gedecodeerd</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Gewone outreach faalt bij enterprise accounts omdat het complexe besluitvorming negeert. Een CEO kan geïnteresseerd zijn, maar zonder buy-in van CFO, CTO en andere stakeholders gaat de deal nergens heen.
                </p>
                <p className="text-blue-300 font-semibold">
                  Account to Deal pakt dit anders aan: het complete account wordt strategisch benaderd met multithreading.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Complete account-analyse van structuur tot uitdagingen
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Users className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    5-8 stakeholders per account geïdentificeerd en benaderd
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Brain className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    AI-gedreven rol-specifieke messaging per stakeholder
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-indigo-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Van single-thread naar multithreaded success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-950/20 via-indigo-900/30 to-black/50 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 sm:p-10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-indigo-500/20 to-blue-400/20 rounded-full blur-lg"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl mb-4">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Account</h3>
                    <p className="text-blue-300 text-sm">Technology Company - 500+ employees</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { role: "CEO", status: "Contacted" },
                      { role: "CFO", status: "Engaged" }, 
                      { role: "CTO", status: "Meeting" },
                      { role: "VP Sales", status: "Interested" }
                    ].map((stakeholder, idx) => (
                      <div key={idx} className="bg-white/5 border border-blue-400/20 rounded-lg p-3 text-center">
                        <div className="text-white text-sm font-medium">{stakeholder.role}</div>
                        <div className="text-blue-300 text-xs mt-1">{stakeholder.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Text + Visual Block 2 - Multithreading Strategy */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Enhanced Background Effects with stronger backlight */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/40 to-blue-400/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-400/35 to-blue-500/35 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/2 w-[400px] h-[400px] bg-gradient-to-bl from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/5 w-[350px] h-[350px] bg-gradient-to-br from-blue-500/25 to-indigo-500/25 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle fade to black at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-5"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
          }}
        />
        
        {/* Subtle fade to black at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-5"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Visual Element - Left side this time */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative bg-gradient-to-br from-indigo-950/20 via-blue-900/30 to-black/50 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 sm:p-10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-tl from-blue-500/20 to-indigo-400/20 rounded-full blur-lg"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-2xl mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multithreading Dashboard</h3>
                    <p className="text-indigo-300 text-sm">Parallel stakeholder engagement</p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: "Sarah (CFO)", message: "ROI focused", status: "Responded" },
                      { name: "Mike (CTO)", message: "Tech integration", status: "Meeting set" },
                      { name: "Lisa (VP Ops)", message: "Process optimization", status: "Engaged" }
                    ].map((contact, idx) => (
                      <div key={idx} className="bg-white/5 border border-indigo-400/20 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-white text-sm font-medium">{contact.name}</div>
                            <div className="text-indigo-300 text-xs">{contact.message}</div>
                          </div>
                          <div className="text-green-400 text-xs">{contact.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content - Right side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Waarom kiezen voor <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">Account to Deal?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Single-threading werkt niet bij enterprise accounts. Zelfs als één stakeholder geïnteresseerd is, kan de deal alsnog vastlopen op andere beslissers. Account to Deal elimineert dit risico door iedereen parallel te benaderen.
                </p>
                <p className="text-blue-300 font-semibold">
                  Het resultaat: waardevolle accounts die systematisch ontwikkeld worden tot strategische partnerships.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const bulletIcons = [BarChart3, Users, Mail];
                  const BulletIcon = bulletIcons[index] || BarChart3;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                    >
                      <BulletIcon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">
                        {benefit}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-indigo-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Van account naar strategic partnership - volledig geautomatiseerd.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hoe het werkt Section - using ServiceSection components */}
      <section className="relative bg-black">
        {/* Services - using exact ServiceSection component */}
        <div className="relative">
          {howItWorksSteps.map((step, index) => (
            <ServiceSection
              key={step.id}
              service={step}
              index={index}
              isVisible={isVisible[index as keyof typeof isVisible]}
              walkthrough={false}
            />
          ))}
        </div>
      </section>

      {/* Workflow Section - Account to Deal Approach */}
      <section id="approach" className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Account to Deal themed ambient lights */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Van account naar <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">strategic deal</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
              Enterprise ABM dat voelt als een strategisch salesteam.<br className="hidden sm:block" />
              Geen single-threading, wel multithreaded success.
            </p>
          </motion.div>

          {/* Statistics Grid - 8 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {[
              { value: "5-8x", description: "meer stakeholders per deal", icon: Building2 },
              { value: "Enterprise", description: "strategische accounts", icon: Users },
              { value: "100%", description: "geautomatiseerd multithreading", icon: Zap },
              { value: "AI-first", description: "account intelligence", icon: Brain },
              { value: "Multi-channel", description: "LinkedIn + Email", icon: MessageSquare },
              { value: "Strategic", description: "ABM focus", icon: Target },
              { value: "24/7", description: "continue prospecting", icon: Clock },
              { value: "Compliant", description: "binnen alle richtlijnen", icon: Shield }
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-blue-300 mb-1 sm:mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => {
                const bulletIcons = [BarChart3, Users, Mail];
                const BulletIcon = bulletIcons[index] || BarChart3;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-center gap-3 text-base sm:text-lg text-gray-300"
                  >
                    <BulletIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {benefit}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Veelgestelde <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">vragen</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14 text-gray-300 leading-relaxed text-base" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Apple-style Closing CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        {/* Apple-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* Very subtle ambient glow with fade-out */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/2 left-1/2 w-[800px] sm:w-[1000px] lg:w-[1200px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
               style={{
                 background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)'
               }}>
          </div>
        </div>
        
        {/* Apple-style content container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            
            {/* Apple-style headline */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Maak van accounts partnerships.
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Account to Deal opent alle deuren tegelijk.
            </p>
            
            {/* Apple-style description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-8 sm:mt-12">
              Terwijl anderen nog worstelen met één contact, spreek jij al met de hele C-suite.
            </p>

            {/* Apple-style CTA button */}
            <div className="flex justify-center items-center mt-12 sm:mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-blue-400/25 min-w-[180px] sm:min-w-[200px]"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Start nu
              </motion.button>
            </div>

            {/* Apple-style subtle bottom text */}
            <p className="text-xs sm:text-sm text-gray-600 mt-8 sm:mt-12 font-normal">
              Binnen weken na implementatie zijn je eerste enterprise deals al in beweging.
            </p>
            
          </motion.div>
        </div>
        
        {/* Apple-style progressive edge fade */}
        <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)'
             }}>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
             style={{
               background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)'
             }}>
        </div>
      </section>

    </div>
  );
};

export default AccountToDealContentSection;