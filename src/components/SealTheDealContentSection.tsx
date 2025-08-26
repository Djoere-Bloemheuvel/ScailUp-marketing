import { motion } from 'framer-motion';
import { Clock, MessageSquare, Search, Database, CheckCircle, TrendingUp, Users, ArrowRight, Zap, Shield, Mail, Brain, Target, Settings, HandHeart, RefreshCw, HelpCircle, ChevronDown, ChevronUp, BarChart3, Link } from 'lucide-react';
import { useState } from 'react';

const SealTheDealContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data - Seal the Deal focus
  const faqData = [
    {
      question: "Wat is Seal the Deal precies?",
      answer: "Seal the Deal is een AI-aangedreven systeem dat de cruciale tijd tussen je salescall en het versturen van je voorstel volledig automatiseert. Zodra je call afgelopen is, voer je een paar kerngegevens in en binnen minuten ontvangt je prospect een professioneel document met voorstel, contract én betaallink. Terwijl 80% van de bedrijven pas na dagen reageert, sluit jij deals terwijl ze nog warm zijn. Het systeem genereert alles in jouw huisstijl en integreert naadloos met je CRM voor volledige deal tracking.",
      icon: Zap
    },
    {
      question: "Waarom is snelheid zo belangrijk na een salescall?",
      answer: "Research toont aan dat 35-50% van alle deals naar wie het eerst reageert gaat. Na een goede salescall is je prospect gemotiveerd en klaar om verder te gaan. Maar als je dagen wacht met een voorstel, koelt hun interesse af en gaan ze met anderen praten. 80% van de verkopen vereist 5-12 follow-ups, maar 44% van salespeople geeft al op na 1 poging. Seal the Deal zorgt dat je binnen uren na je call al een professioneel voorstel verstuurt, waardoor je 65% sneller deals sluit.",
      icon: Clock
    },
    {
      question: "Hoe genereert de AI mijn voorstellen en contracten?",
      answer: "De AI gebruikt jouw input van de salescall (deal details, pricing, voorwaarden) en combineert dit met jouw bedrijfstemplate. Het systeem maakt een volledig uitgewerkt document met gepersonaliseerd voorstel voor de specifieke klant situatie, juridisch correct contract met alle voorwaarden, directe betaallink of factuur, en alles in jouw huisstijl met logo en branding. Je hoeft alleen de kernpunten in te voeren - de AI regelt de rest professioneel en accuraat.",
      icon: Brain
    },
    {
      question: "Kan ik het voorstel nog aanpassen voordat het verstuurd wordt?",
      answer: "Absoluut! Seal the Deal geeft je altijd volledige controle. Na generatie krijg je een preview van het complete document. Je kunt teksten aanpassen, prijzen wijzigen, voorwaarden toevoegen of verwijderen, en de tone of voice verfijnen. Pas als jij akkoord geeft, wordt het document verstuurd. Het systeem leert ook van je aanpassingen, zodat toekomstige voorstellen steeds beter aansluiten bij jouw stijl en voorkeuren.",
      icon: Settings
    },
    {
      question: "Hoe werkt de integratie met mijn CRM?",
      answer: "Seal the Deal integreert naadloos met alle populaire CRM-systemen zoals HubSpot, Salesforce en Pipedrive. Alle voorstellen, contracten en communicatie worden automatisch gelogd in de juiste deal. Je krijgt real-time tracking: wanneer het document wordt geopend, welke secties worden gelezen, en hoelang de prospect ermee bezig is. Automatische follow-up taken worden aangemaakt op basis van prospect gedrag. Je team heeft altijd volledig overzicht zonder handmatige invoer.",
      icon: Link
    },
    {
      question: "Wat gebeurt er als een klant direct wil betalen?",
      answer: "Dat is precies waar Seal the Deal voor ontworpen is! Elk document bevat een directe betaallink waarmee klanten meteen akkoord kunnen gaan en betalen. Van salescall naar omzet in één soepele flow. De betaling wordt automatisch verwerkt, je krijgt direct een notificatie, en alle gegevens worden in je CRM bijgewerkt. Geen losse facturen, handmatige betalingsverzoeken of administratieve rompslomp. De klant kan direct beslissen en handelen terwijl ze nog gemotiveerd zijn.",
      icon: Zap
    },
    {
      question: "Hoeveel tijd bespaar ik met Seal the Deal?",
      answer: "De tijdsbesparing is enorm. Waar je normaal uren besteedt aan het opstellen van voorstellen, contracten maken, facturen genereren en alles handmatig in je CRM invoeren, doet Seal the Deal dit in minuten. Sales professionals besparen gemiddeld 8-12 uur per week. Maar belangrijker: je sluit deals 65% sneller omdat je prospects niet afkoelen. Je bent altijd de eerste met een professioneel voorstel, waardoor je meer deals wint.",
      icon: Clock
    },
    {
      question: "Wat als een prospect vragen heeft over het voorstel?",
      answer: "Seal the Deal houdt alles bij voor perfecte opvolging. Je ziet precies wanneer iemand het document opent, welke delen ze lezen en hoelang ze ermee bezig zijn. Als er geen reactie komt, plant het systeem automatisch slimme follow-ups in. Je krijgt suggesties voor vervolgacties gebaseerd op hun gedrag. En omdat alle informatie in je CRM staat, kun je perfect inspelen op hun specifieke vragen en zorgen tijdens je opvolgingsgesprekken.",
      icon: MessageSquare
    }
  ];

  // Integration logos data - using actual logos from public folder and matching AgentsStatsSection
  const integrations = [
    { name: 'Gmail', logo: '/gmail-logo.webp' },
    { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png' },
    { name: 'Google Calendar', logo: '/google-calendar-logo.webp' },
    { name: 'Calendly', logo: '/calendly-logo.png' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
    { name: 'Salesforce', logo: '/salesforce-logo.png' },
    { name: 'Notion', logo: '/notion-logo.png' },
    { name: 'PandaDoc', logo: '/pandadoc-logo.png' },
    { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png' },
    { name: 'Instantly', logo: '/instantly-logo.webp' },
    { name: 'Google Sheets', logo: '/google-sheets-logo.webp' },
    { name: 'Mailchimp', logo: '/mailchimp-logo.png' },
    { name: 'Pipedrive', logo: '/pipedrive-logo.svg' },
    { name: 'WhatsApp', logo: '/whatsapp-logo.webp' }
  ];

  // Solution section 4 cards
  const solutionSteps = [
    {
      icon: MessageSquare,
      title: "Persoonlijk bericht",
      description: "AI stuurt direct een persoonlijk bericht dat de lead warm houdt"
    },
    {
      icon: Search,
      title: "Automatische research",
      description: "Wordt automatisch research gedaan naar de lead en hun bedrijf"
    },
    {
      icon: Database,
      title: "Compleet CRM profiel",
      description: "Ontvang je in je CRM een compleet profiel met achtergrondinformatie"
    },
    {
      icon: TrendingUp,
      title: "Direct oppakken",
      description: "Kun je de lead direct oppakken alsof je al uren voorbereiding hebt gedaan"
    }
  ];

  // Benefits section - Seal the Deal focus
  const benefits = [
    "65% sneller deals sluiten door directe follow-up na calls",
    "8-12 uur per week bespaard aan handmatige voorstellen maken",
    "Directe betaling mogelijk met geïntegreerde betaallinks"
  ];

  // Benefits cards - Seal the Deal focus - subtle and compact
  const statistics = [
    {
      number: "2x",
      description: "meer conversie binnen 24u",
      icon: Clock,
      theme: "speed"
    },
    {
      number: "35-50%",
      description: "gaat naar eerste verzender",
      icon: TrendingUp,
      theme: "competitive"
    },
    {
      number: "Direct",
      description: "momentum vasthouden",
      icon: Target,
      theme: "psychology"
    },
    {
      number: "Auto",
      description: "research & opmaak",
      icon: Zap,
      theme: "efficiency"
    },
    {
      number: "Premium",
      description: "kwaliteit altijd",
      icon: Shield,
      theme: "quality"
    },
    {
      number: "Compleet",
      description: "voorstel + contract + link",
      icon: CheckCircle,
      theme: "complete"
    },
    {
      number: "Smart",
      description: "follow-up systeem",
      icon: RefreshCw,
      theme: "followup"
    },
    {
      number: "CRM",
      description: "sync automatisch",
      icon: Database,
      theme: "integration"
    }
  ];

  // Seal the Deal workflow steps - from call to closed deal
  const workflowSteps = [
    {
      step: "01",
      title: "Na je salescall",
      description: "Je hebt net een goed gesprek gehad met een prospect. In plaats van dagen te wachten met het opstellen van een voorstel, voer je direct een paar kernpunten in: dealvoorwaarden, prijsindicatie, en eventueel de transcript van het gesprek.",
      icon: MessageSquare
    },
    {
      step: "02", 
      title: "AI analyseert & genereert",
      description: "Binnen enkele minuten maakt onze AI een volledig uitgewerkt document: een gepersonaliseerd voorstel, compleet contract met alle voorwaarden, én een directe betaallink of factuur. Alles in jouw huisstijl met logo, kleuren en tone of voice.",
      icon: Brain
    },
    {
      step: "03",
      title: "Automatisch versturen", 
      description: "Het professionele document wordt direct naar je prospect gestuurd. Tegelijk wordt er een verslag gelogd in je CRM met de belangrijkste gespreksnotities en een compleet overzicht van de deal.",
      icon: Mail,
      example: "Super gesprek net! Hier is ons voorstel met alle voorwaarden en een directe betaallink."
    },
    {
      step: "04",
      title: "Real-time tracking",
      description: "Je ziet precies wanneer je prospect het document opent, welke secties ze lezen, en hoelang ze erover doen. Deze inzichten helpen je de juiste follow-up timing te bepalen en in te schatten hoe geïnteresseerd ze zijn.",
      icon: Target
    },
    {
      step: "05", 
      title: "Slimme AI follow-ups",
      description: "Als de prospect niet direct reageert, worden automatische opvolgingen ingepland. Vriendelijke herinneringen, strategische nudges, of interne taken voor jouw team. De AI bepaalt het optimale moment en de juiste toon.",
      icon: RefreshCw,
      example: "Hoi [naam], heb je al tijd gehad om naar ons voorstel te kijken? Laat me weten als je vragen hebt!"
    },
    {
      step: "06",
      title: "Directe betaling mogelijk", 
      description: "Omdat elk document een betaallink bevat, kan de klant direct akkoord gaan en betalen. Van gesprek naar omzet in één soepele flow, zonder losse mails of handmatige facturen.",
      icon: Zap
    },
    {
      step: "07",
      title: "CRM automatisch bijgewerkt",
      description: "Alle voorstellen, contracten, notities en betalingen worden automatisch in je CRM gelogd. Je hebt altijd volledig overzicht van elke deal, zonder handmatige invoer of vergeten documenten.",
      icon: Settings
    },
    {
      step: "08",
      title: "Deal gesloten",
      description: "Met Seal the Deal sluit je deals terwijl ze nog warm zijn. Geen wekenlang wachten, geen gemiste momentum. Van salescall naar getekend contract en betaling - alles binnen dagen in plaats van weken.",
      icon: HandHeart
    }
  ];

  return (
    <div className="bg-black">
      
      {/* Statistics Cards - Direct onder hero (without headline) */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-lg xs:max-w-2xl lg:max-w-6xl mx-auto relative">
            {statistics.map((stat, index) => (
              <div key={index} className={`relative ${index < 4 ? 'overflow-visible' : ''}`}>
                {/* Conditional aura glow effect - stronger for top 4 cards */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-xl blur-xl ${
                  index < 4 ? 'opacity-80' : 'opacity-50'
                }`}></div>
                {index < 4 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-400/15 rounded-xl blur-2xl opacity-60"></div>
                    <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-r from-blue-500/8 to-blue-400/8 rounded-2xl blur-3xl opacity-40 pointer-events-none"></div>
                  </>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/8 transition-all duration-300 min-h-[120px] sm:min-h-[140px] lg:h-40 flex flex-col justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
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
      
      {/* Problem Section - "Warme leads worden koude kansen" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - diagonal flowing shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-purple-600/60 to-pink-500/60 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-blue-400/50 to-blue-500/50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px] bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full blur-3xl transform -rotate-12"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left - Professional Lead Temperature Visual */}
            <div className="relative flex items-center justify-center h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-400/15 rounded-3xl blur-2xl"></div>
              
              {/* Professional chart container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 w-full max-w-md lg:max-w-lg">
                
                {/* Chart Title */}
                <div className="text-center mb-8">
                  <h3 className="text-white font-semibold text-lg mb-2">Lead Temperature</h3>
                  <p className="text-gray-400 text-sm">Interesse over tijd</p>
                </div>
                
                {/* Professional Temperature Chart */}
                <div className="relative h-48 sm:h-52 lg:h-56 bg-black/20 rounded-xl p-4 lg:p-6 border border-white/10">
                  {/* Y-axis labels */}
                  <div className="absolute left-1 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
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
                    
                    {/* Temperature decline curve */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                      <defs>
                        <linearGradient id="temperatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                          <stop offset="30%" stopColor="#f97316" stopOpacity="0.7" />
                          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.5" />
                        </linearGradient>
                        <linearGradient id="temperatureArea" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area under curve */}
                      <path
                        d="M 10 20 Q 50 25 80 40 Q 120 60 160 75 Q 180 85 190 90 L 190 95 L 10 95 Z"
                        fill="url(#temperatureArea)"
                      />
                      
                      {/* Main curve line */}
                      <path
                        d="M 10 20 Q 50 25 80 40 Q 120 60 160 75 Q 180 85 190 90"
                        stroke="url(#temperatureGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Hot point */}
                      <circle cx="10" cy="20" r="3" fill="#ef4444" opacity="0.9">
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Cold point */}
                      <circle cx="190" cy="90" r="3" fill="#1e40af" opacity="0.7">
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="1s" />
                      </circle>
                    </svg>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-1 left-8 right-0 flex justify-between text-xs text-gray-400">
                    <span>Nu</span>
                    <span>1u</span>
                    <span>1d</span>
                    <span>1w</span>
                  </div>
                </div>
                
                {/* Temperature indicators */}
                <div className="flex justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400"></div>
                    <span className="text-red-300 text-sm font-medium">Warm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <span className="text-blue-300 text-sm font-medium">Koud</span>
                  </div>
                </div>
                
                {/* Professional insight */}
                <div className="mt-6 p-3 bg-blue-950/30 rounded-lg border border-blue-500/20">
                  <p className="text-blue-200 text-xs text-center">
                    <strong>80%</strong> interesse verlies na 24 uur
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Warme leads worden
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">
                  koude kansen
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Je hebt een goed gesprek gehad, alles klikt, ze zijn enthousiast. Maar dan komt het moment dat vaak de meeste frictie oplevert: het uitwerken en sturen van het voorstel.
                </p>
                <p>
                  Je hebt een drukke agenda, andere taken, en voor je het weet stuur je het voorstel pas dagen later. Tegen die tijd is de lead afgekoeld en het momentum verdwenen.
                </p>
                <p className="text-blue-300 font-semibold">
                  Sales is psychologie. Een prospect is na een goed gesprek warm en bereid om door te pakken. Hoe langer je wacht, hoe groter de kans dat hun enthousiasme afneemt.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Voorstellen maken kost veel tijd en wordt uitgesteld
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Prospects spreken intussen met andere aanbieders
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Rommelige voorstellen zonder persoonlijke touch
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-blue-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Seal the Deal houdt het momentum vast door directe opvolging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Van call naar contract in minuten" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - circular spreading pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-blue-500/40 to-blue-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-blue-500/30 to-blue-600/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-[250px] h-[600px] sm:w-[350px] sm:h-[800px] md:w-[450px] md:h-[1000px] bg-gradient-to-b from-blue-600/20 to-blue-500/20 rounded-full blur-3xl transform rotate-25"></div>
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
                Van call naar contract
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">
                  in minuten
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Seal the Deal is jouw digitale dealmaker die direct na de salescall een compleet, professioneel en gepersonaliseerd voorstel mét contract en betaallink genereert.
                </p>
                <p>
                  Binnen minuten ontvangt je prospect een high-end document dat niet alleen vertrouwen wekt, maar ze ook direct de mogelijkheid geeft om akkoord te gaan en af te rekenen.
                </p>
                <p className="text-blue-300 font-semibold">
                  Geen dagen wachten meer. Het momentum van je salescall wordt direct vastgehouden met professionele opvolging.
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
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-blue-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Van elk gesprek een kansrijke deal, van elke lead een tevreden klant.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Enhanced Speed Visual */}
            <div className="relative">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                
                {/* Timer visual showing speed difference */}
                <div className="text-center mb-8">
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">Reactietijd vergelijking</div>
                  
                  {/* Speed to Lead - Fast */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">Seal the Deal</span>
                      <span className="text-white font-bold">&lt; 1 uur</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "15%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Traditional - Slow */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 font-semibold">Traditioneel</span>
                      <span className="text-gray-400 font-bold">47+ uur</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats showcase */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent mb-2">
                      391%
                    </div>
                    <div className="text-white text-sm font-semibold mb-1">Meer conversie</div>
                    <div className="text-gray-400 text-xs">binnen 1 minuut reactie</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-white mb-1">10+ uur</div>
                      <div className="text-gray-400 text-xs">bespaard/week</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-white mb-1">24/7</div>
                      <div className="text-gray-400 text-xs">altijd actief</div>
                    </div>
                  </div>
                  
                </div>

                {/* Speed indicator */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center bg-gradient-to-r from-blue-950/50 to-blue-900/30 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-white text-sm font-medium">Snelste reactie = Beste resultaat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seal the Deal Workflow Section */}
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
                Zo werkt <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent">Seal the Deal</span>.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Volledig automatisch, alsof je het zelf deed.
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <span className="text-blue-400 font-bold text-lg sm:text-xl">Stap {step.step}</span>
                      <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.example && (
                    <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 rounded-xl p-4 sm:p-6 border border-blue-500/20 mt-4 sm:mt-6">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
                    
                    {/* Main visual container */}
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <step.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent leading-none mb-3 sm:mb-4">
                          {step.step}
                        </div>
                        
                        <div className="space-y-1 sm:space-y-2">
                          <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
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
                    integration.name === 'Gmail' ? 'bg-white p-0.5 sm:p-1 rounded' : 
                    ''
                  }`}
                  style={{ maxHeight: '32px', maxWidth: '32px' }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* FAQ Section - "Veelgestelde vragen over Seal the Deal" */}
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
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">
                  Seal the Deal
                </span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen over Seal the Deal. 
              Staat je vraag er niet tussen? <button 
                onClick={() => window.location.href = '/contact'}
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
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
        
        {/* Hero-style backlights - blue/cyan theme but different positioning - less intense */}
        <div className="absolute inset-0 overflow-hidden opacity-25 sm:opacity-30">
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] lg:w-[900px] lg:h-[450px] bg-gradient-to-l from-blue-500 to-cyan-500 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/3"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] bg-blue-600 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/4"></div>
          <div className="absolute top-1/2 right-1/4 w-[250px] h-[150px] sm:w-[350px] sm:h-[210px] md:w-[450px] md:h-[270px] lg:w-[550px] lg:h-[330px] bg-gradient-to-l from-cyan-500 to-blue-400 rounded-full blur-2xl sm:blur-3xl opacity-60"></div>
        </div>
        
        {/* Fade to black - top and bottom - more subtle */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-30"></div>
        
        {/* Ambient flowing lights - different pattern than hero - less intense */}
        <div className="absolute inset-0 opacity-5 sm:opacity-8">
          {/* Vertical flow streams */}
          <div 
            className="absolute top-0 left-1/3 w-24 sm:w-32 md:w-40 h-full bg-gradient-to-b from-transparent via-blue-400/10 to-cyan-500/15 rounded-full blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '0s', 
              animation: 'horizontal-flow 14s ease-in-out infinite, pulse-glow 10s ease-in-out infinite'
            }} 
          />
          <div 
            className="absolute top-0 right-1/4 w-16 sm:w-24 md:w-32 h-3/4 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-full blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '4s', 
              animation: 'horizontal-flow-reverse 12s ease-in-out infinite, pulse-glow 8s ease-in-out infinite reverse'
            }} 
          />
          
          {/* Floating deal completion glows */}
          <div 
            className="absolute top-2/3 left-1/5 w-32 h-20 sm:w-48 sm:h-30 md:w-64 md:h-40 bg-gradient-to-tr from-blue-400/12 to-cyan-500/18 rounded-xl blur-2xl sm:blur-3xl" 
            style={{ 
              animationDelay: '2s', 
              animation: 'envelope-drift 16s ease-in-out infinite, fade-pulse 6s ease-in-out infinite'
            }} 
          />
          <div 
            className="absolute top-1/3 right-1/5 w-40 h-12 sm:w-60 sm:h-18 md:w-80 md:h-24 bg-gradient-to-bl from-cyan-400/15 to-blue-500/12 rounded-xl blur-2xl sm:blur-3xl" 
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
              Sluit <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent">elke deal</span>.
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent">Seal the Deal</span> zorgt dat warme leads niet afkoelen.
            </p>
            
            {/* Apple-style description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-8 sm:mt-12">
              Van salescall naar professioneel voorstel in minuten. Sluit deals terwijl ze nog warm zijn.
            </p>

            {/* Apple-style CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-12 sm:mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-blue-500/25 min-w-[180px] sm:min-w-[200px] w-full sm:w-auto"
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
              Binnen uren na je salescall heeft je prospect al een professioneel voorstel ontvangen.
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

export default SealTheDealContentSection;