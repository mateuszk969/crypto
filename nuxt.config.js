const pkg = require('./package');
const fs = require('fs');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/disqus'
  ]
  ,

  /*
  ** Nuxt.js modules
  */
  modules: [
    "nuxt-netlify-cms"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   
    vendor: ['axios'],
    
    extend(config, ctx) {
      
    }
  },

  router:{
    linkActiveClass: 'active-link'
  },

  generate: {
    routes:function(){
      const response = fs.readdirSync('content/blog/posts/');
      const posts = response.map((el) => {
     return el.substring(0,el.length-5)
      });
          return posts
    }
  }
}
