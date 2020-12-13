<template>
	<BlmLayout>
		<Welcome id="welcome" />

		<Intro id="intro" />

		<div class="home-contact-wrapper page-width">
			<Contact id="contact" />
			<section class="section page-padding site">
				<div role="presentation" class="hidden-wrap-shape"></div>
				<h2>About this&nbsp;site</h2>
				<p class="site__desc">
					I really enjoyed using Vue.js at a previous workplace, so decided to
					use Gridsome (a static site generator leveraging Vue) to get this
					website off the ground. You can read more about the design and build
					<strong>on my blog very soon</strong> or see all the code
					<a
						href="https://github.com/grace-snow/gridsome-grace"
						target="_blank"
						rel="noopener noreferrer"
						class="link nowrap"
						>on GitHub</a
					>.
				</p>
				<div class="flex-grid site__img-grid">
					<h3 class="sr-only">Here's the tech stack I used:</h3>
					<a
						href="https://gridsome.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="img-grid__item"
					>
						<Gridsome-logo alt="Gridsome logo" />
						<span class="img-label">Gridsome</span>
					</a>
					<a
						href="https://vuejs.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="img-grid__item"
					>
						<Vue-logo alt="Vue.js" />
						<span class="img-label">Vue.js</span>
					</a>
					<a
						href="https://webpack.js.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="img-grid__item"
					>
						<Webpack-logo alt="Webpack" />
						<span class="img-label">Webpack</span>
					</a>
					<a
						href="https://www.netlify.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="img-grid__item"
					>
						<Netlify-logo alt="Netlify" />
						<span class="img-label">Netlify</span>
					</a>
					<a
						href="https://www.adobe.com/uk/products/xd.html"
						target="_blank"
						rel="noopener noreferrer"
						class="img-grid__item"
					>
						<Xd-logo alt="Adoby XD" />
						<span class="img-label">Adobe XD</span>
					</a>
				</div>
			</section>
		</div>
	</BlmLayout>
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
import Contact from "~/components/Contact.vue";
import Welcome from "~/components/WelcomeHero.vue";
import Intro from "~/components/WelcomeIntro.vue";

import GridsomeLogo from "~/assets/images/logos/gridsome.svg";
import VueLogo from "~/assets/images/logos/vue.svg";
import NetlifyLogo from "~/assets/images/logos/netlify.svg";
import WebpackLogo from "~/assets/images/logos/webpack.svg";
import XdLogo from "~/assets/images/logos/xd.svg";

import BlmLayout from "~/layouts/BlmBanner.vue";

export default {
	metaInfo() {
		return {
			title: "Home",
			link: [{ rel: "canonical", href: this.$static.metadata.siteUrl }],
			meta: [
				{
					property: "og:title",
					content: "Home | " + this.$static.metadata.siteName
				},
				{
					name: "twitter:title",
					content: "Home | " + this.$static.metadata.siteName
				},
				{
					itemprop: "name",
					content: "Home | " + this.$static.metadata.siteName
				},
				{
					property: "og:description",
					content: this.$static.metadata.siteDescription
				},
				{
					name: "twitter:description",
					content: this.$static.metadata.siteDescription
				},
				{
					itemprop: "description",
					content: this.$static.metadata.siteDescription
				},
				{
					property: "og:url",
					content: this.$static.metadata.siteUrl
				},
				{
					name: "twitter:url",
					content: this.$static.metadata.siteUrl
				},
				{
					property: "og:image",
					content: this.$static.metadata.siteUrl + "/gsd_landing-shot.png"
				},
				{ property: "og:image:alt", content: "The web is for everyone" },
				{
					name: "twitter:image",
					content: this.$static.metadata.siteUrl + "/gsd_landing-shot.png"
				},
				{ name: "twitter:image:alt", content: "The web is for everyone" }
			]
		};
	},
	components: {
		BlmLayout,
		Contact,
		Welcome,
		Intro,
		GridsomeLogo,
		VueLogo,
		NetlifyLogo,
		WebpackLogo,
		XdLogo
	}
};
</script>

<style lang="scss">
.home-contact-wrapper {
  position: relative;

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
    flex-basis: 50vw;
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

      shape-outside: polygon(
      36.6% -82px,
      44.28% -27.3%,
      -4.34% 315px,
      -12.95% 106.34%
      );
    }
    @include media-up(medium) {
      shape-outside: polygon(25% 0px, 45% 0px, 15% 100%, -5% 100%);
    }
  }
}

.site__desc {
  max-width: 65ch;
}

.site__img-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  text-align: center;

  @include media-up(small) {
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  >  * {
    display: flex;
    flex: 0 1 12%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem;
  }
}

.img-grid__item {
  position: relative;
  color: $text-neutral;
  font-size: $smallText;
  font-weight: $weight-semibold;
  text-decoration: none;

  svg {
    margin-bottom: 0.5rem;
    height: 38px;
    width: 38px;

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

</style>
