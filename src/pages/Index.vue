<template>
	<Layout>
		<Welcome id="welcome" />

		<section class="intro">
			<div class="intro__content">
				<h2>Who am I?</h2>
				<p>
					<strong>I'm Grace</strong>, a strategic designer and front end
					enthusiast based in Liverpool, UK.
				</p>
				<p>
					Beyond work, I love being outside, walking in the park, cuddling my
					cats, and drinking in beer gardens.
				</p>
				<g-link to="/about" class="btn">More about me</g-link>
			</div>
			<div class="intro__img">
				<img
					src="../assets/images/gs_sefton.jpg"
					alt="Grace out in the park"
					class="sr-only"
				/>
			</div>
		</section>

		<!-- <section id="about" class="flex--small-up page-width js-getHeight">
			<div class="section page-padding about__text ">
				<h2>Who am I?</h2>
				<p>
					I'm Grace. I like to design stuff that solves problems and that people
					like to use. I also like to play with code and call myself a 'front of
					the front end' dev.
				</p>
				<g-link to="/about/" class="btn">More about me</g-link>
			</div>
			<div class="about__img">
				<img
					src="../assets/images/gs_sefton.jpg"
					class="about__clipped-img js-sendHeight"
					alt="Grace Snow out in the park"
				/>
			</div>
		</section> -->

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
import Welcome from "~/components/WelcomeHero.vue";

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
		Welcome
	},
	beforeMount() {},
	created() {
		document.onload(this.myEventHandler);
		window.addEventListener("resize", this.myEventHandler);
	},
	destroyed() {
		window.removeEventListener("resize", this.myEventHandler);
	},
	methods: {
		myEventHandler(e) {
			let imgHeight = document.querySelector(".js-sendHeight").height;
			const aboutSection = document.querySelector(".js-getHeight");

			aboutSection.style.height = imgHeight + "px";
		}
	}
};
</script>

<style lang="scss">
#about {
	background-image: $blue-gradient-1000;
	color: #fff;
	position: relative;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		background: #f0faff;
		opacity: 0.8;
		height: 360%;
		width: 44vw;
		-webkit-clip-path: polygon(0 0, 100% 100%, 100% 0);
		clip-path: polygon(0 0, 100% 100%, 100% 0);
		right: 0;
		z-index: 0;
		opacity: 0.5;
	}
}

.about__text {
}

.about__img {
	shape-outside: polygon(-40px 0, 100% 0px, 100% 100%, 80px 100%);
	clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 35% 100%);
	z-index: 1;
}

.about__clipped-img {
	width: 44vw;
}

/* NEW */
.intro {
	background: #1c5888;
	background: linear-gradient(to bottom, #1c5888 21%, #0f2e48 97%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c5888', endColorstr='#0f2e48',GradientType=0 );
	color: #fff;
	@include media-up(small) {
		display: flex;
		justify-content: space-between;
	}
	&__content {
		padding: $space-40 $space-20;
		@include media-up(small) {
			padding: $space-60 0 $space-60 $space-40;
		}
	}
	h2 {
		color: #fff;
		position: relative;
		text-shadow: 0 2px 4px $blue-dark-5;
		&:before {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: $blue-light-3;
			opacity: 0.2;
			height: 22%;
			bottom: 56%;
		}
		&:after {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: $blue-light-3;
			opacity: 0.2;
			height: 22%;
			bottom: 15%;
		}
	}
	p {
		letter-spacing: $main-letter-space;
		margin-bottom: 1em;
		text-shadow: 0 2px 4px $blue-dark-5;
	}
	&__img {
		min-width: 44vw;
		min-height: 300px;
		background-image: url("../assets/images/gs_sefton.jpg");
		background-size: cover;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 45% 100%);
	}
}
</style>
