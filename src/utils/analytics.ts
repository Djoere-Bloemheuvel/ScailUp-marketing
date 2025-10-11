// Plausible Analytics Utility - Privacy-First Event Tracking
// Type-safe helper for tracking custom events

// Declare Plausible types for TypeScript
declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: {
        props?: Record<string, string | number | boolean>;
        callback?: () => void;
      }
    ) => void;
  }
}

export interface PlausibleEventOptions {
  props?: Record<string, string | number | boolean>;
  callback?: () => void;
}

/**
 * Track a custom event with Plausible Analytics
 * 
 * @param eventName - Name of the event (e.g., "Signup", "CTA_Clicked")
 * @param options - Optional event properties and callback
 * 
 * @example
 * ```ts
 * // Simple event
 * trackEvent("Button_Clicked");
 * 
 * // Event with properties
 * trackEvent("Form_Submitted", {
 *   props: { 
 *     form_name: "contact", 
 *     source: "hero_section" 
 *   }
 * });
 * 
 * // Event with callback
 * trackEvent("Download_Started", {
 *   callback: () => console.log("Download tracked!")
 * });
 * ```
 */
export function trackEvent(
  eventName: string, 
  options: PlausibleEventOptions = {}
): void {
  // Safety check: ensure we're in browser environment
  if (typeof window === 'undefined') {
    if (process.env.NODE_ENV === 'development') {
      console.warn('🔍 Analytics: trackEvent called on server-side, skipping:', eventName);
    }
    return;
  }

  // Safety check: ensure Plausible is loaded
  if (typeof window.plausible !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      console.warn('🔍 Analytics: Plausible not loaded yet, skipping event:', eventName);
    }
    return;
  }

  try {
    // Track the event with Plausible
    window.plausible(eventName, options);
    
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics: Event tracked:', {
        event: eventName,
        props: options.props || 'none',
        hasCallback: !!options.callback
      });
    }
  } catch (error) {
    // Graceful error handling
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Analytics: Error tracking event:', eventName, error);
    }
  }
}

/**
 * Track a page view manually (usually not needed as Plausible auto-tracks)
 * 
 * @param pagePath - Optional custom page path
 * 
 * @example
 * ```ts
 * // Track current page
 * trackPageview();
 * 
 * // Track custom path
 * trackPageview("/virtual-page");
 * ```
 */
export function trackPageview(pagePath?: string): void {
  if (typeof window === 'undefined') return;
  
  if (typeof window.plausible !== 'function') {
    if (process.env.NODE_ENV === 'development') {
      console.warn('🔍 Analytics: Plausible not loaded for pageview');
    }
    return;
  }

  try {
    // If custom path provided, use it
    if (pagePath) {
      window.plausible('pageview', { 
        props: { path: pagePath } 
      });
    } else {
      // Let Plausible auto-detect current page
      window.plausible('pageview');
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics: Pageview tracked:', pagePath || 'auto');
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Analytics: Error tracking pageview:', error);
    }
  }
}

/**
 * Check if Plausible Analytics is loaded and ready
 * 
 * @returns boolean indicating if Plausible is available
 */
export function isAnalyticsReady(): boolean {
  return typeof window !== 'undefined' && typeof window.plausible === 'function';
}

/**
 * Enhanced event tracking with UTM integration
 * Combines Plausible events with existing UTM tracking data
 * 
 * @param eventName - Name of the event
 * @param customProps - Custom event properties
 */
export function trackEventWithUTM(
  eventName: string, 
  customProps: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === 'undefined') return;

  try {
    // Get existing UTM data from your tracking system
    const utmData = localStorage.getItem('buildrs_tracking_data');
    const utmProps: Record<string, string> = {};
    
    if (utmData) {
      const parsed = JSON.parse(utmData);
      // Extract relevant UTM parameters for Plausible
      if (parsed.utm_source) utmProps.utm_source = parsed.utm_source;
      if (parsed.utm_medium) utmProps.utm_medium = parsed.utm_medium;
      if (parsed.utm_campaign) utmProps.utm_campaign = parsed.utm_campaign;
    }

    // Combine UTM data with custom properties
    const eventProps = { ...utmProps, ...customProps };
    
    // Track with combined properties
    trackEvent(eventName, { 
      props: Object.keys(eventProps).length > 0 ? eventProps : undefined 
    });
    
  } catch (error) {
    // Fallback to regular tracking if UTM parsing fails
    trackEvent(eventName, { props: customProps });
  }
}

// Common event names for consistency across the application
export const EVENTS = {
  // CTA & Conversion Events
  CTA_CLICKED: 'CTA_Clicked',
  BUTTON_CLICKED: 'Button_Clicked',
  FORM_SUBMITTED: 'Form_Submitted',
  CONTACT_FORM_SUBMITTED: 'Contact_Form_Submitted',
  
  // Navigation Events
  NAVIGATION_CLICKED: 'Navigation_Clicked',
  EXTERNAL_LINK_CLICKED: 'External_Link_Clicked',
  
  // Engagement Events
  VIDEO_PLAYED: 'Video_Played',
  DOWNLOAD_STARTED: 'Download_Started',
  SCROLL_MILESTONE: 'Scroll_Milestone',
  
  // Feature-specific Events
  MEETING_BOOKING_STARTED: 'Meeting_Booking_Started',
  INTEGRATION_VIEWED: 'Integration_Viewed',
  PRICING_VIEWED: 'Pricing_Viewed',
  
  // Error Events (for debugging)
  CLIENT_ERROR: 'Client_Error',
  FORM_ERROR: 'Form_Error',
} as const;

export type EventName = typeof EVENTS[keyof typeof EVENTS];