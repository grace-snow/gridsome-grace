<template>
  <div class="page-width">
    <Header />

    <transition name="fade" appear>
      <main class="main">
        <slot />
      </main>
    </transition>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
html {
  font-size: 16px;
}

// fonts
body {
  font-family: "Metropolis", system-ui, BlinkMacSystemFont, sans-serif;
  font-weight: 300;
  line-height: 1.6;
}

strong {
  font-weight: 600;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
nav,
.button,
.logo,
.font-heading {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

a {
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.page-width {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.fade-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.2s;
}

.fade-enter {
  opacity: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
}

.list {
  display: flex;
}

.list li {
  list-style-type: none; /* remove bullets */
}

.list li:before {
  content: "\200B"; /* add zero-width space */
}

.bg-dark {
  background: #ccc;
}
.bg-darkest {
  background: #aaa;
}
</style>
