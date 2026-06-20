import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://samueltirtawidjaja.com',
  integrations: [react(), sitemap()],
  vite: {
    // Tailwind v4 is configured CSS-first (see src/styles/index.css);
    // the Vite plugin replaces the deprecated @astrojs/tailwind integration.
    plugins: [tailwindcss()],
  },
});
