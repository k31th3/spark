import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/inter/wght.css";

import "./index.css";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/pages/ErrorBoundary";

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StrictMode>
    </HelmetProvider>
);
