<script lang="ts">
	import { onMount } from 'svelte';
	import { t, locale } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';

	let checkboxIcon: HTMLElement;
	let checkboxDiretction = 1;
	let checkboxAnimation: any;
	let buttonText = $state('footer.newsletter.button');
	let error = $state('');
	let email = $state('');

	const handleClickCheckbox = () => {
		checkboxIcon.click();
	};

	const submitForm = () => {
		error = '';
		email = email.trim();
		const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (!validRegex.test(email)) {
			error = 'footer.newsletter.invalidEmail';
			return;
		}
		if (checkboxDiretction === 1) {
			error = 'footer.newsletter.invalidTerms';
			return;
		}

		buttonText = '....';
		setTimeout(() => {
			buttonText = 'footer.newsletter.thanks';
			email = '';
		}, 2000);
	};

	onMount(() => {
		import('lottie-web').then((lottie: any) => {
			checkboxAnimation = lottie.loadAnimation({
				container: checkboxIcon,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: '/animations/checkbox/checkbox.json'
			});
		});

		// Handle click to play the animation in reverse or forward
		checkboxIcon.addEventListener('click', () => {
			checkboxAnimation.setDirection(checkboxDiretction);
			checkboxAnimation.play();
			checkboxDiretction = -checkboxDiretction;
		});
	});
</script>

<footer>
	<div id="top-footer">
		<h1>{@html $t('footer.title')}</h1>
		<div id="newsletter">
			<p>
				{@html $t('footer.newsletter.text')}
			</p>
			<form action="" method="get" onsubmit={submitForm}>
				<input type="text" name="email" placeholder="Email" bind:value={email} />
				<button type="submit">
					{$t(buttonText)}
				</button>
				<div class="checkbox">
					<button aria-label="terms" type="button" class="checkbox-item" bind:this={checkboxIcon}
					></button>
					<button type="button" class="text" onclick={handleClickCheckbox}
						>{$t('footer.newsletter.terms')}</button
					>
				</div>
				{#if error}
					<div
						class="error"
						in:fly={{ duration: 300, delay: 400, x: 20 }}
						out:fly={{ duration: 300, delay: 400, x: -20 }}
					>
						{$t(error)}
					</div>
				{/if}
			</form>
		</div>
	</div>
	<div id="middle-footer">
		<div id="aquitex">
			<img src="logo.png" alt="Aquitex Logo" width="117px" height="52px" />
			<p>
				{$t('footer.columns.text')}
			</p>
		</div>
		<div id="address">
			<h3>{$t('footer.columns.address-title')}</h3>
			<p>
				<a href="https://maps.app.goo.gl/NP4x1dQDPdhxQ3y7A" target="_blank">
					{@html $t('footer.columns.address-text')}
				</a>
			</p>
		</div>
		<div id="map">
			<h3>{$t('footer.columns.map')}</h3>
			<ul>
				<li>
					<a href="/">{$t('menu.home')}</a>
				</li>
				<li>
					<a href="/about">{$t('menu.about')}</a>
				</li>
				<li>
					<a href="/products">{$t('menu.products')}</a>
				</li>
				<li>
					<a href="/sustainability">{$t('menu.sustainability')}</a>
				</li>
				<li>
					<a href="/contacts">{$t('menu.contacts')}</a>
				</li>
			</ul>
		</div>
		<div id="socials">
			<h3>{$t('footer.columns.socials')}</h3>
			<ul>
				<li>
					<a href="https://facebook.com" target="_blank">Facebook</a>
				</li>
				<li>
					<a href="https://x.com" target="_blank">Twitter</a>
				</li>
				<li>
					<a href="https://linkdin.com" target="_blank">Linkedin</a>
				</li>
				<li>
					<a href="https://instagram.com" target="_blank">Instagram</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="bottom-footer">
		<span>2024 © Aquitex - Todos os direitos reservados </span>
		<ul>
			<li>
				<a href="/contacts">{$t('menu.contacts')}</a>
			</li>
			<li>
				<a href="/terms">{$t('menu.terms')}</a>
			</li>
			<li>
				<a href="/privacy">{$t('menu.privacy')}</a>
			</li>
		</ul>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 60px;
		background: #292929;
		border-radius: 30px;
		margin: 60px auto;
		& > #top-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: nowrap;
			width: 100%;

			@media only screen and (max-width: 992px) {
				flex-wrap: wrap;
			}

			& > h1 {
				width: 50%;
				font-size: 64px;
				font-weight: 600;
				color: white;

				@media only screen and (max-width: 992px) {
					width: 100%;
					font-size: 18px;
					text-align: center;
				}
			}
			& > #newsletter {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				width: 40%;

				@media only screen and (max-width: 992px) {
					margin: 0;
					width: 100%;
				}

				& > p {
					font-size: 18px;
					color: white;
					margin: 0 0 26px 0;
					font-weight: 400;
					width: 100%;
					line-height: 32px;

					@media only screen and (max-width: 992px) {
						margin: 0;
						padding: 20px 0 30px;
						text-align: center;
						font-size: 12px;
						line-height: 25px;
					}
				}
				& > form {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
					& > input {
						background: white;
						font-size: 15px;
						padding: 20px 30px;
						border-radius: 50px;
						width: calc(100% - 210px);
						transition: all ease 0.2s;
						@media only screen and (max-width: 992px) {
							padding: 20px 20px;
							width: 100%;
							font-size: 12px;
						}
						&:hover {
							transform: translateY(-5px);
						}
					}
					& > button {
						background: #d14338;
						width: 140px;
						padding: 20px 0;
						border-radius: 31px;
						font-size: 16px;
						text-transform: uppercase;
						color: white;
						font-weight: 600;
						transition: all ease 0.2s;

						@media only screen and (max-width: 992px) {
							padding: 15px 0;
							margin: 20px auto 10px;
							font-size: 12px;
						}

						&:hover {
							transform: translateY(-5px);
						}
					}
					& > .checkbox {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin: 10px 0 0 15px;
						width: 100%;

						@media only screen and (max-width: 992px) {
							justify-content: center;
						}

						& > .checkbox-item {
							color: white;
							width: 15px;
							height: 15px;
							filter: invert(1);
						}
						& > .text {
							color: white;
							margin: 0 0 0 5px;
							font-size: 12px;
							@media only screen and (max-width: 992px) {
								font-size: 8px;
							}
						}
					}
					& > .error {
						color: #d14338;
						width: 100%;
						padding: 20px;
						@media only screen and (max-width: 992px) {
							text-align: center;
							font-size: 12px;
						}
					}
				}
			}
		}
		& > #middle-footer {
			display: flex;
			justify-content: space-between;
			align-items: start;
			padding: 70px 0;
			margin-top: 70px;
			border-top: 1px solid #3f3f42;
			border-bottom: 1px solid #3f3f42;
			flex-wrap: wrap;

			@media only screen and (max-width: 992px) {
				flex-wrap: wrap;
			}

			& > div {
				margin: 0;

				@media only screen and (max-width: 992px) {
					width: 100%;
				}

				& h3 {
					font-size: 24px;
					font-weight: 700;
					line-height: 30px;
					color: white;

					@media only screen and (max-width: 992px) {
						font-size: 18px;
						text-align: center;
					}
				}
				& p,
				& p > a {
					max-width: 300px;
					line-height: 30px;
					color: white;
					font-size: 18px;
					margin: 20px 0 0 0;
					font-weight: 400;

					@media only screen and (max-width: 992px) {
						font-size: 12px;
						margin: 20px 0 30px 0;
						line-height: 24px;
						text-align: center;
					}
				}
				& ul {
					padding: 14px 0;
					font-size: 18px;
					@media only screen and (max-width: 992px) {
						margin-bottom: 30px;
					}
					& > li {
						line-height: 32px;
						transition: all ease 0.2s;
						@media only screen and (max-width: 992px) {
							text-align: center;
						}
						&:hover {
							transform: translateY(-2px);
							opacity: 0.5;
						}
						& > a {
							color: white;
							font-weight: 400;

							@media only screen and (max-width: 992px) {
								font-size: 12px;
								text-align: center;
							}
						}
					}
				}
				&#aquitex {
					width: 30%;

					@media only screen and (max-width: 992px) {
						width: 100%;
						text-align: center;
					}

					& > img {
						filter: grayscale(1) invert(1) contrast(1);
					}
				}
			}
		}
		& > #bottom-footer {
			display: flex;
			justify-content: space-between;
			padding: 30px 0 0;
			color: #a9a9a9;

			@media only screen and (max-width: 992px) {
				flex-wrap: wrap;
				flex-direction: column-reverse;
			}

			& > span {
				@media only screen and (max-width: 992px) {
					width: 100%;
                    font-size: 12px;
                    margin: 20px 0 0 0;
                    text-align: center;
				}
			}
			& > ul {
				display: flex;
				justify-content: center;
				align-items: center;
				@media only screen and (max-width: 992px) {
					width: 100%;
					flex-wrap: wrap;
				}
				& > li {
					margin: 0 0 0 15px;
					@media only screen and (max-width: 992px) {
						width: 100%;
                        text-align: center;
                        padding: 10px;
					}
					& > a {
						color: #a9a9a9;
						font-size: 16px;
						@media only screen and (max-width: 992px) {
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>
