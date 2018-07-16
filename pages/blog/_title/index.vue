<template>
  <article>

    <div class="disqus">
    <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId"></vue-disqus>
    </div>
      </article>
</template>

<script>
import { markdown } from "markdown";

export default {
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
  disqusId() {
    return `${this.disqusShortname}-title`;
  },
  disqusShortname() {
    return "https-serene-davinci-42d559-netlify-com";
  },

  watch: {
    "$route.params.slug"(curr, old) {
      this.$refs.disqus.init();
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
