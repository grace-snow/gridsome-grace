<template>
  <footer id="site-footer" class="site-footer">
    <div class="site-footer__inner page-padding page-width">
      <div class="footer__primary">
        <p class>
          Made with
          <span id="heart" class="icon-wrap icon-wrap--inline">
            <Heart-icon stroke-width="3" class="pop" />
          </span>
          <span class="sr-only">love</span>
          by Grace &copy;{{ new Date().getFullYear() }}
        </p>
        <a
          href="mailto:gracesnowdesign@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="smallText footer__link"
        >
          <span id="emailIcon" class="icon-wrap icon-wrap--inline"
            ><Email-icon stroke-width="2"/></span
          >gracesnowdesign@gmail.com
        </a>
      </div>
      <div class="footer__secondary">
        <ul class="footer__links unstyle-list smallText">
          <li>
            <a
              href="https://codepen.io/grace-snow"
              class="footer__link footer__link--icon"
              aria-label="See Grace's work on Codepen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Codepen-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>

          <li id="github">
            <a
              href="https://github.com/grace-snow/"
              class="footer__link footer__link--icon"
              aria-label="Go to Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
          <li id="twitter">
            <a
              href="https://twitter.com/gracesnow/"
              class="footer__link footer__link--icon"
              aria-label="Go to Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
          <li id="linkedin">
            <a
              href="https://www.linkedin.com/in/gracesnow/"
              class="footer__link footer__link--icon"
              aria-label="Go to LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin-icon class="footer__icon" stroke-width="2" />
            </a>
          </li>
        </ul>
        <div class="smallText font-sans">
          <!-- TODO: Add RSS feed and sitemap -->
          <!-- <a href="/rss.xml">RSS Feed</a>-->
          <a href="/sitemap.xml" class="footer__link">Sitemap</a>
          &nbsp;|&nbsp;
          <button type="button" class="footer__link" v-on:click="togglePrivacy()">
            Privacy
          </button>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <dialog
        id="privacyNotice"
        role="dialog"
        aria-labelledby="privacyTitle"
        aria-describedby="privacyMessage"
        class="footer__privacy privacy"
        v-if="isPrivacyVisible"
        open
      >
        <div class="privacy__inner">
          <button
            type="button"
            class="privacy__close-btn btn btn--icon-only"
            v-on:click="togglePrivacy()"
          >
            <CloseIcon />
            <span class="sr-only">Close</span>
          </button>
          <h2 id="privacyTitle" class="privacy__header">Privacy Notice</h2>
          <div id="privacyMessage">
            <p>
              <strong>Good News!</strong> This site doesn't use invasive analytics practices. It
              won't add cookies to your device, doesn't collect your personal information, and won't
              track you across different sites.
            </p>
            <p>
              <strong>Grace Snow Design</strong> only uses simple
              <a
                href="https://www.cloudflare.com/en-gb/web-analytics/"
                target="blank"
                rel="noopener noreferrer"
                >privacy-first analytics from Cloudflare</a
              >.
            </p>
          </div>
          <button type="button" class="btn" v-on:click="togglePrivacy()">
            Close Privacy Notice
          </button>
        </div>
      </dialog>
    </transition>
  </footer>
</template>

<script>
import HeartIcon from '~/assets/images/icons/heart.svg';
import EmailIcon from '~/assets/images/icons/mail.svg';
import CodepenIcon from '~/assets/images/icons/codepen.svg';
import GithubIcon from '~/assets/images/icons/github.svg';
import TwitterIcon from '~/assets/images/icons/twitter.svg';
import LinkedinIcon from '~/assets/images/icons/linkedin.svg';
import CloseIcon from '~/assets/images/icons/close.svg';

export default {
  name: 'Footer',
  components: {
    HeartIcon,
    EmailIcon,
    CodepenIcon,
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
    CloseIcon,
  },
  data() {
    return {
      isPrivacyVisible: false,
    };
  },
  methods: {
    togglePrivacy() {
      this.isPrivacyVisible = !this.isPrivacyVisible;
    },
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
  overflow: hidden;
  color: $neutral-100;
  text-align: center;

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
      text-decoration: none;

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

#heart {
  color: $blue-200;
}
.pop {
  stroke: $blue-400;
}

#emailIcon {
  margin-right: 0.5em;

  svg {
    margin-bottom: -0.25em;
  }
}
</style>
