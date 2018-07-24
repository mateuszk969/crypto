<template>
  <article>
    <div class="mainImage" :style="{backgroundImage: `url(${currentPost.thumbnail})`}">
      <div class="gradient">
         <div class="container mainData">
           <p class="date">{{currentPost.date.substring(0,10)}} | {{currentPost.comment}} COMMENST</p>
           <h1 class="title">{{currentPost.title}}</h1>
           <p class="category">Home / News / crypto / Trello {{currentPost.title}}</p>
        </div>
      </div>
    </div>
    <div class="row container">
      <div class="left">
        <div class="body " v-html="currentBody" /> 
          <p class="heading">Gallery</p>
           <ul class="gallery container">
             <li class="image" v-for="(item,index) in gallery" :key="index">
              <img :src="item">
             </li>
             <li class="image instagram"> 
               <a href="https://www.instagram.com" target="_blank">
                 <img src="@/assets/insta.jpg">
               </a>
             </li>
          </ul>
          <div class="disqus">
           <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId" :title="currentPost.title"></vue-disqus>
          </div>
         </div>
           <div class="right">
             <lastPosts />
           </div>
        </div>
      </article>
</template>

<script>
import lastPosts from "@/components/lastPosts";
import { markdown } from "markdown";
import Vue from "vue";
import VueDisqus from "vue-disqus";

Vue.use(VueDisqus);

export default {
  components: {
    lastPosts
  },
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
      return new Array(2).fill(this.currentPost.thumbnail);
    }
  }
};
</script>

<style scoped>
.row {
  margin: 20px;
  text-align: left;
  background-color: white;
}
.body >>> p {
  padding: 5px 0 5px 0;
}
.body >>> h1,
h2 {
  padding: 10px 0 10px 0;
}
.body >>> img {
  padding: 5px 0 5px 0;
  max-width: 100%;
}
.category {
  display: none;
}
.mainImage {
  width: 100%;
  min-height: 300px;
  height: 50vh;
  margin: 0 auto;
  background-size: cover;
  background-position: 50% 50%;
}
.gradient {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(36, 38, 54, 0) 0%,
    #232535 100%
  );
}
.gradient .container {
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
  font-weight: bold;
}
.heading {
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #444654;
}
.disqus {
  width: 96%;
  margin: 0 auto;
  margin-top: 15px;
}
.gallery {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%;
  width: 100%;
}
.image {
  width: 50%;
  padding: 10px 10px 10px 0;
  margin: 0 auto;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.instagram a {
  display: block;
  height: 100%;
  width: 100%;
  background-color: #393b48;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.instagram img {
  width: auto;
  height: auto;
}
@media screen and (min-width: 750px) {
  .row {
    border-radius: 10px;
    margin-top: -40px;
    padding: 45px;
  }
  .body >>> p {
    font-size: 17px;
  }
  .mainImage {
    height: 45vh;
    min-height: 400px;
  }
  .title {
    max-width: 70%;
    padding-bottom: 25px;
  }
  .category {
    display: block;
    margin-bottom: 100px;
    color: #828491;
    font-weight: 600;
  }
  .heading {
    margin: 30px 0 15px 0;
    font-size: 25px;
  }
  .disqus {
    width: 100%;
    margin-top: 25px;
  }
  .image {
    width: 33.3%;
  }
}
@media screen and (min-width: 1366px) {
  .row {
    margin: 0 auto;
    margin-top: -50px;
    display: flex;
    flex-direction: row;
  }
  .left {
    width: 70%;
    padding-right: 5%;
  }
  .right {
    width: 30%;
  }
  .title {
    text-align: left;
    padding-left: 0;
  }
  .mainImage {
    height: 50vh;
    width: 96%;
    border-radius: 10px;
  }
  .gradient {
    border-radius: 10px;
  }
  .gradient .mainData {
    align-items: flex-start;
    padding-left: 45px;
  }
  .category {
    margin-bottom: 90px;
  }
  .date {
    font-size: 14px;
    padding: 10px 20px 10px 20px;
  }
  .title {
    font-size: 30px;
  }
  .disqus {
    margin-top: 40px;
  }
  .image {
    width: 25%;
    margin: 0;
  }
  .gallery.container {
    height: auto;
  }
}
</style>
