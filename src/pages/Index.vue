<template>
  <Layout>
    <Welcome id="welcome" />

    <Intro id="intro" />

    <div class="home-contact-wrapper page-width">
      <Contact />
      <section class="section page-padding site">
        <div role="presentation" class="hidden-wrap-shape"></div>
        <h2>About this&nbsp;site</h2>
        <p class="site__desc">
          I really enjoyed using Vue.js at a previous workplace, so decided to use Gridsome (a
          Vue.js static site generator) for this site in 2020. You can
          <span class="link"
            ><a
              href="https://github.com/grace-snow/gridsome-grace"
              target="_blank"
              rel="noopener noreferrer"
              class="nowrap"
              >see the code on GitHub</a
            ></span
          >. (Although, be warned, I'd definitely change a lot if I was starting this project again
          today!)
        </p>
        <div class="flex-grid site__img-grid">
          <h3 class="sr-only">Tech stack for this site:</h3>
          <a
            href="https://gridsome.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="img-grid__item no-external-icon">
            <svg
              focussable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 51 52">
              <g transform="translate(-0.403 -0.401)">
                <rect
                  width="51"
                  height="52"
                  rx="25.5"
                  transform="translate(0.403 0.401)"
                  fill="#0d2538" />
                <path
                  d="M228.554,228.137a3.131,3.131,0,1,1,3.131,3.129A3.13,3.13,0,0,1,228.554,228.137Z"
                  transform="translate(-205.606 -202.01)"
                  fill="#fff" />
                <path
                  d="M323.368,228.132a3.139,3.139,0,0,1,3.153-3.124h4.595a3.125,3.125,0,1,1,0,6.249h-4.595A3.139,3.139,0,0,1,323.368,228.132Z"
                  transform="translate(-290.779 -202.01)"
                  fill="#fff" />
                <path
                  d="M107.633,86.166a3.052,3.052,0,0,1-2.923,3.176c-7.27.3-11.709,6-11.493,11.41a3.03,3.03,0,0,1-2.9,3.171,3.147,3.147,0,0,1-3.233-2.976c-.352-8.816,7.01-17.532,17.373-17.7A3.052,3.052,0,0,1,107.633,86.166Z"
                  transform="translate(-78.51 -74.658)"
                  fill="#fff"
                  fill-rule="evenodd" />
              </g>
            </svg>
            <span class="img-label">Gridsome</span>
          </a>
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="img-grid__item no-external-icon">
            <svg
              focussable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 60.114 52.061">
              <path d="M37,0,30.057,12.022,23.115,0H0L30.057,52.061,60.114,0Z" fill="#42b883" />
              <path
                d="M64.237,0,57.3,12.022,50.354,0H39.26L57.3,31.236,75.331,0Z"
                transform="translate(-27.238)"
                fill="#35495e" />
            </svg>
            <span class="img-label">Vue.js</span>
          </a>
          <a
            href="https://webpack.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="img-grid__item no-external-icon">
            <svg
              focussable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 49.83 56.377"
              style="filter: drop-shadow(0px 0px 3px rgba(28, 120, 192, 0.3))">
              <path d="M24.915,0,49.83,14.093V42.285L24.915,56.377,0,42.285V14.093Z" fill="#fff" />
              <path
                d="M89.355,98.853,69.713,109.965v-8.653l12.239-6.734ZM90.7,97.636V74.4l-7.185,4.152V93.49L90.7,97.636ZM48.346,98.853l19.642,11.112v-8.653L55.743,94.578ZM47,97.636V74.4l7.185,4.152V93.49ZM47.843,72.9,67.988,61.5v8.363l-12.908,7.1-.1.058Zm42.014,0L69.713,61.5v8.363l12.908,7.095.1.058,7.133-4.12Z"
                transform="translate(-43.974 -57.541)"
                fill="#8ed6fb" />
              <path
                d="M197.478,242.679,185.4,236.035V222.883l12.078,6.972Zm1.725,0,12.078-6.638V222.883L199.2,229.855ZM198.34,229.353Zm-12.123-7.99L198.34,214.7l12.123,6.663-12.123,7Z"
                transform="translate(-173.464 -200.878)"
                fill="#1c78c0" />
            </svg>
            <span class="img-label">Webpack</span>
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="img-grid__item no-external-icon">
            <svg
              focussable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52.004 52.061">
              <path
                d="M38.52,18.9l-.019-.008a.08.08,0,0,1-.031-.018.149.149,0,0,1-.038-.126l1.05-6.417L44.4,17.25l-5.119,2.178a.113.113,0,0,1-.045.008h-.02a.141.141,0,0,1-.027-.023A2.33,2.33,0,0,0,38.52,18.9Zm7.139-.391,5.263,5.263c1.093,1.094,1.64,1.64,1.84,2.273a2.559,2.559,0,0,1,.073.284L40.258,21l-.02-.008c-.05-.02-.109-.043-.109-.1s.06-.076.11-.1l.016-.007,5.4-2.286Zm6.961,9.508a9.907,9.907,0,0,1-1.7,1.938L44.99,35.882l-7.674-1.6-.041-.008c-.068-.011-.14-.023-.14-.084a2.316,2.316,0,0,0-.889-1.62.133.133,0,0,1-.014-.125.043.043,0,0,1,0-.019l1.443-8.861.005-.03c.008-.068.02-.147.081-.147a2.349,2.349,0,0,0,1.575-.9c.012-.014.02-.029.037-.037a.178.178,0,0,1,.14.019l13.1,5.542Zm-9,9.234L33.868,47l1.67-10.265,0-.014a.184.184,0,0,1,.008-.039c.014-.033.049-.046.083-.06l.016-.007a2.512,2.512,0,0,0,.944-.7.208.208,0,0,1,.122-.081.123.123,0,0,1,.039,0l6.87,1.412ZM31.8,49.069l-1.1,1.1L18.544,32.6l-.014-.019A.119.119,0,0,1,18.5,32.5a.1.1,0,0,1,.03-.057l.014-.018c.037-.054.068-.109.1-.167l.027-.048,0,0a.194.194,0,0,1,.069-.081.164.164,0,0,1,.1,0L32.311,34.9a.223.223,0,0,1,.1.045A.1.1,0,0,1,32.44,35a2.386,2.386,0,0,0,1.4,1.6c.038.019.022.061,0,.106a.323.323,0,0,0-.02.061C33.65,37.8,32.194,46.673,31.8,49.069Zm-2.3,2.3a5.106,5.106,0,0,1-1.829,1.4,2.716,2.716,0,0,1-1.637,0c-.633-.2-1.18-.747-2.273-1.841l-12.21-12.21,3.189-4.946A.2.2,0,0,1,14.8,33.7a.141.141,0,0,1,.124,0,3.3,3.3,0,0,0,2.224-.113c.037-.014.073-.023.1,0a.258.258,0,0,1,.038.043L29.506,51.366ZM10.379,37.535l-2.8-2.8,5.532-2.36a.114.114,0,0,1,.045-.009c.046,0,.073.046.1.088q.083.128.177.25l.018.022c.016.023.005.046-.011.068L10.38,37.535ZM6.338,33.494,2.794,29.95c-.6-.6-1.04-1.04-1.344-1.416l10.775,2.235.041.007c.067.011.14.023.14.086s-.08.1-.148.125L12.227,31,6.338,33.494ZM.831,26.712a2.716,2.716,0,0,1,.122-.672c.2-.633.747-1.179,1.841-2.273l4.535-4.535q3.133,4.547,6.281,9.08c.036.048.077.1.035.143a3.769,3.769,0,0,0-.536.717.217.217,0,0,1-.068.084.075.075,0,0,1-.057,0h0L.831,26.711Zm7.712-8.694,6.1-6.1c.573.251,2.659,1.132,4.524,1.92,1.412.6,2.7,1.141,3.1,1.317a.15.15,0,0,1,.1.073.139.139,0,0,1,0,.081,2.72,2.72,0,0,0,.71,2.482c.041.041,0,.1-.035.149l-.019.029-6.191,9.59a.188.188,0,0,1-.058.068.157.157,0,0,1-.117,0,3.087,3.087,0,0,0-.737-.1,4.061,4.061,0,0,0-.709.086h0a.091.091,0,0,1-.073-.007.285.285,0,0,1-.061-.069L8.543,18.018Zm7.329-7.329L23.766,2.8c1.093-1.093,1.64-1.64,2.273-1.84a2.716,2.716,0,0,1,1.637,0c.633.2,1.18.747,2.273,1.84L31.66,4.506l-5.614,8.7a.21.21,0,0,1-.056.065.142.142,0,0,1-.122,0,2.847,2.847,0,0,0-2.607.5c-.037.038-.091.016-.137,0-.733-.319-6.436-2.729-7.252-3.075ZM32.853,5.7l5.184,5.184-1.249,7.737v.02a.183.183,0,0,1-.011.052c-.014.027-.041.033-.068.041a2.485,2.485,0,0,0-.744.371.209.209,0,0,0-.027.023.086.086,0,0,1-.054.034.155.155,0,0,1-.058-.01l-7.9-3.356-.015-.007c-.05-.02-.11-.045-.11-.1a2.984,2.984,0,0,0-.421-1.242c-.038-.062-.08-.128-.048-.191ZM27.514,17.383l7.405,3.136c.041.019.086.037.1.079a.144.144,0,0,1,0,.077,1.84,1.84,0,0,0-.041.357v.208c0,.052-.053.073-.1.094l-.015.005c-1.173.5-16.47,7.024-16.493,7.024a.088.088,0,0,1-.071-.023c-.041-.041,0-.1.037-.149l.019-.027,6.086-9.423.011-.016c.035-.057.076-.121.141-.121l.061.01a2.837,2.837,0,0,0,.384.037,2.749,2.749,0,0,0,2.295-1.218.217.217,0,0,1,.046-.054.137.137,0,0,1,.133.005ZM19.033,29.854l16.673-7.111a.073.073,0,0,1,.048.023,2.256,2.256,0,0,0,.243.209l.037.023c.034.019.068.041.071.076a.138.138,0,0,1,0,.034l-1.428,8.774-.005.035c-.01.068-.019.145-.083.145a2.348,2.348,0,0,0-1.864,1.15l-.007.011a.189.189,0,0,1-.068.077.152.152,0,0,1-.1,0l-13.3-2.743c-.014,0-.206-.7-.221-.706Z"
                transform="translate(-0.831 -0.829)"
                fill="#0e1e25" />
            </svg>
            <span class="img-label">Netlify</span>
          </a>
          <a
            href="https://www.adobe.com/uk/products/xd.html"
            target="_blank"
            rel="noopener noreferrer"
            class="img-grid__item no-external-icon">
            <svg
              focussable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 53.396 52.061">
              <path
                d="M43.94,52.061H9.456A9.448,9.448,0,0,1,0,42.606V9.456A9.448,9.448,0,0,1,9.456,0H43.94A9.448,9.448,0,0,1,53.4,9.456v33.15A9.448,9.448,0,0,1,43.94,52.061Z"
                fill="#ff26be" />
              <path
                d="M50.695,57.4H18.041A8.055,8.055,0,0,1,10,49.362V18.041A8.055,8.055,0,0,1,18.041,10H50.673a8.041,8.041,0,0,1,8.041,8.041v31.3A8.026,8.026,0,0,1,50.695,57.4Z"
                transform="translate(-7.671 -7.671)"
                fill="#2e001f" />
              <path
                d="M56.931,69.152l6.777,12.531c.121.186.048.373-.145.373H59.351a.477.477,0,0,1-.508-.3C57.294,78.678,55.72,75.6,54.1,72.3H54.05c-1.452,3.121-3.05,6.405-4.6,9.48a.467.467,0,0,1-.436.256H45.023c-.242,0-.266-.186-.145-.326l6.632-12.159L45.1,57.249a.188.188,0,0,1,.145-.326H49.4c.242,0,.339.047.436.256,1.525,3.075,3.074,6.242,4.526,9.34h.048c1.4-3.075,2.953-6.266,4.453-9.317.121-.186.194-.3.436-.3h3.9c.194,0,.266.14.145.326Zm7.963,3.8A9.279,9.279,0,0,1,74.6,63.282a11.15,11.15,0,0,1,1.259.047V57.156a.238.238,0,0,1,.242-.233h3.824c.194,0,.242.07.242.186V78.492a15.971,15.971,0,0,0,.121,2.283c0,.14-.048.186-.194.256a14.889,14.889,0,0,1-6.2,1.351C68.645,82.405,64.893,79.284,64.893,72.949Zm10.964-5.963a3.788,3.788,0,0,0-1.4-.233c-3.05,0-5.179,2.259-5.179,6.009,0,4.286,2.178,6.009,4.913,6.009a4.728,4.728,0,0,0,1.67-.256Z"
                transform="translate(-36.212 -44.762)"
                fill="#ffd9f2" />
            </svg>
            <span class="img-label">Adobe XD</span>
          </a>
        </div>
      </section>
    </div>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
import Contact from '~/components/Contact.vue';
import Welcome from '~/components/WelcomeHero.vue';
import Intro from '~/components/WelcomeIntro.vue';

import Layout from '~/layouts/Default.vue';

export default {
  metaInfo() {
    return {
      title: 'Home',
      link: [{ rel: 'canonical', href: this.$static.metadata.siteUrl }],
      meta: [
        {
          property: 'og:title',
          content: 'Home | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Home | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Home | ' + this.$static.metadata.siteName,
        },
        {
          property: 'og:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          name: 'twitter:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          itemprop: 'description',
          content: this.$static.metadata.siteDescription,
        },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl,
        },
        {
          name: 'twitter:url',
          content: this.$static.metadata.siteUrl,
        },
        {
          property: 'og:image',
          content: this.$static.metadata.siteUrl + '/gsd_landing-shot.png',
        },
        { property: 'og:image:alt', content: 'The web is for everyone' },
        {
          name: 'twitter:image',
          content: this.$static.metadata.siteUrl + '/gsd_landing-shot.png',
        },
        { name: 'twitter:image:alt', content: 'The web is for everyone' },
      ],
    };
  },
  components: {
    Contact,
    Layout,
    Welcome,
    Intro,
  },
};
</script>

<style lang="scss">
.home-contact-wrapper {
  position: relative;
  // overflow-x: hidden;

  @include media-up(medium) {
    display: flex;
    justify-content: space-between;
  }
  @include media-up(small) {
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      z-index: -2;
      height: 100%;
    }
  }
  &:before {
    z-index: -1;
    width: 100%;
    background: $neutral-100;
    opacity: 0.8;

    clip-path: polygon(100% 0, 100% 100%, 0px 100%);
    @include media-up(small) {
      clip-path: polygon(100% 0, 100% 100%, 0px 100%);
    }
    @include media-up(medium) {
      clip-path: polygon(68vw 0px, 100% 0px, 100% 100%, 38vw 100%);
    }
  }
  &:after {
    width: 44vw;
    background: $neutral-200;
    opacity: 0.74;

    clip-path: polygon(14vw 0, 100% 0px, 100% 100%, 100% 100%);
  }
}

.site {
  background: $neutral-100;

  @include media-up(small) {
    flex: 1 1 50%;
    align-self: flex-end;
    background: transparent;
    text-align: right;
  }

  .hidden-wrap-shape {
    display: none;

    @include media-up(small) {
      display: block;
      float: left;
      height: 300px;
      width: 100%;

      shape-outside: polygon(36.6% -82px, 44.28% -27.3%, -4.34% 315px, -12.95% 106.34%);
    }
    @include media-up(medium) {
      shape-outside: polygon(25% 0px, 45% 0px, 15% 100%, -5% 100%);
    }
  }
}

.site__desc {
  max-width: 65ch;
  margin-left: auto;
  text-wrap: pretty;
}

.site__img-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  text-align: center;
  gap: 16px;

  @include media-up(small) {
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  > * {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}

.img-grid__item {
  position: relative;
  color: $text-neutral;
  font-size: 0.8125rem;
  font-weight: $weight-semibold;
  text-decoration: none;

  svg {
    margin-bottom: 0.5rem;
    height: 32px;
    width: 32px;

    @include transition();
    @include media-up(large) {
      height: 52px;
      width: 52px;
    }
  }

  &:hover svg {
    transform: scale(1.1);
  }

  .img-label {
    position: relative;
    padding-bottom: 0.25em;
    white-space: nowrap;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      height: 3px;
      width: 0;
      background: $accent-200;
      transition: none;
      transform: skew(-$angle);

      @include transition();
    }
  }

  &:hover .img-label:after {
    width: 100%;
  }
}

@include media-up(medium) {
  .site-contact {
    padding-right: 0;
  }
  .site {
    padding-left: 0;
  }
}
</style>
