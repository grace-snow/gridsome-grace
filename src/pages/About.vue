<template>
	<Layout>
		<section class="about-hero page-width page-padding">
			<div class="section about-hero__primary">
				<h1 class="equals-decal page-heading about-hero__heading">
					About Me
				</h1>
				<ul class="list list--chevrons about-hero__list">
					<li>Strategic Designer</li>
					<li>Front End Developer</li>
					<li>Equality Champion</li>
				</ul>
				<a href="/CV_grace_snow_06_2020.pdf" class="btn" download
					>Download Resume</a
				>
			</div>
			<div class="section about-hero__secondary">
				<div id="location" class="">
					<svg
						title="Outline of Liverpool's famous Superlambanana"
						role="img"
						aria-hidden="false"
						focussable="false"
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="90.8"
						viewBox="0 0 100 90.8"
						class="accent"
					>
						<path
							fill="currentColor"
							d="M94.8.8a111.6 111.6 0 01-15 21.4 52.7 52.7 0 01-7.5 7 53 53 0 01-4.3 2.9 73.9 73.9 0 01-6.4 3 71.3 71.3 0 01-7.3 2.6 44 44 0 01-6.8 1.2 44 44 0 01-6.4.2 23 23 0 01-9.7-2.1 28 28 0 01-7-3.4l-3-2a12.7 12.7 0 00-4-2 9.9 9.9 0 00-6.7 1.1 9.3 9.3 0 00-1.4 1A6.9 6.9 0 007 34a5.2 5.2 0 01-1.6 1.8 5 5 0 01-1 .6 10.4 10.4 0 00-2.8 2A4.3 4.3 0 000 40.9a4 4 0 00.2 1.5A3.5 3.5 0 002.6 45a8.3 8.3 0 001.5.5 9.8 9.8 0 002.3.1 11.1 11.1 0 013.7.6l4.2 2c4.3 2 5.1 2.4 6.1 3.4a20.1 20.1 0 012.7 3.6 34.6 34.6 0 012 3.4 31.3 31.3 0 013 8.2 30.6 30.6 0 01.4 3.5 32.4 32.4 0 010 4.5c-.4 5-2 6.4-2.5 11.3a27.5 27.5 0 00-.1 4l7.7-.2 1.1-6.6 1.4-6.2.7-4.6.6 2.8a31.7 31.7 0 01-.1 3.5 44.6 44.6 0 01-1 5.8c-.4 1.4-.8 3.5-1.3 6.2l8.4-.2A42.8 42.8 0 0144 85l.6-3 .7-3.7a27.9 27.9 0 011-4.6 13 13 0 011.5-3 13.6 13.6 0 012.4-1.9 12.7 12.7 0 013.8-1.5 12 12 0 016.4.5 5 5 0 014 3.8 27.9 27.9 0 01.1 7.4 104.4 104.4 0 01-2.7 11.4l10.5-.1.3-1.5a18.7 18.7 0 015.7.1l2.8-.1a31 31 0 00-1.2-9 12.7 12.7 0 01-.3-5.8l.3-4.2a26.4 26.4 0 006.6-10.5l4.8-11.9q1.3-3.4 2.9-7l2.4-5.3a34.7 34.7 0 003.3-11.3 43.8 43.8 0 00-1.6-14.4l-1.7-5L95.1 0z"
						/>
					</svg>
					<p>
						I'm settlied in <strong class="accent">Liverpool, UK</strong> (best
						city in the world). I love it here, so am keen to take on locally
						based projects or those where I can work remotely most of the time.
					</p>
				</div>
			</div>
		</section>

		<section id="values" class="section page width page-padding values">
			<h2 class="values__heading equals-decal">My Values</h2>
			<p class="values__subheading">
				Here's some stuff I care about (it's not an exhaustive list!)
			</p>
			<ul class="grid-1-3 values__values-list unstyle-list">
				<li v-for="value in Values" :key="value.id" class="values__value-item">
					<div class="block">
						<h3 v-html="value.heading" class="value-item__heading"></h3>
						<p v-html="value.content" class="value-item__content"></p>
					</div>
				</li>
			</ul>
		</section>

		<section id="jobs" class="section page-padding page-width jobs">
			<div class="limit-width">
				<h2 class="equals-decal">Job History</h2>
				<article v-for="job in Jobs" :key="job.id" class="block jobs__job">
					<h3 v-html="job.jobTitle" class="job__title"></h3>
					<h4 class="job__subtitle">
						<g-link
							:to="job.employerLink"
							target="_blank"
							rel="noopener noreferrer"
							class="employer job__employer"
							v-html="job.employer"
						>
						</g-link>
						<span class="job__date">{{ job.jobDateRange }}</span>
					</h4>
					<p class="job__desc">{{ job.jobDesc }}</p>
				</article>
			</div>
		</section>

		<section id="skills" class="section  page-padding page-width skills">
			<h2 class="equals-decal mb-large">Skills</h2>
			<div class="skills__skills-list">
				<div
					v-for="skill in Skills"
					:key="skill.id"
					class="skills-list__skill-type"
				>
					<h3 class="skill-type__heading">{{ skill.skillType }}</h3>
					<ul class="list list--chevrons skill-type__list">
						<li
							v-for="skillName in skill.skillsArray"
							v-html="skillName"
							class="skill-type__skill"
						></li>
					</ul>
				</div>
			</div>
			<div class="skills__cta">
				<h3 class="skills-cta__heading">Something Missing?</h3>
				<p>
					<a href="mailto:gracesnowdesign@gmail.com" class="link"
						>Ask me about it</a
					>. And don’t worry, I’m always happy to learn new stuff!
				</p>
			</div>
		</section>

		<Contact id="contact" />
	</Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";
// import JobListing from "~/components/JobListing.vue";
import Superlambanana from "~/assets/images/superlambanana.svg";
import Values from "@/data/values.json";
import Jobs from "@/data/jobs.json";
import Skills from "@/data/skills.json";

export default {
	data() {
		return {
			Superlambanana,
			Values,
			Jobs,
			Skills
		};
	},
	metaInfo: {
		title: "About",
		htmlAttrs: {},
		bodyAttrs: {},
		meta: [
			{
				name: "author",
				content: "Grace Snow"
			}
		]
		// link: [
		//   { rel: 'stylesheet', href: '' },
		// ]
	},
	components: {
		Contact
	}
};
</script>

<style lang="scss">
.about-hero {
	display: flex;
	flex-direction: column;
	position: relative;

	@include media-up(small) {
		min-height: calc(100vh - 60px);
		flex-direction: row;
		justify-content: space-between;
		/* align-items: stretch; */
	}

	&:before,
	&:after {
		position: absolute;
		content: "";
		height: 100%;
		top: 0;
		right: 0;
	}

	&:before {
		width: 100%;
		background: #f0faff;
		opacity: 0.8;
		clip-path: polygon(100% 100%, 100% 0px, 0% 100%);
		mix-blend-mode: color-burn;
		z-index: -1;

		@include media-up(small) {
			clip-path: polygon(100% 0px, 30vw 0px, 100% 100%);
		}
	}

	&:after {
		width: 100%;
		background-image: linear-gradient(180deg, #256199 1%, #00182e 97%);
		clip-path: polygon(100% 68%, 0% 55%, 0 100%, 100% 100%);
		z-index: -2;

		@include media-up(small) {
			width: 55vw;
			clip-path: polygon(100% 0px, 45% 0px, 0px 100%, 100% 100%);
		}
	}

	&__primary {
		flex: 1 1 60%;
	}
	&__secondary {
		position: relative;
		color: #fff;
		align-self: flex-end;
		flex: 1 1 30%;
		font-size: $smallText;
		@include media-up(small) {
			text-align: right;
		}
	}

	&__heading {
		color: $blue-600;

		@include media-up(small) {
			font-size: $jumbo3;
		}
	}
	&__list {
		@include font-heading;
		line-height: $line-height-small;
		margin-bottom: 1.5rem;

		@include media-up(small) {
			font-size: $header5;
		}
	}

	.accent {
		color: $accent-200;
	}

	svg.accent {
		fill: $accent-200;
		transform: scaleX(-1);
		height: 5rem;
		width: 5rem;

		@include media-up(small) {
			transform: none;
			height: initial;
			width: initial;
		}
	}
}

.values {
	background: $neutral-100;

	&__heading {
		margin-bottom: 1rem;
	}

	&__subheading {
		margin-bottom: 2.5rem;
		font-weight: $weight-semibold;
	}

	&__values-list {
		@include media-up(small) {
			@include flex-grid(1.5rem, 33%);
		}
	}

	&__value-item {
		min-width: 230px;

		@include media-up(small) {
			.block {
				margin-bottom: 0;
			}
		}
	}

	.value-item__heading {
		font-size: $header4;
		color: $blue-600;
		margin-bottom: 1rem;
	}
}

.jobs {
	position: relative;

	&:before,
	&:after {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		right: 0;
	}

	&:before {
		background: $blue-500;
		background: $neutral-100;
		clip-path: polygon(100% 30vw, 100% 0px, 70vw 0);
		top: 0;
		/* opacity: 0.1.5; */
		z-index: -2;
	}

	@include media-up(medium) {
		&:after {
			background: $neutral-100;
			clip-path: polygon(100% 100%, 100% 75%, 75% 100%);
			bottom: 0;
			opacity: 0.9;
			z-index: -1;
		}
	}

	.jobs__job {
		margin: 3rem 0;

		&:first-of-type {
			margin-top: 1rem;
		}
		&:last-of-type {
			margin: 0;
		}
	}
}
.job {
	&__title {
		font-size: $header4;
		margin-bottom: 0.5rem;
	}

	&__subtitle {
		@include small-caps-title;
	}

	&__employer {
		margin-bottom: 0.5rem;
		display: block;
		text-decoration: none;

		@include media-up(small) {
			margin-bottom: 0;
			display: inline-block;
		}
	}

	&__date {
		/* text-decoration: none; */
		position: relative;
		font-weight: $weight-normal;
		display: block;

		@include media-up(small) {
			margin-left: 30px;
			display: inline-block;
			&:after {
				@include list-divider;
			}
		}
	}
}

.skills {
	position: relative;
	background: $neutral-100;

	@include media-up(small) {
		&:before,
		&:after {
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			mix-blend-mode: multiply;
		}
	}

	&:before {
		background: $blue-700;
		opacity: 0.03;
		clip-path: polygon(90% 100%, 0 0, 0 100%);
	}
	&:after {
		background: $blue-600;
		opacity: 0.02;
		clip-path: polygon(100% 100%, 100% 0px, 75% 0%, 30% 100%);
	}

	&__skills-list {
		@include flex-grid(1.5rem, 50%);

		> * {
			min-width: 280px;
		}
	}
	.skill-type {
		&__heading {
			color: $blue-600;
			font-size: $header4;
			margin-bottom: 0.5em;
		}
	}

	.skills__cta {
		margin-top: 3rem;
	}

	.skills-cta__heading {
		font-size: $header5;
		margin-bottom: 1rem;
	}
}

.block {
	/* same as .block in project styles */
	border-left: 5px solid $blue-300;
	padding-left: 1rem;
	margin-bottom: 2rem;
}

/* TODO: refactor for use in project styles */
.limit-width {
	max-width: 700px;
	margin: 0;
}
</style>