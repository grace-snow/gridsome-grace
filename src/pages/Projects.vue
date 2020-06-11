<template>
	<Layout>
		<!-- NOTE this is the projects listing page looping over posts in the projects folder using vue-remark - won't optimise images -->
		<section class="section page-padding page-width">
			<h1 class="equals-decal">My Work</h1>
			<div class="js-projectList">
				<div
					v-for="project in $page.projects.edges"
					:key="project.id"
					class="post border-gray-400 border-b mb-12"
				>
					<g-link :to="project.node.path">
						<div class="flex projectItem bg-darkxxx">
							<div class="projectInfo">
								<h2 class="text-3xl font-bold text-copy-primary">
									{{ project.node.title }}
								</h2>
								<h4 class="projectRole">{{ project.node.role }}</h4>
								<p class="projDesc text-lg mb-4">
									{{ project.node.excerpt }}
								</p>
								<g-link
									:to="project.node.path"
									class="btn font-bold uppercase"
									>{{ project.node.projectName }}</g-link
								>
							</div>
							<div class="projectImg">
								<g-image
									:src="project.node.listingImage"
									:alt="project.node.listingImageAlt"
								/>
							</div>
						</div>
					</g-link>
				</div>
				<!-- end post -->
			</div>
			<!-- </section> -->
		</section>
		<Contact id="contact" />
	</Layout>
</template>

<page-query>
  query Projects {
    projects: allProject (sortBy: "sortOrder", order: ASC) {
      edges {
        node {
          id
          path
          title
          role
          year
          excerpt
          projectName
          listingImage
          listingImageAlt
        }
      }
    }
  }
</page-query>

<script>
import Contact from "~/components/Contact.vue";

export default {
	metaInfo: {
		title: "projects"
	},
	components: {
		Contact
	}
};
</script>

