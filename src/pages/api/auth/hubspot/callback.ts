import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, redirect }) => {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const error = url.searchParams.get('error');

    // Handle OAuth errors
    if (error) {
      console.error('HubSpot OAuth error:', error);
      const errorDescription = url.searchParams.get('error_description');
      
      return redirect(`/meeting?error=${encodeURIComponent(error)}&description=${encodeURIComponent(errorDescription || 'Authentication failed')}`);
    }

    // Validate state parameter for CSRF protection
    if (!state) {
      console.error('Missing state parameter in OAuth callback');
      return redirect('/meeting?error=invalid_state');
    }

    // Validate authorization code
    if (!code) {
      console.error('Missing authorization code in OAuth callback');
      return redirect('/meeting?error=missing_code');
    }

    // Exchange authorization code for access token
    const tokenResponse = await exchangeCodeForToken(code);

    if (!tokenResponse.success) {
      console.error('Token exchange failed:', tokenResponse.error);
      return redirect(`/meeting?error=token_exchange_failed&description=${encodeURIComponent(tokenResponse.error || 'Unknown error')}`);
    }

    // Store token securely (in a real app, you'd store this in a database or secure session)
    // For this demo, we'll redirect back to the meeting page with success
    console.log('HubSpot OAuth successful:', {
      hasAccessToken: !!tokenResponse.accessToken,
      expiresIn: tokenResponse.expiresIn
    });

    return redirect('/meeting?auth=success');

  } catch (error) {
    console.error('OAuth callback error:', error);
    return redirect(`/meeting?error=callback_error&description=${encodeURIComponent(error instanceof Error ? error.message : 'Unknown error')}`);
  }
};

async function exchangeCodeForToken(code: string) {
  try {
    const clientId = process.env.HUBSPOT_CLIENT_ID;
    const clientSecret = process.env.HUBSPOT_CLIENT_SECRET;
    const redirectUri = process.env.HUBSPOT_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
      throw new Error('Missing HubSpot OAuth configuration');
    }

    const tokenUrl = 'https://api.hubapi.com/oauth/v1/token';
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code: code
    });

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Token exchange failed: ${response.status} ${response.statusText} - ${errorData.error_description || errorData.error || 'Unknown error'}`);
    }

    const data = await response.json();

    return {
      success: true,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      scope: data.scope
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Token exchange failed'
    };
  }
}

// Handle POST requests if needed (for state management)
export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ error: 'POST not supported for OAuth callback' }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};