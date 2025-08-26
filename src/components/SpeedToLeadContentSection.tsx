import { motion } from 'framer-motion';
import { Clock, MessageSquare, Search, Database, CheckCircle, TrendingUp, Users, ArrowRight, Zap, Shield, Mail, Brain, Target, Settings, HandHeart, RefreshCw, HelpCircle, ChevronDown, ChevronUp, BarChart3, Link } from 'lucide-react';
import { useState } from 'react';

const SpeedToLeadContentSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "Wat is Speed to Lead precies?",
      answer: "Speed to Lead is een AI-gestuurde inbound lead agent die het probleem van trage reactietijden volledig oplost. Wanneer een potentiële klant een formulier invult, demo aanvraagt of whitepaper downloadt, springt het systeem direct in actie. Binnen seconden krijgt de lead een professionele bevestiging, terwijl achter de schermen AI-research wordt gedaan naar hun bedrijf, branche en situatie. Vervolgens ontvangt de lead een persoonlijk bericht dat voelt alsof jij zelf uren onderzoek hebt gedaan. Alle data wordt automatisch verwerkt in je CRM met een complete leadprofiel, klaar voor jouw team.",
      icon: Zap
    },
    {
      question: "Hoe snel reageert Speed to Lead precies?",
      answer: "Het systeem reageert razendsnel: binnen enkele seconden krijgt de lead een bevestiging dat hun aanvraag is ontvangen. Terwijl zij deze mail lezen, is de AI al bezig met research naar hun bedrijf. Binnen 2-5 minuten volgt dan het persoonlijke opvolgbericht. Dit is cruciaal, want onderzoek toont aan dat bedrijven die binnen één minuut reageren 391% meer kans hebben op conversie dan bedrijven die later opvolgen. Terwijl jij nog in een meeting zit of met een andere klant bezig bent, is je nieuwe lead al warm gehouden en voorbereid voor jouw opvolging.",
      icon: Clock
    },
    {
      question: "Wat levert Speed to Lead mij concreet op?",
      answer: "De resultaten zijn meetbaar en direct zichtbaar. Je krijgt 391% meer conversie door snelle reactie binnen één minuut. Daarnaast bespaar je gemiddeld 10+ uur per week aan handmatige taken zoals mailen, researchen en data invoeren. Je reply rates gaan omhoog doordat elk bericht persoonlijk en relevant is. Je mist geen kansen meer omdat elke lead wordt opgevangen, ook 's avonds en in weekenden. Je maakt altijd een professionele indruk bij elke lead, alsof je er altijd tijd voor hebt. Het resultaat? Meer afspraken, betere kwalificatie en uiteindelijk meer omzet.",
      icon: BarChart3
    },
    {
      question: "Wat voor soort berichten stuurt Speed to Lead?",
      answer: "Het systeem stuurt twee soorten berichten. Eerst een korte, professionele bevestiging zoals 'Bedankt voor je aanvraag, we nemen snel contact met je op.' Dit geeft de lead meteen een goed gevoel. Daarna, zodra de AI-research klaar is, volgt een persoonlijk bericht dat inspeelt op hun specifieke situatie. Een typisch bericht zou zijn: 'Ik heb net even naar jullie website gekeken — interessant wat jullie doen met automatiseringssoftware. Ik zie dat jullie actief zijn in de logistiek en onlangs zijn uitgebreid. Ik bel je later vandaag even om te kijken hoe wij jullie kunnen helpen.' Deze berichten zijn krachtig omdat ze vertrouwen en persoonlijke aandacht uitstralen.",
      icon: MessageSquare
    },
    {
      question: "Hoe helpt AI bij het opvolgen van leads?",
      answer: "De AI werkt als een digitale researcher die binnen minuten alles uitzoekt wat jij normaal handmatig zou doen. Het systeem analyseert de website van het bedrijf, identificeert hun producten en diensten, bepaalt de branche, zoekt recente nieuwsberichten en ontwikkelingen, bekijkt LinkedIn-profielen van contactpersonen, en verzamelt andere openbare informatie. Deze data wordt omgezet in een compacte, bruikbare samenvatting die automatisch in je CRM wordt geplaatst. Zo kun je elk gesprek ingaan met volledige context, alsof je uren voorbereiding hebt gedaan. De lead voelt zich begrepen en jij komt professioneel en voorbereid over.",
      icon: Brain
    },
    {
      question: "Hoeveel tijd bespaar ik met Speed to Lead?",
      answer: "De tijdsbesparing is aanzienlijk en direct merkbaar. Gemiddeld bespaart een sales professional 10-15 uur per week. Je hoeft geen tijd meer te besteden aan handmatig mailen naar nieuwe leads, uren research per lead, data invoeren in je CRM, of het bijhouden van follow-ups. Maar belangrijker nog: je mist geen kansen meer door late reacties. Elke lead wordt direct en professioneel behandeld, wat resulteert in meer afspraken en hogere conversie. Je team kan zich focussen op wat ze het beste doen: gesprekken voeren en deals sluiten.",
      icon: Clock
    },
    {
      question: "Integreert Speed to Lead met mijn CRM?",
      answer: "Ja, Speed to Lead integreert naadloos met alle populaire CRM-systemen zoals HubSpot, Salesforce, Pipedrive, en meer. Nieuwe leads worden automatisch toegevoegd met een compleet profiel: contactgegevens, bedrijfsinformatie, AI-research samenvatting, verstuurde berichten, en relevante achtergrondinformatie. Het systeem maakt automatisch een taak of deal aan, categoriseert de lead op basis van de verzamelde data, en zorgt dat alle communicatie wordt gelogd. Je team ziet direct wat er is gebeurd en welke vervolgstap nodig is. Geen losse notities, vergeten emails of incomplete profielen meer.",
      icon: Link
    },
    {
      question: "Wat als een lead niet meteen reageert?",
      answer: "Speed to Lead zorgt dat geen enkele lead door de mazen van het net glipt. Het systeem kan automatisch slimme follow-up campagnes starten met vriendelijke reminder emails op strategische momenten, nieuwe taken in je CRM voor handmatige opvolging, notificaties naar je team via Slack of Teams, en zelfs escalatie naar management bij high-value leads. Je kunt instellen hoe vaak en wanneer er wordt opgevolgd, welke berichten worden verstuurd, en wanneer het overgaat naar handmatige follow-up. Zo raakt geen enkele kans verloren, ook niet als je team even geen tijd heeft.",
      icon: RefreshCw
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

  // Benefits section - Updated copy
  const benefits = [
    "391% meer conversie door reactie binnen 1 minuut",
    "10+ uur per week bespaard aan handmatige opvolging",
    "Nooit meer een lead missen door automatische verwerking"
  ];

  // Statistics for proof section - grouped by theme
  const statistics = [
    // Conversie & Snelheid theme
    {
      number: "391%",
      description: "meer kans op conversie (binnen 1 minuut)",
      icon: TrendingUp,
      theme: "conversie"
    },
    {
      number: "80%",
      description: "van leads gaat verloren door te late opvolging",
      icon: Users,
      theme: "conversie"
    },
    {
      number: "10+ uur",
      description: "bespaard per week",
      icon: HandHeart,
      theme: "conversie"
    },
    {
      number: "24/7",
      description: "altijd automatisch actief",
      icon: RefreshCw,
      theme: "conversie"
    },
    // Verwachting & Efficiency theme  
    {
      number: "78%",
      description: "van deals gaat naar de eerste opvolger",
      icon: Target,
      theme: "efficiency"
    },
    {
      number: "65%",
      description: "van B2B-kopers verwacht reactie binnen 24 uur",
      icon: MessageSquare,
      theme: "efficiency"
    },
    {
      number: "50%",
      description: "verwacht reactie binnen 1 uur",
      icon: Zap,
      theme: "efficiency"
    },
    {
      number: "<10min",
      description: "hoe snel wij het doen",
      icon: Clock,
      theme: "efficiency"
    }
  ];

  // Speed to Lead workflow steps
  const workflowSteps = [
    {
      step: "01",
      title: "Een lead komt binnen",
      description: "Zodra iemand je websiteformulier invult, een demo aanvraagt of een brochure downloadt, wordt dit direct opgepikt door Speed to Lead.",
      icon: Zap
    },
    {
      step: "02", 
      title: "Validatie",
      description: "De gegevens van de lead worden automatisch gecontroleerd: is het e-mailadres geldig, gaat het om een zakelijk domein, en is dit geen duplicaat of spam? Alleen echte, waardevolle leads gaan door naar de volgende stap.",
      icon: Shield
    },
    {
      step: "03",
      title: "Directe bevestiging", 
      description: "Binnen enkele seconden ontvangt de lead een korte bevestiging. Zo weet de lead meteen dat de aanvraag goed is aangekomen en voelt zich gezien.",
      icon: Mail,
      example: "Bedankt voor je aanvraag, we nemen snel contact met je op."
    },
    {
      step: "04",
      title: "AI-gedreven research",
      description: "Terwijl de lead de bevestiging ontvangt, gaat de AI razendsnel aan het werk. Binnen enkele minuten verzamelt Speed to Lead informatie over de persoon en het bedrijf: wat doet het bedrijf, welke producten bieden ze aan, recent nieuws, LinkedIn-informatie. Deze data wordt omgezet in een compacte samenvatting die automatisch in je CRM wordt geplaatst.",
      icon: Brain
    },
    {
      step: "05", 
      title: "Persoonlijk opvolgbericht",
      description: "Zodra de research klaar is, ontvangt de lead een tweede bericht. Dit bericht voelt persoonlijk en op maat gemaakt, alsof jij net zelf hun website hebt bezocht. Dit bericht is krachtig omdat het inspeelt op de psychologie van de lead: ze voelen persoonlijke aandacht en denken dat jij er al tijd en energie in hebt gestoken, terwijl alles volledig automatisch gebeurde.",
      icon: Target,
      example: "Ik heb net even naar jullie website gekeken — mooi om te zien wat jullie doen met [specifiek product of dienst]. Ik bel je later vandaag om er kort samen naar te kijken."
    },
    {
      step: "06",
      title: "CRM-integratie", 
      description: "Alle data en communicatie wordt automatisch in je CRM verwerkt. Er wordt een taak of deal aangemaakt, zodat jij of je team precies weten wat er is gebeurd en welke vervolgstap nodig is. Geen losse notities of vergeten mails — alles staat op één plek.",
      icon: Settings
    },
    {
      step: "07",
      title: "Sales-ready handover",
      description: "Wanneer jij of iemand uit je team de lead daadwerkelijk oppakt, ligt alle informatie klaar. Je ziet wat de lead heeft ingevuld, welke berichten ze hebben ontvangen en een samenvatting van hun bedrijf en achtergrond. Zo voelt je opvolging persoonlijk en voorbereid, zonder dat je zelf uren research hoeft te doen.",
      icon: HandHeart
    },
    {
      step: "08",
      title: "Slimme follow-ups",
      description: "Niet elke lead reageert direct. Daarom kan Speed to Lead ook automatisch slimme follow-ups sturen, of taken aanmaken in je CRM. Denk aan een vriendelijke reminder per mail, of een notificatie in Slack of Teams om de lead opnieuw te benaderen. Zo glipt er nooit meer een kans door je vingers.",
      icon: RefreshCw
    }
  ];

  return (
    <div className="bg-black">
      
      {/* Statistics Cards - Direct onder hero (without headline) */}
      <section className="py-12 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {statistics.map((stat, index) => (
              <div key={index} className={`relative ${index < 4 ? 'overflow-visible' : ''}`}>
                {/* Conditional aura glow effect - stronger for top 4 cards */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl blur-xl ${
                  index < 4 ? 'opacity-80' : 'opacity-50'
                }`}></div>
                {index < 4 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-xl blur-2xl opacity-60"></div>
                    <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-r from-purple-500/8 to-pink-600/8 rounded-2xl blur-3xl opacity-40 pointer-events-none"></div>
                  </>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all duration-300 h-40 flex flex-col justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
                
                {/* Arrow between bottom row cards (indices 4, 5, 6) */}
                {index >= 4 && index < 7 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-purple-400/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem Section - "Elke seconde telt in leadconversie" */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Backlights - diagonal flowing shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-purple-600/60 to-pink-500/60 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-pink-600/50 to-purple-500/50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px] bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-3xl transform -rotate-12"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Big Bold Number */}
            <div className="text-center">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
                
                {/* Main statistic */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                  <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent leading-none mb-4">
                    +391%
                  </div>
                  <div className="text-2xl lg:text-3xl text-white font-semibold mb-2">
                    conversie
                  </div>
                  <div className="text-gray-400 text-lg">
                    bij reactie binnen 1 minuut
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Elke seconde telt in
                <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent font-medium">
                  leadconversie
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  In sales is timing vaak belangrijker dan alles wat daarna komt. Je kunt de perfecte pitch hebben, de beste oplossing en de scherpste prijs, maar als je pas uren of dagen na een aanvraag reageert, is de kans groot dat je lead allang met iemand anders in gesprek is.
                </p>
                <p className="text-purple-300 font-semibold">
                  Elke seconde die je verliest, kan je letterlijk een deal kosten. Daarom is snelheid cruciaal.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    391% meer conversie bij reactie binnen 1 minuut
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Elk minuut uitstel = minder kans op conversie
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Leads verdwijnen in overvolle inboxes en worden te laat opgepakt
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-950/30 to-pink-900/20 rounded-xl border border-purple-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Speed to Lead vangt elke lead op het perfecte moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Waarom kiezen voor Speed to Lead?" */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Backlights - circular spreading pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-purple-500/40 to-pink-600/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-pink-500/30 to-purple-600/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-[250px] h-[600px] sm:w-[350px] sm:h-[800px] md:w-[450px] md:h-[1000px] bg-gradient-to-b from-purple-600/20 to-pink-500/20 rounded-full blur-3xl transform rotate-25"></div>
          <div className="absolute bottom-1/2 left-1/6 w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-r from-pink-600/25 to-purple-500/25 rounded-full blur-3xl"></div>
        </div>
        
        {/* Fade to black - top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Waarom kiezen voor
                <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent font-medium">
                  Speed to Lead?
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  Wanneer iemand je formulier invult, is dat hét moment: ze zijn warm en geïnteresseerd. Toch laten de meeste bedrijven prospects gemiddeld 47 uur wachten op een reactie. Tegen die tijd is de interesse vaak al verdwenen of al in gesprek met je concurrent.
                </p>
                <p>
                  Elke minuut uitstel verkleint je kans op conversie drastisch. Onderzoek toont aan dat bedrijven die binnen 1 minuut reageren 391% meer succes hebben.
                </p>
                <p className="text-purple-300 font-semibold">
                  Speed to Lead pakt dit aan met volledige automatisering: binnen minuten krijgt je lead een persoonlijk bericht, terwijl alle data automatisch in je CRM wordt verwerkt.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-950/30 to-pink-900/20 rounded-xl border border-purple-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Snelheid is het verschil tussen een gemiste kans en een gewonnen deal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Enhanced Speed Visual */}
            <div className="relative">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                
                {/* Timer visual showing speed difference */}
                <div className="text-center mb-8">
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">Reactietijd vergelijking</div>
                  
                  {/* Speed to Lead - Fast */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-semibold">Speed to Lead</span>
                      <span className="text-white font-bold">&lt; 10 min</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "15%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
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
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
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
                  <div className="flex items-center bg-gradient-to-r from-purple-950/50 to-pink-900/30 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-white text-sm font-medium">Snelste reactie = Beste resultaat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Speed to Lead Workflow Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-24 mt-16">
            <div className="space-y-6 mb-32">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Zo werkt Speed to Lead.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-2xl sm:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto" 
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Volledig automatisch, alsof je het zelf deed.
              </motion.p>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Step Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-6`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold text-xl">Stap {step.step}</span>
                      <div className="h-px bg-gradient-to-r from-purple-500 to-transparent flex-1"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.example && (
                    <div className="bg-gradient-to-br from-purple-950/30 to-pink-900/20 rounded-xl p-6 border border-purple-500/20 mt-6">
                      <p className="text-purple-200 italic text-base">
                        "{step.example}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
                    
                    {/* Main visual container */}
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent leading-none mb-4">
                          {step.step}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                          <div className="h-1 bg-white/20 rounded-full w-3/4 mx-auto"></div>
                          <div className="h-1 bg-white/10 rounded-full w-1/2 mx-auto"></div>
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
            className="text-center mt-16 mb-12"
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">
              Integraties met jouw favoriete tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 sm:gap-8 items-center mb-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`}
                  className={`max-h-full max-w-full object-contain ${
                    integration.name === 'Gmail' ? 'bg-white p-1 rounded' : 
                    ''
                  }`}
                  style={{ maxHeight: '40px', maxWidth: '40px' }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* FAQ Section - "Veelgestelde vragen over Speed to Lead" */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-purple-950/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                Veelgestelde vragen over
                <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent font-medium">
                  Speed to Lead
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen over Speed to Lead. 
              Staat je vraag er niet tussen? <button 
                onClick={() => window.location.href = '/contact'}
                className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
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
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <faq.icon className="w-5 h-5 mr-4 flex-shrink-0 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-400" />
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
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">
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
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Apple-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* Very subtle ambient glow with fade-out */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/2 left-1/2 w-[1200px] h-[600px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
               style={{
                 background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(219, 39, 119, 0.08) 40%, transparent 70%)'
               }}>
          </div>
        </div>
        
        {/* Apple-style content container */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            
            {/* Apple-style headline */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Mis nooit meer een lead.
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-2xl sm:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Speed to Lead zorgt dat elke kans wordt benut.
            </p>
            
            {/* Apple-style description */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-12">
              Terwijl jij nog in een meeting zit, krijgt je nieuwe lead al de persoonlijke aandacht die ze verwachten.
            </p>

            {/* Apple-style CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/25 min-w-[200px]"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Start nu
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="border border-gray-700 hover:border-gray-600 hover:bg-white/5 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 backdrop-blur-sm min-w-[200px]"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Meer informatie
              </motion.button>
            </div>

            {/* Apple-style subtle bottom text */}
            <p className="text-sm text-gray-600 mt-12 font-normal">
              Binnen minuten na implementatie beginnen jouw leads betere aandacht te krijgen.
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

export default SpeedToLeadContentSection;