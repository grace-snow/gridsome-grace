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
