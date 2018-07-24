<template>
    <div class="container">
            <p class="headTitle">Latest news</p>
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
      </ul>
                  <button class="showMore">More news</button>
      </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.$store.getters.loadedPosts.slice(0, 4),
      newest: true,
      scroll: false,
      noPosts: false
    };
  },
  computed: {
    displayedPosts() {
      switch (this.$mq) {
        case "md":
          return this.posts.slice(0, 4);
          break;
        default:
          return this.posts.slice(0, 3);
      }
    }
  }
};
</script>

<style scoped>
.headTitle {
  margin: 30px 0 20px 0;
  font-weight: bold;
  font-size: 19px;
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
  flex-direction: column;
  list-style: none;
  padding: 0;
  overflow: hidden;
}
li.post {
  flex-basis: 100%;
  height: 37vh;
  min-height: 200px;
}
.postCont {
  padding: 15px 0 15px 0;
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
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
}
.noPosts {
  position: static;
  align-items: flex-start;
}
@media screen and (min-width: 750px) {
  .postCont {
    padding: 0;
  }
  li.post {
    width: 50%;
    flex-basis: 50%;
    padding: 0 15px 0 15px;
    height: 20vh;
    min-height: 175px;
  }
  .date {
    margin: 10px 0 5px 0;
    font-size: 14px;
  }
  .title {
    font-size: 16px;
  }
  ul.posts {
    height: 40vh;
    min-height: 350px;
  }
  .head {
    flex-direction: row-reverse;
  }
  .headTitle {
    width: 100%;
    text-align: center;
    font-size: 22px;
  }
  .img {
    flex: 0;
    min-height: 60%;
  }
  .showMore {
    display: block;
    margin: 0 auto;
    width: 45%;
  }
}
@media screen and (min-width: 1366px) {
  .headTitle {
    margin: 0 0 20px 0;
    text-align: left;
  }
  li.post {
    padding: 0;
    width: 100%;
    flex-basis: 33%;
  }
  ul.posts {
    height: 60vh;
    min-height: 525px;
  }
  .showMore {
    width: 96%;
  }
}
</style>