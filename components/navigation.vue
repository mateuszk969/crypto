<template>
   <div class="nav">
       <img src="@/assets/logo.png">
       <ul>
           <li><nuxt-link to="/">Home </nuxt-link></li> 
           <li><nuxt-link to="/">Education</nuxt-link></li> 
           <li><nuxt-link to="/">Events</nuxt-link></li> 
           <li><nuxt-link to="/">Quotations</nuxt-link></li> 
           <li><nuxt-link to="/">About us</nuxt-link></li> 
           <li><nuxt-link to="/">Sign in</nuxt-link></li> 
           <li><nuxt-link to="/">Register</nuxt-link></li> 
           <li><nuxt-link to="/"><img src="@/assets/search.png"></nuxt-link></li> 
       </ul>
   </div>
</template>

<script>

export default{
}

</script>

<style scoped>
.nav{
    display:flex;
}
.nav ul{
    display:flex;
    list-style:none;
}
.nav ul li{
    margin:10px
}
</style>