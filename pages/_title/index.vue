<template>
  <article>
    <div v-html="currentPost.body"> </div>
  </article>
</template>

<script>
import {markdown} from 'markdown';
import { posts } from '~/pages/index'

export default {
    compononents:{
      posts
    },
    data() {
    const context = require.context('~/content/blog/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));
    const currentPost = posts.find(el => el.title == this.$route.params.title)
    currentPost.body=markdown.toHTML(currentPost.body)
    return {currentPost}
  },
    methods() { 
  
  }
}
</script>

