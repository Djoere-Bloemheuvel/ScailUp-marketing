#!/usr/bin/env node

/**
 * Perplexity MCP Test Script
 * 
 * Dit script test de Perplexity MCP server setup
 * Run met: node perplexity-example.js
 */

import { spawn } from 'child_process';
import { config } from 'dotenv';

// Load environment variables
config();

async function testPerplexityMCP() {
    console.log('🧠 Testing Perplexity MCP Server...\n');

    // Check if API key is set
    if (!process.env.PERPLEXITY_API_KEY) {
        console.error('❌ PERPLEXITY_API_KEY not found in environment variables');
        console.log('Please set your API key in .env file:');
        console.log('PERPLEXITY_API_KEY=pplx-your-api-key-here\n');
        console.log('Get your API key from: https://www.perplexity.ai/settings/api\n');
        process.exit(1);
    }

    console.log(`✅ API Key found: ${process.env.PERPLEXITY_API_KEY.substring(0, 8)}...\n`);

    // Test the MCP server
    console.log('🚀 Starting Perplexity MCP server test...');
    
    const mcp = spawn('npx', ['mcp-perplexity-search'], {
        env: { 
            ...process.env,
            PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY 
        },
        stdio: ['pipe', 'pipe', 'pipe']
    });

    let output = '';
    let errors = '';

    mcp.stdout.on('data', (data) => {
        output += data.toString();
        console.log('📄 Output:', data.toString().trim());
    });

    mcp.stderr.on('data', (data) => {
        errors += data.toString();
        console.log('⚠️ Error:', data.toString().trim());
    });

    mcp.on('close', (code) => {
        console.log(`\n🏁 Process finished with code: ${code}`);
        
        if (code === 0) {
            console.log('✅ Perplexity MCP server is properly configured!');
        } else {
            console.log('❌ There was an issue with the setup');
            console.log('Errors:', errors);
        }
    });

    // Kill the process after 10 seconds (for testing)
    setTimeout(() => {
        console.log('\n⏰ Stopping test after 10 seconds...');
        mcp.kill();
    }, 10000);
}

// Example usage functions
function exampleUsage() {
    console.log('\n📚 Example usage in Claude Code:');
    console.log(`
// Intelligente zoekfunctie
const searchResult = await perplexity_search({
    query: "AI automation trends 2025 Netherlands",
    model: "sonar-pro",
    return_citations: true,
    return_images: false
});

// Deep research voor Buildrs
const researchResult = await perplexity_research({
    query: "B2B SaaS marketing strategies for SMEs",
    depth: "comprehensive",
    focus_time: "recent"
});

// Competitor analysis
const competitors = await perplexity_search({
    query: "AI agent platforms competitors Buildrs alternatives",
    model: "sonar-reasoning-pro"
});

// Content research
const contentIdeas = await perplexity_search({
    query: "B2B marketing automation content ideas LinkedIn 2025",
    model: "sonar-pro"
});
    `);
}

function businessUseCases() {
    console.log('\n💼 Buildrs Business Use Cases:');
    console.log(`
1. 🎯 Market Research
   - Analyseer AI automation market trends
   - Onderzoek B2B SaaS growth statistics
   - Identificeer nieuwe business opportunities

2. 🏢 Competitor Analysis  
   - Analyseer concurrenten features en pricing
   - Onderzoek market positioning strategies
   - Identificeer market gaps en opportunities

3. 📝 Content Research
   - Vind trending topics voor LinkedIn content
   - Onderzoek best practices voor B2B marketing
   - Genereer blog post ideeën gebaseerd op market trends

4. 👥 Client Research
   - Onderzoek potentiële klanten en hun pain points
   - Analyseer industry-specific automation needs
   - Identificeer decision makers en contact strategieën

5. 🔧 Technical Research
   - Onderzoek nieuwe AI tools en frameworks
   - Analyseer integration possibilities
   - Vind development best practices
    `);
}

// Run the test
testPerplexityMCP().then(() => {
    exampleUsage();
    businessUseCases();
}).catch((error) => {
    console.error('❌ Test failed:', error);
});