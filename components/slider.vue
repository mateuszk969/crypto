<template>
<div class="slider">
    <ul class="slides">
			<div id="test" class="mainPost" :style="{backgroundImage: `url(${playslides.thumbnail})`}">
									  <div class="postCont">
						            <p class="mainDate">{{playslides.date.substring(0,10)}} | {{playslides.comment}} comments</p>
                        <nuxt-link :to="playslides._path">
                            <p class="mainTitle">{{playslides.title}}</p>
                        </nuxt-link>
                   </div>
						</div>
			<div id="test2" class="mainPost" :style="{backgroundImage: `url(${previous.thumbnail})`}">
									  <div class="postCont">
						            <p class="mainDate">{{previous.date.substring(0,10)}} | {{previous.comment}} comments</p>
                        <nuxt-link :to="previous._path">
                            <p class="mainTitle">{{previous.title}}</p>
                        </nuxt-link>
                   </div>
						</div>
    </ul>
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)">
        <div class="item" :style="{backgroundImage: `url(${slide.thumbnail})`}">
					<nuxt-link :to="slide._path">
          <p class="title">{{slide.title}}</p>
					 </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  data() {
    return {
      slides: JSON.parse(
        JSON.stringify(this.$store.getters.loadedPosts)
      ).splice(1, 2),
			current: 0,
			previous: JSON.parse(JSON.stringify(this.$store.getters.loadedPosts[0])),
			playslides: JSON.parse(JSON.stringify(this.$store.getters.loadedPosts[0])),
			timeout:10000,
    };
  },
  computed: {},
  methods: {
   selectSlide() {
			this.previous =	this.playslides
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
    document.getElementById('test').className += ' slideFromTop';
	}, this.timeout); 
	setTimeout(function() {
    document.getElementById('test2').className += ' slideInDown';
  }, this.timeout);
  }
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
  display: flex;
  justify-content: center;
}
.indicators {
  padding: 0;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
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
  background-color: rgba(0,0,0,0.5);
}
.postCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mainTitle {
  font-size: 25px;
  padding:10px 20px 10px 20px;;
  color: white;
  text-align: center;
}
.mainDate {
  font-size: 18px;
  font-weight:bold;
  color: #cecdd1;
  text-align: center;
}
.postCont a,
.item a {
  text-decoration: none;
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
	100%{
		-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
	}
}

.slideInDown {
	-webkit-animation: slideInDown 10s infinite;
  animation: slideInDown 10s infinite;
}

#test2{
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

.slideFromTop{
	-webkit-animation: slideFromTop 10s infinite;
  animation: slideFromTop 10s infinite;
}

@media screen and(min-width:750px){
  .mainPost{
    height:50vh;
  }
  .indicators li {
   padding:0 15px 20px 10px;
}
.postCont{
  position:absolute;
  top:15vh;
}
}
</style>