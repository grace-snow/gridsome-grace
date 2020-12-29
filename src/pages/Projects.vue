<template>
  <Layout>
    <Page-Header :pageTitle="pageTitle">
      <template v-slot:intro>
        <strong>Sorry</strong> there's not much here yet. I'll add more designs, case studies and
        code snippets over time. Watch this space!
      </template>
      <div role="presentation">
        <h2 class="h5Text mb-small">
          {{ listTitle }}
        </h2>
        <List :items="listItems" class="list--inline-divider">
          <li slot-scope="row" class="list__item">
            <a :href="row.item.linkUrl" target="_blank" rel="noopener noreferrer" class="link">{{
              row.item.text
            }}</a>
          </li>
        </List>
      </div>
    </Page-Header>

    <section id="case-studies" class="section page-padding page-width case-studies">
      <h2 class="equals-decalxxx case-studies__heading">Case Studies</h2>
      <ul class="js-projectListxxx unstyle-list case-study-list">
        <li v-for="project in $page.projects.edges" :key="project.id" class="case-study">
          <g-link :to="project.node.path" class="case-study__link">
            <g-image
              :src="project.node.listingImage"
              :alt="project.node.listingImageAlt"
              class="case-study__img"
            />
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
          </g-link>
        </li>
        <li class="case-study case-study--coming-soon" data-soon="Coming Soon!">
          <div class="case-study__link">
            <g-image
              src="/projects/psp-logo.svg"
              alt="Perspective School Improvement Toolkit logo"
              class="case-study__img"
            />
            <h3 class="case-study__title">
              Preparing for Ofsted
              <span class="sr-only">&mdash; Coming Soon!</span>
            </h3>
            <p class="case-study__desc">
              Redesigning a complex self-evaluation tool to help school leaders get ready for Ofsted
              inspections.
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
              alt="Happy Cow app logo"
              class="case-study__img"
            />
            <h3 class="case-study__title">
              A happier app experience
              <span class="sr-only">&mdash; Coming Soon!</span>
            </h3>
            <p class="case-study__desc">
              Personal project redesigning a native app screen for improved usability.
            </p>
            <div class="case-study__role">
              <h4 class="role__label">
                My Role:
              </h4>
              <p class="role__desc">UX Design</p>
            </div>
          </div>
        </li>
        <li class="case-study case-study--coming-soon" data-soon="Coming Soon!">
          <div class="case-study__link">
            <g-image
              src="/projects/ncer-logo.svg"
              alt="National Consortium for Examination Results logo"
              class="case-study__img"
            />
            <h3 class="case-study__title">
              Redesigning the face of NCER
              <span class="sr-only">&mdash; Coming Soon!</span>
            </h3>
            <p class="case-study__desc">
              A complete redesign of the public-facing website for an organisation representing all
              local authorities in England.
            </p>
            <div class="case-study__role">
              <h4 class="role__label">
                My Role:
              </h4>
              <p class="role__desc">Web Design &amp; Content</p>
            </div>
          </div>
        </li>
      </ul>
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

export default {
  metaInfo() {
    return {
      title: 'Projects',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/projects/`,
        },
      ],
      meta: [
        {
          property: 'og:title',
          content: 'Projects | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Projects | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Projects | ' + this.$static.metadata.siteName,
        },
      ],
    };
  },
  components: {
    List,
    PageHeader,
    Contact,
  },
  data() {
    return {
      pageTitle: 'Projects',
      listTitle: 'In the meantime, you might like to check out:',
      listItems: [
        {
          text: 'Codepen',
          linkUrl: 'https://codepen.io/grace-snow',
        },
        {
          text: 'Medium Blogs',
          linkUrl: 'https://medium.com/@gracesnowdesign',
        },
        {
          text: 'Github',
          linkUrl: 'https://github.com/grace-snow/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$transition: all 0.2s ease-in;
$grid-space: 1rem;

.case-studies {
  position: relative;
  background: $blue-1000;
  background: $intro-gradient;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: $neutral-150;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 0;
    mix-blend-mode: color-burn;
    clip-path: polygon(50% 0px, 0px 0px, 0px 100%, 100% 70%, 0 40%, 100% 10%);
    clip-path: polygon(50% 0px, 0px 0px, 0 100%, 100% 100%, 0 75%, 0 60%, 100% 35%, 100% 10%);

    @include media-up(small) {
      clip-path: polygon(100% 0px, 60vw 0, 0 80%, 0px 100%, 100% 100%);
    }
  }

  &__heading {
    text-align: center;
    margin-bottom: 1em;
    text-shadow: $text-shadow-on-dark;
    font-size: $jumbo1;
    font-size: $jumbo3-clamp;
    color: $neutral-100;
  }
}

.case-study-list {
  position: relative;
  z-index: 1;
  justify-content: center;
  @include flex-grid($grid-space, 100%);

  @include media-up(small) {
    @include flex-grid($grid-space, 33.333%);
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
    /* padding-bottom: calc(2 * $grid-space);
		/* border-bottom: 4px solid $blue-400; */

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
    background: #fff;
    box-shadow: $box-shadow;
    box-shadow: $text-shadow-on-dark;
    padding: 1rem;

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
      top: $grid-space;
      width: calc(100% - (2 * #{$grid-space}));
      height: calc(100% - (2 * #{$grid-space}));
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
