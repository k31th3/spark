/* =========================================================
   CLOUDFLARE TURNSTILE
========================================================= */

interface TurnstileRenderOptions {
    sitekey: string;
    action?: string;
    theme?: "light" | "dark" | "auto";
    appearance?: "always" | "execute" | "interaction-only";
    execution?: "render" | "execute";
    callback?: (token: string) => void;
    "error-callback"?: (error?: unknown) => void;
    "expired-callback"?: () => void;
}

interface TurnstileApi {
    render: (
        container: string | HTMLElement,
        options: TurnstileRenderOptions
    ) => string;
    execute: (widgetId?: string) => void;
    reset: (widgetId?: string) => void;
    remove: (widgetId?: string) => void;
}

interface Window {
    turnstile?: TurnstileApi;
}