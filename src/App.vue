<template>
	<transition>
		<router-view />
	</transition>
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
			title: this.$static.metadata.siteName,
			link: [{ rel: "canonical", href: this.$static.metadata.siteUrl }],
			titleTemplate: "%s | " + this.$static.metadata.siteName,
			meta: [
				{ charset: "utf-8" },
				{
					vmid: "description",
					name: "description",
					content: this.$static.metadata.siteDescription
				},
				{
					property: "og:site_name",
					content: this.$static.metadata.siteName
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					name: "twitter:site",
					content: "@gracesnow"
				},
				{
					name: "twitter:creator",
					content: "@gracesnow"
				}
			]
		};
	}
};
</script>
