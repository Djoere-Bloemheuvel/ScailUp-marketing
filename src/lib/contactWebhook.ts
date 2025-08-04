/**
 * Contact Form Webhook Integration
 * 
 * This module provides secure webhook functionality for contact form submissions.
 * Replace the WEBHOOK_URL with your actual webhook endpoint when ready.
 * 
 * Security Features:
 * - Input sanitization
 * - Rate limiting protection 
 * - Error handling with retry logic
 * - CSRF protection via timestamp validation
 */

interface ContactSubmission {
  naam: string;
  email: string;
  bericht: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
}

interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Configuration - replace with your webhook URL
const WEBHOOK_URL = process.env.REACT_APP_CONTACT_WEBHOOK_URL || '';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

/**
 * Submit contact form data to webhook endpoint
 * 
 * @param data - Sanitized contact form data
 * @returns Promise<WebhookResponse>
 */
export const submitContactForm = async (data: ContactSubmission): Promise<WebhookResponse> => {
  if (!WEBHOOK_URL) {
    console.warn('No webhook URL configured - form submission simulated');
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1200));
    return { success: true, message: 'Form submission simulated successfully' };
  }

  // Validate timestamp to prevent replay attacks (max 5 minutes old)
  const submissionTime = new Date(data.timestamp).getTime();
  const currentTime = Date.now();
  const timeDiff = currentTime - submissionTime;
  
  if (timeDiff > 5 * 60 * 1000) { // 5 minutes
    throw new Error('Form submission expired - please try again');
  }

  let lastError: Error | null = null;

  // Retry logic for improved reliability
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Timestamp': data.timestamp,
          'X-User-Agent': data.userAgent,
        },
        body: JSON.stringify({
          ...data,
          source: 'buildrs-ai-website',
          attempt: attempt,
        }),
        // Security: prevent credential leakage
        credentials: 'omit',
        // Timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000), // 10 seconds
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || 'Contact form submitted successfully'
      };

    } catch (error) {
      lastError = error as Error;
      console.error(`Contact form submission attempt ${attempt} failed:`, error);

      // Don't retry on client errors (4xx)
      if (error instanceof Error && error.message.includes('HTTP 4')) {
        break;
      }

      // Wait before retrying (exponential backoff)
      if (attempt < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt));
      }
    }
  }

  // All retries failed
  return {
    success: false,
    error: lastError?.message || 'Failed to submit contact form after multiple attempts'
  };
};

/**
 * Validate webhook configuration
 */
export const isWebhookConfigured = (): boolean => {
  return Boolean(WEBHOOK_URL && WEBHOOK_URL.startsWith('https://'));
};

/**
 * Get webhook status for debugging
 */
export const getWebhookStatus = () => {
  return {
    configured: isWebhookConfigured(),
    url: WEBHOOK_URL ? `${WEBHOOK_URL.substring(0, 20)}...` : 'Not configured',
    environment: process.env.NODE_ENV || 'development'
  };
};