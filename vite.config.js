/**
 * @file vite.config.js
 * @description Vite build tool configuration for the Academic Options React app.
 * - Dev server runs on port 3000 with network access enabled (host: true).
 * - Production build outputs to `dist/` directory for Cloudflare Pages deployment.
 * - Source maps disabled in production for smaller bundle size and security.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Development server settings
  server: {
    port: 3000,       // Fixed port for consistent local development URL
    open: false,      // Don't auto-open browser (user opens manually)
    host: true        // Allow access from network (useful for mobile testing)
  },

  // Production build settings
  build: {
    outDir: 'dist',       // Cloudflare Pages expects output in `dist/`
    sourcemap: false      // Disable source maps for smaller production bundles
  }
});
