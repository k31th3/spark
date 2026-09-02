
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />


interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly [key: string]: string | boolean | undefined;
    readonly VITE_CONTACT_EMAIL: string;
    readonly VITE_CONTACT_PHONE: string;
    readonly VITE_CONTACT_ADDRESS: string;
    readonly VITE_CONTACT_GOOGLE_MAP: string;
    readonly VITE_CONTACT_WEBHOOK_URL: string;
    readonly VITE_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}