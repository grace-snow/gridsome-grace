<template>
  <header id="top" class="site-header" aria-label="primary">
    <a href="#" v-scroll-to="'#main'" @click="focusOnMain" class="skip-link">
      Skip to main content
    </a>
    <div class="site-header__inner page-padding page-width">
      <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>

      <nav class="menu-wrapper" :class="isOpen ? 'is-open' : ''">
        <button id="mobileMenuTrigger" type="button" v-on:click="toggle()" class="menu-toggle" :aria-expanded="isOpen ? 'true' : 'false'" aria-controls="menuWrap">
          <span v-if="!isOpen">menu</span>
          <span v-else>close</span>
        </button>

        <div class="menu" id="menuWrap">
          <ul class="menu__list" role="list">
            <li class="menu__item" role="listitem">
              <g-link to="/about/" class="menu__item-link">About</g-link>
            </li>
            <li class="menu__item" role="listitem">
              <g-link to="/design-process/" class="menu__item-link">Design Process</g-link>
            </li>
            <li class="menu__item" role="listitem">
              <g-link to="/projects" class="menu__item-link">Projects</g-link>
            </li>
            <li class="menu__item" role="listitem">
              <a href="https://fedmentor.dev" target="_blank" rel="noopener noreferrer" class="menu__item-link">Mentoring</a>
            </li>
            <li v-if="isContactFormVisible()" class="menu__item" role="listitem">
              <a
                v-if="isOpen"
                href="#"
                v-scroll-to="'#contact'"
                class="menu__item-link"
                v-on:click="toggle()"
                v-on:keydown="focusOnToggle($event)"
              >
                Contact
              </a>
              <a v-else href="#" v-scroll-to="'#contact'" class="menu__item-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
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
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      const doc = document.documentElement;
      const body = document.querySelector('body');
      const app = document.querySelector('#app');
      const main = document.querySelector('#main');
      const foot = document.querySelector('#site-footer');

      this.isOpen = !this.isOpen;
      app.classList.toggle('menu-open');

      if (this.isOpen) {
        doc.style.height = '100%';
        body.style.height = '100%';
        app.style.height = '100%';
        main.setAttribute('inert', true);
        foot.setAttribute('inert', true);

      } else {
        doc.removeAttribute('style');
        body.removeAttribute('style');
        app.removeAttribute('style');
        main.removeAttribute('inert');
        foot.removeAttribute('inert');
      }
    },
    focusOnToggle(event) {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault()
        this.$nextTick(() => {
          document.querySelector(`#mobileMenuTrigger`).focus();
        });
      }
    },
    isContactFormVisible() {
      if (this.$route.path === '/thanks' || this.$route.name === "*") {
        return false;
      } 
      return true;
    }, 
    focusOnMain() {
      document.querySelector('main').focus();
    }
  },
};
</script>

<style lang="scss">
/* Header styles go here */
.site-header {
  background-color: $blue-1000;
  background-image: $blue-gradient-1000;

  @include sticky-top;
}

.site-header__inner {
  position: relative;
  justify-content: space-between;
  height: 100%;
  line-height: 1;
  overflow-x: hidden;

  @include page-padding;
  @include flex;

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

  @include media-down(medium) {
    .menu-open & {
      overflow: unset;
    }
  }
}

.menu-toggle {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 25px 0 0 0;
  min-width: 35px;
  background: transparent;
  border: 0;
  color: $neutral-100;
  font-size: $tinyText;
  letter-spacing: $letter-space;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0s linear 0s;

  @include font-heading;
  @include transition(all);
  @include media-up(medium) {
    display: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    margin: 0 0 0 -15px;
    height: 3px;
    width: 30px;
    background: $neutral-100;
    transition: all 0.3s ease-out;
    transform: skew(-$angle);
  }

  /* Top bar of menu icon */
  &:before {
    top: 5px;
  }
  /* Bottom bar of menu icon */
  &:after {
    top: 15px;
  }

  &:focus,
  &:hover {
    color: $blue-300;
    &::before,
    &:after {
      background-color: $blue-300;
    }
  }

  &:focus {
    @include focus-outline;
  }
}

.menu {
  position: absolute;
  top: -100vh;
  left: 0;
  visibility: hidden;
  display: block;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  opacity: 0;
  transition: transform 0.3s ease-out;
  transform: translateY(-100%);

  @include media-up(medium) {
    position: relative;
    top: 0;
    visibility: visible;
    height: auto;
    min-height: 0;
    opacity: 1;
    transition: none;
    transform: none;
  }
}

.menu__list {
  margin: 0;
  transition: margin 0.3s ease-out;
  transition-delay: 200ms;

  @include page-padding;
  @include media-up(medium) {
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    transition: none;
  }
}

.menu__item {
  overflow: hidden;
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
  display: inline-block;
  padding-bottom: 10px;
  opacity: 0.5;
  color: $neutral-100;
  font-weight: $weight-semibold;
  line-height: 1;
  text-decoration: none;
  transition: opacity 300ms ease-in-out;
  transition-delay: 400ms;

  @include media-up(medium) {
    display: flex;
    align-items: center;
    margin-left: 50px;
    padding: 1.25rem 0;
    opacity: 1;
    line-height: initial;
    transition: none;

    &:before {
      content: '';
      position: absolute;
      left: -25px;
      height: 1.2em;
      width: 3px;
      background: $blue-400;
      transform: skew(-#{$angle});
    }
  }
}

.menu-wrapper {
  &.is-open {
    /* toggle the mobile nav button */
    .menu-toggle {
      &:before,
      &:after {
        top: 10px;
        left: calc(50% + 2.5px);
        width: 25px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }

    .menu {
      top: 3.75rem;
      visibility: visible;
      overflow: auto;
      background-color: $blue-1000;
      opacity: 1;
      transition: transform 300ms ease-in-out, opacity 0.3s ease 0.2s;
      transform: translateY(0);

      @include media-up(medium) {
        top: 0;
        background-color: unset;
      }
    }

    .menu__item {
      margin-top: 0.5em;
      font-size: clamp(1rem, calc(6vh + 1px), $header1);
      line-height: 1;
      text-align: left;

      @include media-up(medium) {
        margin: 0;
        font-size: initial;
      }
      @include media-down(medium) {
        @media (orientation: landscape) {
          font-size: clamp(1rem, calc(6vh + 1px), $header3);
        }
      }
    }

    .menu__item-link {
      opacity: 1;
    }
  }
}

.logo {
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  margin-right: auto; // for IE
  padding: 1.25rem 0;
  height: 100%;
  background-color: $blue-1000;
  background-image: $blue-gradient-1000;
  color: $blue-400;
  font-size: $paragraph;
  letter-spacing: $letter-space;
  line-height: initial;
  text-decoration: none;
  text-transform: uppercase;

  @include font-heading;
  @include flex;
  @include media-up(large) {
    font-size: $header5;
  }

  // equals decal
  &:before {
    content: '';
    position: absolute;
    top: 40%;
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
