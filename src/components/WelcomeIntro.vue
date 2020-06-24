<template>
	<section class="intro page-width">
		<div class="intro__content section page-padding">
			<h2 class="intro__heading equals-decal">Who am I?</h2>
			<p class="intro__para">
				<strong
					>I'm Grace, a strategic designer and front end enthusiast based in
					Liverpool, UK.</strong
				>
				I love all things web design and try to keep user needs at the center of
				every project I work on.
			</p>
			<p class="intro__para">
				Beyond work, I love being outside, walking in the park, cuddling my
				cats, and sampling craft ales in beer gardens with friends.
			</p>
			<g-link to="/about" class="btn">More about me</g-link>
		</div>
		<div class="intro__img">
			<g-image
				src="~/assets/images/gs_sefton.jpg"
				alt="Grace out in the park"
				class="sr-only"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: "Intro"
};
</script>

<style lang="scss">
.intro {
	background: $blue-900;
	background: $intro-gradient;
	color: #fff;

	@include media-up(small) {
		display: flex;
		justify-content: space-between;
	}
	&__content {
		flex: 1 0 30%;

		> * {
			max-width: 33ch;
		}
	}
	&__heading {
		color: #fff;
		text-shadow: $text-shadow-on-dark;
	}
	&__para {
		font-size: $header5;
		text-shadow: $text-shadow-on-dark;
		margin-bottom: 1em;
	}
	&__img {
		min-width: 44vw;
		min-height: 300px;
		background-image: url("../assets/images/gs_sefton.jpg");
		background-size: cover;
		background-position: center;
		mix-blend-mode: luminosity;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

		@include media-up(small) {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 14vw 100%);
		}
	}
}
</style>