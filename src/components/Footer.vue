<template>
	<footer id="footer" class="">
		<div class="footer page-padding page-width">
			<div class="footer__primary">
				<p class>
					Made with
					<span id="heart" class="icon-wrap icon-wrap--inline text-blue-200">
						<Heart-icon stroke-width="3" />
					</span>
					<span class="sr-only">love</span>
					by Grace &copy;{{ new Date().getFullYear() }}
				</p>
				<a
					href="mailto:gracesnowdesign@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					class="smallText"
				>
					<span id="emailIcon" class="icon-wrap icon-wrap--inline"
						><Email-icon stroke-width="2"/></span
					>gracesnowdesign@gmail.com
				</a>
			</div>
			<div class="footer__secondary">
				<ul class="footer__links unstyle-list smallText text-white">
					<li>
						<a
							href="https://codepen.io/grace-snow"
							class="footer__link"
							aria-label="See Grace's work on Codepen"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Codepen-icon class="footer__icon" stroke-width="2" />
						</a>
					</li>

					<li id="github">
						<a
							href="https://github.com/grace-snow/"
							class="footer__link"
							aria-label="Go to Github"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github-icon class="footer__icon" stroke-width="2" />
						</a>
					</li>
					<li id="twitter">
						<a
							href="https://twitter.com/grace-snow/"
							class="footer__link"
							aria-label="Go to Twitter"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter-icon class="footer__icon" stroke-width="2" />
						</a>
					</li>
					<li id="linkedin">
						<a
							href="https://www.linkedin.com/in/gracesnow/"
							class="footer__link"
							aria-label="Go to LinkedIn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin-icon class="footer__icon" stroke-width="2" />
						</a>
					</li>
				</ul>
				<div class="smallText font-sans">
					<!-- TODO: Add RSS feed and sitemap -->
					<a
						href="/rss.xml"
						class="text-white hover:text-blue-300 hover:underline font-normal"
						>RSS Feed</a
					>
					|
					<a
						href="/sitemap.xml"
						class="text-white hover:text-blue-300 font-normal hover:underline"
						>Sitemap</a
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import HeartIcon from "~/assets/images/icons/heart.svg";
import EmailIcon from "~/assets/images/icons/mail.svg";
import CodepenIcon from "~/assets/images/icons/codepen.svg";
import GithubIcon from "~/assets/images/icons/github.svg";
import TwitterIcon from "~/assets/images/icons/twitter.svg";
import LinkedinIcon from "~/assets/images/icons/linkedin.svg";

export default {
	name: "Footer",
	components: {
		HeartIcon,
		EmailIcon,
		CodepenIcon,
		GithubIcon,
		TwitterIcon,
		LinkedinIcon
	}
};
</script>

<style lang="scss">
#footer {
	background-color: $blue-1000;
	background-image: $blue-gradient-1000;
}

.footer {
	@include font-heading;
	font-weight: $weight-semibold;
	color: $blue-100;
	padding-top: 1rem;
	padding-bottom: 1rem;
	overflow: hidden;
	text-align: center;

	@include media-up(small) {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		text-align: initial;
	}

	a {
		text-decoration: none;
		@include font-met;
		font-weight: $weight-normal;
		color: #fff;

		&:hover {
			text-decoration: underline;
			color: $blue-300;
		}
	}

	&__primary {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 1.5rem;

		@include media-up(small) {
			margin-bottom: 0;
		}
	}

	&__links {
		display: flex;
		justify-content: center;
		margin: 0 -0.25em;
		font-size: $smallText;

		@include media-up(small) {
			justify-content: flex-end;
		}

		> * {
			list-style-type: none;
			flex: 0 1 1em;
			margin: 0 0.25em 0.25em 0.25em;
		}
	}

	&__link {
		font-weight: 600;
		font-size: 1em;
		color: #fff;
		height: 2em;
		width: 2em;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			height: 1.5em;
			width: 1.5em;
		}

		&:hover {
			color: $blue-300;
		}
	}
}

.icon-wrap,
.icon-wrap svg {
	height: 1em;
	width: 1em;
}

.icon-wrap--inline {
	display: inline-block;

	svg {
		margin-bottom: -0.125em;
	}
}

.icon-wrap--inline,
.icon-wrap--inline svg {
	width: 1.25em;
}

#heart {
	color: $blue-200;
}

#emailIcon {
	margin-right: 0.5em;

	svg {
		margin-bottom: -0.25em;
	}
}
</style>