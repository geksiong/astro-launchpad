import { defineConfig } from 'astro/config';
import { defaultLayoutRemarkPlugin } from './src/utils/defaultlayout-remark-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [ defaultLayoutRemarkPlugin ]
  },
  extendDefaultPlugins: true,
});
