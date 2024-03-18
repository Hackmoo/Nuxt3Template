// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
