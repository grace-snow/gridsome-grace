<template>
	<section class="intro">
		<div class="intro__content">
			<h2>Who am I?</h2>
			<p>
				<strong>I'm Grace</strong>, a strategic designer and front end
				enthusiast based in Liverpool, UK.
			</p>
			<p>
				Beyond work, I love being outside, walking in the park, cuddling my
				cats, and drinking in beer gardens.
			</p>
			<g-link to="/about" class="btn">More about me</g-link>
		</div>
		<div class="intro__img">
			<img src="http://placekitten.com/500/600" alt="Grace" class="sr-only" />
		</div>
	</section>
</template>

<script>
export default {
	name: "HomeIntro"
};
</script>

<style lang="scss">
// About section
.intro {
	background: #1c5888;
	background: -moz-linear-gradient(top, #1c5888 21%, #0f2e48 97%);
	background: -webkit-linear-gradient(top, #1c5888 21%, #0f2e48 97%);
	background: linear-gradient(to bottom, #1c5888 21%, #0f2e48 97%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c5888', endColorstr='#0f2e48',GradientType=0 );
	color: #fff;

	@include media-up(small) {
		display: flex;
		justify-content: space-between;
	}

	&__content {
		padding: $space-40 $space-20;

		@include media-up(small) {
			padding: $space-60 0 $space-60 $space-40;
		}
	}

	h2 {
		color: #fff;
		position: relative;
		text-shadow: 0 2px 4px $blue-dark-5;

		&:before {
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
		}
	}

	p {
		letter-spacing: $main-letter-space;
		margin-bottom: 1em;
		text-shadow: 0 2px 4px $blue-dark-5;
	}

	&__img {
		min-width: 44vw;
		min-height: 300px;
		background-image: url("http://placekitten.com/500/600");
		background-size: cover;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 45% 100%);
	}
}
</style>