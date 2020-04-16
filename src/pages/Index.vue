<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
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

<style>
.home-links a {
	margin-right: 1rem;
}

#hero {
	padding-top: 220px;
}
</style>
