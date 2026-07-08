// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio. El cliente lo cambia aquí cuando tenga dominio.
// Se usa para sitemap, canonical y Open Graph.
const SITE = process.env.SITE_URL || 'https://bravacoffee.es';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Permite optimización de imágenes locales en build (sharp)
    responsiveStyles: true,
  },
});
