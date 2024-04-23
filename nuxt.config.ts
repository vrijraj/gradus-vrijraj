// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  content: {
    documentDriven: true,
    experimental: {
      search: true,
    },
    highlight: {
      theme: "github-light",
    },
    markdown: {
      anchorLinks: {
        depth: 0,
      },
      // tags: {
      //   p: 'MyCustomParagraph'
      // }
    },
  },
  extends: "@nuxt-themes/typography",
})
