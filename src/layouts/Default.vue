<template>
	<div class="page-width">
		<Header />

		<transition name="fade" appear>
			<slot />
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
@import "../assets/styles/_reset.scss";

/* Site-wide utility classes */
@import "../assets/styles/_utilities.scss";

html {
	font-size: $size-5;
}

// fonts
body {
	@include font-met;
	line-height: $line-height;
	overflow-x: hidden;
	color: $blue-dark-5;
}

strong {
	font-weight: $weight-semibold;
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
	// letter-spacing: 0.8pt;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: $line-height-small;
	margin-bottom: $space-3;
	color: $blue-dark-4;
}

// hidden elements
[hidden] {
	display: none;
}

// Scrollbar
body {
	scrollbar-width: $space-4; /* future standards way */
	&::-webkit-scrollbar {
		/* long-standing webkit way */
		width: $space-4;
	}
}

// Links
a {
	text-decoration: none;
}

// App layout
#app {
	position: relative;
	@include flex-col;
	min-height: 100vh;
}

main {
	flex-grow: 1;
}

.page-width {
	max-width: $page-width;
	margin: 0 auto;
}

.page-padding {
	@include page-padding;
}

// Transitions
.fade-enter-active {
	transition: opacity 0.5s;
	transition-delay: 0.2s;
}

.fade-enter {
	opacity: 0;
}

// Lists
ul,
li {
	margin: 0;
	padding: 0;
}

.list--inline {
	@include flex;
}

.list li {
	list-style-type: none; /* remove bullets */
}

.list li:before {
	content: "\200B"; /* add zero-width space */
}

// Section
.section {
	padding-top: $space-mega; // 80px
	padding-bottom: $space-mega; // 80px
}

.flex--small-up {
	@include media-up(small) {
		@include flex;
		justify-content: space-between;
	}
}

@include media-up(small) {
	.mob-only {
		display: none;
	}
}

.has-equals {
	position: relative;
	display: inline;

	&:before {
		@include equals;
	}
}

.mega,
.mega-size {
	font-size: $size-mega;
}
h1,
.h1-size {
	font-size: $size-1;
}
h2,
.h2-size {
	font-size: $size-2;
}
h3,
.h3-size {
	font-size: $size-3;
}
h4,
.h4-size {
	font-size: $size-4;
}
h5,
.h5-size,
p {
	font-size: $size-5;
}
h6,
.smallprint {
	font-size: $size-6;
}

.btn {
	position: relative;
	display: inline-block;
	padding: 0.4em 0.6em;
	@include font-heading;
	border: 0;

	&-diagonal {
		color: $blue-light-4;
		background: transparent;
		margin-top: $space-4;
		padding-left: 1em;
		transform: skew(-$angle); // find and use angle var

		&:before {
			position: absolute;
			content: "";
			left: 0;
			top: 0;
			height: 100%;
			width: 0;
			background: $blue-light-2;
			border-left: $space-5 solid $blue-light-4;
			transition: all 0.2s ease-in;
			display: inline-block;
		}

		.btn__txt {
			display: inline-block;
			transform: skew($angle);
		}

		&:hover::before {
			width: 100%;
		}
	}
}
</style>
