const pkg = require('./package');
const fs = require('fs');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#FFFFFF'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/css/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/disqus'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-mq', {
      breakpoints: {
        sm: 750,
        md: 1366,
        lg: Infinity,
      }
    }],
    "nuxt-netlify-cms"
  ],

  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets: [
        'es2015',
        'stage-2',
      ],
      plugins: [
        'transform-runtime',
      ]
    },
    vendor: ['babel-polyfill',
      'axios'
    ],

    extend(config, ctx) {

    }
  },

  generate: {
    routes: function () {
      const response = fs.readdirSync('content/blog/posts/');
      const posts = response.map((el) => {
        return `blog/${el.substring(0,el.length-5)}`
      });
      return posts
    }
  }
}
