<template>
  <article>
    <div v-html="currentBody"> </div>
    <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId" :title="currentPost.title"></vue-disqus>
      </article>
</template>

<script>
import {markdown} from 'markdown';


export default {
      computed: {
        disqusId () { 
        return `${this.disqusShortname}-${this.currentPost.title}`
      },
       disqusShortname () {
        return 'https-serene-davinci-42d559-netlify-com'
      },
      currentPost(){
        return this.$store.getters.loadedPosts.find(el => el.title == this.$route.params.title)        
      },
      currentBody(){
        return markdown.toHTML(this.currentPost.body)
      }
}
}
</script>

