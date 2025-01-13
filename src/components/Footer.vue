<template>
  <footer id="site-footer" class="site-footer">
    <div class="site-footer__inner page-padding page-width">
      <div class="footer__primary">
        <p class>
          Made with
          <span id="heart" class="icon-wrap icon-wrap--inline">
            <svg
              class="pop"
              aria-hidden="true"
              focussable="false"
              alt="love"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
          <span class="sr-only">love</span>
          by Grace &copy;{{ new Date().getFullYear() }}
        </p>
        <a href="mailto:gracesnowdesign@gmail.com" class="smallText footer__link">
          <span id="emailIcon" class="icon-wrap icon-wrap--inline"
            ><svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline></svg></span
          >gracesnowdesign@gmail.com
        </a>
      </div>
      <div class="footer__secondary">
        <ul class="footer__links unstyle-list smallText">
          <li>
            <a
              href="https://codepen.io/grace-snow"
              class="footer__link footer__link--icon no-external-icon"
              aria-label="Codepen (opens in a new tab)"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                class="footer__icon"
                aria-hidden="true"
                focussable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                height="40"
                width="40"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2">
                <path
                  d="M2.09 16.7l11 7.3 11-7.3V9.3l-11-7.3-11 7.3zm0-7.4l11 7.3 11-7.3m-11-7.3v7.3m0 7.4V24"
                  class="cls-1" />
                <path d="M24.09 16.6L13.1 9.2l-11 7.4" class="cls-1" />
              </svg>
            </a>
          </li>

          <li id="github">
            <a
              href="https://github.com/grace-snow/"
              class="footer__link footer__link--icon no-external-icon"
              aria-label="Github (opens in a new tab)"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                class="footer__icon"
                aria-hidden="true"
                focussable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li id="twitter">
            <a
              href="https://twitter.com/gracesnow/"
              class="footer__link footer__link--icon no-external-icon"
              aria-label="X formally Twitter (opens in a new tab)"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                class="footer__icon"
                aria-hidden="true"
                focussable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li id="linkedin">
            <a
              href="https://www.linkedin.com/in/gracesnow/"
              class="footer__link footer__link--icon no-external-icon"
              aria-label="LinkedIn (opens in a new tab)"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                class="footer__icon"
                aria-hidden="true"
                focussable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="privacy-text smallTextsite-footer__inner page-padding page-width">
      <p>
        <strong class="pop">Privacy Notice:</strong> This site doesn't use invasive analytics
        practices. It won't add cookies to your device, doesn't collect personal information, and
        won't track you!
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      // isPrivacyVisible: false,
    };
  },
  methods: {
    // togglePrivacy() {
    //   console.log(this);
    //   this.isPrivacyVisible = !this.isPrivacyVisible;
    // },
  },
};
</script>

<style lang="scss">
.site-footer {
  background-color: $blue-1000;
  background-image: $blue-gradient-1000;
  // chromium only - may speed up page load
  content-visibility: auto;
  z-index: 2;
}

.site-footer__inner {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: $neutral-100;
  text-align: center;
  background-color: inherit;

  @include font-heading;
  @include media-up(small) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    text-align: initial;
  }
}

.site-footer {
  .footer {
    &__primary,
    &__secondary {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      @include media-up(small) {
        margin-bottom: 0;
      }
    }

    &__links {
      display: flex;
      justify-content: center;
      margin: 0 -0.25em;
      font-size: $smallText;

      @include media-up(small) {
        justify-content: flex-end;
      }

      > * {
        flex: 0 1 1em;
        margin: 0 0.25em 0.25em 0.25em;
        list-style-type: none;
      }
    }

    &__link {
      padding: 0;
      background: transparent;
      border: 0;
      color: #fff;
      font-weight: $weight-normal;
      @include font-met;

      &:hover {
        color: $blue-300;
        text-decoration: underline;
      }
    }

    &__link--icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2em;
      width: 2em;
      font-size: 1em;

      svg {
        height: 1.5em;
        width: 1.5em;
      }

      &:hover {
        color: $blue-300;
      }
    }

    &__secondary {
      font-size: $smallText;

      @include media-up(small) {
        text-align: right;
      }
    }

    &__privacy {
      position: absolute;
      bottom: 0;
      z-index: 20;
      padding: 1rem 0;
      width: 100%;
      background: $blue-900;
      border: none;
      box-shadow: $box-shadow;
      transition: all 0.3s ease-out;

      @include media-up(small) {
        padding: 1rem;
      }

      .privacy__btn {
        margin-top: 0;
        margin-bottom: 1.5rem;
      }
    }
  }
}

.privacy {
  &__header {
    font-size: $header5;
    font-size: $header5-clamp;
  }
  &__inner {
    position: relative;
    margin: 0 auto;
    padding: 1.5rem;
    padding-right: 2rem;
    max-width: 33ch;
    max-width: map-get($breakpoints, medium);
    background: $blue-100;
    font-size: $smallText;
    font-size: $smallText-clamp;

    p {
      margin-bottom: 1em;
    }
  }
  &__close-btn {
    top: -0.5rem;
    right: -1.5rem;
    float: right;

    &:active {
      top: -0.4rem;
    }
  }
}

.icon-wrap,
.icon-wrap svg {
  height: 1em;
  width: 1em;
}

.icon-wrap--inline {
  display: inline-block;

  svg {
    margin-bottom: -0.125em;
  }
}

.icon-wrap--inline,
.icon-wrap--inline svg {
  width: 1.25em;
}

.pop {
  stroke: $blue-400;
  color: $blue-400;
}

#emailIcon {
  margin-right: 0.5em;

  svg {
    margin-bottom: -0.25em;
  }
}

.privacy-text {
  padding-block: 1em;
  @include font-met;
  font-size: 0.8375rem;
  color: #fff;

  p {
    padding-inline-end: 2.5rem;
  }
}
</style>
