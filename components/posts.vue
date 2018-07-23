<template>
    <div class="container">
      <div class="cont">
        <div class="head">
            <p class="headTitle">{{posts[0].type=="local" ? 'Latest crypto news' : 'Our company news'}}</p>
            <div class="sortButtons">
            <button :class="{active : newest}" v-on:click="sortedByDate">Newest </button>
            <button :class="{active : !newest}" v-on:click="sortedByPopular">Popular</button>
            </div> 
            </div>
        </div>
        <ul class="posts" :class="{scroll:scroll}">
            <li class="post" v-for="post in displayedPosts"
                :key="post.date">
                    <div class="postCont">
                        <nuxt-link :to="post._path">
                            <div class="img" :style="{backgroundImage: `url(${post.thumbnail})`}">
                              <div class="hover">
                              <div class="circle">></div>
                              </div>
                            </div>
                            <p class="date">{{post.date.substring(0,10)}} | {{post.comment}} comments</p>
                            <p class="title">{{post.title}}</p>
                        </nuxt-link>
                   </div>
            </li>
              <div :class="{noPosts:noPosts}" class="gradient">
            <button class="showMore">More news</button>
            </div>
      </ul>
      </div>
</template>

<script>
export default {
  props: ["posts"],
  data() {
    return {
      newest: true,
      scroll: false,
      noPosts: false
    };
  },
  computed: {
    displayedPosts() {
      switch (this.$mq) {
        case "sm":
          return this.posts.slice(0, 3);
          break;
        case "md":
          return this.posts.slice(0, 6);
          break;
        case "lg":
          return this.posts.slice(0, 9);
          break;
        default:
          return this.posts.slice(0, 9);
      }
    }
  },
  watch: {
    $mq() {
      this.addGradient();
    }
  },
  mounted() {
    this.addGradient();
  },
  methods: {
    sortedByPopular() {
      this.newest = false;
      this.posts.sort((a, b) => {
        return a.comment < b.comment || -(a.comment > b.comment);
      });
    },
    sortedByDate() {
      this.newest = true;
      this.posts.sort((a, b) => {
        return a.date < b.date || -(a.date > b.date);
      });
    },
    showMore() {
      this.scroll = true;
    },
    addGradient() {
      (this.displayedPosts.length < 3 && this.$mq == "sm") ||
      (this.displayedPosts.length < 5 && this.$mq == "md") ||
      (this.displayedPosts.length < 7 && this.$mq == "lg")
        ? (this.noPosts = true)
        : (this.noPosts = false);
    }
  }
};
</script>

<style scoped>
.cont {
  margin: 15px;
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.headTitle {
  font-weight: bold;
  font-size: 19px;
}

.sortButtons {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
}
.sortButtons button {
  cursor: pointer;
  color: #8e8e8e;
  margin: 0 5px 0 5px;
  background: none;
  border: none;
  padding: 0 !important;
  font: inherit;
  font-size: 13px;
}
button.active {
  font-weight: bold;
  color: #457dd0;
}
.img {
  width: 100%;
  flex: 1;
  background-size: cover;
  display: flex;
  background-position: 50% 50%;
}
.hover {
  width: 100%;
  height: auto;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(247, 251, 43, 0.7);
}
li:hover .postCont a .img .hover {
  display: flex;
}
li:hover .postCont a .title {
  color: #8e8e8e;
}
.circle {
  padding: 20px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  text-align: left;
  font-size: 15px;
  font-weight: bold;
}

ul.posts {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  list-style: none;
  padding: 0;
  max-height: 93vh;
  overflow: hidden;
  min-height: 500px;
}
li.post {
  flex-basis: 100%;
  height: 37vh;
  min-height: 200px;
}
.postCont {
  padding: 15px;
  height: 100%;
}
.gradient {
  height: 19vh;
  min-height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.date {
  color: #8e8e8e;
  font-weight: 500;
  font-size: 13px;
  margin: 10px 0 10px 0;
}

.postCont a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: black;
}
ul.scroll {
  overflow: auto;
}
.showMore {
  color: white;
  background-color: #2b7ffb;
  padding: 10px 50px 10px 50px;
  border-radius: 30px;
  font-weight: bold;
  border: 0;
}
.noPosts {
  position: static;
  align-items: flex-start;
}
@media screen and (min-width: 750px) {
  li.post {
    flex-basis: 50%;
    height: 25vh;
    min-height: 200px;
  }
  .date {
    margin: 10px 0 5px 0;
    font-size: 14px;
  }
  .title {
    font-size: 16px;
  }
  ul.posts {
    height: 62.5vh;
    min-height: 500px;
  }
  .gradient {
    height: 12.5vh;
    min-height: 100px;
  }
  .head {
    flex-direction: row-reverse;
  }
  .headTitle {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 22px;
    z-index: -1;
  }
  .posts {
    margin-top: 50px;
  }
  .img {
    flex: 0;
    min-height: 70%;
  }
}
@media screen and (min-width: 1366px) {
  .headTitle {
    position: initial;
    text-align: left;
  }
  li.post {
    flex-basis: 33.3%;
    height: 30vh;
  }
  ul.posts {
    height: 77.5vh;
  }
  .gradient {
    height: 17.5vh;
  }
  .head {
    flex-direction: row;
  }
}
</style>