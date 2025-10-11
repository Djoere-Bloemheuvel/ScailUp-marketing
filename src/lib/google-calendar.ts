/**
 * Google Calendar API Client
 * OAuth 2.0 authentication and calendar management for meeting booking
 */

export interface GoogleCalendarConfig {
  mode: 'oauth' | 'service' | 'mock';
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  calendarId?: string;
  debug?: boolean;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface MeetingAvailability {
  date: string;
  slots: TimeSlot[];
}

export interface BookingRequest {
  startTime: string;
  endTime: string;
  contact: {
    email: string;
    firstName: string;
    lastName: string;
    company?: string;
    phone?: string;
  };
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  eventId?: string;
  meetLink?: string;
  error?: string;
}

export interface GoogleOAuthTokens {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

class GoogleCalendarClient {
  private config: GoogleCalendarConfig;
  private accessToken?: string;

  constructor(config?: Partial<GoogleCalendarConfig>) {
    this.config = {
      mode: (process.env.GOOGLE_CALENDAR_MODE as 'real' | 'mock') || 'mock',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'djoere@buildrs.ai',
      debug: process.env.GOOGLE_DEBUG === 'true',
      ...config
    };

    if (this.config.debug) {
      console.log('Google Calendar Client initialized:', {
        mode: this.config.mode,
        hasClientId: !!this.config.clientId,
        calendarId: this.config.calendarId
      });
    }
  }

  /**
   * Generate OAuth URL for user authentication
   */
  getOAuthUrl(state?: string): string {
    if (!this.config.clientId || !this.config.redirectUri) {
      throw new Error('Google OAuth not configured');
    }

    const scopes = [
      'https://www.googleapis.com/auth/calendar.readonly',
      'https://www.googleapis.com/auth/calendar.events',
      'https://www.googleapis.com/auth/userinfo.email'
    ];

    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: scopes.join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
      state: state || 'calendar-booking'
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   */
  async exchangeCodeForTokens(code: string): Promise<GoogleOAuthTokens> {
    if (!this.config.clientId || !this.config.clientSecret || !this.config.redirectUri) {
      throw new Error('Google OAuth not configured');
    }

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        redirect_uri: this.config.redirectUri,
        grant_type: 'authorization_code',
        code: code
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`Token exchange failed: ${error.error_description || error.error || response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Set access token for API calls
   */
  setAccessToken(token: string) {
    this.accessToken = token;
  }

  /**
   * Get availability for a specific date
   */
  async getAvailability(date: string): Promise<MeetingAvailability> {
    switch (this.config.mode) {
      case 'oauth':
        return this.getAvailabilityOAuth(date);
      case 'service':
        return this.getAvailabilityService(date);
      case 'mock':
      default:
        return this.getAvailabilityMock(date);
    }
  }

  /**
   * Book a meeting
   */
  async bookMeeting(request: BookingRequest): Promise<BookingResponse> {
    switch (this.config.mode) {
      case 'oauth':
        return this.bookMeetingOAuth(request);
      case 'service':
        return this.bookMeetingService(request);
      case 'mock':
      default:
        return this.bookMeetingMock(request);
    }
  }

  // OAuth Implementation
  private async getAvailabilityOAuth(date: string): Promise<MeetingAvailability> {
    if (!this.accessToken) {
      throw new Error('Access token required for OAuth mode');
    }

    try {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      // Get busy times using freebusy API
      const freeBusyResponse = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timeMin: startOfDay.toISOString(),
          timeMax: endOfDay.toISOString(),
          items: [{ id: this.config.calendarId }]
        })
      });

      if (!freeBusyResponse.ok) {
        throw new Error(`Calendar API error: ${freeBusyResponse.status} ${freeBusyResponse.statusText}`);
      }

      const freeBusyData = await freeBusyResponse.json();
      const busyTimes = freeBusyData.calendars?.[this.config.calendarId]?.busy || [];

      // Generate available slots (9 AM to 5 PM, 30-minute slots)
      const slots = this.generateTimeSlots(date, busyTimes);

      return {
        date,
        slots: slots.filter(slot => slot.available)
      };

    } catch (error) {
      console.error('OAuth availability error:', error);
      // Fallback to mock data
      return this.getAvailabilityMock(date);
    }
  }

  private async bookMeetingOAuth(request: BookingRequest): Promise<BookingResponse> {
    if (!this.accessToken) {
      throw new Error('Access token required for OAuth mode');
    }

    try {
      const eventData = {
        summary: `Meeting with ${request.contact.firstName} ${request.contact.lastName}`,
        description: request.message || 'Meeting booked via Buildrs website',
        start: {
          dateTime: request.startTime,
          timeZone: 'Europe/Amsterdam'
        },
        end: {
          dateTime: request.endTime,
          timeZone: 'Europe/Amsterdam'
        },
        attendees: [
          {
            email: request.contact.email,
            displayName: `${request.contact.firstName} ${request.contact.lastName}`
          }
        ],
        conferenceData: {
          createRequest: {
            requestId: `buildrs-${Date.now()}`,
            conferenceSolutionKey: {
              type: 'hangoutsMeet'
            }
          }
        },
        extendedProperties: {
          private: {
            bookingSource: 'buildrs-website',
            contactCompany: request.contact.company || '',
            contactPhone: request.contact.phone || ''
          }
        }
      };

      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${this.config.calendarId}/events?conferenceDataVersion=1`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Calendar booking error: ${errorData.error?.message || response.statusText}`);
      }

      const eventResponse = await response.json();

      return {
        success: true,
        eventId: eventResponse.id,
        meetLink: eventResponse.conferenceData?.entryPoints?.[0]?.uri
      };

    } catch (error) {
      console.error('OAuth booking error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Booking failed'
      };
    }
  }

  // Service Account Implementation (placeholder)
  private async getAvailabilityService(date: string): Promise<MeetingAvailability> {
    // TODO: Implement service account authentication
    console.log('Service account mode not yet implemented, falling back to mock');
    return this.getAvailabilityMock(date);
  }

  private async bookMeetingService(request: BookingRequest): Promise<BookingResponse> {
    // TODO: Implement service account authentication
    console.log('Service account mode not yet implemented, falling back to mock');
    return this.bookMeetingMock(request);
  }

  // Mock Implementation
  private async getAvailabilityMock(date: string): Promise<MeetingAvailability> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const slots = this.generateTimeSlots(date, []);

    return {
      date,
      slots: slots.filter(slot => slot.available)
    };
  }

  private async bookMeetingMock(request: BookingRequest): Promise<BookingResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simulate occasional failures for testing
    if (Math.random() < 0.1) {
      return {
        success: false,
        error: 'Mock booking failure for testing'
      };
    }

    return {
      success: true,
      eventId: `mock-event-${Date.now()}`,
      meetLink: 'https://meet.google.com/mock-meeting-link'
    };
  }

  // Helper methods
  private generateTimeSlots(date: string, busyTimes: Array<{start: string, end: string}>): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const baseDate = new Date(date);
    
    // Generate time slots (9 AM to 5 PM, 30-minute slots)
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = new Date(baseDate);
        startTime.setHours(hour, minute, 0, 0);
        
        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + 30);

        // Check if slot overlaps with busy times
        const isAvailable = !busyTimes.some(busy => {
          const busyStart = new Date(busy.start);
          const busyEnd = new Date(busy.end);
          
          return (startTime < busyEnd && endTime > busyStart);
        });

        slots.push({
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          available: isAvailable
        });
      }
    }

    return slots;
  }

  // Debug and status methods
  async getConnectionStatus() {
    const status = {
      mode: this.config.mode,
      environment: {
        hasClientId: !!this.config.clientId,
        hasClientSecret: !!this.config.clientSecret,
        hasRedirectUri: !!this.config.redirectUri,
        calendarId: this.config.calendarId,
        hasAccessToken: !!this.accessToken
      },
      recommendations: [] as string[]
    };

    switch (this.config.mode) {
      case 'oauth':
        if (this.config.clientId && this.config.clientSecret) {
          status.recommendations.push('✅ OAuth mode is configured correctly');
          if (!this.accessToken) {
            status.recommendations.push('⚠️ No access token - user needs to authenticate');
          }
        } else {
          status.recommendations.push('❌ GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET missing for OAuth mode');
        }
        break;
      case 'service':
        status.recommendations.push('⚠️ Service account mode not yet implemented');
        break;
      case 'mock':
        status.recommendations.push('⚠️ Using mock mode - no real Google Calendar integration');
        break;
    }

    return status;
  }
}

// Export singleton instance
export const googleCalendarClient = new GoogleCalendarClient();

// Export class for custom configurations
export { GoogleCalendarClient };