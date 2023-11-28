<template>
  <header id="top" class="site-header" aria-label="primary">
    <a href="#" v-scroll-to="'#main'" @click="focusOnMain" class="skip-link">
      Skip to main content
    </a>
    <div class="site-header__inner page-padding page-width" tabindex="-1">
      <g-link to="/" class="logo"
        >{{ $static.metadata.siteName }}<span class="sr-only"> - Homepage</span></g-link
      >

      <nav class="menu-wrapper menu">
        <ul class="menu__list" role="list">
          <li class="menu__item" role="listitem">
            <g-link to="/about/" class="menu__item-link">About</g-link>
          </li>
          <li class="menu__item" role="listitem">
            <a href="/mentoring/" class="menu__item-link">Mentoring</a>
          </li>
          <li v-if="isContactFormVisible()" class="menu__item" role="listitem">
            <a href="#" v-scroll-to="'#contact'" class="menu__item-link"> Contact </a>
          </li>
        </ul>
        <!--</div>-->
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
  name: 'Header',
  methods: {
    isContactFormVisible() {
      if (this.$route.path === '/thanks' || this.$route.name === '*') {
        return false;
      }
      return true;
    },
    focusOnMain() {
      const main = document.querySelector('#main');
      this.$nextTick(() => {
        main.focus();
      });
    },
  },
};
</script>

<style lang="scss">
/* Header styles go here */
.site-header {
  background-color: $blue-1000;
  background-image: $blue-gradient-1000;
  position: relative;
  z-index: 1000;

  @include media-up(large) {
    font-size: 112.5%;
  }
}

.site-header__inner {
  position: relative;
  justify-content: space-between;
  height: 100%;
  line-height: 1;
  overflow-x: hidden;

  @include page-padding;
  @include flex;
  gap: 8px 32px;
  flex-wrap: wrap;

  @include media-up(small) {
    flex-wrap: unset;
  }

  /* Make bg stretch full width on huge screens */
  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 50vw;
    background-color: inherit;
  }
  &::before {
    left: -50vw;
  }
  &:after {
    right: -50vw;
  }
}

.menu__list {
  margin: 0;
  transition: margin 0.3s ease-out;
  transition-delay: 200ms;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 8px 1.8em;
  @include media-up(small) {
    justify-content: flex-end;
  }
}

.menu__item {
  font-size: $paragraph;
  list-style-type: none;
  text-align: left;
  transition: font-size 300ms ease-in-out;
  transition-delay: 200ms;

  @include media-up(medium) {
    position: relative;
    height: 100%;
    text-align: center;
    transition: none;
  }
  @include media-up(large) {
    font-size: $header5;
  }

  &:first-child .menu__item-link:before {
    display: none;
  }
}

.menu__item-link {
  position: relative;
  opacity: 0.5;
  color: $neutral-100;
  font-weight: $weight-semibold;
  line-height: 1;
  text-decoration: none;
  transition: opacity 300ms ease-in-out;
  transition-delay: 400ms;
  display: flex;
  align-items: center;
  padding: Min(6vw, 28px) 0;
  opacity: 1;
  transition: none;

  &:before {
    content: '';
    position: absolute;
    left: -0.75em;
    height: 1.2em;
    width: 3px;
    background: $blue-400;
    transform: skew(-#{$angle});
  }
}

.logo {
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  margin-right: auto; // for IE
  padding: Min(6vw, 28px) 0;
  height: 100%;
  color: $blue-400;
  font-size: $paragraph;
  letter-spacing: $letter-space;
  line-height: initial;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1;
  @include media-up(large) {
    font-size: $header5;
  }

  // equals decal
  &:before {
    content: '';
    position: absolute;
    top: min(7vw, 29px);
    left: -50.5vw;
    z-index: -1;
    height: 0.8em;
    width: 50vw;
    border-color: $blue-400;
    border-top-style: solid;
    border-bottom-style: solid;
    border-width: 0.3em;
    opacity: 0.3;
    transform: none;
  }
}

.logo,
.menu__item-link {
  // underline on hover
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 5px;
    width: 0;
    background: $blue-400;
    background: $accent-200;
    transition: none;
    transform: skew(-$angle);
  }
  &:focus,
  &:hover {
    outline: none;
    &:after {
      width: 100%;

      @include transition(all);
    }
  }
}

.logo:hover:before {
  opacity: 0.5;

  @include transition(all);
}

.menu-open {
  overflow: hidden;
  position: fixed;
}

/* Skip link */
// Visible on focus only
.skip-link {
  position: absolute;
  display: block;
  height: rem(1px);
  width: rem(1px);
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  color: $blue-1000;
  text-decoration: none;

  &:focus {
    position: fixed;
    top: 0;
    z-index: 1000;
    display: block;
    padding: 1rem 0;
    height: auto;
    width: 100%;
    overflow: visible;
    clip: auto;
    background-color: $accent-200;
    outline: 0;
    text-align: center;
    text-decoration: underline;
  }
}
</style>
