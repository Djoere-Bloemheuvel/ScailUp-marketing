#!/bin/bash

# Load environment variables if .env exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if FIRECRAWL_API_KEY is set
if [ -z "$FIRECRAWL_API_KEY" ]; then
    echo "Error: FIRECRAWL_API_KEY environment variable is not set."
    echo "Please set it in your .env file or as an environment variable."
    echo "You can get your API key from: https://firecrawl.com/app/api-keys"
    exit 1
fi

echo "Starting Firecrawl MCP server..."
echo "API Key: ${FIRECRAWL_API_KEY:0:8}..." # Show only first 8 characters for security

# Start the MCP server
npx firecrawl-mcp