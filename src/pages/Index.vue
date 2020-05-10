<template>
	<Layout>
		<main id="main" class="main">
			<!-- Learn how to use images here: https://gridsome.org/docs/images -->
			<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

			<section id="welcome-hero" class="welcome">
				<div class="welcome__text">
					<h1 class="welcome__h1">
						<span
							class="welcome__h1-1"
							style="font-size: min(max(24px, 4.1vw), 60px);"
							>The Web is for</span
						><br />
						<span
							class="welcome__h1-2"
							style="font-size: min(max(44px, 12vw), 130px);"
							>Everyone</span
						>
					</h1>
					<h2
						class="welcome__h2"
						style="font-size: min(max(20px, 3.25vw), 36px);"
					>
						I care about making web stuff that's easy to use and inclusive.
					</h2>
					<div class="welcome__cta">
						<h3
							class="welcome__h3"
							style="font-size: min(max(17px, 2.2vw), 22px)"
						>
							Want to work together?
						</h3>
						<p style="font-size: min(max(15px, 1.8vw), 18px);">
							<span class="margin-right">Contact me via:</span>
							<span class="welcome__links">
								<a href="" class="welcome__link">Email</a>
								<a href="" class="welcome__link">LinkedIn</a>
								<a href="" class="welcome__link">Twitter</a>
							</span>
						</p>
					</div>
				</div>
			</section>

			<Home-Intro id="about" />

			<Home-Projects id="projects" />

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
import HomeIntro from "~/components/HomeSections/Intro.vue";
import HomeProjects from "~/components/HomeSections/Projects.vue";

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
		HomeIntro,
		HomeProjects
	}
};
</script>

<style lang="scss" >
// Hero welcome section
.welcome {
	position: relative;
	display: flex;
	align-items: center;
	padding: 0 $space-20;

	min-height: calc(100vh - #{$nav-height});

	@include media-up(small) {
		padding: 0 $space-40;
		min-height: calc(100vh - #{$nav-height--small-up});
	}

	// Welcome Background Shapes
	&:before,
	&:after {
		position: absolute;
		content: "";
		right: 0;

		z-index: -1;
	}

	&:before {
		top: 0;
		background: #f0faff;
		opacity: 0.8;
		height: 88vh;
		width: 34vw;
		clip-path: polygon(0 0, 100% 100%, 100% 0);
	}

	&:after {
		bottom: 0;
		background: #c9e2f5;
		opacity: 0.74;
		height: calc(100vh - #{$nav-height});
		width: 44vw; // make var
		clip-path: polygon(100% 0, 0% 100%, 100% 100%);
		z-index: -2;
		@include media-up(small) {
			min-height: calc(100vh - #{$nav-height--small-up});
		}
	}

	// Welcome Writing
	&__h1 {
		font-size: 40px;
		text-transform: uppercase;
		line-height: 0.85;
		margin-bottom: 1vw;
		color: $blue-dark-2;
		white-space: nowrap;
		position: relative;

		&-1 {
			font-size: 32px;
		}

		&-2 {
			position: relative;
			margin-left: -0.75vw;
			font-size: 50px;

			&:before {
				position: absolute;
				content: "";
				width: 50vw;
				left: -50vw;
				background-color: currentColor;
				opacity: 0.4;
				height: 18%;
				bottom: 52%;
			}
			&:after {
				position: absolute;
				content: "";
				width: 50vw;
				left: -50vw;
				background-color: currentColor;
				opacity: 0.4;
				height: 18%;
				bottom: 25%;
			}
		}
	}

	&__h2 {
		max-width: 35ch;
		margin-bottom: 10vh;
	}

	&__h3 {
		font-size: 22px;
		margin-bottom: 5px;
	}

	.margin-right {
		margin-right: $space-20;
	}

	&__links {
		font-weight: $weight-semibold;
		display: inline-flex;
		flex-wrap: wrap;
	}

	&__link {
		position: relative;
		margin-right: $space-40;
		color: $blue-dark-2;
		text-decoration: underline;

		&:hover {
			color: darken($blue-dark-2, 10);
		}

		&:after {
			position: absolute;
			content: "/";
			color: $blue-light-3;
			right: -23px;
		}

		&:last-of-type {
			margin-right: 0;

			&:after {
				content: "";
			}
		}
	}
}
</style>
