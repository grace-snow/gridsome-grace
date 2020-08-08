<template>
	<Layout>
		<Page-Header pageTitle="Blog" class="no-min-h">
			<template v-slot:intro>
				I used to write (occasionally) over at <a href="">Medium</a>, but don't
				love the paywall model so have moved it here! If there's a topic you'd
				really like me to cover, just
				<a href="#" v-scroll-to="'#contact'" class="link">drop me a line</a> and
				I'll see what I can do.
			</template>
		</Page-Header>

		<section id="blogs" class="section page-padding page-width blog-listing">
			<h2 class="equals-decal sr-only">Blog Posts</h2>
			<ul class="blog-listing__list unstyle-list">
				<li
					v-for="blog in $page.blogs.edges"
					:key="blog.node.title"
					class="blog-listing__item"
				>
					<a v-bind:href="blog.node.path" class="blog-listing__link">
						<div role="presentation">
							<h3 class="blog-listing__title">{{ blog.node.title }}</h3>
							<List
								class="blog-listing__meta list--inline-always small-caps-title"
							>
								<template v-slot:hard-items>
									<li class="list__item">
										{{ blog.node.date }}
									</li>
									<li class="list__item">
										{{ blog.node.timeToRead }}-minute read
									</li>
								</template>
							</List>
						</div>
					</a>
				</li>
			</ul>
		</section>

		<section class="section page-width page-padding h5Text talks">
			<h2 class="equals-decal">Talks</h2>
			<p>
				I've had the pleasure of speaking at several local meetups, as well as
				leading countless design/dev team knowledge share sessions. I'm always
				open to opportunities if you'd like me to speak at yours &mdash;
				<a href="#" v-scroll-to="'#contact'" class="link">just ask</a>!
			</p>
			<h3 class="small-caps-titlexxx talks__subtitle">Past topics include:</h3>
			<List :items="talkTopics" class="list--inline-dividerxxx">
				<li slot-scope="row" class="list__item">{{ row.item.topic }}</li>
			</List>
			<p>
				If you ask nicely, I may even share some slides from these with
				you&hellip; <em>if I made any, that is!</em> 😉
			</p>
		</section>

		<Contact id="contact" />
	</Layout>
</template>

<page-query>
  query blogPosts {
    blogs: allBlogPost (filter: { blogpost: { eq: true }}, limit:5, sortBy: "date", order: DESC) {
      edges {
        node {
          id
          title
          path
          date (format: "D MMM YYYY")
          description
					timeToRead
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
		title: "Blog",
		link: [
			{
				rel: "canonical",
				href: "https://www.gracesnowdesign.co.uk/blog/"
			}
		],
		meta: [
			{
				property: "og:title",
				content: "Blog | Grace Snow Design"
			},
			{
				name: "twitter:title",
				content: "Blog | Grace Snow Design"
			},
			{
				itemprop: "name",
				content: "Blog | Grace Snow Design"
			}
		]
	},
	components: {
		Contact,
		PageHeader,
		List
	},
	data() {
		return {
			talkTopics: [
				{ topic: "Inclusive Code" },
				{ topic: "Innovate Her & why it matters" },
				{ topic: "CSS Grid in the real world" },
				{ topic: "From min-max to clamp - what can they do for us?" },
				{ topic: "So you think you want a Design System?" },
				{ topic: "Why your company should address its internal UX" },
				{ topic: "UX: The greatest team sport there is" },
				{ topic: "How we can all help increase diversity in tech" },
				{ topic: "Deep-dive on Sass-maps" }
			]
		};
	}
};
</script>

<style lang="scss">
.blog-listing {
	/* max-width: map-get($breakpoints, medium); */

	&__list {
		max-width: map-get($breakpoints, medium);
	}

	&__item {
		margin-bottom: 2.5em;
	}

	&__link {
		text-decoration: none;
		color: $text-primary;
	}
	&__title {
		@include link;
		font-size: $header2;
		font-size: $header2-clamp;
		color: $text-primary;
		font-weight: $weight-bold;
		margin-bottom: 0.25em;
		display: inline-block;
	}
	&__meta {
		@include small-caps-title;
		font-size: $header5;
		font-size: $header5-clamp;
	}
}

.talks {
	&__subtitle {
		margin-top: 2.5rem;
	}
}
</style>