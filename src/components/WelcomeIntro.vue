<template>
	<section class="intro page-width">
		<div class="intro__content">
			<h2 class="equals-decal">Who am I?</h2>
			<p>
				<strong>I'm Grace</strong>, a strategic designer and front end
				enthusiast based in Liverpool, UK.
			</p>
			<p>
				Beyond work, I love being outside, walking in the park, cuddling my
				cats, and supping craft ales in beer gardens with friends.
			</p>
			<g-link to="/about" class="btn">More about me</g-link>
		</div>
		<div class="intro__img">
			<img
				src="../assets/images/gs_sefton.jpg"
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
	background: #1c5888;
	background: linear-gradient(to bottom, #1c5888 21%, #0f2e48 97%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c5888', endColorstr='#0f2e48',GradientType=0 );

	background: linear-gradient(to bottom, #256199 1%, #00182e 97%);

	color: #fff;

	@include media-up(small) {
		display: flex;
		justify-content: space-between;
	}
	&__content {
		padding: $space-40 $space-20;
		@include media-up(small) {
			padding: $space-60 0 $space-60 $space-20;
		}
		@include media-up(large) {
			padding: $space-60 0 $space-60 $space-40;
		}

		p {
			max-width: 40ch;
		}
	}
	h2 {
		color: #fff;
		/* position: relative; */
		text-shadow: 0 2px 4px $blue-dark-5;
		/* &:before {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: $blue-light-3;
			opacity: 0.2;
			height: 22%;
			bottom: 56%;
		}
		&:after {
			position: absolute;
			content: "";
			width: 50vw;
			left: -50.5vw;
			background-color: $blue-light-3;
			opacity: 0.2;
			height: 22%;
			bottom: 15%;
		} */
	}
	p {
		letter-spacing: $main-letter-space;
		margin-bottom: 1em;
		text-shadow: 0 2px 4px $blue-dark-5;
	}
	&__img {
		min-width: 44vw;
		min-height: 300px;
		background-image: url("../assets/images/gs_sefton.jpg");
		background-size: cover;
		background-position: center;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 14vw 100%);
		mix-blend-mode: luminosity;
	}
}
</style>