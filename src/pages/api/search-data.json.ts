import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  try {
    // Get all content collections
    const [pillars, clusters, artikelen] = await Promise.all([
      getCollection('pillars'),
      getCollection('clusters'),
      getCollection('artikelen')
    ]);

    // Create search index
    const searchData = [
      // Add pillar pages
      ...pillars.map(pillar => ({
        title: pillar.data.title,
        description: pillar.data.description,
        url: `/kenniscentrum/${pillar.data.pillarId}`,
        type: 'pillar',
        pillar: pillar.data.pillarId,
        tags: pillar.data.seo?.keywords || []
      })),
      
      // Add cluster pages
      ...clusters.map(cluster => ({
        title: cluster.data.title,
        description: cluster.data.description,
        url: `/kenniscentrum/${cluster.data.pillar}/${cluster.data.clusterId}`,
        type: 'cluster',
        pillar: cluster.data.pillar,
        tags: cluster.data.seo?.keywords || []
      })),
      
      // Add artikel pages
      ...artikelen.map(artikel => ({
        title: artikel.data.title,
        description: artikel.data.description,
        url: `/kenniscentrum/${artikel.slug}`,
        type: 'artikel',
        pillar: artikel.data.pillar,
        tags: artikel.data.tags || [],
        difficulty: artikel.data.difficulty,
        category: artikel.data.category,
        readingTime: artikel.data.readingTime
      }))
    ];

    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error generating search data:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate search data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};