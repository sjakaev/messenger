import { defineConfig } from 'vite';
import { resolve } from "path";
import handlebars from 'vite-plugin-handlebars';
import viteInspect from 'vite-plugin-inspect';

export default defineConfig({
  build: {
    outDir: 'dist',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     404: resolve(__dirname, 'src/pages/404/index.ts'),
    //     login: resolve(__dirname, 'src/pages/login/index.ts'),
    //   },
    // },
  },
  plugins: [
    viteInspect(),
    handlebars(),
  ],
});
