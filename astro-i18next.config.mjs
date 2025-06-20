/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  showDefaultLocale: false,
  detectLocale: true,
  debug: true,
  load: ["server"],
  i18nextServer: {
    debug: true,
  },
};
