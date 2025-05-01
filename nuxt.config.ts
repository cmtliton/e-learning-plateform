// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@nuxtjs/supabase", "@pinia/nuxt"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/*"], // We implement our own auth behaviour in the auth middleware
    },
  },
  runtimeConfig: {
    googleApiKey: "api key",
    public: {
      googleClientId: "client id",
      googleClientSecret: "client secret",
      googleRedirectUri: "redirect url",
      googleRefreshToken: "",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
