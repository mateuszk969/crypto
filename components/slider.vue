<template>
<div class="slider">
    <ul class="slides">
			<div id="current" class="mainPost slideFromTop" :style="{backgroundImage: `url(${playslides.thumbnail})`}">
        <div class="gradient">
									  <div class="postCont">
						            <p class="mainDate">{{playslides.date.substring(0,10)}} | {{playslides.comment}} comments</p>
                        <nuxt-link :to="playslides._path">
                            <p class="mainTitle">{{playslides.title}}</p>
                        </nuxt-link>
                         <div id="bar" class="yellowBar timer"></div>
                   </div>
                   </div>
						</div>
			<div id="prev" class="mainPost slideInDown" :style="{backgroundImage: `url(${previous.thumbnail})`}">
        <div class="gradient">
									  <div class="postCont">
						            <p class="mainDate">{{previous.date.substring(0,10)}} | {{previous.comment}} comments</p>
                        <nuxt-link :to="previous._path">
                            <p class="mainTitle">{{previous.title}}</p>
                        </nuxt-link>
                         <div class="empty"></div>
                   </div>
                   </div>
						</div>
    </ul>
    <div class="container">
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i">
        <div class="item opacity" :style="{backgroundImage: `url(${slide.thumbnail})`}">
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      current: 0,
      previous: { ...this.$store.getters.loadedPosts[0] },
      playslides: { ...this.$store.getters.loadedPosts[0] },
      slides: this.$store.getters.loadedPosts.slice(1, 4),
      timeout: 10000,
      width: 0,
      added: 0
    };
  },
  watch: {
    $mq() {
      if ((this.$mq == "lg") & (this.slides.length == 2)) {
        this.added == 0
          ? this.slides.push(this.$store.getters.loadedPosts[3])
          : this.slides.push(this.added);
      }
      if ((this.$mq == "md" || this.$mq == "sm") & (this.slides.length == 3)) {
        this.added = this.slides.pop();
      }
    }
  },

  methods: {
    selectSlide() {
      this.slides.push(this.playslides);
      this.playslides = this.slides.shift();
      this.current++;
      if (this.current > this.slides.length) {
        this.current = 0;
      }
      setTimeout(() => (this.previous = this.playslides), 5000);
    }
  },
  mounted() {
    if (this.$mq == "md" || this.$mq == "sm") {
      this.added = this.slides.pop();
    }
  },
  created() {
    setInterval(this.selectSlide, this.timeout);
  }
};
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}
.container {
  position: relative;
  margin: 0 auto;
}
.slider {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 55vh;
  min-height: 250px;
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
}
.slider .slides li {
  height: 100%;
}
.mainPost {
  width: 100%;
  height: 35vh;
  min-height: 175px;
  background-size: cover;
  background-position: 50% 50%;
}
.indicators {
  padding: 0;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 100px;
  height: 20vh;
}
.indicators li {
  flex-basis: 50%;
  min-width: 50%;
  max-height: 100%;
}
.item {
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.item .title {
  margin: 15px;
  font-size: 14px;
  font-weight: 500;
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
  font-size: 15px;
  font-weight: 500;
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
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  25% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
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
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  25% {
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
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}

#prev {
  background-size: cover;
  width: 100%;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  z-index: -1;
}
#prev .mainTitle {
  margin-bottom: 6px;
}

@keyframes slideFromTop {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  15% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  25% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes slideFromTop {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  15% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  25% {
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
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}

@-webkit-keyframes timer {
  0% {
    width: 10vw;
  }
  15% {
    width: 10vw;
  }
  100% {
    width: 0;
  }
}

@keyframes timer {
  0% {
    width: 10vw;
  }
  15% {
    width: 10vw;
  }
  100% {
    width: 0;
  }
}

.timer {
  -webkit-animation: timer 10s infinite;
  animation: timer 10s infinite;
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes opacity {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.opacity {
  -webkit-animation: opacity 10s infinite;
  animation: opacity 10s infinite;
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}
@media screen and(min-width:750px) {
  .slider {
    min-height: 300px;
    height: 45vh;
  }
  .mainPost {
    height: 50vh;
    min-height: 300px;
  }
  .indicators {
    height: 17.5vh;
    min-height: 100px;
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
    font-size: 18px;
  }
  .mainTitle {
    font-size: 30px;
    padding: 10px 30px 10px 30px;
  }
  .item .title {
    font-size: 18px;
    text-align: left;
  }
  .smallGradient {
    justify-content: center;
  }
  .item .date {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #cecdd1;
    text-align: left;
    margin: 15px 0px 0 15px;
  }
}
@media screen and (min-width: 1366px) {
  .slider {
    height: 60vh;
  }
  .mainPost {
    height: 60vh;
  }
  .indicators {
    flex-direction: column;
    width: 40%;
    height: 92%;
    top: 4%;
    right: 0;
  }
  .indicators li {
    padding: 10px;
    height: 33.33%;
  }
  .item {
    height: 100%;
  }
  .postCont {
    width: 100%;
    top: 0;
    max-width: 1026px;
    margin: 0 auto;
    position: relative;
    padding: 20px;
  }
  .mainDate,
  .mainTitle {
    text-align: left;
  }
  .mainTitle {
    padding: 30px 0 40px 0;
    max-width: 50%;
    font-size: 30px;
  }
  .date {
    font-size: 13px;
  }
  .title {
    max-width: 75%;
  }
  .yellowBar {
    width: 10vw;
    margin: 0;
  }
  .gradient {
    background-image: linear-gradient(
      270deg,
      rgba(36, 38, 54, 0) 0%,
      #232535 100%
    );
  }
  .date,
  .title {
    padding-left: 20px;
  }
  @media screen and (min-width: 1920px) {
    .slider {
      height: 55vh;
    }
  }
}
</style>