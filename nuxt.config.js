module.exports = {
  cache: {
    max: 1000,
    maxAge: 900000
  },
  // render: {
  //   bundleRenderer: {
  //     cache: require('lru-cache')({
  //       max: 1000,
  //       maxAge: 1000 * 60 * 15
  //     })
  //   }
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css' },
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js' },
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
    vendor: ["axios"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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

  css: [
    "~assets/css/reset.css",
    "~assets/css/global.css",
    // "bootstrap/dist/css/bootstrap.min.css",
  ],

  plugins: [
    "~plugins/http"
  ],

  proxy: [
    [
      '/api',
      {
        target: 'http://118.190.149.38:8088/converge/online/quick/pay', // api主机
        pathRewrite: { '^/api': '/' }
      }
    ]
  ]
}
