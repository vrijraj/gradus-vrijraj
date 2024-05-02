// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  // target: 'static',
  // ssr: false,
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: false },

  modules: [
    "@nuxt/content",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    'nuxt-gtag'    
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
      search: {
        fields: ["title", "description", "tags"],
      },
    },
    highlight: {
      theme: "light-plus",
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
  nitro: {
    // prerender: {
    //   crawlLinks: true,
    // },
    // firebase: {
    //   gen: 2
    // }
  },
  gtag: {
    id: 'G-WNF0K83TJ5'
  }
});
