<template>
  <article>
    <div class="mainImage" :style="{backgroundImage: `url(${currentPost.thumbnail})`}">
      <div class="gradient">
        <p class="date">{{currentPost.date.substring(0,10)}} | {{currentPost.comment}} COMMENST</p>
        <h1 class="title">{{currentPost.title}}</h1>
      </div>
    </div>
    <div class="body" v-html="currentBody" /> 
      <ul class="gallery">
        <li v-for="(item,index) in gallery" :key="index">
          <img class="image" :src="item">
        </li>
        <li class="instagram"></li>
      </ul>
    <div class="disqus">
    <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId" :title="currentPost.title"></vue-disqus>
    </div>
      </article>
</template>

<script>
import { markdown } from "markdown";

export default {
  computed: {
    disqusId() {
      return `${this.disqusShortname}-${this.currentPost.title}`;
    },
    disqusShortname() {
      return "https-serene-davinci-42d559-netlify-com";
    },
    currentPost() {
      return this.$store.getters.loadedPosts.find(
        el =>
          el._path == this.$route.path ||
          el._path == this.$route.path.slice(0, -1)
      );
    },
    currentBody() {
      return markdown.toHTML(this.currentPost.body);
    },
    gallery() {
      return new Array(3).fill(this.currentPost.thumbnail);
    }
  }
};
</script>

<style scoped>
.body {
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  text-align: left;
}
.mainImage {
  width: 100%;
  height: 50vh;
  margin: 0 auto;
}
.gradient {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(36, 38, 54, 0) 0%,
    #232535 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.title {
  text-align: center;
  padding: 35px 30px 50px 30px;
  font-size: 28px;
  color: white;
  font-weight: 600;
}
.date {
  color: #23262f;
  background-color: #f7fd17;
  padding: 15px 30px 15px 30px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 900;
}
.disqus {
  width: 96%;
  margin: 0 auto;
}
.gallery {
  list-style: none;
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: row;
}
.image {
  flex: auto;
  flex-basis: 100px;
}
</style>
