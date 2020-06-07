<template>
	<Layout>
		<div class="case-study page-padding page-width">
			<h1 v-html="$page.caseStudyPost.title" />
			<div
				v-html="$page.caseStudyPost.content"
				class="case-study-content"
			></div>
		</div>
		<!-- <g-link"'/work'">Back to blogs</g-link> -->
	</Layout>
</template>

<page-query>
	query caseStudyPost($path:String){
		caseStudyPost:caseStudyPost(path:$path) {
			date
			projectName
			title
			role
			excerpt
			year
			content
		}
	}
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.caseStudyPost.title,
			meta: [
				{
					name: "description",
					content: this.$page.caseStudyPost.description
				},
				{
					property: "og:title",
					content: this.$page.caseStudyPost.title
				},
				{
					name: "twitter:card",
					content: this.$page.caseStudyPost.image
						? "summary_large_image"
						: "summary"
				},
				{
					name: "twitter:creator",
					content: "@gracesnow"
				},
				{
					property: "og:description",
					cotent: this.$page.caseStudyPost.description
				},
				{
					property: "og:image",
					content: this.$page.caseStudyPost.image || ""
				}
			]
		};
	}
};
</script>

<style lang="scss">
.case-study-content {
	font-size: 2rem;
}
</style>