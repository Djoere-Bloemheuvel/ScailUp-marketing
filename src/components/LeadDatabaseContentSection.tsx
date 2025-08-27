import React from 'react';
import { motion } from 'framer-motion';
import { Database, Target, Users, RefreshCw, Settings, Shield, TrendingUp, Zap, CheckCircle, BarChart3, Brain, Mail, Search, Link, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import ServiceSection from './ServiceSection';

const LeadDatabaseContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  // Simulate visibility for all steps
  React.useEffect(() => {
    setIsVisible({ 0: true, 1: true, 2: true, 3: true, 4: true, 5: true });
  }, []);

  // Hoe het werkt - 6 stappen die de Lead Database doorloopt
  const howItWorksSteps = [
    {
      id: 'central-database',
      icon: Database,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Eén Bron van Waarheid
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 1: Centrale Database Consolidatie
          </div>
        </div>
      ),
      subtitle: 'Alle contact- en bedrijfsgegevens samen',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Personen, rollen, seniority, bedrijfsgrootte, industrie, regio, tech stack, funding, hiring signals, social links - alles komt samen. Duplicaten worden automatisch samengevoegd op e-mail, LinkedIn-ID en bedrijfsdomein voor één schone database.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-300 to-blue-500',
      number: '01',
      highlight: 'Complete data consolidatie',
      metrics: '500k+ decision makers'
    },
    {
      id: 'smart-segmentation',
      icon: Target,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Slimme Segmentatie & ICP-matching
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 2: AI-Gedreven Targeting
          </div>
        </div>
      ),
      subtitle: 'Dynamische segmenten met Match Score',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Definieer je ICP ("NL/BE, 10-200 FTE, B2B SaaS, marketing/sales beslissers") en de Audience Builder vertaalt dat naar dynamische segmenten. Elke lead krijgt een Match Score (0-100) met "waarom"-uitleg zoals "past bij propositie X, recent Series A, marketingteam groeit".',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-blue-300',
      number: '02',
      highlight: 'Match Score 0-100',
      metrics: 'Met explainable AI'
    },
    {
      id: 'data-enrichment',
      icon: RefreshCw,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Verrijking & Kwaliteitsbewaking
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 3: Continu Data-onderhoud
          </div>
        </div>
      ),
      subtitle: 'Periodieke verrijking en validatie',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Profielen worden periodiek verrijkt met publiek beschikbare data van websites en LinkedIn. E-mails worden geverifieerd, bounced adressen onderdrukt, en inconsistenties gemarkeerd met confidence scores. Nieuwe info overschrijft nooit betrouwbare data zonder reden.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      number: '03',
      highlight: 'Real-time verrijking',
      metrics: 'Confidence scores'
    },
    {
      id: 'audience-recipes',
      icon: Users,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Audience Recipes
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 4: Herbruikbare Filter-recepten
          </div>
        </div>
      ),
      subtitle: 'Opslaan, plannen en hergebruiken',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Bouw "recepten" zoals "DGA/Founder in e-commerce, 20-100 FTE, Nederland". Sla ze op, plan auto-refresh en stuur ze door naar Inbox to Meeting, Connect to Client of Account to Deal agent - met één klik. Perfecte targeting, keer op keer.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-blue-400',
      number: '04',
      highlight: 'One-click deployment',
      metrics: 'Naar alle agents'
    },
    {
      id: 'smart-assignment',
      icon: Brain,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Slimme Campagne-toewijzing
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 5: Intelligente Channel Matching
          </div>
        </div>
      ),
      subtitle: 'Automatische best-fit toewijzing',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De Builder wijst leads automatisch toe aan de best passende campagne: match score, performance-historie en kanaalkans (e-mail vs LinkedIn vs ABM). Suppression rules voorkomen dubbele benadering en hercontact binnen cooling-down periodes.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-blue-400 to-blue-500',
      number: '05',
      highlight: 'Smart channel routing',
      metrics: 'Zero overlap garantie'
    },
    {
      id: 'compliance-governance',
      icon: Shield,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Compliance & Governance
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 6: GDPR-Conform Data Management
          </div>
        </div>
      ),
      subtitle: 'Volledig conform privacy-wetgeving',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'GDPR-principes ingebouwd: suppression lists, opt-out beheer, transparante herkomstvelden en duidelijke regels per kanaal. Jij houdt controle, het systeem bewaakt consistentie en voorkomt compliance-risicos.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/5 to-black',
      accentColor: 'from-blue-500 to-blue-300',
      number: '06',
      highlight: 'GDPR compliant',
      metrics: 'Volledig auditeerbaar'
    }
  ];

  // FAQ data - Lead Database focus
  const faqData = [
    {
      question: "Hoe verschilt Lead Database van gewone lijstenverkoop?",
      answer: "Lead Database is een levend systeem vs. statische CSV's. De data wordt continu verrijkt, gevalideerd en opgeschoond. Je krijgt match scores met uitleg waarom iemand past bij je ICP, plus automatische segmentatie en campagne-toewijzing. Geen verouderde lijsten meer, maar een database die met je meegroeit.",
      icon: Database
    },
    {
      question: "Hoe werkt de AI-segmentatie precies?",
      answer: "Je definieert je Ideal Customer Profile (bijvoorbeeld 'B2B SaaS, 20-100 FTE, marketing beslissers, Benelux'). De AI vertaalt dit naar dynamische segmenten en geeft elke lead een Match Score van 0-100. Je ziet precies waarom iemand scoort: 'Series A funding, marketingteam groeit, past bij propositie X'. Geen black box, maar explainable AI.",
      icon: Target
    },
    {
      question: "Wat zijn Audience Recipes en hoe werken ze?",
      answer: "Audience Recipes zijn opgeslagen filtersets zoals 'Founders in e-commerce, 50+ FTE, recent funding'. Eenmaal gemaakt kun je ze hergebruiken, auto-refresh instellen en direct doorsturen naar je e-mail, LinkedIn of ABM agents. Een soort 'macros' voor je targeting - bouw eens, gebruik overal.",
      icon: Users
    },
    {
      question: "Hoe houdt het systeem de data kwaliteit hoog?",
      answer: "Meerdere lagen: (1) Automatische deduplicatie op e-mail/LinkedIn/domein, (2) Periodieke verrijking met publieke bronnen, (3) E-mailvalidatie en bounce-suppressie, (4) Confidence scores voor data-betrouwbaarheid, (5) Audit trails van alle wijzigingen. Nieuwe data overschrijft nooit goede data zonder goede reden.",
      icon: RefreshCw
    },
    {
      question: "Hoe voorkom ik dubbele outreach tussen kanalen?",
      answer: "De Database heeft ingebouwde suppression rules en cooling-down periodes. Als iemand via LinkedIn wordt benaderd, wordt e-mail automatisch geblokkeerd voor X dagen. Je stelt de regels in per kanaal, en het systeem bewaakt zero-overlap. Geen vervelende dubbele berichten meer.",
      icon: Shield
    },
    {
      question: "Is het GDPR-compliant en hoe zit het met privacy?",
      answer: "Volledig GDPR-conform: transparante herkomstvelden, opt-out mechanismen, suppression lists en auditeerbare data-processing. Je kunt per persoon zien waar de data vandaan komt en hoe recent het is. Alle processing is gedocumenteerd voor compliance-audits.",
      icon: Settings
    },
    {
      question: "Hoe integreert het met mijn CRM en andere tools?",
      answer: "Native integraties met HubSpot, Salesforce, Pipedrive en andere CRM's. Data wordt bidirectioneel gesynchroniseerd: status updates, campagne-resultaten en nieuwe leads. Ook API toegang voor custom integraties. Je CRM blijft leading, Lead Database voedt het met quality data.",
      icon: Link
    },
    {
      question: "Wat kost Lead Database en hoe wordt afgerekend?",
      answer: "Pricing is gebaseerd op database-grootte en aantal actieve segmenten/recipes. Geen per-lead kosten zoals traditionele providers, maar een fair-use model. Je betaalt voor de infrastructuur en AI-services, niet per e-mail of contact. Schaal zonder kostenexplosie.",
      icon: TrendingUp
    }
  ];

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Benefits section
  const benefits = [
    "Eén schone database voor alle agents en kanalen",
    "AI-segmentatie met explainable Match Scores",
    "GDPR-compliant met volledige audit trails"
  ];

  return (
    <div className="bg-black text-white">
      
      {/* Problem Section - "Je outreach is maar zo goed als je data" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - data flow inspired shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-blue-300/30 to-blue-500/30 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-blue-400/25 to-blue-300/25 rounded-full blur-3xl opacity-70"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left - Big Bold Number */}
            <div className="text-center">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Main statistic */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent leading-none mb-4">
                    89%
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    verkeerde data
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    in gemiddelde leadlijsten
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Je outreach is maar zo goed als je data
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Statische CSV's, verouderde lijsten en rommeldata leiden tot bounced e-mails, verkeerde targeting en verspilde budgets. Lead Database is geen lijstenverkoper maar een levend systeem dat je doelgroepen opbouwt, onderhoudt en intelligent toewijst aan je campagnes.
                </p>
                <p className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Van chaos naar controle. Van giswerk naar zekerheid.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Database className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    89% van leadlijsten bevat verouderde of incorrecte contactgegevens
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Gemiddeld 30% bounce rate door slechte e-mailvalidatie
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Target className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Verkeerde targeting leidt tot 85% lagere response rates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Waarom kiezen voor Lead Database?" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - database grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-blue-400/15 to-blue-300/15 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Van rommellijsten naar slimme doelgroepen
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Traditionele leadproviders verkopen statische lijsten die binnen weken verouderen. onze lead database
                </p>
                <p>
                  Met AI-segmentatie krijg je niet alleen contactgegevens, maar ook inzicht waarom iemand bij je ICP past. Match Scores, buying signals en contextual data - alles wat je agents nodig hebben voor succesvolle outreach.
                </p>
                <p className="text-blue-300 font-semibold">
                  Het verschil tussen schieten met hagel en precisie-targeting.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const bulletIcons = [Database, Target, Shield];
                  const BulletIcon = bulletIcons[index] || Database;
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
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-blue-900/20 rounded-xl border border-blue-400/30">
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Minder zoeken, meer sturen - met betere resultaten.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Visual representation */}
            <div className="text-center">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Main visual */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent leading-none mb-4">
                    500k+
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    decision makers
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    continu verrijkt & gesegmenteerd
                  </div>
                </div>
              </div>
            </div>
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
      
      {/* Lead Database Approach Section */}
      <section id="approach" className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Lead Database themed ambient lights */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur-3xl opacity-15"></div>
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
              Van data naar <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-medium">resultaat</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
              AI-first doelgroep management dat schaal biedt zonder chaos.<br className="hidden sm:block" />
              Voor agents die resultaat leveren.
            </p>
          </motion.div>

          {/* Solution Steps Grid - Lead Database features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              {
                icon: Database,
                title: "Centrale consolidatie",
                description: "Alle data samen in één schone database"
              },
              {
                icon: Target,
                title: "AI-segmentatie",
                description: "Match Scores met explainable insights"
              },
              {
                icon: Users,
                title: "Audience Recipes",
                description: "Herbruikbare filters voor alle agents"
              },
              {
                icon: Shield,
                title: "GDPR compliant",
                description: "Volledig conform privacy wetgeving"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 sm:p-8 hover:border-blue-400/40 transition-all duration-300 hover:bg-black/60 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {step.description}
                  </p>
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
                const bulletIcons = [Database, Target, Shield];
                const BulletIcon = bulletIcons[index] || Database;
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
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Veelgestelde <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-medium">vragen</span>
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {faq.question}
                    </span>
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
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pl-14 text-gray-300 leading-relaxed text-base" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
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
              Van lijsten naar leadgeneratoren.
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Lead Database bouwt je perfecte audience.
            </p>
            
            {/* Apple-style description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-8 sm:mt-12">
              Terwijl anderen nog worstelen met verouderde lijsten, heeft jouw AI al je volgende doelgroep klaar.
            </p>

            {/* Apple-style CTA button */}
            <div className="flex justify-center items-center mt-12 sm:mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-blue-300/25 min-w-[180px] sm:min-w-[200px]"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Start nu
              </motion.button>
            </div>

            {/* Apple-style subtle bottom text */}
            <p className="text-xs sm:text-sm text-gray-600 mt-8 sm:mt-12 font-normal">
              Binnen weken na implementatie zijn je eerste gesegmenteerde doelgroepen al actief.
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

export default LeadDatabaseContentSection;