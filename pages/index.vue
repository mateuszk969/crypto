<template>
<div>
    <slider/>
  <section class="container"> 
    <div>
      <posts class="posts" :posts="localPosts"></posts>
      <posts class="posts" :posts="worldPosts"></posts>
    </div>
  </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import posts from "@/components/posts";
import slider from "@/components/slider";

export default {
  components: {
    posts,
    slider
  },

  data() {
    return {
      localPosts: this.$store.getters.loadedPosts.filter(el => {
        return el.category == "local";
      }),
      worldPosts: this.$store.getters.loadedPosts.filter(el => {
        return el.category != "local";
      })
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  display: inline-block;
  margin: 10px;
}

.links {
  width: 100%;
}
li img {
  width: 100px;
  margin: 0 auto;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.posts {
  margin-top: 30px;
}
</style>
