import Vue from 'vue'
import Vuex from 'vuex'

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