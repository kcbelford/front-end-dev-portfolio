module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kevin Belford Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kevin Belford Front-End Developer Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kbfav.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/b07886f026.js', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ['bootstrap-vue/nuxt']
}
