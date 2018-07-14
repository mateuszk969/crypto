<template>
   <div class="nav">
       <div class="container" :class="{change:menu}" @click="toggleMenu">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
    </div>
       <img class="logo" src="@/assets/logo.png">
          <ul class="login" :class="{hidden:!menu}">
           <li class="signIn"><nuxt-link to="/">Sign In </nuxt-link></li> 
           <li class="register"><nuxt-link to="/">Register</nuxt-link></li> 
        </ul>
       <div class="hidden" :class="{mobileMenu:menu}">
       <ul class="menu">
           <li><nuxt-link to="/">Home </nuxt-link></li> 
           <li><nuxt-link to="/">Education</nuxt-link></li> 
           <li><nuxt-link to="/">Events</nuxt-link></li> 
           <li><nuxt-link to="/">Quotations</nuxt-link></li> 
           <li><nuxt-link to="/">About us</nuxt-link></li> 
       </ul>
       </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    };
  },
  methods: {
    toggleMenu() {
      return (this.menu = !this.menu);
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
}
.logo {
  padding: 20px;
  margin: 0 auto;
}
.nav ul {
  list-style: none;
}
.nav ul li {
  margin: 10px 5px 10px 5px;
}
.container {
  position: absolute;
  top: 25px;
  left: 20px;
  display: inline-block;
  cursor: pointer;
  z-index: 1001;
}

.bar1,
.bar3,
.bar2 {
  width: 25px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
.bar2 {
  width: 18px;
}
.change .bar1 {
  background-color: yellow;
  width: 20px;
  -webkit-transform: rotate(-45deg) translate(-8px, 7px);
     transform: rotate(-45deg) translate(-8px, 7px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  background-color: yellow;
  width: 20px;
  -webkit-transform: rotate(45deg) translate(-7px, -6px);
  transform: rotate(45deg) translate(-7px, -6px);
}
.login{
position:absolute;
display:flex;
flex-direction: row;
z-index:1001;
top:22px;
right:10px;
}
.hidden{
    display:none;
}
.mobileMenu {
  display:block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #23262f;
  opacity: 0.85;
  z-index: 1000;
}
.mobileMenu .menu li a {
  color: white;
  text-decoration: none;
  line-height:60px;
}
.mobileMenu .menu {
  margin-top: 15vh;
  flex-direction: column;
  padding: 0;
  text-align: center;
}
.signIn a{
    color:#23262f;
    text-decoration: none;
    background-color:white;
    padding:10px 20px 10px 20px;
    border-radius:40px;
    font-weight: bold;
}
.register a{
    color:white;
    text-decoration: none;
    background-color:#2b7ffb;
    padding:10px 20px 10px 20px;
    border-radius:40px;
    font-weight: bold;
}
</style>