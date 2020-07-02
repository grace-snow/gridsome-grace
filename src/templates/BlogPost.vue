<template>
	<Layout>
		<article id="blogPost" class="section page-padding page-width blog">
			<header class="limit-width h-center">
				<div class="back-link">
					<g-link to="/blog" class="link">Back to blogs</g-link>
				</div>
				<h1 class="blog__title" v-html="$page.blogPost.title" />
				<List class="list--inline-divider small-caps-title">
					<template v-slot:hard-items>
						<li class="list__item">
							{{ $page.blogPost.date }}
						</li>
						<li class="list__item">
							{{ $page.blogPost.timeToRead }}-minute read
						</li>
					</template>
				</List>
			</header>
			<section
				v-html="$page.blogPost.content"
				class="blog-content limit-width h-center"
			></section>
			<g-link to="/blog" class="link">Back to blogs</g-link>
		</article>
		<Contact />
	</Layout>
</template>

<page-query>
	query blogPost($path:String){
		blogPost:blogPost(path:$path) {
			title,
			slug,
			content,
			description
			timeToRead
			date (format: "D MMM YYYY")
		}
	}
</page-query>
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
import List from "~/components/List.vue";

export default {
	metaInfo() {
		return {
			title: this.$page.blogPost.title,
			link: [
				{
					rel: "canonical",
					href:
						this.$static.metadata.siteUrl + "/blog/" + this.$page.blogPost.slug
				}
			],
			meta: [
				{
					property: "og:title",
					content: this.$page.blogPost.title + " | Grace Snow Design"
				},
				{
					name: "twitter:title",
					content: this.$page.blogPost.title + " | Grace Snow Design"
				},
				{
					itemprop: "name",
					content: this.$page.blogPost.title + " | Grace Snow Design"
				},
				{
					property: "og:description",
					cotent: this.$page.blogPost.description
				},
				{
					name: "twitter:description",
					content: this.$page.blogPost.description
				},
				{
					itemprop: "description",
					content: this.$page.blogPost.description
				}
				// {
				// 	name: "twitter:card",
				// 	content: this.$page.blogPost.image ? "summary_large_image" : "summary"
				// },
				// {
				// 	property: "og:image",
				// 	content: this.$page.blogPost.image || ""
				// }
			]
		};
	},
	components: {
		Contact,
		List
	}
};
</script>

<style lang="scss">
.blog {
	header {
		.back-link {
			padding: 1rem 0 1rem 1.5em;
			border-bottom: 4px solid $accent-200;
			margin-bottom: 1rem;

			a {
				position: relative;

				&:before {
					position: absolute;
					content: "";
					left: -1.5em;
					top: 0;
					display: inline-block;
					color: $blue-400;
					background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focussable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.34 72' fill='%23FFBF00'%3E%3Cpath d='M41.1 61.3L10.6 36l30.5-25.3V.5L1.2 33.6v4.9l39.9 33V61.3z'/%3E%3C/svg%3E");
					background-position: center;
					background-repeat: no-repeat;
					height: 100%;
					width: 0.75em;
					/* transform: rotate(180deg); */
				}
			}
		}
	}
}

.blog__title {
	color: $blue-600;
	color: $blue-800;
	margin-bottom: 1rem;
}

.blog-content {
	font-size: $header4;
	font-size: $header4-clamp;

	> * {
		margin-bottom: 2.5rem;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		@include font-met;
		font-weight: $weight-semibold;
		margin-top: 4rem;
	}

	ul,
	ol {
		@include list--chevrons;
		margin-top: -1.75rem;
	}

	hr {
		margin: 4rem auto;
		background: $blue-600;
		background: $accent-200;
		border: 0;
		height: 5px;
		transform: skew(-$angle);
		width: 25%;
	}
}
</style>