<template>
<div class="slider">
    <ul class="slides">
			<div id="current" class="mainPost" :style="{backgroundImage: `url(${playslides.thumbnail})`}">
        <div class="gradient">
									  <div class="postCont">
						            <p class="mainDate">{{playslides.date.substring(0,10)}} | {{playslides.comment}} comments</p>
                        <nuxt-link :to="playslides._path">
                            <p class="mainTitle">{{playslides.title}}</p>
                        </nuxt-link>
                         <div class="yellowBar"></div>
                   </div>
                   </div>
						</div>
			<div id="prev" class="mainPost" :style="{backgroundImage: `url(${previous.thumbnail})`}">
        <div class="gradient">
									  <div class="postCont">
						            <p class="mainDate">{{previous.date.substring(0,10)}} | {{previous.comment}} comments</p>
                        <nuxt-link :to="previous._path">
                            <p class="mainTitle">{{previous.title}}</p>
                        </nuxt-link>
                        <div class="yellowBar"></div>
                   </div>
                   </div>
						</div>
    </ul>
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i">
        <div class="item" :style="{backgroundImage: `url(${slide.thumbnail})`}">
          <div class="smallGradient">
					<nuxt-link :to="slide._path">
            <p class="date">{{slide.date.substring(0,10)}} | {{slide.comment}} comments</p>
          <p class="title">{{slide.title}}</p>
					 </nuxt-link>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      current: 0,
      previous: {...this.$store.getters.loadedPosts[0]},
      playslides: {...this.$store.getters.loadedPosts[0]},
      timeout: 10000,
      width:0,
    };
  },
  computed: {
    slides(){
     return (this.$mq == "sm" || this.$mq == "md" ? this.$store.getters.loadedPosts.slice(1, 3) : this.$store.getters.loadedPosts.slice(1, 4));
    }
  },
  methods: {
    selectSlide() {
      this.previous = this.playslides;
      this.slides.push(this.playslides);
      this.playslides = this.slides[0];
      this.slides.splice(0, 1);
      this.current++;
      if (this.current > this.slides.length) {
        this.current = 0;
      }
    }
  },
  mounted() {
    setInterval(this.selectSlide, this.timeout);
    setTimeout(function() {
      document.getElementById("current").className += " slideFromTop";
      document.getElementById("prev").className += " slideInDown";
    }, this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 50vh;
}
.slider ul {
  list-style: none;
}
.slides {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: top 800ms;
}
.slider .slides li {
  height: 100%;
}
.mainPost {
  width: 100%;
  height: 35vh;
  background-size: cover;
  background-position: 50% 50%;
}
.indicators {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow-x: scroll;
}
.indicators li {
  flex-basis: 50%;
}
.item {
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 17.5vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.item .title {
  margin: 15px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.postCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mainTitle {
  font-size: 22px;
  padding: 10px 20px 10px 20px;
  color: white;
  font-weight: bold;
  text-align: center;
}
.mainDate {
  font-size: 16px;
  font-weight: bold;
  color: #cecdd1;
  text-align: center;
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
  justify-content: center;
}
.smallGradient {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(36, 38, 54, 0) 0%,
    #232535 100%
  );
  display: flex;
  flex-direction: column-reverse;
}
.postCont a,
.item a {
  text-decoration: none;
}
.item .date {
  display: none;
}

.yellowBar {
  height: 6px;
  border-radius: 17px;
  background-color: #ffff1f;
  width: 30vw;
  margin: 20px auto 20px auto;
}

@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  15% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes slideInDown {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  15% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.slideInDown {
  -webkit-animation: slideInDown 10s infinite;
  animation: slideInDown 10s infinite;
}

#prev {
  background-size: cover;
  width: 100%;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  z-index: -1;
}

@-webkit-keyframes slideFromTop {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  15% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideFromTop {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  15% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideFromTop {
  -webkit-animation: slideFromTop 10s infinite;
  animation: slideFromTop 10s infinite;
}

@media screen and(min-width:750px) {
  .mainPost {
    height: 50vh;
  }
  .indicators li {
    padding: 0 15px 20px 10px;
  }
  .postCont {
    position: absolute;
    top: 12.5vh;
  }
  .yellowBar {
    width: 15vw;
  }
  .mainDate {
    font-size: 19px;
  }
  .mainTitle {
    font-size: 25px;
    padding: 10px 30px 10px 30px;
  }
  .item .title {
    font-size: 16px;
    text-align: left;
  }
  .smallGradient {
    justify-content: center;
    background-image: linear-gradient(270deg, rgba(36,38,54,0) 0%, #232535 100%);
  }
  .item .date{
    display:block;
     font-size: 14px;
  font-weight: bold;
  color: #cecdd1;
  text-align: left;
  margin:15px 0px 0 15px;
  }
}
</style>