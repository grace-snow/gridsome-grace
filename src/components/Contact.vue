<template>
	<section id="contact2" class="section page-padding">
		<h2 class="equals-decal">Email Me</h2>
		<form action class>
			<div>
				<label for="message">Write a message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Hi Grace,"
					required
				></textarea>
			</div>
			<div>
				<label for="name">Name</label>
				<input id="name" type="text" required />
			</div>
			<div>
				<label for="email">Email</label>
				<input id="email" type="email" required />
			</div>
			<button type="submit">Send</button>
		</form>
	</section>
</template>

<script>
export default {
	name: "Contact"
};
</script>

<style lang="scss">
</style>