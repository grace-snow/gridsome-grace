<template>
	<Layout>
		<section id="blogs" class="section page-padding page-width blog-listing">
			<h1 class="equals-decal page-heading">Blog</h1>
			<p>Listing page for blog articles.</p>
			<ul>
				<li v-for="blog in $page.blogs.edges" :key="blog.node.title">
					<a v-bind:href="blog.node.path"
						>{{ blog.node.title }} - {{ blog.node.date }}</a
					>
				</li>
			</ul>
		</section>
		<Contact id="contact" />
	</Layout>
</template>

<page-query>
  query blogPosts {
    blogs: allBlogPost (filter: { blogpost: { eq: true }}, limit:5, sortBy: "date", order: DESC) {
      edges {
        node {
          id
          title
          path
          date (format: "D MMM YYYY")
          description
        }
      }
    }
  }
</page-query>

<script>
import Contact from "~/components/Contact.vue";

export default {
	metaInfo: {
		title: "Blog",
		link: [
			{
				rel: "canonical",
				href: "https://www.gracesnowdesign.co.uk/blog/"
			}
		],
		meta: [
			{
				property: "og:title",
				content: "Blog | Grace Snow Design"
			},
			{
				name: "twitter:title",
				content: "Blog | Grace Snow Design"
			},
			{
				itemprop: "name",
				content: "Blog | Grace Snow Design"
			}
		]
	},
	components: {
		Contact
	}
};
</script>
