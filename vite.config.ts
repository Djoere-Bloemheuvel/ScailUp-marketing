
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable tree-shaking and code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-toast', '@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
          'animation-vendor': ['lucide-react', 'tailwind-merge', 'clsx', 'class-variance-authority'],
          'query-vendor': ['@tanstack/react-query'],
          // Separate chunks for heavy animation components
          'hero-animations': [
            'src/components/hero/CinematicAnimations.tsx',
            'src/components/hero/AmbientLighting.tsx',
            'src/components/hero/HeroAnimations.tsx'
          ],
          'core-animations': [
            'src/components/OptimizedAnimations.tsx',
            'src/components/LazyAnimationProvider.tsx'
          ],
        },
      },
    },
    // Optimize CSS - more aggressive
    cssCodeSplit: true,
    cssMinify: true,
    // Minimize bundle size warnings for production
    chunkSizeWarningLimit: 800,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Minify with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        // Remove unused code more aggressively
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true,
      },
      mangle: {
        // Optimize variable names for smaller bundle
        safari10: true,
        properties: false, // Don't mangle properties to avoid breaking React
      },
    },
    // Performance optimizations
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
    reportCompressedSize: false, // Faster builds
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react',
      'tailwind-merge',
      'clsx',
    ],
    // Exclude heavy animation components from optimization to allow lazy loading
    exclude: [
      '@/components/contact/*',
      '@/components/hero/CinematicAnimations',
      '@/components/hero/AmbientLighting',
      '@/components/hero/HeroAnimations',
      '@/components/OptimizedAnimations',
    ],
    // Force optimize critical performance packages
    force: true,
  },
  // Enable server-side optimizations
  esbuild: {
    // Remove console logs in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Optimize for modern browsers
    target: 'es2020',
    // Tree shake unused imports
    treeShaking: true,
  },
}));
