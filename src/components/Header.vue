<template>
	<header class="sticky-top">
		<div class="header page-padding page-width">
			<g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>

			<div class="menu-wrapper" :class="isOpen ? 'is-open' : ''">
				<button type="button" v-on:click="toggle()" class="menu-toggle">
					<span v-if="!isOpen">menu</span>
					<span v-else>close</span>
				</button>

				<nav class="menu">
					<ul class="menu__list">
						<li class="menu__item">
							<g-link to="/about/" class="menu__item-link">About</g-link>
						</li>
						<!-- <li class="menu__item">
							<g-link to="/design-process/" class="menu__item-link">Design Process</g-link>
						</li> -->
						<li class="menu__item">
							<g-link to="/projects" class="menu__item-link">Projects</g-link>
						</li>
						<li class="menu__item">
							<g-link to="/blog/" class="menu__item-link">Blog</g-link>
						</li>
						<li class="menu__item">
							<a
								v-if="isOpen"
								href="#"
								v-scroll-to="'#contact'"
								class="menu__item-link"
								v-on:click="toggle()"
							>
								Contact
							</a>
							<a
								v-else
								href="#"
								v-scroll-to="'#contact'"
								class="menu__item-link"
							>
								Contact
							</a>
						</li>
					</ul>
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
/* Header styles go here */
header {
	@include sticky-top;
	/* box-shadow: 0px 2px 6px #50616ca1; */
	background-color: $blue-1000;
	background-image: $blue-gradient-1000;
}

.header {
	position: relative;
	@include page-padding;
	@include flex;
	justify-content: space-between;
	height: 100%;
	line-height: 1;

	/* Make bg stretch full width on huge screens */
	&:before,
	&:after {
		position: absolute;
		content: "";
		background-color: inherit;
		height: 100%;
		width: 50vw;
		z-index: -1;
	}
	&::before {
		left: -50vw;
	}
	&:after {
		right: -50vw;
	}
}

.menu-toggle {
	position: relative;
	display: inline-block;
	color: $blue-light-1;
	background: transparent;
	border: 0;
	z-index: 1;
	padding: 30px 0 0 0;
	text-transform: uppercase;
	font-size: $tinyText;
	@include font-heading;
	letter-spacing: 0.5px;
	line-height: 1;
	@include transition(all);
	transition: color 0s linear 0s;
	cursor: pointer;
	min-width: 35px;
	text-align: center;

	&:before,
	&:after {
		position: absolute;
		content: "";
		display: block;
		height: 3px;
		background: $blue-light-1;
		width: $space-2; // 30px
		left: 50%;
		transform: skew(-$angle);
		transition: all 0.3s ease-out;
		margin: 0 0 0 -15px;
	}

	/* Top bar of menu icon */
	&:before {
		top: $space-4; // 10px
	}
	/* Bottom bar of menu icon */
	&:after {
		top: $space-3; // 20px
	}

	&:focus,
	&:hover {
		color: $blue-light-2;
		&::before,
		&:after {
			background-color: $blue-light-2;
		}
	}

	&:focus {
		@include focus-outline;
	}

	@include media-up(medium) {
		display: none;
	}
}

.menu {
	position: absolute;
	top: -100vh;
	left: 0;
	opacity: 0;
	transition: all 0.3s ease-out;
	transform: translateY(-100%);
	width: 100%;
	height: 100vh;
	display: block;
	visibility: hidden;

	@include media-up(medium) {
		position: relative;
		top: 0;
		opacity: 1;
		height: auto;
		transform: none;
		transition: none;
		visibility: visible;
	}
}

.menu__list {
	margin: 0;
	@include page-padding;
	transition: margin 0.3s ease-out;
	transition-delay: 200ms;
	margin: 65px 0 0 0;

	@include media-up(medium) {
		display: flex;
		height: 100%;
		padding: 0;
		transition: none;
		margin: 0;
	}
}

.menu__item {
	list-style-type: none;
	text-align: left;
	font-size: 1rem;
	transition: font-size 300ms ease-in-out;
	transition-delay: 200ms;
	overflow: hidden;

	@include media-up(medium) {
		text-align: center;
		height: 100%;
		/* margin-left: 1.5rem; */
		transition: none;
		position: relative;
	}

	&:first-child .menu__item-link:before {
		display: none;
	}
}

.menu__item-link {
	text-decoration: none;
	opacity: 0.5;
	transition: opacity 300ms ease-in-out;
	transition-delay: 400ms;
	position: relative;
	display: inline-block;
	color: $blue-light-1;
	font-weight: $weight-semibold;
	line-height: 1;
	padding-bottom: 10px;

	@include media-up(medium) {
		opacity: 1;
		padding: 20px 0;
		line-height: initial;
		transition: none;
		margin-left: 50px;
		display: flex;
		align-items: center;

		&:before {
			position: absolute;
			content: "";
			height: 1.2em;
			background: $blue-light-3;
			width: 3px;
			transform: skew(-20deg);
			left: -25px;
		}
	}
}

.menu-wrapper {
	&.is-open {
		/* toggle the mobile nav button */
		.menu-toggle {
			&:before,
			&:after {
				top: 15px;
				width: 25px;
				left: calc(50% + 2.5px);
			}
			&:before {
				transform: rotate(45deg);
			}
			&:after {
				transform: rotate(-45deg);
			}
		}

		.menu {
			visibility: visible;
			opacity: 1;
			background-color: $blue-dark-5;
			top: 4rem;
			transition: all 300ms ease-in-out;
			transform: translateY(0);
		}

		.menu__item {
			font-size: 2.5rem;
			line-height: 1;
			text-align: left;
			margin-top: 20px;
		}

		.menu__item-link {
			opacity: 1;
		}
	}
}

.logo {
	position: relative;
	height: 100%;
	padding: $space-3 0;
	@include font-heading;
	font-weight: bold;
	font-size: $size-5;
	text-transform: uppercase;
	text-decoration: none;
	color: $blue-light-3;
	background-color: $blue-1000;
	background-image: $blue-gradient-1000;
	@include flex;
	flex-shrink: 0;
	line-height: initial;
	z-index: 3;

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
}

.logo,
.menu__item-link {
	// underline on hover
	&:after {
		content: "";
		position: absolute;
		left: 0;
		width: 0;
		z-index: -1;
		transition: none;
		background: $blue-light-3;
		background: $accent-orange;
		transform: skew(-$angle);
		bottom: 0;
		height: 5px;
	}
	&:focus,
	&:hover {
		outline: none;
		&:after {
			width: 100%;
			@include transition(all);
		}
	}
}

.logo:hover:before {
	opacity: 0.5;
	@include transition(all);
}

// Transitions
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	@include media-up(medium) {
		opacity: 1;
	}
}
</style>