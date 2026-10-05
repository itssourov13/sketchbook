import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://example.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
