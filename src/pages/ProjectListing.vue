<template>
	<Layout>
		<section class="section">
			<h1 class="left">My Work</h1>
			<p>
				Here's a few example designs and code snippets.
				<br />Or head to my <a href="#projects">project case studies</a> if you
				want more detail.
			</p>
			<div>[slider / gallery goes here]</div>
		</section>
		<section class="section">
			<h2>Case Studies</h2>
			<div class="filters">
				<ul>
					<li>
						<label for="dsnProjects">
							<input type="checkbox" name="dsnProjects" id="dsnProjects" />
							UX &amp; Design
						</label>
					</li>
					<li>
						<label for="feProjects">
							<input type="checkbox" name="feProjects" id="feProjects" />
							Front End
						</label>
					</li>
					<li>
						<label for="accProjects">
							<input type="checkbox" name="accProjects" id="accProjects" />
							Accessibility
						</label>
					</li>
				</ul>
			</div>
			<div class="js-projectList">
				<div v-for="post in $page.posts.edges" :key="post.node.title">
					<a v-bind:href="post.node.path" class="flex-grid-wrapper">
						<div class="flex-grid projectItem bg-dark">
							<div class="projectInfo">
								<h3 class="projectTitle">{{ post.node.title }}</h3>
								<h4 class="projectRole">{{ post.node.role }}</h4>
								<p class="projDesc">{{ post.node.desc }}</p>
								<a class="btn" v-bind:href="post.node.path">{{
									post.node.listingBtnText
								}}</a>
							</div>
							<div class="projectImg">
								<img
									:src="post.node.listingImage"
									:alt="post.node.listingImageAlt"
								/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>

		<Contact id="contact" />
	</Layout>
</template>

<page-query>
  query caseStudyPosts {
    posts: allCaseStudyPost (filter: { isCaseStudy: { eq: true }}, limit:5, sortBy: "sortOrder", order: DESC) {
      edges {
        node {
          id
          date (format: "D MMM YYYY")
          title
          role
          desc
          path
          listingImage
          listingImageAlt
          listingBtnText
          sortOrder
        }
      }
    }
  }
</page-query>

<script>
import Contact from "~/components/Contact.vue";

export default {
	metaInfo: {
		title: "Work"
	},
	components: {
		Contact
	}
};
</script>

<style lang="scss">
.js-projectList {
	margin-top: 2rem;
}
</style>