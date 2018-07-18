<template>
   <div class="nav">
       <div class="cont" :class="{change:menu}" @click="toggleMenu">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
    </div>
       <img class="logo" src="@/assets/logo.png">
       <div class="fullMenu" :class="{mobileMenu:menu}">
       <ul class="menu" :class="{hidden:!menu}">
           <li><nuxt-link to="/">Home </nuxt-link></li> 
           <li><nuxt-link to="/education">Education</nuxt-link></li> 
           <li><nuxt-link to="/events">Events</nuxt-link></li> 
           <li><nuxt-link to="/quotation">Quotations</nuxt-link></li> 
           <li><nuxt-link to="/aboutUs">About us</nuxt-link></li> 
       </ul>
         <ul class="login" :class="{hidden:!menu}">
           <li class="signIn"><nuxt-link to="/">Sign In </nuxt-link></li> 
           <li class="register"><nuxt-link to="/">Register</nuxt-link></li> 
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
.cont {
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
  .menu li a {
    text-decoration: none;
    color:black;
  }
.login {
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 1001;
  top: 22px;
  right: 10px;
  opacity: 1;
}
.hidden {
  display: none;
}
.mobileMenu {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #23262f;
  opacity: 0.85;
  z-index: 1000;
  padding: 0;
  left: 0;
  top:0;
}
.mobileMenu .menu li a {
  color: white;
  text-decoration: none;
  line-height: 60px;
}
.mobileMenu .menu {
  margin-top: 15vh;
  flex-direction: column;
  padding: 0;
  text-align: center;
}
.signIn a {
  color: #23262f;
  text-decoration: none;
  background-color: white;
  padding: 10px 20px 10px 20px;
  border-radius: 40px;
  font-weight: bold;
}
.register a {
  color: white;
  text-decoration: none;
  background-color: #2b7ffb;
  padding: 10px 20px 10px 20px;
  border-radius: 40px;
  font-weight: bold;
}
.nuxt-link-exact-active{
  font-weight: bold;
}
@media screen and (min-width: 750px) {
   .nav{
   margin:20px 0 20px 0;
   }
  .login {
    display: flex;
    margin-right: 40px;
  }
  .signIn a {
    background-color: #e5e8ed;
  }
  .logo {
    margin: 0 0 0 80px;
  }
  .cont {
    left: 40px;
  }
 .mobileMenu .login{
    top:42px;
  }
}
@media screen and (min-width: 1366px) {
  
  .cont {
    display: none;
  }
  .logo {
    margin: 0 0 0 5px;
  }
  .menu {
    display: flex;
  }
  .hidden {
    display: flex;
  }
  .login {
    display: flex;
    position: inherit;
    margin:0;
  }
  .fullMenu {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-right: 5px;
    width: 100%;
    justify-content: flex-end;
  }
  .fullMenu ul{
    padding: 0 5px 0 5px;
  }
}
</style>