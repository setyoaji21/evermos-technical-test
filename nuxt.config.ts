// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  modules: [
    'usebootstrap',
    'dayjs-nuxt',
    '@pinia/nuxt',
  ],
  css: [
    "bootstrap/scss/bootstrap.scss",
    "~/assets/styles/main.css",
  ]
})
