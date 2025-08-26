# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server using Astro
- `npm run build` - Build for production using Astro
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Architecture Overview

This is a modern marketing website built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**. The application uses:

- **Astro** as the meta-framework for static site generation with islands architecture
- **React** components with client-side hydration (client:load, client:visible directives)
- **Astro Content Collections** for structured content management (articles, pillars, clusters)
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS** with extensive custom animations and premium color palette
- **Framer Motion** for advanced animations
- **Cloudinary** for optimized image/video delivery

### Project Structure

```
src/
├── components/          # React components organized by feature
│   ├── ui/             # shadcn/ui components
│   ├── agents/         # Agent-specific page components  
│   ├── automations/    # Automation page components
│   ├── consultancy/    # Consultancy page components
│   ├── hero/           # Hero section components with animations
│   ├── kenniscentrum/  # Knowledge center components
│   └── saas/          # SaaS page components
├── pages/              # Astro pages (.astro files)
│   ├── agents-automations/  # Nested route pages
│   ├── kenniscentrum/  # Knowledge center with dynamic routing
│   └── api/           # API endpoints
├── content/            # Content collections
│   ├── artikelen/     # Article markdown files
│   ├── pillars/       # Knowledge pillar definitions
│   └── clusters/      # Content cluster groupings
├── layouts/            # Astro layout components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
├── config/            # Configuration files (Cloudinary, etc.)
└── styles/            # Additional CSS files
```

### Key Architecture Patterns

- **Astro Islands**: React components hydrate only when needed with client: directives
- **Content Collections**: Structured content management with Zod schemas for articles/pillars
- **Component Organization**: Components grouped by feature in subdirectories  
- **Performance Optimizations**: Client-side hydration controls, progressive loading hooks
- **Premium Animations**: Extensive Apple-inspired keyframes and transitions

### Routing

Astro file-based routing with the following key pages:
- `/` - Main landing page
- `/agents-automations` - AI agents and automation services
- `/agents-automations/speed-to-lead` - Speed to lead specific page
- `/kenniscentrum` - Knowledge center hub
- `/kenniscentrum/[pillar]` - Dynamic pillar pages (ai-automatisering, ai-marketing, ai-sales)
- `/kenniscentrum/[pillar]/[cluster]` - Dynamic cluster pages within pillars
- `/kenniscentrum/[slug]` - Individual article pages
- `/lead-engine` - Lead engine product page
- `/inbox-to-meeting` - Inbox to meeting feature page

### Content System

Uses Astro Content Collections with three main types:
- **Articles** (`artikelen`): Blog posts/guides with pillar/cluster associations
- **Pillars** (`pillars`): Main knowledge hub pages (ai-automatisering, ai-marketing, ai-sales)  
- **Clusters** (`clusters`): Content groupings within pillars

All content is typed with Zod schemas and supports SEO metadata, featured content, and cross-references.

### Styling & Animations

- **Tailwind CSS** with extensive custom configuration including:
  - Custom color palette (premium blacks, ScailUp brand colors)
  - 50+ custom keyframe animations (Apple-inspired, cinematic effects)
  - Comprehensive safelist to preserve animation classes
- **Custom CSS Variables**: `--premium-black`, `--premium-gray`, `--scailup-blue`, etc.
- **Animation System**: Apple-style smooth transitions, premium hover effects, GPU-accelerated animations

### Build Configuration

- **Astro Config**: Static output with React and Tailwind integrations
- **Vite Integration**: Path aliases (`@/*` → `./src/*`), global definitions
- **TypeScript**: Multiple tsconfig files (app, node) with path mapping
- **Performance**: Optimized for static generation with selective hydration

## Important Notes

- This is a **Lovable.dev project** that can be edited via their platform or locally
- Uses **Astro's islands architecture** - only hydrate React components when needed
- **Content-driven**: Articles and knowledge content managed through Astro Content Collections
- **Performance-focused**: Client directives control hydration timing (client:load vs client:visible)
- Development includes `lovable-tagger` for component identification

## ScailUp Brand Colors

The standard ScailUp brand colors defined in tailwind.config.ts:
- **Primary Gradient**: `from-blue-500 to-blue-400` (LinkedIn-style)
- **Brand Colors**: `bg-scailup-blue` (#2196F3), `bg-scailup-cyan` (#21CBF3)
- **Background Tints**: `via-blue-900/20` for subtle blue tinting
- **Premium Palette**: Custom blacks (`premium-black`, `premium-gray`) and silvers

Use `from-blue-500 to-blue-400` as the default accent color for new components unless specifically requested otherwise.