<template>
  <section class="container">
    <div>
      <ul class="links">
       <li v-for="post in posts"
            :key="post.date">
            <nuxt-link :to='post.title'>
              {{post.title}}
               </nuxt-link>
              {{post.date}}
              <img v-bind:src="post.thumbnail" /> 
            </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    const context = require.context('~/content/blog/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));
    return { posts };
  }
}
</script>

<style scoped>
 .links{
  width:100%
}
li img{
  width:100px;
  margin:0 auto
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
