
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
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
        description="Neem contact op met Buildrs.AI voor AI consultancy, custom AI SaaS development en AI automatisering. Gratis strategische verkenning van 30 minuten."
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
        
        {/* MAIN SECTION - Now with Cinematic Background */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Cinematic Background */}
          <div className="absolute inset-0">
            <CinematicBackground hideGlassContainer={true} />
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
                  <p className="text-xl md:text-2xl text-premium-silver/80 max-w-3xl leading-relaxed font-light mb-10">
                    Een strategische verkenning van 30 minuten.
                    <br />
                    <span className="font-bold text-white">Geen sales pitch. Wel concrete inzichten.</span>
                    <br />
                    <br />
                    Wij zijn gespecialiseerd in het bouwen van AI-systemen die jouw business daadwerkelijk transformeren. Van strategie tot implementatie - wij maken AI werkend voor jouw organisatie.
                  </p>
                </div>

                {/* Premium Glassmorphic Bullet Section */}
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-2xl font-semibold text-white font-apple mb-8">Wat krijg je?</h3>
                  <div className="grid gap-4">
                    {[
                      'Een strategisch AI-gesprek van 30 minuten',
                      'Een compact, persoonlijk rapport met aanbevelingen', 
                      'Inzichten afgestemd op jouw organisatie en uitdagingen',
                      'Geen salespitch – alleen inhoudelijke waarde',
                      'Advies dat je direct kunt toepassen'
                    ].map((benefit, index) => (
                      <div 
                        key={index} 
                        className="group relative p-4 rounded-2xl transition-all duration-500 hover:scale-[1.02] transform-gpu"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
                          backdropFilter: 'blur(20px) saturate(150%)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        {/* Animated border glow on hover */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out -z-10"
                          style={{
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.10))',
                            filter: 'blur(1px)'
                          }} 
                        />
                        
                        {/* Subtle inner glow */}
                        <div 
                          className="absolute inset-1 rounded-2xl pointer-events-none opacity-60"
                          style={{
                            background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.06) 0%, transparent 70%)'
                          }} 
                        />
                        
                        <div className="relative flex items-start space-x-4">
                          {/* Premium dot indicator */}
                          <div 
                            className="flex-shrink-0 w-2 h-2 rounded-full mt-3 transition-all duration-300 group-hover:scale-125"
                            style={{
                              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                              boxShadow: '0 0 12px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                            }}
                          />
                          
                          <p className="text-premium-silver/90 font-light leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                            {benefit}
                          </p>
                        </div>
                        
                        {/* Sparkle effect on hover */}
                        <div 
                          className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                            animation: 'pulse 2s ease-in-out infinite'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Details - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}>
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premium-silver/20 to-premium-silver/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Mail className="h-6 w-6 text-premium-silver" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                        <p className="text-premium-silver/80">info@buildrs.ai</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}>
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premium-silver/20 to-premium-silver/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Phone className="h-6 w-6 text-premium-silver" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Telefoon</h3>
                        <p className="text-premium-silver/80">+31 (0)6 12345678</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/5"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}>
                    <div className="flex flex-col items-center text-center space-y-3">
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
              </div>

              {/* Enhanced Contact Form - Glassmorphic Design */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div 
                  className="relative rounded-[20px] p-6 md:p-8 overflow-hidden group transition-all duration-700 ease-out hover:scale-[1.01] transform-gpu"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.85) 0%, rgba(10, 10, 20, 0.8) 50%, rgba(8, 8, 18, 0.85) 100%), radial-gradient(ellipse 600px 400px at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%), radial-gradient(ellipse 400px 300px at 100% 100%, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.02), 0 0 120px rgba(59, 130, 246, 0.1), 0 0 80px rgba(99, 102, 241, 0.08)'
                  }}
                >
                  
                  {/* Animated Border Glow - Changed to blue */}
                  <div 
                    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    style={{
                      background: 'linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.15), transparent)',
                      filter: 'blur(1px)',
                      zIndex: -1
                    }} 
                  />

                  {/* Subtle Inner Glow - Changed to blue */}
                  <div 
                    className="absolute inset-1 rounded-[19px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(59, 130, 246, 0.04) 30%, rgba(99, 102, 241, 0.03) 70%, rgba(255, 255, 255, 0.02) 100%)',
                      opacity: 0.6
                    }} 
                  />
                  
                  {!isSubmitted ? (
                    <>
                      <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-apple">
                          Start jouw AI-verkenning
                        </h3>
                        
                        <form 
                          onSubmit={handleSubmit}
                          className="space-y-5"
                          noValidate
                          role="form"
                          aria-label="Contact formulier"
                        >
                          {/* Form-level error message */}
                          {errors.submit && (
                            <div 
                              role="alert" 
                              aria-live="polite"
                              className="flex items-center space-x-3 rounded-2xl bg-red-500/10 border border-red-500/20 px-5 py-3 text-red-400"
                            >
                              <AlertCircle className="h-4 w-4 flex-shrink-0" />
                              <span className="text-sm">{errors.submit}</span>
                            </div>
                          )}

                          {/* Form Fields */}
                          <div className="space-y-5">
                            {/* Name field */}
                            <div className="space-y-2">
                              <label 
                                htmlFor="naam" 
                                className="block text-sm font-medium text-white/90 mb-2"
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
                                className={`w-full rounded-2xl px-5 py-3 text-white placeholder-white/40 transition-all duration-500 focus:outline-none transform-gpu ${
                                  errors.naam 
                                    ? 'border border-red-500/50 focus:ring-2 focus:ring-red-500/30 bg-red-500/5' 
                                    : 'border border-white/10 hover:border-blue-500/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/20 bg-white/5 hover:bg-white/8 focus:bg-white/10'
                                }`}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  boxShadow: errors.naam 
                                    ? '0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                                    : '0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder="Jouw volledige naam"
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
                                className="block text-sm font-medium text-white/90 mb-2"
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
                                className={`w-full rounded-2xl px-5 py-3 text-white placeholder-white/40 transition-all duration-500 focus:outline-none transform-gpu ${
                                  errors.email 
                                    ? 'border border-red-500/50 focus:ring-2 focus:ring-red-500/30 bg-red-500/5' 
                                    : 'border border-white/10 hover:border-blue-500/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/20 bg-white/5 hover:bg-white/8 focus:bg-white/10'
                                }`}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  boxShadow: errors.email 
                                    ? '0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                                    : '0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder="jouw@email.nl"
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
                                className="block text-sm font-medium text-white/90 mb-2"
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
                                className={`w-full rounded-2xl px-5 py-3 text-white placeholder-white/40 transition-all duration-500 focus:outline-none transform-gpu ${
                                  errors.bedrijf 
                                    ? 'border border-red-500/50 focus:ring-2 focus:ring-red-500/30 bg-red-500/5' 
                                    : 'border border-white/10 hover:border-blue-500/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/20 bg-white/5 hover:bg-white/8 focus:bg-white/10'
                                }`}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  boxShadow: errors.bedrijf 
                                    ? '0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                                    : '0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder="Jouw bedrijfsnaam"
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
                                className="block text-sm font-medium text-white/90 mb-2"
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
                                className={`w-full rounded-2xl px-5 py-3 text-white placeholder-white/40 transition-all duration-500 focus:outline-none transform-gpu ${
                                  errors.telefoon 
                                    ? 'border border-red-500/50 focus:ring-2 focus:ring-red-500/30 bg-red-500/5' 
                                    : 'border border-white/10 hover:border-blue-500/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/20 bg-white/5 hover:bg-white/8 focus:bg-white/10'
                                }`}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  boxShadow: errors.telefoon 
                                    ? '0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                                    : '0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
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
                                className="block text-sm font-medium text-white/90 mb-2"
                                id="bericht-label"
                              >
                                Jouw uitdagingen en doelen *
                              </label>
                              <textarea
                                id="bericht"
                                name="bericht"
                                value={formData.bericht}
                                onChange={(e) => handleChange('bericht', e.target.value)}
                                onBlur={() => handleBlur('bericht')}
                                rows={4}
                                className={`w-full rounded-2xl px-5 py-3 text-white placeholder-white/40 transition-all duration-500 focus:outline-none resize-none transform-gpu ${
                                  errors.bericht 
                                    ? 'border border-red-500/50 focus:ring-2 focus:ring-red-500/30 bg-red-500/5' 
                                    : 'border border-white/10 hover:border-blue-500/30 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/20 bg-white/5 hover:bg-white/8 focus:bg-white/10'
                                }`}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  boxShadow: errors.bericht 
                                    ? '0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                                    : '0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder="Vertel ons over jouw AI-uitdagingen, doelen en wat je hoopt te bereiken..."
                                aria-required="true"
                                aria-invalid={errors.bericht ? 'true' : 'false'}
                                aria-describedby={errors.bericht ? 'bericht-error' : 'bericht-help'}
                                maxLength={2000}
                                spellCheck="true"
                              />
                              <div id="bericht-help" className="text-xs text-white/50 flex justify-between mt-2">
                                <span>Vertel ons over jouw AI-uitdagingen en doelen (10-2000 tekens)</span>
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
                          <div 
                            className="text-xs text-white/60 rounded-2xl p-3 border transition-all duration-300"
                            style={{
                              background: 'rgba(255, 255, 255, 0.02)',
                              backdropFilter: 'blur(8px)',
                              borderColor: 'rgba(255, 255, 255, 0.08)'
                            }}
                          >
                            <p>
                              🔒 <strong>Privacy gegarandeerd:</strong> Jouw gegevens worden veilig verwerkt en nooit gedeeld met derden. 
                              Door dit formulier te versturen ga je akkoord met onze verwerking van jouw contactgegevens voor het beantwoorden van jouw vraag.
                            </p>
                          </div>

                          {/* Enhanced Submit button */}
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full text-black hover:text-black transition-all duration-700 px-6 py-4 text-base font-semibold rounded-2xl overflow-hidden transform hover:scale-[1.02] font-apple border-0"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 60px rgba(59, 130, 246, 0.1)'
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-3 h-4 w-4 animate-spin" />
                                  Versturen...
                                </>
                              ) : (
                                <>
                                  Plan mijn AI Impactscan
                                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                              )}
                            </span>
                            
                            {/* Enhanced shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" aria-hidden="true" />
                            
                            {/* Hover glow effect - Changed to blue */}
                            <div 
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                              style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.08))',
                                filter: 'blur(20px)',
                                transform: 'scale(1.1)',
                                zIndex: -1
                              }} 
                            />
                          </Button>
                        </form>
                      </div>
                    </>
                  ) : (
                    /* Success message - Enhanced Glass Style */
                    <div 
                      className="text-center"
                      role="status"
                      aria-live="polite"
                    >
                      <div 
                        className="mb-6 h-16 w-16 rounded-full p-1 relative mx-auto overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.12)), radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div 
                          className="flex h-full w-full items-center justify-center rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                          }}
                        >
                          <CheckCircle className="h-8 w-8 text-green-400" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 font-apple">
                        Bedankt voor jouw bericht!
                      </h3>
                      <p className="text-base text-premium-silver/80 mb-4 font-light">
                        We nemen binnen 24 uur contact met je op om jouw AI-mogelijkheden te bespreken.
                      </p>
                      <p className="text-sm text-premium-silver/60">
                        Je ontvangt ook een bevestiging per e-mail.
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
