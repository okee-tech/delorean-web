// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
    "radix-vue/nuxt",
  ],
  app: {
    head: {
      title: "DMC DeLorean",
    },
  },
  imports: {
    dirs: ["./composables", "./utils", "./types"],
  },
  icon: {
    serverBundle: {
      collections: ["mdi", "material-symbols", "twemoji"],
    },
  },
});
