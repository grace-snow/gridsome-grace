<template>
	<header class="bg-darkest sticky-top">
		<div class="header page-padding page-width">
			<strong>
				<g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
			</strong>
			<div class="menu-wrapper">
				<button
					type="button"
					v-on:click="toggle()"
					class="nav-toggle mob-only"
					:class="isOpen ? 'is-open' : ''"
				>
					<span v-if="!isOpen">menu</span>
					<span v-else>close</span>
				</button>
				<nav class="nav menu" :class="isOpen ? 'is-open' : ''">
					<g-link to="/about/" class="nav__link">About</g-link>
					<g-link to="/design-process/" class="nav__link"
						>Design Process</g-link
					>
					<g-link to="/projects" class="nav__link">Projects</g-link>
					<g-link to="/blog/" class="nav__link">Blog</g-link>
					<a
						href="#"
						v-scroll-to="'#contact'"
						class="nav__link"
						v-on:click="toggleMenu()"
						>Contact</a
					>
				</nav>
			</div>
		</div>
	</header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	name: "Header",
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style lang="scss">
// Transition Mixin
@mixin transition($properties...) {
	transition: $properties 0.3s ease-in;
	-webkit-transition: $properties 0.3s ease-in;
	-moz-transition: $properties 0.3s ease-in;
	-ms-transition: $properties 0.3s ease-in;
	-o-transition: $properties 0.3s ease-in;
}

.sticky-top {
	position: sticky;
	top: 0;
	left: 0;
}

/* Header styles go here */
/* Header styles go here */
.header {
	position: relative;
	@include page-padding;
	@include sticky-top;
	@include flex;
	justify-content: space-between;
	// @include nav-height;
	height: 100%;
	&:before {
		width: 50vw;
		position: absolute;
		content: "";
		left: -50vw;
		background-color: inherit;
		height: 100%;
		z-index: -1;
	}
	&:after {
		width: 50vw;
		position: absolute;
		content: "";
		right: -50vw;
		background-color: inherit;
		height: 100%;
		z-index: -1;
	}
}
.nav-wrapper {
	z-index: 1;
	height: 100%;
}
.nav-toggle {
	z-index: 2;
	color: $blue-light-1;
	background: transparent;
	border: 0;
	display: inline-block;
	position: relative;
	margin: 0 0 0 -$space-3;
	padding-right: 0;
	padding-left: 0;
	padding-top: 28px; // find and use var?
	text-transform: lowercase;
	// @include font-met;
	@include font-heading;
	letter-spacing: 0.5px;
	font-size: $size-6;
	@include transition(all);
	transition: color 0s linear 0s;
	cursor: pointer;
	min-width: 35px;
	text-align: center;
	@include media-up(small) {
		padding-top: 33px;
	}
	&:before {
		content: "";
		background: $blue-light-1;
		height: 3px;
		width: $space-2;
		position: absolute;
		// top: 20px;
		top: 15px;
		left: 50%;
		margin: 0 0 0 -15px;
		display: block;
		transform: skew(-$angle);
		@include transition(all);
		transition: all 0.3s ease-in, background-color 0s linear 0s;
		@include media-up(small) {
			top: 18px;
		}
	}
	&:after {
		position: absolute;
		content: "";
		background: $blue-light-1;
		height: 3px;
		width: 30px;
		// width: 25px;
		// top: 30px;
		top: 25px;
		// left: calc(50% + 2.5px);
		left: 50%;
		margin: 0 0 0 -15px;
		display: block;
		transform: skew(-$angle);
		@include transition(all);
		transition: all 0.3s ease-in, background-color 0s linear 0s;
		@include media-up(small) {
			// width: 30px;
			// left: 50%;
			top: 28px;
		}
	}
	&:focus,
	&:hover {
		outline: none;
		color: $blue-light-2;
		&::before,
		&:after {
			background-color: $blue-light-2;
		}
	}
	&.is-open {
		color: $blue-light-2;
		&:before,
		&:after {
			background: $blue-light-2;
			top: 20px;
			width: 20px;
			margin: 0 0 0 -13px;
			left: calc(50% + 3px);
			@include media-up(small) {
				top: 22px;
				width: 25px;
				left: 50%;
			}
		}
		&:before {
			transform: rotate(45deg);
		}
		&:after {
			transform: rotate(-45deg);
		}
	}
	@include media-up(medium) {
		display: none;
	}
}
.nav {
	background: $blue-dark-5;
	@include flex-col;
	visibility: hidden; /* hides sub-menu */
	opacity: 0;
	position: absolute;
	top: 100%;
	left: 0;
	height: 0;
	width: 100%;
	transform: translateY(-2em);
	z-index: -1;
	transition: height 0.3s ease-in 0s, visibility 0s linear 0.3s,
		z-index 0s linear 0.01s; // all 0.3s ease-in 0s, removed
	&.is-open {
		height: calc(100vh - 60px);
		visibility: visible; /* shows sub-menu */
		opacity: 1;
		z-index: 1;
		transform: translateY(0%);
		transition-delay: 0s, 0s, 0s, 0.3s;
	}
	@include media-up(medium) {
		position: relative;
		visibility: visible;
		opacity: 1;
		flex-direction: row;
		top: 0;
		bottom: 0;
		align-items: center;
		height: 100%;
		transform: none;
		transition: none;
		z-index: 1;
	}
}
.nav__link {
	position: relative;
	margin-left: $size-4;
	display: block;
	padding: $space-3 0;
	font-size: $size-2;
	color: $blue-light-1;
	&:focus,
	&:hover {
		outline: none;
		color: $blue-light-2;
	}
	@include media-up(medium) {
		font-size: $size-5;
		margin-left: 30px;
		@include flex;
		height: 100%;
		&:before {
			position: absolute;
			content: "";
			height: 1em;
			transform: skew(-$angle);
			width: 2px;
			background: $blue-light-3;
			left: -15px;
		}
		&:first-of-type {
			margin-left: 0;
			&:before {
				content: none;
			}
		}
		&:after {
			position: absolute;
			content: "";
			height: 5px;
			width: 0;
			background: $blue-light-3;
			bottom: 0;
			transition: none;
			transform: skew(-$angle);
			left: -3px;
		}
		&:focus:after,
		&:hover:after {
			@include transition(width);
			width: 100%;
		}
	}
}
.logo {
	@include font-heading;
	position: relative;
	font-size: $size-5;
	text-transform: uppercase;
	color: $blue-light-3;
	height: 100%;
	padding: $space-3 0;
	@include flex;
	flex-shrink: 0;
	// equals decal
	&:before {
		position: absolute;
		content: "";
		width: 50vw;
		left: -50.5vw;
		height: 0.8em;
		top: 40%;
		z-index: -1;
		border-top-style: solid;
		border-bottom-style: solid;
		border-color: $blue-light-3;
		border-width: 0.3em;
		opacity: 0.3;
		transform: none;
		// margin-left: 0;
	}
	// underline on hover
	&:after {
		content: "";
		position: absolute;
		left: 0;
		width: 0;
		z-index: -1;
		transition: none;
		background: $blue-light-3;
		transform: skew(-$angle);
		bottom: 0;
		height: 5px;
	}
	&:focus,
	&:hover {
		outline: none;
		&:before {
			opacity: 0.5;
			@include transition(all);
		}
		&:after {
			width: 100%;
			@include transition(all);
		}
	}
}
</style>