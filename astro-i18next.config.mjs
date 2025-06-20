/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  // Core configuration
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["translation"],
  defaultNamespace: "translation",
  
  // URL behavior
  showDefaultLocale: false,
  
  // Detection and loading
  detectLocale: {
    // Order of detection methods
    order: ["path", "cookie", "localStorage", "navigator"],
    // Whether to cache detected locale
    caches: ["cookie", "localStorage"],
  },
  
  // Loading strategy
  load: ["server", "client"],
  
  // Fallback handling
  fallbackLocales: {
    default: ["es", "en"],
  },
  
  // Debugging
  debug: true,
  
  // Server-side configuration
  i18nextServer: {
    debug: true,
    initImmediate: false,
    preload: ["es", "en"],
    supportedLngs: ["es", "en"],
    load: "all",
    returnEmptyString: false,
    returnNull: false,
    returnObjects: false,
    saveMissing: false,
  },
  
  // Client-side configuration
  i18nextClient: {
    debug: true,
  },
};
