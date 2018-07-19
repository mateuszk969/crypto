<template>
    <div class="container">
      <div class="cont">
        <div class="head">
            <p class="headTitle">{{posts[0].type=="local" ? 'Latest crypto news' : 'Our company news'}}</p>
            <div class="sortButtons">
            <p :class="{active : newest}" v-on:click="sortedByDate">Newest </p>
            <p :class="{active : !newest}" v-on:click="sortedByPopular">Popular</p>
            </div> 
            </div>
        </div>
        <ul class="posts" :class="{scroll:scroll}">
            <li class="post" v-for="post in displayedPosts"
                :key="post.date">
                    <div class="postCont">
                        <nuxt-link :to="post._path">
                            <div class="img" :style="{backgroundImage: `url(${post.thumbnail})`}"></div>
                            <p class="date">{{post.date.substring(0,10)}} | {{post.comment}} comments</p>
                            <p class="title">{{post.title}}</p>
                        </nuxt-link>
                   </div>
            </li>
              <div class="gradient">
            <button class="showMore" @click="showMore">More news</button>
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
      scroll: false
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
  methods: {
    sortedByPopular() {
      return this.posts.sort((a, b) => {
        this.newest = false;
        return a.comment < b.comment;
      });
    },
    sortedByDate() {
      return this.posts.sort((a, b) => {
        this.newest = true;
        return a.date < b.date;
      });
    },
    showMore() {
      this.scroll = true;
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
.sortButtons p {
  color: #8e8e8e;
  font-size: 13px;
  margin: 0 6px 0 6px;
}
p.active {
  font-weight: bold;
  color: #457dd0;
}
.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
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
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  padding: 0;
  height: 93vh;
  overflow: hidden;
}
li.post {
  flex-basis: 100%;
  height: 37vh;
}
.postCont {
  padding: 15px;
  height: 100%;
}
.gradient {
  height: 19vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.date {
  color: grey;
  font-weight: bold;
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
@media screen and (min-width: 750px) {
  li.post {
    flex-basis: 50%;
    height: 25vh;
  }
  .date {
    margin: 15px 0 15px 0;
  }
  ul.posts {
    height: 62.5vh;
  }
  .gradient {
    height: 12.5vh;
  }
  .head {
    flex-direction: column-reverse;
  }
  .headTitle {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 22px;
  }
  .posts {
    margin-top: 50px;
  }
}
</style>