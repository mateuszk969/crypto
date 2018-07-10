import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
      state: {
        loadedPosts:[]
      },
      mutations:{
        setPosts: function (state, posts){
           state.loadedPosts = posts
          }
      },
      actions: {
       async nuxtServerInit(vuexContext, context){
          const response = await require.context('~/content/blog/posts/', false, /\.json$/);
          const posts = await response.keys().map(key => ({
            ...response(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`
          }));
          let {data} = await axios.get('https://disqus.com/api/3.0/threads/list.json?api_secret=N2oxM8qbnxzBjbx9NCbaa4MJgbLiVKyXpVrNKDJjvURaRMdpJ0u59o2pRVLTzGFz&forum=https-serene-davinci-42d559-netlify-com');
          for (let i=0; i<posts.length; i++){
            for (let j = 0; j<data.response.length; j++){
              posts[i].comment = 0
              if(posts[i].title==data.response[j].title){
                posts[i].comment = data.response[j].posts
              }
            }
          }
          await vuexContext.commit('setPosts', posts)
         
        },
        setPosts(vuexContext, posts){
          vuexContext.commit('setPosts', posts)
        }
      },
      getters:{
        loadedPosts(state){
          return state.loadedPosts
        }
      }
    })
  }
  
  export default createStore