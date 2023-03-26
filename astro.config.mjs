import { defineConfig } from 'astro/config';
import { defaultLayoutRemarkPlugin } from './src/utils/defaultlayout-remark-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.my-site.dev',
  markdown: {
    remarkPlugins: [ defaultLayoutRemarkPlugin ]
  },
  extendDefaultPlugins: true,
});
