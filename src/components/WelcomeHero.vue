<template>
	<section>
		<div class="page-padding page-width welcome-outer">
			<div class="welcome-inner text-center xs:text-left">
				<h1 class="welcome__h1 text-blue-600">
					<span
						class="welcome__h1-1"
						style="font-size: min(max(24px, 4.1vw), 60px);"
						>The Web is for</span
					>
					<br />
					<span
						class="welcome__h1-2"
						style="font-size: min(max(44px, 12vw), 130px);"
						>Everyone</span
					>
				</h1>
				<h2
					class="welcome__h2"
					style="font-size: min(max(20px, 3.25vw), 36px);"
				>
					I care about making web stuff that's easy to use and inclusive.
				</h2>
				<div class="welcome__cta">
					<h3
						class="welcome__h3"
						style="font-size: min(max(17px, 2.2vw), 22px)"
					>
						Want to work together?
					</h3>
					<div class="" style="font-size: min(max(15px, 1.8vw), 18px);">
						<p class="cta">
							Contact me via:
						</p>
						<ul class="welcome__links unstyle-list">
							<a href class="welcome__link">Email</a>
							<a href class="welcome__link">LinkedIn</a>
							<a href class="welcome__link">Twitter</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- end hero -->
	</section>
</template>

<script>
export default {
	name: "Welcome"
};
</script>

<style lang="scss">
/* bg patterns */
/* #welcome { */
.welcome-outer {
	position: relative;

	&:before,
	&:after {
		position: absolute;
		content: "";
		right: 0;
		z-index: -1;
	}

	&:before {
		top: 0;
		background: #f0faff;
		opacity: 0.8;
		clip-path: polygon(0 100%, 100% 100%, 100% 25%);
		height: 100%;
		width: 100%;

		@include media-up(small) {
			height: 88vh;
			width: 34vw;
			clip-path: polygon(0 0, 100% 100%, 100% 0);
		}
	}

	@include media-up(small) {
		&:after {
			bottom: 0;
			background: #c9e2f5;
			opacity: 0.74;
			height: 100vh;
			width: 44vw;
			clip-path: polygon(100% 0, 0% 100%, 100% 100%);
			z-index: -2;
		}
	}
}

.welcome-outer {
	min-height: calc(100vh - 60px);
	padding-top: 4rem;
	padding-bottom: 4rem;
	display: flex;
	flex-direction: column;

	@media (min-width: 560px) {
		flex-direction: row;
	}
}

.welcome-inner {
	@media (min-width: 560px) {
		width: 60%;
	}
}

.welcome__h1 {
	color: $blue-600;
	font-size: 40px;
	text-transform: uppercase;
	line-height: 0.85;
	margin-bottom: 1vw;
	white-space: nowrap;
	position: relative;

	@media screen and (max-width: 260px) {
		margin-bottom: 10px;
	}
}

.welcome__h1-1 {
	font-size: 32px;
}

@media screen and (max-width: 260px) {
	.welcome__h1 {
		line-height: 1.1rem;
	}
	.welcome__h1-1 {
		font-size: 1.2rem !important;
	}
	.welcome__h1-2 {
		font-size: 2rem !important;
		line-height: 30px;
		white-space: normal;
	}
}

.welcome__h1-2 {
	position: relative;
	margin-left: -0.75vw;
	font-size: 50px;
}
.welcome__h1-2:before {
	position: absolute;
	content: "";
	width: 50vw;
	left: -50vw;
	background-color: currentColor;
	opacity: 0.4;
	height: 18%;
	bottom: 52%;
}
.welcome__h1-2:after {
	position: absolute;
	content: "";
	width: 50vw;
	left: -50vw;
	background-color: currentColor;
	opacity: 0.4;
	height: 18%;
	bottom: 25%;
}

.welcome__h2 {
	max-width: 35ch;
	margin-bottom: 10vh;
}

.welcome__h3 {
	font-size: 22px;
	margin-bottom: 0.5rem;
}

.cta {
	margin-right: 20px;
	line-height: $line-height-small;
	display: inline-block;
}

.welcome__links {
	font-weight: 500;
	display: inline-flex;
	flex-wrap: wrap;
	line-height: $line-height-small;
}

.welcome__link {
	@include link;
	margin-right: 30px;

	@include media-up(small) {
		margin-right: 40px;
	}

	&:before {
		position: absolute;
		content: "/";
		right: -19px;
		color: $blue-400;

		@include media-up(small) {
			right: -23px;
		}
	}
	&:last-of-type {
		margin-right: 0;

		&:before {
			content: "";
		}
	}
}
</style>