import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/inter/wght.css";

import "./index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/pages/ErrorBoundary";

import { registerSW } from "virtual:pwa-register";
import { ThemeProvider } from "@material-tailwind/react";

import { initGA } from "./lib/analytics";

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true);
  },
  onOfflineReady() {
    console.log("App is ready for offline use.");
  },
});

initGA();

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <StrictMode>
            <ErrorBoundary>
                <ThemeProvider value={{}}>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StrictMode>
    </HelmetProvider>
);
