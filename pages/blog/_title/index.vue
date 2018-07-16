<template>
  <article>
    <img class="mainImage" :src="currentPost ? currentPost.thumbnail : ''">
    <div class="body" v-html="currentBody"> </div>
    <div class="disqus">
      <no-ssr>
    <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId" :title="currentPost.title"></vue-disqus>
    </no-ssr>
    </div>
      </article>
</template>

<script>
import { markdown } from "markdown";
import NoSSR from "vue-no-ssr";

export default {
  components: {
    "no-ssr": NoSSR
  },
  computed: {
    currentPost() {
      return this.$store.getters.loadedPosts.find(
        el => el._path == this.$route.path
      );
    },
    currentBody() {
      return markdown.toHTML(this.currentPost.body);
    }
  },
  data(){
    return{
      disqusShortname:"https-serene-davinci-42d559-netlify-com",
      disqusId:"`${this.disqusShortname}-${this.currentPost.title}`"
    }
  }
};
</script>

<style scoped>
.body {
  margin: 0 auto;
  width: 80%;
  padding: 20px;
  text-align: center;
}
.mainImage {
  display: block;
  width: 30%;
  margin: 0 auto;
}
.disqus {
  width: 96%;
  margin: 0 auto;
}
</style>
