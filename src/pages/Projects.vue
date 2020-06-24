<template>
	<Layout>
		<Page-Header :pageTitle="pageTitle">
			<template v-slot:intro>
				<strong>Sorry</strong> there's not much here yet. I'll add more designs,
				case studies and code snippets over time. Watch this space!
			</template>
			<div role="presentation">
				<h2 class="h5Text mb-small">
					{{ listTitle }}
				</h2>
				<List :items="listItems" class="list--inline-divider">
					<li slot-scope="row" class="list__item">
						<a
							:href="row.item.linkUrl"
							target="_blank"
							rel="noopener noreferrer"
							>{{ row.item.text }}</a
						>
					</li>
				</List>
			</div>
		</Page-Header>

		<section class="projects bg-100xxx section">
			<div class="page-padding page-width">
				<h2 class="equals-decal h1Text">Case Studies</h2>
				<ul class="js-projectList project-listing project-list unstyle-list">
					>
					<li
						v-for="project in $page.projects.edges"
						:key="project.id"
						class="project-list__project-item"
						<g-link :to="project.node.path" class="project-list__link">
							<div>
								<h2 class="project-item__title">
									{{ project.node.listingTitle }}
								</h2>
								<p class="project-item__desc">
									{{ project.node.listingDesc }}
								</p>
								<div class="project-item__role">
									<h3 class="project-role__label">
										My Role:
									</h3>
									<p class="project-role__role">{{ project.node.role }}</p>
								</div>
							</div>
							<!-- <div class="project-item__img-wrapper">
								<g-image
									:src="project.node.listingImage"
									:alt="project.node.listingImageAlt"
									class="project-item__img"
								/>
							</div> -->
						</g-link>
					</li>
					<li class="temp">
						<!-- TODO: TEMP! Remove later -->
						<div class="box">
							<h2>
								More coming soon!
							</h2>
							<p>
								This site is a work in progress and I haven't had time to write
								up more case studies yet &mdash; <strong>sorry</strong>. The
								next write up will be about redesigning a complex
								school-inspection readiness solution.
							</p>
							<p>
								I can happily send links to more examples of my work if needed,
								or take a look at
								<a
									href="https://codepen.io/grace-snow"
									target="_blank"
									rel="noopener noreferrer"
									>Codepen</a
								>
								and my
								<a
									href="https://medium.com/@gracesnowdesign"
									target="_blank"
									rel="noopener noreferrer"
									>Medium blogs</a
								>
								in the meantime.
							</p>
							<p><strong>Thanks for your patience.</strong></p>
						</div>
					</li>
				</ul>
			</div>
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
					listingTitle
          role
          year
          listingDesc
          projectName
          listingImage
          listingImageAlt
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from "~/components/PageHeader.vue";
import List from "~/components/List.vue";
import Contact from "~/components/Contact.vue";

export default {
	metaInfo: {
		title: "Projects",
		link: [
			{
				rel: "canonical",
				href: "https://www.gracesnowdesign.co.uk/projects/"
			}
		],
		meta: [
			{
				property: "og:title",
				content: "Projects | Grace Snow Design"
			},
			{
				name: "twitter:title",
				content: "Projects | Grace Snow Design"
			},
			{
				itemprop: "name",
				content: "Projects | Grace Snow Design"
			}
		]
	},
	components: {
		List,
		PageHeader,
		Contact
	},
	data() {
		return {
			pageTitle: "Projects",
			listTitle: "In the meantime, you might like to check out:",
			listItems: [
				{
					text: "Codepen",
					linkUrl: "https://codepen.io/grace-snow"
				},
				{
					text: "Medium Blogs",
					linkUrl: "https://medium.com/@gracesnowdesign"
				},
				{
					text: "Github",
					linkUrl: "https://github.com/grace-snow/"
				}
			]
		};
	}
};
</script>

<style lang="scss">
/* TEMP */
.temp p {
	margin-bottom: 1rem;
}

/* .projects { */
.project-list {
	max-width: map-get($breakpoints, medium);
	/* @include flex-grid(1.4rem, 100%); */

	@include media-up(small) {
		/* @include flex-grid(1.4rem, 33%); */

		&__project-item {
			/* min-width: 260px; */
			/* max-width: 500px; */
		}
	}

	&__link {
		text-decoration: none;
		color: unset;
		font-weight: unset;
		/* display: flex; */
		/* flex-direction: column; */
		/* flex-direction: row-reverse; */
		display: block;
		border-left: 4px solid $blue-300;
		padding-left: 1rem;
		margin-bottom: 2.5rem;
	}
}
/* } */

.project-item {
	&__title {
		color: $blue-600;
		font-size: $header3;
		font-size: $header3-clamp;
		text-decoration: underline;
		order: 2;
		margin-bottom: 0.5rem;
	}

	&__img-wrapper {
		margin-bottom: 1rem;
		padding: 1.5rem;
		width: auto;
		box-shadow: 0px 2px 6px #50616ca1;
		order: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1.5rem;
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
			font-size: $smallText-clamp;
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