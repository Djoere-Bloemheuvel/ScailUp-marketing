import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://buildrs.ai', // Required for sitemap generation
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.ts',
    }),
    // TODO: Add sitemap() when @astrojs/sitemap is installed
  ],
  build: {
    // Advanced build optimizations
    inlineStylesheets: 'auto', // Inline small CSS files
    assets: '_astro', // Organize assets
  },
  // Reduce JS where possible; ensure minify with terser is enabled in Vite
  vite: {
    define: {
      global: 'globalThis',
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      },
      postcss: {
        plugins: []
      }
    },
    build: {
      // Advanced bundling optimizations
      rollupOptions: {
        output: {
          // Better chunk splitting
          manualChunks: {
            // Separate vendor chunks
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
            'lucide': ['lucide-react'],
            // Keep supabase separate for better caching
            'supabase': ['@supabase/supabase-js', '@supabase/auth-helpers-react']
          }
        }
      },
      // Enable CSS minification
      cssMinify: true,
      // Enable terser for better JS compression  
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true
        }
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        cacheDir: './.astro-cache'
      }
    },
  },
  output: 'static',
  server: {
    host: true
  },
  preview: {
    host: true,
    port: 4323
  }
});
