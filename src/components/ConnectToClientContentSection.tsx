import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, MessageSquare, Users, Calendar, CheckCircle, TrendingUp, Brain, Target, Settings, Zap, Shield, Mail, RefreshCw, HelpCircle, ChevronDown, ChevronUp, BarChart3, Link, Search, Database, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ServiceSection from './ServiceSection';

const ConnectToClientContentSection = () => {
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

  // Hoe het werkt - 5 stappen die de Connect to Client Agent doorloopt
  const howItWorksSteps = [
    {
      id: 'lead-selection',
      icon: Target,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Slimme Leadselectie & Targeting
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 1: Intelligente Prospect Discovery
          </div>
        </div>
      ),
      subtitle: 'AI selecteert prospects met hoogste conversiekans',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De agent analyseert jouw Ideal Customer Profile en selecteert automatisch de meest kansrijke prospects. Hij filtert op functietitel, bedrijfsgrootte, industrie, locatie en recente LinkedIn-activiteiten. Machine learning voorspelt welke profielen de hoogste kans hebben op acceptatie en conversie naar meetings.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-600 to-blue-500',
      number: '01',
      highlight: 'Predictive lead scoring',
      metrics: 'Op basis van jouw ICP'
    },
    {
      id: 'profile-research',
      icon: Search,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Diepgaande Profielanalyse
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 2: AI Research & Context Building
          </div>
        </div>
      ),
      subtitle: 'Hyperpersoonlijke insights voor elk prospect',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Voor elke geselecteerde prospect doet AI uitgebreid research: LinkedIn profiel, recente posts en activiteiten, bedrijfsinformatie, functiegeschiedenis, educatie en connecties. Deze data wordt geanalyseerd om persoonlijke aanknopingspunten te vinden die de basis vormen voor authentieke, relevante berichten.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      number: '02',
      highlight: 'Contextual AI research',
      metrics: 'Per individueel prospect'
    },
    {
      id: 'personalized-outreach',
      icon: MessageSquare,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Hyperpersoonlijke Connectieverzoeken
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 3: Authentieke Outreach Messages
          </div>
        </div>
      ),
      subtitle: 'Elk bericht uniek en relevant',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Gebaseerd op de research schrijft AI unieke connectieverzoeken die inspelen op specifieke situatie van elke prospect. Geen generieke templates, maar authentieke berichten die aanvoelen alsof een ervaren salesprofessional ze persoonlijk heeft geschreven. Hoge acceptatierates door relevantie.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-400 to-cyan-400',
      number: '03',
      highlight: 'Human-like personalisatie',
      metrics: '3-5x hogere acceptatie'
    },
    {
      id: 'followup-sequences',
      icon: RefreshCw,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Multi-Step Opvolgsequences
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 4: Gestructureerde Nurturing Flow
          </div>
        </div>
      ),
      subtitle: 'Van connectie naar meeting via natuurlijke gesprekken',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Na acceptatie start automatisch een intelligente opvolgflow. Elk bericht bouwt natuurlijk voort op het vorige, met focus op waarde bieden en vertrouwen opbouwen. De AI past timing en tone aan op basis van eerdere reacties, leidend tot een organiek gesprek dat eindigt met een meeting voorstel.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-indigo-500 to-blue-500',
      number: '04',
      highlight: 'Intelligente nurturing',
      metrics: 'Natuurlijke gespreksflow'
    },
    {
      id: 'meeting-scheduling',
      icon: Calendar,
      title: (
        <div>
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Reply Management & Meeting Booking
          </div>
          <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white/80 tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Stap 5: Automatische Agenda Integratie
          </div>
        </div>
      ),
      subtitle: 'Van interesse naar afspraak in je agenda',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'AI herkent automatisch sentiment en intentie in reacties. Bij positieve responses start direct meeting scheduling via agenda-integratie. Vragen worden contextueel beantwoord, en "niet nu" reacties krijgen strategische nurturing follow-ups. Je ontvangt een volledig briefing over elke geplande meeting.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-blue-500 to-indigo-400',
      number: '05',
      highlight: 'End-to-end automatisering',
      metrics: 'Direct in je agenda'
    }
  ];

  // FAQ data - Connect to Client focus
  const faqData = [
    {
      question: "Hoe werkt Connect to Client precies?",
      answer: "Connect to Client is jouw autonome LinkedIn-agent die de complete outreach overneemt. De AI selecteert zelf de meest kansrijke prospects op basis van jouw ICP, analyseert hun profielen en bedrijfsinformatie, en schrijft hyperpersoonlijke connectieverzoeken. Na acceptatie start automatisch een opvolgflow die natuurlijk doorloopt naar een afspraak in je agenda. Geen generieke berichten of spam - elke interactie voelt authentiek en menselijk.",
      icon: LinkedinIcon
    },
    {
      question: "Waarom zijn persoonlijke LinkedIn berichten zo belangrijk?",
      answer: "Generic LinkedIn automation tools sturen massaberichten die direct als spam worden herkend. Connect to Client analyseert elk profiel individueel: functies, posts, bedrijfsinformatie, en recente activiteiten. De AI schrijft unieke berichten die aansluiten bij hun specifieke situatie. Dit resulteert in 3-5x hogere acceptatierates en veel betere conversatie naar meetings. Prospects ervaren een echt gesprek met een salesprofessional, niet een bot.",
      icon: MessageSquare
    },
    {
      question: "Hoe selecteert de AI de juiste prospects?",
      answer: "De agent gebruikt geavanceerde targeting op basis van jouw Ideal Customer Profile. Hij analyseert functietitels, bedrijfsgrootte, industrie, locatie, en recente activiteiten. Daarnaast leert het systeem van je eerdere successen: welke profielen hebben geaccepteerd en geconverteerd? De AI geeft prioriteit aan prospects met de hoogste kans op zowel connectie als daadwerkelijke business. Ook houdt hij rekening met LinkedIn limieten voor optimale deliverability.",
      icon: Target
    },
    {
      question: "Kan ik zelf bepalen welke berichten er verstuurd worden?",
      answer: "Ja, je hebt volledige controle! Je kunt kiezen tussen volledig autonome modus (AI handelt alles af) of human-in-the-loop (AI schrijft voorstellen, jij keurt goed). Voor elke opvolgstap kun je templates instellen of de AI volledig laten improviseren. Het systeem leert van jouw aanpassingen en voorkeur, zodat toekomstige berichten steeds beter aansluiten bij jouw tone-of-voice en aanpak.",
      icon: Settings
    },
    {
      question: "Hoe gaat Connect to Client om met replies?",
      answer: "De AI herkent automatisch sentiment en intentie in reacties. Bij positieve responses start een natuurlijke opvolgflow richting meeting. Bij vragen beantwoordt de agent deze contextueel. Bij 'niet nu' reacties plant hij nurturing follow-ups voor later. Voor complexe situaties krijg jij een notificatie om over te nemen. De agent kan ook automatisch meetings inplannen in je agenda via integraties met Calendly of Google Calendar.",
      icon: RefreshCw
    },
    {
      question: "Vallen deze berichten niet onder LinkedIn spam?",
      answer: "Nee, Connect to Client is specifiek ontworpen om binnen LinkedIn's richtlijnen te blijven. De agent respecteert alle limieten: maximaal 100 connectieverzoeken per week, natuurlijke timing tussen berichten, en variatie in messaging patterns. Doordat elk bericht hyperpersoonlijk en relevant is, zijn de engagement rates hoog en spam reports laag. LinkedIn's algoritme ziet dit als authentieke networking, niet als automation.",
      icon: Shield
    },
    {
      question: "Kan ik mijn LinkedIn netwerk uitbreiden zonder risico?",
      answer: "Absoluut! Connect to Client groeit je netwerk strategisch en veilig. Door hoge acceptatierates (persoonlijke berichten) en lage spam rates bouw je een waardevol netwerk op van relevante connecties. Deze mensen blijven in je netwerk als potentiële toekomstige klanten, partners, of referrals. Het systeem houdt bij welke connecties actief blijven en suggereert re-engagement strategieën voor 'slapende' connecties.",
      icon: Users
    },
    {
      question: "Hoe lang duurt het voordat ik resultaten zie?",
      answer: "De eerste connecties zie je binnen 24-48 uur. De agent stuurt dagelijks nieuwe connectieverzoeken (binnen LinkedIn limieten) en volgt geaccepteerde connecties op. Gemiddeld zie je binnen 1 week de eerste meetings in je agenda staan. Na 2-3 weken heeft het systeem genoeg data om de targeting en messaging verder te optimaliseren voor nog betere resultaten. Het is een groeiende machine die maandelijks effectiever wordt.",
      icon: TrendingUp
    }
  ];

  // Integration logos data - LinkedIn focused
  const integrations = [
    { name: 'LinkedIn', logo: '/linkedin-logo.png' },
    { name: 'LinkedIn Sales Navigator', logo: '/sales-navigator-logo.png' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
    { name: 'Salesforce', logo: '/salesforce-logo.png' },
    { name: 'Pipedrive', logo: '/pipedrive-logo.svg' },
    { name: 'Google Calendar', logo: '/google-calendar-logo.webp' },
    { name: 'Calendly', logo: '/calendly-logo.png' },
    { name: 'Gmail', logo: '/gmail-logo.webp' },
    { name: 'Slack', logo: 'https://img.icons8.com/color/48/slack-new.png' },
    { name: 'Notion', logo: '/notion-logo.png' },
    { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png' },
    { name: 'WhatsApp', logo: '/whatsapp-logo.webp' },
    { name: 'Google Sheets', logo: '/google-sheets-logo.webp' },
    { name: 'Instantly', logo: '/instantly-logo.webp' }
  ];

  // Solution steps - LinkedIn outreach process
  const solutionSteps = [
    {
      icon: Target,
      title: "Slimme leadselectie",
      description: "AI kiest prospects met hoogste conversiekans op basis van jouw ICP"
    },
    {
      icon: MessageSquare,
      title: "Hyperpersoonlijke berichten",
      description: "Unieke connectieverzoeken gebaseerd op profielanalyse en bedrijfsdata"
    },
    {
      icon: RefreshCw,
      title: "Multi-step opvolging",
      description: "Gestructureerde sequences van connectie naar meeting"
    },
    {
      icon: Calendar,
      title: "Direct naar agenda",
      description: "AI plant automatisch afspraken in je agenda na positieve reacties"
    }
  ];

  // Benefits section - Connect to Client focus
  const benefits = [
    "3-5x hogere acceptatierates door persoonlijke berichten",
    "Autonome outreach van prospecting tot meeting in agenda",
    "Veilig binnen LinkedIn richtlijnen met hoge engagement"
  ];

  // Benefits cards - Connect to Client focus
  const statistics = [
    {
      number: "3-5x",
      description: "hogere acceptatierates",
      icon: TrendingUp,
      theme: "conversion"
    },
    {
      number: "100%",
      description: "autonome uitvoering",
      icon: Zap,
      theme: "automation"
    },
    {
      number: "Personal",
      description: "elk bericht uniek",
      icon: MessageSquare,
      theme: "personalization"
    },
    {
      number: "Safe",
      description: "binnen LinkedIn rules",
      icon: Shield,
      theme: "compliance"
    },
    {
      number: "Smart",
      description: "AI leert continu bij",
      icon: Brain,
      theme: "learning"
    },
    {
      number: "Direct",
      description: "naar je agenda",
      icon: Calendar,
      theme: "scheduling"
    },
    {
      number: "Network",
      description: "groei waardevol netwerk",
      icon: Users,
      theme: "networking"
    },
    {
      number: "Scale",
      description: "outreach op grote schaal",
      icon: BarChart3,
      theme: "scale"
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

  // Connect to Client workflow steps
  const workflowSteps = [
    {
      step: "01",
      title: "Slimme leadselectie",
      description: "AI analyseert jouw Ideal Customer Profile en selecteert de meest kansrijke prospects op basis van functietitel, bedrijfsgrootte, industrie, locatie en recente LinkedIn-activiteiten.",
      icon: Target
    },
    {
      step: "02", 
      title: "Profielanalyse",
      description: "Voor elke geselecteerde prospect doet de AI diepgaande research: profielinformatie, recente posts, bedrijfsinformatie, functiegeschiedenis en connecties. Deze data vormt de basis voor hyperpersoonlijke berichten.",
      icon: Search
    },
    {
      step: "03",
      title: "Hyperpersoonlijk connectieverzoek", 
      description: "Gebaseerd op de research schrijft AI een uniek connectieverzoek dat inspeelt op de specifieke situatie van de prospect. Geen generieke templates, maar authentieke berichten die voelen als een echte salesprofessional.",
      icon: MessageSquare,
      example: "Hallo [Naam], ik zie dat jullie recent zijn uitgebreid met een nieuw kantoor in Amsterdam. Interessant om te zien hoe jullie groeien in de fintech sector. Zou graag connecten!"
    },
    {
      step: "04",
      title: "Connectie-acceptatie tracking",
      description: "Het systeem monitort welke connectieverzoeken worden geaccepteerd en analyseert patronen. Deze data wordt gebruikt om toekomstige targeting en messaging te optimaliseren voor nog betere resultaten.",
      icon: TrendingUp
    },
    {
      step: "05", 
      title: "Multi-step opvolgsequence",
      description: "Na acceptatie start automatisch een gestructureerde opvolgflow. Elk bericht bouwt natuurlijk voort op het vorige, met focus op waarde bieden en vertrouwen opbouwen voordat een meeting wordt voorgesteld.",
      icon: RefreshCw,
      example: "Bedankt voor de connectie! Ik zag je recente post over AI in de financiële dienstverlening - daar hebben wij interessante ervaringen mee. Zou je open staan voor een kort gesprek?"
    },
    {
      step: "06",
      title: "Reply management", 
      description: "AI herkent automatisch sentiment en intentie in reacties. Positieve responses worden doorgeleid naar meeting scheduling, vragen worden contextueel beantwoord, en 'niet nu' reacties krijgen nurturing follow-ups.",
      icon: Brain
    },
    {
      step: "07",
      title: "Automatische meeting scheduling",
      description: "Bij positieve reacties kan de agent automatisch meetings inplannen via integraties met je agenda. De prospect ontvangt direct een uitnodiging, en jij krijgt een volledig briefing over de achtergrond en het gesprek tot nu toe.",
      icon: Calendar
    }
  ];

  return (
    <div className="bg-black min-h-screen">

      {/* Statistics Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
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
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 sm:p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/60 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-blue-300 mb-1 sm:mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem Section - "Authentieke connecties op LinkedIn" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - diagonal flowing shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-br from-blue-500/60 to-indigo-600/60 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-indigo-600/50 to-blue-500/50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[400px] sm:w-[300px] sm:h-[600px] md:w-[400px] md:h-[800px] bg-gradient-to-r from-blue-500/30 to-blue-300/30 rounded-full blur-3xl transform -rotate-12"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
                
                {/* Main statistic */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent leading-none mb-4">
                    3-5x
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    acceptatierates
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    vs generieke berichten
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Authentieke connecties op
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">
                  LinkedIn
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  LinkedIn wordt overspoeld met generieke automation tools die massaberichten versturen. Deze worden direct herkend als spam en leiden tot lage acceptatierates en slechte reputatie.
                </p>
                <p className="text-blue-300 font-semibold">
                  Connect to Client pakt dit anders aan: elke interactie voelt authentiek en menselijk.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Zap className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    3-5x hogere acceptatierates door hyperpersoonlijke berichten
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Database className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Veilig binnen LinkedIn richtlijnen - geen risico op beperkingen
                  </span>
                </div>

                <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Link className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    Elk bericht uniek en relevant voor de specifieke prospect
                  </span>
                </div>
              </div>
              
              {/* Tagline highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-950/30 to-indigo-900/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Connect to Client maakt van LinkedIn networking een voorspelbare pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - "Waarom kiezen voor Connect to Client?" */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        {/* Backlights - circular spreading pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-br from-blue-500/40 to-indigo-600/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] bg-gradient-to-tl from-indigo-500/30 to-blue-600/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-[250px] h-[600px] sm:w-[350px] sm:h-[800px] md:w-[450px] md:h-[1000px] bg-gradient-to-b from-blue-600/20 to-blue-300/20 rounded-full blur-3xl transform rotate-25"></div>
          <div className="absolute bottom-1/2 left-1/6 w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-r from-blue-300/25 to-blue-500/25 rounded-full blur-3xl"></div>
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
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">
                  Connect to Client?
                </span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <p>
                  LinkedIn heeft 900+ miljoen professionals, maar de meeste outreach voelt onpersoonlijk en robotisch. Decision makers krijgen dagelijks tientallen generieke berichten en negeren ze allemaal.
                </p>
                <p>
                  Connect to Client doorbreekt deze ruis door elk bericht te baseren op diepgaande research en contextuele personalisatie. Prospects ervaren authentieke interesse in plaats van bulk messaging.
                </p>
                <p className="text-blue-300 font-semibold">
                  Het resultaat: waardevolle connecties die daadwerkelijk leiden tot business, niet alleen lege LinkedIn connecties.
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
                  <LinkedinIcon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold text-lg">
                    Van connectie naar klant - volledig geautomatiseerd.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Visual representation */}
            <div className="text-center">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
                
                {/* Main visual */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent leading-none mb-4">
                    100%
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-2">
                    autonome uitvoering
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    van prospect tot meeting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hoe het werkt Section - using ServiceSection like InboxToMeetingContentSection */}
      <section className="relative bg-black ambient">
        {/* Ambient Background Lights - LinkedIn themed */}
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
      
      {/* Connect to Client Approach Section */}
      <section id="approach" className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Connect to Client themed ambient lights */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-700 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full blur-3xl opacity-15"></div>
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
              Van connectie naar <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">klant</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
              Autonome LinkedIn outreach die voelt als een menselijke salesprofessional.<br className="hidden sm:block" />
              Geen spam, wel resultaat.
            </p>
          </motion.div>

          {/* Statistics Grid - 8 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 sm:p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/60 text-center h-[160px] sm:h-[180px] flex flex-col justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-blue-300 mb-1 sm:mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                    {stat.number}
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
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Veelgestelde <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent font-medium">vragen</span>
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
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
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

        </div>
      </section>

      {/* Apple-style Closing CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        {/* Apple-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* Very subtle ambient glow with fade-out */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-[800px] sm:w-[1000px] lg:w-[1200px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
               style={{
                 background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)'
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
              Maak klanten van connecties
            </h2>
            
            {/* Apple-style subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Connect to Client opent elke deur op LinkedIn.
            </p>
            
            {/* Apple-style description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal mt-8 sm:mt-12">
              Terwijl anderen nog wachten op acceptatie, spreek jij al met je volgende klant.
            </p>

            {/* Apple-style CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-12 sm:mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-blue-500/25 min-w-[180px] sm:min-w-[200px] w-full sm:w-auto"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Start nu
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="border border-gray-700 hover:border-gray-600 hover:bg-white/5 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 backdrop-blur-sm min-w-[180px] sm:min-w-[200px] w-full sm:w-auto"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Meer informatie
              </motion.button>
            </div>

            {/* Apple-style subtle bottom text */}
            <p className="text-xs sm:text-sm text-gray-600 mt-8 sm:mt-12 font-normal">
              Binnen weken na implementatie stromen je eerste LinkedIn-leads al binnen.
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

export default ConnectToClientContentSection;