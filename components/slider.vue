<template>
<div class="slider">
    <ul class="slides" :style="style">
        <img class="img" :src="playslides.thumbnail">
    </ul>
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)">
        <div class="item" :style="{backgroundImage: `url(${slide.thumbnail})`}">
             <p class="date">{{slide.date.substring(0,10)}} | {{slide.comment}} comments</p>
          <span class="title">{{slide.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
    slides: this.$store.getters.loadedPosts.splice(3),
    current: 0,
    playslides: 0,
  }
    },
  computed: {
    style() {
          return { top: "-100%" };
    }
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
  created() {
		this.playslides = this.slides.shift();
		setInterval(this.selectSlide,3000);
  }
}
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
 .slider ul.slides {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 margin: 0;
	 padding: 0;
	 transition: top 800ms;
}
 .slider ul.slides li {
	 height: 100%;
}
 .slider ul.slides .img {
     width:100%;
	 background-size: cover;
	 background-position: 50%;
}
 .slider ul.indicators {
	 position: absolute;
	 padding-right: 40px;
	 right: 0;
	 top: 50%;
	 transform: translateY(-50%);
	 z-index: 2;
	 text-align: right;
}
 .slider ul.indicators li {
	 clear: both;
}
 .slider ul.indicators li .item {
	 position: relative;
	 margin-bottom: 16px;
	 float: right;
     height:10vh;
     width:300px;
}
 .slider ul.indicators li:last-child .item {
	 margin-bottom: 0;
}
 .slider ul.indicators li .title {
	 color: #fff;
	 cursor: pointer;
	 font-size: 16px;
	 font-family: 'SegoeUI-Bold';
	 transition: font-size 0.6s ease-out;
}
 .slider ul.indicators li .mark {
	 color: #fff;
	 font-family: 'SegoeUI-Semilight';
}
 .slider ul.indicators li .dot {
	 position: absolute;
	 top: 50%;
	 right: -20px;
	 margin-top: -5.5px;
	 margin-left: 10px;
	 width: 11px;
	 height: 11px;
	 background: #fff;
	 border-radius: 50%;
}
 .slider ul.indicators li .progress {
	 position: relative;
	 display: inline-block;
	 width: 100%;
	 height: 2px;
	 margin: 8px 0;
	 background: rgba(255,255,255,0.5);
}
 .slider ul.indicators li.active .title {
	 transition: font-size 0.6s ease-in;
	 font-size: 36px;
	 font-family: 'SegoeUI-Light';
}
 .slider ul.indicators li.active .progress .fill {
	 height: 100%;
	 background: #fff;
}
 
</style>