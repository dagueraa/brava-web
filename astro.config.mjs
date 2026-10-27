// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio. El cliente lo cambia aquí cuando tenga dominio.
// Se usa para sitemap, canonical y Open Graph.
const SITE = process.env.SITE_URL || 'https://hellobrava.es';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  // La campaña /instagram se descubre desde el QR del local, no desde buscadores.
  // El panel /barra es solo para el personal.
  integrations: [sitemap({ filter: (page) => !/\/(instagram|barra)\/?$/.test(page) })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Permite optimización de imágenes locales en build (sharp)
    responsiveStyles: true,
  },
});
