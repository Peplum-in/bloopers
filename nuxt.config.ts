// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  modules: [
    '@nuxt/content',
    '@nuxt/image',
  ],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Shine Bhola',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bloop-fav.png' }
      ],
    }
  },
  css: ['animate.css/animate.min.css'],

  // image: {
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
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDept: 3,
      }
    },
    highlight: {
      theme: "dracula-soft"
    }
  }
})