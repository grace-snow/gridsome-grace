<template>
  <Layout>
    <section id="blogs" class="section page-padding page-width blog-listing">
      <h1 class="equals-decal">Tag: {{ $page.tag.name}}</h1>

      <ul class="blog-listing__list unstyle-list">
        <li v-for="blog in $page.tag.belongsTo.edges" v-if="blog.node.published === true" :key="blog.node.id"  class="blog-listing__item">
          <g-link :to="blog.node.path" class="blog-listing__link">
            <h2 class="blog-listing__title">
              {{ blog.node.title }}
            </h2>
            <List class="blog-listing__meta list--inline-always small-caps-title">
              <template v-slot:hard-items>
                <li class="list__item">
                  {{ blog.node.date }}
                </li>
                <li class="list__item">{{ blog.node.timeToRead }}-minute read</li>
              </template>
            </List>
          </g-link>
        </li>
      </ul>

      <div class="blog__back-link">
        <g-link to="/blog" class="link">Back to all blogs</g-link>
      </div>
    </section>
    <Contact class="page-header" />
  </Layout>
</template>
<page-query>
query Tag ($id: ID!) {
  tag(id: $id) {
    name
    belongsTo (sortBy: "date") {
      edges {
        node {
          ... on BlogPost {
            id
            title
            path
            published
            date(format: "D MMM YYYY")
            timeToRead
          }
        }
      }
    }
  }
}

</page-query>
<script>
import List from '~/components/List.vue';
import Contact from '~/components/Contact.vue';
import PageHeader from '~/components/PageHeader.vue';

export default {
  name: 'tag',
  metaInfo() {
    return {
      title: this.$page.tag.name
    };
  }, 
  components: {
    Contact,
    List,
  },
};
</script>

<style lang="scss">

.blog-listing__list {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(28ch, 1fr) );
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


.blog__back-link {
  position: relative;
  padding: 1rem 0 1rem 1.5em;
  margin-bottom: 1rem;

  a {
    position: relative;

    &:before {
      position: absolute;
      content: '';
      left: -1.5em;
      top: 0;
      display: inline-block;
      color: $blue-400;
      background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focussable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.34 72' fill='%23FFBF00'%3E%3Cpath d='M41.1 61.3L10.6 36l30.5-25.3V.5L1.2 33.6v4.9l39.9 33V61.3z'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 0.75em;
    }
  }
}
</style>