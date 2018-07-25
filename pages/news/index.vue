<template>
    <div class="container">
            <p class="headTitle">News</p>
            <ul class="categories">
                <li @click="filter = ''" :class="{active:filter==''}">all</li>
                <li @click="filter = 'currencies'" :class="{active:filter=='currencies'}">Crypto Currencies</li>
                <li @click="filter = 'law'" :class="{active:filter=='law'}">Law & Regulations</li>
                <li @click="filter = 'wellness'" :class="{active:filter=='wellness'}">Wellness and More</li>
                <li @click="filter = 'crypto'" :class="{active:filter=='crypto'}">Crypto Currencies</li>
                <li @click="filter = 'regulations'" :class="{active:filter=='regulations'}">Law & Regulations</li>
            </ul>
            <paginate
             name="sortedPosts"
             :list="sortedPosts"
             :per="6"
            >
                <ul class="postList">
                    <li class="post" v-for="post in paginated('sortedPosts')"
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
            </paginate>
            <paginate-links for="sortedPosts" 
            :async="true" 
            :limit="6" 
            :show-step-links="true"
             @change="scrollTop"
            :hide-single-page="true"
             />
      </div>
</template>

<script>
import Vue from "vue";
import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);

export default {
  data() {
    return {
      posts: this.$store.getters.loadedPosts,
      paginate: ["sortedPosts"],
      filter: ""
    };
  },
  computed: {
    sortedPosts() {
      return this.posts.filter(el => {
        return el.category.indexOf(this.filter) != -1;
      });
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