<template>
  <Layout>
    <Page-Header pageTitle="Blog" class="no-min-h">
      <template v-slot:subheading>
        <h2>Blogs & Tutorials</h2>
      </template>
      <template v-slot:intro>
        I used to write (occasionally) over at
        <a
          href="https://medium.com/@gracesnowdesign"
          target="_blank"
          rel="noopener noreferrer"
          title="(opens in a new window)"
          >Medium</a
        >, but don't love the paywall model and wanted to focus more on mentoring front end
        developers... So I moved it to
        <a href="https://FEDmentor.dev" target="_blank" rel="noopener noreferrer"
          >a new site (opens in a new tab)</a
        >.
      </template>
      <a href="https://FEDmentor.dev"
        ><g-image src="~/assets/images/fm-4.png" alt="FEDmentor.dev" class=""
      /></a>
    </Page-Header>

    <div class="auto-visible">
      <section id="values" class="section page width page-padding values fm-grid">
        <div class="fm-grid__1">
          <g-image
            src="~/assets/images/fm-profile-badge.png"
            alt="FEDmentor.dev"
            class="fm-profile-img" />
        </div>
        <div class="fm-grid__2">
          <h2 class="values__heading equals-decal">Frontend Mentor</h2>
          <p class="values__subheadingxxx">
            For the last 3 years, I've been spending a significant amount of my free time mentoring
            junior or aspiring front end developers over on
            <a
              href="https://www.frontendmentor.io/profile/grace-snow"
              target="_blank"
              rel="noopener noreferrer"
              title="(opens in a new tab)"
              >Frontend Mentor</a
            >, leaving more than 20,000 items of feedback in the process!
          </p>
          <p>
            You'll often find me in their discord server or on the main platform giving free
            accessibility lessons, offering feedback on solutions, sharing resources or guiding new
            learners in the foundations of accessible HTML, CSS and JavaScript.
          </p>
          <p>
            <a href="" class="btn">Frontend Metor Profile</a>
          </p>
        </div>
      </section>

      <section id="blogs" class="section page-padding page-width blog-listing" hidden>
        <h2 class="sr-only equals-decal">Blog Posts</h2>
        <ul class="blog-listing__list unstyle-list">
          <li v-for="blog in $page.blogs.edges" :key="blog.node.title" class="blog-listing__item">
            <a v-bind:href="blog.node.path" class="blog-listing__link">
              <div role="presentation">
                <h3 class="blog-listing__title">
                  {{ blog.node.title }}
                </h3>
                <List class="blog-listing__meta list--inline-always small-caps-title">
                  <template v-slot:hard-items>
                    <li class="list__item">
                      {{ blog.node.date }}
                    </li>
                    <li class="list__item">{{ blog.node.timeToRead }}-minute read</li>
                  </template>
                </List>
              </div>
            </a>
          </li>
        </ul>
        <Pager :info="$page.blogs.pageInfo" class="pagination" />
      </section>

      <section class="section page-width page-padding h5Text talks dark-bg">
        <h2 class="equals-decal">Talks</h2>
        <p>
          I've had the pleasure of speaking at numerous companies, events and meetups, as well as
          leading countless accessibility, design or development training sessions. I'm always open
          to opportunities if you'd like me to deliver a talk or some training at your company or
          event, please
          <a href="#" v-scroll-to="'#contact'" class="link">contact me</a>.
        </p>
        <h3 class="talks__subtitle">Past topics include:</h3>
        <List :items="talkTopics">
          <li slot-scope="row" class="list__item">{{ row.item.topic }}</li>
        </List>
      </section>
    </div>
    <Contact class="page-header" />
  </Layout>
</template>

<page-query>
  query blogPosts($page: Int) {
    blogs: allBlogPost (filter: { blogpost: { eq: true }, published: { eq: true }}, sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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

<static-query>
  query {
    metadata {
      siteName
      siteUrl
    }
  }
</static-query>

<script>
import PageHeader from '~/components/PageHeader.vue';
import List from '~/components/List.vue';
import Contact from '~/components/Contact.vue';
import { Pager } from 'gridsome';

export default {
  metaInfo() {
    return {
      title: 'Blog',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/blog/`,
        },
      ],
      meta: [
        {
          property: 'og:title',
          content: 'Blog | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Blog | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Blog | ' + this.$static.metadata.siteName,
        },
      ],
    };
  },
  components: {
    Contact,
    PageHeader,
    List,
    Pager,
  },
  data() {
    return {
      talkTopics: [
        { topic: 'Accessibility Awareness' },
        { topic: 'Inclusive Code' },
        { topic: 'A11y for Backend Developers' },
        { topic: 'Front end Accessibility 101' },
        { topic: 'Innovate Her & why it matters' },
        { topic: 'CSS Grid in the real world' },
        { topic: 'From min-max to clamp - what can they do for us?' },
        { topic: 'So you think you want a Design System?' },
        { topic: 'Why your company should address its internal UX' },
        { topic: 'UX: The greatest team sport there is' },
        { topic: 'How we can all help increase diversity in tech' },
        { topic: 'Deep-dive on Sass-maps' },
      ],
    };
  },
};
</script>

<style lang="scss">
.fm-grid {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem 3rem;

  @include media-up(medium) {
    flex-direction: row-reverse;
    align-items: center;
  }
}

.fm-profile-img {
  width: rem(400px);
  box-shadow: 3px 4px 10px 1px #2b46582b;
}

// Blog listing styles
.blog-listing__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28ch, 1fr));
  grid-gap: 3rem 1.5rem;
}

.blog-listing__item {
  @include block;
  margin-bottom: 0;
}

.blog-listing__link {
  text-decoration: none;
  color: $text-primary;
  display: inline-block;
}

.blog-listing__title {
  @include link;
  font-size: $header3;
  font-size: $header3-clamp;
  color: $text-primary;
  font-weight: $weight-bold;
  max-width: 50ch;
  margin-bottom: 0.25em;
  display: inline-block;
}

.blog-listing__meta {
  @include small-caps-title;
}

/* Talks section*/
.talks {
  position: relative;
  background-color: rgba(#00375c, 20%);

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    top: 0;
    right: 0;
  }

  &:before {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
    background-image: linear-gradient(to bottom, #002759 1%, #00182e 97%);
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:after {
    width: 100%;
    background: $neutral-150;
    mix-blend-mode: color-burn;
    clip-path: polygon(0px 65%, 65% 100%, 100% 100%, 100% 0);
    z-index: 0;
    @include media-up(small) {
      clip-path: polygon(100% 0, 68vw 100%, 100% 100%);
    }
  }
}

.talks__subtitle {
  margin-top: 2.5rem;
}

.dark-bg {
  p,
  ul,
  ol {
    color: #fff;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: $blue-200;
  }

  .link {
    color: $accent-200;
    transition: color 0s ease-in 0.2s;
    white-space: nowrap;

    &:hover {
      color: $blue-1000;
    }
  }
}

/* Pagination styles */
.pagination {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  line-height: 1;
}

.pagination > * {
  position: relative;
  margin: 0 0.25rem;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    transform: skew(-#{$angle});
    background-color: $neutral-100;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &.active {
    color: $neutral-50;

    &:before {
      background-color: $blue-600;
    }
  }
}
</style>
