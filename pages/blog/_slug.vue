<template>
  <article>
    <h1>{{ title }}</h1>
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  }
};
</script>