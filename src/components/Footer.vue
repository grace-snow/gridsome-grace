<template>
	<div id="footer">
		<footer class="bg-dark">
			<div class="footer page-width page-padding">
				<ul class="list list--inline">
					<li>
						<a href class="footer__link">
							<span class="icon icon--inline">icon</span
							>gracesnowdesign@gmail.com
						</a>
					</li>
					<li>
						<a href class="footer__link">
							<span class="icon icon--inline">icon</span>gracesnow
						</a>
					</li>
					<li>
						<a href class="footer__link">
							<span class="icon icon--inline">icon</span>grace-snow
						</a>
					</li>
				</ul>
				<ul class="list">
					<li>
						<a href class="footer__link">1</a>
					</li>
					<li>
						<a href class="footer__link">2</a>
					</li>
					<li>
						<a href class="footer__link">3</a>
					</li>
					<li>
						<a href class="footer__link">4</a>
					</li>
				</ul>
			</div>
		</footer>
		<footer class="bg-darkest">
			<div class="footer page-width page-padding">
				<p class="test">Made with love by Grace &copy;2020</p>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style lang="scss">
.footer {
	display: flex;
	justify-content: space-between;
}

.footer__link {
	padding: 0 1em;
}

li:first-child .footer__link {
	padding-left: 0;
}
li:last-child .footer__link {
	padding-right: 0;
}
</style>