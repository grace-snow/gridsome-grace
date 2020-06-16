<template>
	<layout>
		<section id="success" class="page-width page-padding section text-center">
			<h1>
				Thanks!
			</h1>
			<p>
				<strong
					>Your message was sent and I'll get back to you as soon as I
					can.</strong
				>
			</p>
			<p>
				If you expect a reply and don't hear from me within a few days, feel
				free to nag me via any of the channels in the footer! ;)
			</p>
			<g-link to="/" class="btn">Back to Home</g-link>
		</section>
	</layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Message sent"
	}
};
</script>

<style lang="scss">
#success {
	p {
		max-width: 50ch;
		margin-right: auto;
		margin-left: auto;
	}
}

.text-center {
	text-align: center;
}
</style>