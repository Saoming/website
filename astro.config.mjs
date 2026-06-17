import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samueltirtawidjaja.com',
  integrations: [tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true,
  }), react(), sitemap()],
});
