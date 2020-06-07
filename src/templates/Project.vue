<template>
	<Layout>
		<!-- TODO: import hero here and populate using frontmatter -->
		<div class="page-padding page-width project">
			<section class="project-hero section">
				<div class="hero__summary">
					<div class="hero__meta">
						<p>
							Case Study
						</p>
						<p>
							<strong>{{ $page.project.projectName }}</strong>
						</p>
					</div>
					<h1 class="hero__title leading-tight">
						{{ $page.project.heroTitle }}
					</h1>
					<div class="hero__summary">
						<h2 class="sr-only">Summary info for this project:</h2>
						<div
							v-if="$page.project.role"
							class="summary__item"
							role="presentation"
						>
							<h3 class="small-caps-title">My Role</h3>
							<p>{{ $page.project.role }}</p>
						</div>
						<div
							v-if="$page.project.projectLength"
							class="summary__item"
							role="presentation"
						>
							<h3 class="small-caps-title">Project Length</h3>
							<p>{{ $page.project.projectLength }}</p>
						</div>
						<div
							v-if="$page.project.keyTech"
							class="summary__item"
							role="presentation"
						>
							<h3 class="small-caps-title">Key Tech</h3>
							<ul class="summary__list">
								<li v-for="item in $page.project.keyTech">{{ item }}</li>
							</ul>
						</div>
						<div
							v-if="$page.project.team"
							class="summary__item"
							role="presentation"
						>
							<h3 class="smallcaps-title">Team</h3>
							<ul class="summary__list">
								<li v-for="item in $page.project.team">{{ team }}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="hero__img">
					<g-image
						:src="$page.project.heroImage"
						:alt="$page.project.heroImageAlt"
						width="500"
					/>
				</div>
			</section>
			<p>
				{{ $page.project.excerpt }}
			</p>
			<div class="markdown-body">
				<VueRemarkContent />
			</div>
		</div>
	</Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title
		heroTitle
		projectName
		role
		projectLength
		keyTech
    excerpt
		heroImage
		heroImageAlt
  }
}
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.project.title
		};
	}
};
</script>

<style lang="scss">
@import "../assets/styles/github-markdown.css";

.project-hero {
	@include media-up(medium) {
		display: flex;

		> * {
			flex-basis: 50%;
		}
	}
}

@mixin small-caps-title {
	@include font-heading;
	text-transform: uppercase;
	color: $blue-600;
	font-size: $smallText;
	font-weight: $weight-normal;
	margin-bottom: 0.25rem;
}

@mixin list-divider {
	position: absolute;
	@include font-heading;
	content: "/";
	color: $blue-400;
	font-weight: bold;
	left: -16px;
}

.small-caps-title {
	@include small-caps-title();
}

.hero {
	&__meta {
		display: flex;
		align-items: center;

		> * {
			@include small-caps-title();
			display: inline-block;
			position: relative;
			margin-right: 30px;

			&:after {
				@include list-divider();
			}

			&:first-child:after {
				display: none;
			}
		}
	}

	&__title {
		font-size: $header3;
		@include font-met;
		font-weight: $weight-bold;
	}

	&__summary {
		font-size: $smallText;
		font-weight: $weight-semibold;
	}
}

.summary {
	&__item {
		margin-bottom: 1rem;
	}
	&__list {
		> * {
			position: relative;
			display: inline-block;
			margin-right: 30px;

			&:after {
				@include list-divider();
			}

			&:first-child:after {
				display: none;
			}
		}
	}
}
</style>