<template>
	<Layout>
		<article id="blogPost" class="section page-padding page-width blog">
			<header class="limit-width h-center">
				<h1 class="blog__title" v-html="$page.blogPost.title" />
				<!-- <p class="small-caps-title">{{ $page.blogPost.timeToRead }}</p> -->
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
		Contact
	}
};
</script>

<style lang="scss">
.blog-content {
	font-size: 2rem;
}
</style>