<template>
    <div class="container">
            <p class="headTitle">News</p>
            <ul class="categories">
                <li :class="{active:filter==''}">all</li>
                <li :class="{active:filter=='currencies'}">Crypto Currencies</li>
                <li :class="{active:filter=='law'}">Law & Regulations</li>
                <li :class="{active:filter=='wellness'}">Wellness and More</li>
                <li :class="{active:filter=='crypto'}">Crypto Currencies</li>
                <li :class="{active:filter=='regulations'}">Law & Regulations</li>
            </ul>
                <ul class="postList">
                    <li class="post" v-for="post in posts"
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
                <div v-if="page_number>1" class="prev"><nuxt-link :to="prev">prev</nuxt-link></div>
                <div v-if="page_number>2" class="first"><nuxt-link :to="prev">1</nuxt-link></div>
                <div class="current">{{page_number}}</div>
                <div v-if="allPages>page_number" class="last"><nuxt-link :to="prev">{{allPages}}</nuxt-link></div>
                <div v-if="allPages>page_number" class="next"><nuxt-link :to="next">next</nuxt-link></div>
      </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      page_number: this.$route.params.page_number,
      category: this.$route.params.category
    };
  },
  computed: {
    posts() {
      return this.$store.getters.loadedPosts
        .filter(el => {
          return this.category == "all" ? el : el.category == this.category;
        })
        .slice(
          this.page_number == "1"
            ? 0
            : (parseInt(this.page_number) - 1) * 12 - 1,
          12
        );
    },
    allPages() {
      return Math.ceil(
        this.$store.getters.loadedPosts.filter(el => {
          return this.category == "all" ? el : el.category == this.category;
        }).length / 12
      );
    },
    prev() {
      return `/news/${this.category}/${(
        parseInt(this.page_number) - 1
      ).toString()}`;
    },
    next() {
      return `/news/${this.category}/${(
        parseInt(this.page_number) + 1
      ).toString()}`;
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
ul {
  padding-left: 0;
}
.categories {
  margin: 15px 0 20px 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
}
.categories li {
  padding: 0 15px 0 15px;
}
.cont {
  margin: 15px;
}
.headTitle {
  margin: 30px 0 20px 15px;
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

ul.postList {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  list-style: none;
  padding: 0;
}
li.post {
  flex-basis: 100%;
  height: 37vh;
  min-height: 200px;
  max-height: 250px;
}
.postCont {
  padding: 15px;
  height: 100%;
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

.sortedPosts {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
}
ul.paginate-links >>> li {
  padding: 0 5px 0 5px;
  cursor: pointer;
}
ul.paginate-links >>> li.active {
  font-weight: bold;
}
ul.paginate-links >>> li.disabled {
  display: none;
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
  .headTitle {
    width: 100%;
    text-align: center;
    font-size: 22px;
  }
  .postList {
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
}
</style>