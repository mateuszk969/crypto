<template>
   <div class="cont" style="background-image: url('/source/crypto.jpg')">
   <div class="text">
       <p>Get tich with our programs!</p>
       <p class="">Register for free now</p>
   </div>
            <div class="buttons">
           <nuxt-link to="/"><button class="register">Register </button> </nuxt-link>
          <nuxt-link to="/"><button class="readMore">Read more</button> </nuxt-link>
        </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cont {
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
}
.text {
  font-size: 20px;
  color: white;
  text-align: center;
}
.buttons {
  margin: 20px;
}
.buttons a {
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  text-decoration: none;
  margin: 10px;
}
.register,
.readMore {
  font-size: 16px;
  padding: 10px 60px 10px 60px;
  min-width: 65%;
  border-radius: 30px;
  font-weight: bold;
  border: 0;
  margin: 0 auto;
}
.readMore {
  color: #23262f;
  background-color: #e5e9ec;
}
.register {
  color: #23262f;
  background-color: #ffff20;
}
</style> 