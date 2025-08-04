
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
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
 * Premium Contact Page Component - Buildrs.AI Style
 * - Apple.com-like premium design language
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
  }, [formData, sanitizeInput, validateForm, errors]);

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

      <main id="main-content" role="main" className="min-h-screen bg-premium-black relative overflow-hidden">
        
        {/* MAIN SECTION - Now with Cinematic Background without brain visual */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Cinematic Background without brain visual */}
          <div className="absolute inset-0">
            <CinematicBackground hideGlassContainer={true} hideBrainVisual={true} />
          </div>

          {/* Main Content Grid */}
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              
              {/* Contact Information */}
              <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight font-apple">
                    Laten we
                    <br />
                    <span className="bg-gradient-to-r from-premium-silver via-white to-premium-silver bg-clip-text text-transparent">
                      praten
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-premium-silver/80 max-w-3xl leading-relaxed font-light mb-6">
                    Een strategische verkenning van 60 minuten.
                    <br />
                    <span className="text-white/90">Geen sales pitch. Wel concrete inzichten.</span>
                  </p>
                  <p className="text-lg text-premium-silver/80 leading-relaxed mb-10 font-light">
                    Wij zijn gespecialiseerd in het bouwen van AI-systemen die uw business daadwerkelijk transformeren. 
                    Van strategie tot implementatie - wij maken AI werkend voor uw organisatie.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-start space-x-8 mb-10 text-premium-silver/60">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium">60 minuten gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Concrete inzichten</span>
                  </div>
                </div>

                {/* Contact Details - Apple Style Cards */}
                <div className="space-y-6">
                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premium-silver/20 to-premium-silver/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Mail className="h-6 w-6 text-premium-silver" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                        <p className="text-premium-silver/80">info@buildrs.ai</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premium-silver/20 to-premium-silver/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Phone className="h-6 w-6 text-premium-silver" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Telefoon</h3>
                        <p className="text-premium-silver/80">+31 (0)6 12345678</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premium-silver/20 to-premium-silver/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <MapPin className="h-6 w-6 text-premium-silver" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Locatie</h3>
                        <p className="text-premium-silver/80">Amsterdam, Nederland</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-6">Wat krijgt u?</h3>
                  <div className="space-y-4">
                    {[
                      'Gratis strategische verkenning van 60 minuten',
                      'Concrete inzichten over uw AI-mogelijkheden', 
                      'Maatwerkvoorstel op basis van uw uitdagingen',
                      'Geen sales pitch - alleen waardevolle inzichten',
                      'Direct implementeerbare aanbevelingen'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-premium-silver flex-shrink-0 mt-0.5" />
                        <span className="text-premium-silver/80 font-light leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form - Apple Glass Morphism */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative rounded-3xl p-8 md:p-10 backdrop-blur-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-premium-silver/5 via-transparent to-premium-silver/3 pointer-events-none" />
                  
                  {!isSubmitted ? (
                    <>
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-apple">
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
                              className="flex items-center space-x-3 rounded-2xl bg-red-500/10 border border-red-500/20 px-6 py-4 text-red-400"
                            >
                              <AlertCircle className="h-5 w-5 flex-shrink-0" />
                              <span>{errors.submit}</span>
                            </div>
                          )}

                          {/* Form Fields */}
                          <div className="space-y-6">
                            {/* Name field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="naam" 
                                className="block text-sm font-medium text-white/90 mb-3"
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
                                className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-silver/30 focus:bg-white/10 backdrop-blur-sm ${
                                  errors.naam 
                                    ? 'border-red-500/50 focus:ring-red-500/30' 
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
                                <p id="naam-error" role="alert" className="text-sm text-red-400 flex items-center space-x-2 mt-2">
                                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                  <span>{errors.naam}</span>
                                </p>
                              )}
                            </div>

                            {/* Email field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-white/90 mb-3"
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
                                className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-silver/30 focus:bg-white/10 backdrop-blur-sm ${
                                  errors.email 
                                    ? 'border-red-500/50 focus:ring-red-500/30' 
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
                                <p id="email-error" role="alert" className="text-sm text-red-400 flex items-center space-x-2 mt-2">
                                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                  <span>{errors.email}</span>
                                </p>
                              )}
                            </div>

                            {/* Company field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="bedrijf" 
                                className="block text-sm font-medium text-white/90 mb-3"
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
                                className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-silver/30 focus:bg-white/10 backdrop-blur-sm ${
                                  errors.bedrijf 
                                    ? 'border-red-500/50 focus:ring-red-500/30' 
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
                                <p id="bedrijf-error" role="alert" className="text-sm text-red-400 flex items-center space-x-2 mt-2">
                                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                  <span>{errors.bedrijf}</span>
                                </p>
                              )}
                            </div>

                            {/* Phone field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="telefoon" 
                                className="block text-sm font-medium text-white/90 mb-3"
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
                                className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-silver/30 focus:bg-white/10 backdrop-blur-sm ${
                                  errors.telefoon 
                                    ? 'border-red-500/50 focus:ring-red-500/30' 
                                    : 'border-white/10 hover:border-white/20'
                                }`}
                                placeholder="+31 6 12345678"
                                aria-invalid={errors.telefoon ? 'true' : 'false'}
                                aria-describedby={errors.telefoon ? 'telefoon-error' : undefined}
                                maxLength={20}
                              />
                              {errors.telefoon && (
                                <p id="telefoon-error" role="alert" className="text-sm text-red-400 flex items-center space-x-2 mt-2">
                                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                  <span>{errors.telefoon}</span>
                                </p>
                              )}
                            </div>

                            {/* Message field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="bericht" 
                                className="block text-sm font-medium text-white/90 mb-3"
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
                                rows={5}
                                className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-premium-silver/30 focus:bg-white/10 resize-none backdrop-blur-sm ${
                                  errors.bericht 
                                    ? 'border-red-500/50 focus:ring-red-500/30' 
                                    : 'border-white/10 hover:border-white/20'
                                }`}
                                placeholder="Vertel ons over uw AI-uitdagingen, doelen en wat u hoopt te bereiken..."
                                aria-required="true"
                                aria-invalid={errors.bericht ? 'true' : 'false'}
                                aria-describedby={errors.bericht ? 'bericht-error' : 'bericht-help'}
                                maxLength={2000}
                                spellCheck="true"
                              />
                              <div id="bericht-help" className="text-xs text-white/50 flex justify-between mt-2">
                                <span>Vertel ons over uw AI-uitdagingen en doelen (10-2000 tekens)</span>
                                <span aria-live="polite">{formData.bericht?.length || 0}/2000</span>
                              </div>
                              {errors.bericht && (
                                <p id="bericht-error" role="alert" className="text-sm text-red-400 flex items-center space-x-2 mt-2">
                                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                  <span>{errors.bericht}</span>
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Privacy notice */}
                          <div className="text-xs text-white/60 bg-white/5 rounded-2xl p-4 border border-white/10">
                            <p>
                              🔒 <strong>Privacy gegarandeerd:</strong> Uw gegevens worden veilig verwerkt en nooit gedeeld met derden. 
                              Door dit formulier te versturen gaat u akkoord met onze verwerking van uw contactgegevens voor het beantwoorden van uw vraag.
                            </p>
                          </div>

                          {/* Submit button - Apple Style */}
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-[1.02] shadow-2xl font-apple"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1)'
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
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" aria-hidden="true" />
                          </Button>
                        </form>
                      </div>
                    </>
                  ) : (
                    /* Success message - Apple Style */
                    <div 
                      className="text-center"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="mb-8 h-20 w-20 rounded-full p-1 relative mx-auto backdrop-blur-xl border border-premium-silver/20 bg-gradient-to-br from-premium-silver/10 to-premium-silver/5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5">
                          <CheckCircle className="h-10 w-10 text-premium-silver" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 font-apple">
                        Bedankt voor uw bericht!
                      </h3>
                      <p className="text-lg text-premium-silver/80 mb-6 font-light">
                        We nemen binnen 24 uur contact met u op om uw AI-mogelijkheden te bespreken.
                      </p>
                      <p className="text-sm text-premium-silver/60">
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
