<template>
	<section class="work">
		<h2>My Work Projects</h2>
		<ul class="work__projects">
			<li class="item">
				<h3 class="item__title">
					Helping teachers plan lessons in just 5 minutes
				</h3>
				<img src="http://placekitten.com/400/280" alt="" class="item__img" />
				<ul class="item__tags">
					<li class="tag">Web App</li>
					<li class="tag">Lead</li>
					<li class="tag">UX design</li>
					<li class="tag">Front End</li>
				</ul>
			</li>
			<li class="item">
				<h3 class="item__title">
					Getting schools ready for Ofsted inspections
				</h3>
				<img src="http://placekitten.com/400/280" alt="" class="item__img" />
				<ul class="item__tags">
					<li class="tag">Web App</li>
					<li class="tag">Design</li>
					<li class="tag">Front End</li>
				</ul>
			</li>
			<li class="item">
				<h3 class="item__title">Proposing a happier Happy Cow app</h3>
				<img src="http://placekitten.com/400/280" alt="" class="item__img" />
				<ul class="item__tags">
					<li class="tag">Mobile App</li>
					<li class="tag">UX design</li>
				</ul>
			</li>
		</ul>
		<div class="work__btn btn-wrap">
			<g-link to="/project-listing/" class="btn">See more work</g-link>
		</div>
	</section>
</template>

<script>
export default {
	name: "HomeProjects"
};
</script>

<style lang="scss">
// About section
.work {
	padding: $space-40 $space-20;
	@include media-up(small) {
		padding: $space-60 $space-40;
	}

	.work__projects {
		display: flex;
		flex-wrap: wrap;
		margin: -1.6rem;

		> * {
			flex: 1 0 10em;
			margin: 1.6rem;
			// display: grid;
			// grid-gap: 5px;
			// grid-template-rows: auto minmax(75px, auto) auto;
			// grid-template-areas:
			// 	"tags"
			// 	"title"
			// 	"image";
			display: flex;
			flex-direction: column;

			&:before {
				position: absolute;
			}
		}
	}

	.item {
		&__title {
			grid-area: title;
			margin-bottom: auto;
			color: $blue-dark-2;
			font-size: $size-4;
			text-decoration: underline;
			order: 2;
		}

		&__tags {
			grid-area: tags;
			font-family: $font-heading;
			text-transform: uppercase;
			font-weight: $weight-semibold;
			display: flex;
			font-size: 0.8125rem;
			display: flex;
			flex-wrap: wrap;
			order: 1;

			> * {
				flex: 0 0 auto;
				margin-right: 1.75em;
				position: relative;

				&:after {
					position: absolute;
					content: "";
					color: $blue-light-3;
					top: 4px;
					right: -11px;
					height: 1em;
					transform: skew(-20deg);
					width: 2px;
					background: $blue-light-3;
				}

				&:last-child {
					margin-right: 0;
					&:after {
						height: 0;
					}
				}
			}
		}

		&__img {
			grid-area: image;
			order: 3;
			align-self: flex-start;
			margin-top: 10px;
		}
	}

	h2 {
		// color: #fff;
		position: relative;
		margin-bottom: $space-40;
		// text-shadow: 0 2px 4px $blue-dark-5;

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

	&__btn {
		margin-top: $space-40;
	}
}
</style>