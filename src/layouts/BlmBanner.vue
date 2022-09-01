<template>
  <div>
    <Blm-banner />

    <Header />

    <transition name="fade" appear>
      <main id="main" class="main" tabindex="-1">
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
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import BlmBanner from '~/components/BlmBanner.vue';

export default {
  components: {
    Header,
    Footer,
    BlmBanner,
  },
};
</script>

<style lang="scss">
/* Css reset */
@import '~/assets/styles/_reset.scss';
/* Site-wide utility classes */
@import '~/assets/styles/_utilities.scss';

html {
  font-size: 112%;

  @include media-up(small) {
    font-size: 100%;
  }
}

// base
body {
  overflow-x: hidden;
  color: $text-secondary;
  line-height: $line-height;

  @include font-met;
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
  @include font-heading;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.75em;
  color: $text-primary;
  line-height: $line-height-small;
}

p,
ul,
ol {
  margin-bottom: 1em;
}

// Links & buttons
a {
  position: relative;
  color: $blue-600;
  font-weight: $weight-semibold;
  text-decoration: underline;
}

.link {
  @include link;

  &--positive {
    color: $positive-200;

    &:hover {
      color: $positive-300;
    }
  }
}

.btn {
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0.75em 1.85em 0.8em 1.25em;
  background: $btn-gradient;
  border: 0;
  color: $blue-1000;
  line-height: $line-height-small;
  text-decoration: none;

  clip-path: polygon(100% 0, 100% 0%, 90% 100%, 0 100%, 0 0);
  @include font-heading;

  &--icon-only {
    margin: 0;
    padding: 0.5em;
    padding-right: 1em;

    clip-path: polygon(110% 0, 100% 0, 80% 100%, 0 100%, 0 0);

    svg {
      height: 1em;
      width: 1em;
    }
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 0;

    @include transition();
  }
  &:after {
    z-index: -1;
    height: 100%;
    background: $btn-hoverGradient;
    background: $accent-200;
  }

  &:focus:before,
  &:hover:after,
  &:focus:after {
    width: 100%;
  }

  &:focus {
    text-decoration: underline;
  }

  &--positive {
    background: $positive-gradient;
    color: #fff;
  }

  &--negative {
    background: $negative-gradient;
    color: #fff;

    &:after {
      background: $negative-300;
    }
  }
}

button.link {
  padding: 0;
  background: transparent;
  border: none;
  text-align: left;

  clip-path: none;
  @include font-met;
  @include link;

  &--positive {
    color: $positive-200;

    &:hover {
      color: $positive-300;
    }
  }
}

button,
a,
input,
select,
textarea,
abbr,
summary {
  &:focus {
    @include focus-outline;
  }
}

// App layout
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: $page-width;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;
    display: block;
    height: 100%;
    width: 50vw;
    background: #fff;
  }
  &:before {
    left: -50vw;
  }
  &:after {
    right: -50vw;
  }
}

// Transitions
.fade-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}

.fade-enter {
  opacity: 0;
}

// Forms
label {
  display: block;
}
textarea {
  resize: none;
}

/* TEMP during blm banner - position to reduce flash of white bg on scroll */
.site-header {
  top: -1px !important;
}
</style>
