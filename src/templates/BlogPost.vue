<template>
	<Layout>
		<h1 v-html="$page.blogPost.title" />
		<div v-html="$page.blogPost.content" class="blog-content"></div>
		<!-- <a v-bind:href="'/blog'">Back to blogs</a> -->
	</Layout>
</template>

<page-query>
	query blogPost($path:String){
		blogPost:blogPost(path:$path) {
			title,
			slug,
			content, 
			image,
			description
		}
	}
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.blogPost.title,
			meta: [
				{
					name: "description",
					content: this.$page.blogPost.description
				},
				{
					property: "og:title",
					content: this.$page.blogPost.title
				},
				{
					name: "twitter:card",
					content: this.$page.blogPost.image ? "summary_large_image" : "summary"
				},
				{
					name: "twitter:creator",
					content: "@gracesnow"
				},
				{
					property: "og:description",
					cotent: this.$page.blogPost.description
				},
				{
					property: "og:image",
					content: this.$page.blogPost.image || ""
				}
			]
		};
	}
};
</script>

<style lang="scss">
.blog-content {
	font-size: 2rem;
}
</style>