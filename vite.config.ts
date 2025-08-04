
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
          // Separate chunk for contact page components
          'contact-vendor': ['@/components/contact/FastContactPage', '@/components/contact/OptimizedContactForm', '@/components/contact/LightweightBackground'],
        },
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Minimize bundle size warnings for production
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Minify with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        // Remove unused code more aggressively
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        // Optimize variable names for smaller bundle
        safari10: true,
      },
    },
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
    // Exclude contact components from optimization to allow lazy loading
    exclude: ['@/components/contact/*'],
  },
}));
