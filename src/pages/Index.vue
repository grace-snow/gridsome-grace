<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>The web is for everyone</h1>
    <p>I'm all about making web apps easy to use and inclusive to all</p>

    <h2>Who am I?</h2>
    <p>I'm Grace. I like to design stuff that solves problems and that people like to use. I also like to play with code and call myself a 'front of the front end' dev.</p>
    <!-- G-link prefetches that page -->
    <g-link to="/about/" class="btn">More about me</g-link>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
