<template>
  <article>
    <img class="mainImage" :src="currentPost.thumbnail">
    <div class="body" v-html="currentBody"> </div>
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
        return this.$store.getters.loadedPosts.find(el => el.date +"_"+el.title == this.$route.params.title)        
      },
      currentBody(){
        return markdown.toHTML(this.currentPost.body)
      }
}
}
</script>

<style scoped>
.body{
  padding:20px;
  text-align:center;
}
.mainImage{
  display:block;
  width:30%;
  margin: 0 auto;
}
</style>
