# Perplexity MCP Server Setup

Deze gids helpt je bij het volledig instellen van de Perplexity MCP (Model Context Protocol) server voor intelligente zoek- en research capabilities.

## 📋 Wat is geïnstalleerd

- **mcp-perplexity-search** package (versie 0.0.5)
- Configuratiebestanden
- Startup scripts
- Environment setup

## 🔧 Setup Stappen

### 1. Verkrijg een Perplexity API Key

1. Ga naar [Perplexity.ai](https://www.perplexity.ai)
2. Maak een account aan
3. Ga naar [API Settings](https://www.perplexity.ai/settings/api)
4. Genereer een nieuwe API key

### 2. Configureer Environment Variables

Voeg je Perplexity API key toe aan het `.env` bestand:

```env
# Perplexity API Configuration
PERPLEXITY_API_KEY=pplx-your-api-key-here
```

### 3. Test de installatie

Run het test script:

```bash
./start-perplexity-mcp.sh
```

Of handmatig:

```bash
export PERPLEXITY_API_KEY=pplx-your-api-key-here
npx mcp-perplexity-search
```

Of gebruik npm scripts:

```bash
npm run perplexity:start
npm run perplexity:test
```

## 🚀 Gebruik

### Beschikbare MCP Tools

De Perplexity MCP server biedt de volgende tools:

1. **perplexity_search** - Intelligente web search met AI-aangedreven antwoorden
2. **perplexity_research** - Deep research capabilities 
3. **perplexity_reasoning** - Advanced reasoning en analysis

### Voorbeeld gebruik in Claude Code

```typescript
// Intelligente zoekfunctie
const searchResult = await perplexity_search({
  query: "AI automation trends 2025 Netherlands",
  model: "sonar-pro",
  return_citations: true,
  return_images: false
});

// Deep research
const researchResult = await perplexity_research({
  query: "B2B SaaS marketing strategies for SMEs",
  depth: "comprehensive",
  focus_time: "recent"
});

// Reasoning en analysis
const reasoningResult = await perplexity_reasoning({
  query: "Compare AI agents vs traditional automation",
  reasoning_type: "analytical"
});
```

### Perplexity Models

- **sonar-pro** - Advanced search with real-time web access
- **sonar-reasoning-pro** - Enhanced reasoning capabilities
- **sonar-deep-research** - Comprehensive research mode

## 📁 Bestanden Overzicht

- `perplexity-mcp-config.json` - MCP server configuratie
- `start-perplexity-mcp.sh` - Startup script
- `PERPLEXITY-MCP-SETUP.md` - Deze setup gids

## 🔒 Security

- Voeg nooit je API key toe aan version control
- Het `.env` bestand staat al in `.gitignore`
- Use environment variabelen voor productie

## 🛠 Troubleshooting

### Error: PERPLEXITY_API_KEY environment variable is required

```bash
export PERPLEXITY_API_KEY=pplx-your-api-key-here
```

### Permission denied op startup script

```bash
chmod +x start-perplexity-mcp.sh
```

### API Rate Limits

Perplexity heeft rate limits per API key:
- Free tier: 5 requests per day
- Pro tier: 300+ requests per month

## 💡 Use Cases

### Voor Buildrs Business

- **Competitor research** - Analyseer concurrenten en markttrends
- **Content research** - Vind relevante content voor marketing
- **Technical research** - Onderzoek nieuwe AI tools en frameworks
- **Market analysis** - Analyseer B2B SaaS market trends
- **Client research** - Onderzoek potentiële klanten en hun needs

### Praktische voorbeelden

```typescript
// Market research voor Buildrs
const marketAnalysis = await perplexity_search({
  query: "AI automation market size B2B Netherlands 2025",
  model: "sonar-pro"
});

// Competitor analysis
const competitors = await perplexity_research({
  query: "AI agent platforms competitors Buildrs alternatives",
  depth: "comprehensive"
});

// Content ideas
const contentIdeas = await perplexity_search({
  query: "B2B marketing automation content ideas LinkedIn 2025",
  model: "sonar-reasoning-pro"
});
```

## 📖 Documentatie

- [Perplexity API Documentation](https://docs.perplexity.ai)
- [MCP Documentation](https://modelcontextprotocol.io)
- [Perplexity Models Guide](https://docs.perplexity.ai/docs/models)

## ✅ Volgende Stappen

1. Verkrijg je Perplexity API key
2. Test de setup met een eenvoudige search
3. Integreer met je Claude Code research workflow
4. Gebruik voor Buildrs market research en content creation