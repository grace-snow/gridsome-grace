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
				{ charset: "utf-8" },
				{
					vmid: "description",
					name: "description",
					content: this.$static.metadata.siteDescription
				}
			]
		};
	}
};
</script>
