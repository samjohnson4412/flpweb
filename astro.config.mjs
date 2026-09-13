import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://floridalanternproject.org',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
