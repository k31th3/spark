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

      includeAssets: [
        "site.webmanifest",
        "llms.txt",
        "robots.txt",
        "sitemap.xml",
        "favicon.ico",
        "favicon-96x96.png",
        "favicon.svg",
        "apple-touch-icon.png",
        "web-app-manifest-192x192.png",
        "web-app-manifest-512x512.png",
        "noInternet.webp",
        "errorBoundary.webp",
        "errorMaintenance.webp"
      ],

      workbox: {
        skipWaiting: true,
        clientsClaim: true,

        globPatterns: [
          "**/*.{html,js,css,ico,woff2,json,webmanifest}"
        ],

        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/i,
            handler: "StaleWhileRevalidate",
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
            handler: "StaleWhileRevalidate",
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
            if (id.includes("material-tailwind")) return "material-tailwind";
            if (id.includes("react")) return "react-vendor";
            if (id.includes("motion")) return "motion";
            if (id.includes("swiper")) return "swiper";
            if (id.includes("lenis")) return "lenis";
            return "vendor";
          }
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