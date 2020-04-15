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
  }
}
</static-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$static.metadata.siteName,
			titleTemplate: "%s | " + this.$static.metadata.siteName,
			meta: [
				{
					key: "description",
					name: "description",
					content: this.$static.metadata.siteDescription
				},
				{
					// Facebook Open Graph meta
					property: "og:title",
					content: this.$static.metadata.siteName
				},
				{
					property: "og:description",
					content: this.$static.metadata.siteDescription
				},
				{
					property: "og:image",
					content: "" // URL to image here
				},
				{
					property: "og:image:alt",
					content: "" // Alt text for image
				},
				{
					property: "og:url",
					content: this.$static.metadata.siteUrl
				},
				{
					// Twitter
					name: "twitter:title",
					content: this.$static.metadata.siteName
				},
				{
					name: "twitter:description",
					content: this.$static.metadata.siteDescription
				},
				{
					name: "twitter:image",
					content: "" // URL to image here
				},
				{
					name: "twitter:image:alt",
					content: "" // Alt text for image
				},
				{
					name: "twitter:url",
					content: this.$static.metadata.siteUrl
				},
				{
					name: "twitter:site",
					content: "@gracesnow"
				},
				{
					name: "twitter:creator",
					content: "@gracesnow"
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					// Schema tags for Google LinkedIn Pintrest etc
					itemprop: "name",
					content: this.$static.metadata.siteName
				},
				{
					itemprop: "description",
					content: this.$static.metadata.siteDescription
				},
				{
					itemprop: "image",
					content: "" // URL to image here
				},
				{
					itemprop: "image:alt",
					content: "" // alt text for image - Not sure if this meta tag exists?
				},
				{
					itemprop: "url",
					content: this.$static.metadata.siteUrl
				}
			]
		};
	}
};
</script>

<style lang="scss">
/* Css reset */
@import "./assets/styles/_reset.scss";

/* Site-wide utility classes */
@import "./assets/styles/_utilities.scss";
</style>