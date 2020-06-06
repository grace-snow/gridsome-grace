<template>
	<section id="contact2" class="section page-padding">
		<h2 class="equals-decal">Drop me a line&hellip;</h2>
		<!-- TODO - Add form validation and helper text! -->
		<form id="contactForm" action class="form">
			<div class="form__item">
				<label for="message">Write a message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="6"
					placeholder="Hi Grace,"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
				></textarea>
			</div>
			<div class="form__item" :class="hasFocus ? 'hasFocus' : ''">
				<label for="name">Name</label>
				<input
					id="name"
					type="text"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
				/>
			</div>
			<div class="form__item" :class="hasFocus ? 'hasFocus' : ''">
				<label for="email">Email</label>
				<input
					id="email"
					type="email"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
				/>
			</div>
			<button type="submit" class="btn">Send</button>
		</form>
	</section>
</template>

<script>
export default {
	name: "Contact",
	data() {
		return {
			hasFocus: false
		};
	},
	methods: {
		handleFocus() {
			const input = event.target.parentElement;
			input.classList.toggle("hasFocus");
		}
	}
};
</script>

<style lang="scss">
label {
	display: block;
	margin-bottom: 0.5rem;
	font-weight: $weight-semibold;
	font-size: $smallText;
	color: $blue-600;
	color: $text-secondary;
}
textarea {
	resize: none;
	width: 36vw;
	max-width: 100%;
}

input {
	width: 28vw;
	max-width: map-get($breakpoints, tiny);
}

input,
textarea {
	border: 0;
	border-left: 5px solid $blue-600;
	padding: 0.5em 0.75em;
	background: #f3fbff;
	color: $text-secondary;

	&:focus {
		outline: none;
	}
}

.form {
	width: map-get($breakpoints, small);

	&__item {
		display: inline-block;
		margin-bottom: $space-3;
		margin-right: 100%;

		&.hasFocus {
			@include focus-outline;
		}
	}
}
</style>