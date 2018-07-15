<template>
    <div>
        <div class="head">
            <h2>{{posts[0].type}} posts</h2> 
            <span v-on:click="sortedByDate">Newest </span>
            <span v-on:click="sortedByPopular">Popular</span>
        </div>
        <ul class="posts" v-bind:class="{scroll:scroll}">
            <li class="post" v-for="post in posts"
                :key="post.date">
                    <div class="postCont">
                        <nuxt-link :to='post.date.substring(0,10) + "-" + post.title'>
                            <img v-bind:src="post.thumbnail" />
                            <p class="date">{{post.date.substring(0,10)}} | {{post.comment}} comments</p>
                            <p class="title">{{post.title}}</p>
                        </nuxt-link>
                   </div>
            </li>
            <button class="showMore" @click="showMore">Show more</button>
      </ul>
      </div>
</template>

<script>
export default {
  props: ["posts"],
  data(){
      return{
          scroll:false,
          }
  },
  methods: {
    sortedByPopular() {
      return this.posts.sort((a, b) => {
        return a.comment < b.comment;
      });
    },
    sortedByDate() {
      return this.posts.sort((a, b) => {
        return a.date < b.date;
      });
    },
    showMore() {
      this.scroll=true;
    }
  }
};
</script>

<style scoped>
.head {
  display: inline-block;
}

.title h2 {
  text-align: left;
}

img {
  display: block;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  object-fit: cover;
}

ul.posts {
  position: relative;
  margin: 0 auto;
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  padding: 0;
  height: 400px;
  overflow: hidden;
}

li.post {
  flex-basis: 33%;
}

.post p {
  padding-top: 3%;
  text-align: left;
}

.postCont {
  padding: 5%;
}

.date {
  color: grey;
}

a {
  text-decoration: none;
  color: black;
}
ul.scroll{
    overflow:auto;
}
.showMore{
    margin:0 auto;
    position:absolute;
    bottom:10px;
}
</style>