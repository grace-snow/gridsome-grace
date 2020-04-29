<template>
	<Layout>
		<main id="main" class="main">
			<!-- Learn how to use images here: https://gridsome.org/docs/images -->
			<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

			<section id="welcome-hero" class="welcome">
				<div class="welcome__text">
					<h1
						class="welcome__h1"
						style="font-size: min(max(44px, 11vw), 110px);"
					>
						Grace Snow
					</h1>
					<h2 class="welcome__h2" style="font-size: min(max(20px, 4vw), 36px);">
						Strategic&nbsp;Designer, Front&nbsp;End Enthusiast and Creative
						Problem&nbsp;Solver
					</h2>
					<div class="welcome__links">
						<p style="font-size: min(max(16px, 2vw), 20px);">
							Contact me via:<br />
							<a href="" class="welcome__link">Email</a>
							<a href="" class="welcome__link">LinkedIn</a>
							<a href="" class="welcome__link">Twitter</a>
						</p>
					</div>
				</div>
			</section>

			<Contact id="contact" />

			<section class="section page-padding">
				<h2>About this site</h2>
				<p>
					I really enjoyed using Vue.js at a previous workplace, so decided to
					use Gridsome (a static site generator leveraging Vue) to get this
					website off the ground. You can read more about the design and build
					on my blog, or see all the code on GitHub.
				</p>
				<div class="flex-grid">
					<a href>
						<img src alt="Gridsome" />
					</a>
					<a href>
						<img src alt="Vue.js" />
					</a>
					<a href>
						<img src alt="Webpack" />
					</a>
					<a href>
						<img src alt="Netlify" />
					</a>
					<a href>
						<img src alt="Adoby XD" />
					</a>
				</div>
			</section>
		</main>
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
		Contact
	}
};
</script>

<style lang="scss" >
// Hero welcome section
.welcome {
	position: relative;
	display: flex;
	align-items: center;
	padding: 0 $space-3;

	min-height: calc(100vh - #{$nav-height});

	@include media-up(small) {
		padding: 0 $space-1;
		min-height: calc(100vh - #{$nav-height--small-up});
	}

	&__h1 {
		font-size: $size-mega;
		text-transform: uppercase;
		line-height: 1;
		margin-bottom: $space-5;
		color: $blue-dark-1;
		white-space: nowrap;
		position: relative;

		&:before {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: currentColor;
			opacity: 0.6;
			height: 30%;
			top: 20%;
		}
		&:after {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: currentColor;
			opacity: 0.6;
			height: 30%;
			bottom: 10%;
		}
	}

	&__h2 {
		max-width: 40ch;
		margin-bottom: 8vh;
	}

	&__links {
		font-weight: $weight-semibold;
	}

	&__link {
		margin-right: $space-3;
		color: $blue-dark-2;
		text-decoration: underline;

		&:hover {
			color: darken($blue-dark-2, 10);
		}
	}
}
</style>
