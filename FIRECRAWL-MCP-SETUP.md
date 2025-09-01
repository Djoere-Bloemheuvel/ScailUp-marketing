# Firecrawl MCP Server Setup

Deze gids helpt je bij het volledig instellen van de Firecrawl MCP (Model Context Protocol) server voor web scraping en content extractie.

## 📋 Wat is geïnstalleerd

- **firecrawl-mcp** package (versie 2.0.2)
- Configuratiebestanden
- Startup scripts
- Environment setup

## 🔧 Setup Stappen

### 1. Verkrijg een Firecrawl API Key

1. Ga naar [Firecrawl.com](https://firecrawl.com)
2. Maak een account aan
3. Ga naar [API Keys](https://firecrawl.com/app/api-keys)
4. Genereer een nieuwe API key

### 2. Configureer Environment Variables

Maak een `.env` bestand in de root van je project:

```bash
cp .env.example .env
```

Edit het `.env` bestand en voeg je API key toe:

```env
FIRECRAWL_API_KEY=fc-your-api-key-here
```

### 3. Test de installatie

Run het test script:

```bash
./start-firecrawl-mcp.sh
```

Of handmatig:

```bash
export FIRECRAWL_API_KEY=fc-your-api-key-here
npx firecrawl-mcp
```

## 🚀 Gebruik

### Beschikbare MCP Tools

De Firecrawl MCP server biedt de volgende tools:

1. **firecrawl_scrape** - Scrape een enkele URL
2. **firecrawl_crawl** - Crawl een website (meerdere pagina's)
3. **firecrawl_search** - Zoek op het web
4. **firecrawl_batch** - Batch processing van meerdere URLs

### Voorbeeld gebruik in Claude Code

```typescript
// Scrape een enkele pagina
const result = await firecrawl_scrape({
  url: "https://example.com",
  formats: ["markdown", "html"]
});

// Crawl een hele website
const crawlResult = await firecrawl_crawl({
  url: "https://example.com",
  limit: 100,
  allowBackwardLinks: true
});

// Zoeken op het web
const searchResult = await firecrawl_search({
  query: "AI automation tools",
  limit: 10
});
```

## 📁 Bestanden Overzicht

- `firecrawl-mcp-config.json` - MCP server configuratie
- `start-firecrawl-mcp.sh` - Startup script
- `.env.example` - Environment variabelen voorbeeld
- `FIRECRAWL-MCP-SETUP.md` - Deze setup gids

## 🔒 Security

- Voeg nooit je API key toe aan version control
- Het `.env` bestand staat al in `.gitignore`
- Use environment variabelen voor productie

## 🛠 Troubleshooting

### Error: FIRECRAWL_API_KEY environment variable is required

```bash
export FIRECRAWL_API_KEY=fc-your-api-key-here
```

### Permission denied op startup script

```bash
chmod +x start-firecrawl-mcp.sh
```

### Self-hosted Firecrawl instance

Als je een self-hosted instance gebruikt, voeg dit toe aan je `.env`:

```env
FIRECRAWL_BASE_URL=http://localhost:3002
```

## 📖 Documentatie

- [Firecrawl Documentation](https://docs.firecrawl.com)
- [MCP Documentation](https://modelcontextprotocol.io)
- [Firecrawl MCP GitHub](https://github.com/mendable-dev/firecrawl)

## ✅ Volgende Stappen

1. Test de setup met een eenvoudige scrape
2. Integreer met je Claude Code workflow
3. Gebruik voor content research en data extractie
4. Configureer rate limiting indien nodig