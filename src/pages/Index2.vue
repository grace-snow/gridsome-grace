<template>
	<Layout>
		<div class="main-wrapper">
			<!-- Learn how to use images here: https://gridsome.org/docs/images -->
			<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
			<div id="hero-wrapper" class="flex--small-up">
				<section id="hero" class="section page-padding">
					<h1 class="mega-size has-equals">The web is for everyone</h1>
					<p>
						<strong class="mob-only">I mean that.<br/></strong>
						I'm all about making web apps easy to use and inclusive to all
					</p>
				</section>
				<section id="about" class="section page-padding">
					<div class="poly-wrap">
						<div id="img">
					    <img src="http://placekitten.com/g/240/200" alt="Cute kitten">
					  </div>
						<div id="txt" style="">
							<h2>Who am I?</h2>
							<p style="margin-bottom: 16px;">
								I'm Grace. I like to design stuff that solves problems and that people like to use. I also like to play with code and call myself a 'front of the front end' dev.
							</p>
							<g-link to="/about/" class="btn btn-diagonal">
								<span class="btn__txt">More about me</span>
							</g-link>
						</div>
					</div>
				</section>
					<!-- G-link prefetches that page -->
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
h2 {
	color: $blue-light-4;
}

.home-links a {
	margin-right: 1rem;
}

#hero {
	flex-basis: 65%;
	flex-grow: 1;
}

/* Inline #7 | http://localhost:8080/ */

#hero {
	/* padding-top: 220px; */
	padding-top: 10%;
}

/* Element | http://localhost:8080/ */

#about {
	align-self: flex-end;
	height: 100%;
	position: relative;
}
.hero-wrapper {
	position: relative;
}

.hero-wrapper,
#hero {
	min-height: calc(100vh - #{$nav-height});

	@include media-up(small) {
		min-height: calc(100vh - #{$nav-height--small-up});
	}
}

#hero-wrapper::before {
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 50%;
	z-index: -1;
	border-bottom: solid aliceblue;
	border-width: 0 0 100vh;
	clip-path: polygon(65% 0, 100% 0, 100% 100%, 0% 100%);
}

.main-wrapper::before {
	position: absolute;
	z-index: -1;
	background: #f0faff;
	clip-path: polygon(72% 0, 100% 0, 100% 100%, 0% 100%);
	top: 0;
	right: 0;
	height: 100%;
	content: "";
	width: 100%;
}

.poly-wrap {
	max-width: 600px;
	min-height: 200px;
	margin: 1rem auto;
	position: relative;
}

#img {
	shape-outside: polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%);
	clip-path: polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%);
	margin: 0 20px 20px 0;
	background: #000;
	width: 240px;
	height: 200px;
	float: left;
}

.main-wrapper::before {
	clip-path: polygon(65% 0, 100% 0, 100% 100%, 0% 135%);
}

.main-wrapper::after {
	position: absolute;
	content: "";
	background: #f0faff;
	right: 0;
	width: 50vw;
	height: 100%;
	top: 0;
	z-index: -2;
	transform: translateX(50vw);
}

.btn::before {
	position: absolute;
	content: "";
	left: 0;
	top: 0;
	height: 100%;
	width: 0;
	background: #b3e6ff;
	border-left: 5px solid #2f7ac0;
	transition: all 0.2s ease-in;
	display: inline-block;
}

.btn-diagonal__txt {
	display: inline-block;
	transform: skew(20deg);
}
.btn:hover::before {
	width: 100%;
}
/* Element | http://localhost:8080/ */
.main-wrapper {
	position: relative;
}
/* Element | http://localhost:8080/ */
#about {
	display: flex;
	flex-grow: 1;
	padding-top: 25%;
}
/* Element | http://localhost:8080/ */
header.bg-darkest {
	width: 100vw;
	margin-left: 50%;
	transform: translateX(-50%);
}
/* Element | http://localhost:8080/ */
#footer {
	width: 100vw;
	margin-left: 50%;
	transform: translateX(-50%);
}
/* Element | http://localhost:8080/ */
.btn {
	position: relative;
	color: #2f7ac0;
	background: transparent;
	padding: 0.4em 0.6em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	font-weight: 600;
	border: 0;
	margin-top: 8px;
	padding-left: 1em;
	transform: skew(-20deg);
}
/* Element | http://localhost:8080/ */
.btn {
	display: inline-block;
}
/* Element | http://localhost:8080/ */
#txt > p:nth-child(2) {
	margin-bottom: 16px;
}
</style>
