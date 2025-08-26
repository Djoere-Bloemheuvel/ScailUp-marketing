import { motion } from 'framer-motion';
import { Clock, MessageSquare, Search, Database, CheckCircle, TrendingUp, Users, ArrowRight, Zap, Shield, Mail, Brain, Target, Settings, HandHeart, RefreshCw, HelpCircle, ChevronDown, ChevronUp, BarChart3, Link, Heart, Award } from 'lucide-react';
import { useState } from 'react';

const OnboardAndBeyondContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data - Onboard and Beyond focus
  const faqData = [
    {
      question: "Wat is Onboard and Beyond precies?",
      answer: "Onboard and Beyond is een AI-aangedreven customer success platform dat nieuwe klanten vanaf dag één succesvol maakt. Het automatiseert de complete onboarding journey - van welkomstbericht tot producttraining, van eerste stappen tot langetermijn succes tracking. Terwijl de meeste bedrijven klanten loslaten na de verkoop, blijft jouw systeem actief begeleiden, ondersteunen en optimaliseren voor maximaal succes.",
      icon: Heart
    },
    {
      question: "Waarom is goede onboarding zo belangrijk voor klantsucces?",
      answer: "De eerste 90 dagen bepalen of een klant succesvol wordt of churnt. Research toont aan dat klanten die een uitstekende onboarding ervaren 50% langer blijven en 40% meer waarde genereren. Slechte onboarding leidt tot frustratie, onderbenutting van je product, en uiteindelijk vertrek naar concurrenten. Onboard and Beyond zorgt dat elke klant vanaf dag één de waarde ervaart die ze verwachtten.",
      icon: TrendingUp
    },
    {
      question: "Hoe automatiseert het systeem de onboarding?",
      answer: "Het systeem creëert een gepersonaliseerde onboarding journey op basis van klanttype, product package en doelstellingen. Automatische welkomstsequenties, stap-voor-stap tutorials, proactieve check-ins, en slimme content delivery zorgen voor een soepele ervaring. Alles wordt getimed op basis van gebruikersgedrag - als iemand vastloopt, krijgen ze extra hulp. Als ze vooruitgaan, worden ze uitgedaagd met volgende stappen.",
      icon: Settings
    },
    {
      question: "Hoe weet het systeem wanneer een klant hulp nodig heeft?",
      answer: "Door slimme monitoring van gebruikersgedrag, product usage, en engagement metrics. Als een klant bijvoorbeeld 3 dagen inactief is, gestopt is in een cruciaal proces, of bepaalde features niet gebruikt, triggert dit automatisch een intervention. Dit kan een persoonlijke mail zijn, een tutorial, of zelfs een directe outreach van je team. Zo voorkom je problemen voordat ze escaleren.",
      icon: Brain
    },
    {
      question: "Kan ik de onboarding aanpassen aan mijn specifieke klanten?",
      answer: "Absoluut! Het systeem biedt volledige customization. Je kunt verschillende onboarding tracks maken voor verschillende klanttypes, branche-specifieke content toevoegen, je eigen branding integreren, en de tone of voice aanpassen. Ook kun je handmatige touchpoints inbouwen waar persoonlijke interactie gewenst is. Het systeem leert ook van succesvolle klanten om de journey steeds te optimaliseren.",
      icon: Target
    },
    {
      question: "Hoe integreert het met onze bestaande tools en CRM?",
      answer: "Onboard and Beyond integreert naadloos met alle populaire platforms zoals HubSpot, Salesforce, Intercom, Slack, en je product tools. Alle klantinteracties, progress updates, en success metrics worden automatisch gesynced. Je team heeft altijd realtime inzicht in de onboarding status van elke klant, zonder extra administratieve lasten of handmatige data-entry.",
      icon: Link
    },
    {
      question: "Wat gebeurt er na de initial onboarding periode?",
      answer: "Dat is waar 'Beyond' begint! Het systeem blijft je klanten monitoren en ondersteunen voor langetermijn succes. Proactieve feature suggestions, renewal reminders, upsell opportunities, en continuous value delivery. Het doel is om van elke klant een succesverhaal en ambassadeur te maken. Klanten die het systeem doorlopen worden gemiddeld 60% meer waardevol en blijven 3x langer.",
      icon: Award
    },
    {
      question: "Hoe meet ik het succes van de geautomatiseerde onboarding?",
      answer: "Het platform biedt uitgebreide analytics: time-to-value, feature adoption rates, customer health scores, en churn predictions. Je ziet precies waar klanten vastlopen, welke content het beste werkt, en wat leidt tot de hoogste tevredenheid. Deze inzichten helpen je de onboarding continu te verbeteren en zorgen voor meetbare ROI op je customer success investeringen.",
      icon: BarChart3
    }
  ];

  // Integration logos data - customer success focus
  const integrations = [
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
    { name: 'Salesforce', logo: '/salesforce-logo.png' },
    { name: 'Intercom', logo: 'https://img.icons8.com/color/48/intercom.png' },
    { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png' },
    { name: 'Notion', logo: '/notion-logo.png' },
    { name: 'Zapier', logo: 'https://img.icons8.com/color/48/zapier.png' },
    { name: 'Calendly', logo: '/calendly-logo.png' },
    { name: 'Google Workspace', logo: '/google-sheets-logo.webp' },
    { name: 'Microsoft Teams', logo: '/microsoft-teams-logo.png' },
    { name: 'Pipedrive', logo: '/pipedrive-logo.svg' },
    { name: 'Mailchimp', logo: '/mailchimp-logo.png' },
    { name: 'Airtable', logo: '/airtable-logo.png' },
    { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png' },
    { name: 'Zendesk', logo: 'https://img.icons8.com/color/48/zendesk.png' }
  ];

  // Benefits section - Onboard and Beyond focus
  const benefits = [
    "40% hogere klanttevredenheid door persoonlijke onboarding",
    "60% snellere time-to-value voor nieuwe klanten", 
    "50% lagere churn door proactieve interventies"
  ];

  // Statistics cards - customer success focused
  const statistics = [
    {
      number: "40%",
      description: "hogere klanttevredenheid",
      icon: Heart,
      theme: "satisfaction"
    },
    {
      number: "60%",
      description: "snellere time-to-value",
      icon: Zap,
      theme: "speed"
    },
    {
      number: "50%",
      description: "lagere churn rate",
      icon: Shield,
      theme: "retention"
    },
    {
      number: "3x",
      description: "langere klantrelaties",
      icon: TrendingUp,
      theme: "growth"
    },
    {
      number: "Persoonlijk",
      description: "elke onboarding journey uniek",
      icon: Target,
      theme: "personalization"
    },
    {
      number: "Proactief",
      description: "voorkom problemen automatisch",
      icon: Brain,
      theme: "intelligence"
    },
    {
      number: "Compleet",
      description: "van welkom tot ambassadeur",
      icon: Award,
      theme: "complete"
    },
    {
      number: "Geïntegreerd",
      description: "met al je bestaande tools",
      icon: Database,
      theme: "integration"
    }
  ];

  // Onboard and Beyond workflow steps
  const workflowSteps = [
    {
      step: "01",
      title: "Automatische welkomst",
      description: "Zodra een nieuwe klant binnenkomt, wordt automatisch een persoonlijke welkomstsequentie gestart. Gebaseerd op hun profiel, doelstellingen en gekozen package krijgen ze een custom onboarding plan. Een warm welkomstbericht, verwachtingen setting, en de eerste stappen worden direct gecommuniceerd.",
      icon: Heart
    },
    {
      step: "02", 
      title: "Slimme journey mapping",
      description: "Het systeem creëert een gepersonaliseerde onboarding roadmap met alle belangrijke milestones. Van eerste login, tot key features, tot advanced functionaliteit - alles wordt getimed en gepersonaliseerd. Klanten zien altijd hun voortgang en volgende stappen.",
      icon: Target,
      example: "Week 1: Basissetup | Week 2: Core features | Week 3: Advanced training"
    },
    {
      step: "03",
      title: "Proactieve begeleiding", 
      description: "Tijdens de onboarding wordt elk klantgedrag gemonitored. Zitten ze vast? Automatische hulp. Gaan ze snel? Extra uitdagingen. Zijn ze inactief? Vriendelijke nudges. Het systeem past zich real-time aan op basis van hun gedrag en voortgang.",
      icon: Brain
    },
    {
      step: "04",
      title: "Milestone tracking",
      description: "Elke belangrijke stap wordt gevierd en getracked. Eerste succesvolle actie, feature adoption, value realization - het systeem erkent en versterkt positief gedrag. Dit houdt motivatie hoog en momentum gaande tijdens de kritieke eerste periode.",
      icon: Award,
      example: "🎉 Gefeliciteerd! Je hebt je eerste [feature] succesvol gebruikt!"
    },
    {
      step: "05", 
      title: "Slimme interventies",
      description: "Als het systeem signalen oppikt van mogelijke problemen - inactiviteit, frustratie, of vastlopen - worden automatisch interventies gestart. Dit kan extra tutorial content zijn, persoonlijke outreach, of escalatie naar je customer success team.",
      icon: Shield
    },
    {
      step: "06",
      title: "Success optimization", 
      description: "Het systeem analyseert continu wat werkt en wat niet. Welke klanten zijn het meest succesvol? Welke onboarding stappen zijn cruciaal? Deze learnings worden gebruikt om de journey voor toekomstige klanten te optimaliseren.",
      icon: BarChart3
    },
    {
      step: "07",
      title: "Langetermijn nurturing",
      description: "Na succesvolle onboarding begint de 'Beyond' fase: continue value delivery, nieuwe feature introductions, renewal voorbereiding, en upsell opportunities. Het doel is om van elke klant een trouwe ambassadeur te maken.",
      icon: TrendingUp
    },
    {
      step: "08",
      title: "Ambassadeur worden",
      description: "Succesvolle klanten worden uitgenodigd om case studies te delen, referrals te geven, of zelfs als gastspreker op te treden. Het systeem identificeert automatisch je grootste fans en helpt ze je merk te promoten.",
      icon: Users
    }
  ];

  return (
    <div className="bg-black">
      
      {/* Statistics Cards - Direct onder hero */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-lg xs:max-w-2xl lg:max-w-6xl mx-auto relative">
            {statistics.map((stat, index) => (
              <div key={index} className={`relative ${index < 4 ? 'overflow-visible' : ''}`}>
                {/* Conditional aura glow effect - stronger for top 4 cards */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-xl blur-xl ${
                  index < 4 ? 'opacity-80' : 'opacity-50'
                }`}></div>
                {index < 4 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-700/15 rounded-xl blur-2xl opacity-60"></div>
                    <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-r from-blue-600/8 to-purple-700/8 rounded-2xl blur-3xl opacity-40 pointer-events-none"></div>
                  </>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/8 transition-all duration-300 min-h-[120px] sm:min-h-[140px] lg:h-40 flex flex-col justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
                
                {/* Arrow between bottom row cards (indices 4, 5, 6) */}
                {index >= 4 && index < 7 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-400/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem Section - "Klanten loslaten na de verkoop" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - diagonal flowing shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-blue-700/60 to-purple-700/60 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-purple-600/50 to-blue-600/50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl transform -rotate-12"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left - Customer Journey Visual */}
            <div className="relative flex items-center justify-center h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-700/15 rounded-3xl blur-2xl"></div>
              
              {/* Professional Customer Journey Chart */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 w-full max-w-md lg:max-w-lg">
                
                {/* Chart Title */}
                <div className="text-center mb-8">
                  <h3 className="text-white font-semibold text-lg mb-2">Customer Journey</h3>
                  <p className="text-gray-400 text-sm">Succes over tijd</p>
                </div>
                
                {/* Customer Journey Chart */}
                <div className="relative h-48 sm:h-52 lg:h-56 bg-black/20 rounded-xl p-4 lg:p-6 border border-white/10">
                  {/* Y-axis labels */}
                  <div className="absolute left-1 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
                    <span>Success</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>Churn</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-8 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      <div className="h-full w-full flex flex-col justify-between">
                        <div className="h-px bg-white/10"></div>
                        <div className="h-px bg-white/10"></div>
                        <div className="h-px bg-white/10"></div>
                        <div className="h-px bg-white/10"></div>
                        <div className="h-px bg-white/10"></div>
                      </div>
                    </div>
                    
                    {/* Success curve */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                      <defs>
                        <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#059669" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="successArea" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area under curve */}
                      <path
                        d="M 10 50 Q 40 35 70 25 Q 120 15 160 20 Q 180 25 190 30 L 190 95 L 10 95 Z"
                        fill="url(#successArea)"
                      />
                      
                      {/* Main curve line */}
                      <path
                        d="M 10 50 Q 40 35 70 25 Q 120 15 160 20 Q 180 25 190 30"
                        stroke="url(#successGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Start point */}
                      <circle cx="10" cy="50" r="3" fill="#10b981" opacity="0.9">
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Success point */}
                      <circle cx="190" cy="30" r="3" fill="#047857" opacity="0.8">
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="1s" />
                      </circle>
                    </svg>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-1 left-8 right-0 flex justify-between text-xs text-gray-400">
                    <span>Start</span>
                    <span>30d</span>
                    <span>90d</span>
                    <span>1jr</span>
                  </div>
                </div>
                
                {/* Success indicators */}
                <div className="flex justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400"></div>
                    <span className="text-red-300 text-sm font-medium">Churn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700"></div>
                    <span className="text-blue-400 text-sm font-medium">Succes</span>
                  </div>
                </div>
                
                {/* Professional insight */}
                <div className="mt-6 p-3 bg-blue-950/30 rounded-lg border border-blue-600/20">
                  <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xs text-center">
                    <strong>90 dagen</strong> bepalen klant succes
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Klanten loslaten
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                  na de verkoop
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  De deal is gesloten, de champagne is ontkurkt, en dan... stilte. Je nieuwe klant moet zelf uitzoeken hoe alles werkt. Ze worstelen zich door documentatie, proberen features te begrijpen, en voelen zich in de steek gelaten.
                </p>
                <p>
                  Terwijl jij alweer bezig bent met de volgende verkoop, raakt je nieuwe klant gefrustreerd. Ze realiseren niet de waarde die ze verwachtten. Voor je het weet is hun enthousiasme weg en overwegen ze andere opties.
                </p>
                <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                  Customer success begint op het moment dat de deal getekend wordt. De eerste 90 dagen bepalen of klanten blijven of vertrekken.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Nieuwe klanten worden overgelaten aan zichzelf
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Frustratie en onderbenutting leiden tot churn
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Geen proactieve begeleiding naar succes
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-purple-900/20 rounded-xl border border-blue-600/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Onboard and Beyond maakt van elke nieuwe klant een succesverhaal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Van onboarding naar ambassadeur" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - circular spreading pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-blue-600/40 to-purple-700/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-green-500/30 to-blue-700/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-[250px] h-[600px] sm:w-[350px] sm:h-[800px] md:w-[450px] md:h-[1000px] bg-gradient-to-b from-blue-700/20 to-purple-700/20 rounded-full blur-3xl transform rotate-25"></div>
          <div className="absolute bottom-1/2 left-1/6 w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-r from-purple-500/25 to-blue-600/25 rounded-full blur-3xl"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Van onboarding naar
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                  ambassadeur
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Onboard and Beyond transformeert nieuwe klanten in trouwe ambassadeurs. Door intelligente, gepersonaliseerde onboarding zorgen we dat elke klant vanaf dag één succesvol wordt.
                </p>
                <p>
                  Geen generieke processen, maar slimme journeys die zich aanpassen aan elk individu. Van welkomst tot waarde realisatie, van eerste stappen tot langetermijn succes.
                </p>
                <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                  Het resultaat: klanten die langer blijven, meer waarderen, en actief je business promoten.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-purple-900/20 rounded-xl border border-blue-600/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Elke klant wordt een succesverhaal, elke interactie bouwt loyaliteit.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Enhanced Success Visual */}
            <div className="relative">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20 rounded-3xl blur-3xl"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                
                {/* Success metrics visual */}
                <div className="text-center mb-8">
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">Customer Success Metrics</div>
                  
                  {/* Stats showcase */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        90%
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">Succesvol onboarded</div>
                      <div className="text-gray-400 text-xs">binnen 30 dagen</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-white mb-1">3x</div>
                        <div className="text-gray-400 text-xs">langere relaties</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-white mb-1">60%</div>
                        <div className="text-gray-400 text-xs">meer waarde</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        50%
                      </div>
                      <div className="text-white text-sm font-semibold mb-1">Lagere churn</div>
                      <div className="text-gray-400 text-xs">door proactieve support</div>
                    </div>
                  </div>
                </div>

                {/* Success indicator */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center bg-gradient-to-r from-blue-950/50 to-purple-900/30 rounded-full px-4 py-2">
                    <Heart className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-white text-sm font-medium">Klanten worden ambassadeurs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Onboard and Beyond Workflow Section */}
      <section className="py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 mt-8 sm:mt-16">
            <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-32">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight tracking-tight" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Zo werkt <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Onboard and Beyond</span>.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Van nieuwe klant naar trouwe ambassadeur.
              </motion.p>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8 sm:space-y-12">
            {workflowSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Step Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-4 sm:space-y-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <span className="text-blue-400 font-bold text-lg sm:text-xl">Stap {step.step}</span>
                      <div className="h-px bg-gradient-to-r from-blue-600 to-transparent flex-1"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.example && (
                    <div className="bg-gradient-to-br from-blue-950/30 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-blue-600/20 mt-4 sm:mt-6">
                      <p className="text-blue-200 italic text-sm sm:text-base">
                        "{step.example}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative order-first lg:order-none`}>
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
                    
                    {/* Main visual container */}
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <step.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-none mb-3 sm:mb-4">
                          {step.step}
                        </div>
                        
                        <div className="space-y-1 sm:space-y-2">
                          <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full"></div>
                          <div className="h-0.5 sm:h-1 bg-white/20 rounded-full w-3/4 mx-auto"></div>
                          <div className="h-0.5 sm:h-1 bg-white/10 rounded-full w-1/2 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-12 sm:mt-16 mb-8 sm:mb-12"
          >
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-6 sm:mb-8">
              Integraties met jouw favoriete tools
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 items-center mb-6 sm:mb-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl opacity-60 hover:opacity-100 hover:bg-white/10 transition-all duration-300"
              >
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`}
                  className={`max-h-full max-w-full object-contain ${
                    integration.name === 'HubSpot' ? 'bg-white p-0.5 sm:p-1 rounded' : 
                    ''
                  }`}
                  style={{ maxHeight: '32px', maxWidth: '32px' }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-black to-blue-950/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-0 sm:mr-3 mb-2 sm:mb-0" />
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center">
                Veelgestelde vragen over
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                  Onboard and Beyond
                </span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen over Onboard and Beyond. 
              Staat je vraag er niet tussen? <button 
                onClick={() => window.location.href = '/contact'}
                className="text-blue-400 hover:text-blue-400 underline transition-colors duration-200"
              >
                Neem gerust contact met ons op
              </button>.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start sm:items-center justify-between"
                >
                  <div className="flex items-start sm:items-center flex-1 min-w-0">
                    <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0 text-blue-400 mt-0.5 sm:mt-0" />
                    <h3 className="text-base sm:text-lg font-semibold text-white pr-2 sm:pr-4 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Apple-style Closing CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        {/* Apple-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* Hero-style backlights - emerald/green theme but different positioning - less intense */}
        <div className="absolute inset-0 overflow-hidden opacity-25 sm:opacity-30">
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] lg:w-[900px] lg:h-[450px] bg-gradient-to-l from-blue-600 to-purple-700 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/3"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] bg-blue-700 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/4"></div>
          <div className="absolute top-1/2 right-1/4 w-[250px] h-[150px] sm:w-[350px] sm:h-[210px] md:w-[450px] md:h-[270px] lg:w-[550px] lg:h-[330px] bg-gradient-to-l from-green-500 to-blue-400 rounded-full blur-2xl sm:blur-3xl opacity-60"></div>
        </div>
        
        {/* Fade to black - top and bottom - more subtle */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-30"></div>
        
        {/* Ambient flowing lights - different pattern than hero - less intense */}
        <div className="absolute inset-0 opacity-5 sm:opacity-8">
          {/* Vertical flow streams */}
          <div 
            className="absolute top-0 left-1/3 w-24 sm:w-32 md:w-40 h-full bg-gradient-to-b from-transparent via-blue-400/10 to-purple-700/15 rounded-full blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '0s', 
              animation: 'horizontal-flow 14s ease-in-out infinite, pulse-glow 10s ease-in-out infinite'
            }} 
          />
          <div 
            className="absolute top-0 right-1/4 w-16 sm:w-24 md:w-32 h-3/4 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '4s', 
              animation: 'horizontal-flow-reverse 12s ease-in-out infinite, pulse-glow 8s ease-in-out infinite reverse'
            }} 
          />
          
          {/* Floating success glows */}
          <div 
            className="absolute top-2/3 left-1/5 w-32 h-20 sm:w-48 sm:h-30 md:w-64 md:h-40 bg-gradient-to-tr from-blue-400/12 to-purple-700/18 rounded-xl blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '2s', 
              animation: 'envelope-drift 16s ease-in-out infinite, fade-pulse 6s ease-in-out infinite'
            }} 
          />
          <div 
            className="absolute top-1/3 right-1/5 w-40 h-12 sm:w-60 sm:h-18 md:w-80 md:h-24 bg-gradient-to-bl from-purple-500/15 to-blue-600/12 rounded-xl blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '6s', 
              animation: 'envelope-drift-reverse 14s ease-in-out infinite, fade-pulse 7s ease-in-out infinite'
            }} 
          />
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
              Maak van <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">elke klant</span> een succesverhaal.
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Onboard and Beyond</span> transformeert nieuwe klanten in trouwe ambassadeurs.
            </p>
            
            {/* Apple-style description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-8 sm:mt-12">
              Van welkomst tot waarde realisatie. Elke klant verdient een perfecte start.
            </p>

            {/* Apple-style CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-12 sm:mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-blue-600/25 min-w-[180px] sm:min-w-[200px] w-full sm:w-auto"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Start nu
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="border border-gray-700 hover:border-gray-600 hover:bg-white/5 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 backdrop-blur-sm min-w-[180px] sm:min-w-[200px] w-full sm:w-auto"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Meer informatie
              </motion.button>
            </div>

            {/* Apple-style subtle bottom text */}
            <p className="text-xs sm:text-sm text-gray-600 mt-8 sm:mt-12 font-normal">
              Van nieuwe klant naar trouwe ambassadeur in 90 dagen.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* CSS for hero-style animations */}
      <style jsx>{`
        @keyframes horizontal-flow {
          0%, 100% { transform: translateX(-50%) scaleX(0.8); opacity: 0.3; }
          50% { transform: translateX(0%) scaleX(1.2); opacity: 0.7; }
        }
        
        @keyframes horizontal-flow-reverse {
          0%, 100% { transform: translateX(25%) scaleY(0.8); opacity: 0.3; }
          50% { transform: translateX(-10%) scaleY(1.2); opacity: 0.7; }
        }
        
        @keyframes envelope-drift {
          0%, 100% { transform: translate(-10px, 10px) rotate(-1deg); opacity: 0.4; }
          33% { transform: translate(15px, -5px) rotate(0.5deg); opacity: 0.7; }
          66% { transform: translate(-5px, -15px) rotate(-0.5deg); opacity: 0.5; }
        }
        
        @keyframes envelope-drift-reverse {
          0%, 100% { transform: translate(10px, -10px) rotate(1deg); opacity: 0.4; }
          33% { transform: translate(-15px, 5px) rotate(-0.5deg); opacity: 0.7; }
          66% { transform: translate(5px, 15px) rotate(0.5deg); opacity: 0.5; }
        }
        
        @keyframes message-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-8px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes message-float-reverse {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(8px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(25px); }
        }
        
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes quick-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default OnboardAndBeyondContentSection;