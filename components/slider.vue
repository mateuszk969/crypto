<template>
<div class="slider">
    <ul class="slides">
        <div class="mainPost" :style="{backgroundImage: `url(${playslides.thumbnail ? playslides.thumbnail : slides[0].thumbnail})`}">
					 <div class="postCont">
						            <p class="date">{{playslides.date.substring(0,10)}} | {{playslides.comment}} comments</p>
                        <nuxt-link :to="playslides._path">
                            <p class="title">{{playslides.title}}</p>
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
			slides: JSON.parse(JSON.stringify(this.$store.getters.loadedPosts)).splice(1,2),
    current: 0,
    playslides: JSON.parse(JSON.stringify(this.$store.getters.loadedPosts[0])),
  }
    },
  computed: {
  },
    methods: {
    selectSlide() { 
      this.slides.push(this.playslides);
      this.playslides = this.slides[this.current];
      this.slides.splice(this.current,1);
			this.current++
			if(this.current>this.slides.length){
				this.current=0
			}
    },
  },
  mounted() {
		setInterval(this.selectSlide,3000);
  }
}
</script>

<style lang="scss" scoped>
.slider {
	 position: relative;
	 z-index: 1;
	 overflow: hidden;
	 height: 60vh;
}
 .slider ul {
	 list-style: none;
}
 .slider .slides {
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
 .slider .slides .mainPost {
     width:100%;
		 height:40vh;
	 background-size: cover;
	 background-position: 50% 50%;
	 display:flex;
	 justify-content: center;
	 align-items: center;
}
 .slider .indicators {
	 padding:0;
	 display:flex;
	 flex-direction: row;
	 position: absolute;
	 	bottom:0;
		 width:100%;
}
.indicators li{
	 flex-basis: 50%;
}
.item{
	background-size: cover;
	background-position: 50% 50%;
	width:100%;
	 height:20vh;
	 display:flex;
	   justify-content: center;
  align-items: flex-end;
}
.item .title{
	padding:20px;
	font-size:25px;
	color:white;
	text-align: center;

}
.postCont .title{
	font-size:30px;
	color:white;
		text-align: center;
}
.postCont .date{
	font-size:16px;
color:	#CECDD1
}
.postCont a, .item a{
		text-decoration: none;
}
 
</style>