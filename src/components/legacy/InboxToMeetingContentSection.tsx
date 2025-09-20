import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Database, CheckCircle, TrendingUp, Users, ArrowRight, Zap, Shield, Mail, Brain, Target, Settings, HandHeart, RefreshCw, HelpCircle, ChevronDown, ChevronUp, BarChart3, Link, User, Calendar, Clock, Cog } from 'lucide-react';
import { useState } from 'react';
import ServiceSection from './ServiceSection';

const InboxToMeetingContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
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

  // Hoe het werkt - 5 stappen die de Inbox to Meeting Agent doorloopt
  const howItWorksSteps = [
    {
      id: 'prospect-research',
      icon: Search,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Prospect Research & Enrichment
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 1: Intelligente Lead Discovery
          </div>
        </div>
      ),
      subtitle: 'AI verzamelt en verrijkt contactinformatie automatisch',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De agent verzamelt automatisch bedrijfs- en contactinformatie uit databases, LinkedIn en openbare bronnen. Hij verrijkt leads met context zoals rol, recente activiteiten, bedrijfsgrootte en funding events. Alle data wordt gestructureerd opgeslagen voor perfecte personalisatie.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-blue-500',
      number: '01',
      highlight: 'Automatische data-verzameling',
      metrics: 'Uit 100+ databronnen'
    },
    {
      id: 'campaign-creation',
      icon: Mail,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Campagnecreatie & Personalisatie
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 2: Hyperpersoonlijke Content
          </div>
        </div>
      ),
      subtitle: 'Elk bericht uniek en relevant voor de ontvanger',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'In plaats van dat jij campagnes moet bedenken, stelt de agent zelf campagnes voor en maakt hij ze volledig aan. AI schrijft hyperpersoonlijke openingszinnen en pitches die aansluiten op de context van de prospect. Elke mail voelt alsof hij één-op-één geschreven is.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      number: '02',
      highlight: 'Human-like personalisatie',
      metrics: 'Op grote schaal'
    },
    {
      id: 'smart-assignment',
      icon: Target,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Slimme Assignment & Targeting
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 3: Predictive Lead Scoring
          </div>
        </div>
      ),
      subtitle: 'De juiste prospects krijgen de juiste campagnes',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De agent kiest automatisch de juiste contacten voor de juiste campagnes. Hij geeft altijd voorkeur aan leads en campagnes die het hoogste conversiepotentieel hebben. Hierdoor wordt je database optimaal benut zonder verspilling van credits of tijd.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-400 to-indigo-500',
      number: '03',
      highlight: 'Predictive AI scoring',
      metrics: 'Maximale conversie'
    },
    {
      id: 'testing-optimization',
      icon: BarChart3,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Testing & Optimalisatie
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 4: Continu Self-Learning
          </div>
        </div>
      ),
      subtitle: 'Continu leren en optimaliseren voor betere resultaten',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Inbox to Meeting draait continu A/B-tests op onderwerpregels, copy en calls-to-action. Slecht presterende varianten worden automatisch uitgefaseerd, terwijl winnende varianten worden opgeschaald. AI analyseert de resultaten en past campagnes real-time aan.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-blue-500',
      number: '04',
      highlight: 'Continu lerende AI',
      metrics: 'Real-time optimalisatie'
    },
    {
      id: 'reply-management',
      icon: Calendar,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Reply Management & Booking
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 5: Van Reply naar Meeting
          </div>
        </div>
      ),
      subtitle: 'Van reply naar meeting op autopilot',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Wanneer prospects reageren, pakt de agent die replies automatisch op. Je kiest: fully automated modus of human-in-the-loop. AI classificeert reacties en handelt ze intelligent af tot meetings automatisch in je agenda worden geboekt met integraties naar je calendar en CRM.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-blue-600 to-blue-400',
      number: '05',
      highlight: 'End-to-end automatisering',
      metrics: 'Van reply tot meeting'
    }
  ];

  // FAQ data - Inbox to Meeting focus
  const faqData = [
    {
      question: "Wat is de Inbox to Meeting Agent precies?",
      answer: "De Inbox to Meeting Agent is een autonome AI-agent die het hele outbound e-mailproces automatiseert. In tegenstelling tot traditionele bulk mailers, fungeert deze agent als een digitale Sales Development Representative (SDR). Hij doet prospect research, schrijft hyperpersoonlijke e-mails, test wat werkt, handelt reacties af en boekt meetings direct in je agenda. Het is outbound e-mail zoals het bedoeld is: menselijk, relevant en effectief, maar dan op schaal.",
      icon: Brain
    },
    {
      question: "Hoe verschilt dit van gewone e-mailtools?",
      answer: "Het grote verschil zit in de AI-first aanpak. Waar andere tools bulk e-mails sturen met basic personalisatie, neemt onze agent het hele proces uit handen. Hij verzamelt zelf contactgegevens uit databases en LinkedIn, verrijkt leads met context zoals rol en recente activiteiten, schrijft campagnes die écht persoonlijk aanvoelen, test automatisch welke aanpak het beste werkt, en handelt replies intelligent af tot een geboekte meeting. Je krijgt geen tool, maar een digitale collega.",
      icon: Zap
    },
    {
      question: "Hoe werkt de hyperpersonalisatie precies?",
      answer: "De AI analyseert elk prospect grondig voordat hij een mail schrijft. Hij kijkt naar bedrijfsinformatie, recente activiteiten, LinkedIn profielen, nieuws en funding events. Deze context wordt gebruikt om openingszinnen te schrijven die voelen alsof ze handgeschreven zijn. Een mail zou kunnen beginnen met: 'Zag dat jullie recent Series A funding hebben opgehaald voor jullie SaaS platform - interessante timing.' Elke mail is uniek en relevant voor die specifieke ontvanger.",
      icon: User
    },
    {
      question: "Wat gebeurt er met reacties op mijn e-mails?",
      answer: "Hier wordt het echt krachtig. De agent classificeert elke reply automatisch: positief (direct meeting plannen), twijfel (nurturing sequence), negatief (uitsluiten), of 'later' (follow-up reminder). Bij positieve reacties schrijft de AI direct terug met beschikbare tijdslots en boekt automatisch in je agenda. Je kiest zelf of je volledig automatisch wilt werken of een human-in-the-loop model waarbij je AI-suggesties kunt reviewen en goedkeuren.",
      icon: Calendar
    },
    {
      question: "Hoeveel tijd bespaar ik hiermee?",
      answer: "De tijdsbesparing is enorm omdat je geen team van SDR's meer nodig hebt. De agent neemt alle tijdrovende taken over: copywriting, prospect research, A/B-testing, reply management en meeting booking. Veel klanten besparen 20-30 uur per week aan outbound activiteiten. Belangrijker nog: je krijgt betere resultaten omdat de agent 24/7 actief is, nooit moe wordt, en continu leert wat werkt.",
      icon: Clock
    },
    {
      question: "Hoe voorspelbaar zijn de resultaten?",
      answer: "Door de self-learning AI worden resultaten steeds voorspelbaarder. De agent draait continu A/B-tests op onderwerpen, copy en calls-to-action. Slecht presterende varianten worden uitgefaseerd, winnende varianten opgeschaald. Predictive AI berekent per lead de kans op conversie en verdeelt prospects naar campagnes met de beste performance. Hoe langer hij draait, hoe slimmer hij wordt en hoe meer meetings je krijgt.",
      icon: BarChart3
    },
    {
      question: "Is dit niet gewoon spam?",
      answer: "Absoluut niet. Traditioneel cold e-mailen voelt vaak als spam omdat het onpersoonlijk en ongericht is. Onze agent lost dit fundamentele probleem op door elke mail hyperpersoonlijk en relevant te maken. Hij stuurt geen bulk e-mails, maar één-op-één berichten die aansluiten op de context van de ontvanger. Het resultaat: hogere open rates, meer positieve reacties en meetings met gekwalificeerde prospects in plaats van geïrriteerde ontvangers.",
      icon: Shield
    },
    {
      question: "Hoe stel ik de agent in?",
      answer: "Hier gebruiken we onze eigen magie. Onze Onboard & Beyond agents zorgen voor een naadloze implementatie. Je hoeft zelf niets technisch te doen. Onze specialists nemen je bij de hand: we analyseren je huidige proces, koppelen je databases en LinkedIn, definiëren samen je ideale klantprofiel, configureren je merkvoice en messaging framework, en zorgen dat alles perfect integreert met je CRM en agenda. Binnen een week ben je live en zie je de eerste resultaten. Geen gedoe, geen technische hoofdpijn, gewoon resultaat.",
      icon: Settings
    }
  ];

  // Solution steps - Inbox to Meeting process
  const solutionSteps = [
    {
      icon: Search,
      title: "Prospect research",
      description: "AI verzamelt automatisch contact- en bedrijfsinformatie uit databases"
    },
    {
      icon: Mail,
      title: "Hyperpersoonlijke e-mails",
      description: "Unieke berichten gebaseerd op diepgaande profielanalyse"
    },
    {
      icon: RefreshCw,
      title: "Reply management",
      description: "AI handelt reacties af en plant vervolgacties"
    },
    {
      icon: Calendar,
      title: "Direct naar agenda",
      description: "Automatische meeting booking in je agenda en CRM"
    }
  ];

  // Benefits section - Inbox to Meeting focus
  const benefits = [
    "Volledig geautomatiseerd van prospect tot meeting",
    "5x meer gekwalificeerde afspraken in je agenda",
    "Hyperpersoonlijke e-mails die menselijk aanvoelen"
  ];

  // Benefits cards - Inbox to Meeting focus
  const statistics = [
    {
      number: "5x",
      description: "meer meetings door slimme personalisatie",
      icon: Calendar,
      theme: "conversie"
    },
    {
      number: "100%",
      description: "geautomatiseerd van A tot Z",
      icon: Zap,
      theme: "conversie"
    },
    {
      number: "24/7",
      description: "actief, nooit een lead gemist",
      icon: RefreshCw,
      theme: "conversie"
    },
    {
      number: "20-30h",
      description: "bespaard per week aan outbound",
      icon: Clock,
      theme: "conversie"
    },
    {
      number: "89%",
      description: "van outbound e-mail wordt genegeerd",
      icon: Mail,
      theme: "efficiency"
    },
    {
      number: "95%",
      description: "van cold emails voelt als spam",
      icon: Target,
      theme: "efficiency"
    },
    {
      number: "Self-learning",
      description: "wordt slimmer naarmate het langer draait",
      icon: Brain,
      theme: "efficiency"
    },
    {
      number: "Human-like",
      description: "personalisatie op grote schaal",
      icon: Users,
      theme: "efficiency"
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

  return (
    <div className="bg-black min-h-screen">

      {/* Statistics Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 sm:p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/60 text-center h-full min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem Section - "Outbound e-mail werkt niet meer" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - diagonal flowing shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-blue-500/60 to-blue-600/60 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-blue-600/50 to-blue-500/50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px] bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full blur-3xl transform -rotate-12"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                
                {/* Main statistic */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent leading-none mb-4">
                    5x
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    meer meetings
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    door hyperpersoonlijke e-mails
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Outbound e-mail werkt
                <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">
                  niet meer
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Templates werken niet meer. Prospects herkennen bulk e-mails en markeren ze als spam. Gmail en Outlook blokkeren cold outreach steeds agressiever.
                </p>
                <p className="text-blue-300 font-semibold">
                  Inbox to Meeting pakt dit anders aan: elke e-mail voelt authentiek en persoonlijk.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Database className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    89% van outbound e-mails wordt volledig genegeerd
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    20-30 uur per week verloren aan ineffectieve research en schrijfwerk
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    E-mails belanden direct in spam door aggressive filters
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-blue-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Inbox to Meeting maakt van outbound e-mail een voorspelbare pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Waarom kiezen voor Inbox to Meeting?" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - circular spreading pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-blue-500/40 to-blue-600/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-blue-600/30 to-blue-500/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-[250px] h-[600px] sm:w-[350px] sm:h-[800px] md:w-[450px] md:h-[1000px] bg-gradient-to-b from-blue-600/20 to-blue-400/20 rounded-full blur-3xl transform rotate-25"></div>
          <div className="absolute bottom-1/2 left-1/6 w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-r from-blue-400/25 to-blue-500/25 rounded-full blur-3xl"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Waarom kiezen voor
                <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">
                  Inbox to Meeting?
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Outbound e-mail heeft de reputatie van spam. Decision makers krijgen dagelijks tientallen generieke berichten en negeren ze allemaal.
                </p>
                <p>
                  Inbox to Meeting doorbreekt deze ruis door elk bericht hyperpersoonlijk en relevant te maken. Prospects ervaren authentieke interesse in plaats van bulk messaging.
                </p>
                <p className="text-blue-300 font-semibold">
                  Het resultaat: gekwalificeerde meetings in plaats van geïrriteerde ontvangers.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const bulletIcons = [Calendar, Users, Brain];
                  const BulletIcon = bulletIcons[index] || Calendar;
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
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-blue-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Van koude e-mail naar warme afspraken - volledig geautomatiseerd.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Visual representation */}
            <div className="text-center">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                
                {/* Main visual */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent leading-none mb-4">
                    24/7
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    autonome uitvoering
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    van research tot meeting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hoe het werkt Section - using ServiceSection like ConnectToClientContentSection */}
      <section className="relative bg-black ambient">
        {/* Ambient Background Lights - outbound email themed */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="backlight backlight-left bg-blue-500"></div>
          <div className="backlight backlight-right bg-blue-600"></div>
          <div className="backlight backlight-center bg-blue-500 opacity-30"></div>
        </div>

        {/* Services - using exact ServiceSection component */}
        <div className="relative z-10">
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
      
      {/* Inbox to Meeting Approach Section */}
      <section id="approach" className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Inbox to Meeting themed ambient lights */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Van koude e-mail naar <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">warme afspraken</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
              Autonome e-mail outreach die voelt als een menselijke SDR.<br className="hidden sm:block" />
              Geen spam, wel resultaat.
            </p>
          </div>

          {/* Solution Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {solutionSteps.map((step, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/60 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="text-center">
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => {
                const bulletIcons = [Calendar, Users, Brain];
                const BulletIcon = bulletIcons[index] || Calendar;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3 text-base sm:text-lg text-gray-300"
                  >
                    <BulletIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {benefit}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-lg font-medium rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Start Inbox to Meeting
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Veelgestelde <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">vragen</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <div className="px-6 pb-6">
                    <div className="pl-14 text-gray-300 leading-relaxed text-base" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-lg font-medium rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Start Inbox to Meeting
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/30 to-blue-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Main headline with power statement */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-[-0.02em]">
                Jouw outbound e-mail wordt <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-medium">jouw grootste pipeline</span>
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Value proposition with metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-white">5x</div>
                <div className="text-sm sm:text-base text-blue-300 font-medium">meer meetings</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm sm:text-base text-blue-300 font-medium">automatisch actief</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm sm:text-base text-blue-300 font-medium">hyperpersoonlijk</div>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-premium-silver/85 max-w-3xl mx-auto leading-relaxed font-light">
              Stop met handmatig e-mails sturen. Inbox to Meeting neemt het over: van prospect research tot meeting in je agenda. 
              <strong className="text-white font-medium"> Authentiek. Persoonlijk. Op schaal.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-10">
              <button 
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-base sm:text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                <span className="relative z-10">Start nu gratis</span>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 border-2 border-blue-400/40 text-blue-300 hover:text-white hover:border-blue-400/70 font-semibold text-base sm:text-lg rounded-2xl transition-all duration-300 hover:bg-blue-500/15 hover:backdrop-blur-sm">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
                Live demo bekijken
              </button>
            </div>

            {/* Trust indicator */}
            <div className="text-center pt-6 sm:pt-8">
              <p className="text-sm sm:text-base text-premium-silver/60 font-light">
                Vertrouwd door 500+ bedrijven • Binnen 14 dagen eerste resultaten
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default InboxToMeetingContentSection;