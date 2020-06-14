<template>
	<Layout>
		<!-- NOTE this is the projects listing page looping over posts in the projects folder -->
		<section id="projects" class="section page-padding page-width projects">
			<h1 class="page-heading equals-decal mb-large">My Work</h1>
			<ul class="js-projectList project-listing project-list unstyle-list">
				<li
					v-for="project in $page.projects.edges"
					:key="project.id"
					class="project-list__project-item"
				>
					<g-link :to="project.node.path" class="project-list__link">
						<h2 class="project-item__title">
							{{ project.node.shortTitle }}
						</h2>
						<div class="project-item__img-wrapper">
							<g-image
								:src="project.node.listingImage"
								:alt="project.node.listingImageAlt"
								class="project-item__img"
							/>
						</div>
						<p class="project-item__desc">
							{{ project.node.excerpt }}
						</p>
						<div class="project-item__role">
							<h3 class="project-role__label">
								My Role:
							</h3>
							<p class="project-role__role">{{ project.node.role }}</p>
						</div>
					</g-link>
				</li>
				<li class="temp">
					<!-- TODO: TEMP! Remove later -->
					<h2>
						More coming soon!
					</h2>
					<p>
						This site is a work in progress and I haven't had time to write up
						more case studies yet. I can happily send links to more examples of
						my work if you need. Or, take a look at
						<a
							href="https://codepen.io/grace-snow"
							target="_blank"
							rel="noopener noreferrer"
							>Codepen</a
						>
						or my
						<a
							href="https://medium.com/@gracesnowdesign"
							target="_blank"
							rel="noopener noreferrer"
							>Medium blogs</a
						>
						in the meantime.
					</p>
					<p><strong>Thanks for your patience.</strong></p>
				</li>
			</ul>
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
					shortTitle
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

<style lang="scss">
/* TEMP */
.temp p {
	margin-bottom: 1rem;
}

.projects {
	.project-list {
		@include flex-grid(1.6rem, 33%);

		&__project-item {
			min-width: 260px;
			max-width: 500px;
		}

		&__link {
			text-decoration: none;
			color: unset;
			font-weight: unset;
			font-size: $header5;
			display: flex;
			flex-direction: column;
		}
	}
}

.project-item {
	&__title {
		color: $blue-600;
		font-size: $header3;
		text-decoration: underline;
		order: 2;
		margin-bottom: 0.5rem;
	}

	&__img-wrapper {
		margin-bottom: 1rem;
		padding: 1rem;
		width: auto;
		box-shadow: 0px 2px 6px #50616ca1;
		order: 1;
	}

	&__desc {
		order: 3;
		margin-bottom: 0.5rem;
	}

	&__role {
		order: 4;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 0.5rem;

		> * {
			all: unset;
			font-size: $smallText;
		}
	}
}

.project-role {
	&__label {
		@include small-caps-title;
		margin: 0 0.5rem 0 0;
	}
	&__role {
		@include font-heading;
	}
}
</style>