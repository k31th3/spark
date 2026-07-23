import { defineConfig }       from "vite"
import tailwindcss            from "@tailwindcss/vite"
import react                  from "@vitejs/plugin-react"
import path                   from "path";
import { createHtmlPlugin }   from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: true,
    sourcemap: false,
    terserOptions: {
      mangle: true,
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});