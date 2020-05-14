<template>
	<header class="bg-darkest sticky-top">
		<div class="header page-padding page-width">
			<strong>
				<g-link to="/">{{ $static.metadata.siteName }}</g-link>
			</strong>
			<div class="menu-wrapper">
				<button
					type="button"
					v-on:click="toggleMenu()"
					class="menu-toggle mob-only"
				>
					menu
				</button>
				<nav class="nav menu">
					<g-link to="/about/" class="nav__link">About</g-link>
					<g-link to="/design-process/" class="nav__link"
						>Design Process</g-link
					>
					<g-link to="/project-listing/" class="nav__link">Work</g-link>
					<g-link to="/blog-listing/" class="nav__link">Blog</g-link>
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
	// data() {
	//   return {
	//     message: "Try change me!"
	//   };
	// },
	methods: {
		toggleMenu() {
			const toggleBtn = document.querySelector(".menu-toggle");
			const menu = document.querySelector(".menu");
			const body = document.body;

			menu.classList.toggle("is-open");
			toggleBtn.classList.toggle("close");

			if (toggleBtn.innerHTML === "menu") {
				toggleBtn.innerHTML = "close";
			} else {
				toggleBtn.innerHTML = "menu";
			}
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
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;

	@include media-up(small) {
		min-height: 80px;
	}
}

.nav__link {
	margin-left: 20px;
	display: block;
	padding: 1.5rem 0;
	font-size: 2rem;
}

@include media-up(small) {
	.mob-only {
		display: none;
	}
}

.menu-wrapper {
	z-index: 1;
}

.menu-toggle {
	z-index: 2;
	color: #fff;
	background: transparent;
	border: 0;
	display: inline-block;
	position: relative;
	margin: 0 0 0 -20px;
	padding-right: 0;
	padding-left: 0;
	padding-top: 28px;
	text-transform: lowercase;
	font-family: $font-main;
	font-size: 13px;
	@include transition(all);
	transition: color 0s linear 0s;

	&:before {
		content: "";
		background: #fff;
		height: 3px;
		width: 30px;
		position: absolute;
		top: 10px;
		left: 50%;
		margin: 0 0 0 -15px;
		display: block;
		transform: skew(-20deg);
		@include transition(all);
		transition: all 0.3s ease-in, background-color 0s linear 0s;
	}

	&:after {
		content: "";
		background: #fff;
		height: 3px;
		width: 30px;
		position: absolute;
		top: 20px;
		left: 50%;
		margin: 0 0 0 -15px;
		display: block;
		transform: skew(-20deg);
		@include transition(all);
		transition: all 0.3s ease-in, background-color 0s linear 0s;
	}

	&:hover {
		color: $blue-light-2;
		&::before,
		&:after {
			background-color: $blue-light-2;
		}
	}

	&.close {
		color: $blue-light-2;

		&:before {
			background: $blue-light-2;
			transform: rotate(45deg);
			top: 12px;
			width: 25px;
			margin: 0 0 0 -13px;
		}
		&:after {
			background: $blue-light-2;
			transform: rotate(-45deg);
			top: 12px;
			width: 25px;
			margin: 0 0 0 -13px;
		}
	}
}

.menu {
	background: $blue-dark-5;
	display: flex;
	flex-direction: column;
	visibility: hidden; /* hides sub-menu */
	opacity: 0;
	position: absolute;
	top: 100%;
	left: 0;
	height: 0;
	width: 100%;
	transform: translateY(-2em);
	z-index: -1;
	transition: all 0.3s ease-in 0s, height 0.3s ease-in 0s,
		visibility 0s linear 0.3s, z-index 0s linear 0.01s;

	&.is-open {
		height: calc(100vh - 60px);
		visibility: visible; /* shows sub-menu */
		opacity: 1;
		z-index: 1;
		transform: translateY(0%);
		transition-delay: 0s, 0s, 0s, 0.3s;
	}
}
</style>