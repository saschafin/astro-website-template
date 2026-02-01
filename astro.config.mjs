import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // Kunde ersetzt mit eigener Domain
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
