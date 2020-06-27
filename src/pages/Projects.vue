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
					<h2 class="sr-only">Coming Soon!</h2>
					<div class="case-study__link">
						<g-image src="" alt="img" class="case-study__img" />
						<h3 class="case-study__title">Preparing for Ofsted</h3>
						<p class="case-study__desc">
							Redesigning a self-evaluation tool for school leaders.
						</p>
						<div class="case-study__role">
							<h4 class="role__label">
								My Role:
							</h4>
							<p class="role__desc">Lead Designer &amp; Front End</p>
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
import Contact from "~/components/Contact.vue";
import List from "~/components/List.vue";
import PageHeader from "~/components/PageHeader.vue";

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

.case-study-list {
	@include flex-grid(1.2rem, 100%);

	@include media-up(small) {
		@include flex-grid(1.2rem, 33%);

		.case-study {
			min-width: 260px;
			max-width: map-get($breakpoints, small);
			text-align: center;
		}
	}
}
.case-study {
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
		transition: all 0.2s ease-in;

		&:hover {
			/* transform: scale(1.02); */

			.case-study__img {
				filter: none;
			}

			.case-study__title {
				color: $blue-600;
			}
		}
	}

	&__title {
		font-size: $header4;
		font-size: $header4-clamp;
		text-decoration: underline;
		margin-bottom: 1rem;
	}

	&__img {
		width: auto;
		margin-bottom: 0.5rem;
		filter: grayscale(100%) brightness(200%);
		padding: 0px 20%;
		margin: 0 auto 0.5rem auto;
	}

	&__desc {
		margin-bottom: 1rem;
	}

	&__role {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: auto;

		> * {
			all: unset;
			font-size: $smallText;
			font-size: $smallText-clamp;
		}
	}

	&--coming-soon {
		position: relative;
		transition: all 0.2s ease-in;

		&:after {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			content: attr(data-soon);
			font-size: $header2;
			font-size: $header2-clamp;
			color: $blue-600;
			display: none;
			background: $neutral-50;
			opacity: 1;
			transition: all 0.2s ease-in;
			@include font-heading;
		}

		&:hover {
			cursor: pointer;
			/* opacity: 0; */
			/* visibility: hidden; */

			&:after {
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

/* .temp p {
	margin-bottom: 1rem;
}

.projects {
	.project-list {
		@include flex-grid(1.4rem, 100%);

		@include media-up(small) {
			@include flex-grid(1.4rem, 33%);

			&__project-item {
				min-width: 260px;
				max-width: 500px;
			}
		}

		&__link {
			text-decoration: none;
			color: unset;
			font-weight: unset;
			display: flex;
			flex-direction: column;
		}
	}
}

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
} */
</style>