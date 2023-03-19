// https://nuxt.com/docs/api/configuration/nuxt-config
import ruleUnoCss from "./utils/ruleUnoCss";
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
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
