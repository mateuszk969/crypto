<template>
    <div>
    <h2>{{posts[0].type}} posts</h2> <button v-on:click="sortedByDate">Newest </button> <button v-on:click="sortedByPopular">Popular</button>
      <ul class="local">
       <li v-for="post in posts"
            :key="post.date">
            <nuxt-link :to='post.date +"_"+post.title'>
              {{post.title}}
               </nuxt-link>
              {{post.date}}
              <img v-bind:src="post.thumbnail" /> 
            </li>
      </ul>
      </div>
</template>

<script>

export default{
props: ['posts'],
    methods:{
        sortedByPopular(){
            return this.posts.sort((a,b)=>{
                return a.comment<b.comment
            })
        },
         sortedByDate(){
            return this.posts.sort((a,b)=>{
                return a.date<b.date
            })
        }
    }
}

</script>