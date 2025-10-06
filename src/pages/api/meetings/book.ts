import type { APIRoute } from 'astro';
import { googleCalendarClient, type BookingRequest } from '../../../lib/google-calendar';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Get access token from request
    const accessToken = body.access_token || request.headers.get('authorization')?.replace('Bearer ', '');

    // Validate required fields
    const requiredFields = ['startTime', 'endTime', 'contact'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return new Response(
          JSON.stringify({ 
            success: false,
            error: `Missing required field: ${field}` 
          }),
          { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Validate contact fields
    const { contact } = body;
    if (!contact.email || !contact.firstName || !contact.lastName) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Contact must have email, firstName, and lastName' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Invalid email format' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate time format
    const startTime = new Date(body.startTime);
    const endTime = new Date(body.endTime);
    
    if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Invalid time format' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if meeting is in the future
    const now = new Date();
    if (startTime <= now) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Cannot book meetings in the past' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if end time is after start time
    if (endTime <= startTime) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'End time must be after start time' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Set access token if provided
    if (accessToken) {
      googleCalendarClient.setAccessToken(accessToken);
    }

    // Prepare booking request
    const bookingRequest: BookingRequest = {
      startTime: body.startTime,
      endTime: body.endTime,
      contact: {
        email: contact.email.toLowerCase().trim(),
        firstName: contact.firstName.trim(),
        lastName: contact.lastName.trim(),
        company: contact.company?.trim(),
        phone: contact.phone?.trim()
      },
      message: body.message?.trim()
    };

    // Book the meeting
    const result = await googleCalendarClient.bookMeeting(bookingRequest);

    if (result.success) {
      // Log successful booking
      console.log('Meeting booked successfully:', {
        eventId: result.eventId,
        email: bookingRequest.contact.email,
        startTime: bookingRequest.startTime,
        meetLink: result.meetLink
      });

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            eventId: result.eventId,
            meetLink: result.meetLink,
            message: 'Meeting booked successfully!'
          }
        }),
        {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        }
      );
    } else {
      // Log booking failure
      console.error('Meeting booking failed:', result.error);

      return new Response(
        JSON.stringify({
          success: false,
          error: result.error || 'Failed to book meeting'
        }),
        {
          status: 422,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

  } catch (error) {
    console.error('Booking API error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// CORS preflight for development
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};