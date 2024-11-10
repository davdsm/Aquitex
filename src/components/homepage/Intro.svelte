<script>
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
</script>

<div id="intro">
	<div class="left">
		<h1 in:fly={{ duration: 300, delay: 400, y: 20 }}>{$t('intro.info.title')}</h1>
	</div>
	<div class="right">
		<p class="text" in:fly={{ duration: 300, delay: 500, y: 20 }}>
			{$t('intro.info.description')}
		</p>
		<div class="buttons">
			<a href="/about" in:fly={{ duration: 300, delay: 600, y: 20 }}>{$t('know-more')}</a>
			<a
				aria-label="icon"
				href="/about"
				in:fly={{ duration: 300, delay: 700, y: 20 }}
				class="wicon"
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
	<div id="info">
		<div class="about" in:fly={{ duration: 300, delay: 700, y: 20 }}>
			<span>{$t('intro.info.from')}</span>
			<span class="date">1963</span>
			<p>
				{$t('intro.info.text')}
			</p>
			<div class="corner">
				<a class="button" href="/products" in:fly={{ duration: 300, delay: 850, y: 20 }}
					>{$t('products')}</a
				>
			</div>
		</div>
		<div class="image-products" in:fly={{ duration: 300, delay: 800, y: 20 }}>
			<svg
				class="left-right"
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.585922 35.0762V0.0761719C0.585922 19.4062 16.2559 35.0762 35.5859 35.0762H0.585922Z"
					fill="white"
				/>
			</svg>
			<svg
				width="36"
				class="bottom-right"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.585922 35.0762V0.0761719C0.585922 19.4062 16.2559 35.0762 35.5859 35.0762H0.585922Z"
					fill="white"
				/>
			</svg>
		</div>
		<div class="labs" in:fly={{ duration: 300, delay: 900, y: 20 }}>
			<h3>{$t('labs')}</h3>
			<p class="text">{$t('labs.text')}</p>
			<a href="/products" in:fly={{ duration: 300, delay: 950, y: 20 }}>{$t('labs')}</a>
		</div>
	</div>
</div>

<style lang="scss">
	#intro {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		text-align: left;
		flex-wrap: wrap;

		@media only screen and (max-width: 992px) {
			max-width: 100%;
		}

		& > .left {
			width: 60%;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin: 0;

			@media only screen and (max-width: 992px) {
				width: 100%;
				text-align: center;
			}

			& > h1 {
				font-size: 5.9375rem;
				font-weight: 600;
				letter-spacing: -1.42px;
				line-height: 6.5rem;
			}
		}
		& > .right {
			width: 30%;
			margin: 0;

			@media only screen and (max-width: 992px) {
				margin-top: 40px;
				width: 100%;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}

			& > p {
				@media only screen and (max-width: 992px) {
					font-size: 20px;
					line-height: 25px;
				}
			}
			& > .buttons {
				margin: 30px 0 0 0;
				display: flex;
				justify-content: left;
				align-items: center;

				@media only screen and (max-width: 992px) {
					width: 60%;
					display: flex;
					justify-content: center;
				}

				& > a {
					background: #d14338;
					padding: 1.25rem 1.875rem;
					color: #fff;
					font-size: 1.25rem;
					font-weight: 600;
					border-radius: 50px;
					width: 31%;
					text-align: center;
					transition: all ease 0.2s;
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
		& > #info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 60px 0 0 0;
			width: 100%;
			max-width: 100%;

			@media only screen and (max-width: 992px) {
				flex-flow: column;
				max-width: 100%;
			}

			& > div {
				margin: 0;
				&.about {
					width: 14%;
					background: #d14338;
					padding: 4.4375rem;
					border-top-right-radius: 2.175rem;
					border-top-left-radius: 2.175rem;
					border-bottom-left-radius: 2.175rem;
					position: relative;

					@media only screen and (max-width: 992px) {
						width: calc(100% - 8.875rem);
						border-bottom-right-radius: 2.175rem;
						margin-bottom: 30px;
					}

					& > span,
					& > p {
						display: block;
						font-size: 1.5rem;
						color: white;
						font-weight: 600;
						@media only screen and (max-width: 992px) {
							font-size: 2.5rem;
						}
						&.date {
							margin: 5px 0 4.6475rem 0;
							font-size: 5.9375rem;
							@media only screen and (max-width: 992px) {
								margin: 5px 0 1.648rem 0;
							}
						}
					}

					& > div {
						position: absolute;
						right: -57%;
						bottom: 0px;
						padding: 60px 0;
						width: 57%;
						height: 14%;
						background: #d14338;
						border-top-right-radius: 35px;
						border-bottom-right-radius: 35px;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						z-index: 1;

						@media only screen and (max-width: 992px) {
							position: relative;
							width: 100%;
							left: 0;
							height: auto;
							padding: 20px 0 0;
							text-align: left;
							display: flex;
							flex-flow: inherit;
						}

						&::after {
							content: url('helpers/corner-red.svg');
							width: 35px;
							height: 35px;
							display: block;
							position: absolute;
							top: -35px;
							left: -1px;
							@media only screen and (max-width: 992px) {
								display: none;
							}
						}
						& > a {
							padding: 1.25rem 2.5rem;
							border-radius: 100px;
							font-weight: 600;
							color: black;
							background: white;
							transition: all ease 0.2s;
							font-size: 1.125rem;
							&:hover {
								transform: translateY(-5px);
								box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
							}
						}
					}
				}
				&.labs {
					width: 25%;
					padding: 50px;
					background: url('homepage/intro/labs.jpg');
					background-position: center center;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 2.175rem;
					@media only screen and (max-width: 992px) {
						width: calc(100% - 100px);
					}
					& > h3 {
						font-size: 2.25rem;
						margin-bottom: 10px;
						font-weight: 600;
					}
					& > a {
						margin: 9.188rem 0 0 0;
						padding: 1.25rem 2.5rem;
						border-radius: 100px;
						font-weight: 600;
						color: black;
						background: white;
						transition: all ease 0.2s;
						&:hover {
							transform: translateY(-5px);
							box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
						}
					}
				}
				&.image-products {
					position: relative;
					width: 40%;
					height: 26.3125rem;
					text-align: center;
					background-image: url('/homepage/intro/about.png');
					background-repeat: no-repeat;
					background-position: center center;
					background-size: cover;
					border-radius: 2.175rem;
					z-index: 0;
					@media only screen and (max-width: 992px) {
						display: none;
					}
					& > .left-right {
						position: absolute;
						left: -1px;
						bottom: 213px;
					}
					& > .bottom-right {
						position: absolute;
						left: 32.8%;
						bottom: -1px;
					}
					&::after {
						content: ' ';
						position: absolute;
						bottom: 0;
						left: 0;
						width: 33%;
						height: 214px;
						background: white;
						border-top-right-radius: 35px;
					}
				}
			}
		}
	}
</style>
