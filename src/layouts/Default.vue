<template>
	<div>
		<Header />

		<transition name="fade" appear>
			<main class="main">
				<slot />
			</main>
		</transition>

		<Footer />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
/* Css reset */
@import "~/assets/styles/_reset.scss";
/* Site-wide utility classes */
@import "~/assets/styles/_utilities.scss";

html {
	font-size: 112%;

	@include media-up(small) {
		font-size: 100%;
	}
}

// base
body {
	@include font-met;
	color: $text-secondary;
	line-height: $line-height;
	overflow-x: hidden;
}

strong {
	font-weight: 600;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
nav,
.button,
.logo,
.font-heading {
	@include font-heading;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: $line-height-small;
	margin-bottom: 0.75em;
	color: $text-primary;
}

p,
ul,
ol {
	margin-bottom: 1em;
}

p {
	max-width: 60ch;
}

// Links & buttons
a {
	text-decoration: underline;
	font-weight: $weight-semibold;
	color: $blue-600;
	position: relative;
}

.link {
	@include link;

	&--positive {
		color: $positive-200;

		&:hover {
			color: $positive-300;
		}
	}
}

.btn {
	position: relative;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	line-height: $line-height-small;
	margin-top: 1.5rem;
	padding: 0.75em 1.85em 0.8em 1.25em;
	border: 0;
	clip-path: polygon(100% 0, 100% 0%, 90% 100%, 0 100%, 0 0);
	background: $btn-gradient;
	@include font-heading;
	color: $blue-1000;
	text-decoration: none;

	&--icon-only {
		padding: 0.5em;
		padding-right: 1em;
		clip-path: polygon(110% 0, 100% 0, 80% 100%, 0 100%, 0 0);
		margin: 0;

		svg {
			height: 1em;
			width: 1em;
		}
	}

	&:after,
	&:before {
		display: block;
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		@include transition();
	}
	&:after {
		height: 100%;
		background: $btn-hoverGradient;
		background: $accent-200;
		z-index: -1;
	}

	&:focus:before,
	&:hover:after,
	&:focus:after {
		width: 100%;
	}

	&:active {
		top: 1px;
	}

	&--positive {
		background: $positive-gradient;
		color: #fff;
	}

	&--negative {
		background: $negative-gradient;
		color: #fff;

		&:after {
			background: $negative-300;
		}
	}
}

button.link {
	@include font-met;
	padding: 0;
	border: none;
	background: transparent;
	text-align: left;
	clip-path: none;
	@include link;

	&--positive {
		color: $positive-200;

		&:hover {
			color: $positive-300;
		}
	}
}

button,
a,
input,
select,
textarea,
abbr,
summary {
	&:focus {
		@include focus-outline;
	}
}

a,
button {
	&:hover:focus {
		outline: none;
	}
}

// App layout
#app {
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex-grow: 1;
	width: 100%;
	max-width: $page-width;
	margin: 0 auto;
	position: relative;

	&:before,
	&:after {
		content: "";
		display: block;
		background: #fff;
		position: absolute;
		height: 100%;
		width: 50vw;
		top: 0;
		z-index: 1;
	}
	&:before {
		left: -50vw;
	}
	&:after {
		right: -50vw;
	}
}

// Transitions
.fade-enter-active {
	transition: opacity 0.5s;
	transition-delay: 0.3s;
}

.fade-enter {
	opacity: 0;
}

// Forms
label {
	display: block;
}
textarea {
	resize: none;
}

.auto-visible {
	// chromium only - may speed up page load
	content-visibility: auto; 
}
</style>
