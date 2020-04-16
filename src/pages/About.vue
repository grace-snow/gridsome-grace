<template>
	<Layout>
		<section class="section">
			<h1>About Me</h1>
			<ul class="list list--chevrons">
				<li>Ux Web Designer</li>
				<li>Front End Developer</li>
				<li>Creative Problem Solver</li>
			</ul>
		</section>
		<section class="section">
			<div id="location">
				<img src alt="Orange Superlambanana" />
				<p>
					I'm based in Liverpool, UK (best city in the world). In fact, I love
					it so much I'd only consider taking on work that's based locally, or
					where I could work remotely most of the time.
				</p>
			</div>
			<button type="button" class>Download Resume</button>
		</section>
		<section id="values" class="section">
			<h2>My Values</h2>
			<p>Here's some stuff I care about (it's not an exhaustive list!)</p>
			<ul class="grid-1-3">
				<li v-for="value in values" :key="value.id">
					<h3 v-html="value.heading"></h3>
					<p v-html="value.content"></p>
				</li>
				<!-- <li>
					<h3>Inclusivity</h3>
					<p>
						Whether I'm designing or coding, I want to make every website,
						product and interface as intuitive, inclusive and enjoyable as
						possible.
					</p>
				</li>
				<li>
					<h3>Mentoring</h3>
					<p>
						I highly value learning and like to give back to others where I can.
						I particularly look out for tech-curious women and non-binary
						people.
					</p>
				</li>
				<li>
					<h3>Animals</h3>
					<p>
						Yep, I'm one of those vegetarian animal lovers. I'm not preachy with
						it, I simply enjoy cooking plant-based food and adore cuddling my
						cats. End of.
					</p>
				</li> -->
			</ul>
		</section>

		<section id="jobs">
			<h2>Job History</h2>
			<article v-for="job in jobs" :key="job.id">
				<h3 v-html="job.jobTitle"></h3>
				<h4>
					<g-link
						:to="job.employerLink"
						target="_blank"
						rel="noopener noreferrer"
						class="employer"
						v-html="job.employer"
					>
					</g-link>
					<span class="date">{{ job.jobDateRange }}</span>
				</h4>
				<p>{{ job.jobDesc }}</p>
			</article>
		</section>

		<section id="skills" class="section">
			<h2>Skills</h2>
			<div class="grid-1-2">
				<div v-for="skill in skills" :key="skill.id">
					<h3>{{ skill.skillType }}</h3>
					<ul class="list list--chevron">
						<li v-for="skillName in skill.skillsArray" v-html="skillName"></li>
					</ul>
				</div>
			</div>
		</section>

		<Contact id="contact" />
	</Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";
// import JobListing from "~/components/JobListing.vue";
import values from "@/data/values.json";
import jobs from "@/data/jobs.json";
import skills from "@/data/skills.json";

export default {
	data() {
		return {
			values,
			jobs,
			skills
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

<style lang="scss" scoped>
.grid-1-3 {
	@include media-up(small) {
		@include flex-grid(20px, 33%);
	}
}
.grid-1-2 {
	@include media-up(small) {
		@include flex-grid(20px, 50%);
	}
}
</style>