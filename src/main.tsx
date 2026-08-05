import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/inter/wght.css";

import "./index.css";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/pages/ErrorBoundary";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true);
  },
  onOfflineReady() {
    console.log("App is ready for offline use.");
  },
});

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StrictMode>
    </HelmetProvider>
);
