import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KaonUIVue',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@kaonui/lit-components'],
      output: {
        globals: {
          vue: 'Vue',
          '@kaonui/lit-components': 'KaonUILit',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
  },
});