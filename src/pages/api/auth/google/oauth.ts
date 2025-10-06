import type { APIRoute } from 'astro';
import { googleCalendarClient } from '../../../../lib/google-calendar';

export const GET: APIRoute = async ({ request, redirect }) => {
  try {
    const url = new URL(request.url);
    const calendarId = url.searchParams.get('calendar_id') || 'djoere@buildrs.ai';

    // Generate state parameter for CSRF protection
    const state = 'calendar-booking';

    // Get OAuth URL from Google Calendar client
    const authUrl = googleCalendarClient.getOAuthUrl(state);

    // Redirect to Google OAuth
    return redirect(authUrl);

  } catch (error) {
    console.error('OAuth initiation error:', error);
    
    return redirect(`/meeting?error=oauth_init_failed&description=${encodeURIComponent(
      error instanceof Error ? error.message : 'Failed to initiate OAuth'
    )}`);
  }
};

// Handle POST if needed
export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ error: 'POST not supported for OAuth initiation' }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};