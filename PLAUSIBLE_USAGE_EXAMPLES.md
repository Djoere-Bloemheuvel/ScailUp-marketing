# Plausible Analytics Usage Examples

This document shows how to use the Plausible Analytics integration in your Buildrs website.

## Basic Import

```typescript
import { trackEvent, EVENTS, trackEventWithUTM } from '@/utils/analytics';
```

## Example 1: CTA Button Tracking

```tsx
// In any React component
import { trackEvent, EVENTS } from '@/utils/analytics';

const CTAButton = () => {
  const handleCTAClick = () => {
    // Track the click event
    trackEvent(EVENTS.CTA_CLICKED, {
      props: {
        cta_text: 'Plan gratis strategiesessie',
        section: 'hero',
        destination: '/contact'
      }
    });
    
    // Navigate to the target page
    window.location.href = '/contact';
  };

  return (
    <button onClick={handleCTAClick}>
      Plan gratis strategiesessie
    </button>
  );
};
```

## Example 2: Form Submission Tracking

```tsx
// Contact form component
import { trackEvent, EVENTS } from '@/utils/analytics';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track form submission start
    trackEvent(EVENTS.FORM_SUBMITTED, {
      props: {
        form_name: 'contact',
        form_location: 'contact_page'
      }
    });
    
    try {
      // Submit form data
      const response = await submitForm(formData);
      
      if (response.success) {
        // Track successful submission
        trackEvent(EVENTS.CONTACT_FORM_SUBMITTED, {
          props: {
            form_name: 'contact',
            status: 'success'
          }
        });
      }
    } catch (error) {
      // Track form errors
      trackEvent(EVENTS.FORM_ERROR, {
        props: {
          form_name: 'contact',
          error_type: 'submission_failed'
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

## Example 3: Navigation Tracking

```tsx
// Navigation component
import { trackEvent, EVENTS } from '@/utils/analytics';

const Navigation = () => {
  const handleNavClick = (linkText: string, destination: string) => {
    trackEvent(EVENTS.NAVIGATION_CLICKED, {
      props: {
        link_text: linkText,
        destination: destination,
        location: 'main_nav'
      }
    });
  };

  return (
    <nav>
      <a 
        href="/over-ons" 
        onClick={() => handleNavClick('Over ons', '/over-ons')}
      >
        Over ons
      </a>
      <a 
        href="/contact" 
        onClick={() => handleNavClick('Contact', '/contact')}
      >
        Contact
      </a>
    </nav>
  );
};
```

## Example 4: External Link Tracking

```tsx
// External link component
import { trackEvent, EVENTS } from '@/utils/analytics';

const ExternalLink = ({ href, children }) => {
  const handleExternalClick = () => {
    trackEvent(EVENTS.EXTERNAL_LINK_CLICKED, {
      props: {
        destination: href,
        link_text: children
      }
    });
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleExternalClick}
    >
      {children}
    </a>
  );
};
```

## Example 5: Scroll Milestone Tracking

```tsx
// Scroll tracking hook
import { useEffect } from 'react';
import { trackEvent, EVENTS } from '@/utils/analytics';

const useScrollTracking = () => {
  useEffect(() => {
    let milestones = [25, 50, 75, 100];
    let trackedMilestones = new Set();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackEvent(EVENTS.SCROLL_MILESTONE, {
            props: {
              milestone: milestone.toString(),
              page: window.location.pathname
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Usage in a component
const HomePage = () => {
  useScrollTracking();
  
  return (
    <div>
      {/* Page content */}
    </div>
  );
};
```

## Example 6: Enhanced UTM Tracking

```tsx
// Enhanced event tracking with UTM data
import { trackEventWithUTM } from '@/utils/analytics';

const PricingButton = () => {
  const handlePricingView = () => {
    // This will automatically include UTM parameters from the current session
    trackEventWithUTM('Pricing_Viewed', {
      pricing_tier: 'premium',
      page_section: 'hero'
    });
  };

  return (
    <button onClick={handlePricingView}>
      View Pricing
    </button>
  );
};
```

## Example 7: Error Tracking

```tsx
// Error boundary with analytics
import { trackEvent, EVENTS } from '@/utils/analytics';

const ErrorBoundary = ({ children }) => {
  const handleError = (error: Error) => {
    trackEvent(EVENTS.CLIENT_ERROR, {
      props: {
        error_message: error.message,
        error_stack: error.stack?.substring(0, 500), // Limit stack trace
        page: window.location.pathname
      }
    });
  };

  // React Error Boundary implementation
  return (
    <ErrorBoundaryComponent onError={handleError}>
      {children}
    </ErrorBoundaryComponent>
  );
};
```

## Example 8: Video/Media Engagement

```tsx
// Video component with engagement tracking
import { trackEvent, EVENTS } from '@/utils/analytics';

const VideoPlayer = ({ videoTitle }) => {
  const handleVideoPlay = () => {
    trackEvent(EVENTS.VIDEO_PLAYED, {
      props: {
        video_title: videoTitle,
        video_location: 'hero_section'
      }
    });
  };

  return (
    <video 
      onPlay={handleVideoPlay}
      controls
    >
      {/* Video source */}
    </video>
  );
};
```

## Available Event Constants

The following pre-defined event names are available:

```typescript
EVENTS.CTA_CLICKED = 'CTA_Clicked'
EVENTS.BUTTON_CLICKED = 'Button_Clicked' 
EVENTS.FORM_SUBMITTED = 'Form_Submitted'
EVENTS.CONTACT_FORM_SUBMITTED = 'Contact_Form_Submitted'
EVENTS.NAVIGATION_CLICKED = 'Navigation_Clicked'
EVENTS.EXTERNAL_LINK_CLICKED = 'External_Link_Clicked'
EVENTS.VIDEO_PLAYED = 'Video_Played'
EVENTS.DOWNLOAD_STARTED = 'Download_Started'
EVENTS.SCROLL_MILESTONE = 'Scroll_Milestone'
EVENTS.MEETING_BOOKING_STARTED = 'Meeting_Booking_Started'
EVENTS.INTEGRATION_VIEWED = 'Integration_Viewed'
EVENTS.PRICING_VIEWED = 'Pricing_Viewed'
EVENTS.CLIENT_ERROR = 'Client_Error'
EVENTS.FORM_ERROR = 'Form_Error'
```

## Best Practices

1. **Use descriptive event names**: Be specific about what action was taken
2. **Include context**: Add properties that help understand user behavior
3. **Track the user journey**: From page view to conversion
4. **Don't over-track**: Focus on meaningful interactions
5. **Test in development**: Check browser console for tracking logs
6. **Respect privacy**: Never track personal information

## Privacy Features

- **No cookies**: Fully cookieless analytics
- **GDPR compliant**: No personal data collection
- **Respects DNT**: Honors Do Not Track preferences
- **Local development**: Won't track on localhost by default
- **Error resilient**: Graceful degradation if analytics fails

## Testing

In development mode, you'll see console logs for all tracked events:

```
📊 Analytics: Event tracked: {
  event: "CTA_Clicked",
  props: { cta_text: "Plan gratis strategiesessie", section: "hero" },
  hasCallback: false
}
```

This helps you verify that tracking is working correctly before deploying to production.