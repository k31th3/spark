import { defineConfig }     from "vite"
import tailwindcss          from "@tailwindcss/vite"
import react                from "@vitejs/plugin-react"
import path                 from "path";
import { VitePWA }          from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["**/*"],
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,ico}"]
      }
    })
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