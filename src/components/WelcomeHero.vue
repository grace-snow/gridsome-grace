<template>
	<section>
		<div class="page-padding page-width section welcome-outer">
			<div class="welcome-inner">
				<h1 class="welcome__h1">
					<span class="welcome__h1-one">The Web is for</span>
					<span class="welcome__h1-two">Everyone</span>
				</h1>
				<h2 class="welcome__h2">
					I care about making web stuff that's easy to use and inclusive.
				</h2>
				<div class="welcome-cta">
					<h3 class="welcome-cta__heading">
						Want to work together?
					</h3>
					<div class="welcome-cta__content">
						<p class="welcome-cta__link-intro">
							Contact me via:
						</p>
						<ul class="welcome-cta__links">
							<li>
								<a href="mailto:gracesnowdesign@gmail.com" class="link"
									>Email</a
								>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/gracesnow/"
									target="_blank"
									rel="noopener noreferrer"
									class="link"
									>LinkedIn</a
								>
							</li>
							<li>
								<a
									href="https://twitter.com/grace-snow/"
									target="_blank"
									rel="noopener noreferrer"
									class="link"
									>Twitter</a
								>
							</li>
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
		background: $neutral-100;
		opacity: 0.8;
		clip-path: polygon(0 100%, 100% 100%, 100% 45%);
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
			background: $neutral-200;
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
	display: flex;
	flex-direction: column;

	@media (min-width: 560px) {
		flex-direction: row;
	}

	@include media-up(huge) {
		min-height: 0;
	}
}

.welcome__h1 {
	color: $blue-600;
	font-size: unset;
	letter-spacing: 0;
	text-transform: uppercase;
	line-height: 0.85;
	margin-bottom: 1em;
	position: relative;

	&-one {
		font-size: 32px;
		font-size: clamp(1.5rem, calc(4.1vw + 1px), 3.075rem);
	}

	&-two {
		position: relative;
		display: block;
		margin-left: -0.75vw;
		letter-spacing: -0.2pt;
		font-size: 50px;
		font-size: clamp(2.75rem, calc(12vw + 1px), 8.25rem);

		&:before,
		&:after {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50vw;
			background: currentColor;
			opacity: 0.4;
			height: 32%;
		}

		&:before {
			top: 0.125em;
		}

		&:after {
			bottom: 0.05em;
		}
	}
}

.welcome {
	&__h2 {
		max-width: 33ch;
		margin-bottom: 10vh;
		font-size: clamp(1.125rem, calc(3.25vw + 1px), 2.25rem);
	}
}

.welcome-cta {
	&__heading {
		font-size: 22px;
		margin-bottom: 0.5rem;
		font-size: clamp(1.125rem, calc(2.25vw + 1px), 1.5rem);
	}

	&__content {
		font-size: clamp(1rem, calc(1.8vw + 1px), 1.25rem);
	}

	&__link-intro {
		margin-right: 20px;
		margin-bottom: 0.5em;
		line-height: $line-height-small;
		display: inline-block;
	}

	&__links {
		display: block;
		@include list--chevrons;

		@include media-up(small) {
			display: inline-block;
			@include list--inline-divider;
		}
	}
}
</style>