import type { APIRoute } from 'astro';
import { googleCalendarClient } from '../../../../lib/google-calendar';

export const GET: APIRoute = async ({ request, redirect }) => {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const error = url.searchParams.get('error');

    // Handle OAuth errors
    if (error) {
      console.error('Google OAuth error:', error);
      const errorDescription = url.searchParams.get('error_description');
      
      return redirect(`/meeting?error=${encodeURIComponent(error)}&description=${encodeURIComponent(errorDescription || 'Authentication failed')}`);
    }

    // Validate state parameter for CSRF protection
    if (!state || state !== 'calendar-booking') {
      console.error('Invalid state parameter in OAuth callback');
      return redirect('/meeting?error=invalid_state');
    }

    // Validate authorization code
    if (!code) {
      console.error('Missing authorization code in OAuth callback');
      return redirect('/meeting?error=missing_code');
    }

    // Exchange authorization code for access token
    const tokenResponse = await exchangeCodeForTokens(code);

    if (!tokenResponse.success) {
      console.error('Token exchange failed:', tokenResponse.error);
      return redirect(`/meeting?error=token_exchange_failed&description=${encodeURIComponent(tokenResponse.error || 'Unknown error')}`);
    }

    // In a real app, you'd store these tokens securely (database/session)
    // For this demo, we'll pass the access token back to the frontend
    console.log('Google OAuth successful:', {
      hasAccessToken: !!tokenResponse.tokens?.access_token,
      expiresIn: tokenResponse.tokens?.expires_in,
      scope: tokenResponse.tokens?.scope
    });

    // Redirect back to meeting page with success and access token
    const redirectUrl = new URL('/meeting', url.origin);
    redirectUrl.searchParams.set('auth', 'success');
    redirectUrl.searchParams.set('access_token', tokenResponse.tokens!.access_token);
    
    // Store refresh token in a more secure way (cookies with httpOnly)
    if (tokenResponse.tokens?.refresh_token) {
      // In production, store this securely
      redirectUrl.searchParams.set('refresh_token', tokenResponse.tokens.refresh_token);
    }

    return redirect(redirectUrl.toString());

  } catch (error) {
    console.error('OAuth callback error:', error);
    return redirect(`/meeting?error=callback_error&description=${encodeURIComponent(error instanceof Error ? error.message : 'Unknown error')}`);
  }
};

async function exchangeCodeForTokens(code: string) {
  try {
    const tokens = await googleCalendarClient.exchangeCodeForTokens(code);

    return {
      success: true,
      tokens
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Token exchange failed'
    };
  }
}

// Handle POST requests if needed
export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ error: 'POST not supported for OAuth callback' }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};