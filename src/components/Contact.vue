<template>
	<section id="contact2" class="section page-padding">
		<h2 class="equals-decal">Drop me a line&hellip;</h2>
		<!-- TODO - Add form validation and helper text! -->
		<form
			id="contactForm"
			class="form"
			name="contact"
			method="post"
			v-on:submit.prevent="handleSubmit"
			action="/success/"
			data-netlify="true"
			data-netlify-honeypot="honeypot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label> Don’t fill this out: <input name="honeypot-field" /> </label>
			</p>
			<div class="form__item">
				<label for="message">Your message</label>
				<textarea
					id="message"
					name="message"
					v-model="formData.message"
					cols="30"
					rows="5"
					placeholder="Hi Grace,"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
					title="Ask me a question or tell me how I can help"
				></textarea>
			</div>
			<div class="form__item" :class="hasFocus ? 'hasFocus' : ''">
				<label for="name">Your Name</label>
				<input
					id="name"
					name="name"
					autocomplete="name"
					type="text"
					v-model="formData.name"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
					title="Say who's sending this"
				/>
			</div>
			<div class="form__item" :class="hasFocus ? 'hasFocus' : ''">
				<label for="email">Your Email</label>
				<input
					id="email"
					name="email"
					autocomplete="email"
					type="email"
					v-model="formData.email"
					v-on:focus="handleFocus()"
					v-on:blur="handleFocus()"
					required
					title="Only so I can email you back, I won't spam you"
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
			formData: {},
			hasFocus: false
		};
	},
	methods: {
		handleFocus() {
			const input = event.target.parentElement;
			input.classList.toggle("hasFocus");
		},
		encode(data) {
			return Object.keys(data)
				.map(
					key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(() => this.$router.push("/thanks"))
				.catch(error => alert(error));
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
	max-width: 100%;
	box-shadow: $box-shadow;
	width: 100%;

	@include media-up(small) {
		width: 58vw;
	}
	@include media-up(medium) {
		width: 36vw;
		max-width: 600px;
	}
}

input {
	max-width: map-get($breakpoints, tiny);
	box-shadow: $box-shadow;
	width: 100%;

	@include media-up(small) {
		width: 42vw;
	}
	@include media-up(medium) {
		width: 28vw;
	}
}

input,
textarea {
	border: 0;
	border-left: 5px solid $blue-500;
	padding: 0.5em 0.75em;
	background: $neutral-150;
	color: $text-secondary;

	&:focus {
		outline: none;
		border-color: $blue-200;
	}
}

.form {
	&__item {
		display: inline-block;
		display: block;
		margin-bottom: 2rem;

		&.hasFocus {
			@include focus-outline;
		}
	}
}
</style>