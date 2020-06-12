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
@import "~/assets/styles/_reset.scss";
/* Site-wide utility classes */
@import "~/assets/styles/_utilities.scss";

html {
	font-size: 16px;
}

// fonts
body {
	font-family: $font-main;
	color: $text-neutral;
	color: $text-secondary;
	font-weight: $weight-normal;
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
	color: $text-primary;
}

.equals-decal {
	position: relative;
	display: inline-block;

	&:before,
	&:after {
		position: absolute;
		content: "";
		width: 50vw;
		left: -50.5vw;
		background-color: $blue-light-3;
		opacity: 0.3;
		height: 25%;
	}
	&:before {
		bottom: 60%;
	}
	&:after {
		bottom: 15%;
	}
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
	}
}

// Links
a {
	text-decoration: underline;
	font-weight: $weight-semibold;
	color: $blue-600;
	position: relative;
}

.link {
	@include link;
}

.nowrap {
	white-space: nowrap;
}

* {
	&:focus {
		@include focus-outline;
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
		background: #e2e8ec;
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

.page-width {
	max-width: $page-width;
	margin: 0 auto;
	// padding-left: 20px;
	// padding-right: 20px;
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
	text-decoration: none;

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
		background: $accent-orange;
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

.clearfix::after {
	content: "";
	clear: both;
	display: table;
}

/* Helpers */
.flush {
	margin: 0 !important;
}
.mb-small {
	margin-bottom: 0.5rem !important;
}
.mb {
	margin-bottom: 1rem !important;
}
.mb-tiny {
	margin-bottom: 0.25rem !important;
}
</style>
