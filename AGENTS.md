# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` (Astro pages in `src/pages`, React/TSX components in `src/components`, utilities in `src/lib`, styles in `src/styles`).
- Public assets: `public/` (images, icons, sitemap, robots).
- Config: `astro.config.mjs`, `tsconfig*.json`, `tailwind.config.ts`, `eslint.config.js`.
- Scripts: `scripts/` for maintenance utilities (e.g., image optimization, performance audit).

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server (Astro) with HMR.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint on TypeScript/TSX files.
- Optional tools: `npm run firecrawl:start`, `npm run perplexity:start` start local MCP tools for agent workflows.

## Coding Style & Naming Conventions
- Language: TypeScript, React (TSX) inside Astro.
- Indentation: 2 spaces; keep lines focused and readable.
- Components: `PascalCase` (e.g., `AgentHero.tsx`), hooks `useCamelCase`.
- Files: co-locate component styles and tests next to implementation when practical.
- Linting: ESLint configs in `eslint.config.js` (React Hooks rules enabled). Fix issues before committing.
- Styling: TailwindCSS; prefer utility classes and `cn`/`clsx` helpers for conditional styles.

## Testing Guidelines
- Current repo has no dedicated test runner script. For unit tests, prefer Vitest when added; name files `*.test.ts` or `*.test.tsx` and place near sources (e.g., `src/components/Button.test.tsx`).
- For integration/UX checks, run `npm run build && npm run preview` and exercise critical flows.

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits where possible, e.g., `feat: add AgentsStatsSection`, `fix: correct SEOHead meta tags`, `chore: update eslint rules`.
- PRs: Include a clear summary, screenshots for UI changes, steps to test, and link related issues. Keep diffs focused and pass `npm run lint`.

## Security & Configuration Tips
- Environment: copy `.env.example` to `.env` and fill required keys (e.g., Supabase, Cloudinary). Never commit secrets.
- Data: SQL schemas live in `*.sql` files; review before applying migrations.
- Assets: use `scripts/optimize-images.js` to keep images performant.
