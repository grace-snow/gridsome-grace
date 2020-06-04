<template>
	<Layout>
		<section id="welcome">
			<div class="page-padding page-width welcome-outer">
				<div class="welcome-inner text-center xs:text-left">
					<h1 class="welcome__h1 text-blue-600">
						<span
							class="welcome__h1-1"
							style="font-size: min(max(24px, 4.1vw), 60px);"
							>The Web is for</span
						>
						<br />
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
							<span class="welcome__links text-blue-600">
								<a href class="welcome__link">Email</a>
								<a href class="welcome__link">LinkedIn</a>
								<a href class="welcome__link">Twitter</a>
							</span>
						</p>
					</div>
				</div>
			</div>
			<!-- end hero -->
		</section>

		<div class="flex--small-up">
			<section id="hero" class="section page-padding">
				<h1>The web is for everyone</h1>
				<p>
					<strong>I mean that.</strong>
				</p>
				<p>I'm all about making web apps easy to use and inclusive to all</p>
			</section>
			<section id="about" class="section page-padding">
				<h2>Who am I?</h2>
				<p>
					I'm Grace. I like to design stuff that solves problems and that people
					like to use. I also like to play with code and call myself a 'front of
					the front end' dev.
				</p>
				<!-- G-link prefetches that page -->
				<g-link to="/about/" class="btn">More about me</g-link>
			</section>
		</div>

		<Contact id="contact" />

		<section class="section page-padding">
			<h2>About this site</h2>
			<p>
				I really enjoyed using Vue.js at a previous workplace, so decided to use
				Gridsome (a static site generator leveraging Vue) to get this website
				off the ground. You can read more about the design and build on my blog,
				or see all the code on GitHub.
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

<style lang="scss">
.home-links a {
	margin-right: 1rem;
}

#hero {
	padding-top: 220px;
}

/* bg patterns */
#welcome {
	position: relative;

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
		height: 100vh;
		width: 44vw;
		clip-path: polygon(100% 0, 0% 100%, 100% 100%);
		z-index: -2;
	}
}

.welcome-outer {
	min-height: calc(100vh - 60px);
	padding-top: 4rem;
	padding-bottom: 4rem;
	display: flex;
	flex-direction: column;

	@media (min-width: 560px) {
		flex-direction: row;
	}
}

.welcome-inner {
	@media (min-width: 560px) {
		width: 60%;
	}
}

.welcome__h1 {
	color: $blue-600;
	font-size: 40px;
	text-transform: uppercase;
	line-height: 0.85;
	margin-bottom: 1vw;
	white-space: nowrap;
	position: relative;

	@media screen and (max-width: 260px) {
		margin-bottom: 10px;
	}
}

.welcome__h1-1 {
	font-size: 32px;
}

@media screen and (max-width: 260px) {
	.welcome__h1 {
		line-height: 1.1rem;
	}
	.welcome__h1-1 {
		font-size: 1.2rem !important;
	}
	.welcome__h1-2 {
		font-size: 2rem !important;
		line-height: 30px;
		white-space: normal;
	}
}

.welcome__h1-2 {
	position: relative;
	margin-left: -0.75vw;
	font-size: 50px;
}
.welcome__h1-2:before {
	position: absolute;
	content: "";
	width: 50vw;
	left: -50vw;
	background-color: currentColor;
	opacity: 0.4;
	height: 18%;
	bottom: 52%;
}
.welcome__h1-2:after {
	position: absolute;
	content: "";
	width: 50vw;
	left: -50vw;
	background-color: currentColor;
	opacity: 0.4;
	height: 18%;
	bottom: 25%;
}

.welcome__h2 {
	max-width: 35ch;
	margin-bottom: 10vh;
}

.welcome__h3 {
	font-size: 22px;
	margin-bottom: 5px;
}

.margin-right {
	margin-right: 20px;
}

.welcome__links {
	font-weight: 500;
	display: inline-flex;
	flex-wrap: wrap;
}

.welcome__link {
	position: relative;
	margin-right: 40px;
	text-decoration: underline;
	color: $blue-600;
}

.welcome__link:after {
	position: absolute;
	content: "/";
	right: -23px;
	color: currentColor;
}

.welcome__link:last-of-type {
	margin-right: 0;
}
.welcome__link:last-of-type:after {
	content: "";
}
</style>
