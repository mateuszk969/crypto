<template>
  <article>
    <h1>{{ markdown.toHTML(currentPost.body) }} </h1>
  </article>
</template>

<script>
import {markdown} from 'markdown';

export default {
    data() {
    const context = require.context('~/content/blog/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));
    const currentPost = posts.find(el => el.title == this.$route.params.title)
    return {currentPost}
  },
    created() { 
  }
}
</script>

