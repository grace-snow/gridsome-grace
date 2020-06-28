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

		<section id="case-studies" class="section page-padding page-width">
			<h2 class="equals-decal">Case Studies</h2>
			<ul class="js-projectListxxx unstyle-list case-study-list">
				<li
					v-for="project in $page.projects.edges"
					:key="project.id"
					class="case-study"
				>
					<g-link :to="project.node.path" class="case-study__link">
						<!-- <div class="case-study__img"> -->
						<g-image
							:src="project.node.listingImage"
							:alt="project.node.listingImageAlt"
							class="case-study__img"
						/>
						<!-- </div> -->
						<!-- <div class="case-study__content"> -->
						<h3 class="case-study__title">
							{{ project.node.listingTitle }}
						</h3>
						<p class="case-study__desc">
							{{ project.node.listingDesc }}
						</p>
						<div class="case-study__role">
							<h4 class="role__label">
								My Role:
							</h4>
							<p class="role__desc">{{ project.node.role }}</p>
						</div>
						<!-- </div> -->
					</g-link>
				</li>
				<li class="case-study case-study--coming-soon" data-soon="Coming Soon!">
					<div class="case-study__link">
						<g-image
							src="/projects/psp-logo.svg"
							alt="img"
							class="case-study__img"
						/>
						<h3 class="case-study__title">
							Preparing for Ofsted
							<span class="sr-only">&mdash; Coming Soon!</span>
						</h3>
						<p class="case-study__desc">
							Redesigning a complex self-evaluation tool to help school leaders
							get ready for Ofsted inspections.
						</p>
						<div class="case-study__role">
							<h4 class="role__label">
								My Role:
							</h4>
							<p class="role__desc">Lead Designer &amp; Front End</p>
						</div>
					</div>
				</li>
				<li class="case-study case-study--coming-soon" data-soon="Coming Soon!">
					<div class="case-study__link">
						<g-image
							src="/projects/happy-cow-logo.svg"
							alt="img"
							class="case-study__img"
						/>
						<h3 class="case-study__title">
							A Happier App Experience
							<span class="sr-only">&mdash; Coming Soon!</span>
						</h3>
						<p class="case-study__desc">
							Personal project redesigning a native app screen for improved
							usability.
						</p>
						<div class="case-study__role">
							<h4 class="role__label">
								My Role:
							</h4>
							<p class="role__desc">UX Design</p>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<!-- <section id="projects" class="section page-padding page-width projects">
			<h2 class="equals-decal">Case Studies</h2>
			<ul class="js-projectList project-listing project-list unstyle-list">
				<li
					v-for="project in $page.projects.edges"
					:key="project.id"
					class="project-list__project-item"
				>
					<g-link :to="project.node.path" class="project-list__link">
						<h2 class="project-item__title">
							{{ project.node.listingTitle }}
						</h2>
						<div class="project-item__img-wrapper">
							<g-image
								:src="project.node.listingImage"
								:alt="project.node.listingImageAlt"
								class="project-item__img"
							/>
						</div>
						<p class="project-item__desc">
							{{ project.node.listingDesc }}
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
					<h2>
						More coming soon!
					</h2>
					<p>
						This site is a work in progress and I haven't had time to write up
						more case studies yet &mdash; <strong>sorry</strong>. The next write
						up will be about a complex school-inspection readiness solution,
						which I redesigned and helped to build in 2019.
					</p>
					<p>
						I can happily send links to more examples of my work if needed
					</p>
					<p><strong>Thanks for your patience.</strong></p>
				</li>
			</ul>
		</section> -->
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
/* 1. Spacing rem repeated in coming soon :after width and role's mobile padding */

$transition: all 0.2s ease-in;

.case-study-list {
	@include flex-grid(1.4rem, 100%); /* [1] */

	@include media-up(small) {
		@include flex-grid(1.4rem, 33%); /* [1] */
	}

	@include media-up(medium) {
		> * {
			flex-grow: 0;
		}
	}
}

.case-study {
	@include media-up(small) {
		min-width: 247px;
		/* max-width: map-get($breakpoints, small); */
		text-align: center;
	}

	@include media-up(medium) {
		max-width: 50%;
		min-width: 0;
	}

	&__title {
		font-size: $header4;
		font-size: $header4-clamp;
		text-decoration: underline;
		margin-bottom: 1rem;
		transition: $transition;
	}

	&__img {
		width: auto;
		margin-bottom: 0.5rem;
		filter: grayscale(100%) brightness(200%);
		padding: 0px 20%;
		margin: 0 auto 1rem auto;
		transition: $transition;
	}

	&__role {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: auto;
		width: 100%;
		padding-bottom: 2.4rem; /* [1] */
		border-bottom: 4px solid $blue-400;

		@include media-up(small) {
			padding-bottom: 0;
			border-bottom: 0;
		}

		> * {
			all: unset;
			font-size: $smallText;
			font-size: $smallText-clamp;
		}
	}

	&__link {
		text-decoration: none;
		color: unset;
		font-weight: unset;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: column;
		height: 100%;
		text-align: center;
		transition: $transition;

		&:hover {
			.case-study__img {
				filter: none;
				transform: scale(1.075);
			}

			.case-study__title {
				color: $blue-600;
			}
		}
	}

	&__desc {
		margin-bottom: 1rem;
	}

	&--coming-soon {
		position: relative;
		/* transition: all 0.2s ease-in; */
		transition: none;

		&:after {
			position: absolute;
			top: 1.4rem; /* [1] */
			width: calc(100% - (2 * 1.4rem)); /* [1] */
			height: calc(100% - (2 * 1.4rem)); /* [1] */
			/* height: 100%; */
			content: attr(data-soon);
			font-size: $header2;
			font-size: $header2-clamp;
			/* color: $blue-600;
			background: $neutral-50; */
			color: $neutral-50;
			background: $blue-600;
			transition: $transition;
			opacity: 0;
			/* display: none; */
			display: flex;
			justify-content: center;
			align-items: center;
			visibility: hidden;
			@include font-heading;
		}

		&:hover {
			cursor: pointer;

			.case-study__link {
				opacity: 0;
			}

			&:after {
				visibility: visible;
				opacity: 1;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}

.role {
	&__label {
		@include small-caps-title;
		margin: 0 0.5rem 0 0;
	}
	&__desc {
		@include font-heading;
	}
}
</style>