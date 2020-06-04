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
	line-height: 1.75;
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
	line-height: 1.1;
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

.list li {
	list-style-type: none; /* remove bullets */
}

.list li:before {
	content: "\200B"; /* add zero-width space */
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
</style>
