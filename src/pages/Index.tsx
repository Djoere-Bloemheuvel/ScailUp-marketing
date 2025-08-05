
import { lazy, Suspense } from 'react';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';

// Lazy loading for better performance - keep existing imports
const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const Approach = lazy(() => import('@/components/Approach'));
const WorkMethodology = lazy(() => import('@/components/WorkMethodology'));
const WhyChooseBuildrs = lazy(() => import('@/components/WhyChooseBuildrs'));
const Showcase = lazy(() => import('@/components/Showcase'));
const Target = lazy(() => import('@/components/Target'));
const Workflow = lazy(() => import('@/components/Workflow'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-premium-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-premium-gold"></div>
  </div>
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Buildrs.AI",
  "description": "Premium AI consultancy en development services. Custom AI SaaS, automatisering en strategische AI consultancy.",
  "url": "https://buildrs.ai",
  "logo": "https://buildrs.ai/logo.png",
  "sameAs": [
    "https://linkedin.com/company/buildrs-ai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31-6-12345678",
    "contactType": "customer service",
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL",
    "addressLocality": "Amsterdam"
  },
  "service": [
    {
      "@type": "Service",
      "name": "AI Automations",
      "description": "Intelligente workflow automatisering met AI"
    },
    {
      "@type": "Service", 
      "name": "Custom AI SaaS",
      "description": "Op maat gemaakte AI software oplossingen"
    },
    {
      "@type": "Service",
      "name": "AI Consultancy",
      "description": "Strategische AI consultancy en implementatie"
    },
    {
      "@type": "Service",
      "name": "Autonomous AI Agents",
      "description": "Zelfstandige AI agents voor bedrijfsprocessen"
    }
  ]
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Buildrs.AI | Premium AI Consultancy & Development"
        description="Premium AI consultancy en development services. Custom AI SaaS, automatisering en strategische AI consultancy. Van idee tot implementatie."
        keywords="AI consultancy, AI development, custom AI SaaS, AI automatisering, machine learning, artificial intelligence, Netherlands"
        canonical="/"
      />
      
      <StructuredData type="organization" data={structuredData} />
      <PerformanceMonitor />
      <AccessibilitySkipLink />

      <main id="main-content" role="main" className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseBuildrs />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Approach />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <WorkMethodology />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Showcase />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Target />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Workflow />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CTA />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
