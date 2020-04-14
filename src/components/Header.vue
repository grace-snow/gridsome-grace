<template>
  <header class="bg-darkest full-bleed">
    <div class="header page-width">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link to="/about/" class="nav__link">About</g-link>
        <g-link to="/design-process/" class="nav__link">Design Process</g-link>
        <g-link to="/project-listing/" class="nav__link">Projects</g-link>
        <g-link to="/blog-listing/" class="nav__link">Blog</g-link>
        <a href="/#contact" class="nav__link">Contact</a>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Header"
  // data() {
  //   return {
  //     message: "Try change me!"
  //   };
  // },
  // methods: {
  //   onClick() {
  //     this.message = "Here you go :)";
  //   }
  // }
};
</script>

<style lang="scss">
/* Header styles go here */
header {
  display: block;
  background: #000;
  height: 80px;
}
</style>