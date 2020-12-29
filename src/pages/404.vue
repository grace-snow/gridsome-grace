<template>
  <Layout>
    <section class="section page-padding page-width">
      <h1>
        Oops! Something went wrong&hellip;
      </h1>
      <p>
        Sorry about that. It's probably best to head
        <g-link to="/" class="link">Home</g-link> instead.
      </p>
    </section>
  </Layout>
</template>

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
export default {
  metaInfo() {
    return {
      title: '404',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/404/`,
        },
      ],
      meta: [
        {
          property: 'og:title',
          content: this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: this.$static.metadata.siteName,
        },
        {
          property: 'og:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          name: 'twitter:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          itemprop: 'description',
          content: this.$static.metadata.siteDescription,
        },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl,
        },
        {
          name: 'twitter:url',
          content: this.$static.metadata.siteUrl,
        },
        {
          property: 'og:image',
          content: this.$static.metadata.siteUrl + '/gsd_landing-shot.png',
        },
        { property: 'og:image:alt', content: 'The web is for everyone' },
        {
          name: 'twitter:image',
          content: this.$static.metadata.siteUrl + '/gsd_landing-shot.png',
        },
        { name: 'twitter:image:alt', content: 'The web is for everyone' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
