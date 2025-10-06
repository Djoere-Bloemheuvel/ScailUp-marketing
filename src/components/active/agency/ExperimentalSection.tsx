import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, ChevronDown, Clock, CheckCircle2, Zap, Target, Search, FileText, Map, Settings, Link, BarChart3, TestTube, Rocket, BookOpen, Wrench, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperimentalSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());

  const growthPhases = [
    {
      title: "Samen je Groeiplan Bepalen",
      description: "In 1-2 gesprekken maken we een compleet plan voor jouw groei.",
      visual: "wireframe-discovery",
      phase: "FASE 1",
      expandedContent: {
        subtitle: "Jouw ideale weg naar meer leads en klanten",
        duration: "1-2 gesprekken",
        steps: [
          { icon: Target, title: "Jouw Doelen Begrijpen", description: "We luisteren naar jouw groeidoelen en huidige uitdagingen" },
          { icon: Search, title: "Knelpunten Ontdekken", description: "Samen kijken we waar je tijd verliest en welke processen je kunnen helpen" },
          { icon: FileText, title: "Persoonlijk Plan", description: "Een op maat gemaakt plan: welke aanpak past het beste bij jouw bedrijf" },
          { icon: Map, title: "Helder Voorstel", description: "Je krijgt een concrete roadmap met tijdlijn en verwachtingen" }
        ]
      }
    },
    {
      title: "Wij Zorgen voor Alles", 
      description: "6 weken waarin jij je kunt focussen op je bedrijf terwijl wij zorgen voor resultaten.",
      visual: "wireframe-implementation",
      phase: "FASE 2",
      expandedContent: {
        subtitle: "Jij ontvangt leads, wij regelen de rest",
        duration: "6 weken begeleiding",
        steps: [
          { icon: Settings, title: "Direct Toegang", description: "Vanaf dag 1 kun je inloggen en meekijken, maar wij zorgen dat alles perfect werkt" },
          { icon: Link, title: "Jouw Oplossingen", description: "We bouwen specifieke tools voor jouw bedrijf en koppelen alles wat je nodig hebt" },
          { icon: BarChart3, title: "Resultaten Zien", description: "Je ziet direct hoe het platform leads genereert en processen verbetert" },
          { icon: TestTube, title: "Garantie op Succes", description: "Werkt het niet zoals beloofd? Dan kunnen we samen besluiten te stoppen" }
        ]
      }
    },
    {
      title: "Jij Neemt het Over",
      description: "Je leert alles en krijgt de sleutels, met backup wanneer je het nodig hebt.",
      visual: "wireframe-ownership",
      phase: "FASE 3",
      expandedContent: {
        subtitle: "Van onze zorg naar jouw controle, met een vangnet",
        duration: "Flexibele ondersteuning",
        steps: [
          { icon: Rocket, title: "Alles Uitgelegd", description: "In een persoonlijke sessie leer je precies hoe alles werkt en hoe je het gebruikt" },
          { icon: BookOpen, title: "Jij Aan het Roer", description: "6 weken lang voer je alles zelf uit, zodat je vertrouwd raakt met het systeem" },
          { icon: Wrench, title: "Hulp Wanneer Nodig", description: "Je hebt een vast aanspreekpunt die altijd kan helpen als je vastloopt" },
          { icon: RotateCcw, title: "Geen Lange Verplichtingen", description: "Na de eerste periode kun je maandelijks opzeggen - geen verrassingen" }
        ]
      }
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 lg:py-40 overflow-hidden">
      
      {/* Ambient Blue Backlight - Exact same as CustomerJourney Section */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        {/* Blue glows positioned behind text (left side) */}
        <div 
          className="absolute top-1/3 left-1/6 w-[30rem] h-[25rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.35) 35%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/8 w-[25rem] h-[20rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(96, 165, 250, 0.75) 0%, rgba(96, 165, 250, 0.30) 35%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-[35rem] h-[30rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0.25) 35%, transparent 70%)', transform: 'translateY(-50%)' }}
        />
      </div>
      
      
      {/* Subtle Grid Background - Jet Style */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Floating Particles - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-20">
        
        {/* Hero Headline - Jet Style */}
        <motion.div 
          className="text-center mb-24 lg:mb-40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl text-white font-light tracking-tight"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              letterSpacing: '-0.035em',
              lineHeight: '1.1',
              textRendering: 'optimizeLegibility', 
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Van eerste gesprek tot jouw succes:<br />
            Zo werken we samen in drie stappen.
          </h2>
        </motion.div>

        {/* 3 Phases Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-20 xl:gap-24">
          {growthPhases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 rounded-2xl select-none"
              style={{ 
                outline: 'none',
                WebkitTapHighlightColor: 'transparent'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onViewportEnter={() => setHasAnimated(true)}
              whileHover={{ y: -8 }}
              onClick={() => {
                const newExpandedPhases = new Set(expandedPhases);
                if (newExpandedPhases.has(index)) {
                  newExpandedPhases.delete(index);
                } else {
                  newExpandedPhases.add(index);
                }
                setExpandedPhases(newExpandedPhases);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const newExpandedPhases = new Set(expandedPhases);
                  if (newExpandedPhases.has(index)) {
                    newExpandedPhases.delete(index);
                  } else {
                    newExpandedPhases.add(index);
                  }
                  setExpandedPhases(newExpandedPhases);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={expandedPhases.has(index)}
              aria-label={`${phase.phase}: ${phase.title}. ${expandedPhases.has(index) ? 'Minder details' : 'Meer details'}`}
            >
              
              {/* Wireframe Visual Container - Clean like Jet */}
              <div className="relative h-64 lg:h-72 mb-12 flex items-center justify-center"
              >
                
                {/* Discovery & Keuze - Research Target */}
                {phase.visual === "wireframe-discovery" && (
                  <motion.svg 
                    className="w-48 h-36 lg:w-56 lg:h-42" 
                    viewBox="0 0 200 120" 
                    fill="none"
                  >
                    {/* Laptop screen */}
                    <motion.rect 
                      x="40" y="20" width="120" height="75" rx="4" 
                      stroke="rgba(33, 150, 243, 0.6)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* Laptop base */}
                    <motion.path 
                      d="M30 95 L170 95 L175 105 L25 105 Z" 
                      stroke="rgba(33, 150, 243, 0.6)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    />
                    {/* Content lines */}
                    <motion.line x1="50" y1="35" x2="110" y2="35" stroke="rgba(33, 203, 243, 0.4)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                    <motion.line x1="50" y1="45" x2="130" y2="45" stroke="rgba(33, 203, 243, 0.4)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.7 }}
                    />
                    <motion.line x1="50" y1="55" x2="120" y2="55" stroke="rgba(33, 203, 243, 0.4)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.9 }}
                    />
                    {/* Stars around laptop */}
                    <motion.path d="M20 30 L25 40 L15 40 Z M20 35 L25 25 L15 25 Z" 
                      stroke="rgba(33, 150, 243, 0.8)" 
                      strokeWidth="1" 
                      fill="none"
                      initial={{ pathLength: 0, scale: 0 }}
                      animate={hasAnimated ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                    />
                    <motion.path d="M175 45 L180 55 L170 55 Z M175 50 L180 40 L170 40 Z" 
                      stroke="rgba(33, 150, 243, 0.8)" 
                      strokeWidth="1" 
                      fill="none"
                      initial={{ pathLength: 0, scale: 0 }}
                      animate={hasAnimated ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0 }}
                      transition={{ duration: 0.8, delay: 2.4 }}
                    />
                    <motion.path d="M165 15 L170 25 L160 25 Z M165 20 L170 10 L160 10 Z" 
                      stroke="rgba(33, 150, 243, 0.8)" 
                      strokeWidth="1" 
                      fill="none"
                      initial={{ pathLength: 0, scale: 0 }}
                      animate={hasAnimated ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0 }}
                      transition={{ duration: 0.8, delay: 2.6 }}
                    />
                  </motion.svg>
                )}

                {/* Onboarding & Implementatie - Building Process */}
                {phase.visual === "wireframe-implementation" && (
                  <motion.svg 
                    className="w-48 h-36 lg:w-56 lg:h-42" 
                    viewBox="0 0 200 120" 
                    fill="none"
                  >
                    {/* Main cube front face */}
                    <motion.path 
                      d="M50 35 L130 35 L130 85 L50 85 Z" 
                      stroke="rgba(147, 51, 234, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                    {/* Top face */}
                    <motion.path 
                      d="M50 35 L70 20 L150 20 L130 35 Z" 
                      stroke="rgba(147, 51, 234, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    />
                    {/* Right face */}
                    <motion.path 
                      d="M130 35 L150 20 L150 70 L130 85 Z" 
                      stroke="rgba(147, 51, 234, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    />
                    {/* #1 Badge circle */}
                    <motion.circle 
                      cx="100" cy="27" r="12" 
                      stroke="rgba(168, 85, 247, 0.8)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0, scale: 0 }}
                      animate={hasAnimated ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                    {/* #1 Text */}
                    <motion.text 
                      x="100" y="32" 
                      textAnchor="middle" 
                      fill="rgba(168, 85, 247, 0.9)" 
                      fontSize="12" 
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      #1
                    </motion.text>
                    {/* Ribbon lines */}
                    <motion.path d="M88 39 L88 45 M112 39 L112 45" 
                      stroke="rgba(147, 51, 234, 0.6)" 
                      strokeWidth="1" 
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.6, delay: 2.3 }}
                    />
                  </motion.svg>
                )}

                {/* Overdracht & Eigenaarschap - Handshake/Transfer */}
                {phase.visual === "wireframe-ownership" && (
                  <motion.svg 
                    className="w-48 h-36 lg:w-56 lg:h-42" 
                    viewBox="0 0 200 120" 
                    fill="none"
                  >
                    {/* Lightning bolt shape - like Jet */}
                    <motion.path 
                      d="M100 15 L85 55 L105 55 L95 105 L110 65 L90 65 L100 15 Z" 
                      stroke="rgba(236, 72, 153, 0.7)" 
                      strokeWidth="2" 
                      fill="none"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* Inner lightning detail */}
                    <motion.path 
                      d="M98 25 L90 50 L98 50 L95 85 L103 60 L95 60 L98 25" 
                      stroke="rgba(244, 114, 182, 0.5)" 
                      strokeWidth="1" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    />
                    {/* Energy sparks around */}
                    <motion.circle cx="65" cy="40" r="2" fill="rgba(236, 72, 153, 0.8)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 }}
                    />
                    <motion.circle cx="135" cy="35" r="1.5" fill="rgba(244, 114, 182, 0.6)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2 }}
                    />
                    <motion.circle cx="70" cy="80" r="1.5" fill="rgba(244, 114, 182, 0.6)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2.2 }}
                    />
                    <motion.circle cx="130" cy="75" r="2" fill="rgba(236, 72, 153, 0.8)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2.4 }}
                    />
                    {/* Small radiating lines */}
                    <motion.path d="M60 50 L55 45 M60 50 L55 55 M140 45 L145 40 M140 45 L145 50" 
                      stroke="rgba(236, 72, 153, 0.5)" 
                      strokeWidth="1" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 2.6 }}
                    />
                  </motion.svg>
                )}

                {/* Cost Savings - Simple Coin Stack */}
                {phase.visual === "wireframe-coins" && (
                  <motion.svg 
                    className="w-48 h-36 lg:w-56 lg:h-42" 
                    viewBox="0 0 200 120" 
                    fill="none"
                  >
                    {/* Coin stack base */}
                    <motion.ellipse 
                      cx="100" cy="85" rx="30" ry="8" 
                      stroke="rgba(34, 197, 94, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    {/* Second coin */}
                    <motion.ellipse 
                      cx="100" cy="75" rx="30" ry="8" 
                      stroke="rgba(34, 197, 94, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    />
                    {/* Third coin */}
                    <motion.ellipse 
                      cx="100" cy="65" rx="30" ry="8" 
                      stroke="rgba(34, 197, 94, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                    />
                    {/* Top coin */}
                    <motion.ellipse 
                      cx="100" cy="55" rx="30" ry="8" 
                      stroke="rgba(34, 197, 94, 0.7)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                    />
                    {/* Stack vertical lines */}
                    <motion.line x1="70" y1="85" x2="70" y2="55" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                    <motion.line x1="130" y1="85" x2="130" y2="55" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    />
                    {/* Dollar signs */}
                    <motion.text 
                      x="85" y="72" 
                      fill="rgba(34, 197, 94, 0.8)" 
                      fontSize="16" 
                      fontWeight="bold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                    >
                      $
                    </motion.text>
                    <motion.text 
                      x="115" y="62" 
                      fill="rgba(34, 197, 94, 0.8)" 
                      fontSize="16" 
                      fontWeight="bold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      $
                    </motion.text>
                    {/* Floating coins */}
                    <motion.circle 
                      cx="145" cy="35" r="8" 
                      stroke="rgba(34, 197, 94, 0.5)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ scale: 0, y: 10 }}
                      animate={hasAnimated ? { scale: 1, y: 0 } : { scale: 0, y: 10 }}
                      transition={{ duration: 0.8, delay: 2.3 }}
                    />
                    <motion.circle 
                      cx="55" cy="40" r="6" 
                      stroke="rgba(34, 197, 94, 0.4)" 
                      strokeWidth="1.5" 
                      fill="none"
                      initial={{ scale: 0, y: 10 }}
                      animate={hasAnimated ? { scale: 1, y: 0 } : { scale: 0, y: 10 }}
                      transition={{ duration: 0.8, delay: 2.5 }}
                    />
                  </motion.svg>
                )}

                {/* Jet-style particle mist around each wireframe */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                      style={{
                        left: `${35 + Math.random() * 30}%`,
                        top: `${35 + Math.random() * 30}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Phase Label */}
              <motion.span 
                className="text-sm font-medium text-gray-400 tracking-wider uppercase block mb-3"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 600
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              >
                {phase.phase}
              </motion.span>

              {/* Title */}
              <motion.h3 
                className="text-2xl lg:text-3xl text-white font-light mb-4"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '300',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.2'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              >
                {phase.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-gray-300 leading-relaxed text-base lg:text-lg mb-4"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 300
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              >
                {phase.description}
              </motion.p>

              {/* Expand/Collapse Indicator */}
              <motion.div 
                className="flex items-center justify-center mt-6 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              >
                <motion.div
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  animate={{ 
                    rotate: expandedPhases.has(index) ? 180 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
                <span className="text-sm text-gray-400 ml-2 group-hover:text-gray-300 transition-colors duration-300">
                  {expandedPhases.has(index) ? 'Minder details' : 'Meer details'}
                </span>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedPhases.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.16, 1, 0.3, 1],
                      opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-white/10">
                      {/* Text-based content container */}
                      <div className="space-y-6">
                        {/* Header Section */}
                        <div className="mb-6">
                          <h4 className="text-lg font-medium text-white mb-2">
                            {phase.expandedContent.subtitle}
                          </h4>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{phase.expandedContent.duration}</span>
                          </div>
                        </div>

                        {/* Process Steps */}
                        <div className="mb-6">
                          <h5 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">
                            Proces
                          </h5>
                          <div className="space-y-4">
                            {phase.expandedContent.steps.map((step, stepIndex) => (
                              <motion.div
                                key={stepIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: stepIndex * 0.1 + 0.2 }}
                                className="flex items-start space-x-3"
                              >
                                <step.icon className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
                                <div>
                                  <h6 className="text-white font-medium text-sm mb-1">{step.title}</h6>
                                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>


                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Minimal Jet Style */}
        <motion.div 
          className="text-center mt-32 lg:mt-48"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/contact';
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 group backdrop-blur-sm"
            style={{
              fontFamily: '"Neue Haas Grotesk Display Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '400',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start jouw groeitraject</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ExperimentalSection;