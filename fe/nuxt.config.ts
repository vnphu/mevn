// https://nuxt.com/docs/api/configuration/nuxt-config
import ruleUnoCss from "./utils/ruleUnoCss";
export default defineNuxtConfig({
  ssr: false,
  modules: ["@unocss/nuxt"],
  buildModules: ["@nuxtjs/axios", "@nuxtjs/moment"],
  axios: {
    baseURL: "/",
  },

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    // @ts-ignore
    rules: ruleUnoCss,
  },
  sourcemap: {
    server: true,
    client: false,
  },
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: process.env.API_BASE_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
