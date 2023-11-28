<template>
  <div>
    <Header id="top" />

    <transition name="fade" appear>
      <main id="main" class="main" tabindex="-1">
        <slot />
      </main>
    </transition>

    <a v-if="jumpLink" href="/#top" v-on:click.prevent="scrollToTop" class="jump-link">
      <span class="sr-only">Back to top</span>
      <jumpIcon />
    </a>

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
import jumpIcon from '~/assets/images/icons/chevron.svg';

export default {
  data() {
    return {
      jumpLink: false,
    };
  },
  components: {
    Header,
    Footer,
    jumpIcon,
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollPosition);
  },
  destroyed() {
    window.removeEventListener('scroll', this.getScrollPosition);
  },
  methods: {
    getScrollPosition() {
      window.scrollY >= 1000 ? (this.jumpLink = true) : (this.jumpLink = false);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
/* Css reset */
@import '~/assets/styles/_reset.scss';
/* Site-wide utility classes */
@import '~/assets/styles/_utilities.scss';

// html {
//   font-size: 112%;

//   @include media-up(small) {
//     font-size: 100%;
//   }
// }

// base
body {
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

p:not(:last-child),
ul,
ol {
  margin-bottom: 1em;
}

p {
  max-width: 60ch;
}

// Links & buttons
a {
  position: relative;
  color: var(--link-color, #{$blue-600});
  font-weight: $weight-semibold;
  text-decoration: underline;

  img {
    @include transition(transform);
  }

  &:hover img {
    transform: scale(1.05);
  }
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

  &:active {
    top: 1px;
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

a,
button {
  &:hover:focus {
    outline: none;
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

  &:focus-visible {
    outline: none;
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

.auto-visible {
  // chromium only - may speed up page load
  content-visibility: auto;
}

// Jump link for long pages
.jump-link {
  position: fixed;
  right: 0;
  bottom: 3vh;
  height: 2.5rem;
  width: 2rem;
  background: $accent-200;
  color: $blue-800;
  z-index: 20;
  // opacity: 0.3;
  @include transition;
  display: flex;
  align-items: center;
  line-height: 1;

  @include media-up(small) {
    bottom: rem(100px);
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
    transform: rotate(90deg);
  }

  &:after,
  &:before {
    position: absolute;
    content: '';
    transform: skew(-#{$angle});
    z-index: -1;
  }

  &:before {
    left: -0.5rem;
    top: 0;
    height: 100%;
    width: 1rem;
    background: $accent-200;
  }

  &:after {
    height: calc(100% + 1.5rem);
    width: 0;
    top: -0.75rem;
    left: -1.25rem;
    @include transition(width);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:focus {
    outline: 0;
    &:after {
      border: 4px solid $accent-200;
      width: calc(100% + 3rem);
    }
  }
}

.talks {
  position: relative;
  background-color: rgba(#00375c, 20%);

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    top: 0;
    right: 0;
  }

  &:before {
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(to bottom, #002759 1%, #00182e 97%);
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:after {
    width: 100%;
    background: $neutral-150;
    mix-blend-mode: color-burn;
    clip-path: polygon(0px 65%, 65% 100%, 100% 100%, 100% 0);
    z-index: 0;
    @include media-up(small) {
      clip-path: polygon(100% 0, 68vw 100%, 100% 100%);
    }
  }
}

.talks__subtitle {
  margin-top: 2.5rem;
}

.block {
  @include block;
}

.dark-bg {
  p,
  ul,
  ol {
    color: #fff;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: $blue-200;
  }

  .block {
    // border-color: rgba(255, 204, 51, 0.6);
    border-color: rgba(109, 207, 255, 0.4);
  }

  .link {
    color: $accent-200;
    transition: color 0s ease-in 0.2s;
    white-space: nowrap;

    &:hover {
      color: $blue-1000;
    }
  }
}
</style>
