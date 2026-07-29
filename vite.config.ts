import { defineConfig } from "vite";
import react            from "@vitejs/plugin-react";
import tailwindcss      from "@tailwindcss/vite";
import { VitePWA }      from "vite-plugin-pwa";
import path             from "path";
import { visualizer }   from "rollup-plugin-visualizer";

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

        globPatterns: [
          "**/*.{js,css,html,ico,woff2,json,webmanifest}"
        ],

        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },

          {
            urlPattern: /\.(?:mp4|webm)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "video-cache",
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
          }
        ]
      },
    }),
    visualizer({
      open: true,
      gzipSize: true,
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    minify: "terser",
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: "hidden",

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
        return "vendor";
      }
          // if (id.includes("react-router")) return "router";
          // if (id.includes("react-dom")) return "react-dom";
          // if (id.includes("react")) return "react";
          // if (id.includes("node_modules")) return "vendor";
        },
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
});