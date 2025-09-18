import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [dts(
  {
      insertTypesEntry: true,
      copyDtsFiles: true,
      rollupTypes: true,
      tsConfigFilePath: 'tsconfig.app.json',
    }
  ),vue(),],
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
});