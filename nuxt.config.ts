// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  devtools: { enabled: true },
  target: 'static',

  modules: [
    // '@nuxt/content',
    '@nuxt/image'],

  app: {

    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      charset: 'utf-8',
      title: 'Bloopers',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
    }
  },

  // css: ['animate.css/animate.min.css'],
  image: {
    quality: 80,
    format: ['webp'],

    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }, // image: {
  //   dir: 'assets/logo',
  //   netlify: {
  //     baseURL: 'https://shinebhola.netlify.app'
  //   },
  //   quality: 80,
  //   format: ['webp'],
  //   screens: {
  //     xs: 320,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
  //     xxl: 1536,
  //     '2xl': 1536
  //   },
  // },
  // content: {
  //   markdown: {
  //     toc: {
  //       depth: 3,
  //       searchDept: 3,
  //     }
  //   },
  //   highlight: {
  //     theme: "dracula-soft"
  //   }
  // }
  image: {
    quality: 80,
    format: ['webp'],

    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  compatibilityDate: '2024-07-09'
})