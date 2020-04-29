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
			titleTemplate: "%s | " + this.$static.metadata.siteName
		};
	}
};
</script>

<style lang="scss">
// /* Css reset */
// @import "./assets/styles/_reset.scss";

// /* Site-wide utility classes */
// @import "./assets/styles/_utilities.scss";
</style>