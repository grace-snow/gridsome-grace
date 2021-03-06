<template>
  <Layout>
    <!-- TODO: import hero here and populate using frontmatter -->
    <div class="page-width project">
      <section class="project-hero">
        <div class="project-hero__content page-padding">
          <div class="hero__meta">
            <p class="meta__item">
              <g-link to="/projects" class="link">Projects</g-link>
            </p>
            <p class="meta__item">
              {{ $page.project.projectName }}
            </p>
          </div>
          <h1 class="hero__title leading-tight">
            {{ $page.project.heroTitle }}
          </h1>
          <div class="hero__summary">
            <h2 class="sr-only">Summary info for this project:</h2>
            <div v-if="$page.project.role" class="summary__item" role="presentation">
              <h3 class="small-caps-title">My Role</h3>
              <p>{{ $page.project.role }}</p>
            </div>
            <div v-if="$page.project.projectLength" class="summary__item" role="presentation">
              <h3 class="small-caps-title">Project Length</h3>
              <p>{{ $page.project.projectLength }}</p>
            </div>
            <div v-if="$page.project.keyTech" class="summary__item" role="presentation">
              <h3 class="small-caps-title">Key Tech</h3>
              <ul class="summary__list">
                <li v-for="item in $page.project.keyTech">{{ item }}</li>
              </ul>
            </div>
            <div v-if="$page.project.liveLink" class="summary__item" role="presentation">
              <g-link class="btn" :href="$page.project.liveLink">{{
                $page.project.liveLinkText
              }}</g-link>
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
      <section class="section page-padding project-body">
        <div v-html="$page.project.content" class="project-content"></div>
      </section>

      <Contact class="page-header border-top" />
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    projectName
    heroTitle
    heroImage
    heroImageAlt
    role
    projectLength
    keyTech
    listingDesc
    content
    liveLink
    liveLinkText
    year
    slug
  }
}
</page-query>
<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
import Contact from '~/components/Contact.vue';

export default {
  metaInfo() {
    return {
      title: this.$page.project.projectName,
      link: [
        {
          rel: 'canonical',
          href: this.$static.metadata.siteUrl + '/projects/' + this.$page.project.slug,
        },
      ],
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.$page.project.listingDesc,
        },
      ],
      meta: [
        {
          property: 'og:title',
          content: `${this.$page.project.projectName} | ${this.$static.metadata.siteName}`,
        },
        {
          name: 'twitter:title',
          content: `${this.$page.project.projectName} | ${this.$static.metadata.siteName}`,
        },
        {
          itemprop: 'name',
          content: `${this.$page.project.projectName} | ${this.$static.metadata.siteName}`,
        },
        {
          property: 'og:description',
          cotent: this.$page.project.listingDesc,
        },
        {
          name: 'twitter:description',
          content: this.$page.project.listingDesc,
        },
        {
          itemprop: 'description',
          content: this.$page.project.listingDesc,
        },
        {
          name: 'twitter:card',
          content: this.$page.project.heroImage ? 'summary_large_image' : 'summary',
        },
        {
          name: 'twitter:image:src',
          content: this.$page.project.heroImage || '',
        },
        {
          itemprop: 'image',
          content: this.$page.project.heroImage || '',
        },
        {
          property: 'og:image',
          content: this.$page.project.heroImage || '',
        },
        {
          name: 'twitter:image:alt',
          content: this.$page.project.heroImageAlt || '',
        },
        {
          property: 'og:image:alt',
          content: this.$page.project.heroImageAlt || '',
        },
      ],
    };
  },
  components: {
    Contact,
  },
};
</script>

<style lang="scss">
@import '../assets/styles/project-styles.scss';

.project-hero {
  position: relative;
  min-height: calc(100vh - 3.75rem);
  display: flex;
  flex-direction: column-reverse;

  @include media-up(medium) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    mix-blend-mode: soft-light;
    width: 100%;
    height: 100%;
    background: $neutral-100;
    clip-path: polygon(0% 12%, 0px 100%, 90vw 100%);
    opacity: 0.6;
    z-index: 0;

    @include media-up(medium) {
      z-index: 1;
    }
  }

  &__content {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    z-index: 2;
    position: relative;

    @include media-up(medium) {
      flex: 1 0 50vw;
    }
  }

  &__img {
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-height: calc(100vh - 3.75rem);
    position: relative;
    background-image: $projectImg-gradient;
    object-fit: contain;
    z-index: 1;

    @include media-up(medium) {
      align-self: stretch;
      flex: 0 1 40vw;
    }

    &:after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      background: $blue-400;
      mix-blend-mode: color-burn;
      width: 100%;
      height: 100%;
      clip-path: polygon(100% 0px, -20vw 100%, 100% 100%);
      opacity: 0.66;
      z-index: 1;

      @include media-up(medium) {
        z-index: 0;
      }
    }

    .hero-img {
      position: relative;
      display: inline-block;
      max-width: 200px;
      z-index: 3;

      @include media-up(medium) {
        z-index: 2;
      }
    }
  }
}

.hero {
  &__meta {
    @include media-up(small) {
      display: flex;
      align-items: center;
    }

    .meta__item {
      @include small-caps-title();
      position: relative;

      @include media-up(small) {
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

  &__title {
    font-size: $header2;
    font-size: $header2-clamp;
    font-weight: $weight-bold;
    margin-bottom: 1em;
    max-width: 28ch;
  }

  &__summary {
    font-weight: $weight-semibold;
    color: $text-primary;
  }
}

.summary {
  &__item {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &__list {
    @include list--chevrons;

    @include media-up(small) {
      @include list--inline-divider;
    }
  }
}
</style>
