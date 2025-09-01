#!/usr/bin/env node

/**
 * Firecrawl MCP Test Script
 * 
 * Dit script test de Firecrawl MCP server setup
 * Run met: node firecrawl-example.js
 */

import { spawn } from 'child_process';
import { config } from 'dotenv';

// Load environment variables
config();

async function testFirecrawlMCP() {
    console.log('🔥 Testing Firecrawl MCP Server...\n');

    // Check if API key is set
    if (!process.env.FIRECRAWL_API_KEY) {
        console.error('❌ FIRECRAWL_API_KEY not found in environment variables');
        console.log('Please set your API key in .env file:');
        console.log('FIRECRAWL_API_KEY=fc-your-api-key-here\n');
        process.exit(1);
    }

    console.log(`✅ API Key found: ${process.env.FIRECRAWL_API_KEY.substring(0, 8)}...\n`);

    // Test the MCP server
    console.log('🚀 Starting Firecrawl MCP server test...');
    
    const mcp = spawn('npx', ['firecrawl-mcp'], {
        env: { 
            ...process.env,
            FIRECRAWL_API_KEY: process.env.FIRECRAWL_API_KEY 
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
            console.log('✅ Firecrawl MCP server is properly configured!');
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
// Scrape a single page
const result = await firecrawl_scrape({
    url: "https://buildrs.ai",
    formats: ["markdown", "html"]
});

// Crawl multiple pages
const crawlResult = await firecrawl_crawl({
    url: "https://buildrs.ai",
    limit: 10,
    allowBackwardLinks: true
});

// Search the web
const searchResult = await firecrawl_search({
    query: "AI automation Netherlands",
    limit: 5
});
    `);
}

// Run the test
testFirecrawlMCP().then(() => {
    exampleUsage();
}).catch((error) => {
    console.error('❌ Test failed:', error);
});