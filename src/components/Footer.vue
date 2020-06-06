<template>
	<footer id="footer" class="">
		<div class="footer page-padding page-width">
			<div class="footer__primary">
				<p class>
					Made with
					<span id="heart" class="icon-wrap icon-wrap--inline text-blue-200">
						<svg
							aria-hidden="true"
							focussable="false"
							alt="love heart"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="featherxxx feather-heartxxx"
						>
							<path
								d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
							/>
						</svg>
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
					<span id="email" class="icon-wrap icon-wrap--inline">
						<svg
							aria-hidden="true"
							focussable="false"
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/>
							<polyline points="22,6 12,13 2,6" />
						</svg> </span
					>gracesnowdesign@gmail.com
				</a>
			</div>
			<div class="footer__secondary">
				<ul class="footer__links smallText text-white">
					<li>
						<a
							href=""
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
import EmailIcon from "~/assets/images/icons/mail.svg";
import CodepenIcon from "~/assets/images/icons/codepen.svg";
import GithubIcon from "~/assets/images/icons/github.svg";
import TwitterIcon from "~/assets/images/icons/twitter.svg";
import LinkedinIcon from "~/assets/images/icons/linkedin.svg";

export default {
	name: "Footer",
	components: {
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
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	overflow: hidden;
	padding-top: 1rem;
	padding-bottom: 1rem;
	@include font-heading;
	font-weight: $weight-semibold;
	color: $blue-100;

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
	}

	&__links {
		display: flex;
		justify-content: flex-end;
		margin: 0 -0.25em;
		font-size: $smallText;

		> * {
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

#email {
	margin-right: 0.5em;

	svg {
		margin-bottom: -0.25em;
	}
}
</style>