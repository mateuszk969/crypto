<template>
   <div class="cont" style="background-image: url('/source/bg.png')">
   <div class="content">
     <div class="text">
       <p class="light">Get tich with our programs!</p>
       <p class="bold">Register for free now</p>
     </div>
     <div class="buttons">
      <nuxt-link to="/"><button class="register">Register </button> </nuxt-link>
      <nuxt-link to="/"><button class="readMore">Read more</button> </nuxt-link>
     </div>
     </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cont {
  height: 300px;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
}
.text {
  font-size: 22px;
  color: white;
  text-align: center;
}
.bold {
  font-weight: bolder;
}
.light {
  font-weight: 100;
}
.buttons {
  margin: 20px;
}
.buttons a {
  margin: 0 auto;
  width: 230px;
  display: flex;
  align-content: center;
  flex-direction: column;
  text-decoration: none;
}
.register,
.readMore {
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  min-width: 65%;
  border-radius: 30px;
  font-weight: bold;
  border: 0;
  margin: 10px;
}
.readMore {
  color: #23262f;
  background-color: #e5e9ec;
}
.register {
  color: #23262f;
  background-color: #ffff20;
}
@media screen and (min-width: 750px) {
  .cont {
    height: 180px;
    margin: 15px;
    justify-content: center;
    border-radius: 100px;
  }
  .text {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .text p {
    font-size: 22px;
    margin: 5px;
    display: flex;
    align-content: flex-end;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    width: 450px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
@media screen and (min-width: 1366px) {
  .cont {
    margin: 0 auto;
    max-width: 1245px;
  }
  .content {
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .text p {
    font-size: 20px;
    margin: 0 5px 0 0;
  }
  .buttons {
    margin: 10px 0 0 0;
    width: 330px;
  }
  .register,
  .readMore {
    margin: 10px 20px 0 0;
  }
}
@media screen and (min-width: 1920px) {
  .cont {
    max-width: 1466px;
  }
}
</style> 