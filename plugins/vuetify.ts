// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { VFab } from 'vuetify/labs/VFab'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VFab,
    },
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})