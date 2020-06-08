<template>
	<Layout>
		<!-- TODO: import hero here and populate using frontmatter -->
		<div class=" page-width project">
			<section class="project-hero">
				<div class="project-hero__content page-padding">
					<div class="hero__meta">
						<p>
							<g-link to="/projects" class="link">Projects</g-link>
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
					</div>
				</div>
				<div class="project-hero__img">
					<g-image
						:src="$page.project.heroImage"
						:alt="$page.project.heroImageAlt"
						class="hero-img"
					/>
				</div>
			</section>
			<section class="project-body markdown-body page-width">
				<div class=" section limit-width page-padding">
					<VueRemarkContent />
				</div>
			</section>
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
		team
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
/* @import "../assets/styles/github-markdown.css"; */

.project-hero {
	@include media-up(medium) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: calc(100vh - 60px);
		position: relative;

		&:after {
			position: absolute;
			content: "";
			top: 0;
			right: 0;
			z-index: 1;
			mix-blend-mode: soft-light;
			width: 100%;
			height: 100%;
			background: #f0faff;
			clip-path: polygon(0% 12%, 0px 100%, 90vw 100%);
			opacity: 0.6;
		}

		&__content {
			flex: 1 0 50vw;
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
			z-index: 2;
		}

		&__img {
			flex: 0 1 40vw;
			align-self: stretch;
			max-height: calc(100vh - 60px);
			width: 40vw;
			padding: 2.5rem;
			position: relative;
			background-image: $projectImg-gradient;
			object-fit: contain;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;

			.hero-img {
				display: inline-block;
				z-index: 1;
				position: relative;
				max-width: 200px;
			}

			&:after {
				position: absolute;
				content: "";
				top: 0;
				right: 0;
				z-index: 0;
				background: #59dbff;
				mix-blend-mode: color-burn;
				width: 100%;
				height: 100%;
				clip-path: polygon(100% 0px, -20vw 100%, 100% 100%);
				opacity: 0.66;
			}
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

		.link {
			font-weight: $weight-normal;
		}
	}

	&__title {
		font-size: $header2;
		/* @include font-met; */
		font-weight: $weight-bold;
		margin-bottom: 1em;
		max-width: 28ch;
	}

	&__summary {
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

/* TODO add bg pattern */
.project-body {
	position: relative;
	height: 100%;
	/* background-image: url(); */

	.limit-width {
		max-width: 650px;
		margin: 0 auto;
	}

	p,
	ul,
	li {
		/* font-size: $header5; */
		margin-bottom: 1em;
	}

	img {
		margin: 1.5rem auto;
		width: 100%;
	}
}
</style>