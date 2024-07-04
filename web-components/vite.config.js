import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        // Additional options if needed
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
