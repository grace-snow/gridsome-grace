<template>
	<ul class="list">
		<slot v-for="item in items" :item="item"></slot>
		<slot name="hard-items"></slot>
	</ul>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	display: block;
	@include list--chevrons;
	margin-bottom: 1.5rem;

	&--inline-divider {
		@include media-up(small) {
			display: inline-block;
			@include list--inline-divider;
		}
	}

	&:last-child {
		margin-bottom: 0;
	}
}
</style>