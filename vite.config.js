import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgSpritePlugin from "vite-plugin-svg-sprite-component"
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/main.scss";
        `,
      },
    },
  },
  plugins: [
    vue(),
     vueJsx(),
     svgSpritePlugin({ symbolId: (name)=> "icon-" + name }),
    ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
