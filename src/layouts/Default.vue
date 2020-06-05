<template>
	<div class="theme-light">
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
@import "../assets/styles/_reset.scss";
/* Site-wide utility classes */
@import "../assets/styles/_utilities.scss";

html {
	font-size: 16px;
}

// fonts
body {
	font-family: $font-main;
	color: $text-primary;
	font-weight: 300;
	line-height: 1.6;
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
	font-family: $font-heading;
	font-weight: $weight-bold;
	letter-spacing: 0.3pt;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1;
	margin-bottom: 1.5rem;
}

// hidden elements
[hidden] {
	display: none;
}

// Scrollbar
body {
	scrollbar-width: thin; /* future standards way */
	&::-webkit-scrollbar {
		/* long-standing webkit way */
		width: thin;
		width: 10px;
	}
}

// Links
a {
	text-decoration: none;
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
}

.page-width {
	max-width: $page-width;
	margin: 0 auto;
	// padding-left: 20px;
	// padding-right: 20px;
}

.page-padding {
	padding-left: 20px;
	padding-right: 20px;
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
	display: flex;
}

// Section
.section {
	padding-top: 80px;
	padding-bottom: 80px;
}

.flex--small-up {
	@include media-up(small) {
		display: flex;
		justify-content: space-between;
	}
}

// Forms
label {
	display: block;
}
textarea {
	resize: none;
}

.btn {
	position: relative;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	line-height: 1.1;
	margin-top: 1.5rem;
	padding: 0.75em 1.85em 0.8em 1.25em;
	border: 0;
	clip-path: polygon(100% 0, 100% 0%, 90% 100%, 0 100%, 0 0);
	background: $btn-gradient;
	@include font-heading;
	color: $blue-1000;

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
	&:before {
		height: 4px;
		background: $accent-orange;
		/* background: #59dbff; */
		/* z-index: -1; */
	}
	&:after {
		height: 100%;
		background: $btn-hoverGradient;
		z-index: -1;
	}

	&:focus:before,
	&:hover:after,
	&:focus:after {
		width: 100%;
	}

	/* &:focus {
		text-decoration: underline;
	} */
}

.sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
	clip-path: inset(50%) !important; /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important; /* 3 */
}
</style>
