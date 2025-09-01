#!/bin/bash

# Load environment variables if .env exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if PERPLEXITY_API_KEY is set
if [ -z "$PERPLEXITY_API_KEY" ]; then
    echo "Error: PERPLEXITY_API_KEY environment variable is not set."
    echo "Please set it in your .env file or as an environment variable."
    echo "You can get your API key from: https://www.perplexity.ai/settings/api"
    exit 1
fi

echo "Starting Perplexity MCP server..."
echo "API Key: ${PERPLEXITY_API_KEY:0:8}..." # Show only first 8 characters for security

# Start the MCP server
npx mcp-perplexity-search