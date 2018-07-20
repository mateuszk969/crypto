<template>
   <div class="cont">
     <div class="container">
       <div class="row">
    <ul class="nav">
      <li><nuxt-link to="/">Home </nuxt-link></li> 
      <li><nuxt-link to="/education">Education</nuxt-link></li> 
      <li><nuxt-link to="/events">Events</nuxt-link></li> 
      <li><nuxt-link to="/quotation">Quotations</nuxt-link></li> 
      <li><nuxt-link to="/aboutUs">About us</nuxt-link></li> 
    </ul>
     <img class="ig" src="@/assets/ig.jpg">
     <div class="newsletter">
       <h3>Newsletter</h3>
       <p>Join to our newsletter to be always informed</p>
       <p class="small">EMAIL ADDRESS</p>
        <div class="form">
          <input class="email" type="email" placeholder="Your e-mail address">
          <button class="send">Send</button>
        </div>
     </div>
     </div>
     <div class="faq">
       <ul>
         <li>FAQ</li>
         <li>SUPPORT</li>
       </ul>
       <p>© 2018 Omega group investments</p>
     </div>
     </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cont {
  background-color: #252736;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}
.nav li {
  list-style: none;
  padding: 15px;
}
.nav li a {
  text-decoration: none;
  color: #6e707f;
}
.nav li a.nuxt-link-exact-active {
  font-weight: bold;
  color: white;
}
.ig {
  width: 100%;
}
.newsletter {
  padding: 25px 20px 25px 20px;
  text-align: center;
  color: white;
}
.newsletter h3 {
  font-size: 22px;
}
.newsletter p {
  font-size: 16px;
  color: #909aa2;
  padding: 10px 40px 10px 40px;
}
p.small {
  font-size: 12px;
  color: #6e707f;
}
.form {
  position: relative;
  display: flex;
  justify-content: center;
  width: 280px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.email {
  margin: 0 auto;
  font-size: 13px;
  width: 100%;
  height: 49px;
  padding-left: 20px;
  border-radius: 25px;
  border: 0;
}
.send {
  height: 49px;
  width: 69px;
  border: 0;
  position: absolute;
  right: 0;
  border-radius: 25px;
  color: white;
  background-color: #2b7ffb;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 0 1px 0px #2b7ffb inset, 0 0 1px 0px #2b7ffb;
}
.faq {
  padding: 35px 20px 35px 20px;
  border-top: 0.2px solid #6e707f;
  display: flex;
  flex-direction: column;
  color: #6e707f;
}
.faq ul {
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  font-weight: 700;
}
.faq ul li {
  margin: 10px;
}
.faq p {
  font-size: 14px;
  padding: 35px 0 25px 0;
  text-align: center;
}
@media screen and (min-width: 750px) {
  .nav {
    flex-direction: row;
    justify-content: center;
  }
  .ig {
    display: block;
    width: 600px;
    margin: 0 auto;
  }
  .form {
    width: 380px;
  }
  .send {
    width: 90px;
  }
  .email {
    font-size: 14px;
  }
}
@media screen and (min-width: 1366px) {
  .cont {
    display: flex;
    flex-direction: row;
    min-width: 100%;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 0 60px 0;
  }
  .nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 25px 0 0;
  }
  .nav li {
    padding: 15px 75px 15px 0;
  }
  .newsletter {
    padding: 30px 0 30px 75px;
  }
  .newsletter h3 {
    text-align: left;
  }
  .newsletter p {
    text-align: left;
    padding: 10px 0 10px 0;
  }
  .faq {
    padding: 20px 0 20px 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .faq ul {
    align-items: center;
  }
}
</style> 