import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // Mock connection status since hubspot-mcp is not available
    const status = { connected: false, error: 'hubspot-mcp not configured' };
    
    // Get environment info
    const environment = {
      nodeEnv: process.env.NODE_ENV || 'development',
      apiMode: process.env.HUBSPOT_API_MODE || 'mock',
      hasApiKey: !!process.env.HUBSPOT_API_KEY,
      hasClientId: !!process.env.HUBSPOT_CLIENT_ID,
      hasClientSecret: !!process.env.HUBSPOT_CLIENT_SECRET,
      hasRedirectUri: !!process.env.HUBSPOT_REDIRECT_URI,
      hasPortalId: !!process.env.HUBSPOT_PORTAL_ID,
      debug: process.env.HUBSPOT_DEBUG === 'true'
    };
    
    // Provide setup recommendations
    const recommendations = [];
    
    switch (environment.apiMode) {
      case 'direct':
        if (environment.hasApiKey) {
          recommendations.push('✅ Direct API mode is configured correctly');
          recommendations.push('💡 For production, ensure your HubSpot Private App has meetings scopes');
        } else {
          recommendations.push('❌ HUBSPOT_API_KEY missing for direct mode');
          recommendations.push('📝 Create a Private App in HubSpot Settings → Integrations → Private Apps');
        }
        break;
        
      case 'mcp':
        if (environment.hasClientId && environment.hasClientSecret) {
          recommendations.push('✅ MCP mode credentials are configured');
          if (!environment.hasRedirectUri) {
            recommendations.push('⚠️ HUBSPOT_REDIRECT_URI recommended for OAuth flow');
          }
        } else {
          recommendations.push('❌ HUBSPOT_CLIENT_ID or HUBSPOT_CLIENT_SECRET missing for MCP mode');
          recommendations.push('📝 Create an OAuth app in HubSpot Developer Portal');
        }
        break;
        
      case 'mock':
      default:
        recommendations.push('⚠️ Using mock mode - no real HubSpot integration');
        recommendations.push('💡 Set HUBSPOT_API_MODE=direct and add HUBSPOT_API_KEY for production');
        break;
    }
    
    // Test basic functionality
    let testResults = {};
    try {
      // Test availability call with mock data
      const testDate = new Date();
      testDate.setDate(testDate.getDate() + 1);
      const dateString = testDate.toISOString().split('T')[0];
      
      const availability = await hubspotClient.getAvailability('admin-buildrs', dateString);
      testResults = {
        availabilityTest: {
          success: true,
          slotsFound: availability.slots.length,
          date: availability.date
        }
      };
    } catch (error) {
      testResults = {
        availabilityTest: {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }

    return new Response(
      JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        connection: {
          mode: status.mode,
          status: 'connected'
        },
        environment,
        recommendations,
        testResults,
        setup: {
          nextSteps: [
            environment.apiMode === 'mock' ? 'Configure HubSpot API credentials' : null,
            !environment.hasApiKey && environment.apiMode === 'direct' ? 'Add HUBSPOT_API_KEY to environment' : null,
            'Test booking flow on /meeting page',
            'Verify HubSpot meeting link name matches configuration'
          ].filter(Boolean)
        }
      }, null, 2),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }
    );

  } catch (error) {
    console.error('Debug endpoint error:', error);
    
    return new Response(
      JSON.stringify({
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      }, null, 2),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};