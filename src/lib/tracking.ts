// UTM Tracking System - No cookies, localStorage only
export interface TrackingData {
  utm_source?: string;
  utm_medium?: string; 
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_page?: string;
  current_page?: string;
  timestamp?: string;
  session_id?: string;
}

export interface FormSubmissionPayload {
  form_data: Record<string, any>;
  tracking: TrackingData;
}

class UTMTracker {
  private readonly STORAGE_KEY = 'buildrs_tracking_data';
  private readonly SESSION_KEY = 'buildrs_session_id';

  constructor() {
    this.init();
  }

  private init(): void {
    if (typeof window === 'undefined') return;
    
    // Generate session ID if not exists
    if (!localStorage.getItem(this.SESSION_KEY)) {
      localStorage.setItem(this.SESSION_KEY, this.generateSessionId());
    }

    // Capture tracking data on page load
    this.captureTrackingData();
  }

  private generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private captureTrackingData(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const currentData = this.getTrackingData();
    
    // Only update if we have new UTM parameters
    const hasNewUTMs = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
      .some(param => urlParams.has(param));

    if (hasNewUTMs || !currentData.landing_page) {
      const trackingData: TrackingData = {
        // Keep existing UTMs if no new ones found
        utm_source: urlParams.get('utm_source') || currentData.utm_source,
        utm_medium: urlParams.get('utm_medium') || currentData.utm_medium,
        utm_campaign: urlParams.get('utm_campaign') || currentData.utm_campaign,
        utm_content: urlParams.get('utm_content') || currentData.utm_content,
        utm_term: urlParams.get('utm_term') || currentData.utm_term,
        referrer: hasNewUTMs ? document.referrer : (currentData.referrer || document.referrer),
        landing_page: currentData.landing_page || window.location.pathname,
        current_page: window.location.pathname,
        timestamp: new Date().toISOString(),
        session_id: localStorage.getItem(this.SESSION_KEY) || undefined
      };

      // Remove undefined values
      Object.keys(trackingData).forEach(key => {
        if (trackingData[key as keyof TrackingData] === undefined || trackingData[key as keyof TrackingData] === '') {
          delete trackingData[key as keyof TrackingData];
        }
      });

      this.saveTrackingData(trackingData);
    } else {
      // Just update current page
      currentData.current_page = window.location.pathname;
      currentData.timestamp = new Date().toISOString();
      this.saveTrackingData(currentData);
    }
  }

  public getTrackingData(): TrackingData {
    if (typeof window === 'undefined') return {};
    
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('Failed to parse tracking data:', error);
      return {};
    }
  }

  private saveTrackingData(data: TrackingData): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save tracking data:', error);
    }
  }

  public enhanceForm(formElement: HTMLFormElement): void {
    if (typeof window === 'undefined') return;
    
    const trackingData = this.getTrackingData();
    
    // Remove existing tracking fields
    const existingFields = formElement.querySelectorAll('input[data-tracking-field="true"]');
    existingFields.forEach(field => field.remove());

    // Add tracking data as hidden fields
    Object.entries(trackingData).forEach(([key, value]) => {
      if (value) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = `tracking_${key}`;
        hiddenField.value = String(value);
        hiddenField.setAttribute('data-tracking-field', 'true');
        formElement.appendChild(hiddenField);
      }
    });
  }

  public async submitToWebhook(webhookUrl: string, formData: Record<string, any>): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    
    const trackingData = this.getTrackingData();
    
    const payload: FormSubmissionPayload = {
      form_data: formData,
      tracking: trackingData
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Failed to submit to webhook:', error);
      return false;
    }
  }

  public getPayloadPreview(formData: Record<string, any> = {}): FormSubmissionPayload {
    return {
      form_data: formData,
      tracking: this.getTrackingData()
    };
  }

  public clearTrackingData(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.SESSION_KEY);
  }

  public debugTrackingData(): void {
    if (typeof window === 'undefined') return;
    console.log('Current tracking data:', this.getTrackingData());
  }
}

// Global instance
export const utmTracker = new UTMTracker();

// Helper functions for easy access
export const getTrackingData = () => utmTracker.getTrackingData();
export const enhanceForm = (form: HTMLFormElement) => utmTracker.enhanceForm(form);
export const submitToWebhook = (webhookUrl: string, formData: Record<string, any>) => 
  utmTracker.submitToWebhook(webhookUrl, formData);
export const getPayloadPreview = (formData?: Record<string, any>) => 
  utmTracker.getPayloadPreview(formData);
export const debugTracking = () => utmTracker.debugTrackingData();