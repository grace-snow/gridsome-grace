<template>
	<Layout>
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
import Contact from "~/components/Contact.vue";
import Welcome from "~/components/WelcomeHero.vue";
import Intro from "~/components/WelcomeIntro.vue";

import GridsomeLogo from "~/assets/images/logos/gridsome.svg";
import VueLogo from "~/assets/images/logos/vue.svg";
import NetlifyLogo from "~/assets/images/logos/netlify.svg";
import WebpackLogo from "~/assets/images/logos/webpack.svg";
import XdLogo from "~/assets/images/logos/xd.svg";

export default {
	metaInfo: {
		title: "Home",
		link: [{ rel: "canonical", href: "https://www.gracesnowdesign.co.uk" }],
		meta: [
			{
				key: "description",
				name: "description",
				content:
					"Connect with Grace: UX Designer, Front End Developer, Mentor, Teacher and Accessibility Advocate based in Liverpool, UK"
			},
			// OpenGraph data (Most widely used)
			{ property: "og:title", content: "Home | Grace Snow Design" },
			{ property: "og:site_name", content: "Grace Snow Design" },
			// Should the the same as your canonical link, see below.
			// {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
			// {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
			// {property: 'og:image:alt', content: 'Img alt text'},
			{ property: "og:description", content: "The home of Grace Snow Design" },
			// Twitter card
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: "Home | Grace Snow Design" },
			{ name: "twitter:description", content: "The home of Grace Snow Design" },
			// {name: 'twitter:url', content: 'https://www.my-site.com/my-special-page'},
			{ name: "twitter:site", content: "@gracesnow" },
			{ name: "twitter:creator", content: "@gracesnow" },
			// {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},
			// {name: 'twitter:image:alt', content: 'Img alt text'},
			// Google / Schema.org markup:
			{ itemprop: "name", content: "Home | Grace Snow Design" },
			{ itemprop: "description", content: "The home of Grace Snow Design" }
			// {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
		]
	},
	components: {
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
			position: absolute;
			content: "";
			height: 100%;
			right: 0;
			top: 0;
			z-index: -2;
		}
	}
	&:before {
		width: 100%;
		background: $neutral-100;
		opacity: 0.8;
		z-index: -1;
		clip-path: polygon(100% 0, 100% 100%, 0px 100%);

		@include media-up(small) {
			clip-path: polygon(100% 0, 100% 100%, 0px 100%);
		}
		@include media-up(medium) {
			clip-path: polygon(68vw 0px, 100% 0px, 100% 100%, 38vw 100%);
		}
	}
	&:after {
		background: $neutral-200;
		opacity: 0.74;
		width: 44vw;
		clip-path: polygon(14vw 0, 100% 0px, 100% 100%, 100% 100%);
	}
}

.site {
	background: $neutral-100;

	@include media-up(small) {
		text-align: right;
		flex-basis: 50vw;
		align-self: flex-end;
		background: transparent;
	}

	.hidden-wrap-shape {
		display: none;

		@include media-up(small) {
			display: block;
			shape-outside: polygon(
				36.6% -82px,
				44.28% -27.3%,
				-4.34% 315px,
				-12.95% 106.34%
			);
			width: 100%;
			height: 300px;
			float: left;
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
	text-align: center;
	display: flex;
	margin-top: 1.5rem;

	@include media-up(small) {
		justify-content: flex-end;
	}

	> * {
		flex: 0 1 12%;
		margin: 0.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
}

.img-grid__item {
	color: $text-neutral;
	text-decoration: none;
	font-size: $smallText;
	font-weight: $weight-semibold;
	position: relative;

	svg {
		height: 38px;
		width: 38px;
		margin-bottom: 0.5rem;
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
		white-space: nowrap;
		position: relative;
		padding-bottom: 0.25em;

		&:after {
			content: "";
			position: absolute;
			left: 0;
			width: 0;
			z-index: -1;
			transition: none;
			background: $accent-200;
			transform: skew(-$angle);
			bottom: 0;
			height: 3px;
			@include transition();
		}
	}

	&:hover .img-label:after {
		width: 100%;
	}
}
</style>
