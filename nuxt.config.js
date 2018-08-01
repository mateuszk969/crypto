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
        charset: 'utf-8',
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
  plugins: [],

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
  ],

  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ['transform-runtime']
    },
    vendor: ['babel-polyfill', 'eventsource-polyfill',
      'axios'
    ],


  },

  generate: {
    routes() {
      const response = fs.readdirSync('content/blog/posts/');
      let page_numbers = {
        all: response.length
      };
      let news = [];
      let categories = response.map(el => {
        return require(`./content/blog/posts/${el}`)
      }).map(el => {
        return el.category
      }).forEach(el => {
        page_numbers[el] = (page_numbers[el] || 0) + 1;
      })
      for (const prop in page_numbers) {
        if (page_numbers.hasOwnProperty(prop)) {
          for (let i = 0; i < page_numbers[prop]; i += 12)
            news.push(`news/${prop}/${(i/12)+1}`)
        }
      };
      const posts = response.map((el) => {
        return `blog/${encodeURI(el.substring(17,el.length-5))}`
      });
      return [...news]
    }
  }
}
