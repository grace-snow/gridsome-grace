<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <div class="flex--small-up">
      <section id="hero" class="section page-padding">
        <h1>The web is for everyone</h1>
        <p>
          <strong>I mean that.</strong>
        </p>
        <p>I'm all about making web apps easy to use and inclusive to all</p>
      </section>
      <section id="about" class="section page-padding">
        <h2>Who am I?</h2>
        <p>I'm Grace. I like to design stuff that solves problems and that people like to use. I also like to play with code and call myself a 'front of the front end' dev.</p>
        <!-- G-link prefetches that page -->
        <g-link to="/about/" class="btn">More about me</g-link>
      </section>
    </div>

    <Contact id="contact" />

    <section class="section page-padding">
      <h2>About this site</h2>
      <p>I really enjoyed using Vue.js at a previous workplace, so decided to use Gridsome (a static site generator leveraging Vue) to get this website off the ground. You can read more about the design and build on my blog, or see all the code on GitHub.</p>
      <div class="flex-grid">
        <a href>
          <img src alt="Gridsome" />
        </a>
        <a href>
          <img src alt="Vue.js" />
        </a>
        <a href>
          <img src alt="Webpack" />
        </a>
        <a href>
          <img src alt="Netlify" />
        </a>
        <a href>
          <img src alt="Adoby XD" />
        </a>
      </div>
    </section>
  </Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Contact
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

#hero {
  padding-top: 220px;
}
</style>
