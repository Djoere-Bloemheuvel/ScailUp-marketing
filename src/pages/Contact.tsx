import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail, Phone, MapPin, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import CinematicBackground from '@/components/hero/CinematicBackground';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

interface ContactFormData {
  naam: string;
  email: string;
  bedrijf: string;
  telefoon: string;
  bericht: string;
}

interface ContactFormErrors {
  naam?: string;
  email?: string;
  bedrijf?: string;
  telefoon?: string;
  bericht?: string;
  submit?: string;
}

/**
 * Premium Contact Page Component
 * - Matches Buildrs.AI premium B2B design language
 * - Optimized for speed and conversion
 * - WCAG 2.1 AA compliant
 * - SEO optimized with structured data
 */
const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    naam: '',
    email: '',
    bedrijf: '',
    telefoon: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    naam: false,
    email: false,
    bedrijf: false,
    telefoon: false,
    bericht: false
  });

  /**
   * Security: Input sanitization to prevent XSS attacks
   */
  const sanitizeInput = useCallback((input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }, []);

  /**
   * Enhanced email validation with security considerations
   */
  const emailRegex = useMemo(() =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  , []);

  /**
   * Comprehensive form validation
   */
  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};

    // Name validation
    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    } else if (formData.naam.trim().length < 2) {
      newErrors.naam = 'Naam moet minimaal 2 tekens bevatten';
    } else if (formData.naam.trim().length > 100) {
      newErrors.naam = 'Naam mag maximaal 100 tekens bevatten';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    } else if (formData.email.length > 254) {
      newErrors.email = 'E-mailadres is te lang';
    }

    // Company validation
    if (!formData.bedrijf.trim()) {
      newErrors.bedrijf = 'Bedrijfsnaam is verplicht';
    } else if (formData.bedrijf.trim().length < 2) {
      newErrors.bedrijf = 'Bedrijfsnaam moet minimaal 2 tekens bevatten';
    } else if (formData.bedrijf.trim().length > 100) {
      newErrors.bedrijf = 'Bedrijfsnaam mag maximaal 100 tekens bevatten';
    }

    // Phone validation (optional but if provided, validate format)
    if (formData.telefoon.trim() && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.telefoon.trim())) {
      newErrors.telefoon = 'Voer een geldig telefoonnummer in';
    }

    // Message validation
    if (!formData.bericht.trim()) {
      newErrors.bericht = 'Bericht is verplicht';
    } else if (formData.bericht.trim().length < 10) {
      newErrors.bericht = 'Bericht moet minimaal 10 tekens bevatten';
    } else if (formData.bericht.trim().length > 2000) {
      newErrors.bericht = 'Bericht mag maximaal 2000 tekens bevatten';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, emailRegex]);

  /**
   * Enhanced form submission with error handling and security
   */
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field for accessibility
      const errorKeys = Object.keys(errors) as Array<keyof ContactFormData>;
      const firstErrorField = errorKeys[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Sanitize all inputs before submission
      const sanitizedData = {
        naam: sanitizeInput(formData.naam),
        email: sanitizeInput(formData.email),
        bedrijf: sanitizeInput(formData.bedrijf),
        telefoon: sanitizeInput(formData.telefoon),
        bericht: sanitizeInput(formData.bericht),
        timestamp: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        referrer: typeof document !== 'undefined' ? document.referrer : ''
      };

      console.log('Contact form submission:', sanitizedData);
      
      // TODO: Replace with actual webhook integration
      // import { submitContactForm } from '@/lib/contactWebhook';
      // const result = await submitContactForm(sanitizedData);
      // if (!result.success) throw new Error(result.error);
      
      // Simulate processing time - remove when webhook is implemented
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Reset form state
      setFormData({ naam: '', email: '', bedrijf: '', telefoon: '', bericht: '' });
      setErrors({});
      setTouched({ naam: false, email: false, bedrijf: false, telefoon: false, bericht: false });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);
      setErrors({ submit: 'Er is een fout opgetreden. Probeer het later opnieuw.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, sanitizeInput, emailRegex, validateForm, errors]);

  /**
   * Handle input changes with real-time validation
   */
  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    
    // Mark field as touched for better UX
    if (!touched[field]) {
      setTouched(prev => ({ ...prev, [field]: true }));
    }
    
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [sanitizeInput, touched, errors]);

  /**
   * Handle blur events for validation feedback
   */
  const handleBlur = useCallback((field: keyof ContactFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate specific field
    const value = formData[field];
    let fieldError: string | undefined;
    
    switch (field) {
      case 'naam':
        if (!value.trim()) {
          fieldError = 'Naam is verplicht';
        } else if (value.trim().length < 2) {
          fieldError = 'Naam moet minimaal 2 tekens bevatten';
        }
        break;
      case 'email':
        if (!value.trim()) {
          fieldError = 'E-mail is verplicht';
        } else if (!emailRegex.test(value.trim())) {
          fieldError = 'Voer een geldig e-mailadres in';
        }
        break;
      case 'bedrijf':
        if (!value.trim()) {
          fieldError = 'Bedrijfsnaam is verplicht';
        } else if (value.trim().length < 2) {
          fieldError = 'Bedrijfsnaam moet minimaal 2 tekens bevatten';
        }
        break;
      case 'telefoon':
        if (value.trim() && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value.trim())) {
          fieldError = 'Voer een geldig telefoonnummer in';
        }
        break;
      case 'bericht':
        if (!value.trim()) {
          fieldError = 'Bericht is verplicht';
        } else if (value.trim().length < 10) {
          fieldError = 'Bericht moet minimaal 10 tekens bevatten';
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: fieldError }));
  }, [formData, emailRegex]);

  return (
    <>
      <SEOHead
        title="Contact - Buildrs.AI | AI Consultancy & Development"
        description="Neem contact op met Buildrs.AI voor AI consultancy, custom AI SaaS development en AI automatisering. Gratis strategische verkenning van 60 minuten."
        keywords="contact, AI consultancy, AI development, custom AI SaaS, AI automatisering, Buildrs.AI"
        canonical="/contact"
      />
      
      <StructuredData
        type="service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Consultancy & Development",
          "description": "Buildrs.AI biedt premium AI consultancy, custom AI SaaS development en AI automatisering services.",
          "provider": {
            "@type": "Organization",
            "name": "Buildrs.AI",
            "url": "https://buildrs.ai"
          },
          "areaServed": "Netherlands",
          "serviceType": "AI Consultancy"
        }}
      />

      <main id="main-content" role="main" className="min-h-screen bg-premium-black">
        {/* Hero Section with Cinematic Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
          {/* Cinematic Background */}
          <div className="absolute inset-0 opacity-40">
            <CinematicBackground hideGlassContainer={true} />
          </div>
          
          {/* Additional darkening overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Ambient lighting effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(59, 130, 246, 0.15) 40%, rgba(147, 51, 234, 0.1) 60%, transparent 80%)',
                filter: 'blur(80px)',
                animationDuration: '8s'
              }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-25 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                filter: 'blur(100px)',
                animationDuration: '12s',
                animationDelay: '-4s'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Laten we
              <span className="ml-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                praten
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-premium-silver/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Klaar om uw AI-potentieel te ontdekken? 
              <br />
              <span className="text-white font-medium">Vertel ons over uw uitdagingen en doelen.</span>
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-premium-silver/70">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">60 minuten gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Concrete inzichten</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm">Maatwerkvoorstel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Waarom Buildrs.AI?
                  </h2>
                  <p className="text-lg text-premium-silver/90 leading-relaxed mb-8">
                    Wij zijn gespecialiseerd in het bouwen van AI-systemen die uw business daadwerkelijk transformeren. 
                    Van strategie tot implementatie - wij maken AI werkend voor uw organisatie.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                      <p className="text-premium-silver/90">info@buildrs.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Telefoon</h3>
                      <p className="text-premium-silver/90">+31 (0)6 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Locatie</h3>
                      <p className="text-premium-silver/90">Amsterdam, Nederland</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Wat krijgt u?</h3>
                  <div className="space-y-3">
                    {[
                      'Gratis strategische verkenning van 60 minuten',
                      'Concrete inzichten over uw AI-mogelijkheden',
                      'Maatwerkvoorstel op basis van uw uitdagingen',
                      'Geen sales pitch - alleen waardevolle inzichten',
                      'Direct implementeerbare aanbevelingen'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                        <span className="text-premium-silver/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="relative rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/[0.15] shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
                       boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                     }}>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 blur-lg opacity-40 -z-10" />
                  
                  {!isSubmitted ? (
                    <>
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                          Start uw AI-verkenning
                        </h3>
                        
                        <form 
                          onSubmit={handleSubmit}
                          className="space-y-6"
                          noValidate
                          role="form"
                          aria-label="Contact formulier"
                        >
                          {/* Form-level error message */}
                          {errors.submit && (
                            <div 
                              role="alert" 
                              aria-live="polite"
                              className="flex items-center space-x-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400"
                            >
                              <AlertCircle className="h-5 w-5 flex-shrink-0" />
                              <span>{errors.submit}</span>
                            </div>
                          )}

                          {/* Name field */}
                          <div className="space-y-2">
                            <label 
                              htmlFor="naam" 
                              className="block text-sm font-medium text-white/90"
                              id="naam-label"
                            >
                              Naam *
                            </label>
                            <input
                              type="text"
                              id="naam"
                              name="naam"
                              value={formData.naam}
                              onChange={(e) => handleChange('naam', e.target.value)}
                              onBlur={() => handleBlur('naam')}
                              className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
                                errors.naam 
                                  ? 'border-red-500/50 focus:ring-red-500/50' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                              placeholder="Uw volledige naam"
                              aria-required="true"
                              aria-invalid={errors.naam ? 'true' : 'false'}
                              aria-describedby={errors.naam ? 'naam-error' : undefined}
                              maxLength={100}
                              spellCheck="true"
                            />
                            {errors.naam && (
                              <p id="naam-error" role="alert" className="text-sm text-red-400 flex items-center space-x-1">
                                <AlertCircle className="h-3 w-3 flex-shrink-0" />
                                <span>{errors.naam}</span>
                              </p>
                            )}
                          </div>

                          {/* Email field */}
                          <div className="space-y-2">
                            <label 
                              htmlFor="email" 
                              className="block text-sm font-medium text-white/90"
                              id="email-label"
                            >
                              E-mail *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              onBlur={() => handleBlur('email')}
                              className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
                                errors.email 
                                  ? 'border-red-500/50 focus:ring-red-500/50' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                              placeholder="uw@email.nl"
                              aria-required="true"
                              aria-invalid={errors.email ? 'true' : 'false'}
                              aria-describedby={errors.email ? 'email-error' : undefined}
                              maxLength={254}
                              spellCheck="true"
                            />
                            {errors.email && (
                              <p id="email-error" role="alert" className="text-sm text-red-400 flex items-center space-x-1">
                                <AlertCircle className="h-3 w-3 flex-shrink-0" />
                                <span>{errors.email}</span>
                              </p>
                            )}
                          </div>

                          {/* Company field */}
                          <div className="space-y-2">
                            <label 
                              htmlFor="bedrijf" 
                              className="block text-sm font-medium text-white/90"
                              id="bedrijf-label"
                            >
                              Bedrijfsnaam *
                            </label>
                            <input
                              type="text"
                              id="bedrijf"
                              name="bedrijf"
                              value={formData.bedrijf}
                              onChange={(e) => handleChange('bedrijf', e.target.value)}
                              onBlur={() => handleBlur('bedrijf')}
                              className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
                                errors.bedrijf 
                                  ? 'border-red-500/50 focus:ring-red-500/50' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                              placeholder="Uw bedrijfsnaam"
                              aria-required="true"
                              aria-invalid={errors.bedrijf ? 'true' : 'false'}
                              aria-describedby={errors.bedrijf ? 'bedrijf-error' : undefined}
                              maxLength={100}
                              spellCheck="true"
                            />
                            {errors.bedrijf && (
                              <p id="bedrijf-error" role="alert" className="text-sm text-red-400 flex items-center space-x-1">
                                <AlertCircle className="h-3 w-3 flex-shrink-0" />
                                <span>{errors.bedrijf}</span>
                              </p>
                            )}
                          </div>

                          {/* Phone field */}
                          <div className="space-y-2">
                            <label 
                              htmlFor="telefoon" 
                              className="block text-sm font-medium text-white/90"
                              id="telefoon-label"
                            >
                              Telefoonnummer
                            </label>
                            <input
                              type="tel"
                              id="telefoon"
                              name="telefoon"
                              value={formData.telefoon}
                              onChange={(e) => handleChange('telefoon', e.target.value)}
                              onBlur={() => handleBlur('telefoon')}
                              className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
                                errors.telefoon 
                                  ? 'border-red-500/50 focus:ring-red-500/50' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                              placeholder="+31 6 12345678"
                              aria-invalid={errors.telefoon ? 'true' : 'false'}
                              aria-describedby={errors.telefoon ? 'telefoon-error' : undefined}
                              maxLength={20}
                            />
                            {errors.telefoon && (
                              <p id="telefoon-error" role="alert" className="text-sm text-red-400 flex items-center space-x-1">
                                <AlertCircle className="h-3 w-3 flex-shrink-0" />
                                <span>{errors.telefoon}</span>
                              </p>
                            )}
                          </div>

                          {/* Message field */}
                          <div className="space-y-2">
                            <label 
                              htmlFor="bericht" 
                              className="block text-sm font-medium text-white/90"
                              id="bericht-label"
                            >
                              Uw uitdagingen en doelen *
                            </label>
                            <textarea
                              id="bericht"
                              name="bericht"
                              value={formData.bericht}
                              onChange={(e) => handleChange('bericht', e.target.value)}
                              onBlur={() => handleBlur('bericht')}
                              rows={6}
                              className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 resize-none ${
                                errors.bericht 
                                  ? 'border-red-500/50 focus:ring-red-500/50' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                              placeholder="Vertel ons over uw AI-uitdagingen, doelen en wat u hoopt te bereiken..."
                              aria-required="true"
                              aria-invalid={errors.bericht ? 'true' : 'false'}
                              aria-describedby={errors.bericht ? 'bericht-error' : 'bericht-help'}
                              maxLength={2000}
                              spellCheck="true"
                            />
                            <div id="bericht-help" className="text-xs text-white/50 flex justify-between">
                              <span>Vertel ons over uw AI-uitdagingen en doelen (10-2000 tekens)</span>
                              <span aria-live="polite">{formData.bericht?.length || 0}/2000</span>
                            </div>
                            {errors.bericht && (
                              <p id="bericht-error" role="alert" className="text-sm text-red-400 flex items-center space-x-1">
                                <AlertCircle className="h-3 w-3 flex-shrink-0" />
                                <span>{errors.bericht}</span>
                              </p>
                            )}
                          </div>

                          {/* Privacy notice */}
                          <div className="text-xs text-white/60 bg-white/5 rounded-lg p-3 border border-white/10">
                            <p>
                              🔒 <strong>Privacy gegarandeerd:</strong> Uw gegevens worden veilig verwerkt en nooit gedeeld met derden. 
                              Door dit formulier te versturen gaat u akkoord met onze verwerking van uw contactgegevens voor het beantwoorden van uw vraag.
                            </p>
                          </div>

                          {/* Submit button */}
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-2xl"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                              boxShadow: `
                                0 20px 60px rgba(0, 0, 0, 0.4), 
                                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                                0 0 0 1px rgba(255, 255, 255, 0.1),
                                0 0 20px rgba(20, 184, 166, 0.1),
                                0 0 40px rgba(59, 130, 246, 0.05)
                              `
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                                  Versturen...
                                </>
                              ) : (
                                <>
                                  Start uw AI-verkenning
                                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                              )}
                            </span>
                            
                            {/* Enhanced shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" aria-hidden="true" />
                            
                            {/* Subtle inner glow */}
                            <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                          </Button>
                        </form>
                      </div>
                    </>
                  ) : (
                    /* Success message */
                    <div 
                      className="text-center"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="mb-8 h-24 w-24 rounded-full p-1 relative mx-auto"
                           style={{
                             background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(34, 211, 238, 0.2))',
                             boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                           }}>
                        <div 
                          className="flex h-full w-full items-center justify-center rounded-full"
                          style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <CheckCircle className="h-10 w-10 text-teal-400" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        Bedankt voor uw bericht!
                      </h3>
                      <p className="text-lg text-premium-silver/90 mb-6">
                        We nemen binnen 24 uur contact met u op om uw AI-mogelijkheden te bespreken.
                      </p>
                      <p className="text-sm text-premium-silver/70">
                        U ontvangt ook een bevestiging per e-mail.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact; 