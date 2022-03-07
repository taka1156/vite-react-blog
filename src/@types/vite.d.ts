/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MICROCMS_DOMAIN: string;
    readonly VITE_MICROCMS_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
