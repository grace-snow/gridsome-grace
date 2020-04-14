<template>
  <Layout>
    <h1>Blog</h1>
    <p>Listing page for blog articles.</p>
    <Contact id="contact" />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    Contact
  }
};
</script>
