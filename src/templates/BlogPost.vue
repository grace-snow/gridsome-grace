<template>
  <Layout>
    <h1 v-html="$page.post.title" />
  </Layout>
</template>

<page-query>
	query ($id: ID!) {
		post(id: $id) {
			title
		}
	}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog"
  }
};
</script>

<style>
</style>