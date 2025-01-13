<template>
  <Layout>
    <Page-Header pageTitle="Mentoring" class="">
      <template v-slot:subheading>
        <h2>Blogs & Tutorials</h2>
      </template>
      <template v-slot:intro>
        <!-- I used to write (occasionally) over at
        <span class="link"
          ><a href="https://medium.com/@gracesnowdesign" target="_blank" rel="noopener noreferrer"
            >Medium</a
          ></span
        >, but don't love the paywall model and -->
        In 2022, I launched
        <span class="link"
          ><a href="https://FEDmentor.dev" target="_blank" rel="noopener noreferrer"
            >FED Mentor</a
          ></span
        >
        (Front End Development Mentor) &mdash; a blogging site dedicated to teaching new learners
        and junior front end developers how to build <strong>more accessible</strong> websites.
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
            alt="Grace's Frontend Mentor Profile Badge: An avatar, username of @grace-snow, 25,510 points, and lots of icon links to other platforms like CodePen, GitHub, LinkedIn, and Medium."
            class="fm-profile-img" />
        </div>
        <div class="fm-grid__2">
          <h2 class="values__heading equals-decal">Frontend Mentor</h2>
          <p class="values__subheadingxxx">
            For the last 3 years, I've been spending a significant amount of my free time mentoring
            junior or aspiring front end developers over on
            <span class="link"
              ><a
                href="https://www.frontendmentor.io/profile/grace-snow"
                target="_blank"
                rel="noopener noreferrer"
                title="(opens in a new tab)"
                >Frontend Mentor</a
              ></span
            >, leaving more than 20,000 items of feedback in the process!
          </p>
          <p>
            You'll often find me in their discord server or on the main platform giving free
            accessibility lessons, offering feedback on solutions, sharing resources or guiding new
            learners in the foundations of accessible HTML, CSS and JavaScript.
          </p>
          <p>
            <a href="https://www.frontendmentor.io/profile/grace-snow" class="btn"
              >Frontend Mentor Profile</a
            >
          </p>
        </div>
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
        { topic: 'Accessibility Awareness for All' },
        { topic: 'Inclusive Code' },
        { topic: 'A11y for Backend Developers' },
        { topic: 'Front End Accessibility 101' },
        { topic: 'Innovate Her & why it matters' },
        { topic: 'Common UI patterns and how to make them accessible' },
        { topic: 'CSS Grid in the real world' },
        { topic: 'From min-max to clamp - what can they do for us?' },
        { topic: 'How to address your internal company UX' },
        { topic: 'So you think you want a Design System?' },
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
  justify-content: flex-start;
  gap: 2rem 3rem;

  @include media-up(medium) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
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
