<template>
  <Layout>
    <section id="cv" v-html="$page.cv.content" class="section page-padding page-width"></section>
    <Contact class="site-contact page-header border-top" />
  </Layout>
</template>

<page-query>
	query cv($path:String){
		cv:cv(path:$path) {
			slug,
      content,
			date (format: "D MMM YYYY")
		}
	}
</page-query>

<static-query>
  query {
    metadata {
      siteName
      siteAuthor
      siteUrl
    }
  }
</static-query>

<script>
import Contact from '~/components/Contact.vue';
import PageHeader from '~/components/PageHeader.vue';

export default {
  data() {
    return {
      PageHeader,
    };
  },
  metaInfo() {
    return {
      title: 'Resume',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/about/resume`,
        },
      ],
      htmlAttrs: {},
      bodyAttrs: {},
      meta: [
        {
          name: 'author',
          content: this.$static.metadata.siteAuthor,
        },
        {
          property: 'og:title',
          content: 'Resume | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Resume | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Resume | ' + this.$static.metadata.siteName,
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
.ribbon {
  @include small-caps-title;
  margin-bottom: -0.15em !important;
  font-size: $header4;
  font-size: $header4-clamp;
}

#cv {
  ul {
    padding-left: 1rem;
    max-width: 68ch;
  }

  h2,
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
}

@media print {
  header,
  footer,
  #contact,
  *:before,
  *:after {
    display: none;
  }

  p,
  ul {
    max-width: unset;
  }

  body {
    background: none;
    font-size: 0.75rem;
  }

  h2,
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  a:not([aria-hidden]):after {
    content: '(' attr(href) ')' !important;
    display: inline-block !important;
    padding-inline-start: 0.5ch;
    background-color: transparent !important;
    height: unset !important;
    width: unset !important;
  }
}
</style>
