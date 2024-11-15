<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
	let sy: number;

</script>

<svelte:window bind:scrollY={sy}/>

<div id="banner" in:fly={{ duration: 300, delay: 400, y: 20 }}>
	<div class="cortin"></div>
	<div class="info" style='transform: translate(0,{-sy * 0.2}px)'>
		<h1 in:fly={{ duration: 300, delay: 500, y: 20 }}>{$t('page.about.title')}</h1>
		<p in:fly={{ duration: 300, delay: 600, y: 20 }}>{$t('page.about.text')}</p>
		<div class="buttons">
			<a href="/products" in:fly={{ duration: 300, delay: 600, y: 20 }}>{$t('menu.products')}</a>
			<a
				aria-label="icon"
				href="/products"
				class="wicon"
				in:fly={{ duration: 300, delay: 700, y: 20 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	</div>
	<div class="card" in:fly={{ duration: 300, delay: 800, y: 20 }}>
		<div class="bean">
			<span in:fly={{ duration: 300, delay: 900, y: 20 }}>1964</span>
			<p in:fly={{ duration: 300, delay: 1100, y: 20 }}>{$t('page.about.bean.fundation')}</p>
		</div>
	</div>
</div>

<style lang="scss">
	#banner {
		height: 90vh;
		background-image: url('/about/intro.jpg');
		background-position: center center;
		background-repeat: no-repeat;
		position: absolute;
		background-size: cover;
		width: 95.9%;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		border-radius: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;

		@media only screen and (max-width: 992px) {
			height: 70vh;
		}

		& > .cortin {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: black;
			opacity: 0.7;
			border-radius: 30px;
			position: absolute;
			z-index: 0;
		}
		& > .info {
			width: 60%;
			z-index: 1;

			@media only screen and (max-width: 992px) {
				width: 80%;
			}

			& > h1 {
				font-size: 4.0625rem;
				font-weight: bold;
				color: white;
				letter-spacing: -1.42px;
			}
			& > p {
				width: 70%;
				font-size: 1.125rem;
				color: white;
				margin: 1.875rem auto;
				font-weight: 400;

				@media only screen and (max-width: 992px) {
					width: 90%;
					margin: 30px auto;
					font-size: 10px;
				}
			}
			& > .buttons {
				margin: 1.875rem auto 0 auto;
				display: flex;
				justify-content: right;
				align-items: center;
				width: 30%;

				@media only screen and (max-width: 992px) {
					width: 80%;
					justify-content: center;
				}

				& > a {
					background: #d14338;
					padding: 1.25rem 1.875rem;
					color: #fff;
					font-size: 1.25rem;
					font-weight: 600;
					border-radius: 3.125rem;
					width: 41%;
					text-align: center;
					transition: all ease 0.2s;
					@media only screen and (max-width: 992px) {
						width: auto;
					}
					&:hover {
						transform: translateY(-5px);
						box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
					}
					&.wicon {
						padding: 1.25rem;
						width: 1.66666667rem;
						height: 1.66666667rem;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					& > svg {
						width: 1.5rem;
					}
				}
			}
		}
		& > .card {
			position: absolute;
			bottom: 0;
			right: 0;
			width: 16.5rem;
			height: 8.4375rem;
			background: white;
			border-top-left-radius: 30px;
			display: flex;

			&::after {
				content: url('/helpers/small-corner.svg');
				position: absolute;
				top: -2.1875rem;
				right: 0;
				transition: all ease 0.5s;
				opacity: 1;
				width: 35px;
				height: 35px;
				z-index: 2;
				@media only screen and (max-width: 992px) {
					top: -4.387rem;
				}
			}
			&::before {
				content: url('/helpers/small-corner.svg');
				position: absolute;
				bottom: 0;
				left: -2.1875rem;
				transition: all ease 0.5s;
				opacity: 1;
				width: 35px;
				height: 35px;
				z-index: 2;
				@media only screen and (max-width: 992px) {
					left: -4.387rem;
				}
			}
			& > .bean {
				background: #d14338;
				width: 12.5rem;
				height: 4.375rem;
				border-radius: 1.5625rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				padding: 1.25rem;
				@media only screen and (max-width: 992px) {
					width: 10.5rem;
				}

				& > span {
					font-size: 2.25rem;
					color: white;
					width: 100%;
					text-align: left;
				}
				& > p {
					font-size: 1.125rem;
					color: white;
					width: 100%;
					text-align: left;
				}
			}
		}
	}
</style>
