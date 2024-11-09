<script lang="ts">
	import { onMount } from 'svelte';
	import { t, locale } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let sidebar: boolean = $state(false);

	let hamburgerIcon: HTMLElement;
	let hamburgerAnimation: any;
	let hamburgerDirection: any = 1;

	let menu = [
		{
			url: '/about',
			label: 'menu.about'
		},
		{
			url: '/products',
			label: 'menu.products'
		},
		{
			url: '/sustainability',
			label: 'menu.sustainability'
		},
		{
			url: '/contacts',
			label: 'menu.contacts'
		}
	];

	const changeLang = () => {
		$locale = $locale === 'en' ? 'pt' : 'en';
		console.log(`changing language to...${$locale}`);
	};

	const switchBurger = () => {
		sidebar = !sidebar;
	};

	const handleClick = () => {
		hamburgerIcon.click();
	};

	onMount(() => {
		setTimeout(() => {
			import('lottie-web').then((lottie: any) => {
				hamburgerAnimation = lottie.loadAnimation({
					container: hamburgerIcon,
					renderer: 'svg',
					loop: false,
					autoplay: false,
					path: '/animations/menu/menu.json'
				});
			});

			hamburgerIcon.addEventListener('click', () => {
				hamburgerAnimation.setDirection(hamburgerDirection);
				hamburgerAnimation.play();
				hamburgerDirection = -hamburgerDirection;
			});
		}, 500);
	});
</script>

<header in:fly={{ duration: 300, delay: 300, y: -20 }}>
	<div id="header" class="container">
		<div id="logo">
			<a href="/">
				<img src="logo.png" alt="Aquitex Logo" />
			</a>
		</div>
		<nav in:fly={{ duration: 300, delay: 500, y: 20 }}>
			<ul>
				{#each menu as item}
					<li>
						<a href={item.url} class:active={$page.url.pathname.includes(item.url)}
							>{$t(item.label)}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<div id="lang">
			<button type="button" onclick={changeLang}>{$locale.toUpperCase()}</button>
		</div>
		<nav id="mobile">
			<div id="burger">
				<button
					id="hamburger"
					onclick={switchBurger}
					in:fly={{ duration: 300, delay: 550, y: 0 }}
					bind:this={hamburgerIcon}
				>
					<!-- Hamburger will appear here -->
				</button>
			</div>
		</nav>
		{#if sidebar}
			<aside
				in:fly={{ duration: 300, delay: 400, x: 20 }}
				out:fly={{ duration: 300, delay: 400, x: -20 }}
			>
				<ul>
					{#each menu as item}
						<li>
							<a
								href={item.url}
								onclick={handleClick}
								class:active={$page.url.pathname.includes(item.url)}>{$t(item.label)}</a
							>
						</li>
					{/each}
				</ul>
			</aside>
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		width: calc(100vw + 3%);
		top: 0;
		margin: 0 0 0 -9%;
		left: 0;
		z-index: 2;
		#header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			height: 179px;
			position: static;
			top: 0;
			&::before {
				content: ' ';
				position: absolute;
				top: 0;
				left: 0;
				width: 5%;
				display: block;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 1) 83%,
					rgba(245, 245, 245, 1) 100%
				);
				padding: 0 0 50px 0;
				z-index: 0;
				height: 179px;
			}
			&::after {
				content: ' ';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				display: block;
				height: 18px;
				background: white;
				z-index: 0;
			}
			& > #logo {
				width: 20%;
				margin: 0;
				background: #fff;
				padding: 25px 0;
				border-bottom-right-radius: 30px;
				z-index: 1;
				position: relative;
				height: 59px;
				max-width: 170px;
				min-width: 170px;
				display: flex;
				justify-content: center;
				align-items: center;
				&::after {
					content: url('helpers/corner.svg');
					width: 70px;
					height: 70px;
					display: block;
					position: absolute;
					top: 18px;
					right: -70px;
				}
				&::before {
					content: url('helpers/corner.svg');
					width: 70px;
					height: 70px;
					display: block;
					position: absolute;
					bottom: -70px;
					left: 0;
				}
				& > a > img {
					width: 117px;
					height: 54px;
					object-fit: contain;
					@media only screen and (max-width: 992px) {
						width: 97px;
						height: 44px;
					}
				}
			}
			& > nav {
				width: 80%;
				padding: 30px;

				@media only screen and (max-width: 992px) {
					display: none;
				}

				& > ul {
					display: flex;
					justify-content: space-between;
					width: 100%;
					color: black;
					margin: auto 0;
					max-width: 445px;
					padding: 21px 45px;
					background: rgba(255, 255, 255, 0.7);
					backdrop-filter: blur(10px);
					border-radius: 45px;
					font-size: 16px;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

					@media only screen and (max-width: 992px) {
						margin: auto 0;
					}

					& > li {
						& > a {
							font-size: 16px;
							font-weight: 500;
							transition: all ease 0.2s;
							&:hover {
								opacity: 0.8;
							}
							&.active {
								opacity: 0.5;
							}
						}
					}
				}
				&#mobile {
					display: none;
					width: 20%;
					padding: 40px 0;
					z-index: 11;

					& > #burger {
						width: 48px;
						height: 48px;
						background: white;
						font-size: 8px;
						font-weight: 900;
						border-radius: 100%;
						box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
						display: flex;
						justify-content: center;
						align-items: center;
						transition: all ease 0.2s;
						&:hover {
							transform: translateY(-3px);
							box-shadow: rgba(149, 157, 165, 0.2) 0px 12px 40px;
						}

						& > button {
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}

					@media only screen and (max-width: 992px) {
						display: block;
					}
				}
			}
			& > #lang {
				width: 10%;
				text-align: right;
				margin: 0;
				padding: 30px 0;
				z-index: 3;

				@media only screen and (max-width: 992px) {
					padding: 40px 0;
				}

				& > button {
					width: 48px;
					height: 48px;
					background: white;
					font-size: 13px;
					font-weight: 900;
					border-radius: 100%;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
					transition: all ease 0.2s;
					&:hover {
						transform: translateY(-3px);
						box-shadow: rgba(149, 157, 165, 0.2) 0px 12px 40px;
					}
				}
			}
			& > aside {
				display: none;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100dvh;
				background: white;
				z-index: 10;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;

				@media only screen and (max-width: 992px) {
					display: flex;
				}
				& > ul {
					width: 50%;
					height: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;

					& > li {
						width: 100%;
						text-align: center;

						& > a {
							font-size: 24px;
							font-weight: 500;
							color: #272727;

							&.active {
								opacity: 0.5;
							}
						}
					}
				}
			}
		}
	}
</style>
