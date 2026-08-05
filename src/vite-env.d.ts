
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}