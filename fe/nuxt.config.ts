// https://nuxt.com/docs/api/configuration/nuxt-config
import ruleUnoCss from "./utils/ruleUnoCss";
export default defineNuxtConfig({
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
});
