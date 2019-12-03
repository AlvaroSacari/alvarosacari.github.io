import colors from 'vuetify/lib/util/colors'
import en from 'vuetify/lib/locale/en'
import es from 'vuetify/lib/locale/es'

const socialMeta = {
  url: 'https://alvarosacari.github.io',
  title: 'Alvaro Sacari',
  description: 'Desarrollador Frontend',
  img: '/og_image.jpeg',
  locale: 'es_ES',
  twitter: '@AlvaroSacari',
  themeColor: '#fff'
}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + socialMeta.title,
    title: socialMeta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: socialMeta.description },
      // Global
      { name: 'author', content: socialMeta.url },
      { name: 'publisher', content: socialMeta.url },
      { name: 'apple-mobile-web-app-title', content: socialMeta.title },
      { name: 'theme-color', content: socialMeta.themeColor },
      // Fb
      { name: 'og:title', content: socialMeta.title },
      { name: 'og:description', content: socialMeta.description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: socialMeta.url },
      { name: 'og:image', content: socialMeta.img },
      { name: 'og:locale', content: socialMeta.locale },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: socialMeta.twitter },
      { name: 'twitter:creator', content: socialMeta.twitter },
      { name: 'twitter:title', content: socialMeta.title },
      { name: 'twitter:description', content: socialMeta.description },
      { name: 'twitter:image', content: socialMeta.img }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/transition-page.scss',
    '~/assets/scss/vuetify-hacks.scss',
    '~/assets/scss/sweetalert2-variables.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuefire.js',
    '~/plugins/snackbar.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-151086148-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-imagemin',
    'vue-sweetalert2/nuxt'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  auth: {
    strategies: {
      local: false,
      firebaseAuth: {
        _scheme: '~/app/firebaseAuthScheme.js'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/admin/dashboard'
    }
  },

  // router config
  router: {
    base: '/',
    middleware: ['auth']
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/vuetify-custom-variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: colors.blue,
          accent: colors.amber,
          secondary: colors.blue.darken1,
          success: colors.green,
          info: colors.lightBlue,
          warning: colors.amber,
          error: colors.red
        },
        dark: {
          primary: colors.blue,
          accent: colors.amber,
          secondary: colors.blue.lighten1,
          success: colors.green,
          info: colors.lightBlue,
          warning: colors.amber,
          error: colors.red
        }
      }
    },
    lang: {
      locales: { es, en },
      current: 'es'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
